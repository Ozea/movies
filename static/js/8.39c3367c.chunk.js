(this["webpackJsonpstarter-kit"]=this["webpackJsonpstarter-kit"]||[]).push([[8],{443:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var r=n(196),a=function(t){return"".concat(r.m).concat(t)},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=[];return t.slice(0,e).forEach((function(t,e,a){if(e%n===0||0===e){var i=a.slice(e,e+n);i.length&&r.push(i)}})),r}},444:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",p="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},x={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,l),i=n-a<0,o=e.clone().add(r+(i?-1:1),l);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:c,d:s,D:h,h:o,m:i,s:a,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},j="en",v={};v[j]=f;var O=function(t){return t instanceof S},y=function(t,e,n){var r;if(!t)return j;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var a=t.name;v[a]=t,r=a}return!n&&r&&(j=r),r||!n&&j},w=function(t,e){if(O(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},$=x;$.l=y,$.i=O,$.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function f(t){this.$L=y(t.locale,null,!0),this.parse(t)}var m=f.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(b);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return $},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!$.u(e)||e,u=$.p(t),p=function(t,e){var a=$.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(s)},b=function(t,e){return $.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,f=this.$M,m=this.$D,x="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,f):p(0,f+1);case c:var j=this.$locale().weekStart||0,v=(g<j?g+7:g)-j;return p(r?m-v:m+(6-v),f);case s:case h:return b(x+"Hours",0);case o:return b(x+"Minutes",1);case i:return b(x+"Seconds",2);case a:return b(x+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,c=$.p(t),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],b=c===s?this.$D+(e-this.$W):e;if(c===l||c===d){var g=this.clone().set(h,1);g.$d[p](b),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](b);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[$.p(t)]()},m.add=function(r,u){var h,p=this;r=Number(r);var b=$.p(u),g=function(t){var e=w(p);return $.w(e.date(e.date()+Math.round(t*r)),p)};if(b===l)return this.set(l,this.$M+r);if(b===d)return this.set(d,this.$y+r);if(b===s)return g(1);if(b===c)return g(7);var f=(h={},h[i]=e,h[o]=n,h[a]=t,h)[b]||1,m=this.$d.getTime()+r*f;return $.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=$.z(this),i=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].substr(0,i)},d=function(t){return $.s(i%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:$.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:$.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:$.s(o,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:a};return r.replace(g,(function(t,e){return e||b[t]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,h,p){var b,g=$.p(h),f=w(r),m=(f.utcOffset()-this.utcOffset())*e,x=this-f,j=$.m(this,f);return j=(b={},b[d]=j/12,b[l]=j,b[u]=j/3,b[c]=(x-m)/6048e5,b[s]=(x-m)/864e5,b[o]=x/n,b[i]=x/e,b[a]=x/t,b)[g]||x,p?j:$.a(j)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return $.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},f}(),M=S.prototype;return w.prototype=M,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,S,w),t.$i=!0),w},w.locale=y,w.isDayjs=O,w.unix=function(t){return w(1e3*t)},w.en=v[j],w.Ls=v,w.p={},w}()},449:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return{movieBackground:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"400px",filter:"blur(10px)"},listingWrapper:{paddingTop:"1rem",backgroundColor:t.palette.primary.dark,width:"70%",margin:"-7.5rem 1rem 1rem",zIndex:"15",boxShadow:t.palette.shadow,borderRadius:"5px 5px 0 0"},movieDetailsWrapper:{position:"unset",width:"75%"},mainMovieContainer:{position:"absolute",width:"65%",height:"100%"},mainShadow:{zIndex:99,borderTop:"1px solid #34415b",boxShadow:"0px 1px 20px 4px #202839"},listItem:{overflow:"hidden",backgroundColor:"#252E42",margin:t.spacing(1,0,2.5),padding:"0",borderRadius:"10px 0 0 10px",boxShadow:"2px 4px 10px 3px #202839"},poster:{height:"300px",width:"200px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",transition:".5s all ease"},posterWrapper:{overflow:"hidden",margin:"0"},loadMoreButton:{padding:t.spacing(1,3),"& p":{fontSize:"16px"}},genre:{marginRight:t.spacing(1.5),padding:t.spacing(.25,2),borderRadius:"7px",background:t.palette.icon,textDecoration:"none",marginBottom:"5px"},genreText:{fontSize:"10px",lineHeight:"17px",fontWeight:"bolder",textDecoration:"none",textTransform:"uppercase"},clickableCard:{cursor:"pointer","&:hover $poster":{transform:"scale(1.05)"}},cardActionButton:{fontSize:"15px",marginRight:t.spacing(1.5)}}}},450:function(t,e,n){"use strict";var r=n(22),a=n(77),i=n(86),o=n(341),s=n(120),c=n(101),l=n.n(c),u=(n(0),n(2)),d=Object(o.a)((function(t){return{buttonLeaf:{display:"flex",padding:"5px 15px",textDecoration:"none",justifyContent:"flex-start",alignItems:"center",textTransform:"none",color:"white",border:"1px solid ".concat(t.palette.icon),transition:".35s all ease",borderRadius:"5px",letterSpacing:0,boxShadow:"0px 0px 5px -2px ".concat(t.palette.icon),"&:hover":{background:"".concat(t.palette.icon),"& p":{color:t.palette.text.hover},"& svg, & svg path":{fill:t.palette.text.hover}},"& svg":{fill:"white",marginRight:"10px"}}}}));e.a=function(t){var e=t.title,n=t.buttonClassName,o=Object(a.a)(t,["title","buttonClassName"]),c=d();return Object(u.jsxs)(s.b,Object(r.a)(Object(r.a)({className:l()(c.buttonLeaf,n)},o),{},{children:[o.icon?Object(u.jsx)(o.icon,{}):null,Object(u.jsx)(i.a,Object(r.a)(Object(r.a)({},o.text),{},{children:e}))]}))}},451:function(t,e,n){"use strict";var r=n(22),a=n(77),i=n(4),o=n(129),s=n(341),c=n(101),l=n.n(c),u=(n(0),n(2)),d=Object(s.a)((function(t){return{image:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",transition:".5s all ease"},shadow:{position:"absolute",left:"0px",top:"0px",width:"100%",height:"100%",background:t.palette.movieMask}}}));e.a=function(t){var e=t.shadowClassName,n=t.imageClassName,s=t.imageUrl,c=t.containerClassname,h=t.children,p=t.scaleImageOnHover,b=void 0!==p&&p,g=t.imageStyles,f=(Object(a.a)(t,["shadowClassName","imageClassName","imageUrl","containerClassname","children","scaleImageOnHover","imageStyles"]),d()),m=Object(i.a)(o.a)((function(t){var e=t.theme;return Object(r.a)(Object(r.a)(Object(r.a)({},e.typography.body2),{},{textAlign:"center",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"200px",boxShadow:e.palette.shadow,color:e.palette.text.secondary,overflow:"hidden",borderRadius:"5px",backgroundColor:e.palette.primary.dark},c),{},{"&:hover > div:nth-of-type(1)":b?{transform:"scale(1.07)"}:{}})}));return Object(u.jsxs)(m,{style:{marginTop:"0"},children:[Object(u.jsx)("div",{className:l()(f.image,n),style:Object(r.a)({backgroundImage:"url(".concat(s,")")},g)}),Object(u.jsx)("div",{className:l()(f.shadow,e)}),h]})}},453:function(t,e,n){"use strict";var r=n(22),a=n(11),i=n(77),o=n(0),s=n(451),c=n(2);e.a=function(t){var e=t.height,n=void 0===e?500:e,l=t.blurMax,u=void 0===l?12:l,d=t.axisY,h=void 0===d?30:d,p=Object(i.a)(t,["height","blurMax","axisY"]),b=Object(o.useState)({blur:0,axisY:0}),g=Object(a.a)(b,2),f=g[0],m=g[1];Object(o.useEffect)((function(){return document.addEventListener("scroll",x),function(){return document.removeEventListener("scroll",x)}}),[]);var x=function(){var t=document.documentElement.scrollTop;if(t<n)return m({blur:t/n*u,axisY:t/n*h})};return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({imageStyles:{transform:"scale(1.1) translateY(".concat(f.axisY,"px)"),filter:"blur(".concat(f.blur,"px)")}},p),{},{children:p.children}))}},454:function(t,e,n){"use strict";var r=n(77),a=n(0),i=n(86),o=n(311),s=n(285),c=n(286),l=n(310),u=n(341),d=n(462);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.createElement("g",null,a.createElement("rect",{fill:"none",height:24,width:24})),g=a.createElement("g",null,a.createElement("g",null,a.createElement("rect",{height:2,width:9,x:13,y:7}),a.createElement("rect",{height:2,width:9,x:13,y:15}),a.createElement("rect",{height:2,width:6,x:16,y:11}),a.createElement("polygon",{points:"13,12 8,7 8,11 2,11 2,13 8,13 8,17"})));function f(t,e){var n=t.title,r=t.titleId,i=p(t,["title","titleId"]);return a.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",ref:e,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,b,g)}var m=a.forwardRef(f),x=(n.p,n(267)),j=n(444),v=n.n(j),O=n(24),y=n(120),w=n(101),$=n.n(w),S=n(168),M=n(450),k=n(2),D=Object(u.a)((function(t){return{wrapper:{position:"absolute",textAlign:"left",left:"120px",bottom:"75px",width:"35%"},title:{fontWeight:"bold",lineHeight:"32px",letterSpacing:"2px"},description:{fontStyle:"italic",fontSize:"15px"},genre:{marginRight:t.spacing(1.5),padding:t.spacing(0,2),borderRadius:"7px",background:t.palette.icon,textDecoration:"none",marginBottom:"5px"},genreText:{fontSize:"9px",lineHeight:"17px",fontWeight:"bolder",color:t.palette.primary.dark,textTransform:"uppercase"},list:{padding:"0",display:"flex","& li":{padding:t.spacing(0,2,0,0),width:"max-content","& span":{fontWeight:"bold"}}},bullet:{width:"8px",height:"8px",background:t.palette.orange,marginRight:"10px",borderRadius:"50%"},button:{padding:"3px 15px",marginRight:"15px","& > p":{fontSize:"12px"},"& svg":{width:"17px"}}}}));e.a=function(t){var e=t.data,n=e.title,a=(e.overview,e.genre_ids),u=void 0===a?[]:a,h=e.vote_average,p=e.release_date,b=e.name,g=Object(r.a)(e,["title","overview","genre_ids","vote_average","release_date","name"]),f=t.type,j=void 0===f?"movie":f,w=Object(r.a)(t,["data","type"]),C=Object(S.c)((function(t){return t.movies})).genres,N=Object(S.c)((function(t){return t.series})).genres,T=(Object(O.g)(),D());return Object(k.jsxs)("div",{className:$()(T.wrapper,w.wrapperClassName),children:[Object(k.jsx)(i.a,{variant:"h1",color:"textSecondary",className:T.title,children:n||b}),Object(k.jsx)(x.a,{children:Object(k.jsxs)(s.a,{className:T.list,children:[Object(k.jsxs)(c.a,{children:[Object(k.jsx)("div",{className:T.bullet}),Object(k.jsx)(l.a,{primary:v()(p).year()})]}),Object(k.jsxs)(c.a,{children:[Object(k.jsx)("div",{className:T.bullet}),Object(k.jsx)(l.a,{primary:"".concat(h," IMDB")})]})]})}),Object(k.jsx)(x.a,{style:{marginTop:".25rem"},children:function(){var t="movie"===j?C||[]:N||[];return Object.values(t).length?u.map((function(e){var n=t[e];if(n)return Object(k.jsx)(y.b,{className:T.genre,to:"/".concat(j,"/discover/genre/").concat(n.id),children:Object(k.jsx)(i.a,{variant:"caption",color:"white",className:T.genreText,children:n.name})},n.id)})):Array.from(Array(u.length)).map((function(t,e){return Object(k.jsx)(o.a,{width:50,height:30},e)}))}()}),Object(k.jsxs)(x.a,{style:{marginTop:"1rem"},children:[Object(k.jsx)(M.a,{title:"Play",icon:d.a,buttonClassName:T.button,to:"/".concat(j,"/").concat(g.id)}),Object(k.jsx)(M.a,{title:"About",icon:m,buttonClassName:T.button,to:"/".concat(j,"/").concat(g.id)})]})]})}},462:function(t,e,n){"use strict";var r=n(15),a=n(2);e.a=Object(r.a)(Object(a.jsx)("path",{d:"M8 5v14l11-7z"}),"PlayArrow")},463:function(t,e,n){"use strict";n(0);var r=n(462),a=n(475),i=n(286),o=n(307),s=n(86),c=n(285),l=n(303),u=n(310),d=n(341),h=n(62),p=n(265),b=(n(168),n(120)),g=n(444),f=n.n(g),m=n(443),x=n(2),j=Object(d.a)((function(t){return{poster:{height:"300px",width:"200px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",transition:t.palette.transition},posterWrapper:{overflow:"hidden",margin:"0"},genre:{marginRight:t.spacing(1.5),padding:t.spacing(.25,2),borderRadius:"7px",background:t.palette.icon,textDecoration:"none",marginBottom:"5px"},genreText:{fontSize:"10px",lineHeight:"17px",fontWeight:"bolder",textDecoration:"none",color:t.palette.primary.dark,textTransform:"uppercase"},listItem:{overflow:"hidden",width:"100%",backgroundColor:t.palette.primary.dark,margin:t.spacing(1,0,2.5),padding:"0",borderRadius:"10px 0 0 10px",boxShadow:"1px 1px 4px 0px ".concat(t.palette.secondary.dark),transition:t.palette.transition,"&:hover":{boxShadow:"1px 1px 6px 2px ".concat(t.palette.secondary.dark)}},clickableCard:{textDecoration:"none",margin:"auto",cursor:"pointer","&:hover $poster":{transform:"scale(1.05)"},"&:hover $movieDescription":{display:"flex"}},cardActionButton:{fontSize:"15px",marginRight:t.spacing(1.5)},list:{padding:"0",display:"flex","& li":{padding:t.spacing(0,2,0,0),width:"max-content","& span":{fontWeight:"bold"}}},bullet:{width:"8px",height:"8px",background:"#3a9efd",backgroundColor:t.palette.orange,marginRight:"10px",borderRadius:"50%"},movieDescription:{width:"75%"}}}));e.a=function(t){var e=t.data,n=t.globalGenres,d=t.type,g=void 0===d?"movie":d,v=j();return Object(x.jsx)(b.b,{to:"/".concat(g,"/").concat(e.id),className:v.clickableCard,children:Object(x.jsx)(i.a,{alignItems:"flex-start",className:v.listItem,children:Object(x.jsxs)(h.a,{flexWrap:"unset",children:[Object(x.jsx)(o.a,{className:v.posterWrapper,children:Object(x.jsx)("div",{className:v.poster,style:{backgroundImage:"url(".concat(Object(m.b)(e.poster_path),")")}})}),Object(x.jsxs)(h.a,{direction:"column",className:v.movieDescription,children:[Object(x.jsxs)(h.a,{direction:"column",margin:2,children:[Object(x.jsx)(h.b,{children:Object(x.jsx)(s.a,{variant:"h2",color:"textSecondary",letterSpacing:1,lineHeight:"25px",paddingBottom:2,children:"movie"===g?e.title:e.name})}),Object(x.jsx)(h.b,{marginBottom:2,children:Object(x.jsx)(s.a,{variant:"subtitle",paddingBottom:2,fontSize:15,color:"white",children:Object(x.jsxs)("i",{children:["\u201c",e.overview.length>250?"".concat(e.overview.substring(0,250),"..."):e.overview,"\u201d"]})})}),Object(x.jsx)(h.b,{flexWrap:"wrap",children:Object.values(n).length&&e.genre_ids.slice(0,5).map((function(t){var e=n[t];return Object(x.jsx)(b.b,{className:v.genre,to:"/".concat(g,"/discover/genre/").concat(e.id),onClick:function(t){return t.stopPropagation()},children:Object(x.jsx)(s.a,{variant:"caption",color:"white",className:v.genreText,children:e.name})},e.id)}))}),Object(x.jsx)(h.b,{marginTop:2,children:Object(x.jsxs)(c.a,{className:v.list,children:[Object(x.jsxs)(i.a,{children:[Object(x.jsx)(l.a,{variant:"determinate",size:25,color:e.vote_average>5?"success":"warning",value:10*e.vote_average}),Object(x.jsx)(u.a,{primary:"".concat(e.vote_average," IMDB"),style:{marginLeft:".75rem"}})]}),Object(x.jsxs)(i.a,{children:[Object(x.jsx)("div",{className:v.bullet}),Object(x.jsx)(u.a,{primary:f()(e.release_date).year()})]})]})})]}),Object(x.jsx)(h.a,{direction:"column",margin:2,children:Object(x.jsxs)(h.b,{marginBottom:2,children:[Object(x.jsx)(p.a,{title:"Watch",icon:r.a,buttonClassName:v.cardActionButton}),Object(x.jsx)(p.a,{title:"Trailer",icon:a.a,buttonClassName:v.cardActionButton})]})})]})]})})})}},475:function(t,e,n){"use strict";var r=n(15),a=n(2);e.a=Object(r.a)(Object(a.jsx)("path",{d:"m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}),"Movie")},524:function(t,e,n){"use strict";n.r(e);var r=n(14),a=n(11),i=n(22),o=n(311),s=n(285),c=n(286),l=n(86),u=n(341),d=n(62),h=n(265),p=n(454),b=n(453),g=n(0),f=n.n(g),m=n(445),x=n(168),j=n(24),v=n(102),O=n(196),y=n(463),w=n(443),$=n(449),S=n(2),M=Object(u.a)((function(t){return Object(i.a)({},Object($.a)(t))}));e.default=function(t){var e=M(),n=Object(g.useState)(!1),i=Object(a.a)(n,2),u=i[0],$=i[1],k=Object(g.useState)(!1),D=Object(a.a)(k,2),C=D[0],N=D[1],T=Object(g.useState)(1),_=Object(a.a)(T,2),I=_[0],W=_[1],R=Object(x.c)((function(t){return t.series})),z=R.seriesByGenre,B=R.genres,H=Object(x.b)(),A=Object(j.h)().id,Y=z[A]||[],E=Y[Math.floor(5*Math.random())];Object(g.useEffect)((function(){z[A]||($(!0),L(I))}),[A,z]);var L=function(t){return Object(O.k)(A,t).then((function(t){H(Object(v.i)({genre:A,series:t.data.results})),$(!1)})).catch((function(t){return console.error(t)}))};return Object(S.jsxs)("div",{className:e.content,children:[Object(S.jsx)(m.a,{children:Object(S.jsx)("title",{children:"TV - Discover by genre"})}),Object(S.jsx)(d.a,{justifyContent:"center",alignItems:"center",children:u||!Y.length?Object(S.jsxs)(d.a,{justifyContent:"center",alignItems:"center",children:[Object(S.jsx)(d.b,{style:{width:"100%"},padding:0,children:Object(S.jsx)(o.a,{height:600,style:{transform:"unset"}})}),Object(S.jsx)(d.a,{direction:"column",justifyContent:"center",alignItems:"center",className:e.listingWrapper,children:Object(S.jsx)(s.a,{sx:{width:"100%",maxWidth:"100%"},children:Array.from(Array(10)).map((function(t,e){return Object(S.jsx)(c.a,{alignItems:"flex-start",children:Object(S.jsx)(o.a,{height:35,style:{transform:"unset",margin:".25rem 0",width:"100%"}})},e)}))})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.b,{style:{width:"100%"},padding:0,children:Object(S.jsx)(b.a,{imageUrl:Object(w.b)(E.backdrop_path),axisY:65,containerClassname:{height:"600px",marginTop:"1rem",boxShadow:"unset"},children:Object(S.jsxs)(d.a,{className:e.mainMovieContainer,direction:"column",justifyContent:"space-evenly",children:[Object(S.jsx)(d.b,{children:Object(S.jsx)(l.a,{variant:"h1",color:"textPrimary",align:"left",style:{fontSize:"50px"},children:"Top ".concat(function(){if(Object.values(B).length){var t=B[A];return t?t.name.toLowerCase():A}return Object(S.jsx)(o.a,{width:100})}()," series")})}),Object(S.jsx)(d.b,{style:{marginBottom:".5rem"},children:Object(S.jsx)(p.a,{data:E,wrapperClassName:e.movieDetailsWrapper})})]})})}),Object(S.jsx)(d.a,{direction:"column",justifyContent:"center",alignItems:"center",className:e.mainShadow,children:Object(S.jsxs)(d.a,{direction:"column",justifyContent:"center",alignItems:"center",className:e.listingWrapper,children:[Object(S.jsx)(s.a,{sx:{width:"100%",maxWidth:"90%"},children:function(){if(Y.length||Object.values(B).length)return Object(r.a)(Y).map((function(t,e){return Object(S.jsx)(f.a.Fragment,{children:Object(S.jsx)(y.a,{data:t,globalGenres:B,type:"tv"})},e)}))}()}),Object(S.jsx)(d.b,{marginBottom:1,marginTop:4,children:Object(S.jsx)(h.a,{title:"Load more",disabled:C,onClick:function(){var t=I+1;N(!0),W(t),L(t).then((function(){return N(!1)}))},buttonClassName:e.loadMoreButton})}),Object(S.jsx)(d.b,{marginTop:2,style:{width:"90%"},children:C&&Array.from(Array(5)).map((function(t,e){return Object(S.jsx)(o.a,{height:30},e)}))})]})})]})})]})}}}]);
//# sourceMappingURL=8.39c3367c.chunk.js.map