describe('presidentDancer', function() {

  var presidentDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    presidentDancer = new PresidentDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(presidentDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(presidentDancer.$node, 'toggle');
    presidentDancer.step();
    expect(presidentDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(presidentDancer, 'step');
      expect(presidentDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(presidentDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(presidentDancer.step.callCount).to.be.equal(2);
    });
  });
});
