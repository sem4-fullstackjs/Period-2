## Node.js+Express, Testing with JavaScript, NoSQL with MongoDB and Mongoose
*Note: This description is too big for a single exam-question. It will be divided up into separate questions for the exam*

In this period we will introduce Express, a minimal and flexible node.js package, that provides a robust set of features for web and mobile applications. We will also introduce the Mocha test framework, together with a number of supplementing packages for assertions, mocking etc. Finally you will be introduced to a new kind of database - NoSQL Databases, with mongoDB as the document database.

# Node.js and Express

## Why would you consider a Scripting Language as JavaScript as your Backend Platform?
Let's look at the results from Stack Overflow's [developer survey for 2018](https://insights.stackoverflow.com/survey/2018#technology-programming-scripting-and-markup-languages), you'll see that JavaScript is, for the sixth year in a row, the most commonely used programming language - In addition, Node.js is also taking a lead over other frameworks. 

![StackSurvey2019](./Img/stackoverflowsurvey.PNG)

The reason behind this, is that, Node.js is now in a solid maturity state. It got an ever-growing community and a strong ecosystem that helped it getting over the problems it had in its early days.
 
There's a lot of advantages to working in a JavaScript environment on your server, such as:
- Since your frontend is probably running with JavaScript, you've got code universality across your stack. 
- You can reuse code on both ends and stay coherent on all system levels.
- You can write a web app that renders both on the browser and the server seamlessly.
- and [more](https://snipcart.com/blog/javascript-nodejs-backend-development)

JavaScript is only one of a plethora of popular backend languages that all got their pros & cons - However, it's important to know that it absolutely is an option to consider.

## Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomca

### The Benefits of Node.js
**- Robust Technology Stack**

JavaScript has proven to be an undisputed leader among the most popular programming languages. You can view the [2018 - Node.js User Survey Report ](https://nodejs.org/en/user-survey-report/#overview) for its usages.

Using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:

- better efficiency and overall developer productivity
- code sharing and reuse
- speed and performance
- easy knowledge sharing within a team
- huge number of free tools

Consequently, your team is a lot more flexible, the development is less time-consuming and as a result you get fast and reliable software.

Despite a common belief, with full stack web development you are in no way limited to the traditional MEAN (MongoDB, Express.js, AngularJS, and Node.js) stack. The only must-have in this case is Node.js (there is no alternative in JavaScript for backend programming). The rest of the technologies within this stack are optional and may be replaced with some other tools providing similar functionality - read about the alternatives [Node.js Frameworks Comparison for Your Back-end Solution](https://www.altexsoft.com/blog/engineering/node-js-frameworks-comparison-for-your-back-end-solution-express-js-meteor-js-sails-js-and-more/) 

**- Fast and Event-Based**

What is Node.js used for? When using a common language for both client- and server-side, synchronization happens fast, which is especially helpful for event-based, real-time applications. Thanks to its asynchronous, non-blocking, single-threaded nature, Node.js is a popular choice for online gaming, chats, video conferences, or any solution that requires constantly updated data.

Not only does app performance benefit from Node.js’ lightness, the team’s productivity will increase as well. Developers trained in frontend JavaScript can start programming the server side with the minimum learning curve. With the same language on both sides, you can reuse code on front-end and back-end by wrapping it into modules and creating a new level of abstraction.

**- Scalable Technology for Microservices**

Since it’s a lightweight technology tool, using Node.js for microservices architecture is a great choice. This architectural style is best described by Martin Fowler and James Lewis as 

*“an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.”*

Accordingly, breaking the application logic into smaller modules, microservices, instead of creating a single, large monolithic core, you enable better flexibility and lay the groundwork for further growth. As a result, it is much easier to add more microservices on top of the existing ones than to integrate additional features with the basic app functionality.

![Monolithic vs Microservices](./Img/mvm.PNG)

With each microservice communicating with the database directly through streams, such architecture allows for better performance and speed of application.

**- Rich Ecosystem**

One word – npm, a default Node.js package manager, it also serves as a marketplace for open source JavaScript tools, which plays an important role in the advance of this technology. With about 350,000 tools available in the npm registry as of now, and over 10,000 new ones being published every week, the Node.js ecosystem is quite rich.

With such a vast variety of free tools accessible in a few clicks, there is a huge potential for the use of Node.js. At the same time, open source software enjoys a growing popularity as it allows you to build new solutions reducing the overall costs of development and time to market.

### The Drawbacks of Node.js
**- Performance Bottlenecks and Design Issues**

Two of the most argued about aspects of Node.js programming are its insufficiency with heavy computations and the so-called *“callback hell”*. Before we get into too many details, let’s figure out what’s what.

As we know, JavaScript (and, as a result, Node.js) is asynchronous by nature and has a non-blocking I/O model. This means, it can process several simple tasks (for example, read/write database queries) queued in the background without blocking the main thread and do so quickly.

At the same time, Node.js is a single-threaded environment, which is often considered a serious drawback of the technology. Indeed, in some cases, a CPU-bound task (number crunching, various calculations) can block the event loop resulting in seconds of delay for all Node.js website users.

This represents a serious issue. That is why, to avoid it, it is recommended not to use Node.js with computation-heavy systems.

Due to its asynchronous nature, Node.js relies heavily on callbacks, the functions that run after each task in the queue is finished. Keeping a number of queued tasks in the background, each with its callback, might result in the so-called callback hell, which directly impacts the quality of code. Simply put, it’s a *“situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code.”*

```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

Yet, this is often considered a sign of poor coding standards and lack of experience with JavaScript and Node.js in particular. The code, represented above, can be refactored and simplified, in just a few steps, as shown at [callbackhell.com](http://callbackhell.com/).

**- Immaturity of Tooling**

Although, the core Node.js modules are quite stable and can be considered mature, there are many tools in the npm registry which are either of poor quality or not properly documented/tested. Moreover, the registry itself isn’t structured well enough to offer the tools based on their rating or quality. Hence it might be difficult to find the best solution for your purposes without knowing what to look for.

The fact that the Node.js ecosystem is mostly open source, has its impact as well. While the quality of the core Node.js technology is supervised by Joyent and other major contributors, the rest of the tools might lack the quality and high coding standards set by global organizations.

### Conclusion

Obviously, with all the listed Node.js advantages and disadvantages, the technology is no silver bullet. But neither is Java, .Net framework or PHP. Yet, there are specific cases where each one of the technologies perform best. For Node.js, these are real-time applications with intense I/O, requiring speed and scalability.

This might be social networks, gaming apps, live chats or forums as well as stock exchange software or ad servers, where speed is everything. Fast and scalable, Node.js is the technology of choice for data-intensive, real-time IoT devices and applications.

Due to its non-blocking architecture, Node.js works well for encoding and broadcasting video and audio, uploading multiple files, and data streaming.

Recently, Node.js has been actively used in enterprise-level software. While there is still much argument about this, many large companies and global organizations, such as NASA, have already adopted Node.js. And the enterprise Node.js ecosystem continues to mature.

However, you can’t choose a language or tool just because another super-successful company did. It makes no sense to look at the others when your product and your business is at stake. You need to clearly identify the benefits the technology will give you, without forgetting about the hidden drawbacks.

ref: [The Good and the Bad of Node.js - Web App Development](https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/)

## Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
 
Node.js follows a *Single Threaded with Event Loop* model. Node.js Processing model is mainly based on JavaScript Event based model with JavaScript callbakc mechanism.

Since Node.sj follows this architecture, it's able to handle, more and more concurrent client requests, very easily.

The main heart of Node.js Processing model is *Event Loop*. If we understand this, then it is very easy to understand the Node JS Internals.

**Single Threaded Event Loop Model Processing Steps**
- Clients Send request to Web Server.
- Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
- Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.
- Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name is that it uses indefinite loop to receive requests and process them. (See some Java Pseudo code to understand this below).
- Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
- Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
 If yes, then pick up one Client Request from Event Queue
    - Starts process that Client Request
    - if that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
    - if that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
        - Checks Threads availability from Internal Thread Pool
        - Picks up one Thread and assign this Client Request to that thread.
        - That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
        - Event Loop in turn, sends that Response to the respective Client.

![Node.js Single Thread Event Model](./Img/NodeJS-Single-Thread-Event-Model.png)

You can read the diagram description in the re below.

ref: [Node.js Architecture - Single Threaded Event Loop](https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop)

## Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

DigitalOcean has a very good [tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04) on how to deploy your Node.js application

### Ensure that you Node-process restarts after a (potential) exception that closed the application

In production, you don’t want your application to be offline, ever. This means you need to make sure it restarts both if the app crashes and if the server itself crashes. Although you hope that neither of those events occurs, realistically you must account for both eventualities by:

Using a process manager to restart the app (and Node) when it crashes.
Using the init system provided by your OS to restart the process manager when the OS crashes. It’s also possible to use the init system without a process manager.
Node applications crash if they encounter an uncaught exception. The foremost thing you need to do is to ensure your app is well-tested and handles all exceptions (see [handle exceptions properly](https://expressjs.com/en/advanced/best-practice-performance.html#handle-exceptions-properly) for details). But as a fail-safe, put a mechanism in place to ensure that if and when your app crashes, it will automatically restart.

**Use a Process Manager**

In development, you started your app simply from the command line with node server.js or something similar. But doing this in production is a recipe for disaster. If the app crashes, it will be offline until you restart it. To ensure your app restarts if it crashes, use a process manager. A process manager is a “container” for applications that facilitates deployment, provides high availability, and enables you to manage the application at runtime.

In addition to restarting your app when it crashes, a process manager can enable you to:
- Gain insights into runtime performance and resource consumption.
- Modify settings dynamically to improve performance.
- Control clustering (StrongLoop PM and pm2).

The most popular process managers for Node are as follows:
- [StrongLoop Process Manager](http://strong-pm.io/)
- [PM2](https://github.com/Unitech/pm2)
- [Forever](https://www.npmjs.com/package/forever) or their [GitHub](https://github.com/nodejitsu/forever)

For a feature-by-feature comparison of the three process managers, see [Strong PM Compare](http://strong-pm.io/compare/). For a more detailed introduction to all three, see [Process managers for Express apps](https://expressjs.com/en/advanced/pm.html).

Using any of these process managers will suffice to keep your application up, even if it does crash from time to time.

ref: [expressjs.com](https://expressjs.com/en/advanced/best-practice-performance.html#ensure-your-app-automatically-restarts)

### Ensure that you Node-process restarts after a server (Ubuntu) restart

The next layer of reliability is to ensure that your app restarts when the server restarts. Systems can still go down for a variety of reasons. To ensure that your app restarts if the server crashes, use the init system built into your OS. The two main init systems in use today are [systemd](https://wiki.debian.org/systemd) and [Upstart](http://upstart.ubuntu.com/).

There are two ways to use init systems with your Express app:

Run your app in a process manager, and install the process manager as a service with the init system. The process manager will restart your app when the app crashes, and the init system will restart the process manager when the OS restarts. This is the recommended approach.
Run your app (and Node) directly with the init system. This is somewhat simpler, but you don’t get the additional advantages of using a process manager.

ref: [expressjs.com](https://expressjs.com/en/advanced/best-practice-performance.html#ensure-your-app-automatically-restarts)

### Ensure that you can take advantage of a multi-core system

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.

The cluster module allows easy creation of child processes that all share server ports.

```javascript
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello world\n')
  }).listen(8000)

  console.log(`Worker ${process.pid} started`)
}
```

ref: [nodejs.org](https://nodejs.org/api/cluster.html)

### Ensure that you can run “many” node-applications on a single droplet on the same port (80)

This can be accomplished by implementing a reversy proxy i.e Nginx

ref: [Hosting Multiple Apps on the same Server — Implement a Reverse Proxy with Node](https://itnext.io/hosting-multiple-apps-on-the-same-server-implement-a-reverse-proxy-with-node-a4e213497345)

## Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code.

### Disadvantages of Console

One of the biggest disadvantages is that you can’t toggle logging on and off, not out of the box at least. You could wrap console and extend it to do this, but this is code you’ll have to write, and likely code that will have to overwrite the built-in console functions.

You might want to turn off logging if you’re in a development environment vs a production environment. Or even if you’re just testing locally on your machine or VM, if you’ve got a ton of logging for debug purposes or otherwise, that can really clutter up your console and you might want to just test with logging disabled for a bit.

Another disadvantage of console comes when you need to know log levels.

While it already has what appear to be log levels (see below), these are really just functions that route to stdout and stderr without providing true log levels.

```javascript
console.log() --> writes to stdout
console.debug() --> writes to stdout
console.info() --> writes to stdout

console.error() --> writes to stderr
console.warn() --> writes to stderr
```

So in the Node console, you won’t be able to tell these logs apart unless you prepend a string with the level to the logs.

###  Logging Frameworks

Popular Node logging frameworks like Winston and Bunyan allow for log levels, easy toggling logs on and off based on environment, and sometimes (in the case of Winston) support for custom log levels that you as a developer can define.

Logging frameworks will also (generally) support writing to more than just stdout/stderr

## Demonstrate a system using application logging and *coloured* debug statements.

Logging using Winston:

```javascript
const app = express()
const winston = require('winston')
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

function logRequest(req, res, next) {
    logger.info(req.url)
    next()
}
app.use(logRequest)

function logError(err, req, res, next) {
    logger.error(err)
    next()
}
app.use(logError)
```

### Colored Debug Statements

The debug module has a great namespace feature that allows you to enable or disable debug functions in groups. It is very simple–you separate namespaces by colons, like this:

```javascript
debug('app:meta')('config loaded')
debug('app:database')('querying db...');
debug('app:database')('got results!', results);
```

Enable debug functions in Node by passing the process name via the DEBUG environment variable. The following would enable the database debug function but not meta:

```javascript
$ DEBUG='app:database' node app.js
```

To enable both, list both names, separated by commas:

```javascript
$ DEBUG='app:database,app:meta' node app.js
```

Alternately, use the asterisk wildcard character (*) to enable any debugger in that namespace. For example, the following enables any debug function whose name starts with “app:":

```javascript
$ DEBUG='app:*' node app.js
```

You can get as granular as you want with debug namespaces…

```javascript
debug('myapp:thirdparty:identica:auth')('success!');
debug('myapp:thirdparty:twitter:auth')('success!');
```

## Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages 

We can test our code with `mocha`, and use `chai`'s `expect` to make our tests more readable.

```javascript
const expect = require("chai").expect;
describe("Calculator API", function() {
    describe("Testing the basic Calc API", function() {
        it("9 / 3 should return 7", function() {
            expect(calc.divide(9, 3)).to.be.equal(3);
        });
        it("4 / 0 should throw error", function() {
            expect(() => calc.divide(4, 0)).to.throw(/Attempt to divide by zero/);
        });
    });
    describe("Testing the REST Calc API", function() {
        before(function(done) {
            calc.calcServer(PORT, function(s) {
                server = s;
                done();
            });
        });
        it("4 + 3 should return 7", async function() {
            const res = await fetch(URL + "add/4/3").then(r => r.text());
            expect(res).to.be.equal("7");
        });
        after(function() {
            server.close();
        });
    });
});
```

It is important to note that arrow functions should not be used with mocha, due to the behavior of this and will not be able to access the mocha context

## Explain, using relevant examples, the Express concept - Middleware.

A middleware with no mount path will be executed every time the app recieves a request

```javascript
var app = express()

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})
```

A middleware function mounted on a path. The function is executed for any type of HTTP request on the path.

```javascript
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})
```

A middleware function mounted on a path. The function is executed for HTTP requests with method GET on the path.

```javascript
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
})
```

Error-handling middleware

```javascript
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```

## Explain, using relevant examples, how to implement sessions and the legal implications of doing this.
  
```javascript
var cookieSession = require("cookie-session");
app.use(
    cookieSession({
        name: "session",
        secret: "I_should_never_be_visible_in_code",

        // Cookie Options
        maxAge: 30 * 60 * 1000 // 30 minutes
    })
);
```

**Recital 30 of the GDPR states:**
*Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags.
This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them.*

**In short:** when cookies can identify an individual via their device, it is considered personal data.

_**Not complying to the laws will result in severe punishment.**_

## Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
  
Both *JSP* and *EJS* uses tags to embed Java and JavaScript respectively in HTML code

JSP tags:
- `<%!` Variable declaration or method definition `%>`
- `<%=` Java valid expression `%>`
- `<%` Pure Java code `%>`

EJS tags:
- `<%` 'Scriptlet' tag, for control-flow, no output
- `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
- `<%=` Outputs the value into the template (HTML escaped)
- `<%-` Outputs the unescaped value into the template
- `<%#` Comment tag, no execution, no output
- `<%%` Outputs a literal '<%'
- `%>` Plain ending tag
- `-%>` Trim-mode ('newline slurp') tag, trims following newline
- `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it

## Demonstrate a simple Server Side Rendering example using a technology of your own choice (pug, EJS, ..).
  
Setting up route

```js
var express = require("express");
var router = express.Router();
router.get("/joke", function(req, res, next) {
    let counter = req.session.jokeCounter;
    counter++;
    req.session.jokeCounter = counter;
    res.render("randomJoke", { title: "Joke", joke: jokes.getRandomJoke() });
});
```
Rendering the site
```js
<!DOCTYPE html>
<html>
    <head>
        <title><%= title %></title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        <a href='/'>Home Page</a>
        <p><%= joke %></p>
    </body>
