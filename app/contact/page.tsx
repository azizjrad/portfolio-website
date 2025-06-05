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

export default function Contact() {
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
          message: "Thank you for your message! I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-teal-400 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float transition-colors duration-300"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float transition-colors duration-300"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-r from-teal-300 to-purple-300 dark:from-teal-400 dark:to-purple-400 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-15 dark:opacity-8 animate-float transition-colors duration-300"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full border border-teal-200/50 dark:border-teal-400/30 backdrop-blur-sm mb-6 transition-colors duration-300">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300 transition-colors duration-300">
                💌 Let's Connect
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
              Get In{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 dark:from-teal-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent transition-colors duration-300">
                  Touch
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-purple-500 dark:from-teal-300 dark:to-purple-400 rounded-full transition-colors duration-300"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, I'd
              love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className="animate-slide-up">
              {/* Main Contact Card */}
              <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-400/50 p-8 mb-8 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 dark:from-teal-400/10 dark:via-transparent dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/20 transition-colors duration-300">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
                      Let's Connect
                    </h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-200 mb-8 leading-relaxed transition-colors duration-300">
                    I'm currently available for freelance work and full-time
                    opportunities. Feel free to reach out through any of the
                    channels below.
                  </p>

                  <div className="space-y-6">
                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 dark:hover:from-teal-900/50 dark:hover:to-teal-800/50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/20 group-hover/item:scale-110 transition-all duration-300">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1 transition-colors duration-300">
                          Email
                        </p>
                        <a
                          href="mailto:aziz.jrad@esen.tn"
                          className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium"
                        >
                          aziz.jrad@esen.tn
                        </a>
                      </div>
                    </div>

                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 dark:hover:from-purple-900/50 dark:hover:to-purple-800/50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 dark:shadow-purple-400/20 group-hover/item:scale-110 transition-all duration-300">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1 transition-colors duration-300">
                          Phone
                        </p>
                        <a
                          href="tel:+21695650081"
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                        >
                          (216) 95 650 081
                        </a>
                      </div>
                    </div>

                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50 dark:hover:from-teal-900/30 dark:hover:to-purple-900/30 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-purple-500 dark:from-teal-400 dark:to-purple-400 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/20 group-hover/item:scale-110 transition-all duration-300">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1 transition-colors duration-300">
                          Location
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
                          Nabeul, Tunisia
                        </p>
                      </div>
                    </div>

                    <div className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 dark:hover:from-green-900/50 dark:hover:to-green-800/50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-green-500/25 dark:shadow-green-400/20 group-hover/item:scale-110 transition-all duration-300">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1 transition-colors duration-300">
                          Response Time
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
                          Usually within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800/50 dark:via-slate-800/80 dark:to-slate-800/50 rounded-3xl p-8 shadow-xl dark:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-purple-600/5 to-teal-600/5 dark:from-teal-400/10 dark:via-purple-400/10 dark:to-teal-400/10 rounded-3xl transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 dark:shadow-purple-400/20 transition-colors duration-300">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
                      Follow Me
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href="https://github.com/azizjrad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Github size={24} className="relative z-10" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/azizjrad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Linkedin size={24} className="relative z-10" />
                    </a>
                    <a
                      href="https://x.com/AzJrad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-300 dark:hover:border-sky-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-sky-200/50 dark:from-sky-900/30 dark:to-sky-800/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <X size={24} className="relative z-10" />
                    </a>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-purple-50 dark:from-teal-900/30 dark:to-purple-900/30 rounded-2xl border border-teal-200/50 dark:border-teal-700/50 transition-colors duration-300">
                    <p className="text-sm text-slate-600 dark:text-slate-300 text-center transition-colors duration-300">
                      💡 <strong>Pro tip:</strong> Follow me on GitHub to see my
                      latest projects and contributions!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="animate-slide-up">
              <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300/50 dark:hover:border-purple-400/50 p-8 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 dark:from-purple-400/10 dark:via-transparent dark:to-teal-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 dark:shadow-purple-400/20 transition-colors duration-300">
                      <Send className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
                      Send Me a Message
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group/input">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-300"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700/70 group-hover/input:shadow-md text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="group/input">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-300"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700/70 group-hover/input:shadow-md text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="group/input">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-300"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700/70 group-hover/input:shadow-md text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="group/input">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-300"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300 resize-none bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700/70 group-hover/input:shadow-md text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-xl border transition-colors duration-300 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-300"
                            : "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-300"
                        }`}
                      >
                        <div className="flex items-center">
                          {submitStatus.type === "success" ? (
                            <div className="w-5 h-5 rounded-full bg-green-500 dark:bg-green-400 flex items-center justify-center mr-3">
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
                            <div className="w-5 h-5 rounded-full bg-red-500 dark:bg-red-400 flex items-center justify-center mr-3">
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
                      className={`group/btn relative w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-500 dark:to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20 transform hover:-translate-y-1 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-teal-600 dark:from-teal-300 dark:via-purple-400 dark:to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-x bg-size-300%"></div>

                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 relative z-10"></div>
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 relative z-10" size={20} />
                          <span className="relative z-10">Send Message</span>
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
            <div className="relative bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 dark:from-teal-500 dark:via-purple-500 dark:to-teal-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl dark:shadow-3xl bg-size-300% animate-gradient-x transition-colors duration-300">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 rounded-3xl transition-colors duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 dark:bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-300">
                    <Calendar className="text-white" size={32} />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start a Project?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  I'm always excited to work on new and challenging projects.
                  Let's discuss how we can bring your ideas to life and create
                  something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <a
                    href="mailto:aziz.jrad@esen.tn"
                    className="group inline-flex items-center px-8 py-4 bg-white/20 dark:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 dark:hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20 dark:border-white/30 hover:border-white/40 dark:hover:border-white/50"
                  >
                    <Mail
                      className="mr-2 group-hover:scale-110 transition-transform duration-300"
                      size={20}
                    />
                    Start a Conversation
                  </a>
                  <a
                    href="tel:+21695650081"
                    className="group inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 border-2 border-white/30 dark:border-white/40 hover:border-white/50 dark:hover:border-white/60 transform hover:-translate-y-1"
                  >
                    <Phone
                      className="mr-2 group-hover:scale-110 transition-transform duration-300"
                      size={20}
                    />
                    Call Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
