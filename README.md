# Website's boilerplate

## Dependencies

1. Install [Git](http://git-scm.com/download/), if you don't have it yet.
2. Install [NodeJS](http://nodejs.org/download/), if you don't have it yet.

## Setup

Once you have all [dependencies](#dependencies) installed, you just need to:

Open your terminal and clone the project.

```sh
$ git clone https://github.com/Marjoel/website-boilerplate
```

Then go to the project's folder.

```sh
$ cd website-boilerplate
```

Install local dependencies.

```sh
$ npm install
```
  
```sh
$ bower install
```

You should to put your Google Analytics ID in `/project/assets/js/analytics.js`

```js
var gaId = 'UA-XXXXXXXX-X'; // change 'UA-XXXXXXXX-X' for your Google Analytics ID
```

You should to put website on in `/project/.htaccess`, change `website` to your website

```js
RewriteCond %{HTTP_HOST} ^website.com [NC]
RewriteRule ^(.*)$ http://www.website.com/$1 [r=301,NC]
```

## Usage

Execute the command below to generate the website into `/dist` directory and start the server (before the development).

```sh
$ grunt start
```

Execute this to watch for any changes (during the development).

```sh
$ grunt dev
```

Execute this to generate the website into `/dist` directory (after the development).
```sh
$ grunt prod
```

Then run on the browser.

`http://localhost:8081`

## Explanations

Grunt `commands`:

This command below is to be used to start the server.

```sh
$ grunt start
```

This command below is to be used when you are developing, it'll be watching for any changes on `.html`, `.css`, `.js`

```sh
$ grunt dev
```

This command is to be used at the end of development, just to make sure that all files were generated correctly.

```sh
$ grunt prod
```

Grunt `/tasks`:

* `grunt-contrib-clean`: delete the `/dist` path
* `grunt-contrib-copy`: copy the `.html`,`.htaccess` and `robots.txt` to `/dist`
* `grunt-contrib-htmlmin`: minify the `.html` files
* `grunt-contrib-uglify`: minify combine and minify the `.js` files
* `grunt-contrib-imagemin`: minify the images
* `grunt-contrib-cssmin`:   minify the `.css` file
* `grunt-contrib-less`: css preprocessor
* `grunt-purifycss`: remove the `css code` that is not using
* `grunt-csscomb`:  combine the css `media queries`
* `grunt-contrib-connect`: start the server on `http://localhost:8081`
* `grunt-contrib-watch`: watch for modifications on `.css`, `.js` and `.html`
* `grunt-concurrent`: start more than one watch per time

## You should to read this

* When you use any js component on `bower`, add it on `/task/uglify.js`
* When you use any css component on `bower`, add it on `/task/less.js`
* When you use any css class that is added on html through  js, add the `.js` file on `/task/purifycss.js`