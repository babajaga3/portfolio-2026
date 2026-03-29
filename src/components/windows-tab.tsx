import { cva } from "class-variance-authority";
import { Minus, X } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
import Draggable from "react-draggable";
import { cn } from "@/lib/utils";
import folder from "../../public/icons/folder.ico";
import openFolder from "../../public/icons/opened-folder.ico";
import { Button } from "./ui/button";
import { useTabs } from "@/stores/tabs";

interface WindowsTabProps {
  className?: string;
  children: ReactNode;
  title: string;
}

export function WindowsTab({ className, children, title }: WindowsTabProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState({ minimize: false, close: false });
  const setActiveTab = useTabs((state) => state.setActiveTab);

  const windowsStyle = cva(
    "border-t-2 border-t-white border-r-2 border-r-gray-800 border-b-2 border-b-gray-800 border-l-2 border-l-white bg-[#C0C0C0] p-0.75",
  );

  return !show.minimize ? (
    <Draggable onStart={() => setActiveTab(nodeRef)} nodeRef={nodeRef}>
      <div className={cn(windowsStyle(), className)} ref={nodeRef}>
        <div className="flex h-8 items-center justify-between bg-[#00007F] px-2">
          <div className="flex items-center gap-2">
            <Image
              alt="Windows 95 Folder"
              className="pointer-events-none"
              height={20}
              src={openFolder}
              width={20}
            />
            <span className="font-bold font-windows-95 text-white">
              {title}
            </span>
          </div>
          <div className="flex gap-1">
            <Button
              className="h-5 w-5"
              onClick={() => setShow({ minimize: true, close: false })}
              size="icon"
              variant={"windows"}
            >
              <Minus />
            </Button>
            <Button
              className="h-5 w-5"
              onClick={() => setShow({ minimize: true, close: true })}
              size="icon"
              variant={"windows"}
            >
              <X />
            </Button>
          </div>
        </div>
        <div className="pointer-events-none p-2">{children}</div>
      </div>
    </Draggable>
  ) : (
    !show.close && (
      <Button
        className="absolute bottom-2 left-2 flex items-center justify-center"
        onClick={() => setShow({ minimize: false, close: false })}
        variant={"windows"}
      >
        <Image
          alt="Windows 95 Folder"
          className="pointer-events-none"
          height={20}
          src={folder}
          width={20}
        />
        {title}
      </Button>
    )
  );
}
