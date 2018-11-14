import {Card,Icon   ,Button} from "semantic-ui-react";
import React from "react";
const Btn = (upper) => (
    <Button
        icon

        attached='bottom'
        content='Click'
    >
        <Icon name={upper?'caret down':'caret up'} />
    </Button>
);
const ProjectCard = ({projectTitle,projectDescription,projectSubtitle,upper}) => (
    <Card style={{width:"32%"}}>{/*TODO schönere lösung finden (32%)*/}
        {upper?"":<Btn up={false}/>}
        <Card.Content attached='top'>
            <Card.Header>{projectTitle}</Card.Header>
            <Card.Meta>{projectSubtitle}</Card.Meta>
            <Card.Description>
                {projectDescription}
            </Card.Description>
        </Card.Content>
        {upper?<Btn up={true}/>:""}
    </Card>
);
export default ProjectCard