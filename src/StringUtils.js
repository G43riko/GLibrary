const accentedCharacters  = "áäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽàèìòùáéíóúýâêîôûãñõäëïöüÿÀÈÌÒÙÁÉÍÓÚÝÂÊÎÔÛÃÑÕÄËÏÖÜŸ";
const normalCharacters    = "aacdeillnoorstuyzAACDEILLNOORSTUYZaeiouaeiouyaeiouanoaeiouyAEIOUAEIOUYAEIOUANOAEIOUY";

exports.StringUtils = class  {
    static removeAccentedCharacters(word) {
        const result = [];
        for (let i = 0 ; i < word.length ; i++) {
            const index = accentedCharacters.indexOf(word[i]);
            result[result.length] = index >= 0 ? normalCharacters[index] : word[i];
        }
        return result.join("");
    }
    static getFormattedNumber(number, prefix = "+421") {
        if (number.startsWith("+")) {
            return number;
        }
        if (number.startsWith("00")) {
            return number.substring(2);
        }
        if (number.startsWith("09") || number.startsWith("02")) {
            return prefix + number.substring(1);
        }
        console.warn("Neznámy formát čísla: " + number);
        return number;
    }
}