import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    {
      title: 'AI Engineer, Oggnai Technologies',
      subtitle: 'Dec 2025 – present · Gurugram',
      points: [
        'Co-built a multilingual voice AI assistant that trains frontline workers on their live tasks; one worker who could not read the app rose from rank 60 to rank 1.',
        'Built an API that lets AI agents run real operations safely: permission-checked actions, logged changes and a dry-run mode.',
        'Shipped real-time photo audits with Claude and Gemini vision models, OCR on receipts and odometer photos, and face-recognition attendance.',
        'Solo-built a client AI WhatsApp agent (conversations, scheduling, reminders) and automated hiring end to end, including AI interviews.'
      ]
    },
    {
      title: 'Internships',
      subtitle: 'Machine learning and data science, 2024 – 2025',
      points: [
        'Data Science Intern, Sustainable Basket: improved revenue and returns forecasting accuracy by 25%.',
        'AI/ML Intern, Labmentix: ML models, OpenCV vision and NLP sentiment projects, a model served as a Flask API.',
        'ML Intern, Suvidha Foundation: prediction and classification models with scikit-learn.'
      ]
    },
    {
      title: 'Open source',
      subtitle: 'Built on my own time',
      points: [
        'paxcli (npm): verifies coding-agent performance fixes with noise-bounded benchmarks; best verified result -84.8% latency.',
        'LangGraph multi-agent travel planner, an MCP server, and real-time people detection with OpenCV.'
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
