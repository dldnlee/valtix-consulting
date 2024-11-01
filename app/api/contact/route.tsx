import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request : NextRequest) {

    const username = process.env.EMAIL_USERNAME;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const number = formData.get('number')
    const message = formData.get('message')

    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
          user: username,
          pass: password
        }
    });

    try {

      const mail = await transporter.sendMail({
          from: username,
          to: myEmail,
          replyTo: email,
          subject: `New Possible Client, ${name}`,
          html: `
          <h3>Name: ${name} </h3>
          <h3>Email: ${email} </h3>
          <h3>PhoneNumber: ${message} </h3>
          <h3>Message: ${message} </h3>
          `,
      })

      return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 })
    }


}