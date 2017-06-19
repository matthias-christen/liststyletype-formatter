require('should');
var Formatter = require('../lib/main');

var type = 'cjk-heavenly-stem';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('甲、');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('甲、');
    });

    it('should format 5', function()
    {
        format(5).should.eql('戊、');
    });

    it('should format 10', function()
    {
        format(10).should.eql('癸、');
    });

    it('should format 11', function()
    {
        format(11).should.eql('甲甲、');
    });

    it('should format 20', function()
    {
        format(20).should.eql('甲癸、');
    });

    it('should format 100', function()
    {
        format(100).should.eql('壬癸、');
    });

    it('should format 111', function()
    {
        format(111).should.eql('甲甲甲、');
    });

    it('should format 200', function()
    {
        format(200).should.eql('甲壬癸、');
    });

    it('should format 255', function()
    {
        format(255).should.eql('乙戊戊、');
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
