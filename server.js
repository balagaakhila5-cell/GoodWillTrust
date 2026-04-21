const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post("/send-sms", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const smsBody = `
New Contact Form Message

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
`;

    await client.messages.create({
      body: smsBody,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.TO_PHONE_NUMBER,
    });

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});