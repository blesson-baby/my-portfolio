export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'SMECLABS',
      period: 'Jul 2025 - Jan 2026',
      description:
        'Worked on real-world full-stack applications and gained practical experience across frontend and backend development. Built responsive user interfaces, REST APIs, and authentication flows while working with database-backed features.',
      highlights: [
        'Built responsive React interfaces and reusable UI components.',
        'Worked with Node.js, Express, and MongoDB to support backend features.',
        'Improved teamwork, communication, and problem-solving through project work.'
      ]
    }
  ]

  return (
    <section id="experience" className="w-full py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-secondary/40 p-8 rounded-lg border border-slate-700 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-accent text-lg">{exp.company}</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-slate-300 mb-4">{exp.description}</p>
              <ul className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    ✓ {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
