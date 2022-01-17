import React from 'react'
import { Grid } from 'semantic-ui-react'
import ScrollDown from './ScrollDown'

export interface Props {
  id: string
  title?: string
  children: React.ReactNode
  backgroundColor?: string
  nextUp?: string
}

function SegmentContainer({
  id,
  backgroundColor,
  title,
  nextUp,
  children,
}: Props): React.ReactElement {
  if (title) {
    return (
      <div
        className="py-16 border-0 border-t border-gray-200 border-solid"
        style={{ backgroundColor }}
        id={id}
      >
        <div>
          <Grid container stackable>
            <Grid.Row centered>
              <h3 className="!mb-12 text-3xl font-normal md:text-4xl font-thesans-bold">
                {title}
              </h3>
            </Grid.Row>
            {children}
          </Grid>
        </div>

        {nextUp && <ScrollDown scrollTo={nextUp} />}
      </div>
    )
  }

  return (
    <div className="py-16" style={{ backgroundColor }} id={id}>
      <div>{children}</div>
      {nextUp && <ScrollDown scrollTo={nextUp} />}
    </div>
  )
}

export default SegmentContainer
