describe('obamaDancer', function() {

  var obamaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    obamaDancer = new ObamaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(obamaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should allow passed in size parameters to set location', function() {
    expect(obamaDancer.top).to.be.equal(10);
    expect(obamaDancer.left).to.be.equal(20);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(obamaDancer, 'step');
      expect(obamaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(obamaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(obamaDancer.step.callCount).to.be.equal(2);
    });
  });
});
