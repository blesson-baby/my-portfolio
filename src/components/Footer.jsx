import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/blesson-baby'
  const linkedinUrl = 'https://www.linkedin.com/in/blessen-mathew-58501136b'

  return (
    <footer className="w-full bg-primary border-t border-slate-700 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's connect</h3>
            <p className="text-slate-400">Follow me on social media</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors text-2xl"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors text-2xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <div className="relative group flex items-center justify-center">
              <span
                className="text-slate-400 text-2xl cursor-default"
                aria-label="Email"
              >
                <HiMail />
              </span>
              <span className="pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded bg-slate-900 px-3 py-1 text-sm text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                mathewblessen10@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Blessen Mathew. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
