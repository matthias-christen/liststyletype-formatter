function toLetterSystem(value, letters)
{
    if (value <= 0)
        return null;

    var ret = '';

    for (var b in letters)
    {
        var num = letters[b];
        var q = Math.floor(value / num);
        value -= q * num;

        for (var i = 0; i < q; i++)
            ret += b;
    }

    return ret;
}

module.exports.toLetterSystem = toLetterSystem;


var LETTER_SYSTEM = {
    ROMAN_UPPER: {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    },

    ROMAN_LOWER: {
        m: 1000,
        cm: 900,
        d: 500,
        cd: 400,
        c: 100,
        xc: 90,
        l: 50,
        xl: 40,
        x: 10,
        ix: 9,
        v: 5,
        iv: 4,
        i: 1
    },

    HEBREW: {
        'א׳א׳': 1000000,
        'א׳ק': 100000,
        'א׳י': 10000,
        'ט׳': 9000,
        'ח׳': 8000,
        'ז׳': 7000,
        'ו׳': 6000,
        'ה׳': 5000,
        'ד׳': 4000,
        'ג׳': 3000,
        'ב׳': 2000,
        'א׳': 1000,
        'ת': 400,
        'ש': 300,
        'ר': 200,
        'ק': 100,
        'צ': 90,
        'פ': 80,
        'ע': 70,
        'ס': 60,
        'נ': 50,
        'מ‎': 40,
        'ל': 30,
        'כ': 20,
        'טז': 16,
        'טו': 15,
        'י': 10,
        'ט': 9,
        'ח‎': 8,
        'ז': 7,
        'ו': 6,
        'ה': 5,
        'ד': 4,
        'ג': 3,
        'ב': 2,
        'א': 1
    },

    GEORGIAN: {
        'ჵ': 10000,
        'ჰ': 9000,
        'ჯ': 8000,
        'ჴ': 7000,
        'ხ': 6000,
        'ჭ': 5000,
        'წ': 4000,
        'ძ': 3000,
        'ც': 2000,
        'ჩ': 1000,
        'შ': 900,
        'ყ': 800,
        'ღ': 700,
        'ქ': 600,
        'ფ': 500,
        'ჳ': 400,
        'ტ': 300,
        'ს': 200,
        'რ': 100,
        'ჟ': 90,
        'პ': 80,
        'ო': 70,
        'ჲ': 60,
        'ნ': 50,
        'მ': 40,
        'ლ': 30,
        'კ': 20,
        'ი': 10,
        'თ': 9,
        'ჱ': 8,
        'ზ': 7,
        'ვ': 6,
        'ე': 5,
        'დ': 4,
        'გ': 3,
        'ბ': 2,
        'ა': 1
    },

    ARMENIAN_UPPER: {
        'Ք': 9000,
        'Փ': 8000,
        'Ւ': 7000,
        'Ց': 6000,
        'Ր': 5000,
        'Տ': 4000,
        'Վ': 3000,
        'Ս': 2000,
        'Ռ': 1000,
        'Ջ': 900,
        'Պ': 800,
        'Չ': 700,
        'Ո': 600,
        'Շ': 500,
        'Ն': 400,
        'Յ': 300,
        'Մ': 200,
        'Ճ': 100,
        'Ղ': 90,
        'Ձ': 80,
        'Հ': 70,
        'Կ': 60,
        'Ծ': 50,
        'Խ': 40,
        'Լ': 30,
        'Ի': 20,
        'Ժ': 10,
        'Թ': 9,
        'Ը': 8,
        'Է': 7,
        'Զ': 6,
        'Ե': 5,
        'Դ': 4,
        'Գ': 3,
        'Բ': 2,
        'Ա': 1
    },

    ARMENIAN_LOWER: {
        'ք': 9000,
        'փ': 8000,
        'ւ': 7000,
        'ց': 6000,
        'ր': 5000,
        'տ': 4000,
        'վ': 3000,
        'ս': 2000,
        'ռ': 1000,
        'ջ': 900,
        'պ': 800,
        'չ': 700,
        'ո': 600,
        'շ': 500,
        'ն': 400,
        'յ': 300,
        'մ': 200,
        'ճ': 100,
        'ղ': 90,
        'ձ': 80,
        'հ': 70,
        'կ': 60,
        'ծ': 50,
        'խ': 40,
        'լ': 30,
        'ի': 20,
        'ժ': 10,
        'թ': 9,
        'ը': 8,
        'է': 7,
        'զ': 6,
        'ե': 5,
        'դ': 4,
        'գ': 3,
        'բ': 2,
        'ա': 1
    }
};

module.exports.LETTER_SYSTEM = LETTER_SYSTEM;


module.exports.toUpperRoman = function(value) { return toLetterSystem(value, LETTER_SYSTEM.ROMAN_UPPER); };
module.exports.toLowerRoman = function(value) { return toLetterSystem(value, LETTER_SYSTEM.ROMAN_LOWER); };
module.exports.toHebrew = function(value) { return toLetterSystem(value, LETTER_SYSTEM.HEBREW); };
module.exports.toGeorgian = function(value) { return toLetterSystem(value, LETTER_SYSTEM.GEORGIAN); };
module.exports.toUpperArmenian = function(value) { return toLetterSystem(value, LETTER_SYSTEM.ARMENIAN_UPPER); };
module.exports.toLowerArmenian = function(value) { return toLetterSystem(value, LETTER_SYSTEM.ARMENIAN_LOWER); };
