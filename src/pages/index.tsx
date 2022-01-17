import Head from 'next/head'
import React from 'react'
import AdvantagesSegment from '../components/advantages/AdvantagesSegment'
import ApplicationFormSegment from '../components/application/ApplicationFormSegment'
import BurgerMenu from '../components/BurgerMenu'
import CitationSegment from '../components/citations/CitationSegment'
import DepartmentSegment from '../components/employees/DepartmentSegment'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PositionSegment from '../components/positions/PositionSegment'
import ProjectSegment from '../components/projects/ProjectSegment'
import RequirementSegment from '../components/requirements/RequirementSegment'
import TeamSegment from '../components/teams/TeamSegment'
import FrameworkSegment from '../components/technologies/FrameworkSegment'

function Home() {
  return (
    <>
      <Head>
        <html lang="de" />
      </Head>

      <BurgerMenu />

      <Header />

      <CitationSegment backgroundColor="white" />

      <AdvantagesSegment backgroundColor="white" />

      <ProjectSegment backgroundColor="white" />

      <PositionSegment backgroundColor="white" />

      <FrameworkSegment backgroundColor="white" />

      <RequirementSegment backgroundColor="white" />

      <TeamSegment backgroundColor="white" />

      <DepartmentSegment backgroundColor="white" />

      <ApplicationFormSegment backgroundColor="white" />

      <Footer />
    </>
  )
}

export default Home
