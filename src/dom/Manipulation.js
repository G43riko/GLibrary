"use strict";

exports.remove = function(element) {
    const parentElement = element.parentElement;
    if (parentElement) {
        parentElement.removeChild(element);
    }
};

exports.indexOf = function(element) {
    let index = 0;
    while( (element = element.previousElementSibling) !== null ){
        index++;
    }
    return index;
};

exports.position = function(element){
    let top  = 0;
    let left = 0;
    do {
        top  += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent
    } while(element);

    return {
        y: top,
        x: left
    };
};

exports.size = function(element){
    return {
        width  : element.offsetWidth,
        height : element.offsetHeight
    };
};