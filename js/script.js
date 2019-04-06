$(document).ready(function() {

	$("#gnb").find('img')
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "-over.jpg";
            $(this).attr("src", src);	
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("-over.jpg", ".jpg");
            $(this).attr("src", src);
        });


	$( "#gnb" ).hover(function() {
			$( "#submenu" ).stop().slideDown("slow");
	},function(){
		$( "#submenu" ).stop().slideUp("slow");
	});
	
	$('#culture').parallax({imageSrc: 'images/main01-pal.jpg'});
	$('#mission').parallax({imageSrc: 'images/main02-pal.jpg'});
	$('#onlyone').parallax({imageSrc: 'images/main03-pal.jpg'});

	/*parallax

	var $window = $(window);
	var $firstBG = $('#culture');
	var $secondBG = $('#mission');
	var $thirdBG = $('#third');
	var $fourthBG = $('#fourth');
	var trainers = $("#second .bg");

	$('#culture, #mission, #onlyone, #fourth').bind('inview', function (event, visible) {
    if (visible == true) {
        $(this).addClass("inview");
    }else{
      $(this).removeClass("inview");
    }
	});

	function RepositionNav(){
		var windowHeight = $window.height();
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2);
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop});
	}

	function newPos(x, windowHeight, pos, adjuster, inertia){
	return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}

	function Move(){
		var pos = $window.scrollTop();
		...
	}

	if($firstBG.hasClass("inview")){
		$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
	}

	$fourthBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 200, 0.9) + ", " + newPos(50, windowHeight, pos, 0, 0.7) + ", " + newPos(50, windowHeight, pos, 0, 0.5) + ", " + newPos(50, windowHeight, pos, 700, 0.3)});

	$('#pixels').html(pos);

	$window.resize(function(){
		Move();
		RepositionNav();
	});

	$window.bind('scroll', function(){
		Move();
	});*/

});/*$(document).ready(function() {*/