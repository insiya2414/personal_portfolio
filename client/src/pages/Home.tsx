import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 p-10">
        <div id="home" className="py-20">
          <h1 className="text-3xl font-bold mb-4">Insiya Raja Portfolio</h1>
          <p className="mb-4">Welcome to my portfolio website.</p>
          <Button>Test Button</Button>
        </div>
        
        <div id="about" className="py-20">
          <h2 className="text-2xl">About Section</h2>
        </div>
        
        <div id="skills" className="py-20">
          <h2 className="text-2xl">Skills Section</h2>
        </div>
        
        <div id="coursework" className="py-20">
          <h2 className="text-2xl">Coursework Section</h2>
        </div>
        
        <div id="projects" className="py-20">
          <h2 className="text-2xl">Projects Section</h2>
        </div>
        
        <div id="experience" className="py-20">
          <h2 className="text-2xl">Experience Section</h2>
        </div>
        
        <div id="activities" className="py-20">
          <h2 className="text-2xl">Activities Section</h2>
        </div>
        
        <div id="contact" className="py-20">
          <h2 className="text-2xl">Contact Section</h2>
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-6 mt-20">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Insiya Raja. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
