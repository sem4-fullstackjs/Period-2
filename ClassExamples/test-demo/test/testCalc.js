const expect = require("chai").expect;
const calc = require("../calc")
const fetch = require("node-fetch")
const PORT = 4000
const URL = `http://localhost:${PORT}/api/calc/add/`
let server

describe("Calculator API", function() {

    describe("Testing the basic Calc API", function() {
        it("should return 7", function() {
            const result = calc.add(4, 3)
            expect(result).to.be.equal(7)
        })
    })
    describe("Testing the REST Calc API", function() {
        before(function(done) {
            calc.calcServer(PORT, function(s) {
                server = s
                done()
            })
        })
        after(function() {
            server.close()
        })
        it("should return 7",  async function() {
            const res = await fetch(URL + "4/3").then(r => r.text())
            expect(res).to.be.equal("7")
        })
    })
})

