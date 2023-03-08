(()=>{"use strict";var e={519:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(933),o=t.n(r),a=t(476),i=t.n(a)()(o());i.push([e.id,"body{\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    margin: 0;\n}\n\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dcdcdc;\n}\n\n.header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(54, 54, 54);\n    padding: 0.5rem;\n}\n\n.content{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.content .left{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content .right{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    margin: 1rem;\n}\n\n.answRow{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    gap: 8px;\n}\n\n.answRow>*{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border: #dcdcdc solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n\n#board{\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    background-color: #F0D9B5;\n    margin: 1rem;\n}\n\n#board .darkSquare{\n    background-color: #B58863;\n}\n\n#board .row>*{\n    width: 100%;\n    position: relative;\n    aspect-ratio: 1 / 1;\n}\n\n#board .row>*>*{\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    user-select: none;\n}\n\n#board .row{\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n",""]);const s=i},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var g=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(892),n=t.n(e),r=t(760),o=t.n(r),a=t(311),i=t.n(a),s=t(192),c=t.n(s),l=t(60),d=t.n(l),p=t(865),u=t.n(p),f=t(519),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m=t.p+"c83f5581968cfa1416d4.svg",h=t.p+"ae4879833ee0111ba3b2.svg",v=t.p+"e475a365a63ab9c3b484.svg",b=t.p+"30871ebbc0ad7f46a1c7.svg",y=t.p+"48665a8ce082e5f12710.svg",w=t.p+"c051a30b157b9deadd0d.svg",x=t.p+"e196dd569ecbcb92d569.svg",C=t.p+"b2002308f81e96903120.svg",L=t.p+"2806967ff884b67af8fc.svg",T=t.p+"dc9544a72b2cf7a92579.svg",E=t.p+"0bac57fcee185c845528.svg",S=t.p+"2062ce2d4d0e8d018369.svg";function M(e,n){const t={k:m,K:h,q:v,Q:b,r:y,R:w,b:x,B:C,n:L,N:T,p:E,P:S};if("#"!==n){const r=new Image;r.src=t[n],r.classList.add(n),function(t){let r=0,o=0,a=0,i=0;function s(e){(e=e||window.event).preventDefault(),r=a-e.clientX,o=i-e.clientY,a=e.clientX,i=e.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-r+"px",t.style.zIndex="2"}function c(){document.onmouseup=null,document.onmousemove=null;let r=document.querySelectorAll("#board .square"),o=t.getBoundingClientRect(),a=o.left+o.width/2,i=o.top+o.height/2,s=null,c=1/0;if(r.forEach((e=>{let n=e.getBoundingClientRect(),t=n.left+n.width/2,r=n.top+n.height/2,o=Math.sqrt(Math.pow(a-t,2)+Math.pow(i-r,2));o<c&&(s=e,c=o)})),s&&c<s.getBoundingClientRect().width/2){console.log(c,s.getBoundingClientRect().width/2);let r=null===s.firstChild?"":"x";s.innerHTML="",e.innerHTML="",t.style.zIndex="1",M(s,n),console.log(n,s),console.log(function(e,n,t,r,o){const a=["a","b","c","d","e","f","g","h"],i=["1","2","3","4","5","6","7","8"];let s,c,l="";return n.classList.forEach((e=>{a.includes(e)&&(s=e)})),n.parentElement.classList.forEach((e=>{i.includes(e)&&(c=e)})),l="#",console.log(t.firstChild),`${"p"===e.toLowerCase()?"":e.toLowerCase()}${t}${s}${c}${l}`}(n,s,r))}else e.innerHTML="",M(e,n)}t.onmousedown=function(e){(e=e||window.event).preventDefault(),a=e.clientX,i=e.clientY;let n=t.getBoundingClientRect(),r=n.left-t.offsetLeft,o=n.top-t.offsetTop,l=t.offsetWidth/2,d=t.offsetHeight/2;t.style.left=a-l-r+"px",t.style.top=i-d-o+"px",document.onmouseup=c,document.onmousemove=s}}(r),e.appendChild(r)}}!function(e){const n=document.getElementById("board"),t=["a","b","c","d","e","f","g","h"],r=function(e){const n=e.split(" ");console.log(n);const t=n[0].split("/");console.log(t);let r=[];return t.reverse().forEach((e=>{let n=[];for(let t=0;t<e.length;t++)if(isNaN(e[t]))n.push(e[t]);else for(let r=0;r<e[t];r++)n.push("#");r.push(n)})),console.log(r),r}("3r4/1p3p1p/p4p2/2b1nNk1/6P1/2P3KP/P1P1rP2/8 w - - 0 41");let o=!1;for(let e=8;e>0;e--){let a=document.createElement("div");a.classList.add("row"),a.classList.add(`${e}`);for(let n=0;n<8;n++){let i=document.createElement("div");o&&i.classList.add("darkSquare"),o=!o,i.classList.add("square"),i.classList.add(`${t[n]}`),M(i,r[e-1][n]),a.appendChild(i)}o=!o,n.appendChild(a)}}()})()})();