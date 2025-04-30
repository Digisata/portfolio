"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import CustomEmail from "@/email/custom-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();
  const name = formData.get("name")?.toString();
  const honeypot = formData.get("honeypot");

  if (honeypot) {
    return { error: "Bot detected." };
  }

  // Validate
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Naufal Portfolio <onboarding@resend.dev>",
      to: "hnaufal123@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: email,
      react: React.createElement(CustomEmail, {
        name,
        message,
        email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
