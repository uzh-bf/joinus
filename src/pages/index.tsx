import React from 'react'

import ResponsiveContainer from '../components/containers/ResponsiveContainer'
import AdvantagesSegment from '../components/segments/AdvantagesSegment'
import ApplicationFormSegment from '../components/segments/ApplicationFormSegment'
import CitationSegment from '../components/segments/CitationSegment'
import DepartmentSegment from '../components/segments/DepartmentSegment'
import ProjectSegment from '../components/segments/ProjectSegment'
import RequirementSegment from '../components/segments/RequirementSegment'
import TeamSegment from '../components/segments/TeamSegment'
import FrameworkSegment from '../components/segments/FrameworkSegment'

function Home() {
  return (
    <ResponsiveContainer>
      <CitationSegment backgroundColor={'white'} />
      <AdvantagesSegment backgroundColor={'white'} />
      <ProjectSegment backgroundColor={'white'} />
      <FrameworkSegment backgroundColor={'white'} />
      <TeamSegment headerText="Unsere drei Teams:" backgroundColor={'white'} />
      <RequirementSegment backgroundColor={'white'} />
      <DepartmentSegment backgroundColor={'white'} />
      <ApplicationFormSegment backgroundColor={'white'} />
    </ResponsiveContainer>
  )
}

export default Home
