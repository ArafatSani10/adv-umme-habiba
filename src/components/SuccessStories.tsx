"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Scale, Award } from 'lucide-react'

const milestones = [
  {
    id: 1,
    title: "Corporate Defense",
    client: "Zaman Tech Group",
    result: "Acquitted",
    description: "Successfully defended a multi-million dollar intellectual property dispute in the Supreme Court.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "High Court Appeal",
    client: "Private Equity",
    result: "Victory",
    description: "Overturned a lower court decision regarding land acquisition, securing 45 acres of property.",
    icon: Scale,
  },
  {
    id: 3,
    title: "Criminal Acquittal",
    client: "Individual Client",
    result: "Dismissed",
    description: "Achieved full dismissal of charges in a high-profile case involving complex legal evidence.",
    icon: Award,
  }
]

export default function SuccessStories() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header Section */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-brand-peach text-sm font-semibold uppercase ">Proven Records</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-sans font-medium ">
                Legal <span className="  text-brand-peach">Milestones</span>
              </h2>
            </div>
            
          </div>
        </div>

        {/* 3D Sliding Cards */}
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {milestones.map((item) => (
            <motion.div
              key={item.id}
              style={{ perspective: "1000px" }}
              className="group min-w-87.5 md:min-w-125 h-100 relative"
            >
              <motion.div
                whileHover={{ rotateY: -10, rotateX: 5, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full bg-foreground/2 border border-foreground/5 p-10 rounded-sm flex flex-col justify-between hover:border-brand-peach/30 transition-colors relative overflow-hidden"
              >
                {/* 3D Background Number */}
                <span className="absolute -bottom-10 -right-4 text-[180px] font-black text-foreground/3 pointer-events-none">
                  0{item.id}
                </span>

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-brand-peach/10 rounded-sm">
                      <item.icon className="text-brand-peach w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold py-1 px-3 border border-brand-peach/30 text-brand-peach rounded-sm uppercase">
                      {item.result}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] text-brand-peach font-bold uppercase tracking-widest">{item.client}</p>
                    <h3 className="text-3xl font-bold text-foreground leading-tight">{item.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>

               
              </motion.div>
            </motion.div>
          ))}

          {/* Ending Spacer */}
          <div className="min-w-25" />
        </motion.div>

        {/* Progress Bar */}
        <div className="container mx-auto px-6 mt-16">
          <div className="w-full h-px bg-foreground/5 relative">
            <motion.div 
              style={{ scaleX: scrollYProgress }}
              className="absolute top-0 left-0 h-full w-full bg-brand-peach origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}