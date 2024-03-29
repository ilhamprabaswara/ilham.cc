import * as React from 'react'
import UnstyledLink from './unstyle-link'

type TOCLinkProps = {
  id: string
  level: number
  minLevel: number
  text: string
  activeSection: string | null
}

export default function TOCLink({
  id,
  level,
  minLevel,
  text,
  activeSection,
}: TOCLinkProps) {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={
        activeSection === id
          ? 'text-gray-900 dark:text-gray-100'
          : 'text-gray-400 dark:text-gray-500'
      }
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  )
}
