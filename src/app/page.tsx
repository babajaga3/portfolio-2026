"use client";

import Image from "next/image";
import Link from "next/link";
import { GlitchExperiment } from "@/components/experimental-glitch";
import { Geodata } from "@/components/geodata";
import { Highlight } from "@/components/highlight";
import { WindowsTab } from "@/components/windows-tab";
import { cn } from "@/lib/utils";
import { useTabs } from "@/stores/tabs";

export default function HomePage() {
  const activeTab = useTabs((state) => state.activeTab);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-4 bg-[#fefeff] p-4 font-mono text-[#152c49] underline-offset-6">
      <WindowsTab
        className={cn(
          "fixed top-40 right-30",
          activeTab ? "z-1" : "z-0",
          "hidden lg:block",
        )}
        title="Kodak UltraMax 400, Austria"
      >
        <Image
          alt="Tom's Portfolio"
          className="pointer-events-none p-2 hover:cursor-all-scroll"
          height={650}
          loading="eager"
          src="https://cdn.tomabourov.com/portfolio/001.jpg"
          width={650}
        />
      </WindowsTab>

      <Geodata />

      <nav className="flex flex-row items-center justify-between gap-8 pt-12 pb-8 pl-16">
        <Link className="hover:underline" href="/about">
          /contact
        </Link>
        <Link className="hover:underline" href="/projects">
          /projects
        </Link>
        <Link className="hover:underline" href="/contact">
          /archive
        </Link>
      </nav>

      <div className="flex w-[40%] flex-col gap-12 pl-16">
        <span>
          computer science and psychology at{" "}
          <Highlight link="https://aubg.edu/">aubg</Highlight>; interested in
          science, tech, design, photography; occasionally silly;
        </span>

        <div className="flex flex-col gap-4">
          <span className="underline">experience:</span>

          <span>
            - currently working at{" "}
            <Highlight link="https://denshi.bg">denshi</Highlight>; shipping
            frontend solutions in <Highlight>React</Highlight> with occasional
            backend work in <Highlight>C#</Highlight> and{" "}
            <Highlight>.NET</Highlight>;{" "}
          </span>

          <span>
            - worked at{" "}
            <Highlight link="https://commentcloud.tech">
              comment cloudtech kft.
            </Highlight>{" "}
            - hungarian startup deploying{" "}
            <Highlight link="https://cleverev.net">cleverev</Highlight> - an ev
            management software; worked on full-stack features with{" "}
            <Highlight>nodejs</Highlight> and{" "}
            <Highlight>cloudflare workers</Highlight>;{" "}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="underline">interests:</span>

          <span>
            - photography and videography; mainly digital, occasionally analog
          </span>

          <span>
            - travelling; so far, i have been{" "}
            <Highlight link="/travel" target="_parent">
              here
            </Highlight>
          </span>

          {/*<Glitch>glitch is a text effect</Glitch>*/}

          <GlitchExperiment>flight to sofia</GlitchExperiment>
        </div>
      </div>
    </main>
  );
}
