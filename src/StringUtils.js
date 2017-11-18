
"use strict";

const accentedLowerCharacters = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();

function generateStringUtils(target = {}) {
    const isTargetPrototype = target === String.prototype;
    const staticTarget = isTargetPrototype ? String : target;

    staticTarget.between = function(text, key1, key2) {
        const startPos = text.indexOf(key1);
        const endPos = text.indexOf(key2);
        if(startPos < 0 && endPos >= 0) {
            return text.substring(0, endPos);    
        } else if(endPos < 0 && startPos >= 0) {
            return text.substring(startPos + key1.length, text.length);    
        } else {
            return text.substring(startPos + key1.length, endPos);
        }
        
    };

    staticTarget.count = function(text, key) {
        return (text.match(new RegExp(key, "g")) || []).length;
    };

    staticTarget.repeat = function(text, count) {
        return new Array(count + 1).join(text);
    };

    staticTarget.removeAll = function(text, words) {
        return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
    };

    staticTarget.template = function(text, values, start = "{{", end = "}}") {
        start = start.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
        end = end.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
        const regexp = new RegExp(start + "(.+?)'" + end, "g");
        console.log("regexp: ", regexp);
        const matches = text.match(regexp) || [];

        for(let i = 0 ; i < matches.length ; i++) {
            const match = matches[i];
            const key = match.substring(start.length, match.length - end.length).trim();
            const value = values[key];
            if (value) {
                console.log("match: ", match);
                console.log("key: ", key);
                console.log("value: ", value);
                text = text.replace(match, value);
            }
        }
        return text;
    };

    target.removeAccentedCharacters = function(thisArg = this) {
        const result = [];
        for (let i = 0 ; i < thisArg.length ; i++) {
            const index = accentedCharacters.indexOf(thisArg[i]);
            result[result.length] = index >= 0 ? normalCharacters[index] : thisArg[i];
        }
        return result.join("");
    };

    target.getAsciiArray = function(thisArg = this) {
        const result = [];
        for(let i = 0 ; i < thisArg.length ; i++) {
            result[result.length] = thisArg[i].charCodeAt(0);
        }
        return result;
    };

    target.capitalize = function(thisArg = this) {
        const result = thisArg.toLowerCase().split("");
        result[0] = result[0].toUpperCase();
        return result.join("");
    };

    target.collapseWhitespace = function(thisArg = this) {
        return thisArg.replace(/^[\s\uFEFF\xA0]{2,}/g, "");
    };

    target.swapCase = function(thisArg = this) {
        return thisArg.replace(/\S/g, function(char) {
            const lowerCase = char.toLowerCase();
            return lowerCase === char ? char.toUpperCase() : lowerCase;
        });
    };

    target.isEmpty = function(thisArg = this) {
        return !thisArg || /^[\s\xa0]*$/.test(thisArg);
    };

    target.lines = function(thisArg = this) {
        return thisArg.replace(/\r\n/g, "\n").split("\n");
    };
    
    return target;
}

class StringUtils {
    static applyToPrototype() {
        return generateStringUtils(String.prototype);
    }

    static applyTo(object = {}) {
        return generateStringUtils(object);
    }
    
}
exports.StringUtils = StringUtils;

/*
export class StringUtils {
    static getFormattedNumber(number, prefix = "+421") {
        if (number.startsWith("+")) {
            return number;
        }
        if (number.startsWith("00")) {
            return number.substring(2);
        }
        if (number.startsWith("09") || number.startsWith("02")) {
            return prefix + number.substring(1);
        }
        console.warn("Neznámy formát čísla: " + number);
        return number;
    }

   
    static count(text, key) {
        return (text.match(new RegExp(key, "g")) || []).length;
    }
    static repeat(text, count) {
        return new Array(count + 1).join(text);
    }

    static removeAll(text, words) {
        return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
    }

    static template (word, values, start = "{{", end = "}}") {
        const regexp = new RegExp(start + ".*" + end, "g");

        const matches = word.match(regexp) || [];

        for(let i = 0 ; i<matches.length ; i++) {
            const match = matches[i];
            const key = match.substring(start.length, match.length - end.length).trim();
            const value = values[key]
            if (value) {
                world.replace(match, value);
            }
        }
    }

    static underscore(word) {
    }

    static humanize(word) {
    }
    static dasherize(word) {
    }

    //dashCase = a-b-c-d-e
    //dotCase a.c.d.v.s.d
    //pascalCase = FooBarBaz
    //pathCase = a/b/c/d
    //snakeCase = a_b_c_d_
    static isUpper(word) {
    }

    static isLower(word) {
    }
}
*/