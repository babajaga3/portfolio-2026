import { useHover } from "@/hooks/use-hover";

type GlitchExperimentProps = {
  children: string;
  className?: string;
};

export function GlitchExperiment({
  children,
  className,
}: GlitchExperimentProps) {
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  const onHoverEnd = () => {
  };

  const onHoverStart = () => {
    const stepMs = Math.max(10, Math.floor(1000 / 30));
    
    window.setInterval(() => {
      
      
    }, stepMs)
  };

  const { isHovered, ref } = useHover({
    onHoverStart,
    onHoverEnd,
  });

  return (
    <span className={className} ref={ref}>
      {children} {`is it hovered: ${isHovered}`}
    </span>
  );
}
