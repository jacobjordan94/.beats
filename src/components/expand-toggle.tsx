import { type ComponentProps } from "react"
import { motion } from "motion/react"
import { IconPlus, IconMinus } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface ExpandToggleProps extends ComponentProps<"button"> {
  extended: boolean
  onToggle: () => void
}

export function ExpandToggle({
  className,
  extended,
  onToggle,
}: ExpandToggleProps) {
  return (
    <motion.button
      className={cn(
        "cursor-pointer rounded-full p-2 text-foreground/50 transition-colors hover:text-foreground",
        className,
      )}
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.5 }}
      title={extended ? "Hide decimals" : "Show decimals"}
    >
      <motion.div
        key={extended ? "collapse" : "expand"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {extended ? (
          <IconMinus size={28} />
        ) : (
          <IconPlus size={28} />
        )}
      </motion.div>
    </motion.button>
  )
}
