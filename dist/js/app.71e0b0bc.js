(function(t){function o(o){for(var e,i,s=o[0],l=o[1],c=o[2],A=0,d=[];A<s.length;A++)i=s[A],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);E&&E(o);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,o=0;o<n.length;o++){for(var a=n[o],e=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(e=!1)}e&&(n.splice(o--,1),t=i(i.s=a[0]))}return t}var e={},r={app:0},n=[];function i(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,o,a){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)i.d(a,e,function(o){return t[o]}.bind(null,e));return a},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=o,s=s.slice();for(var c=0;c<s.length;c++)o(s[c]);var E=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,o,a){t.exports=a("56d7")},"034f":function(t,o,a){"use strict";a("85ec")},1778:function(t,o,a){"use strict";a("4b62")},"1ac7":function(t,o,a){t.exports=a.p+"img/cameras 2.af7b1be3.jpg"},2856:function(t,o,a){t.exports=a.p+"img/porteiro-e-vigia.0f3ec59c.jpg"},3382:function(t,o,a){},3591:function(t,o,a){"use strict";a("964e")},"3b9d":function(t,o,a){t.exports=a.p+"img/obras.73f3abf3.jpg"},"3f5a":function(t,o,a){},"40e6":function(t,o,a){},"493b":function(t,o,a){},"4b62":function(t,o,a){},5121:function(t,o,a){t.exports=a.p+"img/CAMERA3.88d1ebd1.jpg"},"56d7":function(t,o,a){"use strict";a.r(o);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),r=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-app",[a("Header"),a("router-view"),a("Footer")],1)},n=[],i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("MenusHeader")],1)},s=[],l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-component",[e("v-app-bar",{staticClass:"d-none d-sm-block",attrs:{color:"#0A2F44",app:"",dark:"","elevate-on-scroll":""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{attrs:{alt:"Vuetify Logo",contain:"","elevate-on-scroll":"",src:a("a824"),transition:"scale-transition",width:"100%",height:"60"}})],1),e("v-spacer"),e("router-link",{attrs:{to:"/"}},[e("ButtonHeader",{attrs:{parametro:"Home"}})],1),e("router-link",{attrs:{to:"/seguranca"}},[e("ButtonHeader",{attrs:{parametro:"Segurança"}})],1),e("router-link",{attrs:{to:"/portaria"}},[e("ButtonHeader",{attrs:{parametro:"Portaria"}})],1),e("router-link",{attrs:{to:"/construcao"}},[e("ButtonHeader",{attrs:{parametro:"Construção civil"}})],1),e("router-link",{attrs:{to:"/contato"}},[e("ButtonHeader",{attrs:{parametro:"Fale Conosco"}})],1)],1),e("v-card",{staticClass:"d-xl-none d-md-none d-lg-none"},[e("v-app-bar",{attrs:{color:"#0A2F44",dark:"",app:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{attrs:{alt:"Vuetify Logo",contain:"","elevate-on-scroll":"",src:a("a824"),transition:"scale-transition",width:"40"}})],1),e("v-spacer"),e("v-app-bar-nav-icon",{staticClass:"mx-auto",on:{click:function(o){o.stopPropagation(),t.drawer=!t.drawer}}})],1),e("v-navigation-drawer",{attrs:{app:"",right:"",temporary:"",dark:"",color:"#0A2F44"},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(o){t.group=o},expression:"group"}},[e("router-link",{attrs:{to:"/"}},[e("v-list-item",[e("v-list-item-title",[e("ButtonHeader",{attrs:{parametro:"Home"}})],1)],1)],1),e("router-link",{attrs:{to:"/seguranca"}},[e("v-list-item",[e("v-list-item-title",[e("ButtonHeader",{attrs:{parametro:"Segurança"}})],1)],1)],1),e("router-link",{attrs:{to:"/portaria"}},[e("v-list-item",[e("v-list-item-title",[e("ButtonHeader",{attrs:{parametro:"Portaria"}})],1)],1)],1),e("router-link",{attrs:{to:"/construcao"}},[e("v-list-item",[e("v-list-item-title",[e("ButtonHeader",{attrs:{parametro:"Construção civil"}})],1)],1)],1),e("router-link",{attrs:{to:"/contato"}},[e("v-list-item",[e("v-list-item-title",[e("ButtonHeader",{attrs:{parametro:"Fale Conosco"}})],1)],1)],1)],1)],1)],1)],1)],1)},c=[],E=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44"}},[t._v(" "+t._s(t.parametro)+" ")])},A=[],d={props:{parametro:String}},u=d,m=a("2877"),v=a("6544"),S=a.n(v),O=a("8336"),C=Object(m["a"])(u,E,A,!1,null,null,null),p=C.exports;S()(C,{VBtn:O["a"]});var R={components:{ButtonHeader:p},data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},M=R,I=a("40dc"),T=a("5bc1"),f=a("b0af"),N=a("adda"),g=a("8860"),P=a("da13"),x=a("1baa"),b=a("5d23"),D=a("f774"),L=a("2fa4"),V=Object(m["a"])(M,l,c,!1,null,null,null),h=V.exports;S()(V,{VAppBar:I["a"],VAppBarNavIcon:T["a"],VCard:f["a"],VImg:N["a"],VList:g["a"],VListItem:P["a"],VListItemGroup:x["a"],VListItemTitle:b["c"],VNavigationDrawer:D["a"],VSpacer:L["a"]});var U={components:{MenusHeader:h}},_=U,w=Object(m["a"])(_,i,s,!1,null,null,null),k=w.exports,y=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:"",color:"#0A2F44",width:"100%"}},[a("v-card-text",t._l(t.icons,(function(o){return a("v-btn",{key:o,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(o)+" ")])],1)})),1),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("DevTec")])])],1)],1)},B=[],j={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},F=j,Q=a("99d9"),G=a("ce7e"),H=a("553a"),$=a("132d"),Z=Object(m["a"])(F,y,B,!1,null,null,null),X=Z.exports;S()(Z,{VBtn:O["a"],VCard:f["a"],VCardText:Q["a"],VDivider:G["a"],VFooter:H["a"],VIcon:$["a"]});var J={name:"App",components:{Header:k,Footer:X},data:function(){return{}}},z=J,W=(a("034f"),a("7496")),Y=Object(m["a"])(z,r,n,!1,null,null,null),q=Y.exports;S()(Y,{VApp:W["a"]});var K=a("f309");e["a"].use(K["a"]);var tt=new K["a"]({}),ot=a("8c4f"),at=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("BannerHeader",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),a("BannerMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"}),a("Body")],1)},et=[],rt=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[a("Sobre"),a("SegurancaHome"),a("PortariaHome"),a("ObrasHome"),a("Contato")],1),a("v-component",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[a("Sobre"),a("SegurancaMobile"),a("PortariaMobile"),a("ObrasMobile"),a("Contato")],1)],1)},nt=[],it=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"6",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" SOBRE "),a("v-divider")],1)])],1),a("CardProduct",{attrs:{path:t.img,texto:t.texto}})],1)],1)],1)],1)},st=[],lt=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-flex",[a("v-card",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block",attrs:{flat:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-img",{staticClass:"grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:t.path,"aspect-ratio":"2.3",height:"200","max-width":"100%","max-height":"100%"}})],1),a("v-col",{attrs:{"align-self":"center"}},[a("p",{staticClass:"text-center font-weight-black"},[t._v(" "+t._s(t.titulo)+" ")]),t.isBloco?a("p",{staticClass:"tamanho"},[t._v(" "+t._s(t.texto)+" ")]):a("p",{staticClass:"text-center body-2"},[t._v(" "+t._s(t.texto)+" ")])])],1)],1),a("v-card",{staticClass:"d-xs-block d-sm-blcok d-md-none d-lg-none d-xl-none",attrs:{flat:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-img",{staticClass:"grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:t.path,"aspect-ratio":"2.3",height:"200","max-width":"100%","max-height":"100%"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{"align-self":"center"}},[a("p",{staticClass:"text-center font-weight-black"},[t._v(" "+t._s(t.titulo)+" ")]),t.isBloco?a("p",{staticClass:"tamanho"},[t._v(" "+t._s(t.texto)+" ")]):a("p",{staticClass:"text-center body-2"},[t._v(" "+t._s(t.texto)+" ")])])],1)],1)],1)},ct=[],Et={props:{path:Object,texto:String,isBloco:Boolean,titulo:String}},At=Et,dt=(a("d2db"),a("62ad")),ut=a("0e8f"),mt=a("0fd9"),vt=Object(m["a"])(At,lt,ct,!1,null,null,null),St=vt.exports;S()(vt,{VCard:f["a"],VCol:dt["a"],VFlex:ut["a"],VImg:N["a"],VRow:mt["a"]});var Ot={components:{CardProduct:St},data:function(){return{img:a("bbb1"),texto:"A EMPRESA MEGA ALFA TEM UM ALTO COMPROMETIMENTO E EFICIÊNCIA. NOSSA MAIOR MISSÃO É PROTEGER E ASSEGURAR QUE NOSSO CLIENTE RECEBA O MELHOR SERVIÇO."}}},Ct=Ot,pt=Object(m["a"])(Ct,it,st,!1,null,null,null),Rt=pt.exports;S()(pt,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Mt=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("router-link",{attrs:{to:"/seguranca"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},It=[],Tt={components:{CardProduct:St},data:function(){return{condominio:{img:a("ee07"),texto:"NOSSA EQUIPE RECEBE OS MELHORES TREINAMENTOS E CAPACITAÇÕES EM SEGURANÇA DE CONDOMINÍO, ALÉM DE SERMOS REFERÊNCIA EM TECNOLOGIA.",titulo:"CONDOMINÍOS"},ronda:{img:a("8163"),texto:"NOSSAS RONDAS SÃO ESTREMAMENTE TATICAS, NOSSA EQUIPE É ALTAMENTE TREINADA E PRONTA  PARA RESOLVER QUALQUER AÇÃO DE MANEIRA RAPIDA E LÓGICA.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:a("5121"),texto:"O EQUIPE ALFA INVESTE MUITO EM TECNOLOGIA, ATUALMENTE POSSUIMOS CAMERAS ALTAMENTE MODERNAS E COM UMA ALTA QUALIDADE DE IMAGEM. ",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:a("1ac7"),texto:"ALÉM DE POSSUIRMOS AS CAMERAS MAIS MODERNAS, NOSSAS CAMERAS SÃO INSTALADAS DE MANEIRA ESTRATÉGICA, SEMPRE TIRANDO 100% DA CAPACIDADE E DA EFICIÊNCIA DAS CAMERAS.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},ft=Tt,Nt=Object(m["a"])(ft,Mt,It,!1,null,null,null),gt=Nt.exports;S()(Nt,{VBtn:O["a"],VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Pt=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1),a("v-col",[a("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),a("v-spacer"),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1),a("v-col",[a("CardProduct",{attrs:{path:t.instalacao.img,texto:t.instalacao.texto,isBloco:!0,titulo:t.instalacao.titulo}})],1)],1)],1),a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{cols:"2"}},[a("router-link",{attrs:{to:"/seguranca"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},xt=[],bt={components:{CardProduct:St},data:function(){return{condominio:{img:a("ee07"),texto:"NOSSA EQUIPE RECEBE OS MELHORES TREINAMENTOS E CAPACITAÇÕES EM SEGURANÇA DE CONDOMINÍO, ALÉM DE SERMOS REFERÊNCIA EM TECNOLOGIA.",titulo:"CONDOMINÍOS"},ronda:{img:a("8163"),texto:"NOSSAS RONDAS SÃO ESTREMAMENTE TATICAS, NOSSA EQUIPE É ALTAMENTE TREINADA E PRONTA  PARA RESOLVER QUALQUER AÇÃO DE MANEIRA RAPIDA E LÓGICA.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:a("5121"),texto:"O EQUIPE ALFA INVESTE MUITO EM TECNOLOGIA, ATUALMENTE POSSUIMOS CAMERAS ALTAMENTE MODERNAS E COM UMA ALTA QUALIDADE DE IMAGEM. ",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:a("1ac7"),texto:"ALÉM DE POSSUIRMOS AS CAMERAS MAIS MODERNAS, NOSSAS CAMERAS SÃO INSTALADAS DE MANEIRA ESTRATÉGICA, SEMPRE TIRANDO 100% DA CAPACIDADE E DA EFICIÊNCIA DAS CAMERAS.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},Dt=bt,Lt=Object(m["a"])(Dt,Pt,xt,!1,null,null,null),Vt=Lt.exports;S()(Lt,{VBtn:O["a"],VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"],VSpacer:L["a"]});var ht=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" PORTARIA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1),a("v-col",[a("CardProduct",{attrs:{path:t.treinamento.img,texto:t.treinamento.texto,isBloco:!0,titulo:t.treinamento.titulo}})],1)],1),a("v-spacer")],1),a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{cols:"2"}},[a("router-link",{attrs:{to:"/portaria"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Ut=[],_t={components:{CardProduct:St},data:function(){return{porteiro:{img:a("2856"),texto:"NOSSA EQUIPE DE PORTARIA, É EXTREMAMENTE QUALIFICADA POIS RECEBEM OS MELHORES TREINAMENTOS E CAPACITAÇÕES, ALÉM DE SEREM REFERÊNCIA EM SUA ARÊA DE ATUAÇÃO.",titulo:"PORTEIROS"},treinamento:{img:a("b8f4"),texto:"A EQUIPE ALFA É UMA EMPRESA PREOCUPADA EM UTILIZAR SEMPRE OS MELHORES RECURSOS TECNOLOGICOS EM NOSSA ARÊA, OS EQUIPAMENTOS UTILIZADOS PELOS NOSSOS PORTE",titulo:"TREINAMENTOS"}}}},wt=_t,kt=Object(m["a"])(wt,ht,Ut,!1,null,null,null),yt=kt.exports;S()(kt,{VBtn:O["a"],VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"],VSpacer:L["a"]});var Bt=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" PORTARIA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.treinamento.img,texto:t.treinamento.texto,isBloco:!0,titulo:t.treinamento.titulo}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("router-link",{attrs:{to:"/portaria"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},jt=[],Ft={components:{CardProduct:St},data:function(){return{porteiro:{img:a("2856"),texto:"NOSSA EQUIPE DE PORTARIA, É EXTREMAMENTE QUALIFICADA POIS RECEBEM OS MELHORES TREINAMENTOS E CAPACITAÇÕES, ALÉM DE SEREM REFERÊNCIA EM SUA ARÊA DE ATUAÇÃO.",titulo:"PORTEIROS"},treinamento:{img:a("b8f4"),texto:"A EQUIPE ALFA É UMA EMPRESA PREOCUPADA EM UTILIZAR SEMPRE OS MELHORES RECURSOS TECNOLOGICOS EM NOSSA ARÊA, OS EQUIPAMENTOS UTILIZADOS PELOS NOSSOS PORTE",titulo:"TREINAMENTOS"}}}},Qt=Ft,Gt=Object(m["a"])(Qt,Bt,jt,!1,null,null,null),Ht=Gt.exports;S()(Gt,{VBtn:O["a"],VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var $t=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[a("p",{staticClass:"display-1"},[t._v(" CONSTRUÇÃO CIVIL "),a("v-divider")],1)]),a("v-component",{staticClass:"palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[a("p",{staticClass:"display-1 "},[t._v(" CONSTRUÇÃO CIVIL "),a("v-divider")],1)])],1),a("CardProduct",{attrs:{path:t.img,texto:t.texto}})],1),a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{cols:"2"}},[a("router-link",{attrs:{to:"/construcao"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Zt=[],Xt={components:{CardProduct:St},data:function(){return{img:a("3b9d"),texto:"A EMPRESA MEGA ALFA ALÉM DE SER REFERÊNCIA EM SEGURANÇA, TEMOS UM GRUPO ESPECIALIZADO PARA ATENDER TODO TIPO DE CONSTRUÇÃO CIVIL, ALÉM DE DA NOSSA EQUIPE POSSUIR OS EQUIPAMENTOS MAIS MODERNOS PARA TODO TIPO DE OBRA TAMBÉM TEMOS OS MELHORES PREÇOS CUSTO BENEFÍCIO."}}},Jt=Xt,zt=(a("6848"),Object(m["a"])(Jt,$t,Zt,!1,null,null,null)),Wt=zt.exports;S()(zt,{VBtn:O["a"],VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Yt=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[a("p",{staticClass:"display-1"},[t._v(" CONSTRUÇÃO CIVIL "),a("v-divider")],1)]),a("v-component",{staticClass:"palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[a("p",{staticClass:"display-1 "},[t._v(" CONSTRUÇÃO CIVIL "),a("v-divider")],1)])],1),a("CardProduct",{attrs:{path:t.img,texto:t.texto}})],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("router-link",{attrs:{to:"/construcao"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},qt=[],Kt={components:{CardProduct:St},data:function(){return{img:a("3b9d"),texto:"A EMPRESA MEGA ALFA ALÉM DE SER REFERÊNCIA EM SEGURANÇA, TEMOS UM GRUPO ESPECIALIZADO PARA ATENDER TODO TIPO DE CONSTRUÇÃO CIVIL, ALÉM DE DA NOSSA EQUIPE POSSUIR OS EQUIPAMENTOS MAIS MODERNOS PARA TODO TIPO DE OBRA TAMBÉM TEMOS OS MELHORES PREÇOS CUSTO BENEFÍCIO."}}},to=Kt,oo=(a("c515"),Object(m["a"])(to,Yt,qt,!1,null,null,null)),ao=oo.exports;S()(oo,{VBtn:O["a"],VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var eo=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" FALE CONOSCO "),a("v-divider")],1)])],1),a("CardContato")],1)],1)],1)],1)},ro=[],no=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-flex",[e("v-card-text",[e("v-row",[e("v-col",{staticClass:"mx-1"},[e("v-img",{attrs:{alt:"Vuetify Logo",contain:"","elevate-on-scroll":"",src:a("a824"),width:"300",height:"300"}})],1),e("v-col",[e("v-list",{attrs:{"three-line":""}},[e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"blue",large:""}},[t._v(" mdi-phone ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("(41) 3667-0553")]),e("v-list-item-subtitle",[t._v("Residencial")])],1)],1),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"indigo",large:""}},[t._v(" mdi-cellphone ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("(41) 98536-6817")]),e("v-list-item-subtitle",[t._v("Celular")])],1)],1),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"green",large:""}},[t._v(" mdi-whatsapp ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("(41) 99705-9390")]),e("v-list-item-subtitle",[t._v("WhatsApp")])],1)],1),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{large:""}},[t._v(" mdi-email ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("alfaseguranca@hotmail.com")]),e("v-list-item-subtitle",[t._v("Email")])],1)],1)],1)],1)],1)],1)],1)},io=[],so={},lo=so,co=a("34c3"),Eo=Object(m["a"])(lo,no,io,!1,null,null,null),Ao=Eo.exports;S()(Eo,{VCardText:Q["a"],VCol:dt["a"],VFlex:ut["a"],VIcon:$["a"],VImg:N["a"],VList:g["a"],VListItem:P["a"],VListItemContent:b["a"],VListItemIcon:co["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:mt["a"]});var uo={components:{CardContato:Ao}},mo=uo,vo=Object(m["a"])(mo,eo,ro,!1,null,null,null),So=vo.exports;S()(vo,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Oo={components:{Sobre:Rt,SegurancaMobile:gt,SegurancaHome:Vt,PortariaHome:yt,PortariaMobile:Ht,ObrasHome:Wt,ObrasMobile:ao,Contato:So}},Co=Oo,po=Object(m["a"])(Co,rt,nt,!1,null,null,null),Ro=po.exports,Mo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-content",[e("v-content",{staticClass:"titulo-bannermobile"},[e("p",{staticClass:"titulo-banner  "},[t._v(" PRIORIZAMOS PELA SUA TRANQUILIDADE. ")])]),e("v-img",{staticClass:"img-principal grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:a("e091"),"aspect-ratio":"2.3",width:"100%","max-width":"100%","max-height":"100%"}})],1)},Io=[],To={},fo=To,No=(a("8a9f"),a("a75b")),go=Object(m["a"])(fo,Mo,Io,!1,null,null,null),Po=go.exports;S()(go,{VContent:No["a"],VImg:N["a"]});var xo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-content",{attrs:{justify:"space-evenly"}},[e("v-content",{staticClass:"titulo-inicial"},[e("p",{staticClass:"titulo-banner text-center"},[t._v(" PRIORIZAMOS PELA SUA TRANQUILIDADE. ")]),e("v-img",{staticClass:"ma-auto",attrs:{alt:"Vuetify Logo","elevate-on-scroll":"",src:a("a824"),width:"125",height:"150"}})],1),e("v-img",{staticClass:"img-principal grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:a("e091"),"aspect-ratio":"2.3",width:"100%","max-width":"100%","max-height":"100%"}})],1)},bo=[],Do={},Lo=Do,Vo=(a("1778"),Object(m["a"])(Lo,xo,bo,!1,null,null,null)),ho=Vo.exports;S()(Vo,{VContent:No["a"],VImg:N["a"]});var Uo={components:{Body:Ro,BannerMobile:Po,BannerHeader:ho}},_o=Uo,wo=Object(m["a"])(_o,at,et,!1,null,null,null),ko=wo.exports,yo=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-container",{class:t.isMobile()?"portaria":"",attrs:{"mt-5":"","mb-5":""}},[a("Portaria",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),a("PortariaMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"})],1)},Bo=[],jo=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" PORTARIA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.treinamento.img,texto:t.treinamento.texto,isBloco:!0,titulo:t.treinamento.titulo}})],1)],1)],1)],1)],1)],1)},Fo=[],Qo={components:{CardProduct:St},data:function(){return{porteiro:{img:a("2856"),texto:"NOSSA EQUIPE DE PORTARIA, É EXTREMAMENTE QUALIFICADA POIS RECEBEM OS MELHORES TREINAMENTOS E CAPACITAÇÕES, ALÉM DE SEREM REFERÊNCIA EM SUA ARÊA DE ATUAÇÃO.",titulo:"PORTEIROS"},treinamento:{img:a("b8f4"),texto:"A EQUIPE ALFA É UMA EMPRESA PREOCUPADA EM UTILIZAR SEMPRE OS MELHORES RECURSOS TECNOLOGICOS EM NOSSA ARÊA, OS EQUIPAMENTOS UTILIZADOS PELOS NOSSOS PORTE",titulo:"TREINAMENTOS"}}}},Go=Qo,Ho=Object(m["a"])(Go,jo,Fo,!1,null,null,null),$o=Ho.exports;S()(Ho,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Zo=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" PORTARIA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.treinamento.img,texto:t.treinamento.texto,isBloco:!0,titulo:t.treinamento.titulo}})],1)],1)],1)],1)],1)],1)},Xo=[],Jo={components:{CardProduct:St},data:function(){return{porteiro:{img:a("2856"),texto:"NOSSA EQUIPE DE PORTARIA, É EXTREMAMENTE QUALIFICADA POIS RECEBEM OS MELHORES TREINAMENTOS E CAPACITAÇÕES, ALÉM DE SEREM REFERÊNCIA EM SUA ARÊA DE ATUAÇÃO.",titulo:"PORTEIROS"},treinamento:{img:a("b8f4"),texto:"A EQUIPE ALFA É UMA EMPRESA PREOCUPADA EM UTILIZAR SEMPRE OS MELHORES RECURSOS TECNOLOGICOS EM NOSSA ARÊA, OS EQUIPAMENTOS UTILIZADOS PELOS NOSSOS PORTE",titulo:"TREINAMENTOS"}}}},zo=Jo,Wo=Object(m["a"])(zo,Zo,Xo,!1,null,null,null),Yo=Wo.exports;S()(Wo,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var qo={components:{Portaria:$o,PortariaMobile:Yo},methods:{isMobile:function(){return screen.width>700}}},Ko=qo,ta=(a("3591"),a("a523")),oa=Object(m["a"])(Ko,yo,Bo,!1,null,null,null),aa=oa.exports;S()(oa,{VContainer:ta["a"]});var ea=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-container",{staticClass:"seguranca",attrs:{"mt-5":"","mb-5":""}},[a("Seguranca",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),a("SegurancaMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"})],1)},ra=[],na=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.instalacao.img,texto:t.instalacao.texto,isBloco:!0,titulo:t.instalacao.titulo}})],1)],1)],1)],1)],1)],1)},ia=[],sa={components:{CardProduct:St},data:function(){return{condominio:{img:a("ee07"),texto:"NOSSA EQUIPE RECEBE OS MELHORES TREINAMENTOS E CAPACITAÇÕES EM SEGURANÇA DE CONDOMINÍO, ALÉM DE SERMOS REFERÊNCIA EM TECNOLOGIA.",titulo:"CONDOMINÍOS"},ronda:{img:a("8163"),texto:"NOSSAS RONDAS SÃO ESTREMAMENTE TATICAS, NOSSA EQUIPE É ALTAMENTE TREINADA E PRONTA  PARA RESOLVER QUALQUER AÇÃO DE MANEIRA RAPIDA E LÓGICA.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:a("5121"),texto:"O EQUIPE ALFA INVESTE MUITO EM TECNOLOGIA, ATUALMENTE POSSUIMOS CAMERAS ALTAMENTE MODERNAS E COM UMA ALTA QUALIDADE DE IMAGEM. ",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:a("1ac7"),texto:"ALÉM DE POSSUIRMOS AS CAMERAS MAIS MODERNAS, NOSSAS CAMERAS SÃO INSTALADAS DE MANEIRA ESTRATÉGICA, SEMPRE TIRANDO 100% DA CAPACIDADE E DA EFICIÊNCIA DAS CAMERAS.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},la=sa,ca=Object(m["a"])(la,na,ia,!1,null,null,null),Ea=ca.exports;S()(ca,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Aa=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",[a("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),a("v-divider")],1)])],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1)],1),a("v-row",[a("v-col",[a("CardProduct",{attrs:{path:t.instalacao.img,texto:t.instalacao.texto,isBloco:!0,titulo:t.instalacao.titulo}})],1)],1)],1)],1)],1)],1)},da=[],ua={components:{CardProduct:St},data:function(){return{condominio:{img:a("ee07"),texto:"NOSSA EQUIPE RECEBE OS MELHORES TREINAMENTOS E CAPACITAÇÕES EM SEGURANÇA DE CONDOMINÍO, ALÉM DE SERMOS REFERÊNCIA EM TECNOLOGIA.",titulo:"CONDOMINÍOS"},ronda:{img:a("8163"),texto:"NOSSAS RONDAS SÃO ESTREMAMENTE TATICAS, NOSSA EQUIPE É ALTAMENTE TREINADA E PRONTA  PARA RESOLVER QUALQUER AÇÃO DE MANEIRA RAPIDA E LÓGICA.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:a("5121"),texto:"O EQUIPE ALFA INVESTE MUITO EM TECNOLOGIA, ATUALMENTE POSSUIMOS CAMERAS ALTAMENTE MODERNAS E COM UMA ALTA QUALIDADE DE IMAGEM. ",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:a("1ac7"),texto:"ALÉM DE POSSUIRMOS AS CAMERAS MAIS MODERNAS, NOSSAS CAMERAS SÃO INSTALADAS DE MANEIRA ESTRATÉGICA, SEMPRE TIRANDO 100% DA CAPACIDADE E DA EFICIÊNCIA DAS CAMERAS.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},ma=ua,va=Object(m["a"])(ma,Aa,da,!1,null,null,null),Sa=va.exports;S()(va,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var Oa={components:{Seguranca:Ea,SegurancaMobile:Sa}},Ca=Oa,pa=Object(m["a"])(Ca,ea,ra,!1,null,null,null),Ra=pa.exports;S()(pa,{VContainer:ta["a"]});var Ma=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-container",{attrs:{"mt-5":""}},[a("Contato")],1)},Ia=[],Ta={components:{Contato:So}},fa=Ta,Na=Object(m["a"])(fa,Ma,Ia,!1,null,null,null),ga=Na.exports;S()(Na,{VContainer:ta["a"]});var Pa=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-container",{staticClass:"obras",attrs:{"mt-5":""}},[a("Obras")],1)},xa=[],ba=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-component",[a("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[a("v-card",{staticClass:"mt-6",attrs:{flat:""}},[a("v-card-title",{staticClass:"headline"},[a("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[a("p",{staticClass:"display-1"},[t._v(" CONSTRUÇÃO CIVIL "),a("v-divider")],1)]),a("v-component",{staticClass:"palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[a("p",{staticClass:"display-1 "},[t._v(" CONSTRUÇÃO CIVIL "),a("v-divider")],1)])],1),a("CardProduct",{attrs:{path:t.img,texto:t.texto}})],1)],1)],1)],1)},Da=[],La={components:{CardProduct:St},data:function(){return{img:a("3b9d"),texto:"A EMPRESA MEGA ALFA ALÉM DE SER REFERÊNCIA EM SEGURANÇA, TEMOS UM GRUPO ESPECIALIZADO PARA ATENDER TODO TIPO DE CONSTRUÇÃO CIVIL, ALÉM DE DA NOSSA EQUIPE POSSUIR OS EQUIPAMENTOS MAIS MODERNOS PARA TODO TIPO DE OBRA TAMBÉM TEMOS OS MELHORES PREÇOS CUSTO BENEFÍCIO."}}},Va=La,ha=(a("6437"),Object(m["a"])(Va,ba,Da,!1,null,null,null)),Ua=ha.exports;S()(ha,{VCard:f["a"],VCardTitle:Q["b"],VCol:dt["a"],VDivider:G["a"],VRow:mt["a"]});var _a={components:{Obras:Ua}},wa=_a,ka=(a("f333"),Object(m["a"])(wa,Pa,xa,!1,null,null,null)),ya=ka.exports;S()(ka,{VContainer:ta["a"]}),e["a"].use(ot["a"]);var Ba=[{path:"/",name:"Home",component:ko},{path:"/portaria",name:"Portaria",component:aa},{path:"/seguranca",name:"Seguranca",component:Ra},{path:"/contato",name:"Contato",component:ga},{path:"/construcao",name:"Construcao",component:ya}],ja=new ot["a"]({base:"/",routes:Ba}),Fa=ja;e["a"].config.productionTip=!1,new e["a"]({vuetify:tt,router:Fa,render:function(t){return t(q)}}).$mount("#app")},"57cc":function(t,o,a){},6437:function(t,o,a){"use strict";a("493b")},6848:function(t,o,a){"use strict";a("3f5a")},8163:function(t,o,a){t.exports=a.p+"img/ronda.1dd5d63e.jpg"},"85ec":function(t,o,a){},"8a9f":function(t,o,a){"use strict";a("3382")},"964e":function(t,o,a){},a824:function(t,o,a){t.exports=a.p+"img/mega-alfa.3ccd0961.png"},b8f4:function(t,o,a){t.exports=a.p+"img/seguranca.b2f15d79.jpg"},bbb1:function(t,o,a){t.exports=a.p+"img/aperto de mao.b0603a5a.jpg"},c515:function(t,o,a){"use strict";a("40e6")},d2db:function(t,o,a){"use strict";a("57cc")},e041:function(t,o,a){},e091:function(t,o,a){t.exports=a.p+"img/familia.c012c04a.jpg"},ee07:function(t,o,a){t.exports=a.p+"img/condominio.40a1bf86.jpg"},f333:function(t,o,a){"use strict";a("e041")}});
//# sourceMappingURL=app.71e0b0bc.js.map