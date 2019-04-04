import React from 'react'
import {ResponsiveContainer} from "../components/ContainerComponents";
import {
    AdvantagesSegment,
    ApplicationFormSegment,
    CitationSegment,
    InstituteSegment,
    ProjectSegment,
    RequirementSegment,
    TeamSegment,
    FrameworkSegment
} from "../components/segments/index";

/* eslint-disable react/no-multi-comp */
class IndexPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return(
      <ResponsiveContainer>
          <CitationSegment
              backgroundColor={"white"}/>
          <AdvantagesSegment
              backgroundColor={"white"}/>
          <ProjectSegment
              backgroundColor={"white"}/>
          <FrameworkSegment
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
