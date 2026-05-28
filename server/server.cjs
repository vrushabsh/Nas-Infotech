// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// // require("dotenv").config(); // This looks for your .env file and loads the variables

// const app = express();

// // Enable CORS so your React app (running on port 5173) can talk to this server (running on port 5000)
// app.use(cors());
// app.use(express.json());

// // // 1. Configure the SMTP Transporter using the secure environment variables
// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: process.env.EMAIL_USER, // Kept as process.env -> reads from your .env file
// //     pass: process.env.EMAIL_PASS, // Kept as process.env -> reads from your .env file
// //   },
// // });

// // // 2. Define the Form API Endpoint for your contact forms
// // app.post("/api/contact", (req, res) => {
// //   // Destructure the incoming data fields sent from your React form
// //   const { firstName, lastName, phoneNumber, emailAddress, message } = req.body;

// //   // Simple validation check
// //   if (!firstName || !lastName || !phoneNumber || !emailAddress) {
// //     return res.status(400).json({ message: "Required fields are missing." });
// //   }

// //   // 3. Define the Email Structure and Layout
// //   const mailOptions = {
// //     from: emailAddress, 
// //     to: process.env.EMAIL_USER, // Sends the email right to YOUR inbox
// //     subject: `Nas-Infotech Form: New Lead from ${firstName} ${lastName}`,
// //     text: `
// //       You have received a new submission from your website contact form.

// //       --- Lead Details ---
// //       Name: ${firstName} ${lastName}
// //       Phone Number: ${phoneNumber}
// //       Email Address: ${emailAddress}

// //       --- Message/Requirements ---
// //       ${message || "No message provided."}
// //     `,
// //   };

// //   // 4. Send the email
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.error("Nodemailer Error:", error);
// //       return res.status(500).json({ message: "Failed to send email layout." });
// //     }
// //     console.log("Email sent successfully:", info.response);
// //     return res.status(200).json({ message: "Email sent successfully!" });
// //   });
// // });

// // Start the server on Port 5000
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend mail server is running perfectly on port ${PORT}`);
// });


// New Code

const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "../.env" });

const contactRoute = require("./routes/contactRoute.cjs");
const homeRoute = require("./routes/homeRoute.cjs");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);
app.use("/api/home", homeRoute);

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend mail server running via Router on port ${PORT}`);
});