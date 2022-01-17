import Image from 'next/image'
import React from 'react'

interface Props {
  teamName: string
  imageSrc: string
  leaderName: string
  leaderPosition: string
  teamDescription: string
}

function TeamColumn({
  teamName,
  imageSrc,
  leaderName,
  leaderPosition,
  teamDescription,
}: Props) {
  const ImageSrc = require(`../../../public/images/people/${imageSrc}`)
  return (
    <div className="text-center">
      <h4 className="text-2xl font-normal md:text-3xl font-thesans-bold">
        {teamName}
      </h4>

      <div className="relative h-64">
        <Image src={ImageSrc} layout="fill" objectFit="contain" />
      </div>

      <div className="mt-4 text-xl font-normal md:text-2xl font-thesans-bold">
        {leaderName}
      </div>

      <div className="mt-4">{leaderPosition}</div>

      <blockquote className="rounded-xl">{teamDescription}</blockquote>
    </div>
  )
}

export default TeamColumn
