webpackJsonp([72],{133:function(e,t,s){var n=s(0)(s(687),s(844),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/dataplugins/select4.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] select4.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},687:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{select:null,param:[{title:"选择1",key:"a1",other:"其他值"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}]}},methods:{update:function(){this.select={title:"选择1",key:"a1",other:"其他值"}}}}},844:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v("选中值："+e._s(e.select)+" "),s("button",{staticClass:"h-btn h-btn-text",on:{click:e.update}},[e._v("修改值")])]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param,type:"object"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});