import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import process from 'process'

const postsDirectory = 'src/models/blog/posts'
const mdDirectory = path.join(postsDirectory, 'md')

function extractHeadings(text) {
  const tokens = marked.lexer(text)
  const headings = tokens
    .filter((token) => token.type === 'heading')
    .map((heading) => {
      const anchor = heading.text.toLowerCase().replace(/[^\w]+/g, '-')
      return { level: heading.depth, title: heading.text, anchor }
    })
  return headings
}


export async function transformPosts() {
  fs.readdir(mdDirectory, (err, files) => {
    if (err) {
      console.log(postsDirectory)
      console.error('Could not list the directory.', err)
      process.exit(1)
    }

    console.log(`Found files`, files)
  
    files.forEach((file, index) => {
      const filePath = path.join(mdDirectory, file)
      console.log(filePath)
  
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          console.error(`Could not read file: ${file}`, err)
          return
        }

        const updatedContent = content.replace(/(#+)\s+(.*)/g, (match, level, title) => {
          const anchor = title.toLowerCase().replace(/[^\w]+/g, '-')
          return `${level} ${title} <a id="${anchor}"></a>`
        })

        const htmlContent = marked(updatedContent)
  
        // const htmlContent = marked(content)
        const headings = extractHeadings(content)
        const jsonContent = JSON.stringify({ html: htmlContent, toc: headings })
        const writeDirectory = 'public/files/blog/'
  
        fs.writeFile(path.join(writeDirectory, `${path.basename(file, '.md')}.json`), jsonContent, 'utf8', (err) => {
          if (err) {
            console.error(`Could not write JSON for file: ${file}`, err)
          } else {
            console.log(`JSON generated for ${file}`)
          }
        })
      })
    })
  })
}