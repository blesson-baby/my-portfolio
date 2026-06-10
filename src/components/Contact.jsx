import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const formRef = useRef(null)
  const emailAddress = 'mathewblessen10@gmail.com'
  const phoneNumber = '9074607758'
  const mailtoLink = `mailto:${emailAddress}?subject=Portfolio%20Inquiry`
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedback('Email service is not configured yet. Add your EmailJS keys to the .env file first.')
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setFeedback('Thanks for reaching out! I will get back to you soon.')
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setFeedback('Something went wrong while sending your message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="w-full py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <HiMail className="text-accent text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <a href={mailtoLink} className="text-slate-300 hover:text-accent transition-colors break-all">
                  {emailAddress}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiPhone className="text-accent text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                <a href={`tel:${phoneNumber}`} className="text-slate-300 hover:text-accent transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiLocationMarker className="text-accent text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                <p className="text-slate-300">Kottayam, Kerala</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary/40 border border-slate-700 rounded text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary/40 border border-slate-700 rounded text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-secondary/40 border border-slate-700 rounded text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-accent text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {feedback && (
              <p
                className={`text-sm ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
