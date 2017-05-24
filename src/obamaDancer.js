var ObamaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('obama');
  this.$node.removeClass('dancer');

};

ObamaDancer.prototype = Object.create(Dancer.prototype);

ObamaDancer.prototype.constructor = ObamaDancer;

