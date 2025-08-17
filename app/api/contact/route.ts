export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Debugging for Vercel Logs
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Loaded" : "Missing");
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

    // ✅ Nodemailer SMTP Transporter (More reliable than "service: gmail")
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // avoid TLS errors on Vercel
      },
    });

    // ✅ Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
        <hr/>
        <small>Portfolio Contact Form</small>
      `,
    });

    // ✅ Auto Reply to User
    await transporter.sendMail({
      from: `"Manas Kumar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 30px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <div style="background: linear-gradient(to right, #4f46e5, #3b82f6); padding: 20px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px;">Thank You for Reaching Out!</h1>
            </div>

            <div style="padding: 20px; color: #333;">
              <p>Hi <b>${name}</b>,</p>
              <p>Thank you for contacting me! I have received your message:</p>
              
              <div style="background-color:#f3f4f6; padding:15px; border-left:4px solid #3b82f6; margin: 15px 0; border-radius: 5px;">
                ${message}
              </div>

              <p>I appreciate you taking the time to reach out. I will connect with you shortly.</p>
              
              <p style="margin-top: 20px;">Best regards,</p>
              <p style="font-weight: bold; color:#4f46e5;">Manas Kumar</p>
            </div>

            <div style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#666;">
              <p>© ${new Date().getFullYear()} Manas Kumar | All rights reserved</p>
              <p>This is an automated response from my portfolio contact form.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent & reply emailed!",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Contact API Error:", error.message, error);
      return NextResponse.json(
        { success: false, message: "Server Error", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown Contact API Error:", error);
      return NextResponse.json(
        { success: false, message: "Server Error", details: "Unknown error" },
        { status: 500 }
      );
    }
  }
}
