"use strict";
    
exports.isIn = function(obj, data) {
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

    target.last = function(thisArg = this) {
        if (thisArg.length === 0) {
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

    return target;
}

/**
 * TODO: 
 * sortBy()
 * where(array, { "!age": 10 })
 * a.without([ 1, 2, 3 ], [ 2, 3, anotherValue ])
 * pluck(data, key) map podla keyu
 */
