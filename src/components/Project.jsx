import { useState, useEffect } from 'react';

import lsitHero from '../Media/showoff/Screenshot 2025-11-04 150414.png'
import lsit1 from '../Media/showoff/Screenshot 2025-11-04 150137.png'
import lsit2 from 'C:/Portfolio-main/src/Media/showoff/Screenshot 2025-11-04 150213.png'
import lsit3 from 'C:/Portfolio-main/src/Media/showoff/Screenshot 2025-11-04 150319.png'

import lsit4 from '../Media/showoff/zum0.png'
import lsit5 from '../Media/showoff/zum2.png'
import lsit6 from 'C:/Portfolio-main/src/Media/showoff/zum3.png'
import lsit7 from 'C:/Portfolio-main/src/Media/showoff/zum4.png'
import lsit8 from 'C:/Portfolio-main/src/Media/showoff/ai code.png'
import lsit9 from 'C:/Portfolio-main/src/Media/showoff/dog1 (1).png'
import lsit10 from 'C:/Portfolio-main/src/Media/showoff/dog1 (2).png'
import lsit11 from '../Media/showoff/a (1).png'
import lsit12 from 'C:/Portfolio-main/src/Media/showoff/a (2).png'
import lsit13 from 'C:/Portfolio-main/src/Media/showoff/a (3).png'
import lsit14 from 'C:/Portfolio-main/src/Media/showoff/a (4).png'
import lsit15 from 'C:/Portfolio-main/src/Media/showoff/a (5).png'
import lsit16 from 'C:/Portfolio-main/src/Media/showoff/a (6).png'
import lsit17 from 'C:/Portfolio-main/src/Media/showoff/b (1).png'
import lsit18 from 'C:/Portfolio-main/src/Media/showoff/b (2).png'


import rdtechHero from '../Media/showoff/rdtechHero.png'
import rdtech1 from '../Media/showoff/rdtech1.png'
import rdtech2 from '../Media/showoff/rdtech2.png'
import rdtech3 from '../Media/showoff/rdtech3.png'
import ythero from '../Media/showoff/ythero.png'
import yt1 from '../Media/showoff/yt1.png'
import yt2 from '../Media/showoff/yt2.png'
import yt3 from '../Media/showoff/yt3.png'
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Text Summarization Project",
    subtitle: "AI-Powered Text Summarization Web App",
    description:
      "A smart summarization platform powered by a fine-tuned Llama-2 model trained for abstractive summarization. Users can input text, upload documents/images (via OCR), or paste URLs for automatic content extraction and summarization. Built with React.js + Tailwind CSS on the frontend and a Python backend optimized using QLoRA for efficient model performance. Delivers clear, concise summaries evaluated with ROUGE & BLEU scores — fast, accurate, and user-friendly for research, reading, and productivity.",
    images: [lsitHero, lsit1, lsit2, lsit3],
    github: "https://github.com/harikantbajaj/Text-Summarization-Llama-2-main",
  },  {
    title: "RideX",
    subtitle: "Real-Time Ride Sharing Platform",
    description:
      "A full-stack ride-hailing platform (similar to Uber/Ola) built with React, Node.js/Express, and MongoDB. Supports real-time driver location and ride status updates using Socket.io, along with JWT authentication and bcrypt-secured login for riders and drivers. Features include ride request flow, driver matching using MongoDB geospatial queries, live map tracking (Leaflet), role-based dashboards, and responsive UI with Tailwind CSS. Designed for fast, reliable, and real-time ride coordination.",
    images: [ lsit4, lsit5, lsit6, lsit7],
    liveDemo: "https://zum-hazel.vercel.app/",
    github: "https://github.com/harikantbajaj/zum",
  },  {
    title: "Codere",
    subtitle: "AI Code Reviewer ",
    description:
      "A web-based code review tool built with Next.js that uses Google Gemini AI to analyze code and provide intelligent feedback. Supports real-time review, syntax highlighting, and markdown documentation with a clean UI powered by Shadcn-UI + Tailwind CSS. Uses Prism.js for code styling and Axios for smooth API communication. Fully responsive and deployable on Vercel, offering developers fast, AI-driven code quality insights.",
    images: [lsit8],
    liveDemo: "https://ai-code-reviewer-main.vercel.app/",
    github: "https://github.com/harikantbajaj/AI-Code-Reviewer-main",
  },
  {
    title: "DogGPT",
    subtitle: "Fun AI Chatbot",
    description:
      "A playful AI chatbot built with ReactJS that responds to every user message in the style of a dog — saying “bhaw bhaw” with expressive, humorous text and cute sound effects. Designed with a modern, responsive UI, smooth animations, and fast performance. Users can chat just like ChatGPT, but with a fun, pet-like personality. Deployed on Vercel for instant global access.",
    images: [lsit10, lsit9],
    liveDemo: "https://doggpt0.vercel.app/",
    github: "https://github.com/harikantbajaj/doggpt",
  },
  {
    title: "Munch",
    subtitle: "AI Interview Prep Platform",
    description:
      "An AI-powered interview practice platform built with Next.js and TypeScript, offering real-time voice-based mock interviews powered by Google Gemini. Users can speak naturally while the AI listens, responds, and provides instant feedback on performance. Includes topic-wise practice, MCQ quiz mode, resume analysis, coding compiler, progress tracking, and an integrated LeetCode practice hub. Features a polished UI with ShadCN components, secure authentication with Firebase, and seamless deployment on Vercel.",
    images: [lsit11,lsit12,lsit13, lsit14, lsit15, lsit16],
    liveDemo: "https://yt-frontend-three.vercel.app/",
    github: "https://github.com/harikantbajaj/munch",
  },
  {
    title: "Black Myth: Wukong",
    subtitle: "Animated Landing Page",
    description:
      "A visually immersive landing page inspired by Black Myth: Wukong, built with React and Vite, featuring cinematic GSAP animations, parallax motion, and dynamic character visuals. Styled with Tailwind CSS for full responsiveness across devices, delivering a smooth, atmospheric browsing experience that captures the mythical tone of the game. Designed for aesthetic storytelling and high-impact presentation.",
    images: [lsit17, lsit18],
    liveDemo: "https://wukong-frontend.vercel.app/",
    github: "https://github.com/harikantbajaj/wukong-frontend",
  },{
    title: "Black Myth: Wukong",
    subtitle: "Animated Landing Page",
    description:
      "A visually immersive landing page inspired by Black Myth: Wukong, built with React and Vite, featuring cinematic GSAP animations, parallax motion, and dynamic character visuals. Styled with Tailwind CSS for full responsiveness across devices, delivering a smooth, atmospheric browsing experience that captures the mythical tone of the game. Designed for aesthetic storytelling and high-impact presentation.",
    images: [lsit11,lsit12,lsit13, lsit14, lsit15, lsit16],
    liveDemo: "https://yt-frontend-three.vercel.app/",
    github: "https://github.com/harikantbajaj/munch",
  },
];

