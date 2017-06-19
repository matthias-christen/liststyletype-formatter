require('should');
var Formatter = require('../lib/main');

var type = 'lao';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('໑.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('໑.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('໕.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('໑໑.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('໒໕໕.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('໐.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-໕.');
    });
});
