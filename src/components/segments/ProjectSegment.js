import {Card, Grid, Header, Segment} from "semantic-ui-react";
import React from "react";
import ProjectCard from "../ProjectCard";

const ProjectSegment = () => (
    <Segment style={{padding: "8em 0em"}} vertical>
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Helf uns bei diesen oder ähnlichen Projekten:
                </Header>
            </Grid.Row>
            <Grid.Row centered>
                <Card.Group>
                    <ProjectCard
                        upper={true}
                        projectTitle="Klicker"
                        projectSubtitle="The new way to ask questions"
                        projectDescription="Roli developed a website that does x, using y and z. Klicker is now used by 1000000000 people all around the world."
                    />
                    <ProjectCard
                        upper={true}
                        projectTitle="Klicker"
                        projectSubtitle="The new way to ask questions"
                        projectDescription="Roli developed a website that does x, using y and z. Klicker is now used by 1000000000 people all around the world."
                    />
                    <ProjectCard
                        upper={true}
                        projectTitle="Klicker"
                        projectSubtitle="The new way to ask questions"
                        projectDescription="Roli developed a website that does x, using y and z. Klicker is now used by 1000000000 people all around the world."
                    />
                </Card.Group>
            </Grid.Row>
            <Grid.Row centered>
                <Segment style={{width:"100%"}}>
                    Question & Session Management
                    Based on the newly introduced question pool, lecturers can manage all their past as well as future questions in one place. The advanced question management allows lecturers to create and arrange questions into sessions prior to their lectures, allowing them to plan their lectures in advance.

                    Dedicated Presentation Mode
                    With the dedicated presentation mode, lecturers always have the most important information available at a glance. The session evaluation screen can be displayed independently from the remainder of the application and is purely focused on presenting the results of an evaluation as cleanly as possible.

                    Advanced Question Types
                    KlickerUZH offers a range of different question types such as single choice (SC), multiple choice (MC), free text (FT), and number ranges (NR). As an additional feature, solutions can be defined and displayed for SC and MC questions. Further question types are still on the roadmap.

                    Integrated Feedback-Channel
                    The integrated feedback channel and confusion barometer allow lecturers to receive instant feedback on the difficulty and speed of their lecture and enable them to react to any occurring questions and problems on the fly.

                    Multi-Language Support
                    KlickerUZH is already available in German and English. It was made to be easily extendable to further languages.
                </Segment>
            </Grid.Row>
            <Grid.Row centered>
                <Card.Group style={{width:"100%"}}>
                    <ProjectCard
                        projectTitle="Klicker"
                        projectSubtitle="The new way to ask questions"
                        projectDescription="Roli developed a website that does x, using y and z. Klicker is now used by 1000000000 people all around the world."
                    />
                    <ProjectCard
                        projectTitle="Klicker"
                        projectSubtitle="The new way to ask questions"
                        projectDescription="Roli developed a website that does x, using y and z. Klicker is now used by 1000000000 people all around the world."
                    />
                    <ProjectCard
                        projectTitle="Klicker"
                        projectSubtitle="The new way to ask questions"
                        projectDescription="Roli developed a website that does x, using y and z. Klicker is now used by 1000000000 people all around the world."
                    />
                </Card.Group>
            </Grid.Row>
        </Grid>
    </Segment>
);

export default ProjectSegment;