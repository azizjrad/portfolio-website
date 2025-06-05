// EmailJS Configuration
// This is an alternative to server-side email sending

export const EMAILJS_CONFIG = {
  // You need to get these from https://emailjs.com/
  PUBLIC_KEY: "j0xFly-S0XU_lbh8B",
  SERVICE_ID: "service_2isz918",
  TEMPLATE_ID: "template_c71acml",
};

// EmailJS setup instructions:
// 1. Go to https://emailjs.com/
// 2. Create a free account
// 3. Add an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key, Service ID, and Template ID
// 6. Replace the values above

export const sendEmailViaEmailJS = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // This would be implemented when EmailJS is configured
  throw new Error("EmailJS not configured yet");
};
