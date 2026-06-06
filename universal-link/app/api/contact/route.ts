import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, course, message } = body;

    if (!name || !email || !course) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("=== New Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Course:", course);
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "universallink.co@gmail.com",
        subject: `New Trial Booking: ${name} — ${course}`,
        html: `
          <h2>New Trial Class Booking</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "Not provided"}</p>
          <p><b>Course:</b> ${course}</p>
          <p><b>Message:</b> ${message || "No message"}</p>
          <p><b>Time:</b> ${new Date().toISOString()}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
