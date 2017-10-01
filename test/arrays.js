var expect = require("chai").expect;
var arrays = require("../src/ArrayUtils");

describe("array utils", function() {
    describe("isIn function", function() {
        it("no argument", function(){
            expect(arrays.isIn()).to.be.false;
        });
        it("argument isnt array", function(){
            expect(arrays.isIn(1, 2)).to.be.false;
            expect(arrays.isIn([2], 2)).to.be.false;
            expect(arrays.isIn("1", "2")).to.be.false;
        });

        it("argument is in array", function(){
            expect(arrays.isIn(1, 2, 3, 1)).to.be.true;
            expect(arrays.isIn("a", "a", "b", "c")).to.be.true;
            expect(arrays.isIn("a", "c", "b", "a")).to.be.true;
            expect(arrays.isIn("a", ["c", "b", "a"])).to.be.true;
            expect(arrays.isIn("a", ["a", "b", "b"])).to.be.true;
        });
        it("argument isn't in array", function(){
            expect(arrays.isIn(1, 2, 3, 12)).to.be.false;
            expect(arrays.isIn("a", "b", "c")).to.be.false;
            expect(arrays.isIn("a", "c", "b")).to.be.false;
            expect(arrays.isIn("a", ["c", "b"])).to.be.false;
            expect(arrays.isIn("a", ["b", "b"])).to.be.false;
        });
        it("argument is empty array", function(){
            expect(arrays.isIn(1)).to.be.false;
            expect(arrays.isIn("a")).to.be.false;
            expect(arrays.isIn("a", [])).to.be.false;
            expect(arrays.isIn("a", {})).to.be.false;
        });
    });

    describe("last function", function() {
        it("argument isn't array", function(){
            expect(arrays.last(1, 2, 3, 12)).to.be.null;
            expect(arrays.last("a")).to.be.null;
            expect(arrays.last(1)).to.be.null;
            expect(arrays.last({})).to.be.null;
            expect(arrays.last("1, 2, 3, 12")).to.be.null;
            expect(arrays.last({a: "a", b: "b"})).to.be.null;
        });
        it("argument is empty array", function(){
            expect(arrays.last([])).to.be.null;
        });
        it("no arguments", function(){
            expect(arrays.last()).to.be.null;
        });
        it("right arguments", function(){
            expect(arrays.last([1])).to.be.equal(1);
            expect(arrays.last([1, 2, 3])).to.be.equal(3);
            expect(arrays.last(["a", "b", "c"])).to.be.equal("c");
        });
    })
});