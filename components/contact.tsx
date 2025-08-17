"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { message } from "antd";
import { motion } from "framer-motion";
import "@ant-design/v5-patch-for-react-19";

// ✅ Form Validation Schema
const contactSchema = z.object({
  fullname: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ✅ API Response Type
type ApiResponse = {
  success: boolean;
  message?: string;
};

const Contact = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ✅ Typed.js animation
  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Let's Talk!", "Get in Touch", "Hire Me Today 🚀"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  // ✅ Form Submit
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullname,
          email: data.email,
          message: data.message,
        }),
      });

      const result: ApiResponse = await res.json();

      if (result.success) {
        message.success("✅ Message Sent! I will connect with you shortly.");
        reset();
      } else {
        message.error(result.message || "❌ Failed to send your message.");
      }
    } catch {
      message.error("❌ Server error! Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6 rounded-3xl">
      {/* Rounded big background */}
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-6 md:p-10"
        >
          {/* Background Blur Circles */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl -top-20 -right-32" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl bottom-0 -left-32" />

          {/* Contact Card (same as your code) */}
          <div className="relative w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
              <span ref={typedRef}></span>
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
              Feel free to drop a message. I’ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Full Name */}
              <div className="col-span-1">
                <Input
                  placeholder="Full Name"
                  className="bg-white/80 border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-400"
                  {...register("fullname")}
                />
                {errors.fullname && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="col-span-1">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/80 border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-400"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="col-span-1 md:col-span-2">
                <Textarea
                  placeholder="Your message..."
                  rows={6}
                  className="bg-white/80 border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-400"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="col-span-1 md:col-span-2 flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="relative w-full md:w-auto px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
