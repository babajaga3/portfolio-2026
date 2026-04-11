import Clock from "react-live-clock";
import { cn } from "@/lib/utils";
import { useQuery } from '@tanstack/react-query'
import { getWeather } from "@/api/weather";

export function Geodata() {
  const { data: weather } = useQuery({
    queryKey: ['weather'],
    queryFn: getWeather,
  })
  
  return (
    <div
      className={cn(
        "sm:join-[fixed,top-0,right-0,flex,flex-col,items-end,justify-between,gap-2,p-4] hidden",
      )}
    >
      <Clock
        className="text-4xl"
        format="HH:mm:ss"
        noSsr
        ticking
        timezone="Europe/Sofia"
      />
      <span>Sofia, BG</span>
      <span>{weather?.current()?.variables(0)?.value().toFixed(1)} Cº</span>
    </div>
  );
}
