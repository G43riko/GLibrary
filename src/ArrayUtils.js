"use strict";
    
exports.isIn = function() {
    if (Array.isArray(data)) {
        if (data.indexOf(obj) >= 0) {
            return true;
        }
    } else {
        for(let i = 1 ; i < arguments.length ; i++) {
            if (arguments[i] === obj) {
                return true;
            }
        }
    }
    return false;
}

exports.last = function(data) {
    if (!Array.isArray(data)) {
        return null;
    }

    if (data.length === 0) {
        return null;
    }

    return data[data.length - 1];
}