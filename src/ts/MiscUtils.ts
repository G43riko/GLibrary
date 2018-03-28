interface StringMap {[s: string]: string; }

export class MiscUtils {
    public static createClass(name: any, args: any[]): any {
        const temp = Object.create(name.prototype);
        name.apply(temp, args);
        return temp;
    }
    public static parseCookies(cookies: string): StringMap {
        const list: StringMap = {};
        const data = cookies ? cookies.toString().split(";") : [];
        data.forEach((cookie) => {
            const parts                = cookie.split("=");
            list[parts.shift().trim()] = decodeURI(parts.join("="));
        });

        return list;
    }
    public static setCookie(name: string, value: string, days: number): void {
        const d: Date = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + d.toUTCString();
    }

    public static getCookie(cname: string): string {
        const name = cname + "=";
        const ca = document.cookie.split(";");
        for (let c of ca) {
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    public static parseParams(query: string     = window.location.search.substring(1),
                              separator: string = "&",
                              delimiter: string = "="): any {
        const query_string: any = {};
        const vars: string[]    = query.split(separator);
        for (const key of vars) {
            const pair = key.split(delimiter);
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            }
            else if (typeof query_string[pair[0]] === "string") {
                query_string[pair[0]] = [query_string[pair[0]], decodeURIComponent(pair[1])];
            }
            else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }
    public static roughSizeOfObject(object: any): number {
        const objectList = [];
        const stack = [object];
        let bytes = 0;

        while (stack.length) {
            const value = stack.pop();
            if (typeof value === "boolean") {
                bytes += 4;
            }
            else if (typeof value === "string") {
                bytes += value.length << 1;
            }
            else if (typeof value === "number") {
                bytes += 8;
            }
            else if (typeof value === "object" && objectList.indexOf( value ) === -1) {
                objectList.push(value);
                for (const item of value) {
                    stack.push(item);
                }
            }
        }
        return bytes;
    }

    public static objectToQueryParams(obj: StringMap): string {
        // TODO: add url prefix
        let result = "";
        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                result += (result.length > 0 ? "&" : "?") + objKey + "=" + obj[objKey];
            }
        }
        return result;
    }

    public static includeFile(file: string): void {
        const script  = document.createElement("script");
        script.src  = file;
        script.type = "text/javascript";
        script.defer = true;
        document.head.appendChild(script);
    };
}