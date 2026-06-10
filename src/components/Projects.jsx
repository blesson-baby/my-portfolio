import { HiExternalLink, HiCode } from 'react-icons/hi'

export default function Projects() {
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL || 'https://calmecare.vercel.app'
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://calmecare.onrender.com'
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/blesson-baby/Calmecare'

  const projects = [
    {
      image: "https://calmecare.vercel.app/assets/admin-consultation-x87RPpDk.jpg",
      title: "CalmCare",
      description:
        "Full-stack wellness application with user authentication, session progress tracking, real-time updates with Socket.IO, and chart-based insights.",
      technologies: [
        'React (Vite)',
        'Node.js',
        'Express',
        'MongoDB (Mongoose)',
        'JWT',
        'Socket.IO',
        'Chart.js'
      ],
      liveLink: frontendUrl,
      backendLink: backendUrl,
      githubLink: githubUrl
    }
  ]

  return (
    <section id="projects" className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/60 to-secondary/20 p-8 rounded-lg border border-slate-700 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group"
            >
              <div className="h-40 rounded mb-6 overflow-hidden bg-slate-700/50 group-hover:bg-slate-700 transition-colors">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <HiCode className="text-4xl text-slate-600" />
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
                >
                  Live Site <HiExternalLink />
                </a>
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
                >
                  Backend <HiCode />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
                >
                  GitHub <HiCode />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
