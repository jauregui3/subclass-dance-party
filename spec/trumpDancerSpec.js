describe('trumpDancer', function() {

  var trumpDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    trumpDancer = new trumpDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(trumpDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(trumpDancer.$node, 'toggle');
    trumpDancer.step();
    expect(trumpDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(trumpDancer, 'step');
      expect(trumpDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(trumpDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(trumpDancer.step.callCount).to.be.equal(2);
    });
  });
});
