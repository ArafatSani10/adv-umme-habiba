"use client"

import * as React from "react"
import About from "@/components/AboutSections/About"
import Banner from "@/components/HomPages/Banner"
import Expertise from "@/components/HomPages/expertise"

export default function Home() {
  React.useEffect(() => {
    const sections = document.querySelectorAll("section")
    
    const observerOptions = {
      root: null,
      threshold: 0.4 // সেকশনের ৪০% দেখা গেলে URL আপডেট হবে
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          // URL-এ হ্যাশট্যাগ আপডেট করা
          const hash = id === "home" ? "" : `#${id}`
          const url = hash === "" ? "/" : `/${hash}`
          
          if (window.location.hash !== hash) {
            window.history.replaceState(null, "", url)
          }
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

      <section id="contact" className="min-h-screen">
        {/* Contact Content Here */}
      </section>
    </main>
  )
}