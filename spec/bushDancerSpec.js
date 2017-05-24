describe('bushDancer', function() {

  var bushDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bushDancer = new BushDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bushDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bushDancer, 'step');
      expect(bushDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(bushDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bushDancer.step.callCount).to.be.equal(2);
    });
  });
});
