import { readFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const lessonLibrary = readFileSync(join(projectRoot, 'src/Lessons.tsx'), 'utf8')
const imports = [...lessonLibrary.matchAll(/import\\s+\\w+\\s+from\\s+['\"]\\.\\/content\\/([^'\"]+\\.md)\\?raw['\"]/g)]
const files = imports.map((match) => join(projectRoot, 'src', 'content', match[1])).sort()
if (files.length === 0) {
  throw new Error('No Markdown lesson files were found under src/content.')
}

let totalMathNodes = 0
for (const file of files) {
  const source = readFileSync(file, 'utf8')
  const inlineDelimiters = [...source.matchAll(/(?<!\$)\$(?!\$)/g)].length
  const displayDelimiters = [...source.matchAll(/\$\$/g)].length
  const label = relative(process.cwd(), file)

  if (inlineDelimiters % 2 !== 0) {
    throw new Error(label + ' has an unmatched inline math delimiter.')
  }
  if (displayDelimiters % 2 !== 0) {
    throw new Error(label + ' has an unmatched display math delimiter.')
  }
  if (/\\\\[A-Za-z]/.test(source)) {
    throw new Error(label + ' contains a doubled backslash before a LaTeX command.')
  }

  const html = renderToStaticMarkup(
    createElement(
      ReactMarkdown,
      {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [[rehypeKatex, { throwOnError: true }]],
      },
      source,
    ),
  )

  if (html.includes('katex-error')) {
    throw new Error(label + ' contains a KaTeX rendering error.')
  }

  const mathNodes = (html.match(/class="katex"/g) ?? []).length
  if ((inlineDelimiters + displayDelimiters) > 0 && mathNodes === 0) {
    throw new Error(label + ' contains math delimiters but rendered no KaTeX nodes.')
  }

  totalMathNodes += mathNodes
  process.stdout.write('Validated ' + label + ': ' + mathNodes + ' rendered math expressions.\n')
}

process.stdout.write('Content validation passed: ' + files.length + ' Markdown file(s), ' + totalMathNodes + ' rendered math expression(s).\n')
