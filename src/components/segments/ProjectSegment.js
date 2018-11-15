import {Grid, Header, Segment, Button, Transition, Image} from "semantic-ui-react";
import React, {Component} from "react";
import Roli from '../../images/rolli.jpg'

class ProjectSegment extends Component {
    mapping = {
        '' : {
            img: '',
            text:'',
        },
        klicker: {
            img: 'rolli.jpg',
            text: "This is the klicker text"
        },
        dynamics: {
            img: 'manuel.jpg',
            text: "This is the ms dynamics text"
        },

    };

    state = {
        show: false,
        showWhat: '',
    };

    showKlicker = () => {
        this.setState({show: false});
        this.setState({showWhat: 'klicker'});
        this.setState({show: true});
    }
    showDynamics = () => {
        this.setState({show: false});
        this.setState({showWhat: 'dynamics'});
        this.setState({show: true});
    }

    render() {
        const {backgroundColor} = this.props;
        return (
        <Segment style={{background: backgroundColor,}} vertical id="project">
            <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                Helf uns bei diesen oder ähnlichen Projekten:
            </Header>
            <Grid container celled stackable verticalAlign='top' columns='equal'>
                <Grid.Row centered celled columns='equal'>
                    <Grid.Column>
                        <Header as='h5' textAlign='center'>
                            Klicker
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showKlicker} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' textAlign='center'>
                            Klicker
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showKlicker} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' textAlign='center'>
                            Klicker
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showKlicker} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                    <Transition visible={this.state.show} animation='slide down' duration={300}>
                        {
                            <Grid.Row centered>
                                <Grid.Column width={6}>
                                    {
                                       this.state.show &&
                                       <Image src={ require('../../images/' + this.mapping[this.state.showWhat].img)}/>
                                    }
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    {
                                        this.state.show &&
                                        <p>{this.mapping[this.state.showWhat].text}</p>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                        }
                    </Transition>
                <Grid.Row centered celled columns='equal'>
                    <Grid.Column>
                        <Header as='h5' textAlign='center'>
                            Dynamics
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showDynamics} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' textAlign='center'>
                            Dynamics
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showDynamics} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' textAlign='center'>
                            Dynamics
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showDynamics} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
)}}

export default ProjectSegment;