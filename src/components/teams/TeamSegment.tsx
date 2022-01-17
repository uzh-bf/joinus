import React from 'react'
import { teams } from '../../data'
import SegmentContainer from '../SegmentContainer'
import TeamColumn from './TeamColumn'

export interface Props {
  backgroundColor: string
}

function TeamSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="teams"
      title="Unsere drei Teams"
      nextUp="#department"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col gap-8 md:flex-row">
        {teams.map((team) => (
          <TeamColumn key={team.teamName} {...team} />
        ))}
      </div>
    </SegmentContainer>
  )
}

export default TeamSegment
