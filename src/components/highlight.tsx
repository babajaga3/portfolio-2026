import Link from "next/link";
import type { HTMLAttributeAnchorTarget } from "react";

export function Highlight({
  children,
  link,
  target 
}: {
  children: React.ReactNode;
  link?: string;
  target?: HTMLAttributeAnchorTarget
}) {
  if (link) {
    return (
      <Link
        className="font-semibold font-serif underline hover:text-blue-800"
        href={link}
        target={target ?? "_blank"}
      >
        {children}
      </Link>
    );
  }

  return <span className="font-semibold font-serif">{children}</span>;
}
