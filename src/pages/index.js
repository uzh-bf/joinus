import React from 'react'
import {ResponsiveContainer} from "../components/ContainerComponents";
import {
    AdvantagesSegment,
    ApplicationFormSegment,
    CitationSegment,
    InstituteSegment,
    ProjectSegment,
    RequirementSegment,
    TeamSegment
} from "../components/segments/index";
import {Footer} from "../components/Footer";


/* eslint-disable react/no-multi-comp */
class IndexPage extends React.Component{

    state = {};

    handleChange = (e, { value }) => this.setState({ value })

    render() {
    const mobile = window.innerWidth < 775;
    return(
      <ResponsiveContainer>
          <CitationSegment
              mobile={mobile}
              backgroundColor={"white"}/>
          <AdvantagesSegment
              backgroundColor={"white"}/>
          <ProjectSegment
              backgroundColor={"white"}/>
          <TeamSegment
              headerText="Unsere drei Teams:"
              backgroundColor={"white"}/>
          <RequirementSegment
              backgroundColor={"white"}/>
          <InstituteSegment
              backgroundColor={"white"}/>
          <ApplicationFormSegment
              backgroundColor={"white"}/>
      </ResponsiveContainer>)
  }
}


export default IndexPage
