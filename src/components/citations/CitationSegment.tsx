import Image from 'next/image'
import React from 'react'
import ImageManuel from '../../../public/images/people/manuel.jpg'
import ImagePascal from '../../../public/images/people/pascal.jpg'
import SegmentContainer from '../SegmentContainer'
import Citation from './Citation'

export interface Props {
  backgroundColor: string
}

function CitationSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="citations"
      nextUp="#advantages"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col items-center w-full gap-8 px-4 md:flex-row">
        <div className="flex-1 order-2 md:order-1">
          <Citation
            title="Flexibilität ist Trumpf"
            author="Manuel Keller, studierte Information Systems und leitet jetzt das Team Weiterbildung"
          >
            Mir gefiell am besten, dass ich sehr flexible Arbeitszeiten hattee. Vor
            Prüfungen konnte ich problemlos reduzieren oder aussetzen; während den
            Semesterferien wiederum mein Budget aufbessern.
          </Citation>
        </div>
        <div className="flex-initial order-1 md:order-2 w-[330px]">
          <div className="relative">
            <Image
              className="rounded-xl"
              src={ImageManuel}
              layout="responsive"
              alt="Manuel"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-8 px-4 mt-4 mt-8 md:mt-0 md:flex-row">
        <div className="flex-initial w-[330px]">
          <div className="relative">
            <Image
              className="rounded-xl"
              src={ImagePascal}
              layout="responsive"
              alt="Pascal"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <Citation
            title="Abwechslung und Eigenverantwortung"
            author="Pascal Zehnder, studierte Information Systems"
          >
            Mir gefällt, dass ich in meiner Arbeit am Institut selbst die
            Verantwortung für meine Projekte trage. Dadurch kann ich selber
            entscheiden, welche Technologien ich einsetzen will und lerne viel
            dabei.
          </Citation>
        </div>
      </div>
    </SegmentContainer>
  )
}

export default CitationSegment