</html>
```

## Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using, for example, the Request package.
  
Implementing a REST-API with Express

```js
var express = require("express");
var router = express.Router();
var jokes = require("../model/jokes");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express", userName: req.session.userName });
});

router.get("/login", function(req, res, next) {
    res.render("login", { title: "Login" });
});

router.post("/login", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/joke", function(req, res, next) {
    let counter = req.session.jokeCounter;
    counter++;
    req.session.jokeCounter = counter;
    res.render("randomJoke", { title: "Joke", joke: jokes.getRandomJoke() });
});

router.get("/jokes", function(req, res, next) {
    let counter = req.session.jokesCounter;
    counter++;
    req.session.jokesCounter = counter;
    res.render("allJokes", { title: "Jokes", jokes: jokes.getAllJokes() });
});

router.get("/addjoke", function(req, res, next) {
    res.render("addJoke", { title: "Add Joke" });
});

router.post("/storejoke", function(req, res, next) {
    let counter = req.session.storeJokeCounter;
    counter++;
    req.session.storeJokeCounter = counter;

    const joke = req.body.joke;

    jokes.addJoke(joke);

    res.render("addJoke", { title: "Add Joke" });
});

module.exports = router;
```

Testing the REST-API

```js
const expect = require("chai").expect;
const http = require('http');
const app = require('../app');
const fetch = require("node-fetch");
const TEST_PORT = 3344;
const URL = `http://localhost:${TEST_PORT}/api`;
const jokes = require("../model/jokes");
let server;
describe("Verify the Joke API", function() {
    before(function(done){
        server = http.createServer(app);
        server.listen(TEST_PORT,()=>{
            console.log("Server Started")
            done()
        })
    })
    after(function(done){
        server.close();
        done();
    })
    beforeEach(function(){
        jokes.setJokes(["aaa","bbb","ccc"])
    })
    it("Should add the joke 'ddd",async function(){
        var init = {
            method: "POST",
            headers : {"content-type": "application/json"},
            body : JSON.stringify({joke: "ddd"})
        }
        await fetch(URL+"/addjoke",init).then(r => r.json());
        //Verify result
        expect(jokes.getAllJokes()).lengthOf(4);
        expect(jokes.getAllJokes()).to.include("ddd")
    })
}
``` 

## Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
  
We can test our code with Mocha, and we can make the asserts more readable with Chai's expect

```js
const expect = require("chai").expect;
const calc = require("../calc");
describe("Calculator API", function() {
	describe("Testing the basic Calc API", function() {
		it("4 + 3 should return 7", function() {
			const res = calc.add(4, 3);
			expect(res).to.be.equal(7);
		});
		it("4 - 3 should return 1", function() {
			const res = calc.subtract(4, 3);
			expect(res).to.be.equal(1);
		});
		it("4 * 3 should return 12", function() {
			const res = calc.muliply(4, 3);
			expect(res).to.be.equal(12);
		});
		it("9 / 3 should return 7", function() {
			const res = calc.divide(9, 3);
			expect(res).to.be.equal(3);
		});
		it("4 / 0 should throw error", function() {
			expect(() => calc.divide(4, 0)).to.throw(/Attempt to divide by zero/);
		});
    });
});
```

Testing asynchronous code

```js
const expect = require("chai").expect;
const calc = require("../calc");
const fetch = require("node-fetch");
const PORT = 2345;
const URL = `http://localhost:${PORT}/api/calc/`;
let server;
describe("Testing the REST Calc API", function() {
    before(function(done) {
        calc.calcServer(PORT, function(s) {
            server = s;
            done();
        });
    });
    //testing asynchronous code
    it("4 + 3 should return 7", async function() {
        const res = await fetch(URL + "add/4/3").then(r => r.text());
        expect(res).to.be.equal("7");
    });
    after(function() {
        server.close();
    });
});
```

## Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

We can use `nock` to mock a website

```js
const nock = require('nock');
describe("loadWiki()", function() {
    before(function() {
        //the website to be mocked
        nock("https://en.wikipedia.org")
            //the HTTP method and the path
            .get("/wiki/Abraham_Lincoln")
            //the response the mocked website should send
            .reply(200, "Mock Abraham Lincoln Page");
    });
    it("Load Abraham Lincoln's wikipedia page", function(done) {
        tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
            expect(html).to.equal("Mock Abraham Lincoln Page");
            done();
        });
    });
});
```

## Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed.

We havn't deployed a Node/Express Application yet!

# NoSQL, MongoDB and Mongoose

ref[Teacher Slides](http://slides.mydemos.dk/noSQL/mongo_mongoose.html#1)

## Explain, generally, what is meant by a NoSQL database.

ref: [NoSQL Explained](https://www.mongodb.com/nosql-explained)

## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

ref: [7 Pros and Cons of NoSQL](https://greengarageblog.org/7-pros-and-cons-of-nosql)

## Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB


ref: [Introduction to Mongoose for MongoDB](https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527)

## Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB

We're going to work with REST-API in our [Mini-Project](https://github.com/sem4-fullstackjs/Mini-Project)

## Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

[MongoCrudExercises](https://github.com/sem4-fullstackjs/Period-2/tree/master/MongoCrudExercises) from this [tutorial](https://github.com/fullstackjavascriptcode/crudMongooseStartCode)

## Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.

**Rule 1:** Favor embedding unless there is a compelling reason not to.

**Rule 2:** Needing to access an object on its own is a compelling reason not to embed it.

**Rule 3:** Arrays should not grow without bound. If there are more than a couple of hundred documents on the “many” side, don’t embed them; if there are more than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.

**Rule 4:** Don’t be afraid of application-level joins: if you index correctly and use the projection specifier (as shown in part 2) then application-level joins are barely more expensive than server-side joins in a relational database.

**Rule 5:** Consider the write/read ratio when denormalizing. A field that will mostly be read and only seldom updated is a good candidate for denormalization: if you denormalize a field that is updated frequently then the extra work of finding and updating all the instances is likely to overwhelm the savings that you get from denormalizing.

**Rule 6:** As always with MongoDB, how you model your data depends – entirely – on your particular application’s data access patterns. You want to structure your data to match the ways that your application queries and updates it.

ref: [6 Rules of Thumb](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3)

## Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization 

This is from our Mini-Project where we have embedded a JobSchema into a UserSchema... Reason for it was that a user can have multiple jobs - And when you wonna find a users from a specific jobtype, you don't have to go through all Users

```javascript
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  type: String,
  company: String,
  companyUrl: String
})

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  job: [JobSchema], // Embeding the JobSchema
  created: { type: Date, default: Date.now },
  lastUpdated: Date
})

