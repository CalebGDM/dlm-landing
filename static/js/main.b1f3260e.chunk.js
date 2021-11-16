(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,d,s,l=t(1),m=t.n(l),p=t(13),h=t.n(p),g=t(33),x=t(9),b=t(3),j=t(5),u=t(2),f=t.p+"static/media/Logo.a5fc4856.svg",w=t(14),O=t(0);u.c.div(i||(i=Object(b.a)(["\n    position: fixed;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    background: #021932;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacity: ",";\n    top: ",";\n"])),(function(n){return n.isOpen?"1":"0"}),(function(n){return n.isOpen?"0":"-100%"})),u.c.div(a||(a=Object(b.a)(["\n    background-image: url(",");\n    background-size: contain;\n    height: 70px;\n    width: 159px;\n    position: absolute;\n    top: 0.5rem;\n    left: 1.5rem;\n    \n"])),f),u.c.div(r||(r=Object(b.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]))),Object(u.c)(j.FaTimes)(o||(o=Object(b.a)(["\n    color: white;\n"]))),u.c.div(c||(c=Object(b.a)(["\n\n"]))),u.c.div(d||(d=Object(b.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    gird-template-rows: repeat(3, 80px);\n    text-align: center;\n\n    @media screen and (max-width: 480px){\n        grid-template-rows: repeat(3, 60px);\n    }\n    \n    \n"]))),u.c.div(s||(s=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    text-decoration: none;\n    \n    padding: 2rem;\n    font-size: 1.5rem;\n    list-style: none;\n    color: white;\n    cursor: pointer;\n    transition: 0.2 ease-in-out;\n    \n    //border-bottom: 2px solid #64120E;\n   \n\n    &:hover{\n        transform: translateY(-2px);\n        background: #064C96;\n        \n    }\n"])));var v,y=u.c.section.withConfig({displayName:"Hero__Section",componentId:"sc-dnytg9-0"})(["height:100vh;max-height:1100px;position:relative;overflow:hidden;"]),C=u.c.div.withConfig({displayName:"Hero__Wrapper",componentId:"sc-dnytg9-1"})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:absolute;"]),A=u.c.div.withConfig({displayName:"Hero__Slide",componentId:"sc-dnytg9-2"})(["z-index:1;width:100%;height:100%;"]),_=u.c.div.withConfig({displayName:"Hero__Slider",componentId:"sc-dnytg9-3"})(["position:absolute;top:0;left:0;width:100%;heigth:100%;display:flex;align-item:center;&::before{content:'';position:absolute;z-index:2;width:100%;height:100vh;bottom:0vh;left:0;overflow:hidden;opacity:0.4;}"]),k=(u.c.div.withConfig({displayName:"Hero__Gradient",componentId:"sc-dnytg9-4"})(["width:100vw;height:100vh;background:linear-gradient(90deg,rgba(0,0,0,0.7) 21.41%,rgba(0,0,0,0) 80.8%);z-index:10;"]),u.c.img.withConfig({displayName:"Hero__SImage",componentId:"sc-dnytg9-5"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;"])),z=u.c.div.withConfig({displayName:"Hero__Content",componentId:"sc-dnytg9-6"})(["position:relative;z-index:10000;display:flex;align-items:left;flex-direction:column;max-width:1600px;width:50%;color:#fff;margin-top:40vh;margin-left:20vw;@media screen and (max-width:760px){margin-left:20vw;margin-top:20vh;}"]),N=u.c.h1.withConfig({displayName:"Hero__Title",componentId:"sc-dnytg9-7"})(["font-size:clamp(3rem,1vw,1rem);font-weight:400;align-text:left;text-transform:uppercase;@media screen and (max-width:760px){text-align:center;}"]),I=u.c.p.withConfig({displayName:"Hero__Subtitle",componentId:"sc-dnytg9-8"})(["color:#FB564E;font-size:30px;font-weight:400;@media screen and (max-width:600px){text-align:center;}"]),F=u.c.div.withConfig({displayName:"Hero__SliderButtons",componentId:"sc-dnytg9-9"})(["position:absolute;width:95%;right:50px;display:flex;z-index:10;align-items:center;justify-content:space-between;@media screen and (max-width:980px){width:90%;}@media screen and (max-width:760px){width:80vw;bottom:50px;justify-content:center;}"]),S=Object(u.b)(v||(v=Object(b.a)(["\n    width: 50px;\n    heigt: 50px;\n    font-size: 50px;\n    color: white;\n    cursor: pointer;\n    margin-right: 1rem;\n    user-select: none;\n    transition: 0.3s;\n\n    &:hover {\n        color: #FED5D3;\n        transform: scale(1.5);\n\n    }\n"]))),T=Object(u.c)(j.FaArrowAltCircleLeft).withConfig({displayName:"Hero__PrevArrow",componentId:"sc-dnytg9-10"})(["",""],S),L=Object(u.c)(j.FaArrowAltCircleRight).withConfig({displayName:"Hero__NextArrow",componentId:"sc-dnytg9-11"})([""," "],S);var H,M,E,R,B,P=function(n){var e=n.slides,t=Object(l.useState)(0),i=Object(x.a)(t,2),a=i[0],r=i[1],o=e.length,c=Object(l.useRef)(null);return Object(l.useEffect)((function(){return c.current=setTimeout((function(){r((function(n){return n===o-1?0:n+1}))}),9e3),function(){c.currentSlide&&clearTimeout(c.currentSlide)}}),[a,o]),!Array.isArray(e)||e.length<=0?null:Object(O.jsx)(y,{children:Object(O.jsxs)(C,{children:[e.map((function(n,e){return Object(O.jsx)(A,{children:e===a&&Object(O.jsxs)(_,{children:[Object(O.jsx)(k,{src:n.image,alt:n.alt}),Object(O.jsxs)(z,{children:[Object(O.jsx)(N,{children:n.title}),Object(O.jsx)(I,{children:n.subtitle})]})]})})})),Object(O.jsxs)(F,{children:[Object(O.jsx)(T,{onClick:function(){c.currentSlide&&clearTimeout(c.currentSlide),r(0===a?o-1:a-1),console.log(a)}}),Object(O.jsx)(L,{onClick:function(){c.currentSlide&&clearTimeout(c.currentSlide),r(a===o-1?0:a+1),console.log(a)}})]})]})})},D=u.c.div(H||(H=Object(b.a)(["\n    margin-bottom: 10vh;  \n\n"]))),Y=u.c.div(M||(M=Object(b.a)(["\n\n"]))),G=u.c.img(E||(E=Object(b.a)(["\n    position: absolute;\n    top: 1;\n    left: 0;\n    width: 100vw;\n    height: 40vh;\n    object-fit: cover;\n    \n"]))),J=u.c.div(R||(R=Object(b.a)(["\n    position: relative;\n    z-index: 100; \n    display: flex;\n    align-items: left;\n    flex-direction: column;\n    max-width: 1600px;\n    width: 50%;\n    color: #fff;\n    margin-left: 29vw;\n\n    @media screen and (max-width: 760px){\n        margin-left: 20vw;\n        width: 70%;\n    }\n\n    @media screen and (max-width: 560px){\n        margin-left: 20px;\n        width: 90%;\n    }\n"]))),q=u.c.p(B||(B=Object(b.a)(["\n    margin-top: 5vh;\n    font-size: 25px;\n    text-shadow: 0px 0px 3px black;\n    text-align: center;\n    \n\n    @media screen and (max-width: 760px){\n        width: 100%;\n        margin-bottom: -10vh;\n        margin-top: 2vh;\n    }\n\n    @media screen and (max-width: 360px){\n        margin-bottom: -10vh;\n        margin-top: 10px;\n    }\n\n    @media screen and (max-width: 330px){\n        margin-bottom: -10vh;\n        margin-top: 1vh;\n        font-size: 23px;\n    }\n\n    \n"])));var V,U=function(n){var e=n.info;return Object(O.jsx)(D,{children:e.map((function(n,t){return Object(O.jsxs)(Y,{children:[Object(O.jsx)(G,{src:n.image,alt:e.alt}),Object(O.jsx)(J,{children:Object(O.jsx)(q,{children:n.frase})})]})}))})},W=u.c.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-18you4c-0"})(["height:70px;justify-content:space-between;align-items;center;padding:0rem 2rem;z-index:1000;position:fixed;width:100%;display:flex;background:",";"],(function(n){return n.active?"#222223":"none"})),Z=Object(u.b)(V||(V=Object(b.a)(["\n    font-family: 'Rubik', sans-serif;\n    font-size: 23px;\n    color: #fff;\n    display: flex;\n    align-itmes: center;\n    padding: 1rem 1rem;\n    height: 90%;\n    cursor: pointer;\n    text-decoration: none;\n    &:hover{\n        transform: translateY(-2px);\n        color: #FC807A;\n    }\n"]))),K=u.c.div.withConfig({displayName:"Navbar__NavLogo",componentId:"sc-18you4c-1"})(["background-image:url(",");background-size:contain;height:70px;width:159px;&:hover{transform:translateY(-2px);}@media screen and (max-width:760px){margin-left:30%;}"],f),Q=(Object(u.c)(j.FaBars).withConfig({displayName:"Navbar__MenuBar",componentId:"sc-18you4c-2"})(["display:none;color:white;@media screen and (max-width:760px){display:block;color:white;font-size:1.5rem;cursor:pointer;position:abolute;top:0;right:0;transform:translate(10%,100%);}&:hover{color:#FC807A;}"]),u.c.div.withConfig({displayName:"Navbar__NavMenu",componentId:"sc-18you4c-3"})(["display:flex;align-items:center;margin-right:-28;@media screen and (max-width:760px){display:none;}"]));var X,$,nn,en,tn,an,rn,on,cn,dn=function(n){n.toggle;var e=w.animateScroll,t=Object(l.useState)(!1),i=Object(x.a)(t,2),a=i[0],r=i[1],o=u.c.a.withConfig({displayName:"Navbar__NavMenuLinks",componentId:"sc-18you4c-4"})(["",""],Z),c=function(){e.scrollToTop()};return window.addEventListener("scroll",(function(){window.scrollY>=600?r(!0):r(!1)})),Object(O.jsxs)(W,{active:a,children:[Object(O.jsx)(K,{onClick:c}),Object(O.jsxs)(Q,{children:[Object(O.jsx)(o,{onClick:c,children:"Inicio"}),Object(O.jsx)(o,{onClick:function(){e.scrollTo(860)},children:"Nuestro Trabajo"}),Object(O.jsx)(o,{onClick:function(){e.scrollTo(1970)},children:"Cont\xe1ctanos"})]})]})},sn=t.p+"static/media/Imagen2.1127c219.png",ln=u.c.div(X||(X=Object(b.a)(["\n  height: auto;\n\n  position: relative;\n  \n\n  align-items: center;\n  justify-content: center;\n  background: #222223;\n"]))),mn=u.c.h1($||($=Object(b.a)(["\n  color: #fa2c22;\n  text-align: center;\n  font-size: 25;\n  margin-top: 1rem;\n"]))),pn=u.c.div(nn||(nn=Object(b.a)(["\n  display: grid;\n  height: auto;\n  width: auto;\n  align-content: center;\n  grid-template-columns: auto auto;\n  grid-gap: 10px;\n  padding: 2rem;\n  \n  @media screen and (max-width: 900px) {\n    grid-template-columns: auto;\n    justify-content: center;\n  }\n"]))),hn=u.c.div(en||(en=Object(b.a)(["\n  margin-left: 5rem;\n  width: 510px;\n  min-width: 310px;\n  padding-bottom: 1rem;\n  background: white;\n  border-radius: 10px;\n  margin-bottom: 4rem;\n\n  @media screen and (max-width: 1300px) {\n    margin-left: 1.5rem;\n  }\n\n  @media screen and (max-width: 1100px) {\n    width: 410px;\n    margin-left: 1rem;\n  }\n\n  @media screen and (max-width: 460px) {\n    width: 250px;\n    min-width: 90px;\n    margin-left: 0rem;\n  }\n"]))),gn=u.c.img(tn||(tn=Object(b.a)(["\n  width: 100%;\n  heigth: 50%;\n"]))),xn=u.c.div(an||(an=Object(b.a)(["\n  display: column;\n  margin-left: 3rem;\n  margin-right: 3rem;\n  margin-top: 0.5rem;\n  \n"]))),bn=u.c.div(rn||(rn=Object(b.a)(["\n    display: flex;\n    align-content: center;\n    \n"]))),jn=Object(u.c)(j.FaCheckCircle)(on||(on=Object(b.a)(["\n  color: #0a7efa;\n  margin-right: 0.5rem;\n  margin-top: 3px;\n"]))),un=u.c.p(cn||(cn=Object(b.a)([""])));var fn,wn,On=function(n){var e=n.work;return Object(O.jsxs)(ln,{children:[Object(O.jsx)(mn,{children:"Conce nuestro tabajo"}),Object(O.jsx)(pn,{children:e.map((function(n,e){return Object(O.jsxs)(hn,{children:[Object(O.jsx)(gn,{src:n.image}),Object(O.jsx)(xn,{children:n.arreglos.map((function(n,e){return Object(O.jsxs)(bn,{children:[Object(O.jsx)(jn,{}),Object(O.jsx)(un,{children:n})]})}))})]})}))})]})},vn=t.p+"static/media/Imagen1.ea98c621.png",yn=t.p+"static/media/Imagen3.b4369abe.png",Cn=[{title:"Expertos en lo que hacemos",subtitle:"Laminado y pintura de calidad",image:vn,alt:"Taller"},{title:"Nuestro trabajo habla por nosotros",subtitle:"Resultado grarantizado",image:sn,alt:"Taller"},{title:"Trabajos de calidad",subtitle:"Los mejores en lo que hacemos",image:yn,alt:"Taller"}],An=t.p+"static/media/Imagen4.48b1972f.png",_n=[{frase:"Nosotros nos dedicamos al cuidado, reparaci\xf3n y mantenimiento estructural de Autom\xf3viles, Pick Up, Rzr, Motocicletas.",image:An,alt:"Taller"}],kn=[{icon:"FaPhoneAlt",text:"312 167 7084"},{icon:"FaLocationArrow",text:"JOS\xc9 G. ALCARAZ #2134 COL. SANTA MARIA, COLIMA"},{icon:"FaPaperPlane",text:"DLMCOLLISIONCENTER @ GMAIL.COM"},{icon:"FaInstagram",text:"@dlm_collisioncenter"}],zn=Object(u.a)(fn||(fn=Object(b.a)(["\n    \n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Manrope', sans-serif;\n    }\n\n    html, body {\n        overflow-x: hidden;\n       \n    }\n"]))),Nn=[{image:vn,arreglos:["Arreglo","Arreglo","Arreglo"]},{image:sn,arreglos:["Arreglo","Arreglo","Arreglo"]},{image:yn,arreglos:["Arreglo","Arreglo","Arreglo"]},{image:An,arreglos:["Arreglo","Arreglo","Arreglo"]}],In=t.p+"static/media/Image5.401026a8.png",Fn=u.c.button(wn||(wn=Object(b.a)(["\n    width: 100%;\n    padding: 12px 20px;\n    background: #FA2C22;\n    border-color: transparent;\n    border-radius: 4px;\n    color: white;\n"])));var Sn,Tn,Ln=function(n){var e=n.placeholder;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Fn,{type:"submit",children:e})})},Hn=u.c.div(Sn||(Sn=Object(b.a)(["\n   \n"]))),Mn=u.c.input(Tn||(Tn=Object(b.a)(["\n    background: transparent;\n    color: white;\n    outline: none;\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 2px solid #fff;\n    border-radius: 4px;\n    box-sizing: border-box;\n    :focus{\n        border: 3px solid #fff;\n    }\n    ::placeholder {\n        color: #fff;\n    }\n"])));var En,Rn=function(n){var e=n.type,t=n.placeholder,i=n.value,a=n.setValue;return Object(O.jsx)(Hn,{children:Object(O.jsx)(Mn,{type:e,placeholder:t,value:i,onChange:a})})},Bn=u.c.textarea(En||(En=Object(b.a)(["\n    width: 100%;\n    outline: none;\n    background: transparent;\n    border: 2px solid #fff;\n    border-radius: 4px;\n    color: white;\n    padding: 12px;\n    margin: 8px 0;\n    \n    :focus{\n        border: 2px solid #fff;\n    }\n\n    ::placeholder {\n        color: white;\n    }\n"])));var Pn,Dn,Yn,Gn,Jn,qn,Vn,Un,Wn,Zn=function(n){var e=n.rows,t=n.placeholder,i=n.value,a=n.setValue;return console.log(t),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Bn,{rows:e,placeholder:t,value:i,onChange:a})})},Kn=u.c.section(Pn||(Pn=Object(b.a)(["\n    height: auto;\n    min-height: 100vh;\n    width: 100vw;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    background-size: cover;\n    object-fit: cover;\n    background-image: url(",")\n    \n"])),In),Qn=u.c.h1(Dn||(Dn=Object(b.a)(["\n    color: #fa2c22;\n    text-align: center;\n    font-size: 35px;\n    padding-top: 2rem;\n"]))),Xn=u.c.div(Yn||(Yn=Object(b.a)(["\n    margin: 9rem;\n    display: grid;\n    height: auto;\n    width: auto;\n    align-content: center;\n    grid-template-columns: auto auto;\n    grid-gap: 10px;\n    padding: 2rem;\n    \n\n    @media screen and (max-width: 900px) {\n        grid-template-columns: auto;\n        justify-content: center;\n        margin-top: 1rem;\n    }\n\n    @media screen and (max-width: 360px) {\n        margin-left: 8rem;\n    }\n\n    \n\n"]))),$n=u.c.form(Gn||(Gn=Object(b.a)(["\n    width: 450px;\n    height: auto;\n    margin-bottom: 20px;\n    \n    @media screen and (max-width: 900px) {\n        width: 350px;\n    }\n\n    @media screen and (max-width: 360px) {\n        width: 280px;\n       \n    }\n\n    \n"]))),ne=u.c.div(Jn||(Jn=Object(b.a)(["\n\n"]))),ee=u.c.h3(qn||(qn=Object(b.a)(["\n    font-size: 40;\n    color: white;\n    font-wight: 900;\n    text-align: center;\n    margin-bottom: 10px;\n"]))),te=u.c.div(Vn||(Vn=Object(b.a)(["\n    display: flex;\n    margin-left: 6rem;\n    margin-bottom: 15px;\n    color: white;\n    align-items: center;\n    \n    width: 100%;\n\n    @media screen and (max-width: 900px) {\n       margin-left: 0rem;\n       \n    }\n\n    \n\n    @media screen and (max-width: 360px) {\n        \n        width: 60%;\n        \n     }\n\n"]))),ie=u.c.div(Un||(Un=Object(b.a)(["\n    margin-le\n    font-size: 20px;\n"]))),ae=u.c.h1(Wn||(Wn=Object(b.a)(["\n    color: white;\n    font-size: 20px;\n    font-weight: bold;\n    margin-left: 20px;  \n    \n    position: relative;\n    @media screen and (max-width: 900px) {\n        \n        font-size:15;\n    }  \n\n    @media screen and (max-width: 360px) {\n        font-size:15;\n    }  \n"]))),re=function(n){var e=n.name,t=j[e];return t?Object(O.jsx)(t,{}):Object(O.jsx)(j.FaBeer,{})};var oe,ce,de,se,le=function(n){var e=n.contactos;return console.log(e[0].icon),Object(O.jsxs)(Kn,{children:[Object(O.jsx)(Qn,{children:"Cont\xe1ctanos"}),Object(O.jsxs)(Xn,{children:[Object(O.jsxs)($n,{children:[Object(O.jsx)(Rn,{type:"text",placeholder:"Nombre"}),Object(O.jsx)(Rn,{type:"email",placeholder:"Correo electr\xf3nico"}),Object(O.jsx)(Zn,{placeholder:"Mensaje...",rows:7}),Object(O.jsx)(Ln,{placeholder:"Enviar"})]}),Object(O.jsxs)(ne,{children:[Object(O.jsx)(ee,{children:"Informaci\xf3n de contacto"}),e.map((function(n,e){return Object(O.jsxs)(te,{children:[Object(O.jsx)(ie,{children:Object(O.jsx)(re,{name:n.icon})}),Object(O.jsx)(ae,{children:n.text})]})}))]})]})]})},me=u.c.section(oe||(oe=Object(b.a)(["\n    width: 100%;\n    height: 60px;\n    position: relative;\n    \n    background: #222223;    \n\n    \n"]))),pe=u.c.div(ce||(ce=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    padding-top: 1rem;\n"]))),he=Object(u.c)(j.FaCopyright)(de||(de=Object(b.a)(["\n    color: white;\n    font-size: 20px;\n    margin-right: 0.5rem;\n"]))),ge=u.c.p(se||(se=Object(b.a)(["\n    color: white;\n"])));var xe,be,je=function(){return Object(O.jsx)(me,{children:Object(O.jsxs)(pe,{children:[Object(O.jsx)(he,{}),Object(O.jsxs)(ge,{children:["Copyright ",(new Date).getFullYear()]})]})})},ue=u.c.div(xe||(xe=Object(b.a)(["\n    position: relative;\n    width: 100%;\n    height: auto;\n\n    @media screen and (max-width: 890px) {\n        margin-top: -21vh;\n      }\n"]))),fe=u.c.iframe(be||(be=Object(b.a)(["\n    width: 100%;\n    height: 200px;\n"])));var we=function(){return Object(O.jsx)(ue,{children:Object(O.jsx)(fe,{src:"https://maps.google.com/maps?width=100%25&height=600&hl=es&q=C.%20Jos%C3%A9%20G.%20Alcaraz%202134,%20Real%20Vista%20Hermosa,%2028028%20Colima,%20Col.+(Mi%20nombre%20de%20egocios)&t=&z=14&ie=UTF8&iwloc=B&output=embed"})})};var Oe=function(){var n=Object(l.useState)(!1),e=Object(x.a)(n,2),t=e[0],i=e[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(zn,{}),Object(O.jsx)(dn,{toggle:function(){i(!t),console.log(t)}}),Object(O.jsx)(P,{slides:Cn}),Object(O.jsx)(U,{info:_n}),Object(O.jsx)(On,{work:Nn}),Object(O.jsx)(le,{contactos:kn}),Object(O.jsx)(we,{}),Object(O.jsx)(je,{})]})},ve=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};h.a.render(Object(O.jsx)(m.a.StrictMode,{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(Oe,{})})}),document.getElementById("root")),ve()}},[[55,1,2]]]);
//# sourceMappingURL=main.b1f3260e.chunk.js.map