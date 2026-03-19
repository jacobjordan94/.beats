import { useState } from "react"
import { BeatsDisplay } from "./components/beats-display"
import { BeatsInfo } from "./components/beats-info"
import { ExpandToggle } from "./components/expand-toggle"
import { ThemeToggle } from "./components/theme-toggle"
import { Seo } from "./components/seo"
import { useSwatchTime } from "./hooks/use-swatch-time"
import { Progress } from "./components/ui/progress"
import { SlotText } from "./components/slot-text"

export function App() {
  const [extended, setExtended] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const { beats } = useSwatchTime({ decimal: true })

  const toggleExtended = () => setExtended((e) => !e)
  const toggleInfo = () => setInfoOpen((o) => !o)

  return (
    <div className="min-h-svh flex flex-col max-w-lg mx-auto items-center justify-between">
      <Seo />
      <title>{`${String(Math.floor(beats)).padStart(3, "0")} .beats`}</title>
      <div className="h-[84px]" />
      <div>
        <BeatsDisplay beats={beats} extended={extended} onToggleExtended={toggleExtended} />
        <div className="flex items-stretch">
          <ProgressBar beats={beats} />
          <Percentage beats={beats} />
        </div>
      </div>
      <div className="flex w-full items-stretch *:flex-1 *:text-center pb-4">
        <div>
          <ThemeToggle />
        </div>
        <div className="mt-6">
          <ExpandToggle extended={extended} onToggle={toggleExtended} />
        </div>
        <div>
          <BeatsInfo open={infoOpen} onToggle={toggleInfo} />
        </div>
      </div>

    </div>
  )
}

const ProgressBar = ({ beats }: { beats: number }) => {
  return <Progress className="flex-1 pl-4 mt-8 mr-4" value={beats / 10} />
};

const Percentage = ({ beats }: { beats: number }) => {
  const [ perc1, perc2 ] = Math.floor(beats / 10).toString().split('');
  return (
    <div className="font-bold translate-y-5">
      <SlotText value={perc1} />
      <SlotText value={perc2} />
      <span>%</span>
    </div>
  )
}

export default App
