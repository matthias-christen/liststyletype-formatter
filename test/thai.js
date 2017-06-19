require('should');
var Formatter = require('../lib/main');

var type = 'thai';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('๑.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('๑.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('๕.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('๑๑.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('๒๕๕.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('๐.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-๕.');
    });
});
