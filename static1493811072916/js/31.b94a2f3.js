webpackJsonp([31],{179:function(e,t,n){var o=n(0)(n(728),n(901),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/message1.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] message1.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},728:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(90),s=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={methods:{vueinfo:function(){this.$Message("这是一个普通的提醒")},jsinfo:function(){s.default.$Message("这是一个普通的提醒")}}}},901:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){e.vueinfo()}}},[e._v("Vue 调用提示")]),e._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){e.jsinfo()}}},[e._v("Js 调用提示")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});