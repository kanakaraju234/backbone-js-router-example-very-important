
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
var ArtistView =Backbone.View.extend({
    render:function()
    {
        this.$el.html("ARTISTS VIEW");
        
        return this;
    }
});

var AlbumsView = Backbone.View.extend({
    render:function()
    {
        console.log("hai3");

        this.$el.html("AlBUMS VIEW");
        
        return this;
    }
});

var GenreView = Backbone.View.extend({
    render:function()
    {
        this.$el.html("Generes VIEW");
        
        return this;
    }
}); 

var AppRouter = Backbone.Router.extend({
    routes:
    {
        
        "albums":"viewAlbums",
        "albums/:albumId":"viewAlbumById",
        "artists":"viewArtists",
        "genres":"viewGenres",
        "*other":"defaultRoute"
    
    },
    
    viewArtists:function()
    {
        var view = new ArtistView({el:"#container"});
        view.render();
    },
    
    viewGenres:function()
    {
        var view = new GenreView({el:"#container"});
        view.render();
    },
    
    defaultRoute:function()
    {
       
    },
    
    viewAlbumById:function(albumId){
        
    },
    
    viewAlbums: function()
    {
        console.log("hai2");
        var view = new AlbumsView({el:"#container"});
        view.render();
    }
});

var router = new AppRouter();
Backbone.history.start();

var NavView =Backbone.View.extend({
   events: 
    {
        "click":"onClick"
    },
    
    onClick:function(e)
    {
        
        var $l = $(e.target);
        router.navigate($l.attr("data-url"), {trigger:true});
        console.log("hai1");
    }
});
   
var navView = new NavView({el:"#nav"});