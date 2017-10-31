exports.getBrowser = function() {
    var userAgent = navigator.userAgent;
    var isFirefox = userAgent.search(/Firefox/) != -1;
    var isIE = userAgent.search(/MSIE/) != -1;
    var isOpera = userAgent.search(/Opera/) != -1;
    var isChrome = userAgent.search(/Chrome/) != -1;
    var isSafari = userAgent.search(/Safari/) != -1;

    var result = "";
    var version = 0.0;

    if (isIE) {
        result = userAgent.match(/MSIE [0-9\.]*/)[0];
        isInternetExplorer = true;
    } else if (isFirefox) {
        result = userAgent.match(/Firefox\/[0-9\.]*/)[0];
        isFirefoxBrowser = true;
    } else if (isOpera) {
        result = "Opera " + userAgent.match(/Version\/[0-9\.]*/)[0];
    } else if (isChrome) {
        result = userAgent.match(/Chrome\/[0-9\.]*/)[0];
    } else if (isSafari) {
        result = "Safari " + userAgent.match(/Version\/[0-9\.]*/)[0];
    }

    return result;
}

exports.gerNavigatorData = function() {
    const result = {};
    if(typeof navigator === "object"){
        result.userAgent	= navigator.userAgent;
        result.language	= navigator.language;
        result.platform	= navigator.platform;
        result.vendor		= navigator.vendor;
    }
    return result;
}

exports.getWindowData = function(){
    const result = {};
    if (typeof window.innerWidth != "undefined") {
        result.innerWidth = window.innerWidth;
        result.innerHeight = window.innerHeight;
    }
    else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
        result.innerWidth = document.documentElement.clientWidth;
        result.innerHeight = document.documentElement.clientHeight;
    }
    else {
        result.innerWidth = document.getElementsByTagName("body")[0].clientWidth;
        result.innerHeight = document.getElementsByTagName("body")[0].clientHeight;
    }
    return result;
}

exports.getScreenData = function() {
    const result = {};
    if(typeof screen === "object"){
        result.availHeight	= screen.availHeight;
        result.availWidth		= screen.availWidth;
    }
    return result;
}

exports.getLocation = function() {
    return new Promise((success, reject) => {
        const data = {};
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(a => success({
                accularity: a.coords && a.coords.accuracy  || "unknown",
                latitude  : a.coords && a.coords.latitude  || "unknown",
                longitude : a.coords && a.coords.longitude || "unknown"
            }));
        }
        else{
            reject("Geolocation is not supported by this browser.");
        }
    });
}
