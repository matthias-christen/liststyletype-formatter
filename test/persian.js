require('should');
var Formatter = require('../lib/main');

var type = 'persian';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('۱.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('۱.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('۵.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('۱۱.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('۲۵۵.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('۰.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-۵.');
    });
});
