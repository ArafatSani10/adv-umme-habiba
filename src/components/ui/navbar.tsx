"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Home, User, Briefcase, Mail, Scale } from "lucide-react"
import { useTheme } from "next-themes"
import { Skeleton } from "./skeleton"

const navItems = [
  { name: "Home", href: "home", icon: <Home size={18} strokeWidth={1.5} /> },
  { name: "Expertise", href: "expertise", icon: <Briefcase size={18} strokeWidth={1.5} /> },
  { name: "About", href: "about", icon: <User size={18} strokeWidth={1.5} /> },
  { name: "Contact", href: "contact", icon: <Mail size={18} strokeWidth={1.5} /> },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`)
    }
  }

  React.useEffect(() => {
    setMounted(true)
    const observerOptions = { root: null, threshold: 0.5 }
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    navItems.forEach((item) => {
      const el = document.getElementById(item.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted) return <nav className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4"><Skeleton className="w-137.5 h-14.5 rounded-2xl" /></nav>

  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between gap-4 px-4 py-2 rounded-2xl border border-white/10 bg-[#0B1120]/80 backdrop-blur-xl shadow-2xl md:min-w-[550px]"
      >
        <div onClick={() => handleScroll("home")} className="cursor-pointer">
          <motion.div className="p-2.5 bg-brand-peach/10 rounded-xl text-brand-peach">
            <Scale size={20} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <button 
                key={item.name} 
                onClick={() => handleScroll(item.href)}
                className="focus:outline-none"
              >
                <motion.div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${isActive ? "text-brand-peach bg-white/5" : "text-gray-400"}`}
                >
                  <span className={isActive ? "text-brand-peach" : ""}>{item.icon}</span>
                  <span className="hidden md:block text-[13px] font-medium">{item.name}</span>
                </motion.div>
              </button>
            )
          })}
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2.5 rounded-xl bg-white/5 text-gray-400"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <button className="px-4 py-2 bg-brand-peach text-primary rounded-xl text-xs font-bold">Consult</button>
        </div>
      </motion.nav>
    </div>
  )
}