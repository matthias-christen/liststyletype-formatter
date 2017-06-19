require('should');
var Formatter = require('../lib/main');

var type = 'tibetan';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('༡.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('༡.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('༥.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('༡༡.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('༢༥༥.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('༠.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-༥.');
    });
});
