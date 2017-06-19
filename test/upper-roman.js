require('should');
var Formatter = require('../lib/main');

var type = 'upper-roman';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('I.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('I.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('V.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('XI.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('CCLV.');
    });

    it('should format 2999', function()
    {
        format(2999).should.eql('MMCMXCIX.');
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
