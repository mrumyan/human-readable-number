module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const additionalNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let digitsArray = number.toString().split('');
    switch (digitsArray.length) {
        case 1: // 0 - 9
            return units[digitsArray[0]];
        case 2:
            if (+digitsArray[0] === 1) { //10 - 19
                return additionalNumbers[digitsArray[1]];
            } else { // 20 - 99
                let result = dozens[digitsArray[0] - 2];
                return +digitsArray[1] === 0 ? result : `${result} ${units[digitsArray[1]]}`;
            }
        case 3: // 100 - 999
            let remainder = number - 100 * digitsArray[0];
            let result = `${units[digitsArray[0]]} hundred`;
            return remainder === 0 ? result : `${result} ${toReadable(remainder)}`;
    }
}
