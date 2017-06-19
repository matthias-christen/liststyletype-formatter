require('should');
var Formatter = require('../lib/main');

var type = 'lower-roman';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('i.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('i.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('v.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('xi.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('cclv.');
    });

    it('should format 2999', function()
    {
        format(2999).should.eql('mmcmxcix.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('0.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-5.');
    });
});
