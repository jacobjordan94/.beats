import { AnimatePresence, motion } from "motion/react";
import { SlotText } from "./slot-text";

interface BeatsSlotProps {
    beats: number;
    extended?: boolean;
}

export function BeatsSlot({ beats, extended = false }: BeatsSlotProps) {
    const padded = beats.toFixed(3).padStart(7, "0");
    const [beforeDecimal, afterDecimal] = padded
        .split(".")
        .map((str) => str.split(""));
    return (
        <>
            <span>
                <SlotText value={beforeDecimal[0]} />
                <SlotText value={beforeDecimal[1]} />
                <SlotText value={beforeDecimal[2]} />
            </span>
            <AnimatePresence initial={false}>
                {extended && (
                    <motion.span
                        className="inline-flex overflow-hidden"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <span>.</span>
                        <SlotText value={afterDecimal[0]} />
                        <SlotText value={afterDecimal[1]} />
                        <SlotText value={afterDecimal[2]} />
                    </motion.span>
                )}
            </AnimatePresence>

        </>
    );
}