import { type ComponentProps } from "react"
import { AnimatePresence, motion } from "motion/react"
import { IconBrandGithub, IconInfoCircle, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface BeatsInfoProps extends ComponentProps<"button"> {
  open: boolean
  onToggle: () => void
}

export function BeatsInfo({ className, open, onToggle }: BeatsInfoProps) {
  return (
    <>
      <motion.button
        className={cn(
          "cursor-pointer rounded-full p-2 text-foreground/50 transition-colors hover:text-foreground",
          className,
        )}
        onClick={onToggle}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.5 }}
        title="What is .beats?"
      >
        <IconInfoCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
            />
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background p-6 text-foreground shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IconInfoCircle size={20} />
                  <h2 className="text-lg font-semibold">.beats</h2>
                </div>
                <button
                  className="cursor-pointer rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
                  onClick={onToggle}
                >
                  <IconX size={14} />
                </button>
              </div>
              <div className="space-y-2 text-md leading-relaxed text-foreground/50">
                <p>
                  Swatch Internet Time divides the day into 1000{" "}
                  <strong className="text-foreground">.beats</strong>. One .beat
                  equals 1 minute and 26.4 seconds.
                </p>
                <p>
                  There are no time zones — the same .beat applies everywhere on
                  Earth. The day starts at @000 (midnight in Biel, Switzerland,
                  UTC+1) and ends at @999.
                </p>
                <p>
                  Introduced by the Swatch corporation in 1998 as a universal
                  time standard for the internet age.
                </p>
              </div>
              <a
                href="https://github.com/jacobjordan94/swatch-time"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground/75 transition-colors hover:text-foreground"
              >
                <IconBrandGithub size={16} />
                View on GitHub
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
