import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Project = lazy(() => import('./components/Project'))
const Contact = lazy(() => import('./components/Contact'))

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
        <section className='h-full w-full scroll-mt-20' id='home'>
          <Home/>
        </section>
        <section className='h-full w-full scroll-mt-20' id='about'>
          <About />
        </section>
        <section className='h-full w-full scroll-mt-20' id='skills'>
          <Skills />
        </section>
        <section className='h-full w-full scroll-mt-20' id='experience'>
          <Experience />
        </section>
        <section className='h-full w-full scroll-mt-20' id='projects'>
          <Project />
        </section>
        
        <section className='h-full w-full scroll-mt-20' id='contact'>
          <Contact />
        </section>
      </Suspense> 
    </div>
  )
}

export default App