$(document).ready(function() {
	
	$("#portfolio_table").mixItUp();
	$(".popup_content").magnificPopup();
	
	$(".galery_menu li").click(function(){
		$(".galery_menu li").removeClass("active");
		$(this).addClass("active");
	});
	
	
	var blur = $(".logo, .container-s, .zag-wrapp, section")
	
	$(".button-menu").click(function(){
		if($(".top-container").is(":visible")){
			$(".top-container").fadeOut(500);
			blur.removeClass("soft-blur-overlay ");

		} else{
			$(".top-container").fadeIn(500);
			blur.addClass("soft-blur-overlay ");
		};
		
	});
	$(window).resize(function(){
		var menu 	= $('.top-container');
		var w = $(window).width();
		if(w > 464 && menu.is(':hidden')) {
			menu.removeAttr('style');
			
		}
	});
	$(".top-menu li a").click(function(){
		var blur = $(".logo, .container-s, .zag-wrapp, section")
		var w = $(window).width();
		var menu 	= $('.top-container');
		if(w < 464 && menu.is(':visible')) {
			menu.fadeOut(500);
			blur.removeClass("soft-blur-overlay ");
		} 
	});
	
	$(".price li").addClass('box-hidden');
	$('.zag-wrapp h1').addClass('animated fadeInLeft');
	$('.zag-wrapp h3').addClass('animated fadeInRight');
	$('.price li').waypoint(function(dir){
		if(dir === "down")
		$(this)
			.removeClass("animated fadeOutRight")
			.addClass('animated fadeInRight');
		else
			$(this)
				.removeClass("animated fadeInRight")
				.addClass('animated fadeOutRight');
		}, {
		offset: "85%"
		}).waypoint(function(dir){
		if(dir === "down")
			$(this)
				.removeClass("animated fadeInRight")
				.addClass('animated fadeOutRight');
		else
			$(this)
				.removeClass("animated fadeOutRight")
				.addClass('animated fadeInRight');
			}, {
		offset: -50
	});
	
	$(".top-menu li a").mPageScroll2id({ scrollSpeed: 900 });
//	SLIDER
	
	$(function() {
			
				var Page = (function() {

					var $nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init();

				/**
				 * Notes: 
				 * 
				 * example how to add items:
				 */

				/*
				
				var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
				
				// call the plugin's add method
				ss.add($items);

				*/
			
			});
//	ENDSLIDER
	$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
	
});