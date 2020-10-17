import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

interface Props {
  backgroundColor: string
}

function FrameworkSegment({ backgroundColor }: Props) {
  return (
    <Segment style={{ background: backgroundColor }} vertical id="framework">
      <Grid container stackable verticalAlign="top">
        <Grid.Row>
          <Header
            as="h2"
            textAlign="center"
            style={{ fontSize: '2.5em', width: '100%' }}
          >
            Unsere Lieblingstechnologien und Frameworks:
          </Header>
        </Grid.Row>
      </Grid>
      <div className="slideshowContainer">
        <div className="slideshowContent">
          <div>
            <img src="images/slideshow/python.png" />
            <p>Python für Statistiken und Modelle</p>
          </div>

          <div>
            <img src="images/slideshow/semanticui.png" />
            <p>Semantic UI für Layouting</p>
          </div>

          <div>
            <img src="images/slideshow/react.jpg" />
            <p>ReactJS für performante Webapplikationen</p>
          </div>

          <div>
            <img src="images/slideshow/gitlab.png" />
            <p>GitLab für Versionsmanagement und CI</p>
          </div>

          <div>
            <img src="images/slideshow/directus.png" />
            <p>Directus Headless CMS für Inhalte</p>
          </div>

          <div>
            <img src="images/slideshow/slim.png" />
            <p>Slim Framework für einfache PHP APIs</p>
          </div>

          <div>
            <img src="images/slideshow/docker.png" />
            <p>Docker für Containervirtualisierung von WebApps</p>
          </div>

          <div>
            <img src="images/slideshow/node.png" />
            <p>NodeJS als Backend für WebApps</p>
          </div>

          <div>
            <img src="images/slideshow/openolat.png" />
            <p>OpenOLAT für eLearning Kurse</p>
          </div>

          <div>
            <img src="images/slideshow/sentry.png" />
            <p>Sentry zur Fehlererkennung von WebApps</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrolling-animation {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: -2000px;
          }
        }
        @-webkit-keyframes scrolling-animation {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: -2000px;
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

        .slideshowContent > div > img {
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
          float: left;
          width: 300px;
          position: relative;
          height: 115px;
          -webkit-position: inline-block;
          position: inline-block;
        }
      `}</style>
    </Segment>
  )
}

export default FrameworkSegment
