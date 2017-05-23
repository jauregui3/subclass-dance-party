// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
//var x = this.step;
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //setTimeout(bind(Dancer.prototype.step, this));
  //setTimeout(x, this.timeBetweenSteps);
};
// Dancer.step();

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function(value) {
  var styleSettings = {
    left: value
  };
  this.$node.css(styleSettings);
};

