'use client';

import { useState, useEffect } from 'react';

const experiences = [
  {
    id: "2024",
    title: "Firefighting with Code 🚒",
    duration: "2024",
    text: "Moved to Corpus Christi and worked on innovative firefighting software solutions. Learned how to tackle complex challenges, optimize performance, and deliver code that stands up to high-pressure environments.",
  },
  
  {
    id: "2023.1",
    title: "Lab Operations: Next Level 🏗️",
    duration: "2023",
    text: "Assisted students in 3D printing and CAD design projects. Became the unofficial ‘printer whisperer,’ and realized that troubleshooting complex issues is surprisingly satisfying when it works.",
  },
  {
    id: "2023",
    title: "Roommates to Ride-or-Dies 🏠",
    duration: "2023",
    text: "College roommates became family after countless hackathons, last-minute assignments, and road trips. Proved that collaboration is the key to success—and that someone has to empty the dishwasher.",
  },
  {
    id: "2022",
    title: "Hello, America! ✈️",
    duration: "2022",
    text: "Moved to the USA and quickly learned that homesickness pairs well with determination. Bridged cultural gaps, deciphered endless acronyms, and became a power user of Google Maps. Adaptability level: expert.",
  },
  {
    id: "2020",
    title: "Code, Calls, and Banana Bread 🌎",
    duration: "2020",
    text: "Navigated the pandemic like a pro: leveled up my Zoom game, baked a questionable amount of bread, and deep-dived into coding. Turns out, there's a limit to Netflix but not to learning.",
  },
  {
    id: "2019.1",
    title: "Code Goes Live 💼",
    duration: "2019",
    text: "Started my first job and felt the thrill of pushing code to production—and the anxiety when something broke. Learned to write cleaner code and mastered corporate buzzwords like ‘synergy’ and ‘touch base.’",
  },
  {
    id: "2019",
    title: "Ambition Meets Coffee 💡",
    duration: "2019",
    text: "Final year of college was a bootcamp of life: ambitious projects, sleepless nights, and way too much caffeine. Built ideas into code and turned big dreams into action plans.",
  },
  {
    id: "2018",
    title: "Resilience 101 💪",
    duration: "2018",
    text: "Life threw a curveball, and I swung back harder. Poured my energy into coursework and projects, proving that sometimes the best way forward is to keep building.",
  },
  
  {
    id: "2017",
    title: "Debugging Life 💔",
    duration: "2017",
    text: "Heartbreak hit hard, but code was my therapy. Computers didn’t ask complicated questions, and JavaScript errors were easier to fix than emotions. Recovered by learning, building, and growing.",
  },
  {
    id: "2015",
    title: "Hyderabad Hustle 🎓",
    duration: "2015",
    text: "Topped my batch in high school while navigating city life like a pro. Balanced academic rigor with cultural immersion (and lots of biryani), proving that hard work tastes sweeter with success.",
  },
  {
    id: "2010",
    title: "Cheat Codes Activated 🎮",
    duration: "2010",
    text: "Became the family’s go-to IT support after mastering video game cheat codes. Learned that being the ‘computer kid’ comes with an unending task queue of printer fixes and Wi-Fi resets.",
  },
  
  {
    id: "2009",
    title: "Bug Fixes in Progress 💘",
    duration: "2009",
    text: "Math class became interesting thanks to my first crush. Discovered that solving for X is easier when you're daydreaming about someone, but debugging emotions is an unsolvable problem.",
  },
  
  {
    id: "2006",
    title: "Conflict Resolution 101 🥊",
    duration: "2006",
    text: "Initiated countless sibling battles over TV remotes and snacks. Deployed rudimentary peace protocols (apologies) and mastered negotiation techniques to maintain system stability at home.",
  },
  
  {
    id: "2005",
    title: "System Migration: New City, New Instance 🚚",
    duration: "2005",
    text: "Relocated to a new environment and executed a seamless integration into a different school system. Deployed `makeFriends()` API with high success rates and optimized the `adaptToChange()` function for future scalability.",
  },
  
  {
    id: "2004",
    title: "System Architect in the Making 🏗️",
    duration: "2004",
    text: "Discovered LEGO and launched my first design prototypes (aka block towers). Iterated endlessly, though most builds failed QA (siblings). Developed a knack for asking 'Why?'—the start of my lifelong debugging habit.",
  },
  
  {
    id: "2001",
    title: "System Initialization: School Mode 🎒",
    duration: "2001",
    text: "Walked into school with `parentSupportEnabled = true`. Quickly optimized for attention and engagement, becoming the teacher’s favorite by EOD (End of Day). Coincidence? More like flawless execution of `charmAlgorithm()`.",
  },
  
  {
    id: "2000",
    title: "Big Brother v1.0 Deployed 👶",
    duration: "2000",
    text: "A major system update: became a big brother. Initialized `shareToys()` function (though it often returned `false`) and developed early conflict resolution algorithms. Quickly realized that being a sibling comes with a 24/7 runtime and unexpected interrupts.",
  },
  
  {
    id: "1999",
    title: "Feature Rollout: Mobility & Communication 🚶",
    duration: "1999",
    text: "Deployed critical updates: first words (likely 'No') and first steps. System performance increased, but so did operational challenges for the stakeholders (parents), who quickly realized this was a highly active beta release.",
  },
  
  {
    id: "1998",
    title: "The Launch of a Lifetime 🚀",
    duration: "1998",
    text: "Made my grand debut as the original disruptor in my family, aka the Minimum Viable Person (MVP). Launched with basic mobility, zero sleep cycles, a highly disruptive notification system (crying), and no documentation for my parents. Big plans to conquer the world—eventually.",
  },
  
];


