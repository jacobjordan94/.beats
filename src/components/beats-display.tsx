import { type ComponentProps } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { AtIcon } from "./at-icon"
import { BeatsSlot } from "./beats-slot"

interface BeatsDisplayProps extends ComponentProps<"button"> {
  beats: number
  extended?: boolean
  onToggleExtended?: () => void
}

export function BeatsDisplay({
  beats,
  className,
  extended = false,
  onToggleExtended,
}: BeatsDisplayProps) {

  return (
    <motion.button
      className={cn(
        "flex items-end gap-0 cursor-pointer select-none font-mono text-4xl lg:text-6xl font-bold tracking-tight text-foreground",
        className,
      )}
      onClick={onToggleExtended}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="size-9 lg:size-15 text-foreground/50 mb-1.5 mr-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <AtIcon />
      </motion.div>
      <BeatsSlot beats={beats} extended={extended} />
      <motion.span
        className="text-2xl lg:text-4xl text-foreground/50 p-0 lg:pb-1 ml-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        .beats
      </motion.span>
    </motion.button>
  )
}
