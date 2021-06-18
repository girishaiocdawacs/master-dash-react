//
// Popover
//

'use strict';

var Popover = (function () {

	// Variables

	var $popover = $('[data-toggle="popover"]'),
		$popoverClass = '';


	// Methods

	function init($this) {
		if ($this.data('color')) {
			$popoverClass = 'popover-' + $this.data('color');
		}

		var options = {
			trigger: 'focus',
			template: '<div className="popover ' + $popoverClass + '" role="tooltip"><div className="arrow"></div><h3 className="popover-header"></h3><div className="popover-body"></div></div>'
		};

		$this.popover(options);
	}


	// Events

	if ($popover.length) {
		$popover.each(function () {
			init($(this));
		});
	}

})();
