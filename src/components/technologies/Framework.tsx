import Image from 'next/image'
import React from 'react'

interface Props {
  image: string
  title: string
}

function Framework({ image, title }: Props) {
  const ImageSrc = require(`../../../public/images/slideshow/${image}`)
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-16">
        <Image src={ImageSrc} layout="fill" objectFit="contain" />
      </div>
      <p className="mt-2 text-lg text-center font-thesans-plain">{title}</p>
    </div>
  )
}

export default Framework
