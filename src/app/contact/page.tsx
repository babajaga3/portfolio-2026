'use client'

import type { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor"
import dynamic from "next/dynamic"
import { forwardRef } from "react"

const MarkdownEditor = dynamic(() => import("@/components/markdown-editor"), { ssr: false })

// const MarkdownEditor = forwardRef<MDXEditorMethods | null, MDXEditorProps>((props, ref) => <Editor {...props} editorRef={ref} />)

export default function ContactPage() {
  return <MarkdownEditor markdown="hello there" />
}