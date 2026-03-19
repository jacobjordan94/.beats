import { type ComponentProps } from "react"
import { motion } from "motion/react"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

export function ThemeToggle({ className }: ComponentProps<"button">) {
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.button
      className={cn("cursor-pointer rounded-full p-2 text-foreground/50 transition-colors hover:text-foreground", className)}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      title="Toggle theme"
      whileHover={{ scale: 1.5 }}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <IconMoon size={28} /> : <IconSun size={28} />}
      </motion.div>
    </motion.button>
  )
}
