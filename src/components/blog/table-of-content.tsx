'use client'

import useScrollSpy from '@/hooks/useScrollSpy'
import { useEffect, useRef, useState } from 'react'
import TOCLink from '../links/toc-link'

const TableOfContent = ({ slug }: { slug: string }) => {
  const [toc, setToc] = useState<any>()
  const minLevel =
    toc?.reduce(
      (min: any, item: any) => (item.level < min ? item.level : min),
      10
    ) ?? 0
  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3')
    console.log(headings)
    const headingArr: any = []
    headings.forEach((heading) => {
      const id = heading.id
      const level = +heading.tagName.replace('H', '')
      const text = heading.textContent + ''

      headingArr.push({ id, level, text })
    })

    setToc(headingArr)
  }, [slug])
  const activeSection = useScrollSpy()

  const lastPosition = useRef<number>(0)

  useEffect(() => {
    const container = document.getElementById('toc-container')
    const activeLink = document.getElementById(`link-${activeSection}`)

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop
      const cBottom = cTop + container.clientHeight

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop
      const lBottom = lTop + activeLink.clientHeight

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom

      const isScrollingUp = lastPosition.current > window.scrollY
      lastPosition.current = window.scrollY

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset

        container.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }, [activeSection])
  return (
    <>
      <div
        id="toc-container"
        className="hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block"
      >
        <h3 className="text-gray-900 dark:text-gray-100 md:text-xl">
          Table of Contents
        </h3>
        <div className="mt-4 flex flex-col space-y-2 text-sm">
          {toc
            ? toc.map(
                ({
                  id,
                  level,
                  text,
                }: {
                  id: string
                  level: number
                  text: string
                }) => (
                  <TOCLink
                    id={id}
                    key={id}
                    activeSection={activeSection}
                    level={level}
                    minLevel={minLevel}
                    text={text}
                  />
                )
              )
            : null}
        </div>
      </div>
    </>
  )
}

export default TableOfContent
