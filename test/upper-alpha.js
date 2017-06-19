require('should');
var Formatter = require('../lib/main');

var type = 'upper-alpha';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('A.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('A.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('E.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('K.');
    });

    it('should format 26', function()
    {
        format(26).should.eql('Z.');
    });

    it('should format 27', function()
    {
        format(27).should.eql('AA.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('IU.');
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
