'use client'
const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sherwood39@ethereal.email",
    pass: "sTqDqyDrv4hPDCjXvw",
  },
});