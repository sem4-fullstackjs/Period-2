# Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

* Express is minimal because it does not come loaded with all sorts of functionality. Out of the box, it supports only the very basic features of a web framework.
* Even the supported features are not all enabled by default, you have the option to pick and use, according to your needs.
* The flexibility in Express comes from the use of middlewares and Node modules. Express middlewares and Node modules are pluggable JavaScript components, which make Express apps very modular, flexible, and extensible.
* Express gives you complete access to the core Node APIs. Anything you can do with Node, you can do it with Express too. Express can be used to create very simple to very complex web apps.

## Installing

[expressjs.com](https://expressjs.com/en/starter/installing.html)

### Creating an Express project manually

- Install the Express-generator: `npm install express-generator -g`
- Open a terminal and navigate to the folder where you wan't to place your project folder.
- Do a `express myApp -v=ejs` Investigate the generated folder(s) and the node_modules folder
- Details here
- Do a `npm install` Investigate the node_modules folder
- Start the server like this: `set DEBUG=myapp:* & npm start`
- Or on Mac/linux: `DEBUG=myapp:* npm start`