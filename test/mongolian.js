require('should');
var Formatter = require('../lib/main');

var type = 'mongolian';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('᠑.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('᠑.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('᠕.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('᠑᠑.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('᠒᠕᠕.');
    });

    it('should format 0', function()
    {
        format(0).should.eql('᠐.');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('-᠕.');
    });
});
