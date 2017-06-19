require('should');
var Formatter = require('../lib/main');

var type = 'hebrew';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('א.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('א.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('ה.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('יא.');
    });

    it('should format 15', function()
    {
        format(15).should.eql('טו.');
    });

    it('should format 16', function()
    {
        format(16).should.eql('טז.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('רנה.');
    });

    it('should format 499', function()
    {
        format(499).should.eql('תצט.');
    });

    it('should format 500', function()
    {
        format(500).should.eql('תק.');
    });

    it('should format 501', function()
    {
        format(501).should.eql('תקא.');
    });

    it('should format 999', function()
    {
        format(999).should.eql('תתקצט.');
    });

    it('should format 5763', function()
    {
        format(5763).should.eql('ה׳תשסג.');
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
