(function () {
	'use strict';
	var csMenuObj = {};
	csMenuObj.desktopMenuState;
	csMenuObj.searchModalState;

	$(document).ready(function(){	
		csMenuObj.btnId = null;
		csMenuObj.windowHeight = $(window).height();
		csMenuObj.windowWidth = $(window).width();
		csMenuObj.mobileHeaderHeight = Math.round($('.menu_header').outerHeight());
		csMenuObj.mobileMainMenuHeight = Math.round($('.mobile_nav_content').height() + csMenuObj.mobileHeaderHeight);
		csMenuObj.menuOpen = false;
		csMenuObj.pageContainer = $('.cs_page_container');

		$('body').on('click', '[data-id="search"]', function(){
			$('.search_modal').toggleClass('opened');
			csMenuObj.pageContainer.toggleClass('blur').removeAttr('style');
			csMenuObj.resetMobileMenu();
			$('.mobile_menu_btn').toggleClass('reset_opacity');

		}).on('click', '#csMobileMenuBtn', function(){
			if( false == csMenuObj.menuOpen ) {
				$(window).scrollTop(0);
				csMenuObj.pageContainer.addClass('open');//.css({'height': csMenuObj.mobileMainMenuHeight});
				csMenuObj.menuOpen = true;
			} else {
				csMenuObj.resetMobileMenu();
			}
		}).on('click', '.secondary_link_button', function(e){
			csMenuObj.btnId = $(this).attr('data-id');	
			if( csMenuObj.btnId != undefined ){
				$(window).scrollTop(0);
				csMenuObj.mobileBlock = $('.mobile_nav_block[data-id="'+ csMenuObj.btnId +'"]');
				csMenuObj.mobileBlockHeight = Math.round(csMenuObj.mobileBlock.height() + $('.mobile_nav_content .search_container').outerHeight() + csMenuObj.mobileHeaderHeight);
				$('.list_items_content').addClass('open'); 
				csMenuObj.mobileBlock.addClass('animate_list');
				csMenuObj.pageContainer.css({'height': csMenuObj.mobileBlockHeight});
			}

		}).on('click', '.mobile_nav_block dt', function(){
			csMenuObj.closeMobMenu();
		});

		// Desktop code starts here
		$('body').on('mouseenter', '.mega_menu__links a', function(){
			
			csMenuObj.currentElem = $(this).attr('data-id');

			if( csMenuObj.currentElem != undefined && csMenuObj.desktopMenuState != 1 ) {
				$('.mega_menu').addClass('__opened');
				csMenuObj.desktopMenuState = 1;	
			} 

			if( csMenuObj.currentElem != undefined ) {
				$('.mega_menu__panel').removeClass('active');
				$('.mega_menu__panel[data-id="'+ csMenuObj.currentElem +'"]').addClass('active');
			} else {
				csMenuObj.closeDesktopMenu();
			} 
		}).on('mouseleave', '.mega_menu__content', function(){
			csMenuObj.closeDesktopMenu();
		});

	});

	$(window).on('resize', function(){
		if( true == csMenuObj.menuOpen && $(window).width() != csMenuObj.windowWidth ) {
			csMenuObj.windowWidth = $(window).width();
			csMenuObj.resetMobileMenu();
		}

		if( csMenuObj.searchModalState != 1 ) {
			$('[data-id="search"]').click();
			csMenuObj.searchModalState = 1;
		}
		
	});

	csMenuObj.closeDesktopMenu = function(){
		$('.mega_menu').removeClass('__opened');
		$('.mega_menu__panel').removeClass('active');
		csMenuObj.desktopMenuState = 0;	
	};

	csMenuObj.closeMobMenu = function(){
		$('.list_items_content').removeClass('open'); 
		$('.mobile_nav_block').removeClass('animate_list');
		csMenuObj.pageContainer.css({'height': csMenuObj.mobileMainMenuHeight});
	};

	csMenuObj.clearMenuStyles = function(){
		csMenuObj.pageContainer.removeClass('open').removeAttr('style');
	};

	csMenuObj.resetMobileMenu = function(){
		csMenuObj.closeMobMenu();
		csMenuObj.clearMenuStyles();
		csMenuObj.menuOpen = false;
	};
}());



