# Mozilla Campus Club Website

Uses Node.js

## Installing on AWS

### Installing/Updating Node.js, NPM and Git

`sudo su`

If node is installed already, first remove nodejs and npm using the following command

`yum remove -y nodejs npm`

Setup the repo for Node version 6

`curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -`

Install Node. This will also install npm

`yum install -y nodejs`

Install git

`yum install -y git`

Exit su

`exit`

### Installing http-server

`sudo npm install -g http-server`

## Running the website

```
git clone https://gitlab.bham.ac.uk/MozCC-Bham/site.git 
cd site
npm install
http-server
```

## Copyright and License

Baseed on the theme:
[Freelancer](http://startbootstrap.com/template-overviews/freelancer/) is a one page freelancer portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals, and a working PHP contact form.

Copyright 2017 Mozilla Campus Club Birmingham

Released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/gh-pages/LICENSE) license.
