'use client'

import ChildrenInterface from '@/interfaces/children-interface'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import { FaDocker } from 'react-icons/fa'

const MainLayout: FC<ChildrenInterface> = ({ children }) => {
  const pathname = usePathname()

  const navLinks = [
    { href: '/resume', label: 'RESUME', icon: 'ri-file-text-line' },
    { href: '/work', label: 'PORTFOLIO', icon: 'ri-code-block' },
    { href: '/contact', label: 'CONTACT', icon: 'ri-book-3-line' },
  ]

  const skills = [
    { name: 'JavaScript', icon: 'ri-javascript-line' },
    { name: 'React.js', icon: 'ri-reactjs-line' },
    { name: 'Next.js', icon: 'ri-code-s-slash-line' },
    { name: 'Node.js', icon: 'ri-node-tree' },
    { name: 'MongoDB', icon: 'ri-database-2-line' },
    { name: 'TailwindCSS', icon: 'ri-palette-line' },
    { name: 'Docker', icon: FaDocker }, // React Icon
    { name: 'AWS Cloud', icon: 'ri-cloud-line' },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/images/header.jpeg"
          alt="Header"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl -top-20 -right-32 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl bottom-0 -left-32 animate-pulse" />
      </div>

      {/* Profile Card */}
      <section className="w-full max-w-screen-xl mx-auto px-4 pb-6">
        <header className="relative -mt-28 md:-mt-20 bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl grid lg:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition">
          {/* Left: Profile */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            <div className="relative group w-40">
              <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-60 group-hover:opacity-100 transition" />
              <Image
                alt="Manas Kumar"
                width={200}
                height={200}
                src="/images/photo.jpeg"
                className="relative rounded-[35px] border-4 border-white shadow-xl object-cover"
                priority
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Manas Kumar</h1>
              <p className="text-sm text-gray-600 mt-1">
                Fullstack Web Developer | MERN | Next.js | AWS
              </p>
              <div className="flex justify-center lg:justify-start gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/manas-kumar-6a831b1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill text-blue-600 text-2xl hover:scale-110 transition" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-fill text-gray-700 text-2xl hover:scale-110 transition" />
                </a>
                <a href="mailto:kumarmanas2001@gmail.com">
                  <i className="ri-mail-fill text-red-500 text-2xl hover:scale-110 transition" />
                </a>
              </div>
              <a
                href="/resume"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-lg animate-pulse hover:scale-105 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                label: 'EMAIL',
                value: 'kumarmanas2001@gmail.com',
                icon: 'ri-mail-line text-blue-500',
              },
              {
                label: 'PHONE',
                value: '+91 7294947294',
                icon: 'ri-phone-line text-green-500',
              },
              {
                label: 'BIRTHDAY',
                value: '07 July 2001',
                icon: 'ri-cake-2-line text-pink-500',
              },
              {
                label: 'LOCATION',
                value: 'Noida, India',
                icon: 'ri-map-pin-line text-purple-500',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <i className={`${item.icon} text-xl`} />
                <div>
                  <span className="text-xs font-semibold text-gray-500">
                    {item.label}
                  </span>
                  <p className="text-sm font-medium text-gray-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </header>
      </section>

      {/* Sidebar + Skills */}
      <section className="w-full max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-lg p-4">
          <ul className="flex lg:flex-col justify-center lg:justify-start gap-4">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`p-3 rounded-xl w-full transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <Link
                  href={link.href}
                  className="flex flex-col items-center gap-1 text-sm font-medium"
                >
                  <i className={`${link.icon} text-xl`} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Skills Section */}
        <div className="w-full relative bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl p-8 overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            MY SKILLS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative p-5 rounded-2xl backdrop-blur-xl bg-white/40 border border-white/30 
                  shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 
                  opacity-0 group-hover:opacity-20 blur-2xl transition" />
                <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                  {typeof skill.icon === 'string' ? (
                    <i className={`${skill.icon} text-3xl text-blue-500`} />
                  ) : (
                    <skill.icon className="text-3xl text-blue-500" /> // ✅ Docker color matched
                  )}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children */}
      <section className="w-full max-w-screen-xl mx-auto px-4 my-8">
        {children}
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917294947294"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>
    </>
  )
}

export default MainLayout
