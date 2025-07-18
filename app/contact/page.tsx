"use client";

import type React from "react";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  X,
  Send,
  MessageCircle,
  Calendar,
  Clock,
} from "lucide-react";
import { sendContactEmail } from "../../utils/emailSender";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear any previous status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const success = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (success) {
        setSubmitStatus({
          type: "success",
          message: t("successMessage"),
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: t("errorMessage"),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("networkError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements - Home Page Style */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating geometric shapes - moving like stars */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-teal-500 rounded-full animate-float opacity-60"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-500 rotate-45 animate-drift opacity-40"
          style={{ animationDelay: "1s", animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-spiral opacity-50"
          style={{ animationDelay: "3s", animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full animate-cosmic opacity-30"
          style={{ animationDelay: "5s", animationDuration: "25s" }}
        ></div>

        {/* Additional moving stars with varied animations */}
        <div
          className="absolute top-1/2 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle opacity-70"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-orbit opacity-50"
          style={{ animationDelay: "4s", animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-starfield opacity-60"
          style={{ animationDelay: "6s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-cosmic opacity-40"
          style={{ animationDelay: "1.5s", animationDuration: "18s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-24 w-2 h-2 bg-orange-400 rounded-full animate-twinkle opacity-80"
          style={{ animationDelay: "3.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/4 w-6 h-6 bg-violet-400 rounded-full animate-spiral opacity-35"
          style={{ animationDelay: "7s", animationDuration: "14s" }}
        ></div>

        {/* Additional cosmic elements */}
        <div
          className="absolute top-16 left-1/3 w-3 h-3 bg-rose-400 rounded-full animate-drift opacity-45"
          style={{ animationDelay: "2.5s", animationDuration: "22s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-4 h-4 bg-amber-400 rounded-full animate-orbit opacity-55"
          style={{ animationDelay: "4.5s", animationDuration: "16s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 w-2 h-2 bg-lime-400 rounded-full animate-starfield opacity-65"
          style={{ animationDelay: "6.5s", animationDuration: "9s" }}
        ></div>
        <div
          className="absolute bottom-1/2 right-16 w-5 h-5 bg-sky-400 rounded-full animate-cosmic opacity-40"
          style={{ animationDelay: "8s", animationDuration: "28s" }}
        ></div>
        <div
          className="absolute top-3/4 left-20 w-3 h-3 bg-fuchsia-400 rounded-full animate-spiral opacity-50"
          style={{ animationDelay: "1.8s", animationDuration: "11s" }}
        ></div>

        {/* Twinkling stars with varied sizes */}
        <div
          className="absolute top-32 right-16 w-1 h-1 bg-white rounded-full animate-twinkle opacity-90"
          style={{ animationDelay: "0.5s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute bottom-48 left-32 w-1 h-1 bg-white rounded-full animate-twinkle opacity-80"
          style={{ animationDelay: "2.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-48 left-1/2 w-1 h-1 bg-white rounded-full animate-twinkle opacity-70"
          style={{ animationDelay: "4.5s", animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-24 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle opacity-85"
          style={{ animationDelay: "6.5s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 left-24 w-1 h-1 bg-white rounded-full animate-twinkle opacity-75"
          style={{ animationDelay: "1.2s", animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-32 w-1 h-1 bg-white rounded-full animate-twinkle opacity-95"
          style={{ animationDelay: "3.8s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle opacity-65"
          style={{ animationDelay: "5.2s", animationDuration: "2.2s" }}
        ></div>
        <div
          className="absolute bottom-16 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle opacity-88"
          style={{ animationDelay: "7.5s", animationDuration: "3.8s" }}
        ></div>

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 bg-slate-900/5 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #475569 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>
      </div>

      <div className="pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 animate-fade-in">
            {/* Removed Let's Connect badge */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 transition-colors duration-300">
              {t("contactTitle")}{" "}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              {t("contactPageDescription")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className="animate-slide-up">
              {/* Main Contact Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-teal-300/50 p-8 mb-8 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 transition-colors duration-300">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 transition-colors duration-300">
                      {t("letsConnect")}
                    </h2>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed transition-colors duration-300">
                    {t("availableForWork")}
                  </p>

                  <div className="space-y-6">
                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 group-hover/item:scale-110 transition-all duration-300">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 mb-1 transition-colors duration-300">
                          {t("emailLabel")}
                        </p>
                        <a
                          href="mailto:aziz.jrad@esen.tn"
                          className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
                        >
                          aziz.jrad@esen.tn
                        </a>
                      </div>
                    </div>

                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 group-hover/item:scale-110 transition-all duration-300">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 mb-1 transition-colors duration-300">
                          {t("phoneLabel")}
                        </p>
                        <a
                          href="tel:+21695650081"
                          className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                        >
                          (216) 95 650 081
                        </a>
                      </div>
                    </div>

                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 group-hover/item:scale-110 transition-all duration-300">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 mb-1 transition-colors duration-300">
                          {t("locationLabel")}
                        </p>
                        <p className="text-slate-600 font-medium transition-colors duration-300">
                          {t("locationValue")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-200/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-purple-600/5 to-teal-600/5 rounded-3xl transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 transition-colors duration-300">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300">
                      {t("followMe")}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-6 justify-items-center">
                    <a
                      href="https://github.com/azizjrad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-slate-200/50 hover:border-slate-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-slate-200/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Github size={24} className="relative z-10" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/azizjrad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-slate-200/50 hover:border-blue-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Linkedin size={24} className="relative z-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="animate-slide-up">
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-purple-300/50 p-8 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 transition-colors duration-300">
                      <Send className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 transition-colors duration-300">
                      {t("sendMeMessage")}
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group/input">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-300"
                        >
                          {t("nameLabel")} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white group-hover/input:shadow-md text-slate-800 placeholder:text-slate-500"
                          placeholder={t("yourName")}
                        />
                      </div>
                      <div className="group/input">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-300"
                        >
                          {t("emailLabel")} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white group-hover/input:shadow-md text-slate-800 placeholder:text-slate-500"
                          placeholder={t("yourEmail")}
                        />
                      </div>
                    </div>

                    <div className="group/input">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-300"
                      >
                        {t("subjectLabel")} *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white group-hover/input:shadow-md text-slate-800 placeholder:text-slate-500"
                        placeholder={t("subjectPlaceholder")}
                      />
                    </div>

                    <div className="group/input">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-300"
                      >
                        {t("messageLabel")} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm hover:bg-white group-hover/input:shadow-md text-slate-800 placeholder:text-slate-500"
                        placeholder={t("messagePlaceholder")}
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-xl border transition-colors duration-300 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 border-green-200 text-green-800"
                            : "bg-red-50 border-red-200 text-red-800"
                        }`}
                      >
                        <div className="flex items-center">
                          {submitStatus.type === "success" ? (
                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mr-3">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                          <p className="font-medium">{submitStatus.message}</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group/btn relative w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-x bg-size-300%"></div>

                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 relative z-10"></div>
                          <span className="relative z-10">{t("sending")}</span>
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 relative z-10" size={20} />
                          <span className="relative z-10">
                            {t("sendMessage")}
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-16 animate-slide-up">
            <div className="relative bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl bg-size-300% animate-gradient-x transition-colors duration-300">
              <div className="absolute inset-0 bg-black/10 rounded-3xl transition-colors duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-300">
                    <Calendar className="text-white" size={32} />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("readyToStart")}
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  {t("excitedToWork")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button
                    onClick={() => {
                      document.getElementById("name")?.focus();
                      document.getElementById("name")?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20 hover:border-white/40"
                  >
                    <Mail
                      className="mr-2 group-hover:scale-110 transition-transform duration-300"
                      size={20}
                    />
                    {t("startConversation")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
