require('should');
var Formatter = require('../lib/main');

var type = 'oriya';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('୧.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('୧.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('୫.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('୧୧.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('୨୫୫.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('୦.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-୫.');
    });
});
