(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),o=t(3),s=t.n(o),i=t(6),u=t(1),m=function(e,a){var t=Object(n.useState)(e),c=Object(u.a)(t,2),l=c[0],o=c[1],s=function(e){var a=e.target;o(a.value)};return[l,function(){return r.a.createElement("select",{className:"browser-default ",style:{marginBottom:"1rem"},value:l,onChange:s},a.map((function(e){var a=e.name,t=e.value;return r.a.createElement("option",{value:t,key:t},a)})))}]},v=t(2),d=t.n(v),b=function(e){var a=e.setCategoria,t=e.setPais,n=m("general",[{name:"Negocios",value:"business"},{name:"Entretenimiento",value:"entertainment"},{name:"General",value:"general"},{name:"Salud",value:"health"},{name:"Ciencia",value:"science"},{name:"Deportes",value:"sports"},{name:"Tecnolog\xeda",value:"technology"}]),c=Object(u.a)(n,2),l=c[0],o=c[1],s=m("us",[{name:"EEUU",value:"us"},{name:"Argentina",value:"ar"},{name:"Colombia",value:"co"},{name:"Cuba",value:"cu"},{name:"Rusia",value:"ru"},{name:"Irlanda",value:"ie"},{name:"Jap\xf3n",value:"jp"}]),i=Object(u.a)(s,2),v=i[0],b=i[1];return r.a.createElement("div",{className:"".concat(d.a.buscador," row")},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(l),t(v)}},r.a.createElement("h2",{className:d.a.heading},"Encuentra Noticias por Categor\xeda"),r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",className:"".concat(d.a["btn-block"]," btn-large amber darken-2"),value:"Buscar"})))))},f=function(e){var a=e.title;return r.a.createElement("nav",{className:"nav-wrapper light-blue darken-3"},r.a.createElement("a",{href:"#!",className:"brand-logo center"},a))},p=function(e){var a=e.noticia,t=a.title,n=a.source,c=a.description,l=a.url,o=a.urlToImage;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:null!==o?o:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsyP_nTkQN-lY7ZL6FisXW5OCmAcVFjpaY4g&usqp=CAU",alt:t}),r.a.createElement("span",{className:"card-title"},n.name)),r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,t),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn"},"Ver Noticia Completa"))))},E=function(e){var a=e.noticias;return r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(p,{key:e.url,noticia:e})})))};var g=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],v=o[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),g=p[0],h=p[1];return Object(n.useEffect)((function(){""!==t&&""!==m&&function(){var e=Object(i.a)(s.a.mark((function e(){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"6b0210adc67f4755afb9e3e358541478",a="https://newsapi.org/v2/top-headlines?category=".concat(encodeURI(t),"&country=").concat(encodeURI(m),"&apiKey=").concat(encodeURI("6b0210adc67f4755afb9e3e358541478")),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json(n);case 7:r=e.sent,c=r.articles,h(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,m]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Buscador de Noticias"}),r.a.createElement("div",{className:"container white"},r.a.createElement(b,{setCategoria:c,setPais:v}),r.a.createElement(E,{noticias:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,a,t){e.exports={heading:"Formulario_heading__21D29",buscador:"Formulario_buscador__wd5-v","btn-block":"Formulario_btn-block__3XlQ4"}},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0a5f82ae.chunk.js.map