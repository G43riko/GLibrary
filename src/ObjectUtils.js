function generateArrayUtils(target = {}) {
    const isTargetPrototype = target === Array.prototype;
    const staticTarget = isTargetPrototype ? Array : target;

    target.size = function(thisArg = this) {
        let result = 0;
        for(const i in this){
            if(this.hasOwnProperty(i)){
                result++;
            }
        }
        return result;
    };
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