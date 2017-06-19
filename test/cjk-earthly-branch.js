require('should');
var Formatter = require('../lib/main');

var type = 'cjk-earthly-branch';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('子、');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('子、');
    });

    it('should format 5', function()
    {
        format(5).should.eql('辰、');
    });

    it('should format 11', function()
    {
        format(11).should.eql('戌、');
    });

    it('should format 13', function()
    {
        format(13).should.eql('子子、');
    });

    it('should format 255', function()
    {
        format(255).should.eql('子申寅、');
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
