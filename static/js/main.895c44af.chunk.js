(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(13),i=s.n(r),c=s(4),o=s.n(c),m=s(14),l=s(15),d=s(16),j=s(19),u=s(18),v=s(17),h=s.n(v),p=(s(43),s(0));var b=function(e){var t=e.title,s=e.summary,a=e.poster,n=e.year,r=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:a,alt:t,title:t}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:t}),Object(p.jsx)("h5",{className:"movie__year",children:n}),Object(p.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(p.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(p.jsx)("p",{className:"movie__summary",children:s.length>140?Object(p.jsxs)("span",{children:[s.slice(0,140),"..."]}):s})]})]})},_=(s(45),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({isLoading:!1,movies:a});case 5:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getMovies()},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(p.jsx)("div",{className:"movies",children:s.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.895c44af.chunk.js.map