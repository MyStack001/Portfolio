"use client"

import SectionWrapper from "../components/SectionWrapper"
import Button from "../components/Button"
import Image from "next/image"

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">

          <p className="text-sm font-semibold tracking-wide text-sky-600">
            Hi, I'm
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Shadrach Obaah
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 sm:text-2xl">
            Full-Stack Developer
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-600">
            I build modern, responsive web applications with clean
            frontend experiences, reliable backend systems, and scalable
            technologies that solve real-world problems.
          </p>

          {/* Primary Actions */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects">
              <Button>
                View My Work
              </Button>
            </a>

            <a href="#contact">
              <Button variant="ghost">
                Let's Talk
              </Button>
            </a>
          </div>

          {/* CV */}
          <a
            href="/resume/Shadrach_Obaah_Full_Stack_Product_Engineer_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block"
          >
            <Button variant="ghost">
              📄 Download CV
            </Button>
          </a>
        </div>

        {/* Profile Image */}
        <div className="relative shrink-0">

          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/30 to-indigo-400/30 blur-3xl" />

          {/* Glassmorphic image container */}
          <div className="relative overflow-hidden rounded-full border border-white/50 bg-white/60 p-2 shadow-1xl backdrop-blur-xl">
            <Image
              src="/profile.jpg"
              alt="Shadrach Obaah"
              width={280}
              height={280}
              priority
              className="h-56 w-56 rounded-full object-cover md:h-64 md:w-64"
            />
          </div>

        </div>

      </div>
    </SectionWrapper>
  )
}