require('should');
var Formatter = require('../lib/main');

var type = 'decimal-leading-zero';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('01.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('01.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('05.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('11.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('255.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('00.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-05.');
    });

    it('should format -66', function()
    {
        format(-66).should.eql('-66.');
    });
});
