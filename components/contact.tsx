"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { notification } from "antd"

const contactSchema = z.object({
  fullname: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Let's Talk!", "Get in Touch", "Hire Me Today 🚀"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
      })
      return () => typed.destroy()
    }
  }, [])

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data)
    notification.success({
      message: "Message Sent",
      description: "Thank you! We will contact you soon.",
    })
    reset()
  }

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 my-12 relative flex justify-center">
      {/* Background Blur Circles */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl -top-20 -right-32" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl bottom-0 -left-32" />

      {/* Contact Card A4 Style */}
      <div className="relative w-full max-w-3xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition p-6 md:p-10">
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
              <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>
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
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
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
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <Button
              type="submit"
              className="w-full md:w-auto px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
