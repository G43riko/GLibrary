"use strict";

exports.remove = function(element) {
    const parentElement = element.parentElement;
    if (parentElement) {
        parentElement.removeChild(element);
    }
};
