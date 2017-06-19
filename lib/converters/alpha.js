function toAlphabetic(value, alphabet)
{
    // make the value 0-based, and don't do anything for value <= 0
    --value;
    if (value < 0)
        return null;

    // determine the number of "digits" and the offset for the place-value system
    var lenAlphabet = alphabet.length;
    var numDigits = 1;
    var offset = 0;

    for ( ; ; numDigits++)
    {
        var newOffset = (offset + 1) * lenAlphabet;
        if (value < newOffset)
            break;

        offset = newOffset;
    }

    // use value - offset to convert to a "number" in the place-value system with base lenAlphabet
    value -= offset;
    var ret = '';

    for (var i = 0; i < numDigits; i++)
    {
        ret = alphabet.charAt(value % lenAlphabet) + ret;
        value = Math.floor(value / lenAlphabet);
    }

    return ret;
}

module.exports.toAlphabetic = toAlphabetic;


var ALPHABET = {
    LOWER_LATIN: 'abcdefghijklmnopqrstuvwxyz',
    UPPER_LATIN: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWER_GREEK: 'αβγδεζηθικλμνξοπρστυφχψω',
    UPPER_GREEK: 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
    HIRAGANA: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん',
    HIRAGANA_IROHA: 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす',
    KATAKANA: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
    KATAKANA_IROHA: 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス'
};

module.exports.ALPHABET = ALPHABET;


module.exports.toLowerLatin = function(value) { return toAlphabetic(value, ALPHABET.LOWER_LATIN); };
module.exports.toUpperLatin = function(value) { return toAlphabetic(value, ALPHABET.UPPER_LATIN); };
module.exports.toLowerGreek = function(value) { return toAlphabetic(value, ALPHABET.LOWER_GREEK); };
module.exports.toUpperGreek = function(value) { return toAlphabetic(value, ALPHABET.UPPER_GREEK); };
module.exports.toHiragana = function(value) { return toAlphabetic(value, ALPHABET.HIRAGANA); };
module.exports.toHiraganaIroha = function(value) { return toAlphabetic(value, ALPHABET.HIRAGANA_IROHA); };
module.exports.toKatakana = function(value) { return toAlphabetic(value, ALPHABET.KATAKANA); };
module.exports.toKatakanaIroha = function(value) { return toAlphabetic(value, ALPHABET.KATAKANA_IROHA); };
