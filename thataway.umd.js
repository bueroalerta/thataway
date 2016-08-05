!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.thataway=e()}}(function(){return function e(t,r,n){function o(a,u){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var p=r[a]={exports:{}};t[a][0].call(p.exports,function(e){var r=t[a][1][e];return o(r?r:e)},p,p.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){var n=e("query-string"),o=e("router-params");t.exports=function(){function e(e,t){var r;if(!e||"string"!=typeof e||!t||t!==Object(t))throw Error("addRoute requires a route of type string and data of type object to store");r=o(e),r&&p.push({matcher:r,data:t}),s[e]=t}function t(e){if("function"!=typeof e)throw Error("addListener requires a function argument");return f.push(e)}function r(e){return e!==u(location.pathname)}function i(){var e=u(location.pathname),t=c(e);f.forEach(function(e){e(t)})}function a(e,t,n){if("string"!=typeof e)throw Error("navigate requires a path of type string and can optionally be passed data and a title");e=u(e),"undefined"!=typeof window&&r(e)&&(history.pushState(t,n,e),i())}function u(e){if(e){var t=e.length>1&&"/"===e.slice(-1);return t&&(e=e.substring(0,e.length-1)),e}}function c(e){var t,r=s[e];if(p.forEach(function(n){t=n.matcher(e),t&&(r?Object.assign(r,n.data):r=n.data,r.params=t)}),!r)throw Error("Route not found");return r.path=e,r.query=n.parse(location.search),r}var f=[],p=[],s={};return"undefined"!=typeof window&&(window.onpopstate=i),{addRoute:e,addListener:t,getRouteData:c,navigate:a}}},{"query-string":2,"router-params":5}],2:[function(e,t,r){"use strict";function n(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}var o=e("strict-uri-encode"),i=e("object-assign");r.extract=function(e){return e.split("?")[1]||""},r.parse=function(e){var t=Object.create(null);return"string"!=typeof e?t:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var r=e.replace(/\+/g," ").split("="),n=r.shift(),o=r.length>0?r.join("="):void 0;n=decodeURIComponent(n),o=void 0===o?null:decodeURIComponent(o),void 0===t[n]?t[n]=o:Array.isArray(t[n])?t[n].push(o):t[n]=[t[n],o]}),t):t},r.stringify=function(e,t){var r={encode:!0,strict:!0};return t=i(r,t),e?Object.keys(e).sort().map(function(r){var o=e[r];if(void 0===o)return"";if(null===o)return n(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(e){void 0!==e&&(null===e?i.push(n(r,t)):i.push(n(r,t)+"="+n(e,t)))}),i.join("&")}return n(r,t)+"="+n(o,t)}).filter(function(e){return e.length>0}).join("&"):""}},{"object-assign":3,"strict-uri-encode":4}],3:[function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(e,t){for(var r,o,u=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var f in r)i.call(r,f)&&(u[f]=r[f]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(r);for(var p=0;p<o.length;p++)a.call(r,o[p])&&(u[o[p]]=r[o[p]])}}return u}},{}],4:[function(e,t,r){"use strict";t.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},{}],5:[function(e,t,r){function n(e){if("string"!=typeof e||0===e.length)return e;try{return decodeURIComponent(e)}catch(t){throw t instanceof URIError&&(t.message="Failed to decode param '"+e+"'"),t}}var o=e("path-to-regexp");t.exports=function(e){var t=[],r=o(e,t);return!!t.length&&function(e){var o={},i=r.exec(e);if(i)return o.path=i.shift(),i.forEach(function(e,r){var i=t[r],a=i.name,u=n(e);u&&(o[a]=u)}),o}}},{"path-to-regexp":6}],6:[function(e,t,r){function n(e){for(var t,r=[],n=0,o=0,i="";null!=(t=m.exec(e));){var a=t[0],u=t[1],c=t.index;if(i+=e.slice(o,c),o=c+a.length,u)i+=u[1];else{var p=e[o],s=t[2],l=t[3],d=t[4],g=t[5],h=t[6],y=t[7];i&&(r.push(i),i="");var v=null!=s&&null!=p&&p!==s,w="+"===h||"*"===h,b="?"===h||"*"===h,x=t[2]||"/",j=d||g||(y?".*":"[^"+x+"]+?");r.push({name:l||n++,prefix:s||"",delimiter:x,optional:b,repeat:w,partial:v,asterisk:!!y,pattern:f(j)})}}return o<e.length&&(i+=e.substr(o)),i&&r.push(i),r}function o(e){return u(n(e))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function u(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",u=r||{},c=n||{},f=c.pretty?i:encodeURIComponent,p=0;p<e.length;p++){var s=e[p];if("string"!=typeof s){var l,d=u[s.name];if(null==d){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(v(d)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var g=0;g<d.length;g++){if(l=f(d[g]),!t[p].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===g?s.prefix:s.delimiter)+l}}else{if(l=s.asterisk?a(d):f(d),!t[p].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"');o+=s.prefix+l}}else o+=s}return o}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function f(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function p(e,t){return e.keys=t,e}function s(e){return e.sensitive?"":"i"}function l(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}function d(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(y(e[o],t,r).source);var i=new RegExp("(?:"+n.join("|")+")",s(r));return p(i,t)}function g(e,t,r){for(var o=n(e),i=h(o,r),a=0;a<o.length;a++)"string"!=typeof o[a]&&t.push(o[a]);return p(i,t)}function h(e,t){t=t||{};for(var r=t.strict,n=t.end!==!1,o="",i=e[e.length-1],a="string"==typeof i&&/\/$/.test(i),u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)o+=c(f);else{var p=c(f.prefix),l="(?:"+f.pattern+")";f.repeat&&(l+="(?:"+p+l+")*"),l=f.optional?f.partial?p+"("+l+")?":"(?:"+p+"("+l+"))?":p+"("+l+")",o+=l}}return r||(o=(a?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=n?"$":r&&a?"":"(?=\\/|$)",new RegExp("^"+o,s(t))}function y(e,t,r){return t=t||[],v(t)?r||(r={}):(r=t,t=[]),e instanceof RegExp?l(e,t):v(e)?d(e,t,r):g(e,t,r)}var v=e("isarray");t.exports=y,t.exports.parse=n,t.exports.compile=o,t.exports.tokensToFunction=u,t.exports.tokensToRegExp=h;var m=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:7}],7:[function(e,t,r){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}]},{},[1])(1)});
