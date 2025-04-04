import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a test SMTP transporter - in production, you'd use real credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "ethereal.user@ethereal.email",
      pass: process.env.EMAIL_PASS || "ethereal_pass",
    },
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields",
        });
      }
      
      // Email information
      const mailOptions = {
        from: email,
        to: "rajainsiya24@gmail.com", // Replace with your email
        subject: `Portfolio Contact: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New message from your portfolio website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };
      
      // Send email (in development this would just return test info)
      const info = await transporter.sendMail(mailOptions);
      
      // Return success response
      res.status(200).json({
        success: true,
        message: "Message sent successfully!",
        // For development testing
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info),
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  // Download resume endpoint
  app.get("/api/resume", (_req, res) => {
    // In a real implementation, this would serve the actual PDF file
    // For now, we'll just redirect to the static file
    res.redirect("/Insiya_Raja_Resume.pdf");
  });

  const httpServer = createServer(app);

  return httpServer;
}
