export class MathUtils {
    public static pad(num: number, size: number): string {
        const s = "00000000000000" + num;
        return s.substr(s.length - size);
    }
    public static clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(value, max));
    }

    public static lamp(min: number, max: number, scale: number): number {
        return MathUtils.clamp((max - min) * scale + min, min, max);
    }
    public static average(args: number[]): number {
        let sum = 0;
        for (const item of args) {
            sum += item;
        }
        return sum / args.length;
    }
}