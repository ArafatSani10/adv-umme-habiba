"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaGlobe } from "react-icons/fa"
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi"
import { IoSendOutline } from "react-icons/io5"

const ContactUs = () => {
    const containerRef = React.useRef(null)
    const isVisible = useInView(containerRef, { amount: 0.1, once: true })
    const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section
            ref={containerRef}
            id="contact"
            className="w-full py-20 px-6 bg-background text-foreground transition-colors duration-300"
        >
            <div className="container mx-auto max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    className="mb-14 text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-sans font-medium mb-4">
                        Get In <span className="text-brand-peach font-semibold">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-lg">
                        Have a legal concern or need a consultation? Send a message and I’ll get back to you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Shadcn Style Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-80">Full Name</label>
                                    <input
                                        name="name" value={formData.name} onChange={handleInputChange}
                                        className="w-full bg-transparent border border-input rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-ring transition-all"
                                        placeholder="Md. Arafat"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-80">Email</label>
                                    <input
                                        name="email" type="email" value={formData.email} onChange={handleInputChange}
                                        className="w-full bg-transparent border border-input rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-ring transition-all"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium opacity-80">Subject</label>
                                <input
                                    name="subject" value={formData.subject} onChange={handleInputChange}
                                    className="w-full bg-transparent border border-input rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-ring transition-all"
                                    placeholder="Legal Advice"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium opacity-80">Message</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleInputChange}
                                    className="w-full bg-transparent border border-input rounded-lg px-4 py-4 outline-none focus:ring-1 focus:ring-ring transition-all min-h-[150px] resize-none"
                                    placeholder="Briefly describe your case..."
                                />
                            </div>
                            <button className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all w-full md:w-max">
                                SEND MESSAGE <IoSendOutline size={18} />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        className="flex flex-col justify-between"
                    >
                        <div className="space-y-10">
                            {[
                                { icon: HiOutlineMail, label: "Email Address", val: "Keyalabiba75@gmail.com" },
                                { icon: HiOutlinePhone, label: "Phone Number", val: "+880 1721-019302" },
                                { icon: HiOutlineLocationMarker, label: "Chamber Location", val: "Mohammadia Housing, Dhaka" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-12 h-12 border border-input rounded-lg flex items-center justify-center bg-secondary/30 group-hover:bg-brand-peach/10 transition-colors">
                                        <item.icon size={22} className="text-foreground/70" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase text-muted-foreground mb-1">{item.label}</h4>
                                        <p className="text-lg font-medium">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-input mt-10 lg:mt-0">
                            <div className="flex gap-4">
                                {[FaLinkedinIn, FaFacebookF, FaWhatsapp, FaGlobe].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 border border-input rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    className="w-full h-[400px] rounded-lg overflow-hidden border border-input relative group"
                >
                    <iframe
                        className="absolute inset-0 w-full h-full grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.90234123!2d90.3582!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjIiTiA5MMKwMjEnMjkuNSJF!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactUs