var Router = Backbone.Router.extend({

  routes: {
    "" : "loadGenre",
    "genre/:genre" : "loadGenre",
    "genre" : "loadGenre",
    "search/:keyword" : "search",
    "search" : "search"
  },

  initialize: function() {
    // add new track collection
    this.tracks = new TrackCollection();

    // add track view
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });

    // add nav
    this.navView = new NavView();

    // add search box
    this.searchView = new SearchView({
      el: $(".search-view")
    });

    // add genre sidebar
    this.genreSidebarView = new GenreSidebarView({
      el: $(".genre-list")
    });

    this.listenTo(this.navView, "nav:click", function(link) {

      this.navigate(link);

      if (link === "genre") {
        this.loadGenre();
      }
      else { 
        this.search();
      }
      this.trigger("page:navigated");
    });


    $body = $("body");

    // add tracksview parent element
    $body.append(this.tracksView.el);

  },

  loadGenre: function(genre) {
    // render sidebar and nav 
    $body.prepend(this.genreSidebarView.render().el);
    $body.prepend(this.navView.render().el);

    // remove anything in the search box so it doesn't show
    $(".search-view").empty();

    // add a default song list
    this.tracks.loadGenre(genre);

    // listen to when a link is clicked ih the sidebar and filter it
    this.listenTo(this.genreSidebarView, "genre:filter", function(genre) {
      this.tracks.loadGenre(genre);

      // navigate to that url
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
