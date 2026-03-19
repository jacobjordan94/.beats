import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect, useRef } from "react"

interface SlotTextProps {
  value: string
  className?: string
}

export function SlotText({ value, className }: SlotTextProps) {
  const [currentValue, setCurrentValue] = useState(value)
  const [prevValue, setPrevValue] = useState<string | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (value !== currentValue) {
      setPrevValue(currentValue)
      setCurrentValue(value)
    }
  }, [value, currentValue])

  return (
    <span
      className={className}
      style={{ display: "inline-flex", overflow: "hidden", position: "relative" }}
    >
      {/* Invisible sizer to maintain width */}
      <span style={{ visibility: "hidden" }}>{currentValue}</span>

      <AnimatePresence
        mode="popLayout"
        onExitComplete={() => setPrevValue(null)}
      >
        {prevValue !== null && (
          <motion.span
            key={`prev-${prevValue}`}
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            style={{ position: "absolute", inset: 0 }}
          >
            {prevValue}
          </motion.span>
        )}
        <motion.span
          key={`current-${currentValue}`}
          initial={prevValue !== null ? { y: "100%" } : false}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          {currentValue}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
