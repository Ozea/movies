(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[21],{444:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r}));var a=i(196),n=function(e){return"".concat(a.m).concat(e)},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,a=[];return e.slice(0,t).forEach((function(e,t,n){if(t%i===0||0===t){var r=n.slice(t,t+i);r.length&&a.push(r)}})),a}},457:function(e,t,i){"use strict";var a=i(15),n=i(2);t.a=Object(a.a)(Object(n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},476:function(e,t,i){"use strict";var a=i(343),n=Object(a.a)();t.a=n},543:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return C}));var a=i(11),n=i(0),r=i(342),c=i(62),s=i(312),o=i(87),l=i(316),d=i(244),b=i(265),j=i(24),u=i(457),h=i(476),p=i(102),x=i.n(p),m=i(444),g=i(196),f=i.p+"static/media/wallet.3f3bd4fa.svg",O=i.p+"static/media/scanner.aa6b3a76.svg",v=i(446),w=i(168),k=i(2),y=Object(r.a)((function(e){return{box:{display:"flex",justifyContent:"center",background:e.palette.white,alignItems:"center",width:"125px",height:"75px",borderRadius:"8px",color:"black",border:"2px solid white",cursor:"pointer","&.selected":{border:"2px solid blue"},"& img":{width:"100%",height:"100%",objectFit:"contain"}},form:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",padding:"2rem 2.5rem","& .MuiTextField-root":{width:"25ch",margin:"0 .75rem 1.25rem",color:"#1f2739"},"& .MuiInputLabel-root":{color:"#1f2739"},"& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{color:"#1f2739"},"& .css-19kvinv-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgb(0 0 0 / 61%)"}},submitBtn:{margin:"1.5rem .5rem 0"},details:{display:"flex",position:"relative",width:"350px",minHeight:"425px","& > img":{width:"100%",objectFit:"cover"}},checkoutDetails:{position:"absolute",bottom:"0",left:"0",width:"100%",minHeight:"75%",background:"linear-gradient(to bottom, transparent 0%, black 100%)","& img":{width:"100%",height:"100%"}},img:{width:"100%",height:"300px","& img":{width:"100%",height:"100%",objectFit:"cover"}},seat:{width:"35px",height:"30px",borderRadius:"13px 13px 0 0",background:"#6bd8b4",position:"relative",cursor:"pointer",fontWeight:"bold"},bookingWrapper:{background:"white",position:"relative",width:"fit-content",alignItems:"center","&:before":{content:"''",width:"60px",height:"65px",borderRadius:"50%",background:"#0d0d0d",position:"absolute",top:"50%",left:"0",transform:"translate(-35px, -50%)",zIndex:1},"&:after":{content:"''",width:"60px",height:"65px",borderRadius:"50%",background:"#0d0d0d",position:"absolute",top:"50%",right:"0",transform:"translate(35px, -50%)",zIndex:1}}}}));function C(){var e=y(),t=Object(n.useState)("visa"),i=Object(a.a)(t,2),r=i[0],p=i[1],C=Object(w.c)((function(e){return e.booking})),I=Object(n.useState)(!0),B=Object(a.a)(I,2),M=B[0],N=B[1],F=Object(n.useState)(null),S=Object(a.a)(F,2),D=S[0],E=S[1],H=Object(j.h)().id,R=Object(j.g)(),q=[{name:"visa",src:"".concat("/movies","/assets/visa.svg")},{name:"paypal",src:"".concat("/movies","/assets/paypal.svg")}];console.log(C),Object(n.useEffect)((function(){Object(g.a)(H).then((function(e){return E(e.data)})).catch((function(e){return console.error(e)})).finally((function(){return N(!1)}))}),[H]);return M?Object(k.jsx)(s.a,{width:200,height:100}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{children:Object(k.jsx)("title",{children:"Booking Checkout"})}),Object(k.jsxs)(c.a,{p:5,pb:1,alignItems:"center",children:[Object(k.jsx)(b.a,{onClick:function(){return R.goBack()},title:"Back",icon:u.a}),Object(k.jsx)(o.a,{variant:"h3",color:"textSecondary",letterSpacing:.5,ml:2,children:"Booking Checkout"})]}),Object(k.jsxs)(h.a,{display:"flex",alignItems:"center",className:e.bookingWrapper,mt:8,mx:"auto",children:[Object(k.jsxs)(h.a,{component:"form",className:e.form,noValidate:!0,autoComplete:"off",mx:5,p:5,minWidth:525,minHeight:425,children:[Object(k.jsx)(h.a,{display:"flex",justifyContent:"center",gap:3,mb:2,children:q.map((function(t){var i,a=t.name,n=t.src;return Object(k.jsx)(h.a,{className:x()(e.box,{selected:r===a}),onClick:(i=a,function(){return p(i)}),children:Object(k.jsx)("img",{src:n,alt:a})},a)}))}),"visa"===r?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{children:Object(k.jsx)(l.a,{required:!0,id:"number",label:"Card Number",variant:"standard",type:"number"})}),Object(k.jsxs)(c.a,{children:[Object(k.jsx)(l.a,{required:!0,id:"expiration",label:"Expiration Date",variant:"standard",type:"number"}),Object(k.jsx)(l.a,{required:!0,id:"cvv",label:"CVV",variant:"standard",type:"number"})]}),Object(k.jsx)(c.a,{children:Object(k.jsx)(l.a,{required:!0,id:"name",label:"Card Holder Name",variant:"standard"})})]}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(c.a,{children:Object(k.jsx)(l.a,{required:!0,id:"email",label:"Email",variant:"standard",type:"email",sx:{margin:"0 auto !important"}})})}),Object(k.jsx)(d.a,{variant:"contained",fullWidth:!0,className:e.submitBtn,children:"Confirm Payment"})]}),Object(k.jsxs)(h.a,{className:e.details,borderRadius:1.5,children:[Object(k.jsx)("img",{src:Object(m.b)(D.backdrop_path),alt:"Poster"}),Object(k.jsxs)(h.a,{className:e.checkoutDetails,display:"flex",justifyContent:"flex-end",flexDirection:"column",p:3,children:[Object(k.jsxs)(h.a,{display:"flex",justifyContent:"space-between",children:[Object(k.jsx)(o.a,{variant:"h4",color:"textSecondary",children:"SCREEN 4"}),Object(k.jsxs)(h.a,{textAlign:"right",children:[Object(k.jsx)(o.a,{variant:"h5",children:"December, 7"}),Object(k.jsx)(o.a,{variant:"h5",children:"10:00 AM"})]})]}),Object(k.jsxs)(h.a,{children:[Object(k.jsx)(o.a,{variant:"h5",children:"Chosen seats"}),Object(k.jsx)(c.a,{children:C.seats.map((function(e){return e.id})).join(", ")})]}),Object(k.jsxs)(c.a,{justifyContent:"space-between",alignItems:"flex-end",gap:1,children:[Object(k.jsx)(h.a,{width:40,height:40,children:Object(k.jsx)("img",{src:f,alt:"wallet"})}),Object(k.jsx)(h.a,{width:50,height:50,children:Object(k.jsx)("img",{src:O,alt:"scanner"})})]})]})]})]})]})}}}]);
//# sourceMappingURL=21.d27176fc.chunk.js.map