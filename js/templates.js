this["JST"] = this["JST"] || {};
this["JST"]["genre_sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<li><a href=\"#\" data-name=\"bluegrass\">Bluegrass</a></li>\n<li><a href=\"#\" data-name=\"christmas\">Christmas</a></li>\n<li><a href=\"#\" data-name=\"classical\">Classical</a></li>\n<li><a href=\"#\" data-name=\"electronica\">Electronica</a></li>\n<li><a href=\"#\" data-name=\"funk\">Funk</a></li>\n<li><a href=\"#\" data-name=\"indie\">Indie</a></li>\n<li><a href=\"#\" data-name=\"jazz\">Jazz</a></li>\n<li><a href=\"#\" data-name=\"r&b\">R&amp;B</a></li>\n<li><a href=\"#\" data-name=\"reggae\">Reggae</a></li>\n<li><a href=\"#\" data-name=\"rock\">Rock</a></li>\n<li><a href=\"#\" data-name=\"showtunes\">Showtunes</a></li>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <ul class=\"clearfix\">\n        <li class=\"active\"><a href=\"#\" data-name=\"genre\">Genre</a></li>\n        <li><a href=\"#\" data-name=\"search\">Search</a></li>\n    </ul>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["search_bar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <input type=\"text\" class=\"search-input\" placeholder=\"Enter a keyword\">\n    <button type=\"submit\" class=\"search-button\">Search</button>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <i class=\"fa fa-play-circle\"></i>\n";
},"3":function(depth0,helpers,partials,data) {
    return "  <i class=\"fa fa-ban\"></i>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td class=\"artwork\">\n  <img src=\""
    + alias3(((helper = (helper = helpers.artwork_url || (depth0 != null ? depth0.artwork_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"artwork_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n</td>\n<td class=\"play\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.streamable : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td class=\"title\">\n  <span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n</td>\n<td class=\"genre\">\n  <span>"
    + alias3(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</td>\n</td>\n<td class=\"duration\">\n  <span>"
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</span>\n</td>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\n  <tr>\n    <th>Artwork</th>\n    <th></th>\n    <th>Title</th>\n    <th>Genre</th>\n    <th>Duration</th>\n  </tr>\n</thead>\n<tbody>\n\n</tbody>\n";
},"useData":true});