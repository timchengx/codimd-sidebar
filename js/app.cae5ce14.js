(function(t){function e(e){for(var r,i,o=e[0],l=e[1],u=e[2],d=0,h=[];d<o.length;d++)i=o[d],n[i]&&h.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/codimd-sidebar/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",[a("body",{directives:[{name:"show",rawName:"v-show",value:!t.parsed,expression:"!parsed"}],attrs:{id:"generatePage"}},[a("div",{staticClass:"ui middle aligned center aligned grid"},[a("div",{staticClass:"column"},[t._m(0),a("form",{staticClass:"ui large form"},[a("div",{staticClass:"ui stacked segment"},[t._m(1),a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rawData,expression:"rawData"}],attrs:{type:"text",placeholder:"json"},domProps:{value:t.rawData},on:{input:function(e){e.target.composing||(t.rawData=e.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left labeled input"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.host,expression:"host"}],attrs:{type:"text",placeholder:"Host URL"},domProps:{value:t.host},on:{input:function(e){e.target.composing||(t.host=e.target.value)}}})])]),a("input",{staticClass:"ui fluid large teal button",attrs:{type:"button",value:"Generate"},on:{click:t.generate}})])])])])]),a("body",{directives:[{name:"show",rawName:"v-show",value:t.parsed,expression:"parsed"}],attrs:{id:"Main"}},[a("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.refreshing,expression:"!refreshing"}],staticStyle:{width:"100%",height:"100%",border:"none",position:"absolute"},attrs:{src:t.current_link},on:{load:t.pageLoaded}}),a("Slide",{attrs:{disableOutsideClick:"",noOverlay:""}},[a("div",{staticClass:"ui labeled icon center aligned grid"},[a("button",{staticClass:"ui button",on:{click:t.newPage}},[a("i",{staticClass:"folder open icon"}),t._v("\n              New Sidebar\n          ")])]),a("tree",{ref:"tree",attrs:{options:t.treeOptions},on:{"node:selected":t.openLink}})],1)],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"ui teal header"},[a("div",{staticClass:"content"},[t._v("CodiMD-sidebar")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui message"},[a("p",[t._v("\n                Paste your CodiMD/HackMD host"),a("br"),t._v(" note history (https://<Host>/history)\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui label"},[a("i"),t._v("https://\n                ")])}],i=(a("ac4d"),a("8a81"),a("6b54"),a("ac6a"),a("5df3"),a("f400"),a("bd86")),o=(a("7f7f"),a("db0f")),l=a("25ea"),u={name:"App",components:Object(i["a"])({Slide:o["Slide"]},l["a"].name,l["a"]),data:function(){return{parsed:!1,refreshing:!0,data:null,rawData:null,host:null,current_link:"about:blank",treeData:null,treeOptions:{checkbox:!1,multiple:!1}}},methods:{openLink:function(t){t.hasChildren()||(this.current_link="https://"+this.host+"/"+t.id,this.refreshing=!0)},pageLoaded:function(){this.refreshing=!1},parseHistoryJSON:function(){var t=[],e=new Map,a=new Map,r="_DELIMITER"+Math.random().toString(36).substring(2,20)+"_",n=!0,s=!1,i=void 0;try{for(var o,l=this.data.history[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var u=o.value,c=u.tags.join(r),d={text:u.text,id:u.id},h=void 0;if(e.has(c))h=e.get(c),h.children.push(d);else if(0!==u.tags.length){for(var p=null,f=null,v=0;v<u.tags.length;v++){var g=u.tags.slice(0,v+1).join(r);e.has(g)?h=e.get(g):(h={text:u.tags[v]},h.children=[],e.set(g,h)),p?p.children.push(h):f=h,p=h}p.children.push(d),e.set(c,p),a.has(f.text)||(t.push(f),a.set(f.text,f))}else t.push({text:u.text,id:u.id})}}catch(m){s=!0,i=m}finally{try{n||null==l.return||l.return()}finally{if(s)throw i}}this.treeData=t},generate:function(){this.host&&this.rawData&&(this.data=JSON.parse(this.rawData),this.parseHistoryJSON(),this.$refs.tree.setModel(this.treeData),this.parsed=!0,this.current_link="https://"+this.host+"/features",this.refreshing=!0,localStorage.setItem("rawData",this.rawData),localStorage.setItem("host",this.host))},newPage:function(){this.parsed=!1,this.current_link=null}},created:function(){this.host=localStorage.getItem("host"),this.rawData=localStorage.getItem("rawData"),this.host&&this.rawData&&this.generate()}},c=u,d=(a("034f"),a("2877")),h=Object(d["a"])(c,n,s,!1,null,null,null),p=h.exports,f=a("92d5"),v=a.n(f);a("c4ca");r["a"].config.productionTip=!1,new r["a"]({components:{App:p,SuiVue:v.a},render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.cae5ce14.js.map