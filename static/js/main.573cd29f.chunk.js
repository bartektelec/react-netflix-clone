(this.webpackJsonplameflix=this.webpackJsonplameflix||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/search.d20b124f.svg"},25:function(n,e,t){n.exports=t(36)},36:function(n,e,t){"use strict";t.r(e);var a=t(18),r=t.n(a),c=t(0),o=t.n(c),i=t(7),u=t(1),l=t(2);function f(){var n=Object(u.a)(["\n  html {\n    font-size: 62.5%;\n  }\n  body {\n      margin: 0;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.6rem;\n    background-color: #333;\n  }\n  a {\n    text-decoration: none;\n  }\n\n  .active {\n      opacity: 1;\n  }\n  .container {\n    width: 100%;\n    max-width: 1200px\n  }\n"]);return f=function(){return n},n}var m=Object(l.a)(f()),p=t(8),s=t(12),b=t(22),d=t.n(b);function g(){var n=Object(u.a)(["\n  position: relative;\n  display: inline-flex;\n  align-content: center;\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background: none;\n  border: none;\n  background-image: url(",");\n  filter: invert(100%);\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n\n  :hover,\n  :active,\n  :focus {\n    opacity: 1;\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n  background: none;\n  border: none;\n  height: 24px;\n  border-bottom: 2px solid #fff;\n  margin: 0 1.6rem;\n  color: #fff;\n  opacity: 0.6;\n  font-size: 1.6rem;\n\n  :hover,\n  :active,\n  :focus {\n    opacity: 1;\n  }\n"]);return h=function(){return n},n}function E(){var n=Object(u.a)(["\n  margin: 8px;\n  display: block;\n  color: #fff;\n  opacity: 0.6;\n  transition: opacity 0.3s ease;\n  :hover,\n  :active,\n  :focus {\n    opacity: 1;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(u.a)(["\n  display: inline-block;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  background-color: #000;\n  color: #fff;\n  top: 100%;\n  left: 0%;\n  right: 0%;\n"]);return y=function(){return n},n}var j=l.b.ul(y()),O=Object(l.b)(i.b)(E()),x=l.b.input(h()),k=l.b.button(v(),d.a),w=l.b.form(g()),_=function(){var n=Object(c.useState)(""),e=Object(s.a)(n,2),t=e[0],a=e[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),u=i[0],l=i[1];Object(c.useEffect)((function(){}),[t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{onSubmit:function(n){n.preventDefault(),t?(fetch("https://api.themoviedb.org/3/search/multi?api_key=da4622c209e92f622296706520a36d5f&language=en-US&page=1&include_adult=false&query=".concat(t)).then((function(n){return n.json()})).then((function(n){return l(n.results)})).catch((function(n){return n})),a("")):l("")}},o.a.createElement(x,{type:"text",value:t,onChange:function(n){a(n.target.value)}}),o.a.createElement(k,{type:"submit"}),o.a.createElement(j,null,u&&u.map((function(n,e){if("movie"===n.media_type&&e<10||"tv"===n.media_type&&e<10){var t="/".concat(n.media_type,"/").concat(n.id),a=n.release_date?n.release_date.replace(/-[0-9]{1,2}-[0-9]{1,2}/," "):"",r="movie"===n.media_type?" movie":"TV show";return o.a.createElement(O,{key:t,to:t},n.title||n.name,"(",a,r,")")}return null})))))};function F(){var n=Object(u.a)(["\n  color: #ffd500;\n  font-weight: 600;\n"]);return F=function(){return n},n}function S(){var n=Object(u.a)(["\n  margin-left: 3.2rem;\n  color: #fff;\n  opacity: 0.6;\n\n  :active,\n  :focus,\n  :hover {\n    opacity: 1;\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(u.a)(["\n  padding: 0;\n"]);return z=function(){return n},n}function C(){var n=Object(u.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]);return C=function(){return n},n}function J(){var n=Object(u.a)(["\n  display: flex;\n  height: 8rem;\n  align-items: center;\n  padding: 0 3rem;\n  background-color: #000;\n"]);return J=function(){return n},n}var M=l.b.nav(J()),q=l.b.div(C()),D=l.b.ul(z()),T=Object(l.b)(i.c)(S()),U=Object(l.b)(i.b)(F()),V=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M,null,o.a.createElement(U,{to:"/"},"Lameflix"),o.a.createElement(q,null,o.a.createElement(D,null,o.a.createElement(T,{exact:!0,to:"/"},"Home"),o.a.createElement(T,{to:"/movies/"},"Movies"),o.a.createElement(T,{to:"/tv/"},"TV shows"),o.a.createElement(T,{to:"/watchlist/"},"My watchlist")),o.a.createElement(_,null))))},W=function(n){var e=n.page;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Showing ",e))};function A(){var n=Object(u.a)(["\n  margin: 8px;\n  display: inline-block;\n  padding: 18px 16px;\n  background: ",";\n  border-radius: 5px;\n  border: 1px solid #fff;\n  color: ",";\n  cursor: pointer;\n  transition: opacity 0.2s ease, background-color 0.1s ease;\n\n  :hover,\n  :focus,\n  :active {\n    background: #fff;\n    color: #000;\n    opacity: 0.9;\n  }\n\n  @media (max-width: 768px) {\n    display: ",";\n  }\n"]);return A=function(){return n},n}var B=l.b.a(A(),(function(n){return n.primary?"#fff":"none"}),(function(n){return n.primary?"#000":"#fff"}),(function(n){return n.smFlex||1})),G=function(n){var e=n.data,t="https://google.com/search?q=Watch ".concat(e.title||e.name," Online");return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{href:t,primary:"true"},"Watch now"),o.a.createElement(B,null,"Add to list"))};function H(){var n=Object(u.a)(["\n  padding: 4.8rem;\n  background-size: cover;\n  background-position: center center;\n  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),\n    url(",");\n  animation: "," 25s ease infinite alternate;\n"]);return H=function(){return n},n}function I(){var n=Object(u.a)(["\n  color: #fff;\n  font-size: 1.6rem;\n  width: 500px;\n"]);return I=function(){return n},n}function K(){var n=Object(u.a)(["\n  color: #fff;\n  font-size: 4.8rem;\n  font-weight: 600;\n"]);return K=function(){return n},n}function L(){var n=Object(u.a)(["\n0% {\n    background-position: top center;\n}\n\n100% {\n    background-position: bottom center;\n}\n"]);return L=function(){return n},n}var N=Object(l.c)(L()),P=l.b.h1(K()),Q=l.b.p(I()),R=l.b.div(H(),(function(n){var e=n.bg;return e&&e}),N),X=function(n){var e=n.data,t=(n.params,e.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path):"https://image.tmdb.org/t/p/original/".concat(e.poster_path));return o.a.createElement(R,{bg:t},o.a.createElement(P,null,e.title||e.name),o.a.createElement(Q,null,e.overview),o.a.createElement(G,{data:e}),o.a.createElement(Q,null,"Starring: Dan Castellaneta, Julie Kavner, Nancy Cartwright"),o.a.createElement(Q,null,"Genre:",e.genres&&e.genres.map((function(n){return o.a.createElement("span",{key:n.id}," ",n.name)}))))},Y=function(n){var e=n.params,t=e.id,a=e.type,r=t||456,i=a||"tv",u=Object(c.useState)({}),l=Object(s.a)(u,2),f=l[0],m=l[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/".concat(i,"/").concat(r,"?api_key=da4622c209e92f622296706520a36d5f&language=en-US")).then((function(n){return n.json()})).then((function(n){return m(n)})).catch((function(n){return n}))}),[i,r]),o.a.createElement(o.a.Fragment,null,o.a.createElement(X,{data:f}))},Z=function(n){var e=n.match.params;return o.a.createElement(o.a.Fragment,null,e.page?o.a.createElement(W,{page:e.page}):o.a.createElement(Y,{params:e}))},$=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(V,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:Z}),o.a.createElement(p.a,{path:["/:type/:id","/:page/"],component:Z})))};r.a.render(o.a.createElement((function(){return o.a.createElement(i.a,{basename:"/"},o.a.createElement(m,null),o.a.createElement($,null))}),null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.573cd29f.chunk.js.map