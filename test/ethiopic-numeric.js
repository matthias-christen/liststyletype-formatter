require('should');
var Formatter = require('../lib/main');

var type = 'ethiopic-numeric';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('፩');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('፩');
    });

    it('should format 5', function()
    {
        format(5).should.eql('፭');
    });

    it('should format 11', function()
    {
        format(11).should.eql('፲፩');
    });

    it('should format 100', function()
    {
        format(100).should.eql('፻');
    });

    it('should format 136', function()
    {
        format(136).should.eql('፻፴፮');
    });

    it('should format 200', function()
    {
        format(200).should.eql('፪፻');
    });

    it('should format 255', function()
    {
        format(255).should.eql('፪፻፶፭');
    });

    it('should format 1357', function()
    {
        format(1357).should.eql('፲፫፻፶፯');
    });

    it('should format 10000', function()
    {
        format(10000).should.eql('፼');
    });

    it('should format 10001', function()
    {
        format(10001).should.eql('፼፩');
    });

    it('should format 10101', function()
    {
        format(10101).should.eql('፼፻፩');
    });

    it('should format 11101', function()
    {
        format(11101).should.eql('፼፲፩፻፩');
    });

    it('should format 10023', function()
    {
        format(10023).should.eql('፼፳፫');
    });

    it('should format 3,14,00,92,65', function()
    {
        format(314009265).should.eql('፫፼፲፬፻፼፺፪፻፷፭');
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
