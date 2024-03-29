import React from 'react'

interface Props {
  title: string
  author: string
  children: React.ReactNode
}

function Citation({ title, author, children }: Props): React.ReactElement {
  return (
    <div>
      <h3 className="text-2xl font-normal font-thesans-bold">{title}</h3>

      <blockquote className="mt-4 mb-4 text-lg rounded-xl">
        {children}
      </blockquote>

      <p className="text-md">{author}</p>
    </div>
  )
}

export default Citation
