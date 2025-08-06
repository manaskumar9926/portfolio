'use client'

import React, { useRef, useEffect } from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null)

  // ✅ PDF Generate
  const generatePDF = async () => {
    if (!resumeRef.current) return

    window.scrollTo(0, 0)
    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    })

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF("p", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save("Manas_Kumar_Resume.pdf")
  }

  // ✅ Page load hone ke baad auto download
  useEffect(() => {
    const timer = setTimeout(() => generatePDF(), 1000) // 1 sec delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-10 flex justify-center">
      <div
        ref={resumeRef}
        className="relative w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-10
                   border border-white/30 backdrop-blur-xl overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "900px", // A4 width
          aspectRatio: "210/297", // A4 ratio
        }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-60 -z-10" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-200/30 blur-3xl -top-20 -right-20 -z-10" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-200/30 blur-3xl bottom-0 -left-20 -z-10" />

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b pb-6">
          {/* Profile Image */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-60 group-hover:opacity-100 transition" />
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/images/photo.jpeg"
                  alt="Manas Kumar"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Manas Kumar</h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Fullstack Web Developer | MERN | Next.js | AWS
              </p>
              <div className="flex justify-center sm:justify-start gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/manas-kumar-6a831b1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill text-blue-600 text-2xl hover:scale-110 transition" />
                </a>
                <a href="mailto:kumarmanas2001@gmail.com">
                  <i className="ri-mail-fill text-red-500 text-2xl hover:scale-110 transition" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-fill text-gray-700 text-2xl hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Email", value: "kumarmanas2001@gmail.com", icon: "ri-mail-line text-blue-500" },
            { label: "Phone", value: "+91 7294947294", icon: "ri-phone-line text-green-500" },
            { label: "Birthday", value: "07 July 2001", icon: "ri-cake-2-line text-pink-500" },
            { label: "Location", value: "Noida, India", icon: "ri-map-pin-line text-purple-500" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-xl shadow hover:shadow-md transition"
            >
              <i className={`${item.icon} text-xl`} />
              <div className="w-full">
                <span className="text-xs font-semibold text-gray-500">{item.label}</span>
                <p className="text-sm font-medium text-gray-700 break-words">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "JavaScript", "React.js", "Next.js", "Node.js",
              "MongoDB", "TailwindCSS", "Docker", "AWS Cloud"
            ].map(skill => (
              <div
                key={skill}
                className="group p-3 rounded-xl bg-white/70 border border-gray-100 
                           shadow hover:shadow-lg hover:-translate-y-1 transition flex items-center justify-center"
              >
                <span className="font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Work Experience</h2>
          <div className="space-y-4 text-gray-700 text-sm">
            <div>
              <h3 className="font-semibold text-base">Fullstack Web Developer @ Techsunset</h3>
              <small className="text-gray-500">2021 - 2024</small>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Developed full MERN stack websites with high performance</li>
                <li>Integrated REST APIs using Node.js & Express</li>
                <li>Created responsive UIs with React & Next.js</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Projects</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-sm font-medium">
            {[
              "Nurserylive", "Naadi Interiors", "Studio Avt",
              "Cube Decors", "Click2call", "Oh Yes World"
            ].map(project => (
              <div
                key={project}
                className="p-3 bg-gray-50 rounded-lg shadow hover:shadow-md transition text-center"
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
