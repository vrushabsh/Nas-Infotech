const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  port:587,
  secure:false,
  service: "gmail",
  auth: {   
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// This route handles the "Request Tech Architecture Proposal" submission
router.post("/", (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  if (!firstName || !lastName || !phone || !email) {
    return res.status(400).json({ message: "Required fields are missing." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nas-Infotech Form: New Architecture Proposal Request from ${firstName} ${lastName}`,
    text: `
      You have received a new Project Architecture Proposal request.
      
      --- Lead Details ---
      Name: ${firstName} ${lastName}
      Phone Number: ${phone}
      Email Address: ${email}
      
      --- Project Scope & Requirements ---
      ${message || "No technical details provided."}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Nodemailer Error:", error);
      return res.status(500).json({ message: "Failed to send email." });
    }
    console.log("Home form email sent successfully:", info.response);
    return res.status(200).json({ message: "Email sent successfully!" });
  });
});

module.exports = router;