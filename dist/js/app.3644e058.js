(function(t){function a(a){for(var o,n,i=a[0],l=a[1],c=a[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(a);while(m.length)m.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],o=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(o=!1)}o&&(s.splice(a--,1),t=n(n.s=e[0]))}return t}var o={},r={app:0},s=[];function n(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=o,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)n.d(e,o,function(a){return t[a]}.bind(null,o));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},1778:function(t,a,e){"use strict";e("4b62")},"1ac7":function(t,a,e){t.exports=e.p+"img/cameras 2.af7b1be3.jpg"},2856:function(t,a,e){t.exports=e.p+"img/porteiro-e-vigia.0f3ec59c.jpg"},3382:function(t,a,e){},3591:function(t,a,e){"use strict";e("964e")},"3b9d":function(t,a,e){t.exports=e.p+"img/obras.18c17eee.jpg"},"3be2":function(t,a,e){"use strict";e("ec96")},"3f5a":function(t,a,e){},"40e6":function(t,a,e){},"493b":function(t,a,e){},"4b62":function(t,a,e){},5121:function(t,a,e){t.exports=e.p+"img/CAMERA3.88d1ebd1.jpg"},5470:function(t,a,e){"use strict";e("f3f2")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Header"),e("router-view"),e("Footer")],1)},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("MenusHeader")],1)},i=[],l=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-component",[o("v-app-bar",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block",attrs:{color:"#0A2F44",app:"",dark:"","elevate-on-scroll":""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{attrs:{alt:"Vuetify Logo",contain:"","elevate-on-scroll":"",src:e("a824"),transition:"scale-transition",width:"100%",height:"60"}})],1),o("v-spacer"),o("router-link",{attrs:{to:"/"}},[o("ButtonHeader",{attrs:{parametro:"Home"}})],1),o("router-link",{attrs:{to:"/seguranca"}},[o("ButtonHeader",{attrs:{parametro:"Segurança"}})],1),o("router-link",{attrs:{to:"/portaria"}},[o("ButtonHeader",{attrs:{parametro:"Portaria"}})],1),o("router-link",{attrs:{to:"/outros"}},[o("ButtonHeader",{attrs:{parametro:"Outros Serviços"}})],1),o("router-link",{attrs:{to:"/contato"}},[o("ButtonHeader",{attrs:{parametro:"Fale Conosco"}})],1)],1),o("v-card",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[o("v-app-bar",{attrs:{color:"#0A2F44",dark:"",app:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{attrs:{alt:"Vuetify Logo",contain:"","elevate-on-scroll":"",src:e("a824"),transition:"scale-transition",width:"40"}})],1),o("v-spacer"),o("v-app-bar-nav-icon",{staticClass:"mx-auto",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}})],1),o("v-navigation-drawer",{attrs:{app:"",right:"",temporary:"",dark:"",color:"#0A2F44"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(a){t.group=a},expression:"group"}},[o("router-link",{attrs:{to:"/"}},[o("v-list-item",[o("v-list-item-title",[o("ButtonHeader",{attrs:{parametro:"Home"}})],1)],1)],1),o("router-link",{attrs:{to:"/seguranca"}},[o("v-list-item",[o("v-list-item-title",[o("ButtonHeader",{attrs:{parametro:"Segurança"}})],1)],1)],1),o("router-link",{attrs:{to:"/portaria"}},[o("v-list-item",[o("v-list-item-title",[o("ButtonHeader",{attrs:{parametro:"Portaria"}})],1)],1)],1),o("router-link",{attrs:{to:"/outros"}},[o("v-list-item",[o("v-list-item-title",[o("ButtonHeader",{attrs:{parametro:"Outros Serviços"}})],1)],1)],1),o("router-link",{attrs:{to:"/contato"}},[o("v-list-item",[o("v-list-item-title",[o("ButtonHeader",{attrs:{parametro:"Fale Conosco"}})],1)],1)],1)],1)],1)],1)],1)],1)},c=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44"}},[t._v(" "+t._s(t.parametro)+" ")])},u=[],m={props:{parametro:String}},v=m,p=e("2877"),C=e("6544"),f=e.n(C),g=e("8336"),A=Object(p["a"])(v,d,u,!1,null,null,null),b=A.exports;f()(A,{VBtn:g["a"]});var x={components:{ButtonHeader:b},data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},O=x,E=e("40dc"),S=e("5bc1"),h=e("b0af"),V=e("adda"),R=e("8860"),I=e("da13"),M=e("1baa"),_=e("5d23"),w=e("f774"),T=e("2fa4"),P=Object(p["a"])(O,l,c,!1,null,null,null),N=P.exports;f()(P,{VAppBar:E["a"],VAppBarNavIcon:S["a"],VCard:h["a"],VImg:V["a"],VList:R["a"],VListItem:I["a"],VListItemGroup:M["a"],VListItemTitle:_["c"],VNavigationDrawer:w["a"],VSpacer:T["a"]});var k={components:{MenusHeader:N}},y=k,j=Object(p["a"])(y,n,i,!1,null,null,null),D=j.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{staticClass:"footer",attrs:{dark:"",padless:""}},[e("v-card",{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:"",color:"#0A2F44",width:"100%"}},[e("v-card-text",t._l(t.icons,(function(a){return e("v-btn",{key:a,staticClass:"mx-4 white--text",attrs:{icon:""}},[e("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(a)+" ")])],1)})),1),e("v-divider"),e("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("DevTec")])])],1)],1)},B=[],U={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},$=U,H=e("99d9"),F=e("ce7e"),q=e("553a"),G=e("132d"),Q=Object(p["a"])($,L,B,!1,null,null,null),z=Q.exports;f()(Q,{VBtn:g["a"],VCard:h["a"],VCardText:H["a"],VDivider:F["a"],VFooter:q["a"],VIcon:G["a"]});var Z={name:"App",components:{Header:D,Footer:z},data:function(){return{}}},X=Z,J=(e("034f"),e("7496")),W=Object(p["a"])(X,r,s,!1,null,null,null),Y=W.exports;f()(W,{VApp:J["a"]});var K=e("f309");o["a"].use(K["a"]);var tt=new K["a"]({}),at=e("8c4f"),et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("BannerHeader",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),e("BannerMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"}),e("Body")],1)},ot=[],rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[e("Sobre"),e("SegurancaHome"),e("PortariaHome"),e("ObrasHome"),e("Contato")],1),e("v-component",{staticClass:"home d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[e("Sobre"),e("SegurancaMobile"),e("PortariaMobile"),e("ObrasMobile"),e("Contato")],1)],1)},st=[],nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"6",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" SOBRE "),e("v-divider")],1)])],1),e("CardProduct",{attrs:{path:t.img,texto:t.texto}})],1)],1)],1)],1)},it=[],lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-flex",[e("v-card",{attrs:{flat:""}},[e("v-row",{staticClass:"card-product",attrs:{justify:"center"}},[e("v-col",[e("v-img",{staticClass:"grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:t.path,"aspect-ratio":"2.3",height:"200","max-width":"100%","max-height":"100%"}})],1),e("v-col",{attrs:{"align-self":"center"}},[e("p",{staticClass:"text-center font-weight-black"},[t._v(" "+t._s(t.titulo)+" ")]),t.isBloco?e("p",{staticClass:"tamanho"},[t._v(" "+t._s(t.texto)+" ")]):e("p",{staticClass:"text-center body-2"},[t._v(" "+t._s(t.texto)+" ")])])],1)],1)],1)},ct=[],dt={props:{path:Object,texto:String,isBloco:Boolean,titulo:String}},ut=dt,mt=(e("d2db"),e("62ad")),vt=e("0e8f"),pt=e("0fd9"),Ct=Object(p["a"])(ut,lt,ct,!1,null,null,null),ft=Ct.exports;f()(Ct,{VCard:h["a"],VCol:mt["a"],VFlex:vt["a"],VImg:V["a"],VRow:pt["a"]});var gt={components:{CardProduct:ft},data:function(){return{img:e("bbb1"),texto:"A empresa Mega Alfa dispõe de um alto comprometimento e eficiência. Nossa maior missão é proteger e assegurar que nosso cliente receba o melhor serviço."}}},At=gt,bt=Object(p["a"])(At,nt,it,!1,null,null,null),xt=bt.exports;f()(bt,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1)],1)],1),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"6"}},[e("router-link",{attrs:{to:"/seguranca"}},[e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Et=[],St={components:{CardProduct:ft},data:function(){return{condominio:{img:e("ee07"),texto:"Nossa equipe recebe os melhores treinamentos e capacitações em segurança de condomínio, contamos também com os melhores recursos tecnológicos.",titulo:"CONDOMINÍOS"},ronda:{img:e("8163"),texto:"Nossas rondas são extremamente táticas, nossa equipe é altamente treinada e pronta  para resolver qualquer ação de maneira rápida e lógica.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:e("5121"),texto:"A equipe Mega Alfa investe muito em tecnologia, atualmente possuímos câmeras altamente modernas e com excelente qualidade de imagem.",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:e("1ac7"),texto:"Além de possuirmos as câmeras mais modernas, nossas câmeras são instaladas de maneira estratégica, sempre tirando 100% da capacidade e da eficiência das câmeras.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},ht=St,Vt=Object(p["a"])(ht,Ot,Et,!1,null,null,null),Rt=Vt.exports;f()(Vt,{VBtn:g["a"],VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1),e("v-col",[e("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),e("v-spacer"),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1),e("v-col",[e("CardProduct",{attrs:{path:t.instalacao.img,texto:t.instalacao.texto,isBloco:!0,titulo:t.instalacao.titulo}})],1)],1)],1),e("v-row",{attrs:{justify:"end"}},[e("v-col",{attrs:{cols:"2"}},[e("router-link",{attrs:{to:"/seguranca"}},[e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Mt=[],_t={components:{CardProduct:ft},data:function(){return{condominio:{img:e("ee07"),texto:"Nossa equipe recebe os melhores treinamentos e capacitações em segurança de condomínio, contamos também com os melhores recursos tecnológicos.",titulo:"CONDOMINÍOS"},ronda:{img:e("8163"),texto:"Nossas rondas são extremamente táticas, nossa equipe é altamente treinada e pronta  para resolver qualquer ação de maneira rápida e lógica.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:e("5121"),texto:"A equipe Mega Alfa investe muito em tecnologia, atualmente possuímos câmeras altamente modernas e com excelente qualidade de imagem.",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:e("1ac7"),texto:"Além de possuirmos as câmeras mais modernas, nossas câmeras são instaladas de maneira estratégica, sempre tirando 100% da capacidade e da eficiência das câmeras.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},wt=_t,Tt=Object(p["a"])(wt,It,Mt,!1,null,null,null),Pt=Tt.exports;f()(Tt,{VBtn:g["a"],VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"],VSpacer:T["a"]});var Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" PORTARIA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1),e("v-spacer")],1),e("v-row",{attrs:{justify:"end"}},[e("v-col",{attrs:{cols:"2"}},[e("router-link",{attrs:{to:"/portaria"}},[e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},kt=[],yt={components:{CardProduct:ft},data:function(){return{porteiro:{img:e("2856"),texto:"Nossa equipe de portaria é extremamente qualificada, pois recebem os melhores treinamentos e capacitações, sendo referência em sua arêa de atuação.",titulo:"PORTEIROS"}}}},jt=yt,Dt=Object(p["a"])(jt,Nt,kt,!1,null,null,null),Lt=Dt.exports;f()(Dt,{VBtn:g["a"],VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"],VSpacer:T["a"]});var Bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" PORTARIA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1)],1),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"6"}},[e("router-link",{attrs:{to:"/portaria"}},[e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Ut=[],$t={components:{CardProduct:ft},data:function(){return{porteiro:{img:e("2856"),texto:"Nossa equipe de portaria é extremamente qualificada, pois recebem os melhores treinamentos e capacitações, sendo referência em sua arêa de atuação.",titulo:"PORTEIROS"}}}},Ht=$t,Ft=Object(p["a"])(Ht,Bt,Ut,!1,null,null,null),qt=Ft.exports;f()(Ft,{VBtn:g["a"],VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[e("p",{staticClass:"display-1"},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)]),e("v-component",{staticClass:"palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[e("p",{staticClass:"display-1 "},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)])],1),e("CardProduct",{attrs:{path:t.img,texto:t.texto,titulo:"CONSTRUÇÃO CIVIL"}})],1),e("v-row",{attrs:{justify:"end"}},[e("v-col",{attrs:{cols:"2"}},[e("router-link",{attrs:{to:"/outros"}},[e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Qt=[],zt={components:{CardProduct:ft},data:function(){return{img:e("3b9d"),texto:"A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",titulo:"Construção Civil"}}},Zt=zt,Xt=(e("6848"),Object(p["a"])(Zt,Gt,Qt,!1,null,null,null)),Jt=Xt.exports;f()(Xt,{VBtn:g["a"],VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var Wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[e("p",{staticClass:"display-1"},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)]),e("v-component",{staticClass:"palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[e("p",{staticClass:"display-1 "},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.img,texto:t.texto,titulo:"CONSTRUÇÃO CIVIL"}})],1)],1)],1),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"6"}},[e("router-link",{attrs:{to:"/outros"}},[e("v-btn",{staticClass:"ma-3",attrs:{color:"#0A2F44",dark:""}},[t._v(" Mais Serviços ")])],1)],1)],1)],1)],1)],1)},Yt=[],Kt={components:{CardProduct:ft},data:function(){return{img:e("3b9d"),texto:"A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços."}}},ta=Kt,aa=(e("5470"),Object(p["a"])(ta,Wt,Yt,!1,null,null,null)),ea=aa.exports;f()(aa,{VBtn:g["a"],VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var oa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" FALE CONOSCO "),e("v-divider")],1)])],1),e("CardContato")],1)],1)],1)],1)},ra=[],sa=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-flex",[o("v-card-text",[o("v-row",[o("v-col",{staticClass:"mx-1"},[o("v-img",{attrs:{alt:"Vuetify Logo",contain:"","elevate-on-scroll":"",src:e("a824"),width:"300",height:"300"}})],1),o("v-col",[o("v-list",{attrs:{"three-line":""}},[o("v-list-item",[o("v-list-item-icon",[o("v-icon",{attrs:{color:"blue",large:""}},[t._v(" mdi-phone ")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("(41) 3667-0553")]),o("v-list-item-subtitle",[t._v("Residencial")])],1)],1),o("v-list-item",[o("v-list-item-icon",[o("v-icon",{attrs:{color:"green",large:""}},[t._v(" mdi-whatsapp ")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("(41) 99705-9390")]),o("v-list-item-subtitle",[t._v("WhatsApp")])],1)],1),o("v-list-item",[o("v-list-item-icon",[o("v-icon",{attrs:{large:""}},[t._v(" mdi-email ")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("megaalfaportaria12@gmail.com")]),o("v-list-item-subtitle",[t._v("Email")])],1)],1)],1)],1)],1)],1)],1)},na=[],ia={},la=ia,ca=e("34c3"),da=Object(p["a"])(la,sa,na,!1,null,null,null),ua=da.exports;f()(da,{VCardText:H["a"],VCol:mt["a"],VFlex:vt["a"],VIcon:G["a"],VImg:V["a"],VList:R["a"],VListItem:I["a"],VListItemContent:_["a"],VListItemIcon:ca["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:pt["a"]});var ma={components:{CardContato:ua}},va=ma,pa=Object(p["a"])(va,oa,ra,!1,null,null,null),Ca=pa.exports;f()(pa,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var fa={components:{Sobre:xt,SegurancaMobile:Rt,SegurancaHome:Pt,PortariaHome:Lt,PortariaMobile:qt,ObrasHome:Jt,ObrasMobile:ea,Contato:Ca}},ga=fa,Aa=(e("3be2"),Object(p["a"])(ga,rt,st,!1,null,null,null)),ba=Aa.exports,xa=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-content",[o("v-content",{staticClass:"titulo-bannermobile"},[o("p",{staticClass:"titulo-banner  "},[t._v(" PRIORIZAMOS PELA SUA TRANQUILIDADE. ")])]),o("v-img",{staticClass:"img-principal grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:e("e091"),"aspect-ratio":"2.3",width:"100%","max-width":"100%","max-height":"100%"}})],1)},Oa=[],Ea={},Sa=Ea,ha=(e("8a9f"),e("a75b")),Va=Object(p["a"])(Sa,xa,Oa,!1,null,null,null),Ra=Va.exports;f()(Va,{VContent:ha["a"],VImg:V["a"]});var Ia=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-content",{attrs:{justify:"space-evenly"}},[o("v-content",{staticClass:"titulo-inicial"},[o("p",{staticClass:"titulo-banner text-center"},[t._v(" PRIORIZAMOS PELA SUA TRANQUILIDADE. ")]),o("v-img",{staticClass:"ma-auto",attrs:{alt:"Vuetify Logo","elevate-on-scroll":"",src:e("a824"),width:"125",height:"150"}})],1),o("v-img",{staticClass:"img-principal grey lighten-2",attrs:{cover:"",alt:"Vuetify Logo",src:e("e091"),"aspect-ratio":"2.3",width:"100%","max-width":"100%","max-height":"100%"}})],1)},Ma=[],_a={},wa=_a,Ta=(e("1778"),Object(p["a"])(wa,Ia,Ma,!1,null,null,null)),Pa=Ta.exports;f()(Ta,{VContent:ha["a"],VImg:V["a"]});var Na={components:{Body:ba,BannerMobile:Ra,BannerHeader:Pa}},ka=Na,ya=Object(p["a"])(ka,et,ot,!1,null,null,null),ja=ya.exports,Da=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{class:t.isMobile()?"portaria":"",attrs:{"mt-5":"","mb-5":""}},[e("Portaria",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),e("PortariaMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"})],1)},La=[],Ba=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" PORTARIA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1)],1)],1)],1)],1)},Ua=[],$a={components:{CardProduct:ft},data:function(){return{porteiro:{img:e("2856"),texto:"Nossa equipe de portaria é extremamente qualificada, pois recebem os melhores treinamentos e capacitações, sendo referência em sua arêa de atuação.",titulo:"PORTEIROS"}}}},Ha=$a,Fa=Object(p["a"])(Ha,Ba,Ua,!1,null,null,null),qa=Fa.exports;f()(Fa,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var Ga=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" PORTARIA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.porteiro.img,texto:t.porteiro.texto,isBloco:!0,titulo:t.porteiro.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.treinamento.img,texto:t.treinamento.texto,isBloco:!0,titulo:t.treinamento.titulo}})],1)],1)],1)],1)],1)],1)},Qa=[],za={components:{CardProduct:ft},data:function(){return{porteiro:{img:e("2856"),texto:"NOSSA EQUIPE DE PORTARIA, É EXTREMAMENTE QUALIFICADA POIS RECEBEM OS MELHORES TREINAMENTOS E CAPACITAÇÕES, ALÉM DE SEREM REFERÊNCIA EM SUA ARÊA DE ATUAÇÃO.",titulo:"PORTEIROS"},treinamento:{img:e("b8f4"),texto:"A EQUIPE ALFA É UMA EMPRESA PREOCUPADA EM UTILIZAR SEMPRE OS MELHORES RECURSOS TECNOLOGICOS EM NOSSA ARÊA, OS EQUIPAMENTOS UTILIZADOS PELOS NOSSOS PORTE",titulo:"TREINAMENTOS"}}}},Za=za,Xa=Object(p["a"])(Za,Ga,Qa,!1,null,null,null),Ja=Xa.exports;f()(Xa,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var Wa={components:{Portaria:qa,PortariaMobile:Ja},methods:{isMobile:function(){return screen.width>700}}},Ya=Wa,Ka=(e("3591"),e("a523")),te=Object(p["a"])(Ya,Da,La,!1,null,null,null),ae=te.exports;f()(te,{VContainer:Ka["a"]});var ee=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"seguranca",attrs:{"mt-5":"","mb-5":""}},[e("Seguranca",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),e("SegurancaMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"})],1)},oe=[],re=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.instalacao.img,texto:t.instalacao.texto,isBloco:!0,titulo:t.instalacao.titulo}})],1)],1)],1)],1)],1)],1)},se=[],ne={components:{CardProduct:ft},data:function(){return{condominio:{img:e("ee07"),texto:"Nossa equipe recebe os melhores treinamentos e capacitações em segurança de condomínio, contamos também com os melhores recursos tecnológicos.",titulo:"CONDOMINÍOS"},ronda:{img:e("8163"),texto:"Nossas rondas são extremamente táticas, nossa equipe é altamente treinada e pronta  para resolver qualquer ação de maneira rápida e lógica.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:e("5121"),texto:"A equipe Mega Alfa investe muito em tecnologia, atualmente possuímos câmeras altamente modernas e com excelente qualidade de imagem.",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:e("1ac7"),texto:"Além de possuirmos as câmeras mais modernas, nossas câmeras são instaladas de maneira estratégica, sempre tirando 100% da capacidade e da eficiência das câmeras.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},ie=ne,le=Object(p["a"])(ie,re,se,!1,null,null,null),ce=le.exports;f()(le,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var de=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",[e("p",{staticClass:"display-1"},[t._v(" SEGURANÇA "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.condominio.img,texto:t.condominio.texto,isBloco:!0,titulo:t.condominio.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.ronda.img,texto:t.ronda.texto,isBloco:!0,titulo:t.ronda.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.monitoramento.img,texto:t.monitoramento.texto,isBloco:!0,titulo:t.monitoramento.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.instalacao.img,texto:t.instalacao.texto,isBloco:!0,titulo:t.instalacao.titulo}})],1)],1)],1)],1)],1)],1)},ue=[],me={components:{CardProduct:ft},data:function(){return{condominio:{img:e("ee07"),texto:"NOSSA EQUIPE RECEBE OS MELHORES TREINAMENTOS E CAPACITAÇÕES EM SEGURANÇA DE CONDOMINÍO, ALÉM DE SERMOS REFERÊNCIA EM TECNOLOGIA.",titulo:"CONDOMINÍOS"},ronda:{img:e("8163"),texto:"NOSSAS RONDAS SÃO ESTREMAMENTE TATICAS, NOSSA EQUIPE É ALTAMENTE TREINADA E PRONTA  PARA RESOLVER QUALQUER AÇÃO DE MANEIRA RAPIDA E LÓGICA.",titulo:"RONDAS INTENSIVAS"},monitoramento:{img:e("5121"),texto:"O EQUIPE ALFA INVESTE MUITO EM TECNOLOGIA, ATUALMENTE POSSUIMOS CAMERAS ALTAMENTE MODERNAS E COM UMA ALTA QUALIDADE DE IMAGEM. ",titulo:"MONITORAMENTO COM CAMERAS"},instalacao:{img:e("1ac7"),texto:"ALÉM DE POSSUIRMOS AS CAMERAS MAIS MODERNAS, NOSSAS CAMERAS SÃO INSTALADAS DE MANEIRA ESTRATÉGICA, SEMPRE TIRANDO 100% DA CAPACIDADE E DA EFICIÊNCIA DAS CAMERAS.",titulo:"INSTALAÇÃO DE CAMERAS"}}}},ve=me,pe=Object(p["a"])(ve,de,ue,!1,null,null,null),Ce=pe.exports;f()(pe,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var fe={components:{Seguranca:ce,SegurancaMobile:Ce}},ge=fe,Ae=Object(p["a"])(ge,ee,oe,!1,null,null,null),be=Ae.exports;f()(Ae,{VContainer:Ka["a"]});var xe=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"mt-5":""}},[e("Contato")],1)},Oe=[],Ee={components:{Contato:Ca}},Se=Ee,he=Object(p["a"])(Se,xe,Oe,!1,null,null,null),Ve=he.exports;f()(he,{VContainer:Ka["a"]});var Re=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"obras",attrs:{"mt-5":"","mb-5":""}},[e("Obras",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"}),e("ObrasMobile",{staticClass:"d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"})],1)},Ie=[],Me=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",{staticClass:"obras"},[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",{staticClass:"palavra"},[e("p",{staticClass:"display-1 "},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.construcao.img,texto:t.construcao.texto,titulo:t.construcao.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.servicosGerais.img,texto:t.servicosGerais.texto,titulo:t.servicosGerais.titulo}})],1)],1)],1)],1)],1)],1)},_e=[],we={components:{CardProduct:ft},data:function(){return{construcao:{img:e("3b9d"),texto:"A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",titulo:"CONSTRUÇÃO CIVIL"},servicosGerais:{img:e("c713"),texto:"A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",titulo:"AUXILIAR DE LIMPEZA"}}}},Te=we,Pe=(e("6437"),Object(p["a"])(Te,Me,_e,!1,null,null,null)),Ne=Pe.exports;f()(Pe,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var ke=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-component",{staticClass:"obras-mobile"},[e("v-row",{staticClass:"mt-6",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"8",md:"10"}},[e("v-card",{staticClass:"mt-6",attrs:{flat:""}},[e("v-card-title",{staticClass:"headline"},[e("v-component",{staticClass:"d-none d-sm-none d-md-block d-lg-block d-xl-block"},[e("p",{staticClass:"display-1"},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)]),e("v-component",{staticClass:"palavra d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"},[e("p",{staticClass:"display-1 "},[t._v(" OUTROS SERVIÇOS "),e("v-divider")],1)])],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.construcao.img,texto:t.construcao.texto,titulo:t.construcao.titulo}})],1)],1),e("v-row",[e("v-col",[e("CardProduct",{attrs:{path:t.servicosGerais.img,texto:t.servicosGerais.texto,titulo:t.servicosGerais.titulo}})],1)],1)],1)],1)],1)],1)},ye=[],je={components:{CardProduct:ft},data:function(){return{construcao:{img:e("3b9d"),texto:"A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",titulo:"CONSTRUÇÃO CIVIL"},servicosGerais:{img:e("c713"),texto:"A empresa Mega Alfa, possui um grupo especializado para atender todo tipo de construção civil, além de oferecermos os melhores preços.",titulo:"AUXILIAR DE LIMPEZA"}}}},De=je,Le=(e("c515"),Object(p["a"])(De,ke,ye,!1,null,null,null)),Be=Le.exports;f()(Le,{VCard:h["a"],VCardTitle:H["b"],VCol:mt["a"],VDivider:F["a"],VRow:pt["a"]});var Ue={components:{Obras:Ne,ObrasMobile:Be}},$e=Ue,He=Object(p["a"])($e,Re,Ie,!1,null,null,null),Fe=He.exports;f()(He,{VContainer:Ka["a"]}),o["a"].use(at["a"]);var qe=[{path:"/",name:"Home",component:ja},{path:"/portaria",name:"Portaria",component:ae},{path:"/seguranca",name:"Seguranca",component:be},{path:"/contato",name:"Contato",component:Ve},{path:"/outros",name:"Construcao",component:Fe}],Ge=new at["a"]({base:"/",routes:qe}),Qe=Ge;o["a"].config.productionTip=!1,new o["a"]({vuetify:tt,router:Qe,render:function(t){return t(Y)}}).$mount("#app")},"57cc":function(t,a,e){},6437:function(t,a,e){"use strict";e("493b")},6848:function(t,a,e){"use strict";e("3f5a")},8163:function(t,a,e){t.exports=e.p+"img/ronda.464e8f27.jpg"},"85ec":function(t,a,e){},"8a9f":function(t,a,e){"use strict";e("3382")},"964e":function(t,a,e){},a824:function(t,a,e){t.exports=e.p+"img/mega-alfa.3ccd0961.png"},b8f4:function(t,a,e){t.exports=e.p+"img/seguranca.b2f15d79.jpg"},bbb1:function(t,a,e){t.exports=e.p+"img/aperto de mao.aa41daec.jpg"},c515:function(t,a,e){"use strict";e("40e6")},c713:function(t,a,e){t.exports=e.p+"img/limpeza.df59eb49.jpg"},d2db:function(t,a,e){"use strict";e("57cc")},e091:function(t,a,e){t.exports=e.p+"img/familia.c012c04a.jpg"},ec96:function(t,a,e){},ee07:function(t,a,e){t.exports=e.p+"img/condominio.40a1bf86.jpg"},f3f2:function(t,a,e){}});
//# sourceMappingURL=app.3644e058.js.map