import React from 'react'
import ScrollDown from './ScrollDown'

export interface Props {
  id: string
  title?: string
  children: React.ReactNode
  backgroundColor?: string
  nextUp?: string
}

function SegmentContainer({
  id,
  backgroundColor,
  title,
  nextUp,
  children,
}: Props): React.ReactElement {
  if (title) {
    return (
      <div
        className="px-4 py-8 border-0 border-t border-gray-200 border-solid md:p-16"
        style={{ backgroundColor }}
        id={id}
      >
        <div className="m-auto max-w-[90rem]">
          <h3 className="!mb-12 text-3xl font-normal text-center md:text-4xl font-thesans-bold">
            {title}
          </h3>
          {children}
        </div>

        {nextUp && <ScrollDown scrollTo={nextUp} />}
      </div>
    )
  }

  return (
    <div
      className="m-auto py-16 max-w-[90rem]"
      style={{ backgroundColor }}
      id={id}
    >
      {children}
      {nextUp && <ScrollDown scrollTo={nextUp} />}
    </div>
  )
}

export default SegmentContainer
