
// (function () {
// 	'use strict';
// 	var csMenuObj = {};
// 	$(document).ready(function(){	
// 		csMenuObj.btnId = null;
// 		csMenuObj.menuOpen = false;
// 		$('body').on('click', '.search_btn', function(){
// 			$(this).closest('.search_bar').toggleClass('open');
// 		}).on('keyup', '.cs_search', function(){
// 			console.log($(this).val());
// 			if( $(this).val() != '' ) {
// 				$(this).next('.icon').addClass('visible');
// 			} else {
// 				$(this).next('.icon').removeClass('visible');
// 			}
// 		}).on('click', '.cs_search_close', function(){
// 			$('.cs_search').val('');
// 			$(this).removeClass('visible');
// 		}).on('click', '#csMobileMenuBtn', function(){
// 			if( false == csMenuObj.menuOpen ) {
// 				$(window).scrollTop(0);
// 				$('.cs_page_container').addClass('open');
// 				csMenuObj.menuOpen = true;
// 			} else {
// 				$('.cs_page_container').removeClass('open');
// 				csMenuObj.closeMobMenu();
// 				csMenuObj.menuOpen = false;
// 			}
// 		}).on('click', '.secondary_link_button', function(){
// 			$(window).scrollTop(0);
// 			csMenuObj.btnId = $(this).attr('data-id');	
// 			$('.list_items_content').addClass('open'); 
// 			$('.mobile_nav_block[data-id="'+ csMenuObj.btnId +'"]').addClass('animate_list');
// 		}).on('click', '.mobile_nav_block dt', function(){
// 			csMenuObj.closeMobMenu();
// 		});
// 	});

// 	$(window).on('resize', function(){
// 		if( true == csMenuObj.menuOpen ) {
// 			$('.cs_page_container').removeClass('open');
// 			csMenuObj.closeMobMenu();
// 			csMenuObj.menuOpen = false;
// 		}
		
// 	});

// 	csMenuObj.closeMobMenu = function(){
// 		$('.list_items_content').removeClass('open'); 
// 		$('.mobile_nav_block').removeClass('animate_list');
// 	};

// }());
