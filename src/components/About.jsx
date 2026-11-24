import qopen from '../Media/qopen.png'
import qclose from '../Media/qclose.png'
import { motion } from 'framer-motion'

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className='flex bg-radial-gradient py-10 h-auto lg:h-screen gap-7 justify-center dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <div className='md:flex m-auto md:flex-col px-5 sm:pl-8 md:px-16 justify-center items-start '>
        <motion.h1 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.4}} className='text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400 '># know me</motion.h1>
        <motion.div initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.4}} className='w-full text-base sm:text-lg md:text-xl'>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qopen} alt=""/>
          <p className='inline ml-6'>Hey there! I'm Harikant Bajaj, an AI engineer in Gurugram. For about a year I've been shipping AI to production for frontline teams across many sites: a multilingual voice assistant in Hindi, Tamil, Telugu and Kannada, WhatsApp agents that book and remind, AI that reads invoices and photos into live systems, and face-recognition attendance.<br/><br/></p>
          <p className='inline ml-6'>
           I work in Python (Django, FastAPI) and React, with Claude, Gemini and OpenAI models, LangGraph, MCP and OpenCV, deployed with Docker on Azure. B.Tech in Computer Science from Bennett University.<br/><br/></p>
          <p className='inline ml-6 mr-2'>
          I'm taking on projects now. Send me one task your team does by hand and I'll show you a working version before you pay anything.</p>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qclose} alt=""/>
        </motion.div>
      </div>
    </section>
  )
}
