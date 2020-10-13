var jumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer2"><img src="images/image1.gif"></span>');
  this.job = 'jump';
  this.top = top;
  this.left = left;
  this.setPosition(top, left);

};

jumpyDancer.prototype = Object.create(makeDancer.prototype);
jumpyDancer.prototype.constructor = jumpyDancer;

jumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};