var tmp,clicks = 1,selected = null;

$(document).ready(function() {
	$('.modal').modal({dismissible: false});
	tmp = ['like', 'love', 'sett', 'music','what', 'risa', 'love', 'like'];
	$('#play').on('click',function() {
		clean();
		iterate(tmp);
	});
	$('#closeModal').on('click',function() {
		$(selected).removeClass('red z-depth-5');
		$(previewSelected).removeClass('red z-depth-5');
		$('#preview').empty();
		selected = null;
		console.log('se dio clic');
	});
});
function clean() {
	$('#photos').empty();
	$('#descriptions').empty();
}
function iterate(array) {
	changeitems(shuffle(array));
}
function changeitems(array) {
	$.each(array,function(i, item) {
		$('#photos').append(
			'<div style="cursor:pointer;" onclick="display(this)" class="col s12 m3 photos">'+
				'<div class="card-panel center indigo darken-3">'+
					'<i class="medium material-icons white-text">person_pin</i>'+i+
				'</div>'+
			'</div>'
			);
		$('#descriptions').append(
			'<div style="cursor:pointer;" onclick="display(this)" class="col s12 m3 descriptions">'+
				'<div class="card-panel center white">'+
					'<i class="medium material-icons indigo-text darken-3">info</i>'+
				'</div>'+
			'</div>'
			);
	})
}
function display(argument) {
	previewSelected = selected;
	selected = argument;
	$(selected).addClass('red z-depth-5');
	if(previewSelected != null){
		if (selected.className == previewSelected.className) {
			$(previewSelected).removeClass("red z-depth-5");
		}else{
			$('#preview').append('<h4 class="center blue-text">Descubriendo tus respuestas</h4>'+
								'<div class="row">'+
								'<div class="col s12 m6"><img src="img/love.png" class="responsive-img circle"></div>'+
								'<div class="col s12 m6">'+
									'<div class="card blue-grey darken-1">'+
        								'<div class="card-content white-text">'+
        									'<span class="card-title">Name friend</span>'+
        									'<p>this content information profle your friend facebook'+
        									'I am effectively.</p>'+
        								'</div>'+
        							'<div class="card-action">'+
        								'<a href="#">link of biography</a>'+
        							'</div>'+
        						'</div></div></div>');
			$('#bt').trigger("click");
		} 
	}
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {
    // Seleccionar un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // E intercambiarlo con el elemento actual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array; 
}