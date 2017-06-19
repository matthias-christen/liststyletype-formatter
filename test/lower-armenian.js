require('should');
var Formatter = require('../lib/main');

var type = 'lower-armenian';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('ա.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('ա.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('ե.');
    });

    it('should format 50', function()
    {
        format(50).should.eql('ծ.');
    });

    it('should format 120', function()
    {
        format(120).should.eql('ճի.');
    });

    it('should format 2004', function()
    {
        format(2004).should.eql('սդ.');
    });

    it('should format 2222', function()
    {
        format(2222).should.eql('սմիբ.');
    });

    it('should format 1975', function()
    {
        format(1975).should.eql('ռջհե.');
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
