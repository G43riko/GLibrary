exports.binomialCoefficient = function(n, k) {
    let r = 1;
    if (k > n) {
        return 0;
    }
    for (let d = 1 ; d <= k; d++) {
        r *= n--;
        r /= d;
    }
    return r;
};

exports.choose = function() {
    return arguments[(Math.random() * arguments.length)];
};

exports.log2i = function(value) {
    let r = 0;
    while ((value >>= 1) > 0) {
        r++;
    }
    return r;
};

exports.average = function() {
    let sum = 0;
    for(let i = 0 ; i < arguments.length ; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
};

exports.clap = function(value, min, max) {
    return Math.max(min, Math.min(value, max));
};

exports.rand = function(min, max)   {
    return (Math.random() * (max - min)) + min;
};

exports.lerp = function(a, b, val) {
    return a * val + (1 - val) * b;
};