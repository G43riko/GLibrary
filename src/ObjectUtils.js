function generateObjectUtils(target = {}) {
    const isTargetPrototype = target === Object.prototype;
    const staticTarget = isTargetPrototype ? Object : target;

    staticTarget.without = function(obj, items) {
        const result = {};
        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                if(items.indexOf(objKey) < 0) {
                    result[objKey] = obj[objKey];
                }
            }
        }
        return result;
    };
    target.size = function(thisArg = this) {
        let result = 0;
        for(const i in thisArg){
            if(thisArg.hasOwnProperty(i)){
                result++;
            }
        }
        return result;
    };

    target.isPlain = function(thisArg = this) {
        // TODO
        return thisArg;
    };
    return target;
}

class ObjectUtils {
    static applyToPrototype() {
        return generateObjectUtils(Object.prototype);
    }

    static applyTo(object = {}) {
        return generateObjectUtils(object);
    }
}
exports.ObjectUtils = ObjectUtils;