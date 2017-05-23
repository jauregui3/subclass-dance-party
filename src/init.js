$(document).ready(function() {
  window.dancers = [];
  window.bushDancers = [];
  window.trumpDancers = [];


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
    } else if(dancer.constructor === TrumpDancer){
      window.trumpDancers.push(dancer);
    }else{
      window.dancers.push(dancer);
    }
  });


  $('.addLineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      if (dancer.constructor === ObamaDancer) {
        dancer.lineup('10%');
      }
    }
    for(var i = 0; i<window.trumpDancers.length; i++){
      var trumpDancer = window.trumpDancers[i];
      if(trumpDancer.constructor === TrumpDancer){
        trumpDancer.lineup('90%');
      }
    }

    for (var i = 0; i < window.bushDancers.length; i++) {
      var bushDancer = window.bushDancers[i];
      // bushDancer.wander();
    }

  });

  $('.convergeBushToTrumpButton').on('click', function(event){
    for(var i = 0; i<window.bushDancers.length ; i++){
      var bushDancer = window.bushDancers[i];
      bushDancer.wander();
    }

    //var lastTrump = window.trumpDancers[window.trumpDancers.length - 1];
    //console.log(lastTrump.left);

    //for(var i = 0; i<window.bushDancers.length; i++){
      //console.log('hello!!');
    //}
      //$('.bush').animate({ top: lastTrump.top, left: lastTrump.left }, function(){

      //bushDancers[i].setPosition(lastTrump.top, lastTrump.left);
    // });
  });

  $('.convergeTrumpToObamaButton').on('click', function(event){
    for(var i = 0; i<window.trumpDancers.length ; i++){
      var trumpDancer = window.trumpDancers[i];
      trumpDancer.wander();
    }

    //var lastTrump = window.trumpDancers[window.trumpDancers.length - 1];
    //console.log(lastTrump.left);

    //for(var i = 0; i<window.bushDancers.length; i++){
      //console.log('hello!!');
    //}
      //$('.bush').animate({ top: lastTrump.top, left: lastTrump.left }, function(){

      //bushDancers[i].setPosition(lastTrump.top, lastTrump.left);
    // });
  });


  $('.findClosest').on('click', function(event) {
    for (var i = 0; i < window.bushDancers.length; i++) {
      var dancer = window.bushDancers[i];
      dancer.findClosest();
    }
  });

});

// add presidential music
// try to add individual sound files for each president