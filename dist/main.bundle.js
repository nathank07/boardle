(()=>{"use strict";var e={519:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(933),o=n.n(r),i=n(476),s=n.n(i)()(o());s.push([e.id,"body{\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    margin: 0;\n}\n\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dcdcdc;\n}\n\n.header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(54, 54, 54);\n    padding: 0.5rem;\n}\n\n.content{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.content .left{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.content .right{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    margin: 1rem;\n}\n\n.answRow{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    gap: 8px;\n}\n\n.answRow>*{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border: #dcdcdc solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n\n#board{\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    background-color: #F0D9B5;\n    margin: 1rem;\n}\n\n#board .darkSquare{\n    background-color: #B58863;\n}\n\n#board .row>*{\n    width: 100%;\n    position: relative;\n    aspect-ratio: 1 / 1;\n}\n\n#board .row>*>*{\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    user-select: none;\n}\n\n#board .row{\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n\nbutton{\n    color:black;\n    width: 100%;\n    padding:0.4rem;\n}\n\n.buttons{\n    display:flex;\n    width: 100%;\n    margin-top: -0.4rem;\n}\n\n.back{\n    margin-left: 0;\n    margin-right: 0.1rem;\n}\n\n.submit{\n    margin-right: 0;\n    margin-left: 0.1rem;\n}",""]);const l=s},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(s[c]=!0)}for(var a=0;a<e.length;a++){var f=[].concat(e[a]);r&&s[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],l=0;l<e.length;l++){var c=e[l],a=r.base?c[0]+r.base:c[0],f=i[a]||0,u="".concat(a," ").concat(f);i[a]=f+1;var d=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=n(i[s]);t[l].references--}for(var c=r(e,o),a=0;a<i.length;a++){var f=n(i[a]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=c}}},311:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(892),t=n.n(e),r=n(760),o=n.n(r),i=n(311),s=n.n(i),l=n(192),c=n.n(l),a=n(60),f=n.n(a),u=n(865),d=n.n(u),p=n(519),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m=n.p+"c83f5581968cfa1416d4.svg",b=n.p+"ae4879833ee0111ba3b2.svg",g=n.p+"e475a365a63ab9c3b484.svg",y=n.p+"30871ebbc0ad7f46a1c7.svg",v=n.p+"48665a8ce082e5f12710.svg",E=n.p+"c051a30b157b9deadd0d.svg",L=n.p+"e196dd569ecbcb92d569.svg",w=n.p+"b2002308f81e96903120.svg",M=n.p+"2806967ff884b67af8fc.svg",C=n.p+"dc9544a72b2cf7a92579.svg",T=n.p+"0bac57fcee185c845528.svg",q=n.p+"2062ce2d4d0e8d018369.svg",k=document.querySelector(".unsubmitted"),x=e=>/^[A-Z]*$/.test(e);function S(e,t){const n={k:m,K:b,q:g,Q:y,r:v,R:E,b:L,B:w,n:M,N:C,p:T,P:q};if("#"!==t&&"e"!==t&&"E"!==t){const r=new Image;r.src=n[t],r.classList.add(t),function(n){let r=0,o=0,i=0,s=0;function l(e){(e=e||window.event).preventDefault(),r=i-e.clientX,o=s-e.clientY,i=e.clientX,s=e.clientY,n.style.top=n.offsetTop-o+"px",n.style.left=n.offsetLeft-r+"px",n.style.zIndex="2"}function c(){document.onmouseup=null,document.onmousemove=null;let r=document.querySelectorAll("#board .square"),o=n.getBoundingClientRect(),i=o.left+o.width/2,s=o.top+o.height/2,l=null,c=1/0;r.forEach((e=>{let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,o=Math.sqrt(Math.pow(i-n,2)+Math.pow(s-r,2));o<c&&(l=e,c=o)}));const a=document.getElementById("board");let f=null!==l.firstChild;const u=l.firstChild;l&&l!==e&&c<l.getBoundingClientRect().width/2&&B(t,e,l,f,P())&&""===_[5][0]?(l.innerHTML="",e.innerHTML="",n.style.zIndex="1",S(l,t),function(e){return A(e,N[0])}(a)?(l.innerHTML="",null!==u&&l.appendChild(u),S(e,t)):(A(a,!N[0])?Z(_,!1,H(t,l,f,!0,function(e,t){const n=P(),r=[...n].reverse();let o=[];[...e.querySelectorAll(".row")].reverse().forEach((e=>{let t=[];e.querySelectorAll(".square").forEach((e=>{t.push(e)})),o.push(t)}));let i=0;for(let e=0;e<r.length;e++)for(let l=0;l<r.length;l++)if("#"!==r[e][l]&&"e"!==r[e][l]&&"E"!==r[e][l]&&x(r[e][l])===t)switch(r[e][l].toLowerCase()){case"p":const t=[[1,0],[2,0],[-1,0],[-2,0],[1,1],[1,-1],[-1,-1],[-1,1]];for(const[c,a]of t){const t=e+c,f=l+a;if(t>=0&&t<8&&f>=0&&f<8){const c="#"!==r[t][f]&&"e"!==r[t][f]&&"E"!==r[t][f];B(r[e][l],o[e][l],o[t][f],c,n,!0)&&s(r[e][l],o[e][l],o[t][f])&&(i+=1)}}break;case"n":const c=[[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];for(const[t,a]of c){let c=e+t,f=l+a;if(c>=0&&c<8&&f>=0&&f<8){const t="#"!==r[c][f]&&"e"!==r[c][f]&&"E"!==r[c][f];B(r[e][l],o[e][l],o[c][f],t,n,!0)&&s(r[e][l],o[e][l],o[c][f])&&(i+=1)}}case"b":const a=[[1,1],[1,-1],[-1,-1],[-1,1]];for(const[t,c]of a){let a=e+t,f=l+c;for(;a>=0&&a<8&&f>=0&&f<8;){const u="#"!==r[a][f]&&"e"!==r[a][f]&&"E"!==r[a][f];if(B(r[e][l],o[e][l],o[a][f],u,n,!0)&&s(r[e][l],o[e][l],o[a][f])&&(i+=1),u)break;a+=t,f+=c}}break;case"r":const f=[[0,1],[1,0],[0,-1],[-1,0]];for(const[t,c]of f){let a=e+t,f=l+c;for(;a>=0&&a<8&&f>=0&&f<8;){const u="#"!==r[a][f]&&"e"!==r[a][f]&&"E"!==r[a][f];if(B(r[e][l],o[e][l],o[a][f],u,n,!0)&&s(r[e][l],o[e][l],o[a][f])&&(i+=1),u)break;a+=t,f+=c}}break;case"q":const u=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[t,c]of u){let a=e+t,f=l+c;for(;a>=0&&a<8&&f>=0&&f<8;){const u="#"!==r[a][f]&&"e"!==r[a][f]&&"E"!==r[a][f];if(console.log(u),B(r[e][l],o[e][l],o[a][f],u,n,!0)&&s(r[e][l],o[e][l],o[a][f])&&(i+=1),u)break;a+=t,f+=c}}break;case"k":const d=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[t,c]of d){let a=e+t,f=l+c;if(a>=0&&a<8&&f>=0&&f<8){const t="#"!==r[a][f]&&"e"!==r[a][f]&&"E"!==r[a][f];B(r[e][l],o[e][l],o[a][f],t,n,!0)&&s(r[e][l],o[e][l],o[a][f])&&(i+=1)}}}function s(n,r,o){const i=o.firstChild;return r.innerHTML="",o.innerHTML="",S(o,n),A(e,t)?(o.innerHTML="",i&&o.appendChild(i),S(r,n),!1):(o.innerHTML="",i&&o.appendChild(i),S(r,n),!0)}return 0===i}(a,!N[0]))):Z(_,!1,H(t,l,f,!1,!1)),N[0]=!N[0])):(e.innerHTML="",S(e,t))}n.onmousedown=function(e){(e=e||window.event).preventDefault(),i=e.clientX,s=e.clientY;let t=n.getBoundingClientRect(),r=t.left-n.offsetLeft,o=t.top-n.offsetTop,a=n.offsetWidth/2,f=n.offsetHeight/2;n.style.left=i-a-r+"px",n.style.top=s-f-o+"px",document.onmouseup=c,document.onmousemove=l}}(r),e.appendChild(r)}if("e"===t||"E"===t){const n=document.createElement("div");n.classList.add(`${t}`),e.appendChild(n)}}function H(e,t,n,r,o){return`${"p"===e.toLowerCase()?"":e.toLowerCase()}${n?"x":""}${$(t)}${o?"#":r?"+":""}`}function $(e){const t=["a","b","c","d","e","f","g","h"],n=["_1","_2","_3","_4","_5","_6","_7","_8"];let r,o;return e.classList.forEach((e=>{t.includes(e)&&(r=e)})),e.parentElement.classList.forEach((e=>{n.includes(e)&&(o=e[1])})),`${r}${o}`}function P(){let e=[];return document.getElementById("board").querySelectorAll(".row").forEach((t=>{let n=[];t.querySelectorAll(".square").forEach((e=>{null===e.firstChild?n.push("#"):n.push(e.firstChild.classList[0])})),e.push(n)})),e}function B(e,t,n,r,o,i){const s={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8},l=s[$(t)[0]],c=s[$(n)[0]],a=Number($(t)[1]),f=Number($(n)[1]);let u=a-1,d=l-1;const p=[...o].reverse();if(!i&&N[0]!==x(e))return!1;if(r){if(x(p[f-1][c-1])===x(e))return!1;if(("e"===n.firstChild.classList[0]||"E"===n.firstChild.classList[0])&&"p"!==e.toLowerCase())return!1}switch(e.toLowerCase()){case"p":const h="P"===e?1:-1,m="P"===e?2:7;if(r)return f-a===h&&(c===l+1||c===l-1)&&("e"!==n.firstChild.classList[0]&&"E"!==n.firstChild.classList[0]||R([f-1-h,c-1],x(e),!0),R(),!0);if(l===c&&f-a===h)return R(),!0;if(l===c&&a===m&&f-a==2*h&&"#"===p[u+h][d])return R([u+h,d],x(e),!1),!0;break;case"n":if(2===Math.abs(c-l)&&1===Math.abs(f-a)||1===Math.abs(c-l)&&2===Math.abs(f-a))return R(),!0;break;case"b":if(c>l){if(f>a){for(let g=a+1;g<f;g++)if(u+=1,d+=1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;if(f-2===u&&c-2===d)return R(),!0}if(f<a){for(let y=a-1;y>f;y--)if(u-=1,d-=-1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;if(f===u&&c-2===d)return R(),!0}}if(c<l){if(f>a){for(let v=a+1;v<f;v++)if(u-=-1,d-=1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;if(f-2===u&&c===d)return R(),!0}if(f<a){for(let E=a-1;E>f;E--)if(u+=-1,d+=-1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;if(f===u&&c===d)return R(),!0}}break;case"r":if(a===f){if(l<c){for(let L=c-1;L>l;L--)if(d+=1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;return b(),R(),!0}for(let w=l-1;w>c;w--)if(d-=1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;return b(),R(),!0}if(l===c){if(a<f){for(let M=f-1;M>a;M--)if(u+=1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;return b(),R(),!0}for(let C=a-1;C>f;C--)if(u-=1,"#"!==p[u][d]&&"e"!==p[u][d]&&"E"!==p[u][d])return!1;return b(),R(),!0}function b(){i||(1===a&&1===l&&(N[1]=!1),1===a&&8===l&&(N[2]=!1),8===a&&1===l&&(N[3]=!1),8===a&&8===l&&(N[4]=!1))}break;case"q":if(B("Q"===e?"R":"r",t,n,r,o,!0))return R(),!0;if(B("Q"===e?"B":"b",t,n,r,o,!0))return R(),!0;break;case"k":if(1===Math.abs(c-l)&&1===Math.abs(f-a)||0===Math.abs(c-l)&&1===Math.abs(f-a)||1===Math.abs(c-l)&&0===Math.abs(f-a))return x(e)?(N[1]=!1,N[2]=!1):(N[3]=!1,N[4]=!1),R(),!0;if(!(1!==f&&8!==f||3!==c&&7!==c)){if(x(e)&&1===f)if(3==c){if(N[2]&&I(!0,!0))return R(),!0}else if(N[1]&&I(!0,!1))return R(),!0;if(!x(e)&&8===f)if(3==c){if(N[4]&&I(!1,!0))return R(),!0}else if(N[3]&&I(!1,!1))return R(),!0}}return!1}function A(e,t){const n=P(),r=function(e){const t=[...n].reverse(),r=e?"K":"k";for(let e=0;e<t.length;e++)for(let n=0;n<t.length;n++)if(r===t[e][n])return[e+1,n+1]}(t),o=e.querySelector(`._${r[0]}`).querySelector(`.${{1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h"}[r[1]]}`);let i=!1;return e.querySelectorAll(".row").forEach((e=>{e.querySelectorAll(".square").forEach((e=>{null!==e.firstChild&&x(e.firstChild.classList[0])!==t&&B(e.firstChild.classList[0],e,o,!0,n,!0)&&(i=!0)}))})),i}function I(e,t){const n=document.getElementById("board");let r=[];if([...n.querySelectorAll(".row")].reverse().forEach((e=>{let t=[];e.querySelectorAll(".square").forEach((e=>{t.push(e)})),r.push(t)})),e){if(A(n,e))return!1;if(t&&null===r[0][0].firstChild)return!1;if(!t&&null===r[0][7].firstChild)return!1;if(t&&N[2]&&""===r[0][1].innerHTML&&""===r[0][2].innerHTML&&""===r[0][3].innerHTML&&"R"===r[0][0].firstChild.classList[0]){if(o(r[0][4],r[0][3])&&o(r[0][4],r[0][2]))return r[0][0].innerHTML="",S(r[0][3],"R"),!0}else if(!t&&N[1]&&""===r[0][5].innerHTML&&""===r[0][6].innerHTML&&"R"===r[0][7].firstChild.classList[0]&&o(r[0][4],r[0][5])&&o(r[0][4],r[0][6]))return r[0][7].innerHTML="",S(r[0][5],"R"),!0}else{if(A(n,e))return!1;if(t&&null===r[7][7].firstChild)return!1;if(!t&&null===r[7][0].firstChild)return!1;if(t&&N[4]&&""===r[7][1].innerHTML&&""===r[7][2].innerHTML&&"r"===r[7][0].firstChild.classList[0]){if(o(r[7][4],r[7][3])&&o(r[7][4],r[7][2]))return r[7][0].innerHTML="",S(r[7][3],"r"),!0}else if(!t&&N[3]&&""===r[7][5].innerHTML&&""===r[7][6].innerHTML&&"r"===r[7][7].firstChild.classList[0]&&o(r[7][4],r[7][5])&&o(r[7][4],r[7][6]))return r[7][7].innerHTML="",S(r[7][5],"r"),!0}function o(t,r){t.innerHTML="",S(r,e?"K":"k");let o=!A(n,e);return r.innerHTML="",S(t,e?"K":"k"),o}return!1}function R(e,t,n){const r=document.getElementById("board");let o=[];[...r.querySelectorAll(".row")].reverse().forEach((e=>{let t=[];e.querySelectorAll(".square").forEach((e=>{""===e.innerHTML||"e"!==e.firstChild.classList[0]&&"E"!==e.firstChild.classList[0]||(e.innerHTML=""),t.push(e)})),o.push(t)})),void 0!==e&&(!0===n&&(o[e[0]][e[1]].innerHTML=""),null!==e&&!0!==n&&S(o[e[0]][e[1]],t?"E":"e"))}let N=[!1,!1,!1,!1,!1],_=[[""],["",""],["",""],["",""],["",""],["",""]],K=!0;function j(e,t){const n=document.getElementById("board");document.getElementById("board").innerHTML="";const r=["a","b","c","d","e","f","g","h"],o=function(e){N=[!1,!1,!1,!1,!1];const t=e.split(" ");"w"===t[1]&&(N[0]=!0),t[2].split("").forEach((e=>{"K"===e&&(N[1]=!0),"Q"===e&&(N[2]=!0),"k"===e&&(N[3]=!0),"q"===e&&(N[4]=!0)}));const n=t[0].split("/");let r=[];if(n.reverse().forEach((e=>{let t=[];for(let n=0;n<e.length;n++)if(isNaN(e[n]))t.push(e[n]);else for(let r=0;r<e[n];r++)t.push("#");r.push(t)})),"-"!==t[3]){const e={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[t[3].split("")[0]];"6"===t[3].split("")[1]?r[5][e]="e":r[2][e]="E"}return r}(e);let i=!1;for(let e=8;e>0;e--){let t=document.createElement("div");t.classList.add("row"),t.classList.add(`_${e}`);for(let n=0;n<8;n++){let s=document.createElement("div");i&&s.classList.add("darkSquare"),i=!i,s.classList.add("square"),s.classList.add(`${r[n]}`),S(s,o[e-1][n]),t.appendChild(s)}i=!i,n.appendChild(t)}void 0!==t&&function(e){e.split(" ")}(t),N[0]||O(),_[0]=Q()}function Q(){let e=P(),t="",n=N[0]?"w":"b",r=`${N[1]?"K":""}${N[2]?"Q":""}${N[3]?"k":""}${N[4]?"q":""}`;return e.forEach((e=>{let n="",r=0;e.forEach((e=>{"#"===e?r+=1:0!==r?(n+=`${r}${e}`,r=0):n+=e})),t+=0!==r?`${n}${r}/`:`${n}/`})),t=t.slice(0,-1),`${t} ${n} ${r||"-"} -`}function O(){let e;e=""!==document.getElementById("board").firstChild.style.order&&"-1"===document.getElementById("board").firstChild.style.order?1:-1;let t=0;document.getElementById("board").querySelectorAll(".row").forEach((n=>{let r=0;t+=e,n.style.order=t,n.querySelectorAll(".square").forEach((t=>{r+=e,t.style.order=r}))})),K=!K}function Z(e,t,n){if(t);else for(let t=1;t<=5;t++)""===e[t][0]&&(e[t][0]=Q(),e[t][1]=n,t=5);!function(e){const t=[];k.querySelectorAll(".square").forEach((e=>{t.push(e)}));for(let n=1;n<=5;n++)t[n-1].innerHTML=e[n][1]}(e)}document.querySelector(".submit").addEventListener("click",O),j("rnbqkbnr/pp2pppp/2p5/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3"),j("rnbqkbnr/ppp1pppp/8/8/3pP3/2PP4/PP3PPP/RNBQKBNR b KQkq e3 0 3")})()})();