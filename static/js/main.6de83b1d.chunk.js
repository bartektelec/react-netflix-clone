(this.webpackJsonplameflix=this.webpackJsonplameflix||[]).push([[0],{23:function(n,e,t){n.exports=t.p+"static/media/search.d20b124f.svg"},27:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var a=t(19),r=t.n(a),o=t(0),i=t.n(o),c=Object(o.createContext)(),u=Object(o.createContext)(),l=c,s=t(7),f=t(1),p=t(2);function m(){var n=Object(f.a)(["\n\n* {\n  box-sizing: border-box;\n}\n  html {\n    font-size: 62.5%;\n  }\n  body {\n      margin: 0;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.6rem;\n    background-color: #000;\n  }\n  a {\n    text-decoration: none;\n  }\n\n  .active {\n      opacity: 1;\n  }\n  .container {\n    width: 100%;\n    max-width: 1200px\n  }\n\n"]);return m=function(){return n},n}var d=Object(p.a)(m()),b=t(9),g=t(6),h=t(23),v=t.n(h);function x(){var n=Object(f.a)(["\n  position: relative;\n  display: inline-flex;\n  align-content: center;\n"]);return x=function(){return n},n}function y(){var n=Object(f.a)(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background: none;\n  border: none;\n  background-image: url(",");\n  filter: invert(100%);\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n\n  :hover,\n  :active,\n  :focus {\n    opacity: 1;\n  }\n"]);return y=function(){return n},n}function j(){var n=Object(f.a)(["\n  background: none;\n  border: none;\n  height: 24px;\n  border-bottom: 2px solid #fff;\n  margin: 0 1.6rem;\n  color: #fff;\n  opacity: 0.6;\n  font-size: 1.6rem;\n\n  @media (max-width: 800px) {\n    font-size: 2.4rem;\n    width: 100%;\n  }\n\n  :hover,\n  :active,\n  :focus {\n    opacity: 1;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(f.a)(["\n  margin: 8px;\n  display: block;\n  color: #fff;\n  opacity: 0.6;\n  transition: opacity 0.3s ease;\n  :hover,\n  :active,\n  :focus {\n    opacity: 1;\n  }\n"]);return O=function(){return n},n}function E(){var n=Object(f.a)(["\n  display: inline-block;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  background-color: #000;\n  color: #fff;\n  top: 100%;\n  left: 0%;\n  right: 0%;\n  z-index: 10;\n\n  @media (max-width: 800px) {\n    font-size: 2.4rem;\n  }\n"]);return E=function(){return n},n}var w=p.b.ul(E()),k=Object(p.b)(s.b)(O()),_=p.b.input(j()),C=p.b.button(y(),v.a),S=p.b.form(x()),z=function(n){var e=n.handleCollapse,t=Object(o.useState)(""),a=Object(g.a)(t,2),r=a[0],c=a[1],l=Object(o.useState)([]),s=Object(g.a)(l,2),f=s[0],p=s[1],m=Object(o.useContext)(u);Object(o.useEffect)((function(){}),[r]);var d=function(){p(),e()};return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{onSubmit:function(n){n.preventDefault(),r?fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat(m,"&language=en-US&page=1&include_adult=false&query=").concat(r)).then((function(n){return n.json()})).then((function(n){return p(n.results)})).catch((function(n){return n})):d()}},i.a.createElement(_,{type:"text",placeholder:"Search for a movie/tv show title",value:r,onChange:function(n){c(n.target.value),n.target.value||d()}}),i.a.createElement(C,{type:"submit"}),i.a.createElement(w,null,f&&f.map((function(n,e){if("movie"===n.media_type&&e<10||"tv"===n.media_type&&e<10){var t="/".concat(n.media_type,"/").concat(n.id),a=n.release_date?n.release_date.replace(/-[0-9]{1,2}-[0-9]{1,2}/," "):"",r="movie"===n.media_type?" movie":"TV show";return i.a.createElement(k,{key:t,onClick:d,to:t},n.title||n.name,"(",a,r,")")}return null})))))},F=[{name:"Home",path:"/"},{name:"Movies",path:"/movie/"},{name:"TV shows",path:"/tv/"},{name:"My watchlist",path:"/watchlist/"}];function T(){var n=Object(f.a)(["\n  display: none;\n\n  @media (max-width: 800px) {\n    display: inline-block;\n  }\n"]);return T=function(){return n},n}function W(){var n=Object(f.a)(["\n  color: #ffd500;\n  font-weight: 600;\n"]);return W=function(){return n},n}function J(){var n=Object(f.a)(["\n  margin-left: 3.2rem;\n  color: #fff;\n  opacity: 0.6;\n\n  :active,\n  :focus,\n  :hover {\n    opacity: 1;\n  }\n\n  @media (max-width: 800px) {\n    padding: 1.6rem 0;\n    font-size: 2.4rem;\n    margin: 0;\n  }\n"]);return J=function(){return n},n}function M(){var n=Object(f.a)(["\n  padding: 0;\n  @media (max-width: 800px) {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n  }\n"]);return M=function(){return n},n}function P(){var n=Object(f.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: #000;\n  transition: transform .2s ease, opacity .4s ease;\n  @media (max-width: 800px) {\n    padding: 1.6rem;\n    /* display: ","; */\n    flex-direction: column;\n    position: absolute;\n    transform-origin: top;\n    transform: ",";\n    opacity: ",";\n    z-index: 9;\n    left: 0;\n    top: 8rem;\n  }\n"]);return P=function(){return n},n}function U(){var n=Object(f.a)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 8rem;\n  align-items: center;\n  padding: 0 3rem;\n  background-color: #000;\n  @media (max-width: 800px) {\n    justify-content: space-between;\n  }\n"]);return U=function(){return n},n}var I=p.b.nav(U()),N=p.b.div(P(),(function(n){return n.isCollapsed?"none":"flex"}),(function(n){return n.isCollapsed&&"translateX(-100%)"}),(function(n){return n.isCollapsed&&"0"})),V=p.b.ul(M()),Y=Object(p.b)(s.c)(J()),q=Object(p.b)(s.b)(W()),H=p.b.button(T()),A=function(){var n=Object(o.useState)("true"),e=Object(g.a)(n,2),t=e[0],a=e[1],r=function(){a(!t)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null,i.a.createElement(q,{to:"/"},"Lameflix"),i.a.createElement(H,{onClick:r},"MENU"),i.a.createElement(N,{isCollapsed:t},i.a.createElement(V,null,F.map((function(n){return i.a.createElement(Y,{exact:"/"===n.path,onClick:r,key:n.name,to:n.path},n.name)}))),i.a.createElement(z,{handleCollapse:r}))))},B=t(26);function D(){var n=Object(f.a)(["\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.6rem;\n  font-size: 1.8rem;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.6);\n  transform: translateY(100%);\n  transition: transform 0.2s 0.2s ease;\n"]);return D=function(){return n},n}function G(){var n=Object(f.a)(["\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 1.6rem;\n  width: 200px;\n  height: 300px;\n  background-size: cover;\n  background-image: url(https://image.tmdb.org/t/p/w500/",");\n  opacity: 0.6;\n  cursor: pointer;\n  transition-property: opacity, transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n  :hover,\n  :active {\n    opacity: 1;\n    transform: scale(1.1);\n\n    > * {\n      transform: translateY(0);\n    }\n  }\n"]);return G=function(){return n},n}var L=Object(p.b)(s.b)(G(),(function(n){return n.bg})),X=p.b.p(D()),K=function(n){var e=n.data,t=n.pageType,a="/".concat(t,"/").concat(e.id),r="".concat(e.name||e.title);return i.a.createElement(L,{to:a,name:r,bg:e.poster_path||e.backdrop_path},i.a.createElement(X,null,r))};function Q(){var n=Object(f.a)(["\n  width: auto;\n  display: ",";\n  flex-wrap: ",";\n  justify-content: space-around;\n"]);return Q=function(){return n},n}var R=p.b.div(Q(),(function(n){return n.scroll?"inline-flex":"flex"}),(function(n){return n.scroll?"nowrap":"wrap"})),Z=function(n){var e=n.data,t=(n.mediaType,n.scroll),a=Object(o.useContext)(l).page;return i.a.createElement(R,{scroll:t},e.results&&e.results.map((function(n){var e=n.type||a;return i.a.createElement(K,{key:n.id,pageType:e,data:n})})))};function $(){var n=Object(f.a)(["\n  margin: 2.4rem;\n  width: auto;\n  overflow-x: auto;\n  overflow-y: hidden;\n"]);return $=function(){return n},n}function nn(){var n=Object(f.a)(["\n  color: #fff;\n  margin: 2.4rem;\n"]);return nn=function(){return n},n}var en=p.b.h2(nn()),tn=p.b.div($()),an=function(n){var e=n.scroll,t=void 0!==e&&e,a=Object(o.useState)([]),r=Object(g.a)(a,2),c=r[0],s=r[1],f=Object(o.useContext)(l),p=f.page,m=f.watchlist,d=Object(o.useContext)(u),b=p||"tv",h=function(){switch(b){case"movie":return"Popular movies";case"tv":return"Popular TV series";case"watchlist":return"Your watchlist";default:return"Home"}}();return Object(o.useEffect)((function(){"watchlist"===b?s(m):fetch("https://api.themoviedb.org/3/discover/".concat(b,"?api_key=").concat(d,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")).then((function(n){return n.json()})).then((function(n){return s(n)}))}),[p]),i.a.createElement(i.a.Fragment,null,i.a.createElement(en,null,h),i.a.createElement(tn,null,i.a.createElement(Z,{scroll:t,data:c,isEditable:"watchlist"===b})))},rn=t(17);function on(){var n=Object(f.a)(["\n  margin: 8px;\n  display: inline-block;\n  padding: 18px 16px;\n  background: ",";\n  border-radius: 5px;\n  border: 1px solid #fff;\n  color: ",";\n  cursor: pointer;\n  transition: opacity 0.2s ease, background-color 0.1s ease;\n\n  :hover,\n  :focus,\n  :active {\n    background: #fff;\n    color: #000;\n    opacity: 0.9;\n  }\n\n  @media (max-width: 768px) {\n    display: ",";\n  }\n"]);return on=function(){return n},n}var cn=p.b.a(on(),(function(n){return n.primary?"#fff":"none"}),(function(n){return n.primary?"#000":"#fff"}),(function(n){return n.smFlex||1})),un=function(n){var e=n.data,t=Object(o.useContext)(l),a=t.watchlist,r=t.setWatchlist,c=t.page,u="https://google.com/search?q=Watch ".concat(e.title||e.name," Online");return i.a.createElement(i.a.Fragment,null,i.a.createElement(cn,{href:u,primary:"true"},"Watch now"),i.a.createElement(cn,{onClick:function(){var n={id:e.id,backdrop_path:e.backdrop_path,poster_path:e.poster_path,name:e.name,title:e.title};n.type=c;var t=function(){if(a.results){var e=a.results;return e.filter((function(e){return e.id===n.id&&e.type===n.type})).length?{results:Object(rn.a)(e)}:{results:[].concat(Object(rn.a)(e),[n])}}return{results:[n]}}();r(t),localStorage.setItem("lameWatchlist",JSON.stringify(t))}},"Add to list"))};function ln(){var n=Object(f.a)(["\n  padding: 4.8rem;\n  background-size: cover;\n  background-position: center center;\n  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),\n    url(",");\n  animation: "," 25s ease infinite alternate;\n\n  @media (max-width: 550px) {\n    background-image: linear-gradient(\n        0deg,\n        rgba(0, 0, 0, 1) 30%,\n        rgba(0, 0, 0, 0)\n      ),\n      url(",");\n\n    display: flex;\n    flex-direction: column;\n    animation-name: ",";\n    animation-duration: 45s;\n    & > * {\n      text-align: center;\n    }\n  }\n"]);return ln=function(){return n},n}function sn(){var n=Object(f.a)(["\n  color: #fff;\n  font-size: 1.6rem;\n  width: 500px;\n\n  @media (max-width: 550px) {\n    width: 100%;\n    &:first-of-type {\n      display: none;\n    }\n  }\n"]);return sn=function(){return n},n}function fn(){var n=Object(f.a)(["\n  color: #fff;\n  font-size: 4.8rem;\n  font-weight: 600;\n\n  @media (max-width: 550px) {\n    padding-top: 24rem;\n  }\n"]);return fn=function(){return n},n}function pn(){var n=Object(f.a)(["\n0% {\n    background-position: top left;\n}\n\n100% {\n    background-position: bottom right;\n}\n"]);return pn=function(){return n},n}function mn(){var n=Object(f.a)(["\n0% {\n    background-position: top center;\n}\n\n100% {\n    background-position: bottom center;\n}\n"]);return mn=function(){return n},n}var dn=Object(p.c)(mn()),bn=Object(p.c)(pn()),gn=p.b.h1(fn()),hn=p.b.p(sn()),vn=p.b.div(ln(),(function(n){var e=n.bg;return e&&e}),dn,(function(n){var e=n.bg;return e&&e}),bn),xn=function(n){var e=n.data,t="https://via.placeholder.com/640x360";return(e.backdrop_path||e.poster_path)&&(t=e.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path):"https://image.tmdb.org/t/p/original/".concat(e.poster_path)),i.a.createElement(vn,{bg:t},i.a.createElement(gn,null,e.title||e.name),i.a.createElement(hn,null,e.overview),i.a.createElement(un,{data:e}),i.a.createElement(hn,null,"Genre:",e.genres&&e.genres.map((function(n){return i.a.createElement("span",{key:n.id}," ",n.name)}))))},yn=function(){var n=Object(o.useState)({}),e=Object(g.a)(n,2),t=e[0],a=e[1],r=Object(o.useContext)(l),c=r.id,s=r.page,f=Object(o.useContext)(u),p=c||456,m=s||"tv";return Object(o.useEffect)((function(){fetch("https://api.themoviedb.org/3/".concat(m,"/").concat(p,"?api_key=").concat(f,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return a(n)})).catch((function(n){return n}))}),[m,p]),i.a.createElement(i.a.Fragment,null,i.a.createElement(xn,{data:t}),i.a.createElement(an,{scroll:!0}))},jn=function(n){var e=n.match.params,t=JSON.parse(localStorage.getItem("lameWatchlist")),a=Object(o.useState)(t||{}),r=Object(g.a)(a,2),c=r[0],u=r[1];return e.page||(e={page:"tv",id:"456"}),i.a.createElement(l.Provider,{value:Object(B.a)({},e,{watchlist:c,setWatchlist:u})},e.id?i.a.createElement(yn,null):i.a.createElement(an,null))},On=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null),i.a.createElement(b.c,null,i.a.createElement(b.a,{exact:!0,path:"/",component:jn}),i.a.createElement(b.a,{path:["/:page/:id","/:page/"],component:jn})))};r.a.render(i.a.createElement((function(){return i.a.createElement(u.Provider,{value:"da4622c209e92f622296706520a36d5f"},i.a.createElement(s.a,{basename:"/"},i.a.createElement(d,null),i.a.createElement(On,null)))}),null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6de83b1d.chunk.js.map