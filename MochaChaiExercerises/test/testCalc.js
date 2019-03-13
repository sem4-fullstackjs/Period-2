const expect = require("chai").expect;
const calc = require("../calc");
const fetch = require("node-fetch");
const PORT = 2345;
const URL = `http://localhost:${PORT}/api/calc/`;
let server;

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
		it("9 / 3 should return 3", function() {
			const res = calc.divide(9, 3);
			expect(res).to.be.equal(3);
		});
		it("4 / 0 should throw error", function() {
			expect(() => calc.divide(4, 0)).to.throw(/Can't devide by zero/);
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