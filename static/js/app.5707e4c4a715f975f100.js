webpackJsonp([1],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),a=t("mvHQ"),i=t.n(a),s=t("Xxa5"),r=t.n(s),c=t("exGp"),u=t.n(c),p=t("//Fk"),l=t.n(p),d={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"btn-container"},[e("div",{staticClass:"btn download"},[e("span",{on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),e("div",{staticClass:"btn save"},[e("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var f=t("VU/8")({name:"saveButton",props:{},computed:{},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){this.$emit("goApp")}}},d,!1,function(n){t("g8ez")},"data-v-5f94ef7a",null).exports;function h(n){return new l.a(function(e){setTimeout(e,n)})}var v;v=u()(r.a.mark(function n(e){var t,o,a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=navigator.userAgent,o=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,a=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!m()){n.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),n.abrupt("return");case 7:if(!a){n.next=14;break}return location.href="mcloud://outLinks?outlink="+e,n.next=11,h(2500);case 11:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),n.next=19;break;case 14:if(!o){n.next=19;break}return location.href="hecaiyun://launch//outlinks?outlink="+e,n.next=18,h(2500);case 18:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 19:case"end":return n.stop()}},n,this)}));function m(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}t("Rp5f");var g={data:function(){return{code:"",input:"app-setTimeout",appInfo:""}},components:{openApp:f},computed:{},methods:{sleep:function(n){return new l.a(function(e){setTimeout(e,n)})},test:function(n){var e=this;return u()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("open app1"),t.next=3,e.sleep(2500);case 3:location.href="http://fuguiguan.cn?outlink="+n,setTimeout(function(){console.log("end app1")},3e3);case 5:case"end":return t.stop()}},t,e)}))()},open:function(n){this.test()},show:function(){this.input=this.code.replace(/\s+/g,"")},saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud--log")},isQQ:function(){return navigator.userAgent.toLowerCase().includes("qqbrowser")},_app:function(n){var e=this;return u()(r.a.mark(function t(){var o,a,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=navigator.userAgent,a=o.indexOf("Android")>-1||o.indexOf("Adr")>-1,i=!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!m()){t.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),t.abrupt("return");case 7:if(console.log("start test"),!i){t.next=16;break}return e.input="start-open-app",location.href="mcloud://outLinks?outlink="+n,t.next=13,e.sleep(2500);case 13:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),t.next=21;break;case 16:if(!a){t.next=21;break}return location.href="hecaiyun://launch//outlinks?outlink="+n,t.next=20,sleep(2500);case 20:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 21:case"end":return t.stop()}},t,e)}))()},goApp:function(){var n=i()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),e=window.btoa(n);this.appInfo=e,this._app(e),console.log("app base64info "+e),console.log("goAppInfo "+atob(e))}}},_={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.code,expression:"code"}],attrs:{type:"text",name:"code"},domProps:{value:n.code},on:{input:function(e){e.target.composing||(n.code=e.target.value)}}}),n._v(" "),t("button",{attrs:{type:"button",name:"button"},on:{click:n.show}},[n._v("show")]),n._v(" "),t("p",{staticStyle:{"margin-top":"50px"}},[n._v("input: "+n._s(n.input))])]),n._v(" "),t("div",{staticClass:"testBtn",on:{click:function(e){return n.open(n.appInfo)}}},[n._v("\n    打开app\n  ")]),n._v(" "),t("openApp",{on:{saveToCloud:n.saveToCloud,goApp:n.goApp}})],1)},staticRenderFns:[]};var k=t("VU/8")(g,_,!1,function(n){t("gf5L")},null,null).exports,w=t("/ocq"),x={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",[this._v("\n    hello \n    "),e("div",[e("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},b=t("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},x,!1,null,null,null).exports,C={data:function(){return{name:"",pass:""}},mounted:function(){var n=this.$route.query.name;console.log("name is "+n)},methods:{handleNameInput:function(n){this.name=n.target.value},handlePassInput:function(n){this.pass=n.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},A={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login"},[n._v("\n    name: "),t("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:n.handleNameInput}}),t("br"),n._v("\n    pass: "),t("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:n.handlePassInput}}),n._v(" "),t("div",{staticClass:"log"},[t("p",[n._v("name is : "+n._s(n.name))]),n._v(" "),t("p",[n._v("pass is : "+n._s(n.pass))])]),n._v(" "),t("button",{staticClass:"click",on:{click:n.clear}},[n._v("clear")])])},staticRenderFns:[]},T=t("VU/8")(C,A,!1,null,null,null).exports;o.a.use(w.a);var y=[{path:"/",component:b},{path:"/home",component:b},{path:"/login",component:T}],O=new w.a({routes:y});o.a.config.productionTip=!1,new o.a({el:"#app",router:O,components:{App:k},template:"<App/>"})},g8ez:function(n,e){},gf5L:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.5707e4c4a715f975f100.js.map