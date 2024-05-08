import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/base16/ros-pine-moon.min.css'
import TableOfContents from '@components/molecules/TableOfContents'
import { useEffect, useRef } from 'react'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

export default function BlogPost(data) {
  const { title, content, tagline, date, topics } = data
  const { html, toc } = content
  // console.log(toc)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const codeElements = container.querySelectorAll('pre code')

      codeElements.forEach((code) => {
        hljs.highlightElement(code)
      })
    }
  }, [content])

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <article className="blog-post">
      <h3 className="blog-post__title">{title}</h3>
      <p className="blog-post__tagline">{tagline}</p>
      <p className="blog-post__authored">
        Chelsie Johnston
        <br />
        {formattedDate}
      </p>
      <ul className="blog-post__topics">
        {topics &&
          topics.map((topic, index) => (
            <li key={index} className="chiclet">
              {topic}
            </li>
          ))}
      </ul>
      {/* <div className="blog-post__toc">
        <div className="blog-post__toc__sticky-wrapper">
          <h4>Table of Contents</h4>
          <TableOfContents headings={toc} />
        </div>
      </div> */}
      {/* Using dangerouslySetInnerHTML because the content is trusted and comes from a controlled source */}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: html }}
        className="blog-post__content"
      ></div>
    </article>
  )
}
