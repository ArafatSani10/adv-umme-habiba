"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Scale } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Banner() {
    const [mounted, setMounted] = React.useState(false)
    const [showIntro, setShowIntro] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")
        if (!hasSeenIntro) {
            setShowIntro(true)
            sessionStorage.setItem("hasSeenIntro", "true")
            const timer = setTimeout(() => setShowIntro(false), 3000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleBookConsultation = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    if (!mounted) {
        return (
            <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6">
                <div className="space-y-4">
                    <Skeleton className="h-16 md:h-24 w-70 md:w-150 rounded-2xl" />
                    <Skeleton className="h-6 w-45 md:w-100 rounded-full" />
                </div>
            </div>
        )
    }

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-background">
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-100 flex flex-col items-center justify-center px-6"
                    >
                        <div className="absolute inset-0 bg-[#001233]/60 backdrop-blur-xl z-[-1]" />

                        <div className="text-center space-y-2">
                            <motion.h1
                                layoutId="hero-name"
                                className="text-5xl md:text-9xl font-sans font-medium text-white"
                            >
                                <Typewriter
                                    words={['Umme Habiba']}
                                    typeSpeed={40}
                                    cursor
                                    cursorStyle="|"
                                />
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-blue-100/80 text-lg md:text-2xl font-light"
                            >
                                <Typewriter
                                    words={['Advocate • Legal Specialist']}
                                    typeSpeed={30}
                                    delaySpeed={1000}
                                />
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
                <div className="absolute inset-0 z-0 flex items-center justify-end">

                    <div className="relative h-full w-full md:w-[75%] lg:w-[65%]">
                        <Image
                            src="/image/Gemini_Generated_Image_c6e8tmc6e8tmc6e8.png"
                            alt="Advocate Umme Habiba"
                            fill
                            priority
                            className="pointer-events-none object-cover md:object-contain object-center md:object-bottom-right opacity-100 saturate-[1.1] dark:opacity-[0.25]"
                        />
                    </div>

                    <div className="absolute inset-0 bg-transparent dark:bg-linear-to-t md:dark:bg-linear-to-r dark:from-background dark:via-background/60 dark:to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto flex flex-col items-start text-left">
                    <div className="max-w-3xl">
                        {(!showIntro || !mounted) && (
                            <motion.h1
                                layoutId="hero-name"
                                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                className="text-5xl md:text-8xl font-sans font-medium text-foreground leading-tight mb-4"
                            >
                                Umme <span className="text-brand-peach font-semibold">Habiba</span>
                            </motion.h1>
                        )}

                        <motion.div
                            initial={showIntro ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                            animate={!showIntro ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <div className="text-base md:text-xl font-sans text-muted-foreground h-10 md:h-7.5 flex items-center gap-2 mb-8">
                                <span className="font-normal opacity-80 whitespace-nowrap">Advocate •</span>
                                <span className="text-foreground font-medium">
                                    <Typewriter
                                        words={['Civil & Criminal Law Specialist', 'Litigation Strategic Consultant', 'High-Court Representative']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={30}
                                        delaySpeed={2000}
                                    />
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="button"
                                    onClick={handleBookConsultation}
                                    className="px-10 py-3.5 bg-foreground text-background rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95 shadow-xl shadow-black/10"
                                >
                                    Book Consultation
                                </button>
                                <a
                                    href="/umme habiba.pdf"  
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download="umme_habiba.pdf"
                                    className="inline-flex items-center justify-center px-10 py-3.5 border border-foreground/10 text-foreground rounded-xl text-sm font-medium transition-all hover:bg-white/5 cursor-pointer"
                                >
                                    Read Profile
                                </a>
                                
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-12 left-12 opacity-5 hidden md:block">
                    <Scale size={120} strokeWidth={0.5} />
                </div>
            </div>
        </main>
    )
}