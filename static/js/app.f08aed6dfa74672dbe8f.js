webpackJsonp([1],{"8KGj":function(n,t){},LxAw:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),a={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"Main"},a,!1,function(n){e("rO44")},null,null).exports,r=e("/ocq"),s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[this._v("\n    hello \n    "),t("div",[t("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},c=e("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},s,!1,null,null,null).exports,u={data:function(){return{name:"",pass:""}},mounted:function(){var n=this.$route.query.name;console.log("name is "+n)},methods:{handleNameInput:function(n){this.name=n.target.value},handlePassInput:function(n){this.pass=n.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},l={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login"},[n._v("\n    name: "),e("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:n.handleNameInput}}),e("br"),n._v("\n    pass: "),e("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:n.handlePassInput}}),n._v(" "),e("div",{staticClass:"log"},[e("p",[n._v("name is : "+n._s(n.name))]),n._v(" "),e("p",[n._v("pass is : "+n._s(n.pass))])]),n._v(" "),e("button",{staticClass:"click",on:{click:n.clear}},[n._v("clear")])])},staticRenderFns:[]},p=e("VU/8")(u,l,!1,null,null,null).exports,d=e("mvHQ"),f=e.n(d),v=e("TQvf"),m=e.n(v);function h(){return/qqbrowser/.test(navigator.userAgent.toLowerCase())}function g(){var n=navigator.userAgent,t=function(){},e=n.indexOf("Android")>-1||n.indexOf("Adr")>-1,o=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),a="",i="";if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i))t=function(){alert("请点击右上角用浏览器查看！")};else{o?(i="mcloud://",a="itms-apps://itunes.apple.com/app/id544673497"):e?(i="hecaiyun://launch",a="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800"):t=function(){alert("DEMO，请在移动端的浏览器查看！")};t=function(n){(t=function(n){var t,e,o,i;location.href=n,t=function(n){1===n&&(location.href=a)},e=+new Date,o=0,i=0,i=setInterval(function(){o++;var n=+new Date-e;(o>=125||n>5e3)&&(clearInterval(i),n>5e3||document.hidden||document.webkitHidden?t(0):t(1))},20)})(n)}}t(i)}var w={name:"saveButton",props:{},data:function(){return{copyValue:"",copyBtn:"",outlinkUrl:"http://caiyun.feixin.10086.cn/dl/"}},computed:{},mounted:function(){h()&&(this.copyBtn=new m.a(this.$refs.copy))},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){if(h()){this.copyValue="链接："+this.outlinkUrl+"185CkdO1Y7L7W 提取码：inx2Ot";var n=this.copyBtn;n.on("success",function(){g()}),n.on("error",function(){console.log("error")})}else console.log("noqq"),this.$emit("goApp")}},destroy:function(){this.copyBtn.destroy()}},_={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"btn-container"},[t("div",{staticClass:"btn download"},[t("span",{ref:"copy",attrs:{"data-clipboard-text":this.copyValue},on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),t("div",{staticClass:"btn save"},[t("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var x=e("VU/8")(w,_,!1,function(n){e("vErO")},"data-v-76684f1f",null).exports,k=e("Xxa5"),b=e.n(k),A=e("exGp"),C=e.n(A),y=e("//Fk"),O=e.n(y);function U(n){return new O.a(function(t){setTimeout(t,n)})}var M,T=(M=C()(b.a.mark(function n(){var t,e,o;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,o=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!L()){n.next=7;break}return alert("请点击右上角用浏览器查看！"),n.abrupt("return");case 7:if(!o){n.next=14;break}return location.href="mcloud://",n.next=11,U(1500);case 11:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},1800),n.next=23;break;case 14:if(!e){n.next=21;break}return location.href="hecaiyun://launch",n.next=18,U(1500);case 18:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800")},1800),n.next=23;break;case 21:return alert("DEMO，请在移动端的浏览器查看！"),n.abrupt("return");case 23:case"end":return n.stop()}},n,this)})),function(){return M.apply(this,arguments)});function L(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}function S(n){return new O.a(function(t){setTimeout(t,n)})}var I=function(){var n=C()(b.a.mark(function n(t){var e,o,a;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=navigator.userAgent,o=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,a=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),!$()){n.next=7;break}return alert("请点击右上角用浏览器查看！"),n.abrupt("return");case 7:if(!a){n.next=14;break}return location.href="mcloud://outLinks?outlink="+t,n.next=11,S(1500);case 11:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="itms-apps://itunes.apple.com/app/id544673497")},1800),n.next=23;break;case 14:if(!o){n.next=21;break}return location.href="hecaiyun://launch//outlinks?outlink="+t,n.next=18,S(1500);case 18:setTimeout(function(){document.hidden||document.webkitHidden||(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800")},1800),n.next=23;break;case 21:return alert("DEMO，请在移动端的浏览器查看！"),n.abrupt("return");case 23:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}();function $(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}var j={data:function(){return{code:"",input:"iframe123-origin",appInfo:"",Agent:navigator.userAgent,isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/QQBrowser/.test(navigator.userAgent)&&!/FxiOS/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent),iosUrl:"mcloud://outLinks?outlink=",version:"",isQQBrowser:/qqbrowser/.test(navigator.userAgent.toLowerCase()),downLoadUrl:"itms-apps://itunes.apple.com/app/id544673497"}},components:{openApp:x},computed:{},mounted:function(){var n=f()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(n);this.appInfo=t;var e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);console.log(e),this.version=e?e[1].replace(/_/g,"."):null},methods:{saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud--log")},open:function(){T()},goApp:function(){var n=f()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(n);I(t)}}},E={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.code,expression:"code"}],attrs:{type:"text",name:"code"},domProps:{value:n.code},on:{input:function(t){t.target.composing||(n.code=t.target.value)}}}),n._v(" "),e("button",{attrs:{type:"button",name:"button"},on:{click:function(n){}}},[n._v("show")]),n._v(" "),e("p",{staticStyle:{"margin-top":"50px"}},[n._v("isSafari && 1: "+n._s(n.isSafari))]),n._v(" "),e("p",{staticStyle:{"margin-top":"50px"}},[n._v("isQQBrowser: "+n._s(n.isQQBrowser))]),n._v(" "),e("p",{staticStyle:{"margin-top":"50px"}},[n._v("Agent: "+n._s(n.Agent))]),n._v(" "),e("p",{staticStyle:{"margin-top":"50px"}},[n._v("IOS 版本为: "+n._s(n.version))])]),n._v(" "),e("a",{staticClass:"testBtn",attrs:{href:"itms-apps://itunes.apple.com/app/id544673497"},on:{click:function(t){return t.stopPropagation(),n.open(t)}}},[n._v("\n    打开app\n  ")]),n._v(" "),e("openApp",{on:{saveToCloud:n.saveToCloud,goApp:n.goApp}})],1)},staticRenderFns:[]};var B=e("VU/8")(j,E,!1,function(n){e("8KGj")},null,null).exports,F={data:function(){return{base64Info:""}},mounted:function(){var n=this.$route.query.base64Info;console.log("from router "+n),this.base64Info=n},methods:{open:function(n){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,o=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);console.log("open"),o?location.href="mcloud://outLinks?outlink="+n:e&&base64Info},download:function(){var n=navigator.userAgent,t=n.indexOf("Android")>-1||n.indexOf("Adr")>-1,e=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);console.log("download"),e?location.href="itms-apps://itunes.apple.com/app/id544673497":t&&(location.href="http://caiyun.feixin.10086.cn:7070/portal/client_new.jsp?v=mCloud_800")}}},P={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-logo"}),n._v(" "),e("div",{staticClass:"header-openapp",on:{click:function(t){return n.open(n.base64Info)}}},[n._v("点击打开")])]),n._v(" "),e("div",{staticClass:"main",on:{click:n.download}})])},staticRenderFns:[]};var Q=e("VU/8")(F,P,!1,function(n){e("oX5x")},"data-v-2bbb9dc2",null).exports;o.a.use(r.a);var q=[{path:"/",component:B},{path:"/home",component:c},{path:"/login",component:p},{path:"/openapp",component:Q}],V=new r.a({routes:q});e("LxAw");o.a.config.productionTip=!1,new o.a({el:"#app",router:V,components:{Main:i},template:"<Main/>"})},oX5x:function(n,t){},rO44:function(n,t){},vErO:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.f08aed6dfa74672dbe8f.js.map