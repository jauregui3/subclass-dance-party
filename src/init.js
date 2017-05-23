$(document).ready(function() {
  window.dancers = [];
  window.bushDancers = [];


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //var dancerMakerFunctionName = $(BlinkyDancer).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    //var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position



    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    if (dancer.constructor === BushDancer) {
      window.bushDancers.push(dancer);
    } else {
      window.dancers.push(dancer);
    }
  });


  $('.addLineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      if (dancer.constructor === ObamaDancer) {
        dancer.lineup('10%');
      }
      if(dancer.constructor === TrumpDancer){
        dancer.lineup('90%');
      }
    }
    for (var i = 0; i < window.bushDancers.length; i++) {
      var bushDancer = window.bushDancers[i];
      bushDancer.wander();
    }

  });

  $('.findClosest').on('click', function(event) {
    for (var i = 0; i < window.bushDancers.length; i++) {
      var dancer = window.bushDancers[i];
      dancer.findClosest();
    }
  });


  $('.president').on('mouseover', function(event) {

  });

});

// next step is to make seperate subclasses for each president