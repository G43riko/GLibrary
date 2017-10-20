"use strict";
    
exports.isIn = function(obj, data) {
    if (Array.isArray(data)) {
        if (data.indexOf(obj) >= 0) {
            return true;
        }
    } else {
        for(var i = 1 ; i < arguments.length ; i++) {
            if (arguments[i] === obj) {
                return true;
            }
        }
    }
    return false;
}

Array.prototype.last = function() {
    if (this.length === 0) {
        return null;
    }

    return this[this.length - 1];
}

Array.prototype.unique = function() {
    const length = this.length;
    const result = [];
    const o = {};
    for (i = 0 ; i < length ; i++) {
        if(typeof o[this[i]] === "undefined") {
            o[this[i]] = 1;
            result[result.length] = this[i];
        }
    }
    return result;
};

Array.prototype.subArray = function(from = 0, to = this.length) {
    const result = [];
    const final = this.length < to ? this.length : to;
    for (i = from ; i < final ; i++) {
        result[result.length] = this[i];
    }
    return result;
};

Array.prototype.swap = function() {
    const length = this.length - 1;
    const length2 = Math.floor(this.length / 2);
    for (let i=0 ; i<length2 ; i++) {
        const tmp = this[i];
        this[i] = this[length - i];
        this[length - i] = tmp;
    }
    return this;
}

Array.prototype.max = function(){
	return Math.max.apply(Math, this);
};

Array.prototype.min = function(){
	return Math.min.apply(Math, this);
};

Array.prototype.sum = function(){
	return this.reduce((a, b) => a + b);
};

Array.prototype.avg = function(){
	return this.reduce((a, b) => a + b) / this.length;
};
