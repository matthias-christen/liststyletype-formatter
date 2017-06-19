/**
 * http://www.geez.org/Numerals/
 * http://metaappz.com/Geez_Numbers_Converter/Default.aspx
 */
module.exports.toEthiopic = function(value)
{
    if (value <= 0)
        return null;

    var ONES = '፩፪፫፬፭፮፯፰፱';
    var TENS = '፲፳፴፵፶፷፸፹፺';
    var HUNDRED = '፻';
    var TENTHOUSAND = '፼';

    var ret = '';
    var sep = '';

    value = Math.floor(value);

    for (var i = 0; value > 0; i++)
    {
        var one = value % 10;
        var ten = Math.floor(value / 10) % 10;

        if ((one === 1 && ten === 0 && i > 0) || (one === 0 && ten === 0 && i > 1))
            ret = sep + ret;
        else if (one > 0 || ten > 0)
        {
            ret =
                (ten > 0 ? TENS.charAt(ten - 1) : '') +
                (one > 0 ? ONES.charAt(one - 1) : '') +
                sep + ret;
        }

        value = Math.floor(value / 100);
        sep = i % 2 ? TENTHOUSAND : HUNDRED;
    }

    return ret;
};
