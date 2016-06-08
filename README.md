# Ember-jq-plot-demo

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## How to use jqery plugin in emberjs
(such as how to use jquery-knob plugin in ember)
* `bower install --save jquery-knob`
* open `/ember-cli-build.js` file and add the code `app.import('bower_components/jquery-knob/js/jquery.knob.js');`
* create a component to use the plugin
* Please look `app/components/x-knob.js`

## How to use jqplot in emberjs
(open [link](http://www.jqplot.com/) to learn about jqplot plugin)
* user bower to install jqplot `bower install --save jqplot`
* Add nessessary javascript and stylesheet to ember-cli-build.js file
  such as 
    `app.import('bower_components/jqplot/jquery.jqplot.min.js');`
    `app.import('bower_components/jqplot/jquery.jqplot.min.css');`
* create a route to use jqplot `ember generate route chart-start`
* create a component `x-jqplot`
* you can open x-jqplot component and chart-start file learn more

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

