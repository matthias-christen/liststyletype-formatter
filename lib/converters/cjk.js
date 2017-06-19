function toCJK(value, digits, multipliers, negativeSign, tenHasCoefficient, tenHasCoefficientIfHighNumber, hundredHasCoefficient, usesZero)
{
    if (value <= 0 && !negativeSign)
        return null;

    var val = Math.abs(Math.floor(value));

    if (val === 0)
        return digits.charAt(0);

    var ret = '';
    var maxExponent = multipliers.length;
    var exponent = 0;

    for (var exponent = 0; val > 0 && exponent <= maxExponent; exponent++)
    {
        var coeff = val % 10;

        if (coeff === 0 && usesZero && ret !== '')
            ret = digits.charAt(coeff) + ret;
        else if (coeff > 1 ||
            (coeff === 1 && exponent === 0) ||
            (coeff === 1 && exponent === 1 && tenHasCoefficient) ||
            (coeff === 1 && exponent === 1 && tenHasCoefficientIfHighNumber && value > 100) ||
            (coeff === 1 && exponent > 1 && hundredHasCoefficient))
        {
            ret = digits.charAt(coeff) + (exponent > 0 ? multipliers.charAt(exponent - 1) : '') + ret;
        }
        else if (coeff === 1 && exponent > 0)
            ret = multipliers.charAt(exponent - 1) + ret;

        val = Math.floor(val / 10);
    }

    return (value < 0 ? negativeSign : '') + ret;
};

module.exports.toCJK = toCJK;


var NUMERAL = {
    CJK_IDEOGRAPHIC: {
        DIGITS: '零一二三四五六七八九',
        MULTIPLIERS: '十百千萬',
        NEGATIVE: '負'
    },

    TRAD_CHINESE_INFORMAL: {
        DIGITS: '零一二三四五六七八九',
        MULTIPLIERS: '十百千萬',
        NEGATIVE: '負'
    },

    TRAD_CHINESE_FORMAL: {
        DIGITS: '零壹貳參肆伍陸柒捌玖',
        MULTIPLIERS: '拾佰仟萬',
        NEGATIVE: '負'
    },

    SIMP_CHINESE_INFORMAL: {
        DIGITS: '零一二三四五六七八九',
        MULTIPLIERS: '十百千萬',
        NEGATIVE: '负'
    },

    SIMP_CHINESE_FORMAL: {
        DIGITS: '零壹贰叁肆伍陆柒捌玖',
        MULTIPLIERS: '拾佰仟萬',
        NEGATIVE: '负'
    },

    JAPANESE_INFORMAL: {
        DIGITS: '〇一二三四五六七八九',
        MULTIPLIERS: '十百千万',
        NEGATIVE: 'マイナス'
    },

    JAPANESE_FORMAL: {
        DIGITS: '零壱弐参四伍六七八九',
        MULTIPLIERS: '拾百千万',
        NEGATIVE: 'マイナス'
    },

    KOREAN_HANGUL: {
        DIGITS: '영일이삼사오육칠팔구',
        MULTIPLIERS: '십백천만',
        NEGATIVE: '마이너스'
    },

    KOREAN_HANJA_INFORMAL: {
        DIGITS: '零一二三四五六七八九',
        MULTIPLIERS: '十百千萬',
        NEGATIVE: '마이너스'
    },

    KOREAN_HANJA_FORMAL: {
        //DIGITS: ' 壹貳參肆伍陸柒捌玖',
        DIGITS: '零壹貳參四五六七八九',
        //MULTIPLIERS: '拾佰仟'
        MULTIPLIERS: '拾百千',
        NEGATIVE: '마이너스'
    }
};

module.exports.NUMERAL = NUMERAL;


module.exports.toCJKIdeographic = function(value) { return toCJK(value, NUMERAL.CJK_IDEOGRAPHIC.DIGITS, NUMERAL.CJK_IDEOGRAPHIC.MULTIPLIERS, NUMERAL.CJK_IDEOGRAPHIC.NEGATIVE, false, true, true, true); };
module.exports.toTraditionalChineseInformal = function(value) { return toCJK(value, NUMERAL.TRAD_CHINESE_INFORMAL.DIGITS, NUMERAL.TRAD_CHINESE_INFORMAL.MULTIPLIERS, NUMERAL.TRAD_CHINESE_INFORMAL.NEGATIVE, false, true, true, true); };
module.exports.toTraditionalChineseFormal = function(value) { return toCJK(value, NUMERAL.TRAD_CHINESE_FORMAL.DIGITS, NUMERAL.TRAD_CHINESE_FORMAL.MULTIPLIERS, NUMERAL.TRAD_CHINESE_FORMAL.NEGATIVE, true, true, true, true); };
module.exports.toSimplifiedChineseInformal = function(value) { return toCJK(value, NUMERAL.SIMP_CHINESE_INFORMAL.DIGITS, NUMERAL.SIMP_CHINESE_INFORMAL.MULTIPLIERS, NUMERAL.SIMP_CHINESE_INFORMAL.NEGATIVE, false, true, true, true); };
module.exports.toSimplifiedChineseFormal = function(value) { return toCJK(value, NUMERAL.SIMP_CHINESE_FORMAL.DIGITS, NUMERAL.SIMP_CHINESE_FORMAL.MULTIPLIERS, NUMERAL.SIMP_CHINESE_FORMAL.NEGATIVE, true, true, true, true); };
module.exports.toJapaneseInformal = function(value) { return toCJK(value, NUMERAL.JAPANESE_INFORMAL.DIGITS, NUMERAL.JAPANESE_INFORMAL.MULTIPLIERS, NUMERAL.JAPANESE_INFORMAL.NEGATIVE, false, false, false, false); };
module.exports.toJapaneseFormal = function(value) { return toCJK(value, NUMERAL.JAPANESE_FORMAL.DIGITS, NUMERAL.JAPANESE_FORMAL.MULTIPLIERS, NUMERAL.JAPANESE_FORMAL.NEGATIVE, true, true, true, false); };
module.exports.toKoreanHangul = function(value) { return toCJK(value, NUMERAL.KOREAN_HANGUL.DIGITS, NUMERAL.KOREAN_HANGUL.MULTIPLIERS, NUMERAL.KOREAN_HANGUL.NEGATIVE, true, true, true, false); };
module.exports.toKoreanHanjaInformal = function(value) { return toCJK(value, NUMERAL.KOREAN_HANJA_INFORMAL.DIGITS, NUMERAL.KOREAN_HANJA_INFORMAL.MULTIPLIERS, NUMERAL.KOREAN_HANJA_INFORMAL.NEGATIVE, false, false, false, false); };
module.exports.toKoreanHanjaFormal = function(value) { return toCJK(value, NUMERAL.KOREAN_HANJA_FORMAL.DIGITS, NUMERAL.KOREAN_HANJA_FORMAL.MULTIPLIERS, NUMERAL.KOREAN_HANJA_FORMAL.NEGATIVE, true, true, true, false); };
