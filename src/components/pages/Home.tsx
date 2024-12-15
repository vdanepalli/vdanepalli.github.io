'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Typewriter } from 'react-simple-typewriter';
import { launchFireworks } from '../fireworks'; // Import confetti function
import { fireConfetti } from '../confetti'
import LoadingNotification from '../LoadingNotification';
// import { getImagePaths } from '../getImagePaths';
// import { GetStaticProps } from 'next';




export default function Home() {

  const images = [
    '/images/vd/corpus_beach_sunset.png', // Replace with your actual image paths
    '/images/vd/corpus_downtown.png',
    '/images/vd/corpus_leopard_st.png',
    '/images/vd/corpus_sunset.png',
    '/images/vd/denton_random.png',
    '/images/vd/my_lil_adventure.png',
    '/images/vd/my_uni.png',
    '/images/vd/niha_college.png',

  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const playSound = () => {
    const audio = new Audio('/sounds/coffee.mp3'); // Replace with your sound file
    audio.play();
  };

  const handleCoffeeClick = () => {
    triggerConfetti();
    playSound();
    setShowMessage(true);

    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  const rewardDownloadClick = () => {
    launchFireworks();
    fireConfetti();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <LoadingNotification />

    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 transition-opacity duration-1000">
          <Image
            src={images[currentImage]}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-vintage-accent mb-4">
            Hi, I’m Vinay Danepalli
          </h1>

          {/* Dynamic Typing Effect */}
          <p className="text-base md:text-2xl  text-vintage-accent max-w-xl mb-6">
            <span>
              <Typewriter
                words={[
                  'Software Developer',
                  'Problem Solver',
                  'Tech Enthusiast',
                  '3D Printing Hobbyist',
                  'Lifelong Learner',
                  'Your Next Collaborator',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-6">
            Your team is a rocket ship—ready to take off. I’m here to make sure you’ve got the fuel, navigation, and a co-pilot who’s as driven as you are.
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-6">
            Problem Solver. Innovator. Your Next Collaborator. Let’s grab a coffee (virtually or in person) and explore how I can add value to your team. Let’s make the next big leap together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-vintage-accent text-black font-bold py-3 px-6 rounded-lg shadow hover:bg-vintage-accent/90 transition-transform transform hover:scale-105"
            >
              Let’s Chat
            </Link>
            <Link
              href="#projects"
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              View My Work
            </Link>
            {/* <a
              href="/resume.pdf"
              download
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Download Resume
            </a> */}

            {/* Download Resume Button */}
            <div className="">
              <a
                href="/resume/VinayDanepalli.pdf"
                download="Vinay_Danepalli_I’ll_Bring_Him_Onboard"
                className="inline-block bg-vintage-accent text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-vintage-accent/90 transition-transform transform-gpu hover:scale-110 duration-500 underline w-[220px] text-center"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={rewardDownloadClick}
              >
                {hovered ? "Take a Peek!" : "Download Resume!"}
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center">
            {/* Coffee Circle */}
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/50 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer"
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: [1, 0.5, 1] }} // Blinking effect
              transition={{ duration: 1.5, repeat: Infinity }} // Smooth loop
              onClick={handleCoffeeClick}
            >
              <span className="text-base md:text-lg font-bold text-vintage-accent">☕</span>
            </motion.div>

            {/* Message */}
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-4 bg-vintage-accent text-black font-bold py-2 px-4 rounded-lg shadow-md text-center"
              >
                Thanks for grabbing a coffee! Let’s connect soon.
              </motion.div>
            )}

            {/* Instruction */}
            <p className="text-gray-400 mt-4">Click the coffee for a surprise!</p>
          </div>

        </div>
      </section>

      {/* Endless Scrolling Image Loop
      <section className="overflow-hidden bg-gray-900 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-vintage-accent mb-6">Inspiration and Impact</h2>
        <div className="relative">
          <div className="flex space-x-4 animate-scroll px-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="w-40 h-28 md:w-64 md:h-40 bg-gray-700 rounded-lg shadow overflow-hidden relative"
              >
                <Image
                  src={'/images/scroll/bg1.png'}
                  alt={`Example ${index + 1}`}
                  layout="fill" // Ensures the image covers the container
                  objectFit="cover" // Makes sure the image fits without distortion
                  quality={75} // Optimized quality
                />
              </div>

            ))}
          </div>
        </div>
      </section> */}

      {/* About Me Section
      <section className="px-6 py-12 text-center bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold text-vintage-accent mb-6">
          A Developer Who Codes with Purpose
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          From firefighting analytics to crafting innovative software solutions, I thrive on solving complex challenges. My journey is driven by curiosity, collaboration, and a relentless commitment to creating value.
        </p>
      </section> */}

      {/* Interactive Timeline
      <section id="timeline" className="px-6 py-12 bg-black text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-vintage-accent mb-6">Moments That Define Me</h2>
        <div className="overflow-x-auto flex space-x-4 scrollbar-hide px-4">
          {[
            { year: '2024', title: 'Firefighting Solutions', description: 'Coding to save lives.' },
            { year: '2023', title: '3D Printing Expertise', description: 'Helping students build designs.' },
            { year: '2021', title: 'Moved to USA', description: 'Adapted to new cultures and opportunities.' },
          ].map((item) => (
            <motion.div
              key={item.year}
              className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 min-w-[150px] md:min-w-[200px]"
            >
              <h3 className="text-lg md:text-xl font-bold text-vintage-accent">{item.year}</h3>
              <p className="text-sm md:text-lg text-gray-300 mt-2">{item.title}</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Key Highlights */}
      {/* <section className="px-6 py-12 bg-gray-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-vintage-accent mb-6">What I Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
          <div className="p-4 md:p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-bold text-vintage-accent">Problem-Solver</h3>
            <p>Turning challenges into meaningful solutions with creativity and logic.</p>
          </div>
          <div className="p-4 md:p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-bold text-vintage-accent">Curious Explorer</h3>
            <p>Driven by a relentless passion for learning and growth.</p>
          </div>
          <div className="p-4 md:p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-bold text-vintage-accent">Collaborative Partner</h3>
            <p>Believing that great results stem from shared ideas and teamwork.</p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="px-6 py-12 bg-black text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-vintage-accent mb-6">Let’s Grab a Coffee</h2>
        <p className="text-base md:text-lg text-gray-400 mb-6">
          Have a challenge in mind? Let’s discuss how I can help bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="bg-vintage-accent text-black font-bold py-3 px-6 rounded-lg shadow hover:bg-vintage-accent/90 transition-transform transform hover:scale-105"
        >
          Schedule a Chat
        </Link>
      </section>

      {/* Footer
      <footer className="px-6 py-6 bg-gray-900 text-center">
        <p className="text-sm md:text-base text-gray-400">
          Made with ☕ by Vinay Danepalli | <a href="mailto:vdanepalli@gmail.com" className="text-vintage-accent hover:underline">Email Me</a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/yourgithubprofile" className="text-sm md:text-base text-gray-400 hover:text-vintage-accent">GitHub</a>
          <a href="https://linkedin.com/in/vdanepalli" className="text-sm md:text-base text-gray-400 hover:text-vintage-accent">LinkedIn</a>
          <a href="https://vdanepalli.github.io" className="text-sm md:text-base text-gray-400 hover:text-vintage-accent">Portfolio</a>
        </div>
      </footer> */}
    </main>

    </>
  );
}
