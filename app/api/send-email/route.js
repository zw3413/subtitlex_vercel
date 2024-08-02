import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { target, subject, content } = await request.json();

  // Create a transporter using Google's SMTP server
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: target,
      subject: subject,
      text: content,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
