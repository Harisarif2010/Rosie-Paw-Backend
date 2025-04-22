import nodemailer, { createTransport } from "nodemailer";
import { ForgotPassword } from "../emailTemplates/ForgotPassword";

var transporter = createTransport({
  //@ts-ignore
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    pass: process.env.SMTP_PASSWORD,
    user: process.env.SMTP_EMAIL,
  },
});

export const sendOTP = async (email, code) => {
  try {
    let html = ForgotPassword.replace(`{{otp}}`, code.toString());
    let emailObj = {
      to: email,
      from: process.env.SMTP_EMAIL,
      subject: "Password Reset OTP",
      html: html,
    };
    await transporter.sendMail(emailObj);
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
};