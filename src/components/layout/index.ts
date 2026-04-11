import { createLayout } from "@babajaga3/react-bricks";

export const PageLayout = createLayout(
  {
    Main: {
      as: "main",
      className:
        "min-h-screen flex flex-col gap-8 items-start font-mono text-[#152c49]",
    },
    Pane: {
      className: "w-[50%]"
    },
    Nav: {
      as: "nav",
      className: "flex flex-row items-center justify-between gap-8 pt-10 pl-12",
    },
    Text: {
      as: "span",
      className: "w-full",
    },
  },
  "MobileLayout",
);
