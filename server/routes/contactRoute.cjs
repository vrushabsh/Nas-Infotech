const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router(); // Notice the change here!

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Since server.cjs mounts this file at "/api/contact", 
// this route path becomes the root "/" handler
router.post("/", (req, res) => {
  const { firstName, lastName, phoneNumber, emailAddress, message } = req.body;

  if (!firstName || !lastName || !phoneNumber || !emailAddress) {
    return res.status(400).json({ message: "Required fields are missing." });
  }

  const mailOptions = {
    from: emailAddress,
    to: process.env.EMAIL_USER,
    subject: `Nas-Infotech Form: New Contact Lead from ${firstName} ${lastName}`,
    text: `
      You have received a new submission from your website contact page.
      
      --- Lead Details ---
      Name: ${firstName} ${lastName}
      Phone Number: ${phoneNumber}
      Email Address: ${emailAddress}
      
      --- Message ---
      ${message || "No message provided."}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Nodemailer Error:", error);
      return res.status(500).json({ message: "Failed to send email." });
    }
    console.log("Contact email sent successfully:", info.response);
    return res.status(200).json({ message: "Email sent successfully!" });
  });
});

module.exports = router; // Export the router so server.cjs can use it