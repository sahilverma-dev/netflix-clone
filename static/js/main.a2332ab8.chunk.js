(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(16),s=c.n(n),r=c(6),o=c(2),l=(c(22),c(9)),j=(c(23),c(0));function d(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){window.onscroll=function(){return function(){var e=window.scrollY;i(e>100)}()}}),[]),Object(j.jsx)("div",{className:"header ".concat(c?"sticky":""),children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.c,{to:"/",children:Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""})})}),Object(j.jsxs)("div",{className:"nav-list",children:[Object(j.jsx)(r.c,{to:"/",className:"nav-item",children:"Home"}),Object(j.jsx)(r.c,{to:"/movie",className:"nav-item",children:"Movies"}),Object(j.jsx)(r.c,{to:"/",className:"nav-item",children:"Series"}),Object(j.jsx)(r.c,{to:"/",className:"nav-item",children:"Dramas"}),Object(j.jsx)(r.c,{to:"/",className:"nav-item",children:"My List"})]}),Object(j.jsx)("div",{className:"nav-icons",children:Object(j.jsx)("div",{className:"login",children:Object(j.jsx)("button",{className:"netflix-btn login-b",children:"Log in"})})})]})})})}c(30);function h(e){var t=e.id,c=e.title,a=e.backdropUrl,i=e.posterUrl,n=e.rating,s=e.overview;return Object(j.jsxs)("div",{className:"hero",children:[Object(j.jsx)("img",{src:a,alt:c,className:"hero-bg"}),Object(j.jsx)("div",{className:"hero-info",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"hero-poster",children:Object(j.jsx)("img",{src:i,alt:c,className:"poster"})}),Object(j.jsxs)("div",{className:"hero-details",children:[Object(j.jsx)("h1",{className:"hero-movie-name",children:c}),Object(j.jsx)("span",{className:"rating",children:n}),Object(j.jsx)("p",{className:"overview",children:s}),Object(j.jsxs)("div",{className:"detail-btns",children:[Object(j.jsx)(r.b,{to:"movies/id=".concat(t),className:"hero-btn play-now",children:"Play Now"}),Object(j.jsx)(r.b,{className:"hero-btn watch-later",children:"Watch Later"})]})]})]})})]})}c(31);var b="04c35731a5ee918f014970082a0088b1",v="https://api.themoviedb.org/3/",m="https://image.tmdb.org/t/p/w1280",p={Trending:"".concat(v,"trending/all/week?api_key=").concat(b,"&language=en-US"),Popular:"".concat(v,"discover/movie?sort_by=popularity.desc&api_key=").concat(b,"&page=1"),NetflixOriginals:"".concat(v,"discover/tv?api_key=").concat(b,"&with_network=123"),TopRated:"".concat(v,"movie/top_rated?api_key=").concat(b,"&language=en-US"),Action:"".concat(v,"discover/movie?api_key=").concat(b,"&with_genres=28"),Comedy:"".concat(v,"discover/movie?api_key=").concat(b,"&with_genres=35"),Horror:"".concat(v,"discover/movie?api_key=").concat(b,"&with_genres=27"),Romance:"".concat(v,"discover/movie?api_key=").concat(b,"&with_genres=10749"),Documentaries:"".concat(v,"discover/movie?api_key=").concat(b,"&with_genres=99"),Genre:"".concat(v,"genre/movie/list?api_key=").concat(b,"&language=en-US"),Search:"".concat(v,"search/movie?&api_key=").concat(b,"&query=")};function u(e){e.api;var t=e.title,c=Object(a.useState)([]),i=Object(l.a)(c,2),n=i[0],s=i[1];return Object(a.useEffect)((function(){fetch(p.Popular).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{id:e.id,posterUrl:"".concat(m).concat(e.poster_path),title:e.title,rating:e.vote_average}}));s(t)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)("div",{className:"slider",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"slider-title",children:t}),Object(j.jsx)("div",{className:"poster-slider",children:n.map((function(e){return Object(j.jsxs)("div",{className:"poster",children:[Object(j.jsx)("div",{className:"rating",children:e.rating}),Object(j.jsx)("img",{src:e.posterUrl,alt:e.title}),Object(j.jsx)("div",{className:"name",children:e.title})]},e.id)}))})]})})}function O(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){fetch(p.Popular).then((function(e){return e.json()})).then((function(e){var t=Math.floor(Math.random()*e.results.length),c=e.results[t];i(c={id:c.id,backdropUrl:"".concat(m).concat(c.backdrop_path),posterUrl:"".concat(m).concat(c.poster_path),title:c.title,rating:c.vote_average,overview:c.overview})})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(h,{id:c.id,backdropUrl:c.backdropUrl,posterUrl:c.posterUrl,title:c.title,rating:c.rating,overview:c.overview}),Object(j.jsx)(u,{api:p.Popular,title:"Popular Movies"}),Object(j.jsx)(u,{api:p.Comedy,title:"Comedy Movies"}),Object(j.jsx)(u,{api:p.Romance,title:"Romentic Movies"}),Object(j.jsx)(u,{api:p.Horror,title:"Horror Movies"})]})}function x(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(o.c,{children:Object(j.jsx)(o.a,{path:"/",exact:!0,component:O})})]})}s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a2332ab8.chunk.js.map