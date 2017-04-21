function FavoritesRepository () {
	this.add = function(url, name) {
		var favorites = this.getAll()
		favorites[url] = name
		localStorage.favorites = JSON.stringify(favorites)
    }

    this.remove = function(url) {
    	var favorites = this.getAll()
    	delete favorites[url]
    	localStorage.favorites = JSON.stringify(favorites)
    }

    this.getAll = function() {
    	if(localStorage.favorites === undefined) {
			localStorage.favorites = JSON.stringify({})
		}
    	return JSON.parse(localStorage.favorites)
    }

    this.isEmpty = function() {
    	return $.isEmptyObject(this.getAll())
    }

    this.clear = function() {
    	localStorage.removeItem("favorites")
    }
}