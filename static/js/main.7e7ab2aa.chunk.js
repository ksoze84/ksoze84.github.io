(this.webpackJsonpscr_supervisor=this.webpackJsonpscr_supervisor||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(19),a=n(2),i=n.n(a),r=n(17),o=n.n(r),c=n(18),l=n(5),d=n(6),u=n(10),h=n(9),j=(n(26),n(11)),b=n.n(j),v=n(16),m=n(21),f=n(3),p=n(4),x=n(8),O=n(0);function g(e){return Object(O.jsx)("div",{className:"field",children:Object(O.jsxs)("p",{className:"control "+(e.icon?"has-icons-right":""),children:[Object(O.jsx)("input",{className:"input is-small "+e.addClass+" "+("number"===e.type?"has-text-right":""),onChange:e.onChange,value:e.value,disabled:e.disabled,type:"number"===e.type?"text":e.type,inputMode:"number"===e.type?"numeric":"text",pattern:"number"===e.type?"[0-9]+([,.][0-9]+)?":".*",placeholder:e.placeholder,name:e.name,onKeyUp:e.onKeyUp,onBlur:e.onBlur,onKeyDown:e.onKeyDown,list:e.list,max:e.max,size:e.size,readOnly:e.readOnly}),e.icon&&Object(O.jsx)("span",{className:"icon is-small is-right"+(e.onClickIcon?" icon-clickable":""),onClick:e.onClickIcon,children:Object(O.jsx)(f.a,{icon:e.icon})}),e.info]})})}var w=i.a.createContext({menu_is_active:!1,toggleActive:function(){}}),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).menuOnClick=function(){s.setState((function(e){return{menu_is_active:!e.menu_is_active}}))},s.state={menu_is_active:!1},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("nav",{className:"navbar is-fixed-top "+this.props.class_name,children:Object(O.jsx)("div",{className:"container is-max-desktop cnvb",children:Object(O.jsx)(w.Provider,{value:{menu_is_active:this.state.menu_is_active,toggleActive:this.menuOnClick},children:this.props.children})})})}}]),n}(i.a.Component);function k(e){return Object(O.jsx)(w.Consumer,{children:function(t){var n=t.menu_is_active,s=t.toggleActive;return Object(O.jsxs)("div",{className:"navbar-brand nvb",children:[e.children,!e.noBurger&&Object(O.jsxs)("div",{role:"button",className:"navbar-burger burger"+(!0===n?" is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu_",onClick:s,children:[Object(O.jsx)("span",{"aria-hidden":"true"}),Object(O.jsx)("span",{"aria-hidden":"true"}),Object(O.jsx)("span",{"aria-hidden":"true"})]})]})}})}function _(e){return Object(O.jsx)(w.Consumer,{children:function(t){return Object(O.jsx)("div",{className:"navbar-menu"+(!0===t.menu_is_active?" is-active":""),id:"navbarMenu_",onClick:function(){return e.closeOnClick?t.toggleActive():null},children:e.children})}})}function C(e){return Object(O.jsx)("div",{className:"cargando-container",children:Object(O.jsxs)("div",{className:"",children:[Object(O.jsxs)("div",{className:"fa-layers fa-fw",children:[Object(O.jsx)(f.a,{icon:p.c,transform:"grow-8"}),Object(O.jsx)(f.a,{icon:p.f,spin:!0,inverse:!0})]}),Object(O.jsxs)("span",{children:[" ",e.text?e.text:"Cargando"," ..."]})]})})}i.a.Component;var y=function(){function e(t){var n=this;Object(l.a)(this,e),this.abort=function(){n.controller&&n.controller.abort()},this.dataUrl=t||"https://sienet.epysa.cl/sie-android/Scripts/Inc/data.asp",this.ef_empty_nulls=!0,this.controller=null,this.timeout=null}return Object(d.a)(e,[{key:"data_url",set:function(e){this.dataUrl=e}},{key:"emptyNulls",set:function(e){this.ef_empty_nulls=!!e}},{key:"comillas",value:function(e){var t=Object(m.a)({},e);for(var n in t)"string"!==typeof t[n]||""!==t[n]&&null!==t[n]||!this.ef_empty_nulls?"string"===typeof t[n]&&"null"!==t[n].toLowerCase()&&(t[n]="'"+t[n]+"'"):t[n]="null";return t}},{key:"exec",value:function(){var e=Object(v.a)(b.a.mark((function e(t,n,s){var a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return e.next=3,new Promise((function(e){a.Timeout=setTimeout((function(){return e(a._exec(t,n))}),s)}));case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,this._exec(t,n);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,s){return e.apply(this,arguments)}}()},{key:"_exec",value:function(){var e=Object(v.a)(b.a.mark((function e(t,n){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.controller=new AbortController,null!==n&&void 0!==n||(n={}),(s=this.comillas(n)).procedure="EXEC "+t,e.next=6,fetch(this.dataUrl,{method:"POST",body:JSON.stringify(s),signal:this.controller.signal});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();var S=function e(t){var n=this;Object(l.a)(this,e),this.add=function(e,t){n[e]=t,fetch(x.a.session+"?action=add&label="+encodeURIComponent(e)+"&value="+encodeURIComponent(t))},fetch(x.a.session).then((function(e){return e.json()})).then((function(e){Object.assign(n,e)})).then((function(){t&&t(n)}))},E=n(20);function L(e){var t=e.data,n=new RegExp(e.filtro.toLowerCase(),"g"),s=e.filtroVendedor,a=e.mesonUser,i=t.map((function(t){return!(t.numero.toString().match(n)||t.cliente.toLowerCase().match(n)||t.fecha.match(n)||t.rut_cliente.toLowerCase().match(n))||s&&s!==t.vendedor.toLowerCase()?null:Object(O.jsx)(R,{item:t,superUser:e.superUser,mesonUser:a,onClick:function(){return e.onClick(t.numero)}},t.numero)}));return Object(O.jsx)("div",{className:"app-listado",children:i})}function R(e){var t=e.item,n="",s=JSON.parse(t.its),a=0,i=P(t.estado)[1];for(var r in s)++a>1&&(n+=" | "),n+=s[r].p;return Object(O.jsxs)("div",{className:"box",onClick:e.onClick,children:[Object(O.jsxs)("div",{className:"line-item",children:[Object(O.jsxs)("div",{className:"",children:[Object(O.jsxs)("strong",{className:i,children:["N\xb0 ",t.numero]}),(e.mesonUser||e.superUser)&&" ["+t.vendedor.toLowerCase()+"]"]}),Object(O.jsx)("div",{className:"text-overflow",children:Object(O.jsx)("strong",{className:i,children:t.estado})})]}),Object(O.jsxs)("div",{className:"line-item",children:[Object(O.jsx)("div",{className:"text-overflow",children:t.cliente}),Object(O.jsxs)("div",{children:["Q:",Object(O.jsx)("span",{className:"has-text-weight-bold",children:t.equipos})]})]}),Object(O.jsxs)("div",{className:"line-item",children:[Object(O.jsx)("div",{className:"text-overflow",children:n}),Object(O.jsx)("div",{className:"",children:Object(O.jsx)("small",{children:t.fecha_mod})})]})]})}function U(e){var t=e.data.filter((function(t){return t.estado===e.estado}));if(1===t.length){var n=t[0];return Object(O.jsxs)("span",{children:["[ N:",Object(O.jsx)("span",{className:"has-text-weight-bold",children:n.negocios}),", E:",Object(O.jsx)("span",{className:"has-text-weight-bold",children:n.equipos})," ]"]})}return Object(O.jsx)("span",{children:"[ N:0, E:0 ]"})}function A(e){var t=e.estado,n=P(t);return Object(O.jsx)("div",{className:"navbar-item",onClick:function(){return e.onSelectEstado(e.filtro_estado===t?"":t)},children:Object(O.jsxs)("div",{className:"menu-estado w100",children:[Object(O.jsxs)("span",{className:n[1]+" mr5",children:[n[0]," ",e.filtro_estado===t&&Object(O.jsx)(f.a,{icon:p.b})]}),Object(O.jsxs)("span",{className:n[1],children:["  ","SBY"===t&&Object(O.jsx)(f.a,{icon:p.d}),"   ",Object(O.jsx)(U,{estado:t,data:e.resumen_estados})," "]})]})})}function P(e){var t=["",""];switch(e){case"INI":t=["Inicial",""];break;case"RCL":t=["Rechaza Cliente","has-text-warning-dark"];break;case"SBY":t=["Aut. Dscto.","pink"];break;case"ACL":t=["Eval. Cliente","has-text-warning"];break;case"PRE":t=["Prepar\xe1ndose","has-text-danger"];break;case"EVA":t=["Evaluaci\xf3n","has-text-info"];break;case"VAL":t=["Validada","has-text-primary"];break;case"VLM":t=["Ev. Comercial","has-text-primary"];break;case"AUT":t=["Autorizada","has-text-success"];break;case"REC":t=["Rechazada","has-text-grey-light"];break;case"FAV":t=["Facturada","has-text-success"];break;default:t=""}return t}var I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).openNegocio=function(e){window.location.assign("/sie-android/Paginas/scr_app/enegocio?superv=si&id="+e)},s.setFitlro=function(e){s.setState({filtro:e.target.value})},s.toggleMesAno=function(){s.setState({mes_ano:1===s.state.mes_ano?0:1},(function(){s.getNegocios(),s.getResumen()}))},s.onSelectEstado=function(e){s.setState({filtro_estado:e},(function(){return s.getNegocios()}))},s.onSelectVendedor=function(e){s.setState({filtro_vendedor:e})},s.cerrarSesion=function(){window.location.assign("/sie-android/Paginas/lgus/?do=logout&redurl="+encodeURIComponent(window.location.href))},s.data_source=new y(x.a.DataEpysa),s.cookies=new E.a,s.state={error:null,data:[],roles:{},vendedores:[],isLoaded:!1,isLoadedRoles:!1,redirect:0,filtro:s.props.cliente?s.props.cliente:"",filtro_estado:"",filtro_vendedor:null,resumen_estados:[],mes_ano:0},s}return Object(d.a)(n,[{key:"getResumen",value:function(){var e=this;this.data_source.exec("SCR_RESUMEN_ESTADOS",{mes_ano:this.state.mes_ano,usuario:this.cookies.get("user")}).then((function(e){return e.json()})).then((function(t){e.setState({resumen_estados:t.data})}))}},{key:"getNegocios",value:function(){var e=this;this.setState({isLoaded:!1}),this.data_source.exec("SCR_LISTA_SUPERVISOR",{usuario:this.cookies.get("user"),mes_ano:this.state.mes_ano,estado:""===this.state.filtro_estado?"null":this.state.filtro_estado}).then((function(e){return e.json()})).then((function(t){var n=[];if(t.data){var s,a=Object(c.a)(t.data);try{for(a.s();!(s=a.n()).done;){var i=s.value;n.includes(i.vendedor.toLowerCase())||n.push(i.vendedor.toLowerCase())}}catch(r){a.e(r)}finally{a.f()}}e.setState({isLoaded:!0,vendedores:n,data:t.data?t.data:[]})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentDidMount",value:function(){var e=this;this.getNegocios(),this.getResumen(),this.data_source.exec("PAR_ListaParametros",{cCodPar:"SCR_USR"}).then((function(e){return e.json()})).then((function(t){var n=t.data&&t.data[0]?JSON.parse(t.data[0].Valor_texto):null;e.setState({isLoadedRoles:!0,roles:n||[]})}),(function(t){e.setState({isLoadedRoles:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,s=t.data,a=t.roles,i=t.isLoaded,r=t.filtro,o=t.filtro_estado,c=t.filtro_vendedor,l=t.isLoadedRoles,d=t.vendedores,u=t.resumen_estados,h=t.mes_ano;if(n)return Object(O.jsxs)("div",{className:"app-error",children:["Error: ",n.message]});if(i&&l){var j=a.meson&&a.meson.includes(this.cookies.get("user")),b=a.super&&a.super.includes(this.cookies.get("user"));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(N,{class_name:"is-danger",children:[Object(O.jsxs)(k,{children:[Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsxs)("span",{className:"icon-text",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(f.a,{size:"lg",icon:p.a})}),Object(O.jsx)("span",{children:"NVD's"})]})}),Object(O.jsx)("div",{className:"navbar-item put-right",children:Object(O.jsx)(g,{onChange:this.setFitlro,icon:p.e,placeholder:"Buscar",type:"text"})})]}),Object(O.jsx)(_,{closeOnClick:"true",children:Object(O.jsxs)("div",{className:"navbar-end",children:[Object(O.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(O.jsx)("p",{className:"navbar-link",children:"Estado & colores"}),Object(O.jsx)("div",{className:"navbar-dropdown",children:u.map((function(t){return Object(O.jsx)(A,{estado:t.estado,onSelectEstado:e.onSelectEstado,resumen_estados:u,filtro_estado:o},t.estado)}))})]}),(j||b)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(O.jsx)("p",{className:"navbar-link",children:"Periodo"}),Object(O.jsx)("div",{className:"navbar-dropdown",children:Object(O.jsxs)("div",{className:"buttons has-addons is-centered",children:[Object(O.jsx)("button",{className:"button is-small "+(0===h?"is-info is-selected":"has-text-light"),onClick:this.toggleMesAno,children:"MES"}),Object(O.jsx)("button",{className:"button is-small "+(0===h?"has-text-light":"is-success is-selected"),onClick:this.toggleMesAno,children:"A\xd1O"})]})})]}),Object(O.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(O.jsx)("p",{className:"navbar-link",children:"Vendedores"}),Object(O.jsx)("div",{className:"navbar-dropdown",children:d.map((function(t){return Object(O.jsx)("div",{className:"navbar-item",onClick:function(){return e.onSelectVendedor(c===t?null:t)},children:Object(O.jsxs)("p",{children:[t.toLowerCase()," ",c===t&&Object(O.jsx)(f.a,{icon:p.b})]})},t)}))})]})]}),Object(O.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(O.jsx)("p",{className:"navbar-link",children:this.cookies.get("nombre")}),Object(O.jsx)("div",{className:"navbar-dropdown",children:Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsx)("div",{className:"buttons",children:Object(O.jsx)("button",{className:"button is-danger is-light is-small",onClick:this.cerrarSesion,children:"Cerrar Sesion"})})})})]}),Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsx)("div",{onClick:function(){return window.location.reload()},className:"has-text-grey-lighter",children:"v3"})})]})})]}),Object(O.jsx)("section",{className:"section",children:Object(O.jsx)("div",{className:"container is-max-desktop",children:Object(O.jsx)(L,{data:s,onClick:this.openNegocio,filtro:r,filtroEstado:o,filtroVendedor:c,mesonUser:j,superUser:b})})})]})}return Object(O.jsx)(C,{})}}]),n}(i.a.Component),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function D(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=new S((function(e){e.login||"http://localhost"===window.location.href.substring(0,16)?i(!1):window.location.assign("/sie-android/Paginas/lgus/?redurl="+encodeURIComponent(window.location.href))}));return n?Object(O.jsx)(C,{}):Object(O.jsx)(I,{session:r})}o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),V(),function(e){if(console.log("production"),console.log("serviceWorker"in navigator),"serviceWorker"in navigator){var t=new URL(".",window.location.href);if(console.log(t.origin),console.log(window.location.origin),t.origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}()},8:function(e){e.exports=JSON.parse('{"a":{"DataEpysa":"https://sienet.epysa.cl/sie-android/Inc/data_ex4.asp?DB_EMP=EQUIPO","session":"https://sienet.epysa.cl/sie-android/Inc/session.asp"}}')}},[[34,1,2]]]);
//# sourceMappingURL=main.7e7ab2aa.chunk.js.map