UserSchema.pre("save", function (next) {
  this.password = "Hash Please and add some salt " + this.password
  next()
})

UserSchema.pre("update", function (next) {
  this.update({}, { $set: { lastUpdated: new Date() } })
  next()
})

var User = mongoose.model("User", UserSchema) // Making the model

module.exports = User
```

## Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)

This is the testUser from our Mini-Project. 

```javascript
const mongoose = require("mongoose");
const expect = require("chai").expect;
var connect = require("../dbConnect.js");


//See (for the three lines below): https://github.com/Automattic/mongoose/issues/1251

// mongoose.models = {};
// mongoose.modelSchemas = {};
// mongoose.connection = {};

var userFacade = require("../facades/userFacade");
var User = require("../models/User");

describe("Testing the User Facade", function () {

  /* Connect to the TEST-DATABASE */
  before(async function () {
    //this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await connect(require("../settings").TEST_DB_URI);
  })

  after(async function () {
    await mongoose.disconnect();
  })

  //var users = [];
  /* Setup the database in a known state (2 users) BEFORE EACH test */
  beforeEach(async function () {
    await User.deleteMany({});
    users = await User.insertMany([
      { firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test", email: "a@b.dk" },
      { firstName: "Hanne", lastName: "Wonnegut", userName: "hw", password: "test", email: "b@b.dk" },
    ])
    
    jobs = [
      { type: "Programmer", company: "CPH Business Lyngby", companyUrl: "cph.business.dk" },
      { type: "Web Developer", company: "CPH Business Lyngby", companyUrl: "cph.business.dk" },
      { type: "Store Clerk", company: "Netto", companyUrl: "netto.dk" },
      { type: "Chef", company: "The American", companyUrl: "the-american.dk" },
    ]
  
  })

  it("Should Find all Users (Kurt and Hanne)", async function () {
    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(2);
  });

  it("Should Find Kurt Wonnegut by Username", async function () {
    var user = await userFacade.findByUsername("kw");
    expect(user.firstName).to.be.equal("Kurt");
  });

  it("Should Find Kurt Wonnegut by ID", async function () {
    var user = await userFacade.findById(users[0]._id);
    expect(user.firstName).to.be.equal("Kurt");
  });

  it("Should Add Peter Pan", async function () {
    var user = await userFacade.addUser("Peter", "Pan", "peter", "test", "a@b.dk");
    expect(user).to.not.be.null;
    expect(user.firstName).to.be.equal("Peter");
    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(3);
  });

  it("Should Add a Job to Kurt (Programmer) ", async function () {
    var user = await userFacade.addJobToUser(users[0]._id, jobs[0])
    expect(user.job[0].type).to.be.equal("Programmer")
  })
})
```

*note* that i havn't implemented REST-API yet, but i've made another exercises where i uses a REST API for a calculator

```javascript
const expect = require("chai").expect;
describe("Calculator API", function() {
    describe("Testing the basic Calc API", function() {
        it("9 / 3 should return 7", function() {
            expect(calc.divide(9, 3)).to.be.equal(3);
        });
        it("4 / 0 should throw error", function() {
            expect(() => calc.divide(4, 0)).to.throw(/Attempt to divide by zero/);
        });
    });
    describe("Testing the REST Calc API", function() {
        before(function(done) {
            calc.calcServer(PORT, function(s) {
                server = s;
                done();
            });
        });
        it("4 + 3 should return 7", async function() {
            const res = await fetch(URL + "add/4/3").then(r => r.text());
            expect(res).to.be.equal("7");
        });
        after(function() {
            server.close();
        });
    });
});
```