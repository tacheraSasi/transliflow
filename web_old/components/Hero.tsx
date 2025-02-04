"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FloatingPaths } from "./floating-paths"
import { FeatureHighlight } from "./feature-highlight"
import Link from "next/link"
import { Globe, Zap, Users, Sparkles } from "lucide-react"

export default function Hero() {
  const title = "TransliFlow"
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-6 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                               bg-gradient-to-r from-neutral-950 to-neutral-600 
                               dark:from-neutral-100 dark:to-neutral-400"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 mb-12 font-light"
          >
            AI-powered collaborative translation platform
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <FeatureHighlight icon={<Globe className="w-6 h-6" />} text="AI-Powered" />
            <FeatureHighlight icon={<Users className="w-6 h-6" />} text="Real-time Collaboration" />
            <FeatureHighlight icon={<Zap className="w-6 h-6" />} text="Automated Workflows" />
            <FeatureHighlight icon={<Sparkles className="w-6 h-6" />} text="Built for Speed" />
          </div>

          <div className="flex justify-center gap-6">
            <Link href="/sign-up" passHref>
              <Button
                variant="default"
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 
                           hover:shadow-lg hover:scale-105 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/sign-in" passHref>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-neutral-900 border-neutral-900 hover:bg-neutral-100 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 
                           hover:shadow-lg hover:scale-105 dark:text-white dark:border-white dark:hover:bg-neutral-800"
              >
                Sign In
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-sm text-neutral-600 dark:text-neutral-400 font-light"
          >
            Built with Go, Next.js, and TypeScript for unparalleled speed and scalability
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

