const express = require("express")
const http = require("http")

/* Basic Calculator API */

function add(n1, n2) {
    return n1 + n2
}

/* End of Basic Calculator API */

/* REST Calculator API */

function calcServer(port, isStartedCb) {
    const app = express();                              // Setting up express
    app.get("/api/calc/add/:n1/:n2", (req, res) => {    // Setting up Endpoint
        const n1 = Number(req.params.n1)
        const n2 = Number(req.params.n2)
        res.send(add(n1, n2).toString())
    })
    setTimeout(() => {                                  // We're only setting a timeout here to force an error to show how done() works
        let server = http.createServer(app)             // Creating a Server
        server.listen(port, () => {                     // Starting the Server
            isStartedCb(server)
        })
    }, 1900)                                            // Default Mocha will stop the request af 2000ms (2sec) - Youcan change this value
}

/* End of REST Calculator API */

module.exports = {
    add,
    calcServer
}