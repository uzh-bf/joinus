import {Header, Segment, Grid} from "semantic-ui-react";
import ReactIMG from "../../images/slideshow/react.jpg";
import SemanticUI from "../../images/slideshow/semanticui.png";
import GitLab from "../../images/slideshow/gitlab.png";
import Slim from "../../images/slideshow/slim.png";
import Docker from "../../images/slideshow/docker.png";
import Node from "../../images/slideshow/node.png";
import OpenOLAT from "../../images/slideshow/openolat.png";
import Python from "../../images/slideshow/python.png";
import Sentry from "../../images/slideshow/sentry.png";
import React from "react";

class FrameworkSegment extends React.Component {
    componentDidMount () {

    }


    render() {
        const {backgroundColor} = this.props;
        return ([

        <style jsx>{`
            // hello ugly CSS, but I don't want to waste too much time on this animation.


            @keyframes scrolling-animation {
            0% { margin-left: 0px;
            }
            100% { margin-left: -2000px;
            }
            }
            @-webkit-keyframes scrolling-animation {
            0% { margin-left: 0px;
            }
            100% { margin-left: -2000px;
            }
            }


            .slideshowContainer {
                max-width: 100%;
                overflow: hidden;
            }

            .slideshowContent {
                display: inline-flex;
                white-space: nowrap;
                padding: 50px 0;

                animation: scrolling-animation 66s linear infinite;
                animation-name: scrolling-animation;
                animation-duration: 35s;
                animation-timing-function: linear;
                animation-delay: 0s;
                animation-iteration-count: infinite;
                animation-direction: normal;
                animation-fill-mode: none;
                animation-play-state: running;

                -webkit-animation: scrolling-animation 35s linear infinite;
            }

            .slideshowContent:hover {
                animation-play-state: paused;
                -webkit-animation-play-state: paused;
            }

            .slideshowContent > div > img{
                padding: 0 50px;
                margin-bottom: 0;
                max-height: 90px;
                max-width: 100%;

            }

            .slideshowContent > div > p {
                position: absolute;
                left: 50%;
                transform: translateX(-54%);
                bottom: 0;

            }
            .slideshowContent > div {
                float:left;
                width: 300px;
                position: relative;
                height: 115px;
                -webkit-position: inline-block;
                position: inline-block;
            }

        `}</style>,

        <Segment style={{background: backgroundColor,}} vertical id="framework">
            <Grid container stackable verticalAlign='top'>
                <Grid.Row>
                    <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                        Unsere Lieblingstechnologien und Frameworks:
                    </Header>
                </Grid.Row>
            </Grid>

            <div class="slideshowContainer">
                <div class="slideshowContent">
                    <div>
                        <img src={Python} />
                        <p>Python für Statistiken und Modelle</p>
                    </div>

                    <div>
                        <img src={SemanticUI} />
                        <p>Semantic UI für Layouting</p>
                    </div>

                    <div>
                        <img src={ReactIMG} />
                        <p>ReactJS für performante Webapplikationen</p>
                    </div>

                    <div>
                        <img src={GitLab} />
                        <p>GitLab für Versionsmanagement und CI</p>
                    </div>

                    <div>
                        <img src={Slim} />
                        <p>Slim Framework für einfache PHP APIs</p>
                    </div>

                    <div>
                        <img src={Docker} />
                        <p>Docker für Containervirtualisierung von WebApps</p>
                    </div>

                    <div>
                        <img src={Node} />
                        <p>NodeJS als Backend für WebApps</p>
                    </div>

                    <div>
                        <img src={OpenOLAT} />
                        <p>OpenOLAT für eLearning Kurse</p>
                    </div>

                    <div>
                        <img src={Sentry} />
                        <p>Sentry zur Fehlererkennung von WebApps</p>
                    </div>

                    <div>
                        <img src={Python} />
                        <p>Python für Statistiken und Modelle</p>
                    </div>

                    <div>
                        <img src={SemanticUI} />
                        <p>Semantic UI für Layouting</p>
                    </div>

                    <div>
                        <img src={ReactIMG} />
                        <p>ReactJS für performante Webapplikationen</p>
                    </div>

                    <div>
                        <img src={GitLab} />
                        <p>GitLab für Versionsmanagement und CI</p>
                    </div>

                    <div>
                        <img src={Slim} />
                        <p>Slim Framework für einfache PHP APIs</p>
                    </div>

                    <div>
                        <img src={Docker} />
                        <p>Docker für Containervirtualisierung von WebApps</p>
                    </div>

                    <div>
                        <img src={Node} />
                        <p>NodeJS als Backend für WebApps</p>
                    </div>

                    <div>
                        <img src={OpenOLAT} />
                        <p>OpenOLAT für eLearning Kurse</p>
                    </div>

                    <div>
                        <img src={Sentry} />
                        <p>Sentry zur Fehlererkennung in WebApps</p>
                    </div>
                </div>
            </div>


        </Segment>]

        );
    };
}

export default FrameworkSegment;