function Project() {
  const [mainImageIndices, setMainImageIndices] = useState(Array(projects.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImageIndices((prevIndices) => 
        prevIndices.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (projectIndex, subImageIndex) => {
    setMainImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = subImageIndex;
      return newIndices;
    });
  };

  const projectVarient = {
    visible:{
      opacity:1,
      x:0,
      transition:{
        staggerChildren: 0.3,
        ease:'easeInOut'
      }
    },
    hidden:{
      opacity:0,
      x:100
    }
  }
  const variants = {
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.4
      }
    },
    hidden:{
      opacity:0,
      y:50
    }
  }

  return (
    <section className='h-full px-2 bg-radial-gradient md:px-4 lg:px-10 py-10 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <h1 className='px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-12 font-bold text-pink-600 dark:text-green-400'># Projects</h1>
      
      {projects.map((project, projectIndex) => {
        const mainImageIndex = mainImageIndices[projectIndex];
        const mainImage = project.images[mainImageIndex];
        return (
          <div key={projectIndex} className="mb-16"> {/* Added spacing between projects */}
            
            {/* Image Row */}
            <div className='md:flex mx-2 md:mx-4 lg:mx-12 gap-3 items-stretch'>
              {/* Left Main Image */}
              <div className='flex-1 flex'>
                <motion.img 
                  loading='lazy'
                  initial={{opacity:0,x:-100}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.5}}
                  className='w-full h-full object-cover border border-black rounded-sm transition-opacity duration-1000' 
                  src={mainImage} 
                  alt={project.title} 
                />
              </div>

              {/* Right Thumbnails */}
              <motion.div 
                initial='hidden' 
                whileInView='visible' 
                variants={projectVarient} 
                className='hidden md:flex flex-col gap-2 lg:gap-3 flex-[0.32] h-full'
              >
                {project.images.map((image, subImageIndex) => (
                  subImageIndex !== mainImageIndex && (
                    <div key={subImageIndex} className="flex-1">
                      <img 
                        loading='lazy'
                        className='w-full h-full object-cover border border-black rounded-sm cursor-pointer transition-opacity duration-1000'
                        src={image}
                        onClick={() => handleImageClick(projectIndex, subImageIndex)}
                        alt={project.title}
                      />
                    </div>
                  )
                ))}
              </motion.div>
            </div>

            {/* Project Info */}
            <div className='px-4 lg:px-12'>
              <div className='flex gap-2 lg:gap-5 mx-2 lg:mx-6 mt-5 mb-5'>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.4}}>
                  <a href={project.github} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Github</a>
                </motion.button>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.3}}>
                  <a href={project.liveDemo} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Live Demo</a>
                </motion.button>
                {project.buy ? (
                  <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.6}}>
                    <a href='https://wa.me/919795372555/' target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Buy Now</a>
                  </motion.button>
                ) : null}
              </div>
              <div className='tracking-wider text-xl'>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:0.4,delay:0.3}} className='text-3xl font-bold text-pink-600 dark:text-green-400'>{project.title} : </motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:0.4,delay:0.6}} className='text-2xl font-semibold'>{project.subtitle}</motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants } transition={{transition:0.4,delay:0.9}} className='inline-block mt-3 pb-3'>{project.description}</motion.span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Project;
