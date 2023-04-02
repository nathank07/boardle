(()=>{"use strict";var e={519:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(933),o=t.n(r),i=t(476),s=t.n(i)()(o());s.push([e.id,"body{\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    margin: 0;\n}\n\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dcdcdc;\n}\n\n.header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(54, 54, 54);\n    padding: 0.5rem;\n}\n\n.content{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.content .left{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.content .right{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    margin: 1rem;\n}\n\n.answRow{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    gap: 8px;\n}\n\n.answRow>*{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border: #dcdcdc solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n\n#board{\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    background-color: #F0D9B5;\n    margin: 1rem;\n    position: relative;\n}\n\n#board .darkSquare{\n    background-color: #B58863;\n}\n\n#board .row>*{\n    width: 100%;\n    position: relative;\n    aspect-ratio: 1 / 1;\n}\n\n#board .row>*>*{\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    user-select: none;\n}\n\n#board .row{\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n\n.buttons button{\n    color:black;\n    width: 100%;\n    padding:0.4rem;\n}\n\n.buttons{\n    display:flex;\n    width: 100%;\n    margin-top: -0.4rem;\n}\n\n.back{\n    margin-left: 0;\n    margin-right: 0.1rem;\n}\n\n.submit{\n    margin-right: 0;\n    margin-left: 0.1rem;\n}\n\n.green{\n    background-color: #6e8c32;\n}\n\n.gray{\n    background-color: #444 /* Jhin */;\n}\n\n.yellow{\n    background-color: rgb(191, 157, 44);\n}\n\n#board .row>* .prompt{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 3;\n}\n\n.prompt>button{\n    background-color: transparent;\n    display: flex;\n    border: none;\n    padding: 0px;\n}\n\n.overlay{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    background-color: rgba(0,0,0,0.1);\n}\n\n.prompt>button>img{\n    width: 100%;\n}\n\n.prompt>button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor: pointer;\n}",""]);const c=s},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],c=0;c<e.length;c++){var a=e[c],l=r.base?a[0]+r.base:a[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=t(u),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var c=t(i[s]);n[c].references--}for(var a=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=a}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(892),n=t.n(e),r=t(760),o=t.n(r),i=t(311),s=t.n(i),c=t(192),a=t.n(c),l=t(60),d=t.n(l),u=t(865),f=t.n(u),p=t(519),h={};h.styleTagTransform=f(),h.setAttributes=a(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m=t.p+"c83f5581968cfa1416d4.svg",g=t.p+"ae4879833ee0111ba3b2.svg",b=t.p+"e475a365a63ab9c3b484.svg",v=t.p+"30871ebbc0ad7f46a1c7.svg",y=t.p+"48665a8ce082e5f12710.svg",E=t.p+"c051a30b157b9deadd0d.svg",L=t.p+"e196dd569ecbcb92d569.svg",w=t.p+"b2002308f81e96903120.svg",C=t.p+"2806967ff884b67af8fc.svg",M=t.p+"dc9544a72b2cf7a92579.svg",k=t.p+"0bac57fcee185c845528.svg",T=t.p+"2062ce2d4d0e8d018369.svg",q=e=>/^[A-Z]*$/.test(e);function x(e,n){const t={k:m,K:g,q:b,Q:v,r:y,R:E,b:L,B:w,n:C,N:M,p:k,P:T};if("#"!==n&&"e"!==n&&"E"!==n){const r=new Image;r.src=t[n],r.classList.add(n),function(t){let r=0,o=0,i=0,s=0;function c(e){(e=e||window.event).preventDefault(),r=i-e.clientX,o=s-e.clientY,i=e.clientX,s=e.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-r+"px",t.style.zIndex="2"}function a(r){document.onmouseup=null,document.onmousemove=null;let o=document.querySelectorAll("#board .square"),i=t.getBoundingClientRect(),s=i.left+i.width/2,c=i.top+i.height/2,a=null,l=1/0;o.forEach((e=>{let n=e.getBoundingClientRect(),t=n.left+n.width/2,r=n.top+n.height/2,o=Math.sqrt(Math.pow(s-t,2)+Math.pow(c-r,2));o<l&&(a=e,l=o)}));const d=document.getElementById("board");let u=null!==a.firstChild;const f=a.firstChild;if(a&&a!==e&&l<a.getBoundingClientRect().width/2&&I(n,e,a,u,$()))if(""===_[5][0]){function p(){!function(e){return A(e,R[0])}(d)?(R[0]=!R[0],A(d,R[0])?Q(_,!1,H(n,a,u,!0,function(e,n){const t=$(),r=[...t].reverse();let o=[];[...e.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),o.push(n)}));let i=0;for(let e=0;e<r.length;e++)for(let c=0;c<r.length;c++)if("#"!==r[e][c]&&"e"!==r[e][c]&&"E"!==r[e][c]&&q(r[e][c])===n)switch(r[e][c].toLowerCase()){case"p":const n=[[1,0],[2,0],[-1,0],[-2,0],[1,1],[1,-1],[-1,-1],[-1,1]];for(const[a,l]of n){const n=e+a,d=c+l;if(n>=0&&n<8&&d>=0&&d<8){const a="#"!==r[n][d]&&"e"!==r[n][d]&&"E"!==r[n][d];I(r[e][c],o[e][c],o[n][d],a,t,!0)&&s(r[e][c],o[e][c],o[n][d])&&(i+=1)}}break;case"n":const a=[[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];for(const[n,l]of a){let a=e+n,d=c+l;if(a>=0&&a<8&&d>=0&&d<8){const n="#"!==r[a][d]&&"e"!==r[a][d]&&"E"!==r[a][d];I(r[e][c],o[e][c],o[a][d],n,t,!0)&&s(r[e][c],o[e][c],o[a][d])&&(i+=1)}}case"b":const l=[[1,1],[1,-1],[-1,-1],[-1,1]];for(const[n,a]of l){let l=e+n,d=c+a;for(;l>=0&&l<8&&d>=0&&d<8;){const u="#"!==r[l][d]&&"e"!==r[l][d]&&"E"!==r[l][d];if(I(r[e][c],o[e][c],o[l][d],u,t,!0)&&s(r[e][c],o[e][c],o[l][d])&&(i+=1),u)break;l+=n,d+=a}}break;case"r":const d=[[0,1],[1,0],[0,-1],[-1,0]];for(const[n,a]of d){let l=e+n,d=c+a;for(;l>=0&&l<8&&d>=0&&d<8;){const u="#"!==r[l][d]&&"e"!==r[l][d]&&"E"!==r[l][d];if(I(r[e][c],o[e][c],o[l][d],u,t,!0)&&s(r[e][c],o[e][c],o[l][d])&&(i+=1),u)break;l+=n,d+=a}}break;case"q":const u=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[n,a]of u){let l=e+n,d=c+a;for(;l>=0&&l<8&&d>=0&&d<8;){const u="#"!==r[l][d]&&"e"!==r[l][d]&&"E"!==r[l][d];if(I(r[e][c],o[e][c],o[l][d],u,t,!0)&&s(r[e][c],o[e][c],o[l][d])&&(i+=1),u)break;l+=n,d+=a}}break;case"k":const f=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[n,a]of f){let l=e+n,d=c+a;if(l>=0&&l<8&&d>=0&&d<8){const n="#"!==r[l][d]&&"e"!==r[l][d]&&"E"!==r[l][d];I(r[e][c],o[e][c],o[l][d],n,t,!0)&&s(r[e][c],o[e][c],o[l][d])&&(i+=1)}}}function s(t,r,o){const i=o.firstChild;return r.innerHTML="",o.innerHTML="",x(o,t),A(e,n)?(o.innerHTML="",i&&o.appendChild(i),x(r,t),!1):(o.innerHTML="",i&&o.appendChild(i),x(r,t),!0)}return 0===i}(d,R[0]))):Q(_,!1,H(n,a,u,!1,!1))):(a.innerHTML="",null!==f&&a.appendChild(f),x(e,n))}a.innerHTML="",e.innerHTML="",t.style.zIndex="1",function(e,n){return document.getElementById("board"),("p"===n||"P"===n)&&("p"===n?!!e.parentElement.classList.contains("_1"):"P"===n?!!e.parentElement.classList.contains("_8"):void 0)}(a,n)?(async()=>{const e=await function(e,n){return new Promise((t=>{const r=document.createElement("div");r.classList.add("prompt");const o=document.createElement("div");o.classList.add("overlay"),document.getElementById("board").appendChild(o);const i=document.createElement("button"),s=new Image;s.src=n?v:b,i.appendChild(s),i.addEventListener("click",(()=>{r.remove(),o.remove(),t(n?"Q":"q")}));const c=document.createElement("button"),a=new Image;a.src=n?E:y,c.appendChild(a),c.addEventListener("click",(()=>{r.remove(),o.remove(),t(n?"R":"r")}));const l=document.createElement("button"),d=new Image;d.src=n?w:L,l.appendChild(d),l.addEventListener("click",(()=>{r.remove(),o.remove(),t(n?"B":"b")}));const u=document.createElement("button"),f=new Image;f.src=n?M:C,u.appendChild(f),u.addEventListener("click",(()=>{r.remove(),o.remove(),t(n?"N":"n")})),r.appendChild(i),r.appendChild(c),r.appendChild(l),r.appendChild(u),e.appendChild(r)}))}(a,R[0]);x(a,e),p()})():(x(a,n),p())}else e.innerHTML="",x(e,n);else e.innerHTML="",x(e,n)}t.onmousedown=function(e){(e=e||window.event).preventDefault(),i=e.clientX,s=e.clientY;let n=t.getBoundingClientRect(),r=n.left-t.offsetLeft,o=n.top-t.offsetTop,l=t.offsetWidth/2,d=t.offsetHeight/2;t.style.left=i-l-r+"px",t.style.top=s-d-o+"px",document.onmouseup=a,document.onmousemove=c}}(r),e.appendChild(r)}if("e"===n||"E"===n){const t=document.createElement("div");t.classList.add(`${n}`),e.appendChild(t)}}function H(e,n,t,r,o){return`${"p"===e.toLowerCase()?"":e.toLowerCase()}${t?"x":""}${S(n)}${o?"#":r?"+":""}`}function S(e){const n=["a","b","c","d","e","f","g","h"],t=["_1","_2","_3","_4","_5","_6","_7","_8"];let r,o;return e.classList.forEach((e=>{n.includes(e)&&(r=e)})),e.parentElement.classList.forEach((e=>{t.includes(e)&&(o=e[1])})),`${r}${o}`}function $(){let e=[];return document.getElementById("board").querySelectorAll(".row").forEach((n=>{let t=[];n.querySelectorAll(".square").forEach((e=>{null===e.firstChild?t.push("#"):t.push(e.firstChild.classList[0])})),e.push(t)})),e}function I(e,n,t,r,o,i){const s={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8},c=s[S(n)[0]],a=s[S(t)[0]],l=Number(S(n)[1]),d=Number(S(t)[1]);let u=l-1,f=c-1;const p=[...o].reverse();if(!i&&R[0]!==q(e))return!1;if(r){if(q(p[d-1][a-1])===q(e))return!1;if(("e"===t.firstChild.classList[0]||"E"===t.firstChild.classList[0])&&"p"!==e.toLowerCase())return!1}switch(e.toLowerCase()){case"p":const h="P"===e?1:-1,m="P"===e?2:7;if(r)return d-l===h&&(a===c+1||a===c-1)&&("e"!==t.firstChild.classList[0]&&"E"!==t.firstChild.classList[0]||P([d-1-h,a-1],q(e),!0),P(),!0);if(c===a&&d-l===h)return P(),!0;if(c===a&&l===m&&d-l==2*h&&"#"===p[u+h][f])return P([u+h,f],q(e),!1),!0;break;case"n":if(2===Math.abs(a-c)&&1===Math.abs(d-l)||1===Math.abs(a-c)&&2===Math.abs(d-l))return P(),!0;break;case"b":if(a>c){if(d>l){for(let b=l+1;b<d;b++)if(u+=1,f+=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d-2===u&&a-2===f)return P(),!0}if(d<l){for(let v=l-1;v>d;v--)if(u-=1,f-=-1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d===u&&a-2===f)return P(),!0}}if(a<c){if(d>l){for(let y=l+1;y<d;y++)if(u-=-1,f-=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d-2===u&&a===f)return P(),!0}if(d<l){for(let E=l-1;E>d;E--)if(u+=-1,f+=-1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d===u&&a===f)return P(),!0}}break;case"r":if(l===d){if(c<a){for(let L=a-1;L>c;L--)if(f+=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),P(),!0}for(let w=c-1;w>a;w--)if(f-=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),P(),!0}if(c===a){if(l<d){for(let C=d-1;C>l;C--)if(u+=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),P(),!0}for(let M=l-1;M>d;M--)if(u-=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),P(),!0}function g(){i||(1===l&&1===c&&(R[1]=!1),1===l&&8===c&&(R[2]=!1),8===l&&1===c&&(R[3]=!1),8===l&&8===c&&(R[4]=!1))}break;case"q":if(I("Q"===e?"R":"r",n,t,r,o,!0))return P(),!0;if(I("Q"===e?"B":"b",n,t,r,o,!0))return P(),!0;break;case"k":if(1===Math.abs(a-c)&&1===Math.abs(d-l)||0===Math.abs(a-c)&&1===Math.abs(d-l)||1===Math.abs(a-c)&&0===Math.abs(d-l))return q(e)?(R[1]=!1,R[2]=!1):(R[3]=!1,R[4]=!1),P(),!0;if(!(1!==d&&8!==d||3!==a&&7!==a)){if(q(e)&&1===d)if(3==a){if(R[2]&&B(!0,!0))return P(),!0}else if(R[1]&&B(!0,!1))return P(),!0;if(!q(e)&&8===d)if(3==a){if(R[4]&&B(!1,!0))return P(),!0}else if(R[3]&&B(!1,!1))return P(),!0}}return!1}function A(e,n){const t=$(),r=function(e){const n=[...t].reverse(),r=e?"K":"k";for(let e=0;e<n.length;e++)for(let t=0;t<n.length;t++)if(r===n[e][t])return[e+1,t+1]}(n),o=e.querySelector(`._${r[0]}`).querySelector(`.${{1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h"}[r[1]]}`);let i=!1;return e.querySelectorAll(".row").forEach((e=>{e.querySelectorAll(".square").forEach((e=>{null!==e.firstChild&&q(e.firstChild.classList[0])!==n&&I(e.firstChild.classList[0],e,o,!0,t,!0)&&(i=!0)}))})),i}function B(e,n){const t=document.getElementById("board");let r=[];if([...t.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),r.push(n)})),e){if(A(t,e))return!1;if(n&&null===r[0][0].firstChild)return!1;if(!n&&null===r[0][7].firstChild)return!1;if(n&&R[2]&&""===r[0][1].innerHTML&&""===r[0][2].innerHTML&&""===r[0][3].innerHTML&&"R"===r[0][0].firstChild.classList[0]){if(o(r[0][4],r[0][3])&&o(r[0][4],r[0][2]))return r[0][0].innerHTML="",x(r[0][3],"R"),!0}else if(!n&&R[1]&&""===r[0][5].innerHTML&&""===r[0][6].innerHTML&&"R"===r[0][7].firstChild.classList[0]&&o(r[0][4],r[0][5])&&o(r[0][4],r[0][6]))return r[0][7].innerHTML="",x(r[0][5],"R"),!0}else{if(A(t,e))return!1;if(n&&null===r[7][7].firstChild)return!1;if(!n&&null===r[7][0].firstChild)return!1;if(n&&R[4]&&""===r[7][1].innerHTML&&""===r[7][2].innerHTML&&"r"===r[7][0].firstChild.classList[0]){if(o(r[7][4],r[7][3])&&o(r[7][4],r[7][2]))return r[7][0].innerHTML="",x(r[7][3],"r"),!0}else if(!n&&R[3]&&""===r[7][5].innerHTML&&""===r[7][6].innerHTML&&"r"===r[7][7].firstChild.classList[0]&&o(r[7][4],r[7][5])&&o(r[7][4],r[7][6]))return r[7][7].innerHTML="",x(r[7][5],"r"),!0}function o(n,r){n.innerHTML="",x(r,e?"K":"k");let o=!A(t,e);return r.innerHTML="",x(n,e?"K":"k"),o}return!1}function P(e,n,t){const r=document.getElementById("board");let o=[];[...r.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{""===e.innerHTML||"e"!==e.firstChild.classList[0]&&"E"!==e.firstChild.classList[0]||(e.innerHTML=""),n.push(e)})),o.push(n)})),void 0!==e&&(!0===t&&(o[e[0]][e[1]].innerHTML=""),null!==e&&!0!==t&&x(o[e[0]][e[1]],n?"E":"e"))}let R=[!1,!1,!1,!1,!1],_=[["",""],["",""],["",""],["",""],["",""],["",""]],N=!0,j=["h4+","kg6","h5+","kg5","f4#"];function K(e,n){const t=document.getElementById("board");document.getElementById("board").innerHTML="";const r=["a","b","c","d","e","f","g","h"],o=function(e){R=[!1,!1,!1,!1,!1];const n=e.split(" ");"w"===n[1]&&(R[0]=!0),n[2].split("").forEach((e=>{"K"===e&&(R[1]=!0),"Q"===e&&(R[2]=!0),"k"===e&&(R[3]=!0),"q"===e&&(R[4]=!0)}));const t=n[0].split("/");let r=[];if(t.reverse().forEach((e=>{let n=[];for(let t=0;t<e.length;t++)if(isNaN(e[t]))n.push(e[t]);else for(let r=0;r<e[t];r++)n.push("#");r.push(n)})),"-"!==n[3]){const e={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[n[3].split("")[0]];"6"===n[3].split("")[1]?r[5][e]="e":r[2][e]="E"}return r}(e);let i=!1;for(let e=8;e>0;e--){let n=document.createElement("div");n.classList.add("row"),n.classList.add(`_${e}`);for(let t=0;t<8;t++){let s=document.createElement("div");i&&s.classList.add("darkSquare"),i=!i,s.classList.add("square"),s.classList.add(`${r[t]}`),x(s,o[e-1][t]),n.appendChild(s)}i=!i,t.appendChild(n)}void 0!==n&&function(e){e.split(" ")}(n),N||O(),""===_[0][0]&&(R[0]||(N=!1,O()),_[0][0]=z())}function z(){let e=$(),n="",t=R[0]?"w":"b",r=`${R[1]?"K":""}${R[2]?"Q":""}${R[3]?"k":""}${R[4]?"q":""}`;return e.forEach((e=>{let t="",r=0;e.forEach((e=>{"#"===e?r+=1:0!==r?(t+=`${r}${e}`,r=0):t+=e})),n+=0!==r?`${t}${r}/`:`${t}/`})),n=n.slice(0,-1),`${n} ${t} ${r||"-"} -`}function O(){let e;e=""!==document.getElementById("board").firstChild.style.order&&"-1"===document.getElementById("board").firstChild.style.order?1:-1;let n=0;document.getElementById("board").querySelectorAll(".row").forEach((t=>{let r=0;n+=e,t.style.order=n,t.querySelectorAll(".square").forEach((n=>{r+=e,n.style.order=r}))}))}function Q(e,n,t){if(n)for(let n=5;n>=1;n--)""!==e[n][0]?(K(e[n-1][0]),e[n][0]="",e[n][1]="",n=0):K(e[0][0]);else for(let n=1;n<=5;n++)""===e[n][0]&&(e[n][0]=z(),e[n][1]=t,n=5);!function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)}));for(let n=1;n<=5;n++)t[n-1].innerHTML=e[n][1]}(e)}document.querySelector(".submit").addEventListener("click",(()=>{""!==_[5][0]&&(function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)})),n.classList.remove("unsubmitted");for(let n=0;n<5;n++)t[n].innerHTML!==e[n]&&t[n].classList.add("gray"),e.includes(t[n].innerHTML)&&(t[n].classList.remove("gray"),t[n].classList.add("yellow")),t[n].innerHTML===e[n]&&(t[n].classList.remove("yellow"),t[n].classList.add("green"))}(j),_=[_[0],["",""],["",""],["",""],["",""],["",""]],K(_[0][0]))})),document.querySelector(".back").addEventListener("click",(()=>{Q(_,!0,"")})),K("8/PPPPPPPP/P6K/8/8/7k/pppppppp/8 w - - 0 41")})()})();