var TrumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('trump');
  this.$node.removeClass('dancer');
  this.top = top;
  this.left = left;
};

TrumpDancer.prototype = Object.create(Dancer.prototype);

TrumpDancer.prototype.constructor = TrumpDancer;

TrumpDancer.prototype.wander = function(){
  var lastObama = window.dancers[dancers.length - 1];
  var newq = [lastObama.top, lastObama.left];
  $('.trump').animate({ top: newq[0], left: newq[1] }, function(){
    this.wander();
  });
};
