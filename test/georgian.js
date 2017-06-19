require('should');
var Formatter = require('../lib/main');

var type = 'georgian';

function format(v)
{
    return Formatter.format(v, type);
}


describe(type, function()
{
    it('should format 1', function()
    {
        format(1).should.eql('ა.');
    });

    it('should format 1.1', function()
    {
        format(1.1).should.eql('ა.');
    });

    it('should format 5', function()
    {
        format(5).should.eql('ე.');
    });

    it('should format 11', function()
    {
        format(11).should.eql('ია.');
    });

    it('should format 255', function()
    {
        format(255).should.eql('სნე.');
    });

    it('should format 1769', function()
    {
        format(1769).should.eql('ჩღჲთ.');
    });

    it('should format 1887', function()
    {
        format(1887).should.eql('ჩყპზ.');
    });

    it('should format 2012', function()
    {
        format(2012).should.eql('ციბ.');
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
