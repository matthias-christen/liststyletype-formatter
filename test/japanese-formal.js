require('should');
var Formatter = require('../lib/main');

var type = 'japanese-formal';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('壱、');
    });

    it('should format 5', function()
    {
        format(5).should.eql('伍、');
    });

    it('should format 10', function()
    {
        format(10).should.eql('壱拾、');
    });

    it('should format 17', function()
    {
        format(17).should.eql('壱拾七、');
    });

    it('should format 30', function()
    {
        format(30).should.eql('参拾、');
    });

    it('should format 107', function()
    {
        format(107).should.eql('壱百七、');
    });

    it('should format 117', function()
    {
        format(117).should.eql('壱百壱拾七、');
    });

    it('should format 127', function()
    {
        format(127).should.eql('壱百弐拾七、');
    });

    it('should format 200', function()
    {
        format(200).should.eql('弐百、');
    });

    it('should format 255', function()
    {
        format(255).should.eql('弐百伍拾伍、');
    });

    it('should format 0', function()
    {
        format(0).should.eql('零、');
    });

    it('should format -5', function()
    {
        format(-5).should.eql('マイナス伍、');
    });
});
