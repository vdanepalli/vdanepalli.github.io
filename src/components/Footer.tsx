'use client';

import { useState } from 'react';
import { launchFireworks } from './fireworks'; // Import confetti function
import { fireConfetti } from './confetti'

const Footer = () => {

  const [hovered, setHovered] = useState(false);

  const rewardDownloadClick = () => {
    launchFireworks();
    fireConfetti();
  }
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white py-12 relative shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Mission Statement */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-xl font-bold text-vintage-accent mb-4">
              🚀 Crafting Tomorrow&apos;s Technology
            </h4>
            <p className="text-gray-400 leading-relaxed text-base">
              I code because it gives me the power to create, solve problems, and bring ideas to life.
              It&apos;s how I make sense of the world and contribute something meaningful to it.
            </p>
          </div>

          {/* Contact Links and Resume */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
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
            <div className="flex space-x-6 text-lg">
              <a
                href="mailto:vdanepalli@gmail.com"
                className="text-gray-400 hover:text-vintage-accent transition"
                aria-label="Email Vinay"
              >
                📧 Email
              </a>
              <a
                href="https://linkedin.com/in/vdanepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vintage-accent transition"
                aria-label="Visit LinkedIn Profile"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/vdanepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vintage-accent transition"
                aria-label="Visit GitHub Profile"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p>Open to exciting opportunities! Let&apos;s create something amazing together.</p>
            <p>
              Reach out at{' '}
              <a
                href="mailto:vdanepalli@gmail.com"
                className="text-vintage-accent hover:underline"
                aria-label="Email Vinay"
              >
                vdanepalli@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="text-center sm:text-right mt-4 sm:mt-0">
            <p>
              © {new Date().getFullYear()} <span className="text-vintage-accent font-medium">Vinay Danepalli</span>. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
