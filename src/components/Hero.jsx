import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'

export default function Hero() {
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/blesson-baby'
  const linkedinUrl =
    import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/blessen-mathew10/'
  const resumeUrl = import.meta.env.VITE_RESUME_URL || '/resume.pdf'

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-accent uppercase tracking-[0.35em] text-xs md:text-sm font-semibold mb-5">
          Available for entry-level roles
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-accent">Blessen Mathew</span>
        </h1>
        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-slate-300 mb-4">
          MERN Stack Developer | BCA Graduate | Building Full-Stack Web Applications with React, Node.js,
          Express & MongoDB
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 mb-10">
          Open to entry-level software developer and full-stack developer opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent hover:text-accent"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent hover:text-accent"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Projects <HiArrowNarrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
