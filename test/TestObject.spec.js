const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const ObjectUtils = require("../src/ObjectUtils").ObjectUtils;

describe("object utils", function() {
    describe("it appy function to Array prototype", function() {
        it("imported object contains all functions", function(){
            should.exist(ObjectUtils.applyTo);
            should.exist(ObjectUtils.applyToPrototype);
        });


        it("Array prototype have not any utils", function(){
            expect(Object.prototype.byPath).to.be.undefined;
        });
    });

    describe("byPath function", function() {
        const objects = ObjectUtils.applyTo();
        const testObject  = {
            "a": {
                "b": {
                    "c": {
                        "d": "dd"
                    }
                }
            }
        };
        it("argument isn't array", function () {
            expect(objects.byPath(testObject, "a.c.b.d")).to.be.undefined;
            expect(objects.byPath(testObject, "a.b.c.d")).to.be.equal("dd");
        });
    })
});