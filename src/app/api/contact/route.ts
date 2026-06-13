import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ──────────────────────────────────────────────────────────────
// Nodemailer transporter — uses Gmail SMTP via App Password.
// Set the following env vars in Vercel (or .env.local locally):
//   SMTP_USER  → your Gmail address  (e.g. shivam@gmail.com)
//   SMTP_PASS  → your Gmail App Password  (16-char, no spaces)
//   OWNER_EMAIL → inbox that receives contact messages (can be same as SMTP_USER)
// ──────────────────────────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // ── Validation ──────────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials are not configured.");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // ── 1. Notification email → owner ────────────────────────
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf9f6; border-radius: 12px; overflow: hidden; border: 1px solid #e2d9c8;">
          <div style="background: #2d5a27; padding: 28px 32px;">
            <h1 style="color: #faf9f6; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.05em;">
              📬 New Contact Message
            </h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 80px; vertical-align: top; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 8px 0; color: #2c1a10; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 8px 0; color: #2c1a10; font-size: 15px;"><a href="mailto:${email}" style="color: #2d5a27;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                <td style="padding: 8px 0; color: #2c1a10; font-size: 15px;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e2d9c8; margin: 20px 0;" />
            <p style="color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Message</p>
            <div style="background: #fff; border-radius: 8px; padding: 16px 20px; border: 1px solid #e2d9c8;">
              <p style="color: #2c1a10; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 20px 0 0; color: #999; font-size: 12px;">Sent at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        </div>
      `,
    });

    // ── 2. Auto-reply → sender ───────────────────────────────
    await transporter.sendMail({
      from: `"Shivam Kumar" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name.split(" ")[0]}! 👋`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf9f6; border-radius: 12px; overflow: hidden; border: 1px solid #e2d9c8;">
          <div style="background: #2d5a27; padding: 28px 32px;">
            <h1 style="color: #faf9f6; margin: 0; font-size: 20px; font-weight: 600;">
              Hey ${name.split(" ")[0]}, got your message! 🎉
            </h1>
          </div>
          <div style="padding: 32px; color: #2c1a10; font-size: 15px; line-height: 1.8;">
            <p>Thank you for getting in touch. I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
            <p>Here's a quick summary of what you sent:</p>
            <div style="background: #fff; border-radius: 8px; padding: 16px 20px; border: 1px solid #e2d9c8; margin: 12px 0;">
              <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</p>
              <p style="margin: 6px 0 12px; font-size: 15px; color: #2c1a10;">${subject}</p>
              <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Your Message</p>
              <p style="margin: 6px 0 0; font-size: 14px; color: #555; white-space: pre-wrap;">${message}</p>
            </div>
            <p>In the meantime, feel free to check out my work on <a href="https://github.com/lucky-arya" style="color: #2d5a27; font-weight: 600;">GitHub</a>.</p>
            <p style="margin-bottom: 0;">Talk soon,<br/><strong>Shivam Kumar</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
