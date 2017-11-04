"use strict";

function generateArrayUtils(target = {}) {
    const isTargetPrototype = target === Array.prototype;
    const staticTarget = isTargetPrototype ? Array : target;

    staticTarget.subArray = function(array, from = 0, to = array.length) {
        const result = [];
        const final = array.length < to ? array.length : to;
        for (let i = from ; i < final ; i++) {
            result[result.length] = array[i];
        }
        return result;
    };

    staticTarget.where = function(array, condition) {
        const result = [];
        for (let i = 0 ; i < array.length ; i++) {
            let add = true;
            for(const key in condition) {
                if (condition.hasOwnProperty(key)) {
                    if(array[i][key] !== condition[key]) {
                        add = false;
                        break;
                    }
                }
            }
            if (add) {
                result[result.length] = array[i];
            }
        }
        return result;
    };

    staticTarget.without = function(array, condition) {
        // TODO
    }

    target.last = function(thisArg = this) {
        if (!Array.isArray(thisArg) || thisArg.length === 0) {
            return null;
        }
    
        return thisArg[thisArg.length - 1];
    };

    
    target.unique = function(thisArg = this) {
        const length = thisArg.length;
        const result = [];
        const o = {};
        for (let i = 0 ; i < length ; i++) {
            if (typeof o[thisArg[i]] === "undefined") {
                o[thisArg[i]] = 1;
                result[result.length] = thisArg[i];
            }
        }
        return result;
    };
    
    target.swap = function(thisArg = this) {
        const length = thisArg.length - 1;
        const length2 = thisArg.length >> 1;
        for (let i = 0 ; i < length2 ; i++) {
            const tmp = thisArg[i];
            thisArg[i] = thisArg[length - i];
            thisArg[length - i] = tmp;
        }
        return thisArg;
    };
    
    target.max = function(thisArg = this) {
        return Math.max.apply(Math, thisArg);
    };
    
    target.min = function(thisArg = this) {
        return Math.min.apply(Math, thisArg);
    };
    
    target.sum = function(thisArg = this) {
        return thisArg.reduce((a, b) => a + b);
    };
    
    target.avg = function(thisArg = this) {
        return thisArg.reduce((a, b) => a + b) / thisArg.length;
    };

    target.isEmpty = function(thisArg = this) {
        return thisArg.length === 0;
    };

    target.compact = function(thisArg = this) {
        const result = [];
        for(let i = 0 ; i < thisArg.length ; i++) {
            if (thisArg[i]) {
                result[resul.length] = thisArg[i];
            }
        }
        return result;
    };

    return target;
}

class ArrayUtils {
    static isIn (obj, data) {
        if (Array.isArray(data)) {
            if (data.indexOf(obj) >= 0) {
                return true;
            }
        } else {
            for (let i = 1 ; i < arguments.length ; i++) {
                if (arguments[i] === obj) {
                    return true;
                }
            }
        }
        return false;
    }

    static applyToPrototype() {
        return generateArrayUtils(Array.prototype);
    }

    static applyTo(object = {}) {
        return generateArrayUtils(object);
    }
}
exports.ArrayUtils = ArrayUtils;
/**
 * TODO: 
 * sortBy()
 * a.without([ 1, 2, 3 ], [ 2, 3, anotherValue ])
 * pluck(data, key) map podla keyu
 */
