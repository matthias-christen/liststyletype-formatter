require('should');
var Formatter = require('../lib/main');

var type = 'cjk-ideographic';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('一、');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('一、');
    });

    it('should format 5', function()
    {
        format(5).should.eql('五、');
    });

    it('should format 10', function()
    {
        format(10).should.eql('十、');
    });

    it('should format 11', function()
    {
        format(11).should.eql('十一、');
    });

    it('should format 17', function()
    {
        format(17).should.eql('十七、');
    });

    it('should format 30', function()
    {
        format(30).should.eql('三十、');
    });

    it('should format 100', function()
    {
        format(100).should.eql('一百、');
    });

    it('should format 102', function()
    {
        format(102).should.eql('一百零二、');
    });

    it('should format 107', function()
    {
        format(107).should.eql('一百零七、');
    });

    it('should format 111', function()
    {
        format(111).should.eql('一百一十一、');
    });

    it('should format 117', function()
    {
        format(117).should.eql('一百一十七、');
    });

    it('should format 123', function()
    {
        format(123).should.eql('一百二十三、');
    });

    it('should format 127', function()
    {
        format(127).should.eql('一百二十七、');
    });

    it('should format 200', function()
    {
        format(200).should.eql('二百、');
    });

    it('should format 255', function()
    {
        format(255).should.eql('二百五十五、');
    });

    it('should format 314', function()
    {
        format(314).should.eql('三百一十四、');
    });

    it('should format 0', function()
    {
        format(0).should.eql('零、');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('負五、');
    });
});
