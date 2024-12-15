'use client';

import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  image?: string;
}

// const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, github, liveDemo }) => {
//   return (
//     <div className="bg-white/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform-gpu hover:scale-105 duration-300 ease-out">
//       <h3 className="text-xl font-bold text-vintage-accent mb-2">{name}</h3>
//       <p className="text-gray-300 mb-4">{description}</p>
//       <ul className="flex flex-wrap gap-2 mb-4">
//         {technologies.map((tech, index) => (
//           <li
//             key={index}
//             className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-sm font-medium"
//           >
//             {tech}
//           </li>
//         ))}
//       </ul>
//       <div className="flex gap-4">
//         {github && (
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             GitHub
//           </a>
//         )}
//         {liveDemo && (
//           <a
//             href={liveDemo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             Live Demo
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };


const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, github, liveDemo, image }) => {
  return (
    <div className="bg-white/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform-gpu hover:scale-105 duration-300 ease-out">
      {(
        <div className="relative w-full h-56 mb-4">
          <Image
            src={image || '/images/placeholder.png'}
            alt={name}
            layout="fill" // Ensures responsive behavior
            objectFit="cover" // Crops the image to fit the container
            className="rounded-md"
            priority={false} // Set true for LCP-critical images
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-vintage-accent mb-2">{name}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <li key={index} className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-sm font-medium">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>
        )}
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};


export default ProjectCard;
