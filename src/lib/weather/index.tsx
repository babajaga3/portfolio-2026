import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  Moon,
  Snowflake,
  Sun,
  SunMedium,
} from "lucide-react";
import type { ReactNode } from "react";

interface WeatherCodes {
  [key: string]: {
    icon: ReactNode;
  };
}

export const weatherCodes = (isDay: string): WeatherCodes => ({
  "0": {
    icon: isDay === "1" ? <Sun /> : <Moon />,
  },
  "1": {
    icon: isDay === "1" ? <SunMedium /> : <Moon />,
  },
  "2": {
    icon: isDay === "1" ? <CloudSun /> : <CloudMoon />,
  },
  "3": {
    icon: isDay === "1" ? <Cloud /> : <CloudMoon />,
  },
  "45": {
    icon: <CloudFog />,
  },
  "48": {
    icon: <CloudFog />,
  },
  "51": {
    icon: isDay === "1" ? <CloudDrizzle /> : <CloudMoonRain />,
  },
  "53": {
    icon: isDay === "1" ? <CloudDrizzle /> : <CloudMoonRain />,
  },
  "55": {
    icon: isDay === "1" ? <CloudDrizzle /> : <CloudMoonRain />,
  },
  "56": {
    icon: isDay === "1" ? <CloudDrizzle /> : <CloudMoonRain />,
  },
  "57": {
    icon: isDay === "1" ? <CloudHail /> : <CloudMoonRain />,
  },
  "61": {
    icon: <CloudRainWind />,
  },
  "63": {
    icon: <CloudRainWind />,
  },
  "65": {
    icon: <CloudRainWind />,
  },
  "66": {
    icon: <CloudRainWind />,
  },
  "67": {
    icon: <CloudRainWind />,
  },
  "71": {
    icon: <CloudSnow />,
  },
  "73": {
    icon: <Snowflake />,
  },
  "75": {
    icon: <Snowflake />,
  },
  "77": {
    icon: <CloudSnow />,
  },
  "80": {
    icon: isDay === "1" ? <CloudDrizzle /> : <CloudMoonRain />,
  },
  "81": {
    icon: <CloudRainWind />,
  },
  "82": {
    icon: <CloudRainWind />,
  },
  "85": {
    icon: <CloudSnow />,
  },
  "86": {
    icon: <CloudSnow />,
  },
  "95": {
    icon: <CloudLightning />,
  },
  "96": {
    icon: <CloudHail />,
  },
  "99": {
    icon: <CloudLightning />,
  },
});
