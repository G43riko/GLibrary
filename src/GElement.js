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
            // TODO
        },
        getAttribute(attribute) {
            return element.getAttribute(attribute);
        }
    };
};