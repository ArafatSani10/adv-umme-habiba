"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Scale, ShieldCheck, Gavel, Award, GraduationCap } from 'lucide-react'

const StatItem = ({ stat, i, isVisible }) => {
  const number = parseInt(stat.value)
  const suffix = stat.value.replace(/\d+/g, '')
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isVisible) {
      animate(motionValue, number, { duration: 2, delay: 0.5 + 0.1 * i })
    }
  }, [isVisible, motionValue, number, i])

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5 + 0.1 * i, duration: 0.8 }}
      className="space-y-2"
    >
      <stat.icon className="w-5 h-5 text-brand-peach" />
      <h4 className="text-3xl font-bold text-foreground">
        <motion.span>{rounded}</motion.span>{suffix}
      </h4>
      <p className="text-muted-foreground text-xs uppercase font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const isVisible = useInView(containerRef, { amount: 0.2, once: false })

  const stats = [
    { label: "Successful Cases", value: "500+", icon: Gavel },
    { label: "Years Experience", value: "12+", icon: Award },
    { label: "Client Protection", value: "100%", icon: ShieldCheck },
  ]

  const education = [
    { degree: "L.L.B (Honour's)", year: "2020", institute: "Stamford University Bangladesh", result: "CGPA 3.06" },
    { degree: "H.S.C", year: "2013", institute: "Barishal Board", result: "GPA 4.60" },
    { degree: "S.S.C", year: "2011", institute: "Barishal Board", result: "GPA 4.69" },
  ]

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full flex items-center justify-center py-24 px-6 bg-linear-to-br from-background to-muted/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >

        {/* Left Side: Image */}
        <div className="lg:col-span-5 relative group">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-4/5 w-full max-w-full md:max-w-md mx-auto"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-peach/30 rounded-sm -z-10" />

            <div className="relative h-full w-full overflow-hidden rounded-md border border-foreground/10 bg-muted shadow-lg">
              <Image
                src="/image/Gemini_Generated_Image_c6e8tmc6e8tmc6e8.png"
                alt="Advocate Umme Habiba"
                fill
                className="object-cover transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-foreground p-6 rounded-sm shadow-2xl backdrop-blur-sm"
            >
              <p className="text-brand-peach text-4xl">12</p>
              <p className="text-background text-[10px] uppercase font-bold mt-1">Years of Practice</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="text-brand-peach text-xs font-semibold uppercase">The Advocate</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-sans font-medium leading-[1.1] text-foreground"
            >
              Legal Excellence <br />
              <span className="font-serif italic text-brand-peach">Rooted in Integrity</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Advocate Umme Habiba is a distinguished legal professional known for strategic thinking and unwavering commitment to justice. Specializing in high-court litigation and corporate advisory, we bridge the gap between complex law and practical solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-3 items-center justify-center mx-auto sm:grid-cols-3 gap-6 pt-6 border-t border-foreground/5">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} i={i} isVisible={isVisible} />
            ))}
          </div>

          {/* New Education Section - Subtle 3D Look */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-brand-peach/20 pb-2 w-fit">
              <GraduationCap className="text-brand-peach w-5 h-5" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Education</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-4 rounded-sm border border-foreground/5 bg-foreground/[0.02] shadow-sm relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-brand-peach group-hover:h-full transition-all duration-300" />
                  <p className="text-brand-peach text-[10px] font-bold">{item.year}</p>
                  <h5 className="font-bold text-foreground text-sm uppercase mt-1 leading-tight">{item.degree}</h5>
                  <p className="text-muted-foreground text-[10px] font-medium mt-1 leading-tight uppercase">{item.institute}</p>
                  <p className="text-foreground/60 text-[9px] font-bold mt-2 border-t border-foreground/5 pt-2 uppercase">{item.result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 border border-foreground/5 bg-foreground/2 rounded-sm flex items-start gap-4 backdrop-blur-sm hover:shadow-lg"
            >
              <Scale className="w-6 h-6 text-brand-peach shrink-0" />
              <div>
                <h5 className="font-bold text-foreground">Strategic Litigation</h5>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">Precision-focused defense strategies for complex cases.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 border border-foreground/5 bg-foreground/2 rounded-sm flex items-start gap-4 backdrop-blur-sm hover:shadow-lg"
            >
              <ShieldCheck className="w-6 h-6 text-brand-peach shrink-0" />
              <div>
                <h5 className="font-bold text-foreground">Corporate Advisory</h5>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">Navigating legal frameworks for business sustainability.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}