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
        <motion.p initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.4}} className='w-full text-base sm:text-lg md:text-xl'>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qopen} alt=""/>
          <p className='inline ml-6'>Hey there! I’m Harikant Bajaj, AI/ML enthusiast and software developer passionate about building intelligent, scalable, and high-performance applications. As a final-year B.Tech CSE student at Bennett University, I thrive at the intersection of machine learning, full-stack development, and innovation<br/><br/></p>
          <p className='inline ml-6'>
           With hands-on experience in Deep Learning, NLP, Computer Vision, LLMs, RAG Systems, and Generative AI, I love transforming ideas into impactful products. I work extensively with Python, TensorFlow, PyTorch, LangChain, and Hugging Face, along with React.js, Next.js, Node.js, and MongoDB, allowing me to develop powerful AI-driven web applications end-to-end.<br/><br/></p>
          <p className='inline ml-6 mr-2'>
          I’m driven by problem-solving, collaboration, and a relentless pursuit of excellence, making every project a fusion of innovation and reliability. Let’s create something extraordinary!</p>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qclose} alt=""/>
        </motion.p>
      </div>
    </section>
  )
}
