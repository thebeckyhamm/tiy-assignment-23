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

    $body = $("body");

    $body.append(this.navView.render().el)
    $body.append(this.tracksView.el);

  },

  loadGenre: function(genre) {
    this.tracks.loadGenre(genre);
  },


  search: function(keyword) {
    this.tracks.search(keyword);
  }

});
