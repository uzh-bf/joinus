import {Header, Image, Segment, Grid, Button} from "semantic-ui-react";
import TeamBild from "../../images/institut.jpg";
import React, {Component} from "react";

class InstituteSegment extends Component {
    state = {
        institute: false,
    };

    hideInsti = () => this.setState({institute: false});
    showInsti = () => this.setState({institute: true});

    render() {
        const {backgroundColor} = this.props;
        return (
            <Segment style={{background: backgroundColor,}} vertical id="institute">
                <Grid container stackable verticalAlign='top'>
                    <Grid.Row>
                        <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                            Das Team:
                        </Header>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Button.Group style={{fontFamily: "IBM Plex Mono"}}>
                            <Button attached={"left"} active style={{fontFamily: "IBM Plex Mono"}}
                                    onClick={this.hideInsti}>Informatikteam</Button>
                            <Button attached={"right"} style={{fontFamily: "IBM Plex Mono"}}
                                    onClick={this.showInsti}>Institutsteam</Button>
                        </Button.Group>
                    </Grid.Row>
                    {
                        this.state.institute &&
                        <Grid.Row style={{maxHeight: 400, height: 'auto'}}>
                            <Image centered
                                   style={{width: "70%", height: "100%", objectFit: 'cover', borderRadius: '3px',}}
                                   src={TeamBild}/>
                        </Grid.Row>
                    }


                    <Grid.Row>
                        <p style={{fontSize: "1em"}}>
                            Am Institut arbeiten insgesamt rund 25 studentische Mitarbeiter TODO adjust?. Diese werden
                            von sechs
                            Festangestellten unter Kontrolle gehalten.
                        </p>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    };
}

export default InstituteSegment;