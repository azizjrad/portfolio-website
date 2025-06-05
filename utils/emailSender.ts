// Email Service using EmailJS
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailService";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    console.log("📧 Sending email via EmailJS...");

    // Initialize EmailJS with the public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY); // Template parameters - matching EmailJS template variables
    const templateParams = {
      // Standard EmailJS variables
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: "aziz.jrad@esen.tn",
      to_name: "Aziz Jrad",
      reply_to: data.email,

      // Alternative variable names (in case template uses different names)
      name: data.name,
      email: data.email,
      user_name: data.name,
      user_email: data.email,
      sender_name: data.name,
      sender_email: data.email,
      contact_name: data.name,
      contact_email: data.email,

      // Additional useful fields
      timestamp: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    console.log("📤 Sending with parameters:", {
      from_name: templateParams.from_name,
      from_email: templateParams.from_email,
      subject: templateParams.subject,
      message: templateParams.message.substring(0, 100) + "...",
    });

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log("✅ Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("❌ EmailJS error:", error);
    return false;
  }
}
