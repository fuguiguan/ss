webpackJsonp([1],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),a=e("mvHQ"),s=e.n(a),i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"btn-container"},[t("div",{staticClass:"btn download"},[t("span",{on:{click:this.goApp}},[this._v("App内下载")])]),this._v(" "),t("div",{staticClass:"btn save"},[t("span",{on:{click:this.saveToCloud}},[this._v("转存到网盘")])])])},staticRenderFns:[]};var l=e("VU/8")({name:"saveButton",props:{},computed:{},methods:{saveToCloud:function(){this.$emit("saveToCloud")},goApp:function(){this.$emit("goApp")}}},i,!1,function(n){e("g8ez")},"data-v-5f94ef7a",null).exports;var p=e("Rp5f"),c=e.n(p),r={data:function(){return{}},components:{openApp:l},methods:{saveToCloud:function(){alert("saveToCloud-(去掉toLower函数)"),console.log("cloud--log")},isQQ:function(){return navigator.userAgent.toLowerCase().includes("qqbrowser")},goApp:function(){var n=s()({link:"http://caiyun.feixin.10086.cn/dl/185CjzcOjFTwe",pwd:"UlndMd",category:"00019700101000000001/1811hjJdT00Z05620191017152733yik",account:"19802021498",name:"picture"}),t=window.btoa(n);new c.a({scheme:{protocol:"mcloud://"},fallback:"itms-apps://itunes.apple.com/app/id544673497"}).open({path:"outLinks",param:{outlink:t},callback:function(){location.href="itms-apps://itunes.apple.com/app/id544673497"}}),console.log("callLib base64info "+t),console.log("goAppInfo "+atob(t))}}},u={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("openApp",{on:{saveToCloud:this.saveToCloud,goApp:this.goApp}})],1)},staticRenderFns:[]};var d=e("VU/8")(r,u,!1,function(n){e("qySM")},null,null).exports,v=e("/ocq"),h={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[this._v("\n    hello \n    "),t("div",[t("button",{on:{click:this.goLogin}},[this._v("go login")])])])},staticRenderFns:[]},m=e("VU/8")({methods:{goLogin:function(){this.$router.replace("./login?name=fgg")}}},h,!1,null,null,null).exports,f={data:function(){return{name:"",pass:""}},mounted:function(){var n=this.$route.query.name;console.log("name is "+n)},methods:{handleNameInput:function(n){this.name=n.target.value},handlePassInput:function(n){this.pass=n.target.value},clear:function(){this.$refs.name.value="",this.$refs.pass.value=""}}},g={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login"},[n._v("\n    name: "),e("input",{ref:"name",attrs:{type:"text",placeholder:"name"},on:{input:n.handleNameInput}}),e("br"),n._v("\n    pass: "),e("input",{ref:"pass",attrs:{type:"password",placeholder:"pass"},on:{input:n.handlePassInput}}),n._v(" "),e("div",{staticClass:"log"},[e("p",[n._v("name is : "+n._s(n.name))]),n._v(" "),e("p",[n._v("pass is : "+n._s(n.pass))])]),n._v(" "),e("button",{staticClass:"click",on:{click:n.clear}},[n._v("clear")])])},staticRenderFns:[]},_=e("VU/8")(f,g,!1,null,null,null).exports;o.a.use(v.a);var b=[{path:"/",component:m},{path:"/home",component:m},{path:"/login",component:_}],C=new v.a({routes:b});o.a.config.productionTip=!1,new o.a({el:"#app",router:C,components:{App:d},template:"<App/>"})},g8ez:function(n,t){},qySM:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.8c0f77e15990c90edf6c.js.map