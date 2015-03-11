var Router = Backbone.Router.extend({

  routes: {
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
    this.genreSidebarView = new GenreSidebarView();


    $body = $("body");

    $body.append(this.tracksView.el);

  },

  loadGenre: function(genre) {
    $body.prepend(this.genreSidebarView.render().el);
    $body.prepend(this.navView.render().el);
    $(".search-view").empty();
    this.tracks.loadGenre(genre);
  },


  search: function(keyword) {
    $body.prepend(this.searchView.render().el);
    $body.prepend(this.navView.render().el);
    this.tracks.search(keyword);
  }

});
