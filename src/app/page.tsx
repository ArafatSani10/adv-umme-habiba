"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import About from "@/components/AboutSections/About"
import Banner from "@/components/HomPages/Banner"
import Expertise from "@/components/HomPages/expertise"
import SuccessStories from "@/components/SuccessStories"

export default function Home() {
  const [chatOpen, setChatOpen] = React.useState(false)
  const [chatMessage, setChatMessage] = React.useState("")

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const encodedMessage = encodeURIComponent(chatMessage.trim())
      window.open(`https://wa.me/01747365915?text=${encodedMessage}`, '_blank')
      setChatMessage("")
      setChatOpen(false) // Close chat after sending
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  React.useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observerOptions = {
      root: null,
      threshold: 0.4 // সেকশনের ৪০% দেখা গেলে URL আপডেট হবে
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // No URL hash update needed; keep the browser location clean
          // while still highlighting the active section in the UI.
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative w-full bg-background scroll-smooth">
      <section id="home" className="min-h-screen">
        <Banner />
      </section>

      <section id="expertise" className="min-h-screen">
        <Expertise />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="success-stories" className="min-h-screen">
        <SuccessStories />
      </section>

      <section id="contact" className="min-h-screen">
        {/* Contact Content Here */}
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 left-4 z-40 p-3 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 md:bottom-4"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://wa.me/1234567890?text=Hello%20Advocate%20Umme%20Habiba,%20I%20would%20like%20to%20consult%20with%20you.', '_blank')}
        className="fixed bottom-20 right-4 z-40 p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#128C7E] md:bottom-4"
        aria-label="Contact on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </motion.button>

      {/* Chat Bot Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-32 right-4 z-40 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-600 md:bottom-20"
        aria-label="Open Chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </motion.button>

      {/* Chat Modal */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-44 right-4 z-40 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 md:bottom-32"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chat with Advocate</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-900 dark:text-white">Hello! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-900 dark:text-white">Feel free to ask about legal consultation or services.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-peach dark:bg-gray-700 dark:text-white"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                  className="px-4 py-2 bg-brand-peach text-white rounded-lg hover:bg-brand-peach/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Messages will open in WhatsApp
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  )
}