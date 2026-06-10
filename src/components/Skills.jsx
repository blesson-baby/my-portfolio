export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Vite",
        "React Router DOM",
        "Axios",
        "Chart.js",
        "react-chartjs-2",
        "React Toastify",
        "Socket.IO Client",
        "WebRTC"
      ]
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT (jsonwebtoken)",
        "bcryptjs",
        "Socket.IO",
        "CORS",
        "dotenv"
      ]
    },
    {
      category: "Tools & Others",
      skills: ["npm", "ESLint", "Nodemon", "STUN", "HTTPS"]
    }
  ]

  return (
    <section id="skills" className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-secondary/40 p-8 rounded-lg border border-slate-700 hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-bold text-accent mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
