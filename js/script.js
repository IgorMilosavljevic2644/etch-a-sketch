$(document).ready(function() {
	for(let i = 0; i < 16; i++){
		$("#grid").append("<div class='gridElement'></div>");
	}

	$('.gridElement').hover(function(){
		$(this).css({'background-color' : 'black',
					 'border' : '1px solid red'});
	});
})