$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    // window.dancers.push(dancer);


  });

  // // jumpy dancer
  // $('.addJumpyDancerButton').on('click', function(event) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  //   var dancer = new dancerMakerFunction(
  //     $('body').height() * Math.random(),
  //     $('body').width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);
  // });

  // // slidyDancer
  // $('.addSlidyDancerButton').on('click', function(event) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  //   var dancer = new dancerMakerFunction(
  //     $('body').height() * Math.random(),
  //     $('body').width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);
  // });
});

// where are dancers being created
// what information is relevant in that creation
// how can we correctly refactor to pseudoclassical