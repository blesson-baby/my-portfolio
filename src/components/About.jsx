export default function About() {
  return (
    <section id="about" className="w-full py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a MERN Stack Developer and BCA graduate who enjoys turning ideas into practical web
              applications. I focus on writing clean code, building responsive interfaces, and making sure
              the user experience feels simple and polished.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I like working across both frontend and backend, especially with React, Node.js, Express, and
              MongoDB. I also enjoy learning new tools, improving my problem-solving skills, and taking
              feedback seriously.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm currently open to entry-level software developer and full-stack developer opportunities
              where I can keep learning, contribute to real projects, and grow into a strong developer.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-8 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-slate-300">
              <li> Location: Kottayam, Kerala</li>
              <li> Status: Open to entry-level software developer and full-stack developer opportunities</li>
              <li> Education: BCA</li>
              <li> Stack: React, Node.js, Express, MongoDB</li>
              <li> Email: mathewblessen10@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
