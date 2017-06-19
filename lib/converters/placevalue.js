function toPlaceValue(value, digits, hasNegativeNumbers, minusSign)
{
    if (hasNegativeNumbers === false && value < 0)
        return null;

    if (!minusSign)
        minusSign = '-';

    var sign = '';
    if (value < 0)
        sign = minusSign;

    if (-1 < value && value < 1)
        return sign + digits.charAt(0);

    var ret = '';
    var numDigits = digits.length;
    value = Math.abs(value);

    while (value)
    {
        ret = digits.charAt(value % numDigits) + ret;
        value = Math.floor(value / numDigits);
    }

    return sign + ret;
};

module.exports.toPlaceValue = toPlaceValue;


function toOneBasedPlaceValue(value, digits)
{
    if (value <= 0)
        return null;

    var ret = '';
    var numDigits = digits.length;

    while (value)
    {
        var v = value % numDigits;
        ret = digits.charAt(v === 0 ? numDigits - 1 : v - 1) + ret;
        value = Math.floor(value / numDigits) - (v === 0 ? 1 : 0);
    }

    return ret;
};


var DIGITS = {
    ARABIC_INDIC: '٠١٢٣٤٥٦٧٨٩',
    BENGALI: '০১২৩৪৫৬৭৮৯',
    CJK_DECIMAL: '〇一二三四五六七八九',
    CJK_EARTHLY_BRANCH: '子丑寅卯辰巳午未申酉戌亥',
    CJK_HEAVENLY_STEM: '甲乙丙丁戊己庚辛壬癸',
    DEVANAGARI: '०१२३४५६७८९',
    GUJARATI: '૦૧૨૩૪૫૬૭૮૯',
    GURMUKHI: '੦੧੨੩੪੫੬੭੮੯',
    KANNADA: '೦೧೨೩೪೫೬೭೮೯',
    KHMER: '០១២៣៤៥៦៧៨៩',
    LAO: '໐໑໒໓໔໕໖໗໘໙',
    MALAYALAM: '൦൧൨൩൪൫൬൭൮൯',
    MONGILIAN: '᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙',
    MYANMAR: '၀၁၂၃၄၅၆၇၈၉',
    ORIYA: '୦୧୨୩୪୫୬୭୮୯',
    PERSIAN: '۰۱۲۳۴۵۶۷۸۹',
    TAMIL: '௦௧௨௩௪௫௬௭௮௯',
    TELUGU: '౦౧౨౩౪౫౬౭౮౯',
    THAI: '๐๑๒๓๔๕๖๗๘๙',
    TIBETAN: '༠༡༢༣༤༥༦༧༨༩'
};

module.exports.DIGITS = DIGITS;


module.exports.toArabicIndic = function(v) { return toPlaceValue(v, DIGITS.ARABIC_INDIC); };
module.exports.toBengali = function(v) { return toPlaceValue(v, DIGITS.BENGALI); };
module.exports.toCJKDecimal = function(v) { return toPlaceValue(v, DIGITS.CJK_DECIMAL, false); };
module.exports.toCJKEarthlyBranch = function(v) { return toOneBasedPlaceValue(v, DIGITS.CJK_EARTHLY_BRANCH); };
module.exports.toCJKHeavenlyStem = function(v) { return toOneBasedPlaceValue(v, DIGITS.CJK_HEAVENLY_STEM); };
module.exports.toDevanagari = function(v) { return toPlaceValue(v, DIGITS.DEVANAGARI); };
module.exports.toGujarati = function(v) { return toPlaceValue(v, DIGITS.GUJARATI); };
module.exports.toGurmukhi = function(v) { return toPlaceValue(v, DIGITS.GURMUKHI); };
module.exports.toKannada = function(v) { return toPlaceValue(v, DIGITS.KANNADA); };
module.exports.toKhmer = function(v) { return toPlaceValue(v, DIGITS.KHMER); };
module.exports.toLao = function(v) { return toPlaceValue(v, DIGITS.LAO); };
module.exports.toMalayalam = function(v) { return toPlaceValue(v, DIGITS.MALAYALAM); };
module.exports.toMongolian = function(v) { return toPlaceValue(v, DIGITS.MONGILIAN); };
module.exports.toMyanmar = function(v) { return toPlaceValue(v, DIGITS.MYANMAR); };
module.exports.toOriya = function(v) { return toPlaceValue(v, DIGITS.ORIYA); };
module.exports.toPersian = function(v) { return toPlaceValue(v, DIGITS.PERSIAN); };
module.exports.toTamil = function(v) { return toPlaceValue(v, DIGITS.TAMIL); };
module.exports.toTelugu = function(v) { return toPlaceValue(v, DIGITS.TELUGU); };
module.exports.toThai = function(v) { return toPlaceValue(v, DIGITS.THAI); };
module.exports.toTibetan = function(v) { return toPlaceValue(v, DIGITS.TIBETAN); };
