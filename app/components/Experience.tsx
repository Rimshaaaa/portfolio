"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  const experiences = [
    {
      period: "March 2025 - Present",
      role: "Mobile App Developer",
      company: "Softpulse",
      color: "indigo",
      projects: [
        {
          title: "🌐 Web-to-Mobile Conversion",
          description:
            "Successfully converted a responsive web page into a mobile app using React Native",
        },
        {
          title: "📱 State Management with Redux",
          description:
            "Implemented efficient and scalable state management using Redux across various mobile app modules.",
        },
        {
          title: "📋 Push Notification Integration",
          description:
            "Integrated push notifications using Firebase Cloud Messaging (FCM). Handled permission flows, notification handling in foreground/background and quit mode.",
        },
      ],
    },
    {
      period: "Sep 2024 - Dec 2024",
      role: "React Native Developer Intern",
      company: "HiSkyTech",
      color: "blue",
      projects: [
        
        {
          title: "📱 Wallpaper App",
          description:
            " Built custom Splash Screen and Onboarding Screens to guide new users through the app’s core features. Implemented category-based filtering for organized wallpaper browsing.",

        },
        {
          
          description:
            "Integrated the Pexels API to fetch high-quality wallpaper images dynamically. Developed a Favorites feature allowing users to mark and revisit preferred wallpapers.",
        },
      ],
    },

     {
      period: "Dec 2024 - May 2025",
      role: "AR Based Ecommerce website - FYP",
      company: "UOS",
      color: "indigo",
      projects: [
        {
          title: "🌐 E-commerce website development",
          description:
            "Developed the AR based E-commerce platform for an immersive shopping experience.",
        },
        {
          title: "📱 3D Product visualization",
          description:
            "Implemented 3D product visualization and Virtual TryOn features to enhance customer engagement.",
        },
       
      ],
    },
  
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experience" />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500">
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, 100, 200, 300, 400],
                      opacity: [1, 0.8, 0.6, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center z-10 relative border border-indigo-500/30">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                      <Zap className={`w-5 h-5 text-${exp.color}-400`} />
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-indigo-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-slate-300">{exp.company}</span>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                        <p className="text-slate-300">{project.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
