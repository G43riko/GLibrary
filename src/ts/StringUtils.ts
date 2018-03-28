const accentedLowerCharacters = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
const normalLowerCharacters = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
const accentedCharacters = accentedLowerCharacters + accentedLowerCharacters.toUpperCase();
const normalCharacters = normalLowerCharacters + normalLowerCharacters.toUpperCase();

export class StringUtils {
    public static removeAccentedCharacters(word: string): string {
        if (!word) {
            return word;
        }
        return word.replace(/./g, (e: string) => {
            const index = accentedCharacters.indexOf(e);
            return index >= 0 ? normalCharacters[index] : e;
        });
    }

    public static toUpperSnakeCase(text: string): string {
        return text.replace(/[A-Z]/g, (e) => "_" + e.toUpperCase()).toUpperCase();
    }

    public static toCamelCase(text: string): string {
        return text.trim().replace(/(-|_|\s)+(.)?/g, (math, sep, c) => c ? c.toUpperCase() : "");
    }

    public static getLastPart(text: string, divider: string): string {
        if (!text) {
            return text;
        }
        const splitText = text.split(divider);
        if (splitText.length === 0) {
            return text;
        }
        return splitText[splitText.length - 1];
    }

    public static contains(string: string, substring: string): boolean {
        return string.indexOf(substring) >= 0;
    }

    /**
     * Remove all occurrences of each string in words array from text
     * @param {string} text - text
     * @param {string[]} words - list of words to remove
     * @returns {string} - text without words
     */
    public static removeAll(text: string, words: string[]): string {
        return text.replace(new RegExp("(" + words.join("|") + ")", "g"), "");
    }

    /**
     * Return substring between key1 and key2
     * @param {string} text -
     * @param {string} key1
     * @param {string} key2
     * @returns {string}
     */
    public static between(text: string, key1: string, key2: string): string {
        const startPos = text.indexOf(key1);
        const endPos = text.indexOf(key2);
        if (startPos < 0 && endPos >= 0) {
            return text.substring(0, endPos);
        } else if (endPos < 0 && startPos >= 0) {
            return text.substring(startPos + key1.length, text.length);
        } else {
            return text.substring(startPos + key1.length, endPos);
        }

    }

    public static occurences(text: string, key: string): number {
        return (text.match(new RegExp(key, "g")) || []).length;
    }

    public static collapseWhitespace(text: string): string {
        return text.replace(/^[\s\uFEFF\xA0]{2,}/g, "");
    }

    public static capitalize(text: string): string {
        return text.toLowerCase().replace(/^./, (char) => char.toUpperCase());
    }

    public static swapCase(text: string): string {
        return text.replace(/\S/g, function(char) {
            const lowerCase = char.toLowerCase();
            return lowerCase === char ? char.toUpperCase() : lowerCase;
        });
    }

    public static transformToBasicFormat(text: string): string {
        return StringUtils.removeAccentedCharacters(text).toLowerCase().trim();
    }
}