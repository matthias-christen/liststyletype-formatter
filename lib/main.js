///////////////////////////////////////////////////////////////////////////////
// Import Packages

var Alpha = require('./converters/alpha');
var Letter = require('./converters/letter');
var PlaceValue = require('./converters/placevalue');
var CJK = require('./converters/cjk');
var Special = require('./converters/special');


///////////////////////////////////////////////////////////////////////////////
// Private Functions

function addDot(s, dot)
{
    if (dot === undefined)
        dot = '.';
    return s === null ? s : s + dot;
}


///////////////////////////////////////////////////////////////////////////////
// Module Constants

// formatter specifications
var formatters = {
    'none': '',
    'disc': '•',
    'circle': '◦',
    'square': '￭',

    'decimal': Math.floor,
    'cjk-decimal': { function: PlaceValue.toCJKDecimal, dot: '、' },

    'decimal-leading-zero': function(v)
    {
        v = Math.floor(v);
        if (0 <= v && v < 10)
            return '0' + v;
        if (-10 < v && v < 0)
            return '-0' + Math.abs(v);
        return v;
    },

    'lower-roman': Letter.toLowerRoman,
    'upper-roman': Letter.toUpperRoman,
    'lower-greek': Alpha.toLowerGreek,
    'lower-alpha': Alpha.toLowerLatin,
    'upper-alpha': Alpha.toUpperLatin,
    'arabic-indic': PlaceValue.toArabicIndic,
    'armenian': Letter.toUpperArmenian,
    'bengali': PlaceValue.toBengali,
    'cambodian': PlaceValue.toKhmer,
    'cjk-earthly-branch': { function: PlaceValue.toCJKEarthlyBranch, dot: '、' },
    'cjk-heavenly-stem': { function: PlaceValue.toCJKHeavenlyStem, dot: '、' },
    'cjk-ideographic': { function: CJK.toCJKIdeographic, dot: '、' },
    'devanagari': PlaceValue.toDevanagari,
    'ethiopic-numeric': { function: Special.toEthiopic, dot: '' },
    'georgian': Letter.toGeorgian,
    'gujarati': PlaceValue.toGujarati,
    'gurmukhi': PlaceValue.toGurmukhi,
    'hebrew': Letter.toHebrew,
    'hiragana': Alpha.toHiragana,
    'hiragana-iroha': Alpha.toHiraganaIroha,
    'japanese-formal': { function: CJK.toJapaneseFormal, dot: '、' },
    'japanese-informal': { function: CJK.toJapaneseInformal, dot: '、' },
    'kannada': PlaceValue.toKannada,
    'katakana': Alpha.toKatakana,
    'katakana-iroha': Alpha.toKatakanaIroha,
    'khmer': PlaceValue.toKhmer,
    'korean-hangul-formal': { function: CJK.toKoreanHangul, dot: '、' },
    'korean-hanja-formal': { function: CJK.toKoreanHanjaFormal, dot: '、' },
    'korean-hanja-informal': { function: CJK.toKoreanHanjaInformal, dot: '、' },
    'lao': PlaceValue.toLao,
    'lower-armenian': Letter.toLowerArmenian,
    'malayalam': PlaceValue.toMalayalam,
    'mongolian': PlaceValue.toMongolian,
    'myanmar': PlaceValue.toMyanmar,
    'oriya': PlaceValue.toOriya,
    'persian': PlaceValue.toPersian,
    'simp-chinese-formal': { function: CJK.toSimplifiedChineseFormal, dot: '、' },
    'simp-chinese-informal': { function: CJK.toSimplifiedChineseInformal, dot: '、' },
    'tamil': PlaceValue.toTamil,
    'telugu': PlaceValue.toTelugu,
    'thai': PlaceValue.toThai,
    'tibetan': PlaceValue.toTibetan,
    'trad-chinese-formal': { function: CJK.toTraditionalChineseFormal, dot: '、' },
    'trad-chinese-informal': { function: CJK.toTraditionalChineseInformal, dot: '、' },
    'upper-armenian': Letter.toUpperArmenian
};

// define aliases
formatters['lower-latin'] = formatters['lower-alpha'];
formatters['upper-latin'] = formatters['upper-alpha'];
formatters['-moz-arabic-indic'] = formatters['arabic-indic'];
formatters['-moz-bengali'] = formatters['bengali'];
formatters['-moz-cjk-earthly-branch'] = formatters['cjk-earthly-branch'];
formatters['-moz-cjk-heavenly-stem'] = formatters['cjk-heavenly-stem'];
formatters['-moz-devanagari'] = formatters['devanagari'];
formatters['-moz-gujarati'] = formatters['gujarati'];
formatters['-moz-gurmukhi'] = formatters['gurmukhi'];
formatters['-moz-kannada'] = formatters['kannada'];
formatters['-moz-khmer'] = formatters['khmer'];
formatters['-moz-lao'] = formatters['lao'];
formatters['-moz-malayalam'] = formatters['malayalam'];
formatters['-moz-myanmar'] = formatters['myanmar'];
formatters['-moz-oriya'] = formatters['oriya'];
formatters['-moz-persian'] = formatters['persian'];
formatters['-moz-tamil'] = formatters['tamil'];
formatters['-moz-telugu'] = formatters['telugu'];
formatters['-moz-thai'] = formatters['thai'];

// set the default formatter
var defaultFormatter = formatters.decimal;


///////////////////////////////////////////////////////////////////////////////
// Implementation

function formatInternal(value, formatter, appendDot)
{
    switch (typeof formatter)
    {
    case 'function':
        return appendDot ?
            addDot(formatter(value)) :
            formatter(value);

    case 'object':
        return appendDot ?
            addDot(formatter.function(value), formatter.dot) :
            formatter.function(value);

    case 'string':
        return formatter;
    }

    return undefined;
}

/**
 * Formats the number "value" according to the CSS list-style-type format "format".
 * https://developer.mozilla.org/en/docs/Web/CSS/list-style-type
 *
 * @param value
 *    The number to format
 *
 * @param format
 *    The format string to use, the ones listed here:
 *    https://developer.mozilla.org/en/docs/Web/CSS/list-style-type
 *
 * @param appendDot
 *    Optional flag indicating if an enumeration symbol (typically, a dot) is to be
 *    appended to the formatted number.
 *    Defaults to true.
 */
module.exports.format = function(value, format, appendDot /* optional */)
{
    if (appendDot === undefined)
        appendDot = true;

    var ret = formatInternal(
        value,
        format in formatters ? formatters[format] : defaultFormatter,
        appendDot
    );

    return (ret === null || ret === undefined) ?
        formatInternal(value, defaultFormatter, appendDot) :
        ret;
};


/**
 * Export a global object in the browser.
 */
if (typeof window !== 'undefined')
{    
    window.ListStyleTypeFormatter = {
        format: module.exports.format
    };
}
