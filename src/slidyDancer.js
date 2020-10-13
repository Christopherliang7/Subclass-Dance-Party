var slidyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="blinkyDancer"></span>');
  this.job = 'electric-slide';
};

slidyDancer.prototype = Object.create(makeDancer.prototype);
slidyDance.prototype.constructor = slidyDancer;

slidyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};