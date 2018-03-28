export class ArrayUtils {
    public static where(array: any[], condition: any[]): any[] {
        const result: any[] = [];
        for (let i = 0 ; i < array.length ; i++) {
            let add = true;
            for (const key in condition) {
                if (condition.hasOwnProperty(key)) {
                    if (array[i][key] !== condition[key]) {
                        add = false;
                        break;
                    }
                }
            }
            if (add) {
                result[result.length] = array[i];
            }
        }
        return result;
    }
    public static join(array: any[], delimiter: string, prefix: string = "", postfix: string = ""): string {
        return prefix + array.join(delimiter) + postfix;
    }
    public static getLast<T = any>(array: T[]): T {
        if (!Array.isArray(array)) {
            return array;
        }
        return array[array.length - 1];
    }
    public static getRandom<T = any>(args: any[]): T {
        return args[(Math.random() * args.length)];
    }
    public static makeUnique<T = any>(array: T[]): T[] {
        return Array.from(new Set<T>(array));
    }
}