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
      return(
      <ResponsiveContainer>
          <CitationSegment/>
          <AdvantagesSegment/>
          <ProjectSegment/>
          <TeamSegment
              headerText="Unsere drei Teams:"/>
          <RequirementSegment
              backgorundColor={"lightgrey"}/>
          <InstituteSegment/>
          <ApplicationFormSegment/>
      </ResponsiveContainer>)
  }
}


export default IndexPage
