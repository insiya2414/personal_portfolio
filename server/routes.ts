import "dotenv/config"; // or: require("dotenv").config(); if using CommonJS
import type { Express } from "express";
import { createServer, type Server } from "http";
// import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Please provide all required fields" });
      }
  
      // ✅ Dynamic import inside try block
      const nodemailerModule = await import("nodemailer");
      const nodemailer = nodemailerModule.default;
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `Portfolio Contact: ${name}`,
        text: message,
        replyTo: email,
      });
      
      
  
      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ success: false, message: "Failed to send email." });
    }
  });
  

  const httpServer = createServer(app);
  return httpServer;
}
