(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([e.id,"body{\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    margin: 0;\n}\n\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dcdcdc;\n}\n\n.header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(54, 54, 54);\n    padding: 0.5rem;\n}\n\n.content{\n    display:grid;\n    grid-template-columns: 0.5fr 2fr;\n}\n\n.content .left{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.content .right{\n    margin: 1rem;\n}\n\n.answRow{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 10px;\n}\n\n.answRow>*{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border: #dcdcdc solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n}\n\n#board{\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    aspect-ratio: 1 / 1;\n    background-color: #F0D9B5;\n    position: relative;\n}\n\n#board .darkSquare{\n    background-color: #B58863;\n}\n\n#board .row>*{\n    width: 100%;\n    position: relative;\n    aspect-ratio: 1 / 1;\n}\n\n#board .row>*>*{\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    user-select: none;\n}\n\n#board .row{\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n\n.buttons button{\n    color:black;\n    width: 100%;\n    padding:0.4rem;\n}\n\n.buttons{\n    display:flex;\n    width: 100%;\n    margin-top: 0.8rem;\n}\n\n.back{\n    margin-left: 0;\n    margin-right: 0.1rem;\n}\n\n.submit{\n    margin-right: 0;\n    margin-left: 0.1rem;\n}\n\n.green{\n    background-color: #6e8c32;\n}\n\n.gray{\n    background-color: #444 /* Jhin */;\n}\n\n.yellow{\n    background-color: rgb(191, 157, 44);\n}\n\n#board .row>* .prompt{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 3;\n}\n\n.prompt>button{\n    background-color: transparent;\n    display: flex;\n    border: none;\n    padding: 0px;\n}\n\n.overlay{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n}\n\n.prompt>button>img{\n    width: 100%;\n}\n\n.prompt>button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor: pointer;\n}\n\n#playarea{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#playarea >*{\n    margin:1rem;\n}\n\n#playarea >.boxes{\n    margin-left: 0rem;\n}\n\n.info>div{\n    background-color: rgb(54, 54, 54);\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.flipbutton{\n    color: black;\n}\n\n.flip{\n    display: flex;\n    color: black;\n}\n\n.searchbar>* {\n    color:black\n}\n\n.random{\n    color:black;\n    width: 65%;\n    padding: 0.5rem;\n}\n\n.rating > div:last-child{\n    display: flex;\n    flex-wrap:wrap;\n    gap: 10px;\n    margin: 0.5rem;\n    margin-left: 0;\n}\n\n.rating:last-of-type button{\n    font-size: large;\n    border: none;\n    background-color: rgb(19, 133, 226);\n    border-radius: 8px;\n    padding: 4px;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\n.rating:last-of-type button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor:pointer;\n}",""]);const a=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=o(p,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),c=t.n(i),a=t(565),s=t.n(a),l=t(216),u=t.n(l),d=t(589),f=t.n(d),p=t(28),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m=t.p+"c83f5581968cfa1416d4.svg",g=t.p+"ae4879833ee0111ba3b2.svg",b=t.p+"e475a365a63ab9c3b484.svg",y=t.p+"30871ebbc0ad7f46a1c7.svg",v=t.p+"48665a8ce082e5f12710.svg",L=t.p+"c051a30b157b9deadd0d.svg",E=t.p+"e196dd569ecbcb92d569.svg",w=t.p+"b2002308f81e96903120.svg",q=t.p+"2806967ff884b67af8fc.svg",M=t.p+"dc9544a72b2cf7a92579.svg",C=t.p+"0bac57fcee185c845528.svg",k=t.p+"2062ce2d4d0e8d018369.svg",S=e=>/^[A-Z]*$/.test(e);function T(e,n){const t={k:m,K:g,q:b,Q:y,r:v,R:L,b:E,B:w,n:q,N:M,p:C,P:k};if("#"!==n&&"e"!==n&&"E"!==n){const r=new Image;r.src=t[n],r.classList.add(n),function(t){let r=0,o=0,i=0,c=0;function a(e){(e=e||window.event).preventDefault(),r=i-e.clientX,o=c-e.clientY,i=e.clientX,c=e.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-r+"px",t.style.zIndex="2"}function s(){document.onmouseup=null,document.onmousemove=null;let r=document.querySelectorAll("#board .square"),o=t.getBoundingClientRect(),i=o.left+o.width/2,c=o.top+o.height/2,a=null,s=1/0;r.forEach((e=>{let n=e.getBoundingClientRect(),t=n.left+n.width/2,r=n.top+n.height/2,o=Math.sqrt(Math.pow(i-t,2)+Math.pow(c-r,2));o<s&&(a=e,s=o)})),s<a.getBoundingClientRect().width/2?(x(e,a,"",!0),t.style.zIndex="1"):(e.innerHTML="",T(e,n))}t.onmousedown=function(e){(e=e||window.event).preventDefault(),i=e.clientX,c=e.clientY;let n=t.getBoundingClientRect(),r=n.left-t.offsetLeft,o=n.top-t.offsetTop,l=t.offsetWidth/2,u=t.offsetHeight/2;t.style.left=i-l-r+"px",t.style.top=c-u-o+"px",document.onmouseup=s,document.onmousemove=a}}(r),e.appendChild(r)}if("e"===n||"E"===n){const t=document.createElement("div");t.classList.add(`${n}`),e.appendChild(t)}}function x(e,n,t,r){const o=document.getElementById("board"),i=e.firstChild.classList[0],c=null!==n.firstChild,a=n.firstChild;if(n&&n!==e&&B(i,e,n,c,A()))if(""===z[5][0]){function s(){!function(e){return _(e,P[0])}(o)?(P[0]=!P[0],r&&(_(o,P[0])?X(z,!1,H(i,n,c,!0,function(e,n){const t=A(),r=[...t].reverse();let o=[];[...e.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),o.push(n)}));let i=0;for(let e=0;e<r.length;e++)for(let a=0;a<r.length;a++)if("#"!==r[e][a]&&"e"!==r[e][a]&&"E"!==r[e][a]&&S(r[e][a])===n)switch(r[e][a].toLowerCase()){case"p":const n=[[1,0],[2,0],[-1,0],[-2,0],[1,1],[1,-1],[-1,-1],[-1,1]];for(const[s,l]of n){const n=e+s,u=a+l;if(n>=0&&n<8&&u>=0&&u<8){const s="#"!==r[n][u]&&"e"!==r[n][u]&&"E"!==r[n][u];B(r[e][a],o[e][a],o[n][u],s,t,!0)&&c(r[e][a],o[e][a],o[n][u])&&(i+=1)}}break;case"n":const s=[[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];for(const[n,l]of s){let s=e+n,u=a+l;if(s>=0&&s<8&&u>=0&&u<8){const n="#"!==r[s][u]&&"e"!==r[s][u]&&"E"!==r[s][u];B(r[e][a],o[e][a],o[s][u],n,t,!0)&&c(r[e][a],o[e][a],o[s][u])&&(i+=1)}}case"b":const l=[[1,1],[1,-1],[-1,-1],[-1,1]];for(const[n,s]of l){let l=e+n,u=a+s;for(;l>=0&&l<8&&u>=0&&u<8;){const d="#"!==r[l][u]&&"e"!==r[l][u]&&"E"!==r[l][u];if(B(r[e][a],o[e][a],o[l][u],d,t,!0)&&c(r[e][a],o[e][a],o[l][u])&&(i+=1),d)break;l+=n,u+=s}}break;case"r":const u=[[0,1],[1,0],[0,-1],[-1,0]];for(const[n,s]of u){let l=e+n,u=a+s;for(;l>=0&&l<8&&u>=0&&u<8;){const d="#"!==r[l][u]&&"e"!==r[l][u]&&"E"!==r[l][u];if(B(r[e][a],o[e][a],o[l][u],d,t,!0)&&c(r[e][a],o[e][a],o[l][u])&&(i+=1),d)break;l+=n,u+=s}}break;case"q":const d=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[n,s]of d){let l=e+n,u=a+s;for(;l>=0&&l<8&&u>=0&&u<8;){const d="#"!==r[l][u]&&"e"!==r[l][u]&&"E"!==r[l][u];if(B(r[e][a],o[e][a],o[l][u],d,t,!0)&&c(r[e][a],o[e][a],o[l][u])&&(i+=1),d)break;l+=n,u+=s}}break;case"k":const f=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[n,s]of f){let l=e+n,u=a+s;if(l>=0&&l<8&&u>=0&&u<8){const n="#"!==r[l][u]&&"e"!==r[l][u]&&"E"!==r[l][u];B(r[e][a],o[e][a],o[l][u],n,t,!0)&&c(r[e][a],o[e][a],o[l][u])&&(i+=1)}}}function c(t,r,o){const i=o.firstChild;return r.innerHTML="",o.innerHTML="",T(o,t),_(e,n)?(o.innerHTML="",i&&o.appendChild(i),T(r,t),!1):(o.innerHTML="",i&&o.appendChild(i),T(r,t),!0)}return 0===i}(o,P[0]))):X(z,!1,H(i,n,c,!1,!1)))):(n.innerHTML="",null!==a&&n.appendChild(a),T(e,i))}n.innerHTML="",e.innerHTML="",function(e,n){return!!("p"===n&&e.parentElement.classList.contains("_1")||"P"===n&&e.parentElement.classList.contains("_8"))}(n,i)?""!==t?(T(n,P[0]?t.toUpperCase():t),s()):(async()=>{const e=await(t=n,r=P[0],new Promise((e=>{const n=document.createElement("div");n.classList.add("prompt");const o=document.createElement("div");o.classList.add("overlay"),document.getElementById("board").appendChild(o);const i=document.createElement("button"),c=new Image;c.src=r?y:b,i.appendChild(c),i.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"Q":"q")}));const a=document.createElement("button"),s=new Image;s.src=r?L:v,a.appendChild(s),a.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"R":"r")}));const l=document.createElement("button"),u=new Image;u.src=r?w:E,l.appendChild(u),l.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"B":"b")}));const d=document.createElement("button"),f=new Image;f.src=r?M:q,d.appendChild(f),d.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"N":"n")})),n.appendChild(i),n.appendChild(a),n.appendChild(l),n.appendChild(d),t.appendChild(n)})));var t,r;T(n,e),s()})():(T(n,i),s())}else e.innerHTML="",T(e,i);else e.innerHTML="",T(e,i)}function H(e,n,t,r,o){return`${"p"===e.toLowerCase()?"":e.toLowerCase()}${t?"x":""}${$(n)}${o?"#":r?"+":""}`}function $(e){const n=["a","b","c","d","e","f","g","h"],t=["_1","_2","_3","_4","_5","_6","_7","_8"];let r,o;return e.classList.forEach((e=>{n.includes(e)&&(r=e)})),e.parentElement.classList.forEach((e=>{t.includes(e)&&(o=e[1])})),`${r}${o}`}function I(e){const n=e.split("");return document.querySelector(`.${{1:"_1",2:"_2",3:"_3",4:"_4",5:"_5",6:"_6",7:"_7",8:"_8"}[n[1]]} .square.${n[0]}`)}function A(){let e=[];return document.getElementById("board").querySelectorAll(".row").forEach((n=>{let t=[];n.querySelectorAll(".square").forEach((e=>{null===e.firstChild?t.push("#"):t.push(e.firstChild.classList[0])})),e.push(t)})),e}function B(e,n,t,r,o,i){const c={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8},a=c[$(n)[0]],s=c[$(t)[0]],l=Number($(n)[1]),u=Number($(t)[1]);let d=l-1,f=a-1;const p=[...o].reverse();if(!i&&P[0]!==S(e))return!1;if(r){if(S(p[u-1][s-1])===S(e))return!1;if(("e"===t.firstChild.classList[0]||"E"===t.firstChild.classList[0])&&"p"!==e.toLowerCase())return!1}switch(e.toLowerCase()){case"p":const h="P"===e?1:-1,m="P"===e?2:7;if(r)return u-l===h&&(s===a+1||s===a-1)&&("e"!==t.firstChild.classList[0]&&"E"!==t.firstChild.classList[0]||j([u-1-h,s-1],S(e),!0),j(),!0);if(a===s&&u-l===h)return j(),!0;if(a===s&&l===m&&u-l==2*h&&"#"===p[d+h][f])return j([d+h,f],S(e),!1),!0;break;case"n":if(2===Math.abs(s-a)&&1===Math.abs(u-l)||1===Math.abs(s-a)&&2===Math.abs(u-l))return j(),!0;break;case"b":if(s>a){if(u>l){for(let b=l+1;b<u;b++)if(d+=1,f+=1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;if(u-2===d&&s-2===f)return j(),!0}if(u<l){for(let y=l-1;y>u;y--)if(d-=1,f-=-1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;if(u===d&&s-2===f)return j(),!0}}if(s<a){if(u>l){for(let v=l+1;v<u;v++)if(d-=-1,f-=1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;if(u-2===d&&s===f)return j(),!0}if(u<l){for(let L=l-1;L>u;L--)if(d+=-1,f+=-1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;if(u===d&&s===f)return j(),!0}}break;case"r":if(l===u){if(a<s){for(let E=s-1;E>a;E--)if(f+=1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;return g(),j(),!0}for(let w=a-1;w>s;w--)if(f-=1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;return g(),j(),!0}if(a===s){if(l<u){for(let q=u-1;q>l;q--)if(d+=1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;return g(),j(),!0}for(let M=l-1;M>u;M--)if(d-=1,"#"!==p[d][f]&&"e"!==p[d][f]&&"E"!==p[d][f])return!1;return g(),j(),!0}function g(){i||(1===l&&1===a&&(P[1]=!1),1===l&&8===a&&(P[2]=!1),8===l&&1===a&&(P[3]=!1),8===l&&8===a&&(P[4]=!1))}break;case"q":if(B("Q"===e?"R":"r",n,t,r,o,!0))return j(),!0;if(B("Q"===e?"B":"b",n,t,r,o,!0))return j(),!0;break;case"k":if(1===Math.abs(s-a)&&1===Math.abs(u-l)||0===Math.abs(s-a)&&1===Math.abs(u-l)||1===Math.abs(s-a)&&0===Math.abs(u-l))return S(e)?(P[1]=!1,P[2]=!1):(P[3]=!1,P[4]=!1),j(),!0;if(!(1!==u&&8!==u||3!==s&&7!==s)){if(S(e)&&1===u)if(3==s){if(P[2]&&R(!0,!0))return j(),!0}else if(P[1]&&R(!0,!1))return j(),!0;if(!S(e)&&8===u)if(3==s){if(P[4]&&R(!1,!0))return j(),!0}else if(P[3]&&R(!1,!1))return j(),!0}}return!1}function _(e,n){const t=A(),r=function(e){const n=[...t].reverse(),r=e?"K":"k";for(let e=0;e<n.length;e++)for(let t=0;t<n.length;t++)if(r===n[e][t])return[e+1,t+1]}(n),o=e.querySelector(`._${r[0]}`).querySelector(`.square.${{1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h"}[r[1]]}`);let i=!1;return e.querySelectorAll(".row").forEach((e=>{e.querySelectorAll(".square").forEach((e=>{null!==e.firstChild&&S(e.firstChild.classList[0])!==n&&B(e.firstChild.classList[0],e,o,!0,t,!0)&&(i=!0)}))})),i}function R(e,n){const t=document.getElementById("board");let r=[];if([...t.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),r.push(n)})),e){if(_(t,e))return!1;if(n&&null===r[0][0].firstChild)return!1;if(!n&&null===r[0][7].firstChild)return!1;if(n&&P[2]&&""===r[0][1].innerHTML&&""===r[0][2].innerHTML&&""===r[0][3].innerHTML&&"R"===r[0][0].firstChild.classList[0]){if(o(r[0][4],r[0][3])&&o(r[0][4],r[0][2]))return r[0][0].innerHTML="",T(r[0][3],"R"),!0}else if(!n&&P[1]&&""===r[0][5].innerHTML&&""===r[0][6].innerHTML&&"R"===r[0][7].firstChild.classList[0]&&o(r[0][4],r[0][5])&&o(r[0][4],r[0][6]))return r[0][7].innerHTML="",T(r[0][5],"R"),!0}else{if(_(t,e))return!1;if(n&&null===r[7][7].firstChild)return!1;if(!n&&null===r[7][0].firstChild)return!1;if(n&&P[4]&&""===r[7][1].innerHTML&&""===r[7][2].innerHTML&&"r"===r[7][0].firstChild.classList[0]){if(o(r[7][4],r[7][3])&&o(r[7][4],r[7][2]))return r[7][0].innerHTML="",T(r[7][3],"r"),!0}else if(!n&&P[3]&&""===r[7][5].innerHTML&&""===r[7][6].innerHTML&&"r"===r[7][7].firstChild.classList[0]&&o(r[7][4],r[7][5])&&o(r[7][4],r[7][6]))return r[7][7].innerHTML="",T(r[7][5],"r"),!0}function o(n,r){n.innerHTML="",T(r,e?"K":"k");let o=!_(t,e);return r.innerHTML="",T(n,e?"K":"k"),o}return!1}function j(e,n,t){const r=document.getElementById("board");let o=[];[...r.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{""===e.innerHTML||"e"!==e.firstChild.classList[0]&&"E"!==e.firstChild.classList[0]||(e.innerHTML=""),n.push(e)})),o.push(n)})),void 0!==e&&(!0===t&&(o[e[0]][e[1]].innerHTML=""),null!==e&&!0!==t&&T(o[e[0]][e[1]],n?"E":"e"))}function N(){document.querySelectorAll(".answRow").forEach((e=>{e.classList.add("unsubmitted"),e.querySelectorAll(".square").forEach((e=>{e.innerHTML="",e.classList.remove("gray"),e.classList.remove("yellow"),e.classList.remove("green")}))}))}async function D(){try{const e=100*Math.floor(28*Math.random()+4),n=await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,console.log(t.moves),N(),Z(t.fen,t.moves)}catch(e){console.error(e)}}let P=[!1,!1,!1,!1,!1],z=[["",""],["",""],["",""],["",""],["",""],["",""]],K=!0,O=[],Q=!0;function Z(e,n){let t=!1;const r=document.getElementById("board");null!==r.querySelector(".row")&&r.querySelector(".row").style.order<0&&(t=!0),document.getElementById("board").innerHTML="";const o=["a","b","c","d","e","f","g","h"],i=function(e){P=[!1,!1,!1,!1,!1];const n=e.split(" ");"w"===n[1]&&(P[0]=!0),n[2].split("").forEach((e=>{"K"===e&&(P[1]=!0),"Q"===e&&(P[2]=!0),"k"===e&&(P[3]=!0),"q"===e&&(P[4]=!0)}));const t=n[0].split("/");let r=[];if(t.reverse().forEach((e=>{let n=[];for(let t=0;t<e.length;t++)if(isNaN(e[t]))n.push(e[t]);else for(let r=0;r<e[t];r++)n.push("#");r.push(n)})),"-"!==n[3]){const e={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[n[3].split("")[0]];"6"===n[3].split("")[1]?r[5][e]="e":r[2][e]="E"}return r}(e);let c=!1;for(let e=8;e>0;e--){let n=document.createElement("div");n.classList.add("row"),n.classList.add(`_${e}`);for(let t=0;t<8;t++){let r=document.createElement("div");c&&r.classList.add("darkSquare"),c=!c,r.classList.add("square"),r.classList.add(`${o[t]}`),T(r,i[e-1][t]),n.appendChild(r)}c=!c,r.appendChild(n)}K||U(),""===z[0][0]&&(P[0]||(K=!1,U()),z[0][0]=F()),void 0!==n&&(z=[["",""],["",""],["",""],["",""],["",""],["",""]],function(e){O=[];let n=e.split(" ");for(let e=0;e<n.length;e++){const t=I(n[e].substring(0,2)),r=I(n[e].substring(2,4)),o=n[e].substring(4);n.length-e<=5?x(t,r,o,!0):(x(t,r,o,!1),z[0][0]=F())}document.querySelector(".answRow").querySelectorAll(".square").forEach((e=>{O.push(e.innerHTML)}));for(let e=0;e<=5;e++)X(z,!0,""),K=!!P[0];document.querySelector(".firstMove").innerHTML=(K?"White":"Black")+" to move.",document.querySelector(".boardside").src=K?g:m}(n)),t&&U()}function F(){let e=A(),n="",t=P[0]?"w":"b",r=`${P[1]?"K":""}${P[2]?"Q":""}${P[3]?"k":""}${P[4]?"q":""}`;return e.forEach((e=>{let t="",r=0;e.forEach((e=>{"#"===e?r+=1:0!==r?(t+=`${r}${e}`,r=0):t+=e})),n+=0!==r?`${t}${r}/`:`${t}/`})),n=n.slice(0,-1),`${n} ${t} ${r||"-"} -`}function U(){let e;e=""!==document.getElementById("board").firstChild.style.order&&"-1"===document.getElementById("board").firstChild.style.order?1:-1;let n=0;document.getElementById("board").querySelectorAll(".row").forEach((t=>{let r=0;n+=e,t.style.order=n,t.querySelectorAll(".square").forEach((n=>{r+=e,n.style.order=r}))})),Q=board.querySelector(".row").style.order>0,document.querySelector(".boardside").src=Q?g:m}function X(e,n,t){if(n)for(let n=5;n>=1;n--)""!==e[n][0]?(Z(e[n-1][0]),e[n][0]="",e[n][1]="",n=0):Z(e[0][0]);else for(let n=1;n<=5;n++)""===e[n][0]&&(e[n][0]=F(),e[n][1]=t,n=5);!function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)}));for(let n=1;n<=5;n++)t[n-1].innerHTML=e[n][1]}(e)}document.querySelector(".submit").addEventListener("click",(()=>{""!==z[5][0]&&(function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)})),n.classList.remove("unsubmitted");for(let n=0;n<5;n++)t[n].innerHTML!==e[n]&&t[n].classList.add("gray"),e.includes(t[n].innerHTML)&&(t[n].classList.remove("gray"),t[n].classList.add("yellow")),t[n].innerHTML===e[n]&&(t[n].classList.remove("yellow"),t[n].classList.add("green"))}(O),z=[z[0],["",""],["",""],["",""],["",""],["",""]],Z(z[0][0]))})),document.querySelector(".back").addEventListener("click",(()=>{Q=!Q,X(z,!0,"")})),document.querySelector(".flip").addEventListener("click",U),document.querySelector(".search").addEventListener("click",(()=>{!async function(e){try{const n=await fetch(`http://nathank7256.pythonanywhere.com/searchpuzzle/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,console.log(t.moves),console.log(t),N(),Z(t.fen,t.moves)}catch(e){console.error(e)}}(document.querySelector("input").value)})),document.querySelector(".random").addEventListener("click",(()=>{D()})),document.querySelectorAll(".rating button").forEach((e=>{e.addEventListener("click",(()=>{!async function(e){try{const n=await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,console.log(t.moves),console.log(t),N(),Z(t.fen,t.moves)}catch(e){console.error(e)}}(e.textContent)}))})),D()})()})();