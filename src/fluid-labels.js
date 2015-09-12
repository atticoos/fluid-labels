(function ($) {

  function FluidLabel (element, options) {
    this.element = $(element);
    this.label = this.element.find('label');
    this.element.on('change', this.onValueChanged.bind(this));
    this.element.on('mousedown', this.onValueChanged.bind(this));
    this.onValueChanged();
  }

  FluidLabel.prototype.onValueChanged = function () {
    var value = $(this).val().trim();
    if (value.length > 0 && !this.active) {
      this.showLabel();
    } else if (value.length === 0 && this.active) {
      this.hideLabel();
    }
  };

  FluidLabel.prototype.showLabel = function () {
    this.label.show();
  };

  FluidLabel.prototype.hideLabel = function () {
    this.label.hide();
  };

  $.fn.fluidLabel = function (options) {
    return this.each(function () {
      $(this).attr('fluid-label', new FluidLabel(this, options));
    });
  };
})(jQuery);
