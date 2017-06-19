require('should');
var Formatter = require('../lib/main');

var type = 'bengali';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('১.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('১.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('৫.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('১১.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('২৫৫.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('০.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-৫.');
    });
});
