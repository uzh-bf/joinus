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
          <CitationSegment
              backgroundColor={"antiquewhite"}/>
          <AdvantagesSegment
              backgroundColor={"azure"}/>
          <ProjectSegment
              backgroundColor={"cornsilk"}/>
          <TeamSegment
              headerText="Unsere drei Teams:"
              backgroundColor={"honeydew"}/>
          <RequirementSegment
              backgroundColor={"ghostwhite"}/>
          <InstituteSegment
              backgroundColor={"lightcyan"}/>
          <ApplicationFormSegment
              backgroundColor={"white"}/>
      </ResponsiveContainer>)
  }
}


export default IndexPage
