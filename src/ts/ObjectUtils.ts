export class ObjectUtils {
    public static without(obj: any, items: string[]): any {
        const result: any = {};
        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                if (items.indexOf(objKey) < 0) {
                    result[objKey] = obj[objKey];
                }
            }
        }
        return result;
    }

    public static size(object: any): number {
        let result = 0;
        for (const i in object) {
            if (object.hasOwnProperty(i)) {
                result++;
            }
        }
        return result;
    }
    public static isPlain(object: any): boolean {
        for (const index in object) {
            if (object.hasOwnProperty(index)) {
                if (typeof object[index] === "undefined") {
                    return false;
                }
            }
        }
        return true;
    };

    public static byString(o: any, s: string): any {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        const a = s.split('.');
        for (let i = 0, n = a.length; i < n; ++i) {
            const k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    }
}