# Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

- Express is minimal because it does not come loaded with all sorts of functionality. Out of the box, it supports only the very basic features of a web framework.
- Even the supported features are not all enabled by default, you have the option to pick and use, according to your needs.
- The flexibility in Express comes from the use of middlewares and Node modules. Express middlewares and Node modules are pluggable JavaScript components, which make Express apps very modular, flexible, and extensible.
- Express gives you complete access to the core Node APIs. Anything you can do with Node, you can do it with Express too. Express can be used to create very simple to very complex web apps.

## Installing

[expressjs.com](https://expressjs.com/en/starter/installing.html)

### Creating an Express project manually

- Create a folder somewhere on your system to hold you app, and open a command prompt in that folder
- Do a `npm init -y` (only do -y for demos)
- Open the generated package.json file and investigate the content
- Do a npm install express --save (check you folder to see what you got, and also open package.json again)
- Add a file index.js (name declared in your package.json file) and add a minimalistic server as sketched here [Hello World](https://expressjs.com/en/starter/hello-world.html) 
- Start the server with `npm start`

### Creating an Express project with the Express Generator

- Install the Express-generator: `npm install express-generator -g`
- Open a terminal and navigate to the folder where you wan't to place your project folder.
- Do a `express --view ejs myApp` Investigate the generated folder(s) and the node_modules folder details here
- Do a `npm install` Investigate the node_modules folder
- Start the server like this: `SET DEBUG=myapp:* & npm start`
- Or on Mac/linux: `DEBUG=myapp:* npm start`

## Monitor for changes

One utility tool you simply can't live without is nodemon. It will monitor for any changes in your source and automatically restart your server while you develop.  
- Install it like: `npm install nodemon` or install it globally `npm install -g nodemon`.
- Use it like (for an Express-generator generated project)
- Windows: `SET DEBUG=myApp:* & nodemon ./bin/www`
- Mac/Linux: `DEBUG=myapp:* nodemon ./bin/www` 

## A Minimal Express Application

There are only three core components to an Express application, which makes it easy get started
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

## The Core Express Objects

**The Application Object**: is an instance of Express, by convention represented by the variable named app. It is the main object of an Express app and the bulk of the functionality is built on it  
**The Request Object**: is created when a client makes a request to the Express app  
**The Response Object**: is created along with the request object

# Middleware

An Express application is essentially a stack of middleware which are executed in a pipeline (serially).

A middleware is a function with access to the request object (req), the response object (res), and the next middleware in line in the request-response cycle of an Express application.

Each middleware has the capacity to execute any code, make changes to the request and the reponse object, end the request-response cycle, and call the next middleware in the stack. Since middleware are executed serially, their order of inclusion is important.

If the current middleware is not ending the request-response cycle, it is important to call next() to pass on the control to the next middleware, else the request will be left hanging.

## Request Flow

In an Express Application there is a single entry point for all the requests coming to the app — via app.js When an HTTP request arrives at our app, it goes through the stack of middlewares as sketched below.

![The Express Middleware Stack](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-CsmZT4QLnOp6pUaKrYUL3qM1EJPpYlzinrnLGFjlh2apl_Y)

## Middlewares and Request Flow

```js
//Third-party middleware
 app.use(bodyParser.urlencoded())

 //Custom middleware
   app.use(function (req, res, next) {
   console.log('Time:', Date.now()+"Log all requests");
   next();
 });

 //Route functions
 app.all('/somePath',function(req,res){
   console.log("Log on all request for /somePath (GET,POST, PUT, DELETE)")
 })
 app.get('/somePath', function(req, res){
   res.send('This is a route');
 });
 app.post('/somePath', function(req, res){
   //.. Do something with the request parameters
 });

 //Built-in middleware (the only one left in V4.x.x)
 app.use(express.static('./public')); 
```