export default function Journey() {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('experience-cards');
      if (!container) return;

      // Get the container's position and center relative to the viewport
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestId = null;
      let closestDistance = Infinity;

      experiences.forEach((exp) => {
        const section = document.getElementById(exp.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        const sectionCenter = Math.min(
          Math.max(rect.top, containerRect.top),
          Math.min(rect.bottom, containerRect.bottom)
        );

        const distanceToCenter = Math.abs(sectionCenter - containerCenter);

        if (distanceToCenter < closestDistance) {
          closestDistance = distanceToCenter;
          closestId = exp.id;
        }
      });

      if (closestId && closestId !== activeId) {
        setActiveId(closestId);
      }
    };

    const container = document.getElementById('experience-cards');
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [activeId]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveId(id);
    }
  };

  return (
    <section className="mt-16 min-h-screen bg-black text-white flex flex-col justify-center items-center">
      {/* Intro Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-vintage-accent mb-6">The Road That Led Me Here</h1>
        <p className="text-lg text-gray-400">
          Every milestone tells a story—of challenges faced, lessons learned, and dreams pursued. Take a moment to explore what makes me who I am.
        </p>
      </div>

      {/* Key Highlights Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-vintage-accent mb-4 text-center">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400 text-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold text-vintage-accent">Resilient Problem-Solver</h3>
            <p>Challenges aren’t roadblocks; they’re opportunities to think deeper, adapt faster, and build smarter solutions.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold text-vintage-accent">Curious Explorer</h3>
            <p>Every question fuels my passion for discovery and growth, helping me transform ideas into impactful outcomes.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold text-vintage-accent">Lifelong Learner</h3>
            <p>I see learning as a mindset, not a milestone—every challenge is an invitation to grow and see the world differently.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold text-vintage-accent">Empathetic Collaborator</h3>
            <p>Success is rarely solo—teamwork and understanding are at the heart of everything I do.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold text-vintage-accent">Unwavering Commitment</h3>
            <p>Whether it’s coding solutions or fostering relationships, I give my all to what truly matters.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold text-vintage-accent">Driven by Purpose</h3>
            <p>My work isn’t just about results—it’s about making a meaningful difference in the lives of others.</p>
          </div>
        </div>
      </div>

      {/* Existing Experience Cards */}
      <div
        id="experience-container"
        className="relative flex w-full h-[80vh] bg-black shadow-lg overflow-hidden"
      >
        <div
          id="experience-cards"
          className="p-6 flex flex-col space-y-12 w-full overflow-y-auto"
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              className={`relative p-8 rounded-lg shadow-md transition-transform duration-700 ease-in-out ${activeId === exp.id
                ? 'bg-gray-800 scale-100 opacity-100'
                : 'bg-gray-700 scale-90 opacity-25'
                }`}
              onClick={() => handleScrollTo(exp.id)}
            >
              <div className="absolute top-4 right-4 text-xl font-bold text-vintage-accent" onClick={() => handleScrollTo(exp.id)}>
                {exp.duration}
              </div>
              <h3 className="text-3xl font-bold text-vintage-accent mb-4">{exp.title}</h3>
              <p className="text-gray-300">{exp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
