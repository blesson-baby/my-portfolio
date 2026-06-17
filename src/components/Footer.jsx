export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary border-t border-slate-700 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Blessen Mathew. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
