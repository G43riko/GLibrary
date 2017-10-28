var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
var ArrayUtils = require("../src/ArrayUtils").ArrayUtils;

describe("array utils", function() {
    describe("it appy function to Array prototype", function() {
        it("imported object contains all functions", function(){
            should.exist(ArrayUtils.applyTo);
            should.exist(ArrayUtils.applyToPrototype);
            should.exist(ArrayUtils.isIn);
        })
        it("Array prototype have not any utils", function(){
            expect(Array.prototype.unique).to.be.undefined;
            expect(Array.prototype.where).to.be.undefined;
            expect(Array.prototype.subArray).to.be.undefined;
            expect(Array.prototype.without).to.be.undefined;
            expect(Array.prototype.last).to.be.undefined;
            expect(Array.prototype.swap).to.be.undefined;
            expect(Array.prototype.min).to.be.undefined;
            expect(Array.prototype.max).to.be.undefined;
            expect(Array.prototype.sum).to.be.undefined;
            expect(Array.prototype.avg).to.be.undefined;
            expect(Array.prototype.isEmpty).to.be.undefined;
        });
        // arrays.applyToPrototype();
    })
    
    describe("isIn function", function() {
        it("no argument", function(){
            expect(ArrayUtils.isIn()).to.be.false;
        });
        it("argument isnt array", function(){
            expect(ArrayUtils.isIn(1, 2)).to.be.false;
            expect(ArrayUtils.isIn([2], 2)).to.be.false;
            expect(ArrayUtils.isIn("1", "2")).to.be.false;
        });

        it("argument is in array", function(){
            expect(ArrayUtils.isIn(1, 2, 3, 1)).to.be.true;
            expect(ArrayUtils.isIn("a", "a", "b", "c")).to.be.true;
            expect(ArrayUtils.isIn("a", "c", "b", "a")).to.be.true;
            expect(ArrayUtils.isIn("a", ["c", "b", "a"])).to.be.true;
            expect(ArrayUtils.isIn("a", ["a", "b", "b"])).to.be.true;
        });
        it("argument isn't in array", function(){
            expect(ArrayUtils.isIn(1, 2, 3, 12)).to.be.false;
            expect(ArrayUtils.isIn("a", "b", "c")).to.be.false;
            expect(ArrayUtils.isIn("a", "c", "b")).to.be.false;
            expect(ArrayUtils.isIn("a", ["c", "b"])).to.be.false;
            expect(ArrayUtils.isIn("a", ["b", "b"])).to.be.false;
        });
        it("argument is empty array", function(){
            expect(ArrayUtils.isIn(1)).to.be.false;
            expect(ArrayUtils.isIn("a")).to.be.false;
            expect(ArrayUtils.isIn("a", [])).to.be.false;
            expect(ArrayUtils.isIn("a", {})).to.be.false;
        });
    });

    describe("last function", function() {
        const arrays = ArrayUtils.applyTo();
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