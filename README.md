# HTML5 Snow Effect

## How is it built?

It's a simple canvas powered project, built using a few ES6 features and transpiled down to ES5 using the fabulous [6to5](https://6to5.org/) project.

## How do I play along?

To get started simply ensure you have [node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/) installed then perform the following actions:

    $ sudo npm install -g gulp
    $ npm install
    $ gulp

Gulp is used to watch the file source file (js/snow.js) and pipe it through 6to5, uglify and a few other helper utilities.

## Demo

Can I take a quick peek? Sure, there's a demo right [here](http://kristianroebuck.github.io/snow/).
