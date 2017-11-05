"use strict";

exports.byClass = function(className) {
    return document.getElementsByClassName(className);
};
exports.byLink = function(link) {
    return document.querySelectorAll("a[attr='" + link + "']");
};
exports.byId = function(id) {
    return document.getElementById(id);
};

exports.byName = function(name) {
    return document.getElementsByName(name);
};

exports.byTag = function(tagName) {
    return document.getElementsByTagName(tagName);
};