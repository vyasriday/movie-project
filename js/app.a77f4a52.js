(function(e){function t(t){for(var a,s,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)s=o[d],n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"035e":function(e,t,r){},"0bc6":function(e,t,r){"use strict";var a=r("c73d"),n=r.n(a);n.a},1516:function(e,t,r){"use strict";var a=r("300a"),n=r.n(a);n.a},"300a":function(e,t,r){},"39f8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("router-link",{attrs:{to:"/"}},[r("h3",[e._v(" What Next ??")])])],1)},o=[],c={name:"Header"},u=c,l=(r("0bc6"),r("2877")),d=Object(l["a"])(u,s,o,!1,null,"f7606bec",null),p=d.exports,f=(r("a347"),{name:"app",components:{Header:p}}),v=f,h=(r("034f"),Object(l["a"])(v,n,i,!1,null,null,null)),m=h.exports,_=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-wrapper"},[r("Search"),r("Discover")],1)},y=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",required:"",maxlength:"80",placeholder:"    Search For Movies and Tv Shows"},domProps:{value:e.searchQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.goToSearchResults("multi")},input:[function(t){t.target.composing||(e.searchQuery=t.target.value)},e.displayDropdown]}}),r("span",{staticClass:"search-icon",attrs:{title:"All of What Next"},on:{click:function(t){return e.goToSearchResults("multi")}}},[r("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})]),r("ul",[r("li",{on:{click:function(t){return e.goToSearchResults("tv")}}},[r("span",{staticClass:"queryText"},[e._v(e._s(e.searchQuery))]),e._v(" in TV Shows")]),r("li",{on:{click:function(t){return e.goToSearchResults("movie")}}},[r("span",{staticClass:"queryText"},[e._v(e._s(e.searchQuery))]),e._v(" in Movies")])])])},w=[],x={name:"Search",data:function(){return{searchQuery:""}},methods:{goToSearchResults:function(e){this.$router.push({path:"/search",query:{category:e,name:this.searchQuery}})},displayDropdown:function(){var e=document.querySelector("input"),t=document.querySelector("ul");e.value.length&&" "!==e.value?(t.style.display="block",e.style.borderRadius="10px 10px 0  0"):(t.style.display="none",e.style.borderRadius="300px")},hideDropdown:function(){var e=document.querySelector("input"),t=document.querySelector("ul");t.style.display="none",e.style.borderRadius="300px"}}},k=x,S=(r("1516"),Object(l["a"])(k,b,w,!1,null,"5f920357",null)),C=S.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"discover-wrapper"},[r("div",{staticStyle:{overflow:"hidden"}},[r("h3",[e._v("Popular Movies")]),r("div",{staticClass:"scroller"},[e.loadingMovie?r("Loader"):e._l(e.movies,function(e){return r("Item",{key:e.id,attrs:{data:e,category:"movie"}})})],2)]),r("div",{staticStyle:{overflow:"hidden"}},[r("h3",[e._v("Popular TV Shows")]),r("div",{staticClass:"scroller"},[e.loadingTv?r("Loader"):e._l(e.shows,function(e){return r("Item",{key:e.id,attrs:{data:e,category:"tv"}})})],2)])])},O=[],R=(r("96cf"),r("3b8d")),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"item-wrapper"}},[r("router-link",{attrs:{to:e.itemUrl}},[r("img",{attrs:{src:e.imageUrl}}),r("div",{staticClass:"description"},[r("p",{staticClass:"title"},[e._v(e._s("movie"===e.category?e.data.title:e.data.name))]),"movie"==e.category?r("p",[e._v(" Releae Date: "+e._s(e.data.release_date))]):r("p",[e._v("First Air Date: "+e._s(e.data.first_air_date))]),r("p",[e._v(" IMDB Rating: "+e._s(e.data.vote_average))])])])],1)},T=[],M="https://image.tmdb.org/t/p/w300",$={name:"Item",props:["data","category"],computed:{imageUrl:function(){var e="".concat(M,"/").concat(this.data.poster_path);return e},itemUrl:function(){return"/".concat(this.category,"/").concat(this.data.id)}}},E=$,q=(r("9812"),Object(l["a"])(E,D,T,!1,null,"6bbd640c",null)),U=q.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"loader"}),r("div",{staticClass:"loader"}),r("div",{staticClass:"loader"})])}],I={name:"Loader"},H=I,L=(r("eb0e"),Object(l["a"])(H,P,Q,!1,null,"7e137810",null)),N=L.exports,V="https://api.themoviedb.org/3/discover/",A="4e062be51f8b55a66259160103b5f870",F={name:"Discover",data:function(){return{shows:[],movies:[],loadingTv:!0,loadingMovie:!0}},components:{Item:U,Loader:N},methods:{fetchMovies:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"movie?api_key=").concat(A,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,this.movies=r.results,this.loadingMovie=!1,e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),new Error(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}(),fetchTVShows:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"tv?api_key=").concat(A,"&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,this.shows=r.results,this.loadingTv=!1,e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),new Error(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchMovies(),this.fetchTVShows()},computed:{}},B=F,J=(r("5a4d"),Object(l["a"])(B,j,O,!1,null,"77d75615",null)),W=J.exports,z={name:"Home",data:function(){return{}},components:{Search:C,Discover:W}},Y=z,G=Object(l["a"])(Y,g,y,!1,null,"15ce8cfb",null),K=G.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{staticClass:"wrapper"},[e._m(0)]):r("div",[r("div",{staticClass:"results-wrapper"},e._l(e.results,function(t){return r("router-link",{key:t.id,staticClass:"result-item",attrs:{to:"multi"==e.category?"/"+t.media_type+"/"+t.id:e.itemUrl(t.id)}},[r("div",{staticClass:"image-wrapper"},[r("img",{attrs:{src:e.imageUrl(t.poster_path),alt:t.title}})]),r("div",{staticClass:"item-info"},[r("h4",[e._v(e._s(t.original_title?t.original_title:t.original_name))]),t.release_date?r("p",[e._v(e._s(t.release_date.substring(0,4)))]):e._e(),t.first_air_date?r("p",[e._v(e._s(t.first_air_date.substring(0,4)))]):e._e(),e._v("\n          IMDB: "),r("span",{staticClass:"rating"},[e._v(e._s(t.vote_average))]),r("p",{staticClass:"overview"},[e._v(e._s(t.overview?t.overview:""))])])])}),1)])},Z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader"},[r("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),r("h3",[e._v(" Searching . . . ")])])}],ee=(r("7f7f"),"https://api.themoviedb.org/3/search/"),te="4e062be51f8b55a66259160103b5f870",re="https://image.tmdb.org/t/p/w300",ae={name:"SearchResults",data:function(){return{name:this.$route.query.name,category:this.$route.query.category,results:[],loading:!0}},methods:{fetchResults:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(ee).concat(this.category,"?api_key=").concat(te,"&language=en-US&page=1&query=").concat(this.name),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,this.results=a.results,this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),imageUrl:function(e){var t=null==e?"https://via.placeholder.com/300":"".concat(re,"/").concat(e);return t},itemUrl:function(e){return"/".concat(this.category,"/").concat(e)}},created:function(){this.fetchResults()}},ne=ae,ie=(r("68bc"),Object(l["a"])(ne,X,Z,!1,null,"61e0b890",null)),se=ie.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"movie-wrapper",style:e.styles},[r("div",{staticClass:"movie-info"},[r("h1",[e._v(e._s(e.movieDetails.title?e.movieDetails.title:e.movieDetails.name))]),r("p",[e._v(e._s(e.movieDetails.overview))])])])},ce=[],ue="https://image.tmdb.org/t/p/w1280",le={name:"MovieDetails",data:function(){return{id:"",category:"",movieDetails:{}}},created:function(){this.id=this.$route.params.id,this.category=this.$route.params.category,this.fetchMovieDetails()},methods:{fetchMovieDetails:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/".concat(this.category,"/").concat(this.id,"?api_key=4e062be51f8b55a66259160103b5f870"));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,this.movieDetails=r,e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](0),new Error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}()},computed:{styles:function(){return{background:"url(".concat(ue,"/").concat(this.movieDetails.backdrop_path,") no-repeat")}}}},de=le,pe=(r("62a6"),Object(l["a"])(de,oe,ce,!1,null,"25271fe0",null)),fe=pe.exports;a["a"].use(_["a"]);var ve=new _["a"]({mode:"history",routes:[{path:"/",name:"Home",component:K},{path:"/:category/:id",name:"Details Component",component:fe},{path:"/search",name:"Search Results",component:se}]});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(m)},router:ve}).$mount("#app")},"5a4d":function(e,t,r){"use strict";var a=r("035e"),n=r.n(a);n.a},"62a6":function(e,t,r){"use strict";var a=r("75fc"),n=r.n(a);n.a},"64a9":function(e,t,r){},"68bc":function(e,t,r){"use strict";var a=r("ada2"),n=r.n(a);n.a},"75fc":function(e,t,r){},9812:function(e,t,r){"use strict";var a=r("f381"),n=r.n(a);n.a},a347:function(e,t,r){},ada2:function(e,t,r){},c73d:function(e,t,r){},eb0e:function(e,t,r){"use strict";var a=r("39f8"),n=r.n(a);n.a},f381:function(e,t,r){}});
//# sourceMappingURL=app.a77f4a52.js.map