(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(1),o=t(6),c=t.n(o),s=(t(11),t(12),t(3)),r=t.n(s),a=t(4),m=t(2),d=(t(14),t(15),t.p+"static/media/pokebola-img.35b89336.png"),u=t(0),p=function(e){function n(e){document.getElementById("item-1").style="background: white",document.getElementById("item-2").style="background: white",document.getElementById("item-3").style="background: white",document.getElementById("item-4").style="background: white",document.getElementById("item-5").style="background: white",document.getElementById("item-6").style="background: white",document.getElementById("item-7").style="background: white",document.getElementById("item-8").style="background: white",document.getElementById("item-9").style="background: white",document.getElementById("item-10").style="background: white",document.getElementById(e||"item-1").style="background: red; color: white"}return Object(i.useEffect)((function(){n()}),[!0]),Object(u.jsxs)("div",{id:"navegation",children:[Object(u.jsxs)("div",{id:"user",children:[Object(u.jsx)("img",{src:d}),Object(u.jsx)("span",{children:"POKEDEX"})]}),Object(u.jsx)("div",{id:"names",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{id:"item-1",onClick:function(){n("item-1"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[0]),e.getNameFromMain(e.pokemonsNamesFromMain[0])},children:[e.pokemonsIndicesFromMain[0],"# ",e.pokemonsNamesFromMain[0]]}),Object(u.jsxs)("li",{id:"item-2",onClick:function(){n("item-2"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[1]),e.getNameFromMain(e.pokemonsNamesFromMain[1])},children:[e.pokemonsIndicesFromMain[1],"# ",e.pokemonsNamesFromMain[1]]}),Object(u.jsxs)("li",{id:"item-3",onClick:function(){n("item-3"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[2]),e.getNameFromMain(e.pokemonsNamesFromMain[2])},children:[e.pokemonsIndicesFromMain[2],"# ",e.pokemonsNamesFromMain[2]]}),Object(u.jsxs)("li",{id:"item-4",onClick:function(){n("item-4"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[3]),e.getNameFromMain(e.pokemonsNamesFromMain[3])},children:[e.pokemonsIndicesFromMain[3],"# ",e.pokemonsNamesFromMain[3]]}),Object(u.jsxs)("li",{id:"item-5",onClick:function(){n("item-5"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[4]),e.getNameFromMain(e.pokemonsNamesFromMain[4])},children:[e.pokemonsIndicesFromMain[4],"# ",e.pokemonsNamesFromMain[4]]}),Object(u.jsxs)("li",{id:"item-6",onClick:function(){n("item-6"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[5]),e.getNameFromMain(e.pokemonsNamesFromMain[5])},children:[e.pokemonsIndicesFromMain[5],"# ",e.pokemonsNamesFromMain[5]]}),Object(u.jsxs)("li",{id:"item-7",onClick:function(){n("item-7"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[6]),e.getNameFromMain(e.pokemonsNamesFromMain[6])},children:[e.pokemonsIndicesFromMain[6],"# ",e.pokemonsNamesFromMain[6]]}),Object(u.jsxs)("li",{id:"item-8",onClick:function(){n("item-8"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[7]),e.getNameFromMain(e.pokemonsNamesFromMain[7])},children:[e.pokemonsIndicesFromMain[7],"# ",e.pokemonsNamesFromMain[7]]}),Object(u.jsxs)("li",{id:"item-9",onClick:function(){Number(e.pokemonsIndicesFromMain[8])<1119?(n("item-9"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[8]),e.getNameFromMain(e.pokemonsNamesFromMain[8])):alert("Is empty")},children:[e.pokemonsIndicesFromMain[8],"# ",e.pokemonsNamesFromMain[8]]}),Object(u.jsxs)("li",{id:"item-10",onClick:function(){Number(e.pokemonsIndicesFromMain[9])<1119?(n("item-10"),e.getIndiceFromMain(e.pokemonsIndicesFromMain[9]),e.getNameFromMain(e.pokemonsNamesFromMain[9])):alert("Is empty")},children:[e.pokemonsIndicesFromMain[9],"# ",e.pokemonsNamesFromMain[9]]})]})}),Object(u.jsxs)("div",{id:"buttons",children:[Object(u.jsx)("div",{className:"btn",onClick:function(){e.beforeFucntionFromMain()}}),Object(u.jsx)("div",{className:"btn",onClick:function(){e.nextFucntionFromMain()}})]})]})},l=(t(17),t.p+"static/media/unknown.590ca13f.jpg"),j=function(e){var n=Object(i.useState)(1),t=Object(m.a)(n,2),o=t[0],c=t[1],s=e.nameFromMain||"BULBASAUR",d="".concat(e.indiceFromMain),p=Object(i.useState)("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"),j=Object(m.a)(p,2),b=j[0],k=j[1],h=Object(i.useState)("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"),F=Object(m.a)(h,2),M=F[0],f=F[1],g=Object(i.useState)(["grass","poison"]),O=Object(m.a)(g,2),x=O[0],I=O[1],v=Object(i.useState)("A strange seed was planted on its back at birth.\fThe plant sprouts and grows with this POK\xe9MON."),N=Object(m.a)(v,2),y=N[0],w=N[1];Object(i.useEffect)(function(){var n=Object(a.a)(r.a.mark((function n(){var t,i,o,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e.nameFromMain));case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,I(x=i.types.map((function(e){return e.type.name}))||[]),k(b=i.sprites.front_default||l),f(b=i.sprites.front_shiny||l),n.next=12,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(e.nameFromMain));case 12:return o=n.sent,n.next=15,o.json();case 15:return c=n.sent,w(c.flavor_text_entries[0].flavor_text),n.abrupt("return",!0);case 20:n.prev=20,n.t0=n.catch(0),console.error(n.t0+" erro");case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(){return n.apply(this,arguments)}}(),[e]);return Object(u.jsxs)("div",{id:"screen",children:[Object(u.jsx)("div",{id:"name-title",children:Object(u.jsx)("h1",{children:"".concat(d||"#1 - ").concat(s)})}),Object(u.jsxs)("div",{id:"images",children:[Object(u.jsxs)("div",{className:"img-childrens",children:[Object(u.jsx)("img",{src:b}),Object(u.jsx)("span",{children:"normal"})]}),Object(u.jsxs)("div",{className:"img-childrens",children:[Object(u.jsx)("img",{src:M}),Object(u.jsx)("span",{children:"shyne"})]})]}),Object(u.jsxs)("div",{id:"informations",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Type:"}),Object(u.jsx)("span",{children:x.join(", ")})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Description:"}),Object(u.jsx)("span",{children:y})]})]}),Object(u.jsxs)("div",{id:"pokedex-footer",children:[Object(u.jsx)("input",{type:"number",min:"1",max:"1118",placeholder:"Type n\xba",onChange:function(e){return function(e){c(o=Number(e.target.value))}(e)}}),Object(u.jsx)("button",{onClick:function(){e.goToFromMain(o)},children:"Go to"})]})]})},b=function(){var e=Object(i.useState)([]),n=Object(m.a)(e,2),t=n[0],o=n[1],c=Object(i.useState)([]),s=Object(m.a)(c,2),d=s[0],l=s[1],b=Object(i.useState)(0),k=Object(m.a)(b,2),h=k[0],F=k[1],M=Object(i.useState)(""),f=Object(m.a)(M,2),g=f[0],O=f[1],x=Object(i.useState)(""),I=Object(m.a)(x,2),v=I[0],N=I[1];Object(i.useEffect)(function(){var e=Object(a.a)(r.a.mark((function e(){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=".concat(h.toString(),"."));case 3:return n=e.sent,e.next=6,n.json();case 6:return i=e.sent,o(t=i.results.map((function(e){return e.name}))),l(d=[h+1,h+2,h+3,h+4,h+5,h+6,h+7,h+8,h+9,h+10]),e.abrupt("return",!0);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0+" erro");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),[h]);function y(){return(y=Object(a.a)(r.a.mark((function e(n){var t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>0&&n<1119)){e.next=18;break}return e.prev=1,e.next=4,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n.toString()));case 4:return t=e.sent,e.next=7,t.json();case 7:i=e.sent,O(g=i.forms[0].name),N(v="#".concat(n," - ")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Your Pok\xe9mon is a variation. You will be redirected to the page, but you need to click on it to display the Pok\xe9mon");case 15:0==n.toString().split("").reverse()[0]?F(h=10*Math.floor(n/10)-1):F(h=10*Math.floor(n/10)),e.next=19;break;case 18:alert("ERRO: Number Invalid!!");case 19:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{id:"pokedex",children:[Object(u.jsx)(p,{pokemonsNamesFromMain:t,pokemonsIndicesFromMain:d,nextFucntionFromMain:function(){h<1110&&F(h+=10)},beforeFucntionFromMain:function(){h>0&&F(h-=10)},getNameFromMain:function(e){O(g=e)},getIndiceFromMain:function(e){N(v="#".concat(e," - "))},indiceSelectedFromMain:v}),Object(u.jsx)(j,{nameFromMain:g,indiceFromMain:v,goToFromMain:function(e){return y.apply(this,arguments)}})]})},k=(t(18),t.p+"static/media/logo.53025fe0.png"),h=function(){return Object(u.jsx)("header",{children:Object(u.jsx)("img",{src:k})})};var F=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{}),Object(u.jsx)(b,{})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),i(e),o(e),c(e),s(e)}))};c.a.render(Object(u.jsx)(F,{}),document.getElementById("root")),M()}],[[19,1,2]]]);
//# sourceMappingURL=main.fd912c59.chunk.js.map