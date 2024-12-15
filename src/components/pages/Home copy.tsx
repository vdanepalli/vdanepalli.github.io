'use client';

import { useState } from "react";

export default function Home() {

  const [hovered, setHovered] = useState(false);

  return (
    <section id="about" className="py-16 bg-black text-white mt-10">

      <section className="py-16 bg-black text-white mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-300">
          I am Vinay Danepalli, a Senior Software Engineer passionate about building innovative solutions to solve real-world challenges.
        </p>
      </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Name and Title */}
        <p className="text-lg font-medium text-gray-400 mb-6">
          Experienced Senior Software Engineer | Full-Stack Developer | Data Enthusiast
        </p>

        {/* Short Bio */}
        <p className="text-gray-300 leading-relaxed">
          I am a Senior Software Engineer with 4+ years of expertise in designing, developing,
          and deploying innovative technical solutions for diverse business needs. My expertise
          lies in building scalable applications, reliable data pipelines, and user-friendly interfaces
          using cutting-edge technologies. Passionate about leveraging technology to drive impact.
        </p>

        {/* Contact Info */}
        <div className="mt-8">
          <p className="text-gray-400 mb-1">Address: Corpus Christi, TX - 78412</p>
          <p className="text-gray-400 mb-1">
            Email: <a href="mailto:vdanepalli@gmail.com" className="text-vintage-accent underline">vdanepalli@gmail.com</a>
          </p>
          <p className="text-gray-400 mb-1">
            Phone: <a href="tel:+16506138990" className="text-vintage-accent underline">(650) 613-8990</a>
          </p>
          <p className="text-gray-400 mb-1">
            LinkedIn: <a href="https://linkedin.com/in/vdanepalli" className="text-vintage-accent underline">linkedin.com/in/vdanepalli</a>
          </p>
          <p className="text-gray-400">
            GitHub: <a href="https://github.com/vdanepalli" className="text-vintage-accent underline">vdanepalli.github.io</a>
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="mt-10">
          <a
            href="/resume/VinayDanepalli.pdf"
            download="Vinay_Danepalli_Software_Engineer.pdf"
            className="inline-block bg-vintage-accent text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-vintage-accent/90 transition-transform transform-gpu hover:scale-125 duration-500 underline w-[220px] text-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "Take a Peek!" : "Download Resume!"}
          </a>
        </div>
      </div>
    </section>
  );
}
