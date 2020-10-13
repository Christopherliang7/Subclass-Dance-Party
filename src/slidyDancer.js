var slidyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer3"><img src="images/3.gif" class="dance3"></span>');
  this.job = 'electric-slide';
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

slidyDancer.prototype = Object.create(makeDancer.prototype);
slidyDancer.prototype.constructor = slidyDancer;

slidyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};