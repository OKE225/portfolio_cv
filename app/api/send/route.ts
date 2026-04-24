import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_PASS!,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const trimmedName = (name || "").trim();
  const normalizedEmail = (email || "").trim().toLowerCase();
  const trimmedMessage = (message || "").trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof name !== "string") {
    return NextResponse.json(
      { error: "Niepoprawny typ imienia!" },
      { status: 400 },
    );
  }

  if (!trimmedName) {
    return NextResponse.json({ error: "Imię jest wymagane!" }, { status: 400 });
  }

  if (trimmedName.length > 100) {
    return NextResponse.json(
      { error: "Imię jest zbyt długie!" },
      { status: 400 },
    );
  }

  if (typeof email !== "string") {
    return NextResponse.json(
      { error: "Niepoprawny typ emaila!" },
      { status: 400 },
    );
  }

  if (!normalizedEmail) {
    return NextResponse.json(
      { error: "Email jest wymagany!" },
      { status: 400 },
    );
  }

  if (!emailRegex.test(normalizedEmail)) {
    return NextResponse.json(
      { error: "Niepoprawny format emaila!" },
      { status: 400 },
    );
  }

  if (normalizedEmail.length > 255) {
    return NextResponse.json(
      { error: "Email jest zbyt długi!" },
      { status: 400 },
    );
  }

  if (typeof message !== "string") {
    return NextResponse.json(
      { error: "Niepoprawny typ wiadomości!" },
      { status: 400 },
    );
  }

  if (!trimmedMessage) {
    return NextResponse.json(
      { error: "Wiadomość jest wymagana!" },
      { status: 400 },
    );
  }

  if (trimmedMessage.length > 5000) {
    return NextResponse.json(
      { error: "Wiadomość jest zbyt długa!" },
      { status: 400 },
    );
  }

  const escapedMessage = trimmedMessage
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER!,
      to: process.env.GMAIL_USER!,
      replyTo: normalizedEmail,
      subject: `Wiadomość od ${trimmedName} (Formularz z portfolio)`,
      html: `<p>Od: ${normalizedEmail}</p><p>${escapedMessage}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Błąd wysyłki, spróbuj ponownie" },
      { status: 500 },
    );
  }
}
