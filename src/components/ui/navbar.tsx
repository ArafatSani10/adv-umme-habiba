"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Home, User, Briefcase, Mail, Scale } from "lucide-react"
import { useTheme } from "next-themes"
import { Skeleton } from "./skeleton"

const navItems = [
  { name: "Home", href: "/", icon: <Home size={18} strokeWidth={1.5} /> },
  { name: "About", href: "#about", icon: <User size={18} strokeWidth={1.5} /> },
  { name: "Expertise", href: "#expertise", icon: <Briefcase size={18} strokeWidth={1.5} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} strokeWidth={1.5} /> },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-4 px-4 py-2 rounded-2xl border border-white/10 bg-[#0B1120]/80 backdrop-blur-xl md:min-w-[550px] h-[58px]">
          <Skeleton className="w-10 h-10 rounded-xl bg-white/10" />
          <div className="h-6 w-px bg-white/10" />
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="w-20 h-8 rounded-lg bg-white/5" />
            ))}
          </div>
          <div className="h-6 w-px bg-white/10 ml-auto" />
          <Skeleton className="w-10 h-10 rounded-xl bg-white/10" />
          <Skeleton className="w-24 h-9 rounded-xl bg-white/10" />
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="flex items-center justify-between gap-4 px-4 py-2 rounded-2xl border border-white/10 bg-[#0B1120]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] ring-1 ring-white/5 md:min-w-[550px]"
      >
        {/* Logo */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(244,194,194,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-2.5 bg-brand-peach/10 rounded-xl text-brand-peach transition-colors"
          >
            <Scale size={20} strokeWidth={1.5} />
          </motion.div>
        </Link>

        <div className="h-6 w-px bg-white/10" />

        {/* Navigation */}
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-gray-400 hover:text-white transition-colors group"
              >
                <span className="group-hover:text-brand-peach transition-colors">{item.icon}</span>
                <span className="hidden md:block text-[13px] font-sans font-medium">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="h-6 w-px bg-white/10" />

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-brand-peach transition-all"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <Sun key="sun" size={18} strokeWidth={1.5} />
              ) : (
                <Moon key="moon" size={18} strokeWidth={1.5} />
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-brand-peach text-primary rounded-xl font-sans text-xs font-bold shadow-lg shadow-brand-peach/10"
          >
            Consult
          </motion.button>
        </div>
      </motion.nav>
    </div>
  )
}