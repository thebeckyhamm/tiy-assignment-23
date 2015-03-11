var Router = Backbone.Router.extend({

  routes: {
    "genre/:genre" : "loadGenre"
  },

  initialize: function() {
    this.tracks = new TrackCollection();
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });

    $("body").append(this.tracksView.el);
  },

  loadGenre: function(genre) {
    this.tracks.loadGenre(genre);
  }

});
