/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    // Define a mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the integer value of the current Roman numeral
        const currentVal = romanMap[s[i]];
        // Get the integer value of the next Roman numeral if it exists
        const nextVal = romanMap[s[i + 1]];

        // If the next value is greater than the current, subtract the current from the total
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add the current value to the total
            total += currentVal;
        }
    }

    return total;
};

module.exports = { romanToInt };
