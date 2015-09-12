(function ($) {

  function FluidLabel (container, options) {
    this.container = $(container);
    this.element = this.container.find('input');
    this.label = this.container.find('label');
    this.element.on('keyup', this.onValueChanged.bind(this));
    if (this.element.val().trim().length > 0) {
      this.showLabel(false);
    } else {
      this.hideLabel(false);
    }
  }

  FluidLabel.prototype.onValueChanged = function () {
    var value = this.element.val();
    if (value.length > 0 && !this.active) {
      this.showLabel();
    } else if (value.length === 0 && this.active) {
      this.hideLabel();
    }
  };

  FluidLabel.prototype.showLabel = function (animation) {
    if (animation !== false) {
      this.label.fadeIn(200);
      this.element.animate({top: '5px'}, 200);
    } else {
      this.label.show();
      this.element.css({top: '5px'});
    }
    this.active = true;
    console.log('showing');
  };

  FluidLabel.prototype.hideLabel = function (animation) {
    animation = animation !== false;
    if (animation !== false) {
      this.label.fadeOut(200);
      this.element.animate({top: 0}, 200);
    } else {
      this.label.hide();
      this.element.css({top: 0});
    }

    this.active = false;
    console.log('hiding');
  };

  $.fn.fluidLabel = function (options) {
    return this.each(function () {
      $(this).attr('fluid-label', new FluidLabel(this, options));
    });
  };
})(jQuery);
