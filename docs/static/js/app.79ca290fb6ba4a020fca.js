webpackJsonp([1],{"6WWh":function(e,t){},Bvza:function(e,t){},MljW:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=o("VU/8")({name:"App"},n,!1,function(e){o("mYKR")},null,null).exports,a=o("/ocq"),i=o("mtWM"),l=o.n(i),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"secret"},[t("h1",[this._v(this._s(this.message))])])},staticRenderFns:[]};var c=o("VU/8")({name:"loveResults",data:function(){return{message:"The Results are In"}}},u,!1,function(e){o("6WWh")},"data-v-53a7ed32",null).exports,p={name:"Home",data:function(){return{personOne:"",personTwo:"",showForm:!0,showError:!1,percentage:"",result:""}},methods:{validateForm:function(){""!=this.personOne&&""!=this.personTwo?(console.log("Form is valid"),this.showForm=!1):(console.log("Form is NOT valid"),this.showError=!0),console.log("validating form...")}},findLove:function(){var e=this;l.a.get("https://love-calculator.p.mashape.com/getPercentage",{params:{api_key:"SHNlQk5A0umshAPSGGbcNoi8hu9yp1abuwwjsn8zZG7MTpLj1C",fname:this.personOne,sname:this.personTwo}}).then(function(t){e.percentage=t.data}).catch(function(t){e.errors.push(t)})},components:{"lover-results":c}},v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"form-container"},[o("h1",[e._v("Love Calculator")]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v("There are errors in your form. Please try again.")]),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.findLove(t)}}},[o("p",[o("label",{attrs:{for:"personOne"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.personOne,expression:"personOne"}],attrs:{type:"text",id:"personOne",placeholder:"Enter your full name"},domProps:{value:e.personOne},on:{input:function(t){t.target.composing||(e.personOne=t.target.value)}}})])]),e._v(" "),o("p",[o("label",{attrs:{for:"personTwo"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.personTwo,expression:"personTwo"}],attrs:{type:"text",id:"personTwo",placeholder:"Enter crush's full name"},domProps:{value:e.personTwo},on:{input:function(t){t.target.composing||(e.personTwo=t.target.value)}}})])]),e._v(" "),e._m(0)])]),e._v(" "),o("lover-results",{attrs:{loveResults:e.loveResults}}),e._v(" "),o("p",[e._v("Learn About the Love Calculator! "),o("router-link",{attrs:{to:"/LoverProfile"}},[e._v("Click here")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("input",{attrs:{type:"submit",value:"Calculate Love Compatibility"}})])}]};var m=o("VU/8")(p,v,!1,function(e){o("Bvza")},"data-v-1d9b4ec8",null).exports,h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"secret"},[t("h1",[this._v(this._s(this.message))]),this._v(" "),t("p",[this._v("Welcome to Love Calculator. You can calculate the chance of a successful relationship between two people.")]),this._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/"}},[this._v("Back to Love Calculator")])],1)])])},staticRenderFns:[]};var f=o("VU/8")({name:"loveResults",data:function(){return{message:"About"}}},h,!1,function(e){o("MljW")},"data-v-14b0fab4",null).exports;r.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"LoverSummary",component:m},{path:"/LoverResults",name:"LoverResults",component:c},{path:"/LoverProfile",name:"LoverProfile",component:f}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},mYKR:function(e,t){}},["NHnr"]);