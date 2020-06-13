$("#stats").contents().find("p").attr("style","width:100%;height:100%;font-size:50px;");

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});



console.log('hello guy');