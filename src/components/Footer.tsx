import React from 'react'
import { Icon } from 'semantic-ui-react'

function Footer() {
  return (
    <div className="p-16 text-white bg-[#00023e]">
      <p>
        Built with <Icon name="heart" />
        in the center of Zurich.
      </p>

      <p>
        Do you want to have a look at the code? Head over to{' '}
        <a
          href="https://github.com/uzh-bf/joinus"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          GitHub
        </a>{' '}
        , where we also host the{' '}
        <a
          href="https://github.com/uzh-bf/klicker-uzh"
          target="_blank"
          rel="noreferrer"
        >
          KlickerUZH
        </a>{' '}
        and some of our other open-source projects.
      </p>
    </div>
  )
}

export default Footer
