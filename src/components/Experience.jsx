import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    {
      title: 'AI/ML + Full-Stack Projects',
      subtitle: 'LLMs, RAG systems, and production-ready web apps',
      points: [
        'Built and shipped AI products spanning NLP, CV, and agentic workflows.',
        'Focused on clean UX, performance, and deployability (Vercel / cloud).',
        'End-to-end ownership: research, iteration, and engineering delivery.'
      ]
    },
    {
      title: 'Engineering Strengths',
      subtitle: 'Systems thinking + rapid iteration',
      points: [
        'Strong fundamentals in DSA, OOP, APIs, and scalable architecture.',
        'Pragmatic debugging and testing-first mindset for reliability.',
        'Collaboration-friendly: clear communication and documentation.'
      ]
    },
    {
      title: 'Currently Exploring',
      subtitle: 'Modern AI application patterns',
      points: [
        'Multimodal applications and evaluation-driven development.',
        'Inference optimization and cost-aware deployments.',
        'Agent orchestration patterns for real-world workflows.'
      ]
    }
  ]

  return (
    <section className='h-full px-5 py-10 bg-radial-gradient md:px-10 lg:px-12 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <h1 className='px-2 sm:pl-5 md:px-2 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># Experience</h1>
      <div className='grid gap-4 md:gap-6 md:grid-cols-2'>
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className='rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur p-5'
          >
            <div className='mb-3'>
              <h2 className='text-xl md:text-2xl font-bold'>{item.title}</h2>
              <p className='text-base md:text-lg text-black/70 dark:text-white/70'>{item.subtitle}</p>
            </div>
            <div className='flex flex-col gap-2'>
              {item.points.map((p) => (
                <p key={p} className='text-base md:text-lg leading-relaxed'>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
