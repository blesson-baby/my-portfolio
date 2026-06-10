import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="home" className="w-full h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-accent">Blessen Mathew</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-8">
          I'm a fresher full-stack developer focused on building clean, responsive web apps with React,
          Node.js, Express, and MongoDB.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Projects <HiArrowNarrowRight />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
