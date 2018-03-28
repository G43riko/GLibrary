export class DateUtils {
    public static toHHMMSS(time: string, decimals = 0) {
        const sec_num: number        = parseInt(time, 10) / 1000;
        let hours: string | number   = Math.floor(sec_num / 3600);
        let minutes: string | number = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds: string | number = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds.toFixed(decimals);
        }
        else {
            seconds = seconds.toFixed(decimals);
        }
        return hours + ":" + minutes + ":" + seconds;
    }
    public static parseDate(date: string): Date {
        if (date.match(/1?[1-9]\.([123])?[1-9]\.([12])([09])([0129])[0-9]/)) {
            const splitDate = date.split(".");
            return new Date(`${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`);
        }

        return new Date(date);
    }
}