import Image from 'next/image'
import React from 'react'

function ProjectDetails({
  img,
  title,
  desc,
  cite,
  citeName,
  cite2,
  cite2Name,
}) {
  const ImageSrc = require(`../../../public/images/${img}`)
  return (
    <div className="flex flex-col gap-8 md:gap-16 md:flex-row">
      <div className="flex-initial md:w-[400px]">
        <div className="relative">
          <Image src={ImageSrc} layout="responsive" alt="Project Image" />
        </div>
      </div>
      <div className="flex-1">
        <p className="prose prose-lg max-w-none">{desc}</p>

        {cite && (
          <>
            <blockquote className="mt-0 mb-2 rounded">{cite}</blockquote>

            <div className="text-lg text-right font-thesans-plain">
              {citeName}
            </div>
          </>
        )}

        {cite2 && (
          <>
            <blockquote className="mt-4 mb-2 rounded">{cite2}</blockquote>

            <div className="text-lg text-right font-thesans-plain">
              {cite2Name}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectDetails
