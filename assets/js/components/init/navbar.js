//
// Navbar
//

'use strict';

var Navbar = (function () {

	// Variables

	var $nav = $('.navbar-nav, .navbar-nav .nav');
	var $collapse = $('.navbar .collapse');
	var $dropdown = $('.navbar .dropdown');

	// Methods

	function accordion($this) {
		$this.closest($nav).find($collapse).not($this).collapse('hide');
	}

	function closeDropdown($this) {
		var $dropdownMenu = $this.find('.dropdown-menu');

		$dropdownMenu.addClass('close');

		setTimeout(function () {
			$dropdownMenu.removeClass('close');
		}, 200);
	}


	// Events

	$collapse.on({
		'show.bs.collapse': function () {
			accordion($(this));
		}
	})

	$dropdown.on({
		'hide.bs.dropdown': function () {
			closeDropdown($(this));
		}
	})

})();


//
// Navbar collapse
//


var NavbarCollapse = (function () {

	// Variables

	var $nav = $('.navbar-nav'),
		$collapse = $('.navbar .navbar-custom-collapse');


	// Methods

	function hideNavbarCollapse($this) {
		$this.addClass('collapsing-out');
	}

	function hiddenNavbarCollapse($this) {
		$this.removeClass('collapsing-out');
	}


	// Events

	if ($collapse.length) {
		$collapse.on({
			'hide.bs.collapse': function () {
				hideNavbarCollapse($collapse);
			}
		})

		$collapse.on({
			'hidden.bs.collapse': function () {
				hiddenNavbarCollapse($collapse);
			}
		})
	}

	var navbar_menu_visible = 0;

	$(".sidenav-toggler").click(function () {
		if (navbar_menu_visible == 1) {
			$('body').removeClass('nav-open');
			navbar_menu_visible = 0;
			$('.bodyClick').remove();

		} else {

			var div = '<div className="bodyClick"></div>';
			$(div).appendTo('body').click(function () {
				$('body').removeClass('nav-open');
				navbar_menu_visible = 0;
				$('.bodyClick').remove();

			});

			$('body').addClass('nav-open');
			navbar_menu_visible = 1;

		}

	});

})();
