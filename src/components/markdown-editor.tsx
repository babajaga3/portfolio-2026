"use client";

import {
  BoldItalicUnderlineToggles,
  MDXEditor,
  type MDXEditorMethods,
  UndoRedo,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import type { RefObject } from "react";

interface MarkdownEditorProps {
  markdown: string;
  editorRef?: RefObject<MDXEditorMethods | null>;
}

const MarkdownEditor = ({ markdown, editorRef }: MarkdownEditorProps) => {
  return (
    <MDXEditor
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        toolbarPlugin({
          toolbarPosition: "top",
          toolbarClassName: "",
          toolbarContents: () => (
            <>
              <UndoRedo  />
              <BoldItalicUnderlineToggles />
            </>
          ),
        }),
      ]}
    />
  );
};

export default MarkdownEditor;
