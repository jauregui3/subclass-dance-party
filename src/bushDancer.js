var BushDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bush');
  this.$node.removeClass('dancer');
  this.coordinates;

};

BushDancer.prototype = Object.create(Dancer.prototype);

BushDancer.prototype.constructor = BushDancer;

BushDancer.prototype.wander = function(){
  var lastTrump = window.trumpDancers[trumpDancers.length - 1];
  var newq = [lastTrump.top, lastTrump.left];
  $('.bush').animate({ top: newq[0], left: newq[1] }, function(){
    this.wander();
  });

};

