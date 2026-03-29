"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useHover } from "@/hooks/use-hover";

type GlitchProps = {
  children: string; // final text
  className?: string;
  stepMs?: number; // speed of revealing next char
  glitchFrames?: number; // how many random frames per char before locking it in
  symbols?: string; // allowed random chars
  hover?: boolean;
};

export function Glitch({
  children,
  className,
  stepMs = 20,
  glitchFrames = 10,
  symbols,
}: GlitchProps) {
  const bgSymbols = "";

  const chars = useMemo(
    () =>
      symbols ??
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    [symbols],
  );

  const { isHovered, ref } = useHover();

  const [display, setDisplay] = useState(() => "");
  const iRef = useRef(0); // which character we’re revealing
  const frameRef = useRef(0); // current glitch frame for this character
  const timerRef = useRef<number | null>(null);

  const intervalRef = useRef<number | null>(null);
  const stepRef = useRef(0);

  useEffect(() => {
    // reset when text changes
    setDisplay("");
    iRef.current = 0;
    frameRef.current = 0;

    const tick = () => {
      const i = iRef.current;
      if (i >= children.length) return;

      // Build the string each tick:
      // - locked part: children.slice(0, i)
      // - current char: random while glitching, then the final char
      // - rest: empty (or you can add faint placeholders if you want)
      const locked = children.slice(0, i);

      const isGlitching = frameRef.current < glitchFrames;
      const current = isGlitching
        ? chars[Math.floor(Math.random() * chars.length)]
        : children[i];

      setDisplay(locked + current);

      if (isGlitching) {
        frameRef.current += 1;
      } else {
        // move to next character
        iRef.current += 1;
        frameRef.current = 0;
      }

      timerRef.current = window.setTimeout(tick, stepMs);
    };

    timerRef.current = window.setTimeout(tick, stepMs);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [children, chars, stepMs, glitchFrames]);

  const start = () => {
    // avoid stacking intervals
    stop();

    const stepMs = Math.max(10, Math.floor(1000 / 30));

    intervalRef.current = window.setInterval(() => {
      stepRef.current += 1;

      const progress = stepRef.current / 100; // 0..1
      const revealedCount = Math.floor(progress * children.length);

      const next = children
        .split("")
        .map((ch, i) => {
          // keep spaces/punctuation stable (optional)
          if (ch === " " || ch === "\n" || ch === "\t") return ch;

          // reveal from left → right as progress increases
          if (i < revealedCount) return ch;

          // scramble unrevealed chars
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(next);

      if (stepRef.current >= 100) {
        stop();
      }
    }, stepMs); // setInterval ends here
  };

  return (
    <span className={className} ref={ref}>
      {display}
    </span>
  );
}

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { useHover } from "@/hooks/use-hover";

// type GlitchHoverTextProps = {
// 	text: string;
// 	className?: string;
// 	symbols?: string;
// 	fps?: number; // update frequency while animating
// 	resolveSteps?: number; // how many ticks until fully resolved
// };

// export function Glitch({
// 	text,
// 	className,
// 	symbols,
// 	fps = 30,
// 	resolveSteps = 50,
// }: GlitchHoverTextProps) {
// 	const chars = useMemo(
// 		() =>
// 			symbols ??
// 			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
// 		[symbols],
// 	);

// 	const [display, setDisplay] = useState(text);
// 	const intervalRef = useRef<number | null>(null);
// 	const stepRef = useRef(0);

// 	// keep display in sync if `text` changes externally
// 	useEffect(() => setDisplay(text), [text]);

// 	const stop = () => {
// 		if (intervalRef.current) {
// 			window.clearInterval(intervalRef.current);
// 			intervalRef.current = null;
// 		}
// 		stepRef.current = 0;
// 		setDisplay(text);
// 	};

// 	const start = () => {
//     console.log('start')

// 		// avoid stacking intervals
// 		stop();

// 		const stepMs = Math.max(10, Math.floor(1000 / fps));

// 		intervalRef.current = window.setInterval(() => {
// 			stepRef.current += 1;

// 			const progress = stepRef.current / resolveSteps; // 0..1
// 			const revealedCount = Math.floor(progress * text.length);

// 			const next = text
// 				.split("")
// 				.map((ch, i) => {
// 					// keep spaces/punctuation stable (optional)
// 					if (ch === " " || ch === "\n" || ch === "\t") return ch;

// 					// reveal from left → right as progress increases
// 					if (i < revealedCount) return ch;

// 					// scramble unrevealed chars
// 					return chars[Math.floor(Math.random() * chars.length)];
// 				})
// 				.join("");

// 			setDisplay(next);

// 			if (stepRef.current >= resolveSteps) {
// 				stop();
// 			}
// 		}, stepMs);
// 	};

// 	console.log(display)

// 	useEffect(() => {
// 		return () => stop(); // cleanup on unmount
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	});

// 	const { ref } = useHover({
// 		onHoverStart: start,
// 		onHoverEnd: stop,
// 	});

// 	return (
// 		<span className={className} ref={ref}>
// 			{display}
// 		</span>
// 	);
// }
