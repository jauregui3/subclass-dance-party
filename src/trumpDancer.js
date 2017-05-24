var TrumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('trump');
  this.$node.removeClass('dancer');
  this.top = top;
  this.left = left;




  // this.$node = $('<span class="president"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = BlinkyDancer.step;
  //this.$node = $('<span class="dancer"></span>');
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



  // $('.trump').mouseenter(function(){
  //   audio.play();
  // });


/*
TrumpDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  // this.$node.toggle();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};
*/