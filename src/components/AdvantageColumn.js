import {Grid, Header, Icon} from "semantic-ui-react";
import React from "react";

const AdvantageColumn= ({iconName, iconColor, advantageTitle, advantageText}) => (
    <Grid.Column>
        <div style={{margin: "0 auto", width: "120px"}}>
            <Icon circular inverted color={iconColor} size='huge' name={iconName}/>
        </div>
        <Header as='h3' textAlign='center' style={{fontSize: "2em"}}>
            {advantageTitle}
        </Header>
        <p style={{fontSize: "1.33em", "text-align":"justify"}}>
            {advantageText}
        </p>
    </Grid.Column>
);

export default AdvantageColumn;