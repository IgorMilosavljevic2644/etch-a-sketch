function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeOnHover(){
	$('input[name=color]').on('click', function() {
	let value = $('input[name=color]:checked').val();
	if(value == 'black'){
		$(".gridElement").hover(function() {
			$(this).css({'background-color' : 'black',
	   		 			 'border' : "1px solid black"});
		});
	} else if(value == 'colored'){
			$('.gridElement').hover(function(){
				$(this).css({
	 			'background-color' : getRandomColor()
	 		});
		});
	}
});
}

function gridReset(){
	$("#gridReset").on('click', function(){
	$('.gridElement').css({
		"background-color" : "white",
	})
});
}

$(document).ready(function() {
	let gridSize = 0

	$('#gridSubmit').on('click', function() {
		$('.gridElement').remove();
		gridSize = $("#gridNumber").val();

		for(let i = 0; i < gridSize * gridSize; i++){
		$("#grid").append("<div class='gridElement'></div>");
		}

		$("#grid").css({
			'grid-template-columns' : 'repeat(' + gridSize + ", 1fr)",
			'grid-template-rows' : 'repeat(' + gridSize + ", 1fr)"
		});

		gridReset();
		changeOnHover();
	});


	changeOnHover();


});

