(this["webpackJsonpstarter-kit"]=this["webpackJsonpstarter-kit"]||[]).push([[11],{443:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a(196),n=function(e){return"".concat(r.m).concat(e)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=[];return e.slice(0,t).forEach((function(e,t,n){if(t%a===0||0===t){var i=n.slice(t,t+a);i.length&&r.push(i)}})),r}},450:function(e,t,a){"use strict";var r=a(22),n=a(77),i=a(86),c=a(341),s=a(120),o=a(101),l=a.n(o),d=(a(0),a(2)),j=Object(c.a)((function(e){return{buttonLeaf:{display:"flex",padding:"5px 15px",textDecoration:"none",justifyContent:"flex-start",alignItems:"center",textTransform:"none",color:"white",border:"1px solid ".concat(e.palette.icon),transition:".35s all ease",borderRadius:"5px",letterSpacing:0,boxShadow:"0px 0px 5px -2px ".concat(e.palette.icon),"&:hover":{background:"".concat(e.palette.icon),"& p":{color:e.palette.text.hover},"& svg, & svg path":{fill:e.palette.text.hover}},"& svg":{fill:"white",marginRight:"10px"}}}}));t.a=function(e){var t=e.title,a=e.buttonClassName,c=Object(n.a)(e,["title","buttonClassName"]),o=j();return Object(d.jsxs)(s.b,Object(r.a)(Object(r.a)({className:l()(o.buttonLeaf,a)},c),{},{children:[c.icon?Object(d.jsx)(c.icon,{}):null,Object(d.jsx)(i.a,Object(r.a)(Object(r.a)({},c.text),{},{children:t}))]}))}},451:function(e,t,a){"use strict";var r=a(22),n=a(77),i=a(4),c=a(129),s=a(341),o=a(101),l=a.n(o),d=(a(0),a(2)),j=Object(s.a)((function(e){return{image:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",transition:".5s all ease"},shadow:{position:"absolute",left:"0px",top:"0px",width:"100%",height:"100%",background:e.palette.movieMask}}}));t.a=function(e){var t=e.shadowClassName,a=e.imageClassName,s=e.imageUrl,o=e.containerClassname,m=e.children,b=e.scaleImageOnHover,h=void 0!==b&&b,g=e.imageStyles,p=(Object(n.a)(e,["shadowClassName","imageClassName","imageUrl","containerClassname","children","scaleImageOnHover","imageStyles"]),j()),x=Object(i.a)(c.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)(Object(r.a)({},t.typography.body2),{},{textAlign:"center",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"200px",boxShadow:t.palette.shadow,color:t.palette.text.secondary,overflow:"hidden",borderRadius:"5px",backgroundColor:t.palette.primary.dark},o),{},{"&:hover > div:nth-of-type(1)":h?{transform:"scale(1.07)"}:{}})}));return Object(d.jsxs)(x,{style:{marginTop:"0"},children:[Object(d.jsx)("div",{className:l()(p.image,a),style:Object(r.a)({backgroundImage:"url(".concat(s,")")},g)}),Object(d.jsx)("div",{className:l()(p.shadow,t)}),m]})}},452:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(86),n=a(303),i=a(341),c=a(62),s=a(444),o=a.n(s),l=(a(0),a(120)),d=a(443),j=a(2),m=Object(i.a)((function(e){return{simmilarMovieLink:{width:"250px",height:"100%",marginRight:"3rem",textDecoration:"none",overflow:"hidden","& > div:nth-of-type(1)":{transition:e.palette.transition},"&:hover > div:nth-of-type(1)":{transform:"scale(1.05)"}},simmilarMoviePoster:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",width:"250px",height:"400px"}}}));function b(e){var t=e.data,a=e.type,i=void 0===a?"movie":a,s=m();return Object(j.jsx)(c.a,{justifyContent:"center",children:t.map((function(e,t){return Object(j.jsxs)(l.b,{to:"/".concat(i,"/").concat(e.id),className:s.simmilarMovieLink,children:[Object(j.jsx)("div",{style:{backgroundImage:"url(".concat(Object(d.b)(e.poster_path),")")},className:s.simmilarMoviePoster}),Object(j.jsxs)(c.a,{direction:"column",paddingTop:2,paddingBottom:2,paddingLeft:1,children:[Object(j.jsx)(r.a,{variant:"h4",color:"textSecondary",paddingTop:2,children:e["movie"===i?"title":"name"]}),Object(j.jsx)(r.a,{variant:"subtitle1",color:"white",paddingTop:2,children:o()(e["movie"===i?"release_date":"first_air_date"]).format("MMMM DD, YYYY")}),Object(j.jsx)(r.a,{variant:"subtitle2",color:"white",paddingTop:2,children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(n.a,{variant:"determinate",size:25,style:{marginRight:".75rem"},color:e.vote_average>5?"success":"warning",value:10*e.vote_average}),Math.floor(e.vote_average)," IMDB"]})})]})]},t)}))})}},454:function(e,t,a){"use strict";var r=a(77),n=a(0),i=a(86),c=a(311),s=a(285),o=a(286),l=a(310),d=a(341),j=a(462);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=n.createElement("g",null,n.createElement("rect",{fill:"none",height:24,width:24})),g=n.createElement("g",null,n.createElement("g",null,n.createElement("rect",{height:2,width:9,x:13,y:7}),n.createElement("rect",{height:2,width:9,x:13,y:15}),n.createElement("rect",{height:2,width:6,x:16,y:11}),n.createElement("polygon",{points:"13,12 8,7 8,11 2,11 2,13 8,13 8,17"})));function p(e,t){var a=e.title,r=e.titleId,i=b(e,["title","titleId"]);return n.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",ref:t,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,h,g)}var x=n.forwardRef(p),u=(a.p,a(267)),O=a(444),v=a.n(O),f=a(24),y=a(120),w=a(101),N=a.n(w),k=a(168),T=a(450),C=a(2),S=Object(d.a)((function(e){return{wrapper:{position:"absolute",textAlign:"left",left:"120px",bottom:"75px",width:"35%"},title:{fontWeight:"bold",lineHeight:"32px",letterSpacing:"2px"},description:{fontStyle:"italic",fontSize:"15px"},genre:{marginRight:e.spacing(1.5),padding:e.spacing(0,2),borderRadius:"7px",background:e.palette.icon,textDecoration:"none",marginBottom:"5px"},genreText:{fontSize:"9px",lineHeight:"17px",fontWeight:"bolder",color:e.palette.primary.dark,textTransform:"uppercase"},list:{padding:"0",display:"flex","& li":{padding:e.spacing(0,2,0,0),width:"max-content","& span":{fontWeight:"bold"}}},bullet:{width:"8px",height:"8px",background:e.palette.orange,marginRight:"10px",borderRadius:"50%"},button:{padding:"3px 15px",marginRight:"15px","& > p":{fontSize:"12px"},"& svg":{width:"17px"}}}}));t.a=function(e){var t=e.data,a=t.title,n=(t.overview,t.genre_ids),d=void 0===n?[]:n,m=t.vote_average,b=t.release_date,h=t.name,g=Object(r.a)(t,["title","overview","genre_ids","vote_average","release_date","name"]),p=e.type,O=void 0===p?"movie":p,w=Object(r.a)(e,["data","type"]),P=Object(k.c)((function(e){return e.movies})).genres,I=Object(k.c)((function(e){return e.series})).genres,M=(Object(f.g)(),S());return Object(C.jsxs)("div",{className:N()(M.wrapper,w.wrapperClassName),children:[Object(C.jsx)(i.a,{variant:"h1",color:"textSecondary",className:M.title,children:a||h}),Object(C.jsx)(u.a,{children:Object(C.jsxs)(s.a,{className:M.list,children:[Object(C.jsxs)(o.a,{children:[Object(C.jsx)("div",{className:M.bullet}),Object(C.jsx)(l.a,{primary:v()(b).year()})]}),Object(C.jsxs)(o.a,{children:[Object(C.jsx)("div",{className:M.bullet}),Object(C.jsx)(l.a,{primary:"".concat(m," IMDB")})]})]})}),Object(C.jsx)(u.a,{style:{marginTop:".25rem"},children:function(){var e="movie"===O?P||[]:I||[];return Object.values(e).length?d.map((function(t){var a=e[t];if(a)return Object(C.jsx)(y.b,{className:M.genre,to:"/".concat(O,"/discover/genre/").concat(a.id),children:Object(C.jsx)(i.a,{variant:"caption",color:"white",className:M.genreText,children:a.name})},a.id)})):Array.from(Array(d.length)).map((function(e,t){return Object(C.jsx)(c.a,{width:50,height:30},t)}))}()}),Object(C.jsxs)(u.a,{style:{marginTop:"1rem"},children:[Object(C.jsx)(T.a,{title:"Play",icon:j.a,buttonClassName:M.button,to:"/".concat(O,"/").concat(g.id)}),Object(C.jsx)(T.a,{title:"About",icon:x,buttonClassName:M.button,to:"/".concat(O,"/").concat(g.id)})]})]})}},462:function(e,t,a){"use strict";var r=a(15),n=a(2);t.a=Object(r.a)(Object(n.jsx)("path",{d:"M8 5v14l11-7z"}),"PlayArrow")},532:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var r=a(11),n=a(0),i=a(86),c=a(311),s=a(341),o=a(196),l=a(62),d=a(121),j=a(168),m=a.p+"static/media/action.0fc276e2.jpg",b=a.p+"static/media/bond.ba2ac7d2.jpg",h=a.p+"static/media/ethernals.a95ec5d8.jpg",g=a.p+"static/media/venom.1535a223.jpg",p=a.p+"static/media/finch.075591c9.jpg",x=a.p+"static/media/halloween_kills.491b1903.jpg",u=a(454),O=a(451),v=a(445),f=a(456),y=a.n(f),w=a(120),N=a(443),k=a(452),T=a(2),C=Object(s.a)((function(e){return{button:{margin:e.spacing(1)},content:{padding:e.spacing(3)},cardText:{position:"absolute",fontStyle:"italic","& h3":{fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase"}},catergoryName:{fontWeight:"bold",marginBottom:"1rem"},trailerWrapper:{height:"75%",right:"50%",top:"50%",transform:"translate(50%,-50%)",position:"fixed",width:"75%",zIndex:"9999"},gridItem:{width:"100%",padding:e.spacing(2,5,5),margin:"0px"},detailsWrapper:{bottom:"2rem",left:"4.5rem"}}}));function S(){var e=C(),t=Object(j.c)((function(e){return e.movies})),a=t.trendingMovies,s=t.popularMovies,f=Object(j.b)(),S=Object(n.useState)(!1),P=Object(r.a)(S,2),I=P[0],M=P[1],_=[{id:35,name:"Comedy",grid:3,imgUrl:m},{id:18,name:"Drama",grid:3,imgUrl:h},{id:28,name:"Action",grid:6,imgUrl:b}],E=[{id:878,name:"Science Fiction",grid:6,imgUrl:p},{id:14,name:"Fantasy",grid:3,imgUrl:g},{id:27,name:"Horror",grid:3,imgUrl:x}];Object(n.useEffect)((function(){s.length||(M(!0),Promise.all([Object(o.g)(),Object(o.e)()]).then((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];f(Object(d.n)(a.data.results.slice(0,15))),f(Object(d.m)(n.data.results.slice(0,15))),M(!1)})).catch((function(e){return console.error(e)})))}),[s]);return Object(T.jsxs)("div",{className:e.content,children:[Object(T.jsx)(v.a,{children:Object(T.jsx)("title",{children:"Movies"})}),I?Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(l.a,{alignItems:"center",justifyContent:"center",children:[Object(T.jsxs)(l.b,{style:{width:"100%"},children:[Object(T.jsx)(i.a,{variant:"h2",color:"textPrimary",className:e.catergoryName,children:"Trending"}),Object(T.jsx)(l.b,{style:{margin:"1rem 0 0 0",padding:"0"},children:Object(T.jsx)(c.a,{height:650,style:{transform:"unset"}})})]}),Object(T.jsxs)(l.a,{style:{marginTop:"1.5rem"},children:[Object(T.jsx)(i.a,{variant:"h2",color:"textPrimary",className:e.catergoryName,children:"Genres"}),Object(T.jsxs)(l.a,{style:{marginTop:"1.5rem"},children:[Object(T.jsx)(l.b,{xs:3,children:Object(T.jsx)(c.a,{height:250,style:{transform:"unset"}})}),Object(T.jsx)(l.b,{xs:3,children:Object(T.jsx)(c.a,{height:250,style:{transform:"unset"}})}),Object(T.jsx)(l.b,{xs:6,children:Object(T.jsx)(c.a,{height:250,style:{transform:"unset"}})})]}),Object(T.jsxs)(l.a,{style:{marginTop:"1.5rem"},children:[Object(T.jsx)(l.b,{xs:6,children:Object(T.jsx)(c.a,{height:250,style:{transform:"unset"}})}),Object(T.jsx)(l.b,{xs:3,children:Object(T.jsx)(c.a,{height:250,style:{transform:"unset"}})}),Object(T.jsx)(l.b,{xs:3,children:Object(T.jsx)(c.a,{height:250,style:{transform:"unset"}})})]})]})]})}):Object(T.jsxs)(l.a,{alignItems:"center",justifyContent:"center",children:[Object(T.jsxs)(l.b,{style:{width:"100%"},children:[Object(T.jsx)(i.a,{variant:"h2",color:"textPrimary",className:e.catergoryName,children:"Trending"}),Object(T.jsx)(y.a,{children:s.map((function(t){return Object(T.jsx)(O.a,{imageUrl:Object(N.b)(t.backdrop_path),containerClassname:{height:"650px",marginTop:"1rem"},children:Object(T.jsx)(u.a,{data:t,wrapperClassName:e.detailsWrapper})},t.id)}))})]}),Object(T.jsx)(l.a,{marginTop:5,children:Object(T.jsxs)(l.b,{padding:0,className:e.gridItem,children:[Object(T.jsx)(i.a,{variant:"h2",color:"textPrimary",className:e.catergoryName,style:{marginBottom:"3rem"},children:"Popular now"}),Object(T.jsx)(y.a,{indicatorContainerProps:{style:{marginTop:"25px"}},children:Object(N.a)(a,20,4).map((function(e,t){return Object(T.jsx)(k.a,{data:e},t)}))})]})}),Object(T.jsxs)(l.a,{style:{marginTop:"1.5rem"},children:[Object(T.jsx)(l.b,{children:Object(T.jsx)(i.a,{variant:"h2",color:"textPrimary",className:e.catergoryName,children:"Genres"})}),Object(T.jsx)(l.a,{style:{marginTop:"1.5rem"},children:_.map((function(t){return Object(T.jsx)(l.b,{xs:t.grid,children:Object(T.jsx)(w.b,{to:"/movie/discover/genre/".concat(t.id),children:Object(T.jsx)(O.a,{imageUrl:t.imgUrl,scaleImageOnHover:!0,containerClassname:{height:"300px"},children:Object(T.jsx)("div",{className:e.cardText,children:Object(T.jsx)(i.a,{variant:"h3",color:"textPrimary",children:t.name})})})})},t.id)}))}),Object(T.jsx)(l.a,{style:{marginTop:"1.5rem"},children:E.map((function(t){return Object(T.jsx)(l.b,{xs:t.grid,children:Object(T.jsx)(w.b,{to:"/movie/discover/genre/".concat(t.id),children:Object(T.jsx)(O.a,{imageUrl:t.imgUrl,scaleImageOnHover:!0,containerClassname:{height:"300px"},children:Object(T.jsx)("div",{className:e.cardText,children:Object(T.jsx)(i.a,{variant:"h3",color:"textPrimary",children:t.name})})})})},t.id)}))})]})]})]})}}}]);
//# sourceMappingURL=11.59b499cd.chunk.js.map