var BushDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bush');
  this.$node.removeClass('dancer');
  this.coordinates;
  // this.$node = $('<span class="president"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = BlinkyDancer.step;
  //this.$node = $('<span class="dancer"></span>');
};

BushDancer.prototype = Object.create(Dancer.prototype);

BushDancer.prototype.constructor = BushDancer;

// BushDancer.prototype.step = function(){
//   Dancer.prototype.step.call(this);
//   this.findClosest();
// }

// BushDancer.prototype.makeNewPosition = function(){

//   // Get viewport dimensions (remove the dimension of the div)
//   var h = $(window).height() - 50;
//   var w = $(window).width() - 50;

//   var nh = Math.floor(Math.random() * h);
//   var nw = Math.floor(Math.random() * w);

//   return [nh,nw];

// };

BushDancer.prototype.wander = function(){
  var lastTrump = window.trumpDancers[trumpDancers.length - 1];
  var newq = [lastTrump.top, lastTrump.left];
  $('.bush').animate({ top: newq[0], left: newq[1] }, function(){
    this.wander();
  });

};

/*
BushDancer.prototype.wander = function(){
   var newq = this.makeNewPosition();
   $('.bush').animate({ top: newq[0], left: newq[1] }, function(){
     this.wander();
      }
   });

};
*/

BushDancer.prototype.findClosest = function(){
  var min;
  var dancer;
  var distance;
  for (var i = 0; i < window.dancers.length; i++) {
    dancer = window.dancers[i];
    distance = Math.sqrt(Math.pow(dancer.left - this.left, 2) + Math.pow(dancer.top - this.top, 2));
    if(distance < min || min === undefined){
      this.coordinates = [dancer.left, dancer.top];
      min = distance;
    }
  }
};


/*
obamaDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  // this.$node.toggle();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};
*/