describe("FavoritesRepository", function() {

var repository

  beforeEach(function() {
    repository = new FavoritesRepository()
  });

  afterEach(function() {
    repository.clear()
  });

  it("no favorites repositry is empty", function() {
    expect(repository.isEmpty()).toBe(true);
  });

  it("added favorite can be retrieved", function() {
    repository.add("url", "favorite name")
    var favorites = repository.getAll()
    expect(favorites["url"]).toBe("favorite name");
  });

  it("added favorite can be removed", function() {
    repository.add("url", "favorite name")
    repository.remove("url")
    var favorites = repository.getAll()
    console.log(favorites["url"])
    expect(favorites["url"]).toBe(undefined);
  });

});