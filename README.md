<p align="center">
    <img src="https://react.semantic-ui.com/logo.png" alt="Semantic UI React logo" align="center">
</p>

<h1 align="center">Gatsby 2 Semantic UI Starter</h1>

**NOTE: This project is not officially associated with Semantic UI, Facebook and/or Gatsby in any way. It is just a helpful boilerplate arranged by me.**

## Introduction

This is a boilerplate project that intends to provide an easy way to setup [Gatsby](https://www.gatsbyjs.org/) with a customizable version of [Semantic UI](https://semantic-ui.com/), as this process is usually clumsy and full of little inconveniences.

It is based on the [Webpack 3 example](https://github.com/Semantic-Org/Semantic-UI-React/tree/master/examples/webpack3) provided by the Semantic UI folks, with a bunch of opinionated changes.

## How to use

### Installation

**NOTE: This starter is intended for use with Gatsby 2.0.0 and above.**

Make sure that you have the Gatsby CLI program installed  
`yarn global add gatsby-cli@next` (**npm:** `npm install --global gatsby-cli@next`)

Now run from your terminal  
`gatsby new my-project https://github.com/pretzelhands/gatsby-starter-semantic-ui`

Then you can run it by doing the following  
```sh
cd my-project
gatsby develop
```

Gatsby will start up a web server for you and you are ready to go.

If you've never worked with Gatsby before, I recommend [reading the documentation](https://next.gatsbyjs.org/docs/)

### Customizing Semantic UI

To customize Semantic UI you can find the appropriate files in `src/semantic/site`. To understand the file structure provided in that folder, please read the [Customization Guide](http://learnsemantic.com/developing/customizing.html) provided by Semantic UI.

The theme files are pre-filled with all available variables so you can just set them and forget them. As you save those files Gatsby will automatically re-compile your files.

## Contributing

Contributions in any form are welcome! If you find a bug, please [file an issue.](https://github.com/pretzelhands/gatsby-starter-semantic-ui/issues) All contributors are asked to abide by the rules of the [Contributor Covenant.](./CODE_OF_CONDUCT.md)

## Updates

This repo will be kept up-to-date in accordance with the stable releases of React, Gatsby, Semantic UI and Semantic UI React insofar they are compatible.

If major changes happen to the Webpack 3 example of the Semantic UI React repository, I will reflect them in this repository.

## License

This project is licensed under the ISC license. See the [LICENSE file](./LICENSE.md) for more details.



