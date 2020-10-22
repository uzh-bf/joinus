import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import AdvantagesSegment from '../components/AdvantagesSegment'
import ApplicationFormSegment from '../components/ApplicationFormSegment'
import CitationSegment from '../components/CitationSegment'
import DepartmentSegment from '../components/DepartmentSegment'
import ProjectSegment from '../components/ProjectSegment'
import RequirementSegment from '../components/RequirementSegment'
import TeamSegment from '../components/TeamSegment'
import FrameworkSegment from '../components/FrameworkSegment'
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
