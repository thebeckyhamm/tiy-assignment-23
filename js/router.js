var Router = Backbone.Router.extend({

  routes: {
    "" : "loadGenre",
    "genre/:genre" : "loadGenre",
    "genre" : "loadGenre",
    "search/:keyword" : "search",
    "search" : "search"
  },

  initialize: function() {
    this.tracks = new TrackCollection();
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });

    this.navView = new NavView();

    this.searchView = new SearchView({
      el: $(".search-view")
    });
    this.genreSidebarView = new GenreSidebarView({
      el: $(".genre-list")
    });



    $body = $("body");

    $body.append(this.tracksView.el);

  },

  loadGenre: function(genre) {
    $body.prepend(this.genreSidebarView.render().el);
    $body.prepend(this.navView.render().el);

    $(".search-view").empty();

    this.tracks.loadGenre(genre);

    this.listenTo(this.genreSidebarView, "genre:filter", function(genre) {
      this.tracks.loadGenre(genre);
      this.navigate("genre/" + genre);

    });
  },


  search: function(keyword) {
    // render search bar and nav
    $body.prepend(this.searchView.render().el);
    $body.prepend(this.navView.render().el);

    // empty genre-list element
    $(".genre-list").empty();
    // puts a default list in before a search takes place
    this.tracks.search(keyword);

    // listen to search submission and filter based on keyword(s)
    this.listenTo(this.searchView, "search:keyword", function(keyword) {
      this.tracks.search(keyword);
      this.navigate("search/" + keyword);

    });
  }

});
