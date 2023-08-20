"use client";

import { useEffect } from "react";
import { PowerGlitch, PowerGlitchOptions, RecursivePartial } from "powerglitch";

import { Icons } from "@/components/ui/icons";

const glitchConfig: RecursivePartial<PowerGlitchOptions> = {
  playMode: "always",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 2000,
    easing: "ease-in-out",
  },
  glitchTimeSpan: {
    start: 0.5,
    end: 0.7,
  },
  shake: {
    velocity: 15,
    amplitudeX: 0.2,
    amplitudeY: 0.2,
  },
  slice: {
    count: 6,
    velocity: 15,
    minHeight: 0.02,
    maxHeight: 0.15,
    hueRotate: true,
  },
  pulse: false,
};

const GlitchIcon = () => {
  useEffect(() => {
    PowerGlitch.glitch(".glitch", glitchConfig);
  }, []);

  return <Icons.logo className="glitch" />;
};

export default GlitchIcon;
