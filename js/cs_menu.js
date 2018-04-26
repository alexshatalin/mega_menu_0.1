(function () {
	'use strict';
	var csMenuObj = {};
	csMenuObj.desktopMenuState;

	$(document).ready(function(){	
		csMenuObj.btnId = null;
		csMenuObj.windowHeight = $(window).height();
		csMenuObj.windowWidth = $(window).width();
		csMenuObj.mobileHeaderHeight = Math.round($('.menu_header').outerHeight());
		csMenuObj.mobileMainMenuHeight = Math.round($('.mobile_nav_content').height() + csMenuObj.mobileHeaderHeight);
		csMenuObj.menuOpen = false;
		csMenuObj.searchModalOpened = false;
		csMenuObj.pageContainer = $('.cs_page_container');

		$('body').on('click', '[data-id="search"]', function(){
			if( false == csMenuObj.searchModalOpened ) {
				$('.search_modal').addClass('opened');
				$('.cs_search').focus();
				csMenuObj.pageContainer.addClass('blur').removeAttr('style');
				csMenuObj.resetMobileMenu();
				$('.mobile_menu_btn').addClass('reset_opacity');
				csMenuObj.searchModalOpened = true;
			} else {
				csMenuObj.closeSearchResults();
			}
		}).on('click', '#csMobileMenuBtn', function(){
			if( false == csMenuObj.menuOpen ) {
				$(window).scrollTop(0);
				csMenuObj.pageContainer.addClass('open').css({'height': csMenuObj.mobileMainMenuHeight});
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
		}).on('keydown', function(e){
			if( e.which == 27 && true == csMenuObj.searchModalOpened ) {
				$('[data-id="search"]').click();
			}
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

		// Need to rework search removal
		if( true == csMenuObj.searchModalOpened && $(window).width() != csMenuObj.windowWidth ) {
			csMenuObj.windowWidth = $(window).width();
			csMenuObj.closeSearchResults();
		}
		
	});

	//Temp search scroll
	// 	 var eTop = $(".search_modal__section").offset().top;
	// 	 var eHeight = $(".search_modal__content").height();
	// 	 var eBottom = eTop + eHeight - $(window).height();
	// 	 //console.log(eTop);
	// $(window).on('scroll', function(){
	// 	var windowScrollTop = $(window).scrollTop();
 //        if(windowScrollTop < eTop){
 //            console.log("not allowed");
 //            $(document).scrollTop(eTop);
 //        }
 //        else if(windowScrollTop > eBottom){
 //            $(document).scrollTop(eBottom);
 //        }
 //        else{
 //            console.log("allowed");
 //        }
	// });

	csMenuObj.closeSearchResults = function(){
		$('.search_modal').removeClass('opened');
		csMenuObj.pageContainer.removeClass('blur').removeAttr('style');
		$('.mobile_menu_btn').removeClass('reset_opacity');
		csMenuObj.searchModalOpened = false;
	}

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



