const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Read email templates
const contactTemplate = fs.readFileSync(
  path.join(__dirname, "templates", "contact.html"),
  "utf8",
);
const simpleContactTemplate = fs.readFileSync(
  path.join(__dirname, "templates", "simple-contact.html"),
  "utf8",
);

// Helper function to replace placeholders in templates
function renderTemplate(template, data) {
  let rendered = template;
  for (const key in data) {
    rendered = rendered.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return rendered;
}

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Email service is running" });
});

// Contact form endpoint
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Render HTML template
    const htmlContent = renderTemplate(contactTemplate, {
      name,
      email,
      subject,
      message,
    });

    // Send email using Resend
    await resend.emails.send({
      from: process.env.FROM_EMAIL, // Verified sender email in Resend
      to: process.env.RECIPIENT_EMAIL, // Your email address where you want to receive messages
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: htmlContent,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Simplified contact form endpoint (name and message only)
app.post("/send-simple-email", async (req, res) => {
  try {
    const { name, message } = req.body;

    // Validate required fields
    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required" });
    }

    // Render HTML template
    const htmlContent = renderTemplate(simpleContactTemplate, {
      name,
      message,
    });

    // Send email using Resend
    await resend.emails.send({
      from: process.env.FROM_EMAIL, // Verified sender email in Resend
      to: process.env.RECIPIENT_EMAIL, // Your email address where you want to receive messages
      subject: `Simple Contact Form: Message from ${name}`,
      text: `
        Name: ${name}
        Message: ${message}
      `,
      html: htmlContent,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
