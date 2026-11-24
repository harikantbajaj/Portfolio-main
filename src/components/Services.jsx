import { motion } from 'framer-motion'

const services = [
  {
    title: 'WhatsApp AI agents',
    text: 'Answer customers, book appointments, send reminders and hand off to a person when needed, with a dashboard for your team.',
    fits: 'Clinics, real estate, hotels, coaching, D2C repeat orders'
  },
  {
    title: 'Voice-filled forms',
    text: 'Staff speak in Hindi, Tamil, Telugu or Kannada and the form fills itself. An LLM pulls typed fields out of free conversation and validates them.',
    fits: 'Field teams, healthcare workers, shop floors'
  },
  {
    title: 'Document and photo reading',
    text: 'Invoices, receipts, odometer photos and reports read straight into your system or a Tally-ready sheet, with unclear fields flagged.',
    fits: 'Finance teams, CA firms, lenders, distributors'
  },
  {
    title: 'Photo audits and attendance',
    text: 'Camera photos scored by vision models for what is present, missing or needs fixing, plus face-recognition check-in with location checks.',
    fits: 'Fleets, warehouses, store chains, hotels, care teams'
  }
]

const steps = [
  ['Send one task', 'The most annoying manual job your team does, in a line or a voice note.'],
  ['I reply the same day', 'Exactly how I would automate it and what the first version will do.'],
  ['See it running', 'A small working version on your real workflow, before you pay anything.'],
  ['Go live', 'I deploy it, train your team and stay on to fix and improve it.']
]

export default function Services() {
  return (
    <section className='h-full px-5 py-10 bg-radial-gradient md:px-10 lg:px-12 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <h1 className='px-2 sm:pl-5 md:px-2 text-2xl md:text-3xl lg:text-5xl mb-3 font-bold text-pink-600 dark:text-green-400'># Work with me</h1>
      <p className='px-2 sm:pl-5 md:px-2 mb-7 text-base md:text-lg text-black/70 dark:text-white/70'>
        Taking on projects now. Working version first, so you see it run before you pay. Can start this week; same-day replies.
      </p>
      <div className='grid gap-4 md:gap-6 md:grid-cols-2'>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className='rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur p-5'
          >
            <h2 className='text-xl md:text-2xl font-bold mb-2'>{s.title}</h2>
            <p className='text-base md:text-lg leading-relaxed'>{s.text}</p>
            <p className='mt-2 text-sm md:text-base text-black/60 dark:text-white/60'>Fits: {s.fits}</p>
          </motion.div>
        ))}
      </div>
      <ol className='grid gap-4 md:grid-cols-4 mt-8'>
        {steps.map(([t, d], i) => (
          <li key={t} className='list-none'>
            <span className='text-3xl font-bold text-pink-600 dark:text-green-400'>{i + 1}</span>
            <h3 className='text-lg md:text-xl font-semibold mt-1'>{t}</h3>
            <p className='text-base text-black/70 dark:text-white/70'>{d}</p>
          </li>
        ))}
      </ol>
      <p className='mt-8 text-base md:text-lg'>
        Email <span className='font-semibold'>harikantb08@gmail.com</span> or WhatsApp <span className='font-semibold'>+91 91090 20520</span>.
        Not a fit right now? An introduction to one founder who is drowning in manual work would mean a lot.
      </p>
    </section>
  )
}
