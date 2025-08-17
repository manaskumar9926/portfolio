'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  const projects = [
    { name: "FlowerAura", image: "/images/1.png", url: "https://www.floweraura.com" },
    { name: "Livspace", image: "/images/2.png", url: "https://www.livspace.com" },
    { name: "Ugaoo", image: "/images/3.png", url: "https://www.ugaoo.com" },
    { name: "Amoeba Productions", image: "/images/4.png", url: "https://www.amoebaproductions.in" },
    { name: "PayRentz", image: "/images/5.png", url: "https://www.payrentz.com" },
    { name: "Reliance Elysium", image: "/images/6.png", url: "https://relianceelysium.keyonprop.com" },
  ]

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 my-8 bg-white rounded-2xl shadow-xl p-6">
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
              {/* Scrollable image container with hidden scrollbar */}
              <div className="relative w-full h-64 overflow-y-scroll hide-scrollbar">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={1000}
                  className="object-top w-full"
                  draggable={false}
                />
              </div>

              <div className="py-3 px-4 text-center">
                <h2 className="font-semibold text-sm text-slate-700">{project.name}</h2>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Work
