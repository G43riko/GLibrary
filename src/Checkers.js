exports.isFunction = function(val) {
    return typeof val === "function";
}
exports.isString = function(val) {
    return typeof val === "string";
}
exports.isObject = function(val) {
    return typeof val === "object";
}
exports.isBool = function(val) {
    return typeof val === "boolean";
}
exports.isNumber = function(val) {
    return typeof val === "number";
}
exports.isInt = function(val) {
    return typeof val === "number" && val % 1 === 0;
}
exports.isFloat = function(val) {
    return typeof val === "number" && val % 1 !== 0;
}
exports.isArray = function(val) {
    return Object.prototype.toString.call(val) === "[object Array]";
}
exports.isEmpty = function(val) {
    return Object.keys(val).length === 0 || val === [] || val === "";
}
export.isElement = function(val) {
    return return val instanceof HTMLElement;
}
