'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  const projects = [
    { name: "Nurserylive", image: "/images/1.jpg", url: "https://nurserylive.com" },
    { name: "Naadi Interiors", image: "/images/2.jpg", url: "https://naadiinteriors.com" },
    { name: "Studio Avt", image: "/images/3.jpg", url: "https://www.studioavt.com" },
    { name: "Cube Decors", image: "/images/4.jpg", url: "https://cubedecors.com" },
    { name: "Click2Call", image: "/images/5.webp", url: "https://click2call.minavo.in" },
    { name: "Oh Yes World", image: "/images/6.jpg", url: "https://ohyesworld.com" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-4 rounded-2xl shadow bg-white">
      <h1 className="text-2xl font-bold text-slate-700 mb-6 text-center">My Work</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.li
            key={project.name}
            className="list-none rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-slate-50"
            whileHover={{ scale: 1.02 }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="relative w-full h-48 sm:h-40 md:h-36 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="py-3 px-4 text-center">
                <h2 className="font-semibold text-sm text-slate-700">{project.name}</h2>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Work
