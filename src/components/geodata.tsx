import { useQuery } from "@tanstack/react-query";
import Clock from "react-live-clock";
import { getWeather } from "@/api/weather";
import { cn } from "@/lib/utils";
import { weatherCodes } from "@/lib/weather";

export function Geodata() {
  const { data: weather } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  const temp = weather?.current()?.variables(0)?.value().toFixed(1);
  const isDay = weather?.current()?.variables(1)?.value().toFixed(1).charAt(0);
  const weatherCode = weather
    ?.current()
    ?.variables(2)
    ?.value()
    .toFixed(1)
    .charAt(0);

  // TODO make loading animation that keeps the text scrambled until it loads
  // - unscramble animation when it loads

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
      <div className="flex items-center gap-1">
        <div>{weatherCodes(isDay ?? "")[weatherCode ?? ""]?.icon}</div>
        <span>{temp} Cº</span>
      </div>
    </div>
  );
}
