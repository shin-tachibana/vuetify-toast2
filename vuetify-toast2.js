!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self)["vuetify-toast2"]={})}(this,(function(t){"use strict";function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e){return t(e={exports:{}},e.exports),e.exports}var n=o((function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n},t.exports.default=t.exports,t.exports.__esModule=!0}));e(n);var r=o((function(t){t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0}));e(r);var i=o((function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0}));e(i);var a=o((function(t){t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0}));e(a);var u=o((function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0}));e(u);var d,l=e(o((function(t){t.exports=function(t){return r(t)||i(t)||a(t)||u()},t.exports.default=t.exports,t.exports.__esModule=!0}))),p=e(o((function(t){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t},t.exports.default=t.exports,t.exports.__esModule=!0})));function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){p(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var s=(d={name:{type:String,default:"default"},color:{type:[String,void 0],default:void 0},timeout:{type:[Number,void 0],default:void 0},app:{type:Boolean,default:!0},bottom:{type:Boolean,default:!1},centered:{type:Boolean,default:!1},contentClass:{type:[String,void 0],default:void 0},dark:{type:Boolean,default:!1},elevation:{type:[Number,String,void 0],default:void 0},height:{type:[Number,String,void 0],default:void 0},left:{type:Boolean,default:!1},light:{type:Boolean,default:!1},minWidth:{type:[Number,String,void 0],default:void 0},maxWidth:{type:[Number,String,void 0],default:void 0},minHeight:{type:[Number,String,void 0],default:void 0},maxHeight:{type:[Number,String,void 0],default:void 0},multiLine:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},right:{type:Boolean,default:!1},rounded:{type:[Boolean,String,void 0],default:void 0},shaped:{type:Boolean,default:!1},tag:{type:String,default:"div"},text:{type:Boolean,default:!1},tile:{type:Boolean,default:!1}},p(d,"timeout",{type:[Number,String],default:5e3}),p(d,"top",{type:Boolean,default:!1}),p(d,"transition",{type:[Boolean,String],default:"v-snack-transition"}),p(d,"vertical",{type:Boolean,default:!1}),p(d,"width",{type:[Number,String,void 0],default:void 0}),d),v=[];for(var y in s)v.push(y);var b={props:c(c({},s),{},{prepend:{type:[String,void 0],default:void 0},append:{type:[String,void 0],default:void 0}}),created:function(){var t,e,o,n=this.name,r={value:!1,$text:void 0,$html:void 0},i=c(c({},i),{},{prepend:{type:[String,void 0],default:void 0},append:{type:[String,void 0],default:void 0}});for(var a in i)r[a]=i[a].default;"action"in i&&(r.action={icon:(null===(t=i.action)||void 0===t?void 0:t.icon)||void 0,text:(null===(e=i.action)||void 0===e?void 0:e.text)||void 0,onClick:(null===(o=i.action)||void 0===o?void 0:o.onClick)||void 0});this.$set(this.$toasts,n,r)},beforeDestroy:function(){this.$delete(this,this.name)},render:function(t){var e,o=this;return t("div",(e=this.$toasts[this.name]||[],"length"in e?e:[e]).map((function(e){return t("v-snackbar",{scopedSlots:{default:function(){return t("div",[].concat(l(e.prepend?[t("v-icon",e.prepend)]:[]),[e.$html?t("span",{domProps:{innerHTML:e.$html}}):e.$text],l(e.append?[t("v-icon",e.append)]:[])))},action:function(){return e.action?t("v-btn",{props:p({},e.action.icon?"icon":"text",!0),on:{click:e.action.onClick||function(){}}},[e.action.icon?t("v-icon",e.action.icon):e.action.text]):void 0}},props:c(c({},(n=o,r=e,i={},v.forEach((function(t){i[t]=n[t],t in r&&(i[t]=r[t])})),i)),{},{value:e.value}),on:{input:function(t){e.value=t}}});var n,r,i})))}};t.default=function(t){var e=arguments,o={},n={show:function(t,n,r,i){1===e.length&&(n=t,t="default"),"string"!=typeof n&&"number"!=typeof n||(n={$text:n+""}),t in o&&(o[t]=c(c(c(c(c({},o[t]),n),r?{color:r}:{}),s(i?{prepend:i}:{})),{},{value:!0}))},success:function(t,e){n.show(t,e,"success","mdi-check-circle")},info:function(t,e){n.show(t,e,"info","mdi-alert-circle-outline")},warn:function(t,e){n.show(t,e,"warning","mdi-alert-outline")},error:function(t,e){n.show(t,e,"error","mdi-alert-octagon-outline")}};Object.defineProperty(t.prototype,"_toasts",{get:function(){return o}}),Object.defineProperty(t.prototype,"$toast",{get:function(){return n}}),t.mixin({beforeCreate:function(){t.util.defineReactive(this,"$toasts",this._toasts)}}),t.component("vue-toast-group",b)},Object.defineProperty(t,"__esModule",{value:!0})}));
