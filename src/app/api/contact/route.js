import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const { name = "", email = "", subject = "", message = "", website = "" } =
      await request.json();

    // Honeypot fields are silently accepted so bots cannot adapt.
    if (website) return NextResponse.json({ message: "Message sent." });

    if (
      !name.trim() ||
      !emailPattern.test(email) ||
      subject.trim().length < 3 ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { error: "Please provide valid contact details." },
        { status: 400 },
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const ownerEmail = process.env.OWNER_EMAIL || emailUser;

    if (!emailUser || !emailPassword || !ownerEmail) {
      console.error("Contact email environment variables are not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email}\n\n${message.trim()}`,
      html: `
        <h2>New portfolio enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject.trim())}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replaceAll("\n", "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
