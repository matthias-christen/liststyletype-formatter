require('should');
var Formatter = require('../lib/main');

var type = 'lower-alpha';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('a.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('a.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('e.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('k.');
    });

    it('should format 26', function()
    {
        format(26).should.eql('z.');
    });

    it('should format 27', function()
    {
        format(27).should.eql('aa.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('iu.');
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
