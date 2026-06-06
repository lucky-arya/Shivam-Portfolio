import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ──────────────────────────────────────────────
    // Option 1: Use a third-party email service
    // Uncomment and configure one of these:
    //
    // --- Resend (https://resend.com) ---
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <onboarding@resend.dev>",
    //   to: "hello@shivam.dev",
    //   subject: `[Portfolio] ${subject}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });
    //
    // --- Nodemailer (SMTP) ---
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: "hello@shivam.dev",
    //   subject: `[Portfolio] ${subject}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });
    // ──────────────────────────────────────────────

    // For now, log the submission (replace with email service above)
    console.log("📧 Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
