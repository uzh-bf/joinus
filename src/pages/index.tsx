import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import AdvantagesSegment from '../components/segments/AdvantagesSegment'
import ApplicationFormSegment from '../components/segments/ApplicationFormSegment'
import CitationSegment from '../components/segments/CitationSegment'
import DepartmentSegment from '../components/segments/DepartmentSegment'
import ProjectSegment from '../components/segments/ProjectSegment'
import RequirementSegment from '../components/segments/RequirementSegment'
import TeamSegment from '../components/segments/TeamSegment'
import FrameworkSegment from '../components/segments/FrameworkSegment'
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
      <TeamSegment headerText="Unsere drei Teams:" backgroundColor={'white'} />
      <RequirementSegment backgroundColor={'white'} />
      <DepartmentSegment backgroundColor={'white'} />
      <ApplicationFormSegment backgroundColor={'white'} />

      <Footer />
    </>
  )
}

export default Home
