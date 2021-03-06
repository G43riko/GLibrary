"use strict";

exports.GElement = function(element) {

    return {
        getId: function() {
            return element.id;
        },
        getElement() {
            return element;
        },
        getText() {
            return element.innterText;
        },
        getHtml() {
            return element.innerHTML;
        },
        getTagName() {
            return element.tagName;
        },
        isEnabled() {
            return !element.disabled;
        },
        isVisible() {
            return window.getComputedStyle(element).display === "none" && element.offsetParent === null;
        },
        getAttribute(attribute) {
            return element.getAttribute(attribute);
        }
    };
};