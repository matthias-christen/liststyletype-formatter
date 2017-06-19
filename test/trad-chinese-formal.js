require('should');
var Formatter = require('../lib/main');

var type = 'trad-chinese-formal';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('壹、');
    });

    it('should format 5', function()
    {
        format(5).should.eql('伍、');
    });

    it('should format 10', function()
    {
        format(10).should.eql('壹拾、');
    });

    it('should format 17', function()
    {
        format(17).should.eql('壹拾柒、');
    });

    it('should format 30', function()
    {
        format(30).should.eql('參拾、');
    });

    it('should format 107', function()
    {
        format(107).should.eql('壹佰零柒、');
    });

    it('should format 117', function()
    {
        format(117).should.eql('壹佰壹拾柒、');
    });

    it('should format 127', function()
    {
        format(127).should.eql('壹佰貳拾柒、');
    });

    it('should format 200', function()
    {
        format(200).should.eql('貳佰、');
    });

    it('should format 255', function()
    {
        format(255).should.eql('貳佰伍拾伍、');
    });

    it('should format 0', function()
    {
        format(0).should.eql('零、');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('負伍、');
    });
});
