require('should');
var Formatter = require('../lib/main');

var type = 'gujarati';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('૧.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('૧.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('૫.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('૧૧.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('૨૫૫.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('૦.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-૫.');
    });
});
