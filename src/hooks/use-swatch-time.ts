import { useEffect, useState } from "react";

export function useSwatchTime({ decimal = false } = {}) {
  const [beats, setBeats] = useState(0);
  const [utc1Time, setUtc1Time] = useState({ h: 0, m: 0, s: 0 });
 
  useEffect(() => {
    function calculate() {
      const now = new Date();
 
      // Convert local time to UTC+1:
      // getTime() gives ms since epoch (UTC).
      // UTC+1 offset is +60 minutes = +3600000 ms.
      const utc1Ms = now.getTime() + now.getTimezoneOffset() * 60_000 + 3_600_000;
      const utc1 = new Date(utc1Ms);
 
      const h = utc1.getHours();
      const m = utc1.getMinutes();
      const s = utc1.getSeconds() + utc1.getMilliseconds() / 1000;
 
      const raw = (3600 * h + 60 * m + s) / 86.4;
      const result = decimal ? raw : Math.floor(raw);
 
      setBeats(result);
      setUtc1Time({ h, m, s: Math.floor(s) });
    }
 
    // Use a faster interval in decimal mode so the sub-beat value
    // visibly updates rather than jumping once per second.
    const ms = decimal ? 1000 : 1000;
    calculate();
    const id = setInterval(calculate, ms);
    return () => clearInterval(id);
  }, [decimal]);
 
  return { beats, utc1Time };
}