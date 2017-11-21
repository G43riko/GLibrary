"use strict";

exports.setConstants = (function(){
    let pattern = new RegExp("^<%= .* %>$");
    let loadOptions = (data, key = "") => {
        const options = {};
        const templates = {};
        let actualKey;

        for (const i in data) {
            if (data.hasOwnProperty(i)) {
                actualKey = key ? key + "_" : "";
                actualKey = i.charAt(0) === "!" ? i : actualKey + i;

                if (typeof data[i] === "object") {
                    loadOptions(data[i], actualKey);
                } else {
                    if (pattern.test(data[i])) {
                        templates[actualKey] = data[i];
                    }
                    options[actualKey] = data[i];
                }
            }
        }
        if (key === ""){//ak je prvá iterácia tak opraví všetky templaty
            for (const i in templates) {
                if (templates.hasOwnProperty(i)) {
                    let value = templates[i];
                    value = value.substring(4, value.length - 3);
                    key = value.replace(/\./g, "_");
                    if (options.hasOwnProperty(key)) {
                        options[i] = options[key];
                    }
                    delete templates[i];
                }
            }
        }
        return options;
    };
    return (data, object = (typeof window !== "undefined" ?  window : {})) => {
        const options = loadOptions(data);
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                Object.defineProperty(object, key.toUpperCase(), {
                    value : options[key],
                    writable: false
                });
            }
        }
        return object;
    };
})();

exports.createClass = function(name, ...args) {
    const temp = Object.create(name.prototype);
    name.apply(temp, args);
    return temp;
};

exports.parseCookies = function(cookies) {
    const list = {};
 
    cookies && cookies.split(";").forEach((cookie) => {
        const parts = cookie.split("=");
        list[parts.shift().trim()] = decodeURI(parts.join("="));
    });
 
    return list;
};

exports.getFormattedNumber = function(number, prefix = "+421") {
    number = number.replace(/[( )/-]/g, "");
    if (number.startsWith("+")) {
        return number;
    }
    if (number.startsWith("00")) {
        return number.substring(2);
    }
    if (number.startsWith("09") || number.startsWith("02")) {
        return prefix + number.substring(1);
    }
    return number;
}

exports.queryString = function() {
    const query_string = {};
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i=0 ; i<vars.length ; i++) {
        const pair = vars[i].split("=");
        if(typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
        }
        else if(typeof query_string[pair[0]] === "string") {
            query_string[pair[0]] = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        }
        else{
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
};

exports.roughSizeOfObject = function(object) {
    const objectList = [];
    const stack = [object];
    let bytes = 0;
 
    while (stack.length) {
        const value = stack.pop();
        if (typeof value === "boolean") {
            bytes += 4;
        } else if (typeof value === "string") {
            bytes += value.length << 1;
        } else if (typeof value === "number") {
            bytes += 8;
        } else if (typeof value === "object" && objectList.indexOf( value ) === -1) {
            objectList.push(value);
            for (const i in value) {
                if (value.hasOwnProperty(i)) {
                    stack.push(value[i]);
                }
            }
        }
    }
    return bytes;
};

exports.includeFile = function(file) {
    const script  = document.createElement("script");
    script.src  = file;
    script.type = "text/javascript";
    script.defer = true;
    document.head.appendChild(script);
};
