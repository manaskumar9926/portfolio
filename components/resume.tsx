"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

const Resume = () => {
  useEffect(() => {
    // ✅ Auto download on page load
    const link = document.createElement("a")
    link.href = "/images/manas.pdf"
    link.download = "Manas_Kumar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* ✅ Responsive Resume Container */}
        <div
          className="bg-white shadow-xl border p-4 sm:p-8 mx-auto w-full max-w-[210mm] rounded-lg"
        >
          {/* Header */}
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold">MANAS KUMAR</h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-700">
              Web Development ■ Object Oriented Programming ■ Software Engineering ■ Project Management
            </p>
            <div className="mt-2 text-xs sm:text-sm text-gray-700 space-y-1">
              <p>📞 +91-9199402676 | ✉️ manastechsunset@gmail.com | 📍 India</p>
              <p>
                <a href="https://www.linkedin.com/in/manas-kumar-6a831b1a0/" className="text-blue-600">
                  LinkedIn
                </a>{" "}
                |{" "}
                <a href="https://www.ermanas.in/" className="text-blue-600">
                  ermanas.in
                </a>
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-xs sm:text-sm text-gray-800">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Education */}
              <div>
                <h2 className="font-bold border-b pb-1">Education</h2>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Bachelor of Technology (Computer Science & Engineering) from Quantum
                    University (2019 – 2023)
                  </li>
                </ul>
              </div>

              {/* Key Skills */}
              <div>
                <h2 className="font-bold border-b pb-1">Key Skills</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Requirement Gathering & Analysis</li>
                  <li>Coding / Programming</li>
                  <li>Software Development Methodologies</li>
                  <li>Object-Oriented Programming</li>
                  <li>Troubleshooting</li>
                  <li>Technology Consulting</li>
                  <li>Project Management</li>
                  <li>Stakeholder Management</li>
                  <li>Client Engagement</li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="font-bold border-b pb-1">Technical Skills</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.JS</li>
                  <li>Node.JS</li>
                  <li>Next.Js</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                  <li>AWS Cloud</li>
                </ul>
              </div>

              {/* Personal Snippet */}
              <div>
                <h2 className="font-bold border-b pb-1">Personal Snippet</h2>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Linguistic Skills
                    <ul className="list-disc list-inside ml-5">
                      <li>English</li>
                      <li>Hindi</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile Synopsis */}
              <div>
                <h2 className="font-bold border-b pb-1">Profile Synopsis</h2>
                <p className="mt-2 text-justify">
                  A highly motivated and detail-oriented Full-Stack Developer with hands-on
                  experience in building scalable and user-friendly web applications.
                  Proficient in JavaScript, React.js, Next.js, Node.js, MongoDB, and
                  TailwindCSS, with a strong focus on clean code practices and performance
                  optimization.
                </p>
                <p className="mt-2 text-justify">
                  Skilled in Docker for containerized deployments and AWS Cloud for hosting,
                  deployment, and security. Adept at designing and developing RESTful APIs,
                  managing databases, and implementing responsive UI/UX. Strong
                  problem-solving abilities with a passion for cloud-based solutions and
                  modern web technologies.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-bold border-b pb-1">Professional Experience</h2>
                <div className="mt-2 space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      Techsunset (Remote) - Full Stack Developer
                    </h3>
                    <p className="text-gray-500 text-xs">
                      Duration: March 2022 - Present (3.6 Years)
                    </p>
                    <p className="mt-1">Worked on multiple high-impact projects for clients:</p>
                    <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                      <li>
                        <strong>FlowerAura</strong> - Built dynamic product catalogue,
                        checkout, order tracking & backend features.
                      </li>
                      <li>
                        <strong>Livspace</strong> - Developed 3D design tool, secure
                        authentication, curated catalog, and dashboards.
                      </li>
                      <li>
                        <strong>Ugaoo</strong> - Built searchable plant catalog, delivery
                        scheduling, loyalty programs, and backend tools.
                      </li>
                      <li>
                        <strong>Amoeba Productions</strong> - Built event package listings,
                        booking module, dashboards, and gallery display.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h2 className="font-bold border-b pb-1">Soft Skills</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Critical Thinking</li>
                  <li>Innovative</li>
                  <li>Collaborative</li>
                  <li>Fast Learner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume
