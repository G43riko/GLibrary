var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
var StringUtils = require("../src/StringUtils").StringUtils;

const chars = "+=§,.-?:_\"!)/()<>*\'$[]}{*&^%$#@!/\\|#&@{}^'`][~\|€¶←↓→º’‘©><§®ª`←'↓&×÷|÷×";
const caseable = "þÞıŦŧŊEĐđNΩ";
const numbers = "0123456789";
const accented = "ľščťžýáíéäôňŁłŁØÆŁÐø";
const testString = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const resultString = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";


describe("string utils", function() {
    describe("it test string functions", function(){
        const Utils = StringUtils.applyTo();

        const text = "abcdedabcdedabcdjidABdsdcdsjo";
        it("test count", function(){
            expect(Utils.count(text, "ab")).to.be.equal(3);
            expect(Utils.count("gabriel", "")).to.be.equal(8);
        });
        it("test removeAll", function(){
            expect(Utils.removeAll(text, ["a"])).to.be.equal("bcdedbcdedbcdjidABdsdcdsjo");
            expect(Utils.removeAll(text, ["a", "b", "c"])).to.be.equal("deddeddjidABdsddsjo");
        });

        it("test repeat", function(){
            expect(Utils.repeat("a", 10)).to.be.equal("aaaaaaaaaa");
            expect(Utils.repeat("abc", 10)).to.be.equal("abcabcabcabcabcabcabcabcabcabc");
        });

        it("test between", function(){
            expect(Utils.between(numbers, "34", "67")).to.be.equal("5");
            expect(Utils.between(numbers, "34", "ab")).to.be.equal("56789");
            expect(Utils.between(numbers, "ab", "67")).to.be.equal("012345");
        });
        it("test template", function(){
            const params = {
                meno: "Gabo",
                vek: 23
            }
            const text = "{{meno}} je starý {{vek}} rokov";
            // expect(Utils.template(text, params)).to.be.equal("Gabo je starý 23 rokov");
        });
    });

    describe("it appy function to String prototype", function() {
        it("imported object contains all functions", function(){
            should.exist(StringUtils.applyTo);
            should.exist(StringUtils.applyToPrototype);
        });

        it("String prototype has not any utils", function(){
            expect(String.prototype.removeAccentedCharacters).to.be.undefined;
            expect(String.prototype.getAsciiArray).to.be.undefined;
            expect(String.prototype.capitalize).to.be.undefined;
            expect(String.prototype.collapseWhitespace).to.be.undefined;
            expect(String.prototype.swapCase).to.be.undefined;
            expect(String.prototype.isEmpty).to.be.undefined;
            expect(String.prototype.lines).to.be.undefined;
        });
        
        it("String prototype has all utils", function(){
            StringUtils.applyToPrototype();
            should.exist(String.prototype.removeAccentedCharacters);
            should.exist(String.prototype.getAsciiArray);
            should.exist(String.prototype.capitalize);
            should.exist(String.prototype.collapseWhitespace);
            should.exist(String.prototype.swapCase);
            should.exist(String.prototype.isEmpty);
            should.exist(String.prototype.lines);
        });
        // Strings.applyToPrototype();
    });

    describe("test new string prototype function", function() {
        it("test removeAccentedCharacters", function(){
            const finalTestString = testString + testString.toUpperCase();

            const finalResultString = resultString + resultString.toUpperCase();

            expect(finalTestString.removeAccentedCharacters()).to.be.equal(finalResultString);
            expect(finalResultString.removeAccentedCharacters()).to.be.equal(finalResultString);
            expect(chars.removeAccentedCharacters()).to.be.equal(chars);
        });
        
        it("test swapCase", function(){
            expect(chars.swapCase()).to.be.equal(chars);
            expect(numbers.swapCase()).to.be.equal(numbers);
            expect(testString.swapCase()).to.be.equal(testString.toUpperCase());
        });

        it("test isEmpty", function(){
            expect("".isEmpty()).to.be.true;
            expect(" ".isEmpty()).to.be.true;
            expect("\t".isEmpty()).to.be.true;
            expect("\xa0".isEmpty()).to.be.true;
            expect("\t \xa0\t \xa0".isEmpty()).to.be.true;
            expect("  ".isEmpty()).to.be.true;
            expect("\t\t".isEmpty()).to.be.true;
            expect("\xa0\xa0".isEmpty()).to.be.true;

            expect("a".isEmpty()).to.be.false;
            expect("0".isEmpty()).to.be.false;
            expect("[]".isEmpty()).to.be.false;
            expect("A".isEmpty()).to.be.false;
            expect("{}".isEmpty()).to.be.false;
            expect(".".isEmpty()).to.be.false;
        });
    });
})