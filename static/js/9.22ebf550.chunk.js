(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[9],{443:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a(196),n=function(e){return"".concat(r.m).concat(e)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=[];return e.slice(0,t).forEach((function(e,t,n){if(t%a===0||0===t){var i=n.slice(t,t+a);i.length&&r.push(i)}})),r}},451:function(e,t,a){"use strict";var r=a(22),n=a(77),i=a(4),c=a(129),o=a(341),s=a(101),l=a.n(s),d=(a(0),a(2)),j=Object(o.a)((function(e){return{image:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",transition:".5s all ease"},shadow:{position:"absolute",left:"0px",top:"0px",width:"100%",height:"100%",background:e.palette.movieMask}}}));t.a=function(e){var t=e.shadowClassName,a=e.imageClassName,o=e.imageUrl,s=e.containerClassname,b=e.children,h=e.scaleImageOnHover,u=void 0!==h&&h,p=e.imageStyles,m=(Object(n.a)(e,["shadowClassName","imageClassName","imageUrl","containerClassname","children","scaleImageOnHover","imageStyles"]),j()),g=Object(i.a)(c.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)(Object(r.a)({},t.typography.body2),{},{textAlign:"center",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"200px",boxShadow:t.palette.shadow,color:t.palette.text.secondary,overflow:"hidden",borderRadius:"5px",backgroundColor:t.palette.primary.dark},s),{},{"&:hover > div:nth-of-type(1)":u?{transform:"scale(1.07)"}:{}})}));return Object(d.jsxs)(g,{style:{marginTop:"0"},children:[Object(d.jsx)("div",{className:l()(m.image,a),style:Object(r.a)({backgroundImage:"url(".concat(o,")")},p)}),Object(d.jsx)("div",{className:l()(m.shadow,t)}),b]})}},452:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a(86),n=a(303),i=a(341),c=a(62),o=a(444),s=a.n(o),l=(a(0),a(120)),d=a(443),j=a(2),b=Object(i.a)((function(e){return{simmilarMovieLink:{width:"250px",height:"100%",marginRight:"3rem",textDecoration:"none",overflow:"hidden","& > div:nth-of-type(1)":{transition:e.palette.transition},"&:hover > div:nth-of-type(1)":{transform:"scale(1.05)"}},simmilarMoviePoster:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",width:"250px",height:"400px"}}}));function h(e){var t=e.data,a=e.type,i=void 0===a?"movie":a,o=b();return Object(j.jsx)(c.a,{justifyContent:"center",children:t.map((function(e,t){return Object(j.jsxs)(l.b,{to:"/".concat(i,"/").concat(e.id),className:o.simmilarMovieLink,children:[Object(j.jsx)("div",{style:{backgroundImage:"url(".concat(Object(d.b)(e.poster_path),")")},className:o.simmilarMoviePoster}),Object(j.jsxs)(c.a,{direction:"column",paddingTop:2,paddingBottom:2,paddingLeft:1,children:[Object(j.jsx)(r.a,{variant:"h4",color:"textSecondary",paddingTop:2,children:e["movie"===i?"title":"name"]}),Object(j.jsx)(r.a,{variant:"subtitle1",color:"white",paddingTop:2,children:s()(e["movie"===i?"release_date":"first_air_date"]).format("MMMM DD, YYYY")}),Object(j.jsx)(r.a,{variant:"subtitle2",color:"white",paddingTop:2,children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(n.a,{variant:"determinate",size:25,style:{marginRight:".75rem"},color:e.vote_average>5?"success":"warning",value:10*e.vote_average}),Math.floor(e.vote_average)," IMDB"]})})]})]},t)}))})}},453:function(e,t,a){"use strict";var r=a(22),n=a(11),i=a(77),c=a(0),o=a(451),s=a(2);t.a=function(e){var t=e.height,a=void 0===t?500:t,l=e.blurMax,d=void 0===l?12:l,j=e.axisY,b=void 0===j?30:j,h=Object(i.a)(e,["height","blurMax","axisY"]),u=Object(c.useState)({blur:0,axisY:0}),p=Object(n.a)(u,2),m=p[0],g=p[1];Object(c.useEffect)((function(){return document.addEventListener("scroll",x),function(){return document.removeEventListener("scroll",x)}}),[]);var x=function(){var e=document.documentElement.scrollTop;if(e<a)return g({blur:e/a*d,axisY:e/a*b})};return Object(s.jsx)(o.a,Object(r.a)(Object(r.a)({imageStyles:{transform:"scale(1.1) translateY(".concat(m.axisY,"px)"),filter:"blur(".concat(m.blur,"px)")}},h),{},{children:h.children}))}},464:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var r=a(62),n=a(2);function i(e){var t=e.data;return Object(n.jsx)(r.a,{justifyContent:"center",children:Object(n.jsx)(r.a,{justifyContent:"center",alignItems:"center",children:t.map((function(e,t){return Object(n.jsx)(r.b,{marginRight:2,children:Object(n.jsx)("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},e.key)}))})})}},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(0);var r=a(62),n=a(86),i=a(443),c=a(341),o=a(2),s=Object(c.a)((function(e){return{actorPosterWrapper:{margin:"0 2rem",display:"flex",flexDirection:"column",width:"150px",cursor:"pointer","&:hover > div:nth-of-type(1)":{transform:"scale(1.03)"}},actorPoster:{boxShadow:"2px 2px 15px -5px #a9d4ff",overflow:"hidden",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"50%",width:"150px",height:"150px",marginTop:"10px"}}}));function l(e){var t=e.data,a=s();return Object(o.jsx)(r.a,{justifyContent:"center",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:a.actorPosterWrapper,children:[Object(o.jsx)("div",{className:a.actorPoster,style:{backgroundImage:"url(".concat(Object(i.b)(e.profile_path),")")}},t),Object(o.jsx)(n.a,{variant:"h4",color:"textSecondary",paddingTop:2,children:e.name}),Object(o.jsxs)(n.a,{variant:"subtitle2",color:"white",paddingTop:2,children:["as ",e.character]})]},t)}))})}},466:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var r=a(11),n=a(0),i=a(62),c=a(86),o=a(244),s=a(527),l=a(528),d=a(529),j=a(341),b=a(444),h=a.n(b),u=a(265),p=a(531),m=a(2),g=Object(j.a)((function(e){return{button:{marginRight:"15px"}}}));function x(e){var t=e.data,a=Object(n.useState)(0),j=Object(r.a)(a,2),b=j[0],x=j[1],O=Object(n.useState)(!1),f=Object(r.a)(O,2),v=f[0],y=f[1],w=g(),k=function(){y((function(e){return!e}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(i.a,{justifyContent:"space-between",alignItems:"center",marginTop:4,children:[Object(m.jsx)(i.b,{children:Object(m.jsxs)(i.a,{alignItems:"center",children:[Object(m.jsx)(i.b,{style:{width:"75px",height:"75px",display:"flex",alignItems:"center"},children:Object(m.jsx)("img",{src:t.author_details.avatar_path&&t.author_details.avatar_path.replace("/",""),alt:"Avatar",style:{width:"100%",borderRadius:"50%"}})}),Object(m.jsx)(i.b,{children:Object(m.jsx)(c.a,{variant:"h4",fontStyle:"italic",children:t.author})})]})}),Object(m.jsx)(i.b,{children:Object(m.jsx)(c.a,{color:"orange",children:h()(t.created_at).format("MMM DD YYYY, HH:mm")})})]}),Object(m.jsxs)(i.a,{children:[Object(m.jsx)(i.b,{style:{width:"90px"}}),Object(m.jsx)(i.b,{xs:!0,children:t.content.length>300?v?Object(m.jsxs)(c.a,{variant:"subtitle1",children:[Object(m.jsx)(i.a,{paddingLeft:1,children:Object(m.jsx)(p.a,{children:t.content})}),v&&Object(m.jsx)(o.a,{onClick:k,style:{color:"orange",textTransform:"capitalize"},children:"Hide"})]}):Object(m.jsxs)(c.a,{variant:"subtitle1",children:[Object(m.jsx)(i.a,{paddingLeft:1,children:Object(m.jsx)(p.a,{children:t.content.substring(0,300)+"..."})}),!v&&Object(m.jsx)(o.a,{onClick:k,style:{color:"orange",textTransform:"capitalize"},children:"See more"})]}):Object(m.jsx)(c.a,{variant:"subtitle1",children:Object(m.jsx)(i.a,{paddingLeft:1,children:Object(m.jsx)(p.a,{children:t.content})})})})]}),Object(m.jsxs)(i.a,{children:[Object(m.jsx)(i.b,{style:{width:"90px"}}),Object(m.jsxs)(i.b,{xs:!0,marginTop:4,children:[Object(m.jsx)(u.a,{title:"Like",icon:s.a,onClick:function(){x((function(e){return e+1}))},buttonClassName:w.button,children:Object(m.jsx)(c.a,{variant:"subtitle2",color:"orange",marginLeft:1,children:b})}),Object(m.jsx)(u.a,{title:"Reply",icon:l.a,buttonClassName:w.button}),Object(m.jsx)(u.a,{title:"Share",icon:d.a,buttonClassName:w.button}),Object(m.jsx)("hr",{style:{marginTop:"1.25rem"}})]})]})]})}},535:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(22),i=a(0),c=a(196),o=a(443),s=a(62),l=a(311),d=a(86),j=a(158),b=a(179),h=a(395),u=a(24),p=a(445),m=a(341),g=a(453),x=a(456),O=a.n(x),f=a(464),v=a(2);function y(e){var t=e.data;return Object(v.jsx)(s.a,{justifyContent:"center",children:Object(v.jsx)(s.a,{justifyContent:"center",alignItems:"center",children:t.map((function(e,t){return Object(v.jsx)(s.b,{marginRight:2,children:Object(v.jsx)("div",{style:{backgroundImage:"url(".concat(Object(o.b)(e.file_path),")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"300px",width:"500px"}})},t)}))})})}var w=a(452),k=a(465),C=a(129),N=a(312),_=a(283),I=a(285),T=a(286),S=a(310),M=a(265),R=a(444),Y=a.n(R),P=a(525),B=a(526),L=a(474),z=a(475),D=a(168),W=a(121),H=Object(m.a)((function(e){return Object(n.a)({},function(e){return{movieDetails:{height:"75%",zIndex:"0",width:"65%",padding:e.spacing(4,4,4,7),transform:"translateX(-1.5rem)",boxShadow:e.palette.shadow,overflowY:"scroll"},text:{textAlign:"left",marginBottom:"1.25rem"},list:{padding:"0",marginBottom:e.spacing(2),display:"flex","& li":{padding:e.spacing(0,2,0,0),width:"max-content","& span":{color:e.palette.secondary.dark,fontWeight:"bolder"}}},bullet:{width:"8px",height:"8px",background:e.palette.orange,marginRight:"10px",borderRadius:"50%"},genres:{marginBottom:e.spacing(2),fontSize:"13px"},prodCompaniesWrapper:{display:"flex",marginTop:"15px",alignItems:"center"},imgWrapper:{width:"100px",height:"auto",marginRight:e.spacing(3)},prodCompLogo:{width:"100%",height:"100%",marginRight:e.spacing(4)},button:{border:"1px solid ".concat(e.palette.primary.dark),marginRight:e.spacing(1.5),"& svg":{fill:e.palette.primary.dark},"&:hover":{backgroundColor:e.palette.primary.dark,"& p":{color:e.palette.white},"& span svg, & span svg path":{fill:"".concat(e.palette.white," !important")}}}}}(e))}));function A(e){var t=e.movie,a=e.openTrailer,r=Object(D.c)((function(e){return e.movies})),n=r.favorites,i=r.watchLater,c=n.find((function(e){return e.id===t.id})),l=i.find((function(e){return e.id===t.id})),j=H(),b=Object(u.g)(),h=Object(D.b)();return Object(v.jsxs)(C.a,{className:j.movieDetails,children:[Object(v.jsxs)(s.a,{direction:"column",justifyContent:"start",alignItems:"start",children:[Object(v.jsxs)(d.a,{variant:"h1",color:"textSecondary",className:j.text,children:[t.title,Object(v.jsx)(N.a,{title:"Add to favorite",placement:"top",children:Object(v.jsx)(_.a,{sx:{ml:1.5},color:c?"warning":"primary",onClick:function(){if(c)return h(Object(W.g)(t.id));var e=t.title,a=t.release_date,r=t.vote_average,n=t.poster_path,i=t.id;h(Object(W.i)({id:i,title:e,release_date:a,vote_average:r,poster_path:n}))},children:Object(v.jsx)(P.a,{})})}),Object(v.jsx)(N.a,{title:"Watch later",placement:"top",children:Object(v.jsx)(_.a,{sx:{ml:1.5},color:l?"warning":"primary",onClick:function(){if(l)return h(Object(W.h)(t.id));var e=t.title,a=t.release_date,r=t.vote_average,n=t.poster_path,i=t.id;h(Object(W.p)({id:i,title:e,release_date:a,vote_average:r,poster_path:n}))},children:Object(v.jsx)(B.a,{})})})]}),Object(v.jsx)(d.a,{variant:"caption",color:"secondary.dark",className:j.genres,children:t.genres.map((function(e,t){return e.name})).join(", ")}),Object(v.jsx)(I.a,{className:j.list,children:[Y()(t.release_date).format("MMMM DD, YYYY"),function(){var e=Math.floor(t.runtime/60),a=t.runtime-60*e;return"".concat(e,"h ").concat(a,"min")}(),"".concat(t.vote_average," IMDB")].map((function(e,t){return Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:j.bullet}),Object(v.jsx)(S.a,{primary:e})]},t)}))}),Object(v.jsx)(d.a,{variant:"subtitle1",color:"secondary.dark",className:j.text,children:Object(v.jsxs)("i",{children:['"',t.overview,'"']})}),Object(v.jsxs)(s.a,{flexWrap:"wrap",children:[Object(v.jsx)(s.b,{padding:0,children:Object(v.jsx)(d.a,{variant:"h4",color:"secondary.dark",className:j.text,children:Object(v.jsx)("b",{children:"Cast"})})}),Object(v.jsx)(s.a,{children:Object(v.jsx)(d.a,{variant:"h5",color:"secondary.dark",marginRight:2,textAlign:"left",children:t.credits.cast.slice(0,5).map((function(e){return e.original_name})).join(", ")})})]}),Object(v.jsxs)(s.a,{direction:"column",justifyContent:"flex-start",alignItems:"start",marginTop:3,children:[Object(v.jsx)(s.b,{padding:0,children:Object(v.jsx)(d.a,{variant:"h4",color:"secondary.dark",className:j.text,children:Object(v.jsx)("b",{children:"Produced by"})})}),Object(v.jsx)(s.b,{padding:0,className:j.prodCompaniesWrapper,children:t.production_companies.filter((function(e){return e.logo_path})).slice(0,3).map((function(e){return Object(v.jsx)("div",{className:j.imgWrapper,children:Object(v.jsx)("img",{className:j.prodCompLogo,alt:e.name,src:e.logo_path?Object(o.b)(e.logo_path):""})},e.id)}))})]})]}),Object(v.jsxs)(s.a,{marginTop:4,children:[Object(v.jsx)(M.a,{onClick:function(){return b.goBack()},title:"Back",icon:L.a,buttonClassName:j.button,text:{color:"secondary.dark"}}),Object(v.jsx)(M.a,{title:"Trailer",icon:z.a,onClick:function(){a()},buttonClassName:j.button,text:{color:"secondary.dark"}})]})]})}var E=a(466),F=a(101),U=a.n(F),J=Object(m.a)((function(e){return Object(n.a)(Object(n.a)({},function(e){return{headerImage:{width:"100%"},gridItem:{width:"100%",padding:e.spacing(0,5,5),margin:"0px",borderBottom:"1px solid gray"},movieDetailsWrapper:{position:"unset",width:"75%"},mainMovieContainer:{position:"absolute",width:"100%",height:"75%"},poster:{height:"100%",zIndex:"1",borderRadius:"10px",width:"450px",backgroundSize:"cover",boxShadow:e.palette.shadow},contentHeading:{borderLeft:"1px solid orange",margin:"2rem 0 3rem",padding:".75rem"},similarMoviePoster:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",width:"250px",height:"250px"},test:{position:"absolute",left:"0px",top:"0px",height:"100%",width:"35px",display:"flex",transform:"translateX(-10px)",justifyContent:"center",alignItems:"center","& > div":{height:"75%",width:"100%",borderRadius:"3px 0 0 3px",background:"white"}}}}(e)),{},{trailerWrapper:{height:"75%",right:"50%",top:"50%",transform:"translate(50%,-50%)",position:"fixed",width:"75%",zIndex:"9999"},reviewsContainer:{backgroundColor:e.palette.secondary.light}})}));t.default=function(){var e=J(),t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],m=a[1],x=Object(i.useState)(!1),C=Object(r.a)(x,2),N=C[0],_=C[1],I=Object(i.useState)(null),T=Object(r.a)(I,2),S=T[0],M=T[1],R=Object(i.useState)(null),Y=Object(r.a)(R,2),P=Y[0],B=Y[1],L=Object(u.h)().id;Object(i.useEffect)((function(){m(!0),Object(c.a)(L).then((function(e){if(e.data.videos.results.length){var t=e.data.videos.results.filter((function(e){return"YouTube"===e.site&&"Trailer"===e.type}));M(t[0].key)}B(e.data),m(!1),window.scrollTo({top:0,behavior:"smooth"})})).catch((function(e){console.error(e),m(!1)}))}),[L]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{children:Object(v.jsxs)("title",{children:["Movie ",P?"- ".concat(P.title):""]})}),n||!P?Object(v.jsx)(s.a,{justifyContent:"center",alignItems:"center",children:Object(v.jsx)(s.b,{style:{width:"100%"},padding:0,children:Object(v.jsx)(l.a,{style:{transform:"unset",height:"100vh"}})})}):Object(v.jsxs)(s.a,{children:[Object(v.jsx)(s.b,{padding:0,className:e.headerImage,children:Object(v.jsx)(g.a,{imageUrl:Object(o.b)(P.backdrop_path),axisY:65,containerClassname:{height:"calc(100vh - 64px)",marginTop:"1rem",boxShadow:"unset",borderRadius:"0"},children:Object(v.jsx)(s.a,{className:e.mainMovieContainer,justifyContent:"space-around",alignItems:"center",children:Object(v.jsxs)(s.b,{style:{width:"85%",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"relative"},children:[Object(v.jsx)("div",{className:e.test,children:Object(v.jsx)("div",{})}),Object(v.jsx)("div",{className:e.poster,style:{backgroundImage:"url(".concat(Object(o.b)(P.poster_path),")")}}),Object(v.jsx)(A,{movie:P,openTrailer:function(){_(!0)}})]})})})}),Object(v.jsxs)(s.b,{padding:0,className:e.gridItem,children:[Object(v.jsx)(d.a,{variant:"h1",color:"textPrimary",className:e.contentHeading,children:"Videos"}),Object(v.jsx)(O.a,{indicatorContainerProps:{style:{marginTop:"2rem"}},children:Object(o.a)(P.videos.results.filter((function(e){return"YouTube"===e.site})),20,2).map((function(e,t){return Object(v.jsx)(f.a,{data:e},t)}))})]}),Object(v.jsxs)(s.b,{padding:0,className:e.gridItem,children:[Object(v.jsx)(d.a,{variant:"h1",color:"textPrimary",className:e.contentHeading,children:"Images"}),Object(v.jsx)(O.a,{indicatorContainerProps:{style:{marginTop:"2rem"}},children:Object(o.a)(P.images.backdrops,20,2).map((function(e,t){return Object(v.jsx)(y,{data:e},t)}))})]}),Object(v.jsxs)(s.b,{padding:0,className:e.gridItem,justifyContent:"center",children:[Object(v.jsx)(d.a,{variant:"h2",color:"textPrimary",align:"left",className:e.contentHeading,marginBottom:4,children:"Cast"}),Object(v.jsx)(O.a,{indicatorContainerProps:{style:{marginTop:"2rem"}},children:function(){var e=P.credits.cast.filter((function(e){return e.profile_path}));return Object(o.a)(e,e.length,5).map((function(e,t){return Object(v.jsx)(k.a,{data:e},t)}))}()})]}),Object(v.jsxs)(s.b,{padding:0,className:e.gridItem,children:[Object(v.jsx)(d.a,{variant:"h2",color:"textPrimary",className:e.contentHeading,align:"left",marginBottom:4,children:"More like this"}),Object(v.jsx)(O.a,{indicatorContainerProps:{style:{marginTop:"25px"}},children:Object(o.a)(P.similar.results,20,4).map((function(e,t){return Object(v.jsx)(w.a,{data:e},t)}))})]}),!!P.reviews.results.length&&Object(v.jsxs)(s.b,{padding:0,className:U()(e.gridItem,e.reviewsContainer),children:[Object(v.jsx)(d.a,{variant:"h2",color:"textPrimary",className:e.contentHeading,align:"left",marginBottom:6,children:"Reviews"}),P.reviews.results.map((function(e){return Object(v.jsx)(E.a,{data:e},e.id)}))]}),Object(v.jsx)(j.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:N,onClose:function(){_(!1)},closeAfterTransition:!0,BackdropComponent:b.b,BackdropProps:{timeout:300},children:Object(v.jsx)(h.a,{in:N,children:Object(v.jsx)("div",{className:e.trailerWrapper,children:Object(v.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(S),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%"}})})})})]})]})}}}]);
//# sourceMappingURL=9.22ebf550.chunk.js.map