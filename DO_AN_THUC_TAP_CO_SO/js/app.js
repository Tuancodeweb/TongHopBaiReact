(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);


$(window).bind("load resize slid.bs.carousel", function() {
	var imageHeight = $(".active .holder").height();
	$(".controllers").height( imageHeight );
	console.log("Slid");
  });
  function loadSkillgraph() {
	$(".skillData").each(function(index, element) {
		// element == this
		var mydata = $(element).data();
		var cnt = 0;
	
		//recursive call with a time delay so user can see graph draw.
		function go() {
			if (cnt++ < mydata['percent']) {
				setTimeout(go, 10);
			}
			$(element).css('width', cnt + '%');
	
		}
	
		go();
	
	});
	
	}
	
	loadSkillgraph();