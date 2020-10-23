import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import AdvantagesSegment from '../components/advantages/AdvantagesSegment'
import ApplicationFormSegment from '../components/application/ApplicationFormSegment'
import CitationSegment from '../components/citations/CitationSegment'
import DepartmentSegment from '../components/employees/DepartmentSegment'
import ProjectSegment from '../components/projects/ProjectSegment'
import RequirementSegment from '../components/requirements/RequirementSegment'
import TeamSegment from '../components/teams/TeamSegment'
import FrameworkSegment from '../components/technologies/FrameworkSegment'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Head>
        <html lang="de" />
      </Head>

      <BurgerMenu />

      <Header />

      <CitationSegment backgroundColor={'white'} />
      <AdvantagesSegment backgroundColor={'white'} />
      <ProjectSegment backgroundColor={'white'} />
      <FrameworkSegment backgroundColor={'white'} />
      <TeamSegment backgroundColor={'white'} />
      <RequirementSegment backgroundColor={'white'} />
      <DepartmentSegment backgroundColor={'white'} />
      <ApplicationFormSegment backgroundColor={'white'} />

      <Footer />
    </>
  )
}

export default Home
