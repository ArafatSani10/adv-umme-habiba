"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Scale, FileText, Users, Gavel, Search } from "lucide-react"

const expertiseData = [
  {
    title: "Civil Litigation",
    desc: "Expert representation in civil disputes, property matters, and high-court litigation resolution.",
    icon: <Scale className="w-8 h-8" />,
  },
  {
    title: "Criminal Defense",
    desc: "Robust defense strategies and prosecution services for criminal allegations and trials.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Legal Research",
    desc: "Meticulous legal research and precision drafting of contracts, writs, and legal documents.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "Client Advisory",
    desc: "Strategic legal consultation and expert courtroom representation for complex cases.",
    icon: <Gavel className="w-8 h-8" />,
  },
]

export default function Expertise() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { amount: 0.1 })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full bg-background flex items-center justify-center py-20 md:py-0 px-2 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, rotateX: 20, y: 60, scale: 0.9 }}
        animate={isInView ? { opacity: 1, rotateX: 0, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto"
      >
        <div className="max-w-2xl mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-sans font-medium text-foreground mb-6"
          >
            Practice <span className="text-brand-peach">Areas</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.4 }}
             className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Providing strategic legal solutions with a focus on integrity and client success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group p-8 rounded-lg border border-foreground/10 bg-foreground/2 transition-all duration-500 backdrop-blur-sm relative overflow-hidden cursor-pointer"
            >
              <div className="mb-6 text-brand-peach relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.icon}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10 group-hover:text-brand-peach transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm   relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-peach/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}