import { type ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function AtIcon({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={cn("fill-current", className)}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="56"
      >
        @
      </text>
    </svg>
  )
}
