webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("bOdI"),i=n.n(a),s=n("Xxa5"),r=n.n(s),c=n("exGp"),u=n.n(c),p=n("//Fk"),l=n.n(p),d=n("mvHQ"),f=n.n(d),v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"btn-container"},[t("div",{staticClass:"btn download"},[t("span",{on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),t("div",{staticClass:"btn save"},[t("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var m=n("VU/8")({name:"saveButton",props:{},computed:{},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){this.$emit("goApp")}}},v,!1,function(e){n("g8ez")},"data-v-5f94ef7a",null).exports;function h(e){return new l.a(function(t){setTimeout(t,e)})}var g;g=u()(r.a.mark(function e(t){var n,o,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=navigator.userAgent,o=n.indexOf("Android")>-1||n.indexOf("Adr")>-1,a=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!_()){e.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),e.abrupt("return");case 7:if(!a){e.next=14;break}return location.href="mcloud://outLinks?outlink="+t,e.next=11,h(2500);case 11:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),e.next=19;break;case 14:if(!o){e.next=19;break}return location.href="hecaiyun://launch//outlinks?outlink="+t,e.next=18,h(2500);case 18:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 19:case"end":return e.stop()}},e,this)}));function _(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}n("Rp5f");var w,k=(w={data:function(){return{code:"",input:"iframe123-origin",appInfo:"",Agent:navigator.userAgent,isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/QQBrowser/.test(navigator.userAgent)&&!/FxiOS/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent),iosUrl:"mcloud://outLinks?outlink=",version:"",isQQBrowser:/QQBrowser/.test(navigator.userAgent)}},components:{openApp:m},computed:{}},i()(w,"computed",{}),i()(w,"mounted",function(){var e=f()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(e);this.appInfo=t;var n=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);console.log(n),this.version=n?n[1].replace(/_/g,"."):null}),i()(w,"methods",{sleep:function(e){return new l.a(function(t){setTimeout(t,e)})},test:function(e){var t=this;return u()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("open app1"),n.next=3,t.sleep(2500);case 3:location.href="http://fuguiguan.cn?outlink="+e,setTimeout(function(){console.log("end app1")},3e3);case 5:case"end":return n.stop()}},n,t)}))()},open:function(e){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Adr");!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)||alert("not ios")},show:function(){this.input=this.code.replace(/\s+/g,"")},saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud--log")},isQQ:function(){return navigator.userAgent.toLowerCase().includes("qqbrowser")},_app:function(e){var t=this;return u()(r.a.mark(function n(){var o,a,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o=navigator.userAgent,a=o.indexOf("Android")>-1||o.indexOf("Adr")>-1,i=!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!_()){n.next=7;break}return alert("DEMO，请在移动端的浏览器查看！"),n.abrupt("return");case 7:if(console.log("start test"),!i){n.next=16;break}return t.input="start-open-app",location.href="mcloud://outLinks?outlink="+e,n.next=13,t.sleep(1e3);case 13:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},2500),n.next=21;break;case 16:if(!a){n.next=21;break}return location.href="hecaiyun://launch//outlinks?outlink="+e,n.next=20,t.sleep(1e3);case 20:document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800");case 21:case"end":return n.stop()}},n,t)}))()},goApp:function(){var e=f()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(e);this.appInfo=t,_app(t),console.log("app base64info "+t),console.log("goAppInfo "+atob(t))}}),w),x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",name:"code"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"button",name:"button"},on:{click:e.show}},[e._v("show")]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("isSafari && 1: "+e._s(e.isSafari))]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("isQQBrowser: "+e._s(e.isQQBrowser))]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("Agent: "+e._s(e.Agent))]),e._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[e._v("IOS 版本为: "+e._s(e.version))])]),e._v(" "),n("a",{staticClass:"testBtn",attrs:{href:"itms-apps://itunes.apple.com/app/id544673497"},on:{click:function(t){return e.open(e.appInfo)}}},[e._v("\n    打开app\n  ")]),e._v(" "),n("openApp",{on:{saveToCloud:e.saveToCloud,goApp:e.goApp}})],1)},staticRenderFns:[]};var A=n("VU/8")(k,x,!1,function(e){n("nB87")},null,null).exports,b=n("/ocq"),C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._v("\n    hello \n    "),t("div",[t("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},y=n("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},C,!1,null,null,null).exports,O={data:function(){return{name:"",pass:""}},mounted:function(){var e=this.$route.query.name;console.log("name is "+e)},methods:{handleNameInput:function(e){this.name=e.target.value},handlePassInput:function(e){this.pass=e.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e._v("\n    name: "),n("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:e.handleNameInput}}),n("br"),e._v("\n    pass: "),n("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:e.handlePassInput}}),e._v(" "),n("div",{staticClass:"log"},[n("p",[e._v("name is : "+e._s(e.name))]),e._v(" "),n("p",[e._v("pass is : "+e._s(e.pass))])]),e._v(" "),n("button",{staticClass:"click",on:{click:e.clear}},[e._v("clear")])])},staticRenderFns:[]},S=n("VU/8")(O,T,!1,null,null,null).exports;o.a.use(b.a);var Q=[{path:"/",component:y},{path:"/home",component:y},{path:"/login",component:S}],U=new b.a({routes:Q});o.a.config.productionTip=!1,new o.a({el:"#app",router:U,components:{App:A},template:"<App/>"})},g8ez:function(e,t){},nB87:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6ea7885f08af93596773.js.map