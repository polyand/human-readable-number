module.exports = function toReadable(number) {
    number = String(number);
    let result = '';
    let one = '';
    let ten = '';
    let hundred = '';

    if (number == '0') result = 'zero';
    if (number == '1') result = 'one';
    if (number == '2') result = 'two';
    if (number == '3') result = 'three';
    if (number == '4') result = 'four';
    if (number == '5') result = 'five';
    if (number == '6') result = 'six';
    if (number == '7') result = 'seven';
    if (number == '8') result = 'eight';
    if (number == '9') result = 'nine';
    if (number == '10') result = 'ten';
    if (number == '11') result = 'eleven';
    if (number == '12') result = 'twelve';
    if (number == '13') result = 'thirteen';
    if (number == '14') result = 'fourteen';
    if (number == '15') result = 'fifteen';
    if (number == '16') result = 'sixteen';
    if (number == '17') result = 'seventeen';
    if (number == '18') result = 'eighteen';
    if (number == '19') result = 'nineteen';
    if (number == '20') result = 'twenty';
    if (number == '30') result = 'thirty';
    if (number == '40') result = 'forty';
    if (number == '50') result = 'fifty';
    if (number == '60') result = 'sixty';
    if (number == '70') result = 'seventy';
    if (number == '80') result = 'eighty';
    if (number == '90') result = 'ninety';
    if (number == '100') result = 'one hundred';
    if (number == '200') result = 'two hundred';
    if (number == '300') result = 'tree hundred';
    if (number == '400') result = 'four hundred';
    if (number == '500') result = 'five hundred';
    if (number == '600') result = 'six hundred';
    if (number == '700') result = 'seven hundred';
    if (number == '800') result = 'eight hundred';
    if (number == '900') result = 'nine hundred';

    if (number.length == 2 && number[0] !== '1' && number[1] !== '0') {
        if (number[0] == '2') ten = 'twenty';
        if (number[0] == '3') ten = 'thirty';
        if (number[0] == '4') ten = 'forty';
        if (number[0] == '5') ten = 'fifty';
        if (number[0] == '6') ten = 'sixty';
        if (number[0] == '7') ten = 'seventy';
        if (number[0] == '8') ten = 'eighty';
        if (number[0] == '9') ten = 'ninety';
        if (number[1] == '1') one = 'one';
        if (number[1] == '2') one = 'two';
        if (number[1] == '3') one = 'three';
        if (number[1] == '4') one = 'four';
        if (number[1] == '5') one = 'five';
        if (number[1] == '6') one = 'six';
        if (number[1] == '7') one = 'seven';
        if (number[1] == '8') one = 'eight';
        if (number[1] == '9') one = 'nine';
        result = ten + ' ' + one;
    }
    if (number.length == 3) {
        if (number[0] == '1') hundred = 'one hundred';
        if (number[0] == '2') hundred = 'two hundred';
        if (number[0] == '3') hundred = 'three hundred';
        if (number[0] == '4') hundred = 'four hundred';
        if (number[0] == '5') hundred = 'five hundred';
        if (number[0] == '6') hundred = 'six hundred';
        if (number[0] == '7') hundred = 'seven hundred';
        if (number[0] == '8') hundred = 'eight hundred';
        if (number[0] == '9') hundred = 'nine hundred';
        if (number[2] == '1') one = 'one';
        if (number[2] == '2') one = 'two';
        if (number[2] == '3') one = 'three';
        if (number[2] == '4') one = 'four';
        if (number[2] == '5') one = 'five';
        if (number[2] == '6') one = 'six';
        if (number[2] == '7') one = 'seven';
        if (number[2] == '8') one = 'eight';
        if (number[2] == '9') one = 'nine';
        if (number[1] == '0' && number[2] == '0') result = hundred;
        if (number[1] == '0' && number[2] !== '0') result = hundred + ' ' + one;
        if (number[1] == '1') {
            if (number[2] == '1') ten = 'eleven';
            if (number[2] == '2') ten = 'twelve';
            if (number[2] == '3') ten = 'thirteen';
            if (number[2] == '4') ten = 'fourteen';
            if (number[2] == '5') ten = 'fifteen';
            if (number[2] == '6') ten = 'sixteen';
            if (number[2] == '7') ten = 'seventeen';
            if (number[2] == '8') ten = 'eighteen';
            if (number[2] == '9') ten = 'nineteen';
            result = hundred + ' ' + ten;
        }

        if (number[2] == '0' && number[1] !== '0') {
            if (number[1] == '1') ten = 'ten';
            if (number[1] == '2') ten = 'twenty';
            if (number[1] == '3') ten = 'thirty';
            if (number[1] == '4') ten = 'forty';
            if (number[1] == '5') ten = 'fifty';
            if (number[1] == '6') ten = 'sixty';
            if (number[1] == '7') ten = 'seventy';
            if (number[1] == '8') ten = 'eighty';
            if (number[1] == '9') ten = 'ninety';
            result = hundred + ' ' + ten;
        }

        if (number[1] !== '0' && number[2] !== '0') {
            if (number[1] == '2') ten = 'twenty';
            if (number[1] == '3') ten = 'thirty';
            if (number[1] == '4') ten = 'forty';
            if (number[1] == '5') ten = 'fifty';
            if (number[1] == '6') ten = 'sixty';
            if (number[1] == '7') ten = 'seventy';
            if (number[1] == '8') ten = 'eighty';
            if (number[1] == '9') ten = 'ninety';
            if (number[1] == '1') result = hundred + ' ' + ten;
            else result = hundred + ' ' + ten + ' ' + one;
        }
    }
    return (result);
}
