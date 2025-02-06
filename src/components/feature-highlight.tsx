import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function FeatureHighlight({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center bg-white dark:bg-neutral-800 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <span className="text-neutral-900 dark:text-neutral-100 mr-3">{icon}</span>
      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{text}</span>
    </motion.div>
  )
}

