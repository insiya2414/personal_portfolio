import { useState, useEffect } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Get stored value from localStorage or use initialValue
  const getStoredValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // Update localStorage when storedValue changes
  const setValue = (value: T) => {
    try {
      // Allow value to be a function for setter pattern
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Save to state
      setStoredValue(valueToStore);
      
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      
      // Dispatch custom event for sharing across tabs
      window.dispatchEvent(new StorageEvent("storage", { key }));
    } catch (error) {
      console.error("Error setting localStorage key", error);
    }
  };

  // Update state if localStorage changes in another tab
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setStoredValue(getStoredValue());
      }
    };

    // Add event listener
    window.addEventListener("storage", handleStorageChange);
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}