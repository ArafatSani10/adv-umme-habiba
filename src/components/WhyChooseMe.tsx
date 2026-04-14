"use client"

import React, { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ShieldCheck, Zap, HeartHandshake, Fingerprint, Clock } from 'lucide-react'

const reasons = [
  {
    title: "Uncompromising Integrity",
    desc: "We uphold the highest ethical standards, ensuring total transparency and honesty in every legal proceeding.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic Excellence",
    desc: "Our approach is built on meticulous research and tactical thinking to navigate complex legal landscapes.",
    icon: Zap,
  },
  {
    title: "Client-Centric Focus",
    desc: "We prioritize your peace of mind, providing personalized legal solutions tailored to your unique needs.",
    icon: HeartHandshake,
  },
  {
    title: "24/7 Legal Support",
    desc: "Legal emergencies don't wait. We provide round-the-clock advisory to ensure you're never unprotected.",
    icon: Clock,
  }
]

// ৩ডি কার্ড কম্পোনেন্ট
const Card3D = ({ reason, index, isInView }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  // রোটেশন ক্যালকুলেশন
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative p-8 md:p-10 bg-foreground/[0.03] border border-foreground/5 rounded-lg flex flex-col justify-between group hover:border-brand-peach/30 transition-colors duration-500 cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }} className="space-y-6">
        <div className="w-12 h-12 bg-brand-peach/10 rounded-lg flex items-center justify-center group-hover:bg-brand-peach group-hover:text-primary transition-all duration-500 shadow-lg">
          <reason.icon size={24} />
        </div>
        <h3 className="text-xl font-black text-foreground uppercase leading-tight">
          {reason.title}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm font-medium leading-relaxed">
          {reason.desc}
        </p>
      </div>
      
      {/* ৩ডি শ্যাডো এবং লাইন */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="mt-8 h-0.5 w-0 bg-brand-peach group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(244,194,194,0.5)]" 
      />
    </motion.div>
  )
}

export default function WhyChooseMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section 
      ref={ref}
      id="why-choose-me"
      className="min-h-screen w-full py-24 px-6 bg-background relative overflow-hidden"
      style={{ perspective: "1500px" }} // সেকশনে প্রস্পেক্টিভ যোগ করা হয়েছে
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-brand-peach" />
                <span className="text-brand-peach text-[10px] font-black uppercase">Our Values</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-sans font-black leading-none uppercase">
                WHY <br /> <span className="text-brand-peach">CHOOSE</span> <br /> ME?
              </h2>
            </div>

            <p className="text-muted-foreground max-w-sm text-xs font-bold uppercase leading-relaxed border-l-2 border-brand-peach pl-6">
              Expertise is common, but dedication is rare. We bring a blend of strategic brilliance and human empathy to every case.
            </p>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              className="hidden lg:flex w-32 h-32 border border-foreground/5 rounded-full items-center justify-center relative group"
            >
              <Fingerprint className="text-foreground/20 w-12 h-12 group-hover:text-brand-peach transition-colors duration-500" />
              <div className="absolute inset-0 border-t-2 border-brand-peach rounded-full animate-spin-slow" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, i) => (
              <Card3D key={i} reason={reason} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}