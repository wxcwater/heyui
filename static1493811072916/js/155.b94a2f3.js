webpackJsonp([155],{570:function(e,t,l){var a=l(0)(l(628),l(810),null,null);a.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/plugin/autocomplete.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] autocomplete.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},628:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(209),u=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e,t){(0,u.default)("https://suggest.taobao.com/sug?code=utf-8&q="+e).then(function(e){return e.json()}).then(function(e){var l=e.result,a=[];l.forEach(function(e){a.push({title:e[0],key:e[0]})}),t(a)})},v=function(e,t){(0,u.default)("https://suggest.taobao.com/sug?code=utf-8&q="+e).then(function(e){return e.json()}).then(function(e){var l=e.result,a=[];l.forEach(function(e){a.push({name:e[0],id:e[0]})}),t(a)})};t.default={data:function(){return{value1:null,value2:null,disabled:!0,value3:[],value4:null,value5:[],param4:{loadData:o,minWord:1},value6:null,param6:{loadData:o,minWord:1,render:function(e){return"<p>"+e.title+'<span class="float-right gray-color">'+e.title.length+"个字</span></p>"}},value7:{key:"测试",title:"测试"},param7:{loadData:o,minWord:1},value8:[{key:"测试",title:"测试"},{key:"测试2",title:"测试2"}],value9:null,value10:null,value12:null,value11:[],param10:{loadData:v,key:"id",title:"name",minWord:1}}},methods:{update:function(){this.value7={key:"修改",title:"修改"}},update2:function(){this.value8=[{key:"修改",title:"修改"}]}}}},810:function(e,t,l){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"doc"},[l("h2",[e._v("AutoComplete 模糊匹配")]),e._v(" "),l("h3",[e._v("基本用法")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value1))]),e._v(" "),l("AutoComplete",{attrs:{dict:"simple"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),l("h3",[e._v("disabled")]),e._v(" "),l("p",[l("h-switch",{attrs:{small:!0},model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[e._v("禁用")]),e._v(" value:"+e._s(e.value2))],1),e._v(" "),l("AutoComplete",{attrs:{dict:"simple",disabled:e.disabled},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),l("h3",[e._v("多选")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value3))]),e._v(" "),l("AutoComplete",{attrs:{dict:"simple",multiple:!0},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),e._v(" "),l("h3",[e._v("远程")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value4))]),e._v(" "),l("AutoComplete",{attrs:{options:e.param4},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}}),e._v(" "),l("h3",[e._v("远程多选")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value5))]),e._v(" "),l("AutoComplete",{attrs:{options:e.param4,multiple:!0},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}}),e._v(" "),l("h3",[e._v("自定义展示内容")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value6))]),e._v(" "),l("AutoComplete",{attrs:{options:e.param6},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}}),e._v(" "),l("h3",[e._v("选择对象")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value7)+"\n    "),l("button",{staticClass:"h-btn h-btn-text",on:{click:e.update}},[e._v("修改值")])]),e._v(" "),l("AutoComplete",{attrs:{options:e.param7,type:"object"},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}}),e._v(" "),l("h3",[e._v("选择对象多选")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value8)+"\n    "),l("button",{staticClass:"h-btn h-btn-text",on:{click:e.update2}},[e._v("修改值")])]),e._v(" "),l("AutoComplete",{attrs:{options:e.param7,type:"object",multiple:!0},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}}),e._v(" "),l("h3",[e._v("可以任意输入")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value9))]),e._v(" "),l("AutoComplete",{attrs:{options:e.param7,"must-match":!1},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}}),e._v(" "),l("h3",[e._v("可以任意输入对象")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value10))]),e._v(" "),l("AutoComplete",{attrs:{options:e.param10,type:"object","must-match":!1},model:{value:e.value10,callback:function(t){e.value10=t},expression:"value10"}}),e._v(" "),l("h3",[e._v("可以任意输入对象多选")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value11))]),e._v(" "),l("AutoComplete",{attrs:{options:e.param10,type:"object",multiple:!0,"must-match":!1},model:{value:e.value11,callback:function(t){e.value11=t},expression:"value11"}}),e._v(" "),l("h3",[e._v("全局配置")]),e._v(" "),l("p",[e._v("value:"+e._s(e.value12))]),e._v(" "),l("AutoComplete",{attrs:{config:"simple"},model:{value:e.value12,callback:function(t){e.value12=t},expression:"value12"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});