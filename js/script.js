function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(document).ready(function() {
	let gridSize = 0

	$('#gridSubmit').on('click', function() {
		$('.gridElement').remove();
		gridSize = $("#gridNumber").val();

		for(let i = 0; i < gridSize * gridSize; i++){
		$("#grid").append("<div class='gridElement'></div>");
		}


		$("#black").on('click', function(){
			$('.gridElement').hover(function() {
			$(this).css({'background-color' : 'black',
						 'border' : "1px solid black"})
			});
		});

		$('#colored').on('click', function(){
			$('.gridElement').hover(function() {
				$(this).css({
					'background-color' : getRandomColor()
				});
			});
		});

		$("#grid").css({
			'grid-template-columns' : 'repeat(' + gridSize + ", 1fr)",
			'grid-template-rows' : 'repeat(' + gridSize + ", 1fr)"
			});
		});

		$("#gridReset").on('click', function(){
			$('.gridElement').removeClass('change');
			$('.gridElement').css({
				"background-color" : "lightblue"
			})
		});
});

