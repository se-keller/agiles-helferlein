var favorites
$(document).ready(function() {
    $("#button-favorite").click(favorites)
    
    $("#button-favorites-delete").click(deleteFavorites)
    favorites = new FavoritesRepository()
});

function favorites() {
	var id = window.location.href.split("#")[1]
	if(id !== undefined && id !== 'favorites' && id !== 'favorites-delete') {
		var favorite = $('#'+id).find('h2').first().text()
		favorites.add(id, favorite)
	} 

	fillFavorites()

	window.location = "#favorites"
}

function fillFavorites() {
	$('#list-favorites').empty()
	if(favorites.isEmpty()) {
		$('#list-favorites').append('<li>Du hast keine Favoriten</li>')
	} else {
		$.each(favorites.getAll(), function (id, name) {
    		$('#list-favorites').append('<li><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#'+id+'" data-transition="slide">'+name+'</a></li>')
		});	
	}
}

function deleteFavorites() {
	$('#list-favorites-delete').empty()
	if(favorites.isEmpty()) {
		$('#list-favorites-delete').append('<li>Du hast keine Favoriten</li>')
	} else {
		$.each(favorites.getAll(), function (id, name) {
    		$('#list-favorites-delete').append('<li><a onclick=deleteFavorite("'+id+'") class="ui-btn ui-btn-b ui-btn-icon-right ui-icon-delete" data-transition="none">'+name+'</a></li>')
		});	
	}
}

function deleteFavorite(id) {
	favorites.remove(id)
	deleteFavorites()
	fillFavorites()
}