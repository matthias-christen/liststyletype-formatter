require('should');
var Formatter = require('../lib/main');

var type = 'korean-hangul-formal';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('일、');
    });

    it('should format 5', function()
    {
        format(5).should.eql('오、');
    });

    it('should format 10', function()
    {
        format(10).should.eql('일십、');
    });

    it('should format 17', function()
    {
        format(17).should.eql('일십칠、');
    });

    it('should format 30', function()
    {
        format(30).should.eql('삼십、');
    });

    it('should format 107', function()
    {
        format(107).should.eql('일백칠、');
    });

    it('should format 117', function()
    {
        format(117).should.eql('일백일십칠、');
    });

    it('should format 127', function()
    {
        format(127).should.eql('일백이십칠、');
    });

    it('should format 200', function()
    {
        format(200).should.eql('이백、');
    });

    it('should format 255', function()
    {
        format(255).should.eql('이백오십오、');
    });

    it('should format 0', function()
    {
        format(0).should.eql('영、');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('마이너스오、');
    });
});
