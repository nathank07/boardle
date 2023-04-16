(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body{\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    margin: 0;\n}\n\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dcdcdc;\n}\n\n.header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(54, 54, 54);\n    padding: 0.5rem;\n}\n\n.content{\n    display:grid;\n    grid-template-columns: 0.5fr 2fr;\n}\n\n.content .left{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.content .right{\n    margin: 1rem;\n}\n\n.answRow{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 10px;\n}\n\n.answRow>*{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border: #3a3a3c solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n}\n\n#board{\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    aspect-ratio: 1 / 1;\n    background-color: #F0D9B5;\n    position: relative;\n}\n\n#board .darkSquare{\n    background-color: #B58863;\n}\n\n#board .row>*{\n    width: 100%;\n    position: relative;\n    aspect-ratio: 1 / 1;\n}\n\n#board .row>*>*{\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    user-select: none;\n}\n\n#board .row{\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n\n\n.buttons button{\n    color:black;\n    width: 100%;\n    padding:0.4rem;\n}\n\n.buttons{\n    display:flex;\n    width: 100%;\n    margin-top: 0.8rem;\n}\n\n.back{\n    margin-left: 0;\n    margin-right: 0.1rem;\n}\n\n.submit{\n    margin-right: 0;\n    margin-left: 0.1rem;\n}\n\n.green{\n    background-color: #538d4e;\n    border-color: #538d4e;\n}\n\n.gray{\n    background-color: #3a3a3c;\n}\n\n.yellow{\n    background-color: #b59f3b;\n    border-color: #b59f3b;\n}\n\n#board .row>* .prompt{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 4;\n}\n\n.prompt>button{\n    background-color: transparent;\n    display: flex;\n    border: none;\n    padding: 0px;\n}\n\n.overlay{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 3;\n}\n\n.prompt>button>img{\n    width: 100%;\n}\n\n.prompt>button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor: pointer;\n}\n\n#playarea{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#playarea >*{\n    margin:1rem;\n}\n\n#playarea >.boxes{\n    margin-left: 0rem;\n}\n\n.info>div{\n    background-color: rgb(54, 54, 54);\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.flipbutton{\n    color: black;\n}\n\n.flip{\n    display: flex;\n    color: black;\n}\n\n.searchbar>* {\n    color:black\n}\n\n.random{\n    color:black;\n    width: 65%;\n    padding: 0.5rem;\n}\n\n.rating > div:last-child{\n    display: flex;\n    flex-wrap:wrap;\n    gap: 10px;\n    margin: 0.5rem;\n    margin-left: 0;\n}\n\n.rating:last-of-type button{\n    font-size: large;\n    border: none;\n    background-color: rgb(19, 133, 226);\n    border-radius: 8px;\n    padding: 4px;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\n.rating:last-of-type button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor:pointer;\n}\n\n.fulloverlay{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    z-index: 4;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.puzzleprompt{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #151515;\n    padding: 1.2rem;\n    gap:1rem;\n    padding-bottom: 0rem;\n    border-radius: 12px;\n    z-index: 5;\n}\n.answers{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    color: white;\n}\n.answer{\n    width: 5rem;\n    border: #151515 solid 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    height: 2rem;\n}\n.solution .answer {\n    background-color: #538d4e;\n}\n.puzzleprompt .id{\n    font-size: 2rem;\n\n}\n.answerText{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0;\n}\n.footer{\n    padding-top: 1.5rem;\n    padding-bottom: 1.2rem;\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n}\n.puzzleprompt button{\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    user-select: none;\n    border: 1px transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    background-color: rgb(72, 75, 77);\n\n}\n.puzzleprompt button.share{\n    background-color: rgb(0, 116, 210);\n}\n.puzzleprompt button.engine{\n    background-color: rgb(157, 11, 11);\n}\n.playerAnswer{\n    margin-top: 1rem;\n    margin-bottom: -0.5rem;\n}\n\n.unsubmitted .white{\n    background-color: #fff;\n    color: black;\n}\n.unsubmitted .black {\n    color: #fff\n}\n\n#board .row > .annotation {\n\tposition: absolute;\n\theight: 0%;\n\tz-index: 1;\n\tuser-select: none;\n    padding: 4px;\n    pointer-events: none;\n}\n\n.bottomAnnotation {\n\tposition: absolute;\n\tbottom: 0;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n\twidth: 100%;\n\tpadding-bottom: 4px;\n\tz-index: 1;\n    direction: rtl;\n    pointer-events: none;\n}\n\n.bottomAnnotation > *{\n    padding-right: 4px;\n    user-select: none;\n}\n\n#board .square.selected{\n    background-color: rgba(255,0,0,0.5);\n}\n\n#board .darkSquare.selected{\n    background-color: #DA4331;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var f=t(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),l=t.n(c),s=t(216),d=t.n(s),u=t(589),f=t.n(u),p=t(28),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const h=t.p+"c83f5581968cfa1416d4.svg",g=t.p+"ae4879833ee0111ba3b2.svg",b=t.p+"e475a365a63ab9c3b484.svg",y=t.p+"30871ebbc0ad7f46a1c7.svg",v=t.p+"48665a8ce082e5f12710.svg",E=t.p+"c051a30b157b9deadd0d.svg",w=t.p+"e196dd569ecbcb92d569.svg",L=t.p+"b2002308f81e96903120.svg",C=t.p+"2806967ff884b67af8fc.svg",q=t.p+"dc9544a72b2cf7a92579.svg",S=t.p+"0bac57fcee185c845528.svg",k=t.p+"2062ce2d4d0e8d018369.svg",x=e=>/^[A-Z]*$/.test(e);function M(e,n){const t={k:h,K:g,q:b,Q:y,r:v,R:E,b:w,B:L,n:C,N:q,p:S,P:k};if("#"!==n&&"e"!==n&&"E"!==n){const r=new Image;r.src=t[n],r.classList.add(n),r.setAttribute("draggable",!1),function(t){let r=0,o=0,a=0,i=0;function c(e){(e=e||window.event).preventDefault(),r=a-e.clientX,o=i-e.clientY,a=e.clientX,i=e.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-r+"px",t.style.zIndex="3"}function l(){document.onmouseup=null,document.onmousemove=null;let r=document.querySelectorAll("#board .square"),o=t.getBoundingClientRect(),a=o.left+o.width/2,i=o.top+o.height/2,c=null,l=1/0;r.forEach((e=>{let n=e.getBoundingClientRect(),t=n.left+n.width/2,r=n.top+n.height/2,o=Math.sqrt(Math.pow(a-t,2)+Math.pow(i-r,2));o<l&&(c=e,l=o)})),l<c.getBoundingClientRect().width/2?($(e,c,"",!0),t.style.zIndex="1"):(R(e),M(e,n))}t.onmousedown=function(e){if(F[0]===x(t.classList[0])&&0===event.button){t.style.pointerEvents="auto",(e=e||window.event).preventDefault(),a=e.clientX,i=e.clientY;let n=t.getBoundingClientRect(),r=n.left-t.offsetLeft,o=n.top-t.offsetTop,s=t.offsetWidth/2,d=t.offsetHeight/2;t.style.left=a-s-r+"px",t.style.top=i-d-o+"px",document.onmouseup=l,document.onmousemove=c}}}(r),e.appendChild(r)}if("e"===n||"E"===n){const t=document.createElement("div");t.classList.add(`${n}`),e.appendChild(t)}}function $(e,n,t,r){const o=document.getElementById("board"),a=[o.cloneNode(!0),H()],i=e.firstElementChild.classList[0],c=null!==n.firstElementChild,l=n.firstElementChild;if(n&&n!==e&&_(i,e,n,c,H()))if(""===K[5][0]){function s(){!function(e){return B(e,F[0])}(o)?(F[0]=!F[0],r&&(B(o,F[0])?G(K,!1,A(i,e,n,c,!0,function(e,n){const t=H(),r=[...t].reverse();let o=[];[...e.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),o.push(n)}));let a=0;for(let e=0;e<r.length;e++)for(let c=0;c<r.length;c++)if("#"!==r[e][c]&&"e"!==r[e][c]&&"E"!==r[e][c]&&x(r[e][c])===n)switch(r[e][c].toLowerCase()){case"p":const n=[[1,0],[2,0],[-1,0],[-2,0],[1,1],[1,-1],[-1,-1],[-1,1]];for(const[l,s]of n){const n=e+l,d=c+s;if(n>=0&&n<8&&d>=0&&d<8){const l="#"!==r[n][d]&&"e"!==r[n][d]&&"E"!==r[n][d];_(r[e][c],o[e][c],o[n][d],l,t,!0)&&i(r[e][c],o[e][c],o[n][d])&&(a+=1)}}break;case"n":const l=[[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];for(const[n,s]of l){let l=e+n,d=c+s;if(l>=0&&l<8&&d>=0&&d<8){const n="#"!==r[l][d]&&"e"!==r[l][d]&&"E"!==r[l][d];_(r[e][c],o[e][c],o[l][d],n,t,!0)&&i(r[e][c],o[e][c],o[l][d])&&(a+=1)}}case"b":const s=[[1,1],[1,-1],[-1,-1],[-1,1]];for(const[n,l]of s){let s=e+n,d=c+l;for(;s>=0&&s<8&&d>=0&&d<8;){const u="#"!==r[s][d]&&"e"!==r[s][d]&&"E"!==r[s][d];if(_(r[e][c],o[e][c],o[s][d],u,t,!0)&&i(r[e][c],o[e][c],o[s][d])&&(a+=1),u)break;s+=n,d+=l}}break;case"r":const d=[[0,1],[1,0],[0,-1],[-1,0]];for(const[n,l]of d){let s=e+n,d=c+l;for(;s>=0&&s<8&&d>=0&&d<8;){const u="#"!==r[s][d]&&"e"!==r[s][d]&&"E"!==r[s][d];if(_(r[e][c],o[e][c],o[s][d],u,t,!0)&&i(r[e][c],o[e][c],o[s][d])&&(a+=1),u)break;s+=n,d+=l}}break;case"q":const u=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[n,l]of u){let s=e+n,d=c+l;for(;s>=0&&s<8&&d>=0&&d<8;){const u="#"!==r[s][d]&&"e"!==r[s][d]&&"E"!==r[s][d];if(_(r[e][c],o[e][c],o[s][d],u,t,!0)&&i(r[e][c],o[e][c],o[s][d])&&(a+=1),u)break;s+=n,d+=l}}break;case"k":const f=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];for(const[n,l]of f){let s=e+n,d=c+l;if(s>=0&&s<8&&d>=0&&d<8){const n="#"!==r[s][d]&&"e"!==r[s][d]&&"E"!==r[s][d];_(r[e][c],o[e][c],o[s][d],n,t,!0)&&i(r[e][c],o[e][c],o[s][d])&&(a+=1)}}}function i(t,r,o){const a=o.firstElementChild;return R(r),R(o),M(o,t),B(e,n)?(R(o),a&&o.appendChild(a),M(r,t),!1):(R(o),a&&o.appendChild(a),M(r,t),!0)}return 0===a}(o,F[0]),a)):G(K,!1,A(i,e,n,c,!1,!1,a)))):(R(n),null!==l&&n.appendChild(l),M(e,i))}R(n),R(e),function(e,n){return!!("p"===n&&e.parentElement.classList.contains("_1")||"P"===n&&e.parentElement.classList.contains("_8"))}(n,i)?""!==t?(M(n,F[0]?t.toUpperCase():t),s()):(async()=>{const e=await(t=n,r=F[0],new Promise((e=>{const n=document.createElement("div");n.classList.add("prompt");const o=document.createElement("div");o.classList.add("overlay"),document.getElementById("board").appendChild(o);const a=document.createElement("button"),i=new Image;i.src=r?y:b,a.appendChild(i),a.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"Q":"q")}));const c=document.createElement("button"),l=new Image;l.src=r?E:v,c.appendChild(l),c.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"R":"r")}));const s=document.createElement("button"),d=new Image;d.src=r?L:w,s.appendChild(d),s.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"B":"b")}));const u=document.createElement("button"),f=new Image;f.src=r?q:C,u.appendChild(f),u.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"N":"n")})),n.appendChild(a),n.appendChild(c),n.appendChild(s),n.appendChild(u),t.appendChild(n)})));var t,r;M(n,e),s()})():(M(n,i),s())}else R(e),M(e,i);else R(e),M(e,i);document.querySelectorAll(".selected").forEach((e=>{e.classList.remove("selected")}))}function A(e,n,t,r,o,a,i){let c=T(t),l="";switch(e.toLowerCase()){case"p":"1"!==c[1]&&"8"!==c[1]||(l=`=${t.firstElementChild.classList[0]}`),e=r?T(n).split("")[0]:"";break;case"k":const o=T(n);"e1"===o&&("c1"===c&&(e="O-O-O",c=""),"g1"===c&&(e="O-O",c="")),"e8"===o&&("c8"===c&&(e="O-O-O",c=""),"g8"===c&&(e="O-O",c=""));break;default:let a=function(e,n,t,r){let o=n[0].querySelectorAll(".square"),a=[];o.forEach((n=>{null!==n.firstElementChild&&n.firstElementChild.classList.contains(e)&&a.push(n)}));let i=[];a.forEach((o=>{_(e,o,t,r,n[1],!0)&&i.push(o)}));let c=new Set,l=new Set;return i.forEach((e=>{["a","b","c","d","e","f","g","h"].forEach((n=>{e.classList.contains(n)&&c.add(n)})),["_1","_2","_3","_4","_5","_6","_7","_8"].forEach((n=>{e.parentElement.classList.contains(n)&&l.add(n)}))})),[c.size>1,l.size>1]}(e,i,t,r),s=`${e}`;a[0]&&!a[1]&&(s=e+=T(n).split("")[0]),a[1]&&!a[0]&&(s=e+=T(n).split("")[1]),a[0]&&a[1]&&(s=e+=T(n)),e=s}return`${e}${r?"x":""}${c}${l}${a?"#":o?"+":""}`}function T(e){const n=["a","b","c","d","e","f","g","h"],t=["_1","_2","_3","_4","_5","_6","_7","_8"];let r,o;return e.classList.forEach((e=>{n.includes(e)&&(r=e)})),e.parentElement.classList.forEach((e=>{t.includes(e)&&(o=e[1])})),`${r}${o}`}function z(e){const n=e.split("");return document.querySelector(`.${{1:"_1",2:"_2",3:"_3",4:"_4",5:"_5",6:"_6",7:"_7",8:"_8"}[n[1]]} .square.${n[0]}`)}function H(){let e=[];return document.getElementById("board").querySelectorAll(".row").forEach((n=>{let t=[];n.querySelectorAll(".square").forEach((e=>{null===e.firstElementChild?t.push("#"):t.push(e.firstElementChild.classList[0])})),e.push(t)})),e}function _(e,n,t,r,o,a){const i={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8},c=i[T(n)[0]],l=i[T(t)[0]],s=Number(T(n)[1]),d=Number(T(t)[1]);let u=s-1,f=c-1;const p=[...o].reverse();if(!a&&F[0]!==x(e))return!1;if(r){if(x(p[d-1][l-1])===x(e))return!1;if(("e"===t.firstElementChild.classList[0]||"E"===t.firstElementChild.classList[0])&&"p"!==e.toLowerCase())return!1}switch(e.toLowerCase()){case"p":const m="P"===e?1:-1,h="P"===e?2:7;if(r)return d-s===m&&(l===c+1||l===c-1)&&("e"!==t.firstElementChild.classList[0]&&"E"!==t.firstElementChild.classList[0]||N([d-1-m,l-1],x(e),!0),N(),!0);if(c===l&&d-s===m)return N(),!0;if(c===l&&s===h&&d-s==2*m&&"#"===p[u+m][f])return N([u+m,f],x(e),!1),!0;break;case"n":if(2===Math.abs(l-c)&&1===Math.abs(d-s)||1===Math.abs(l-c)&&2===Math.abs(d-s))return N(),!0;break;case"b":if(l>c){if(d>s){for(let b=s+1;b<d;b++)if(u+=1,f+=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d-2===u&&l-2===f)return N(),!0}if(d<s){for(let y=s-1;y>d;y--)if(u-=1,f-=-1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d===u&&l-2===f)return N(),!0}}if(l<c){if(d>s){for(let v=s+1;v<d;v++)if(u-=-1,f-=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d-2===u&&l===f)return N(),!0}if(d<s){for(let E=s-1;E>d;E--)if(u+=-1,f+=-1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;if(d===u&&l===f)return N(),!0}}break;case"r":if(s===d){if(c<l){for(let w=l-1;w>c;w--)if(f+=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),N(),!0}for(let L=c-1;L>l;L--)if(f-=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),N(),!0}if(c===l){if(s<d){for(let C=d-1;C>s;C--)if(u+=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),N(),!0}for(let q=s-1;q>d;q--)if(u-=1,"#"!==p[u][f]&&"e"!==p[u][f]&&"E"!==p[u][f])return!1;return g(),N(),!0}function g(){a||(1===s&&1===c&&(F[1]=!1),1===s&&8===c&&(F[2]=!1),8===s&&1===c&&(F[3]=!1),8===s&&8===c&&(F[4]=!1))}break;case"q":if(_("Q"===e?"R":"r",n,t,r,o,!0))return N(),!0;if(_("Q"===e?"B":"b",n,t,r,o,!0))return N(),!0;break;case"k":if(1===Math.abs(l-c)&&1===Math.abs(d-s)||0===Math.abs(l-c)&&1===Math.abs(d-s)||1===Math.abs(l-c)&&0===Math.abs(d-s))return x(e)?(F[1]=!1,F[2]=!1):(F[3]=!1,F[4]=!1),N(),!0;if(!(1!==d&&8!==d||3!==l&&7!==l)){if(x(e)&&1===d)if(3==l){if(F[2]&&I(!0,!0))return N(),!0}else if(F[1]&&I(!0,!1))return N(),!0;if(!x(e)&&8===d)if(3==l){if(F[4]&&I(!1,!0))return N(),!0}else if(F[3]&&I(!1,!1))return N(),!0}}return!1}function B(e,n){const t=H(),r=function(e){const n=[...t].reverse(),r=e?"K":"k";for(let e=0;e<n.length;e++)for(let t=0;t<n.length;t++)if(r===n[e][t])return[e+1,t+1]}(n),o=e.querySelector(`._${r[0]}`).querySelector(`.square.${{1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h"}[r[1]]}`);let a=!1;return e.querySelectorAll(".row").forEach((e=>{e.querySelectorAll(".square").forEach((e=>{null!==e.firstElementChild&&x(e.firstElementChild.classList[0])!==n&&_(e.firstElementChild.classList[0],e,o,!0,t,!0)&&(a=!0)}))})),a}function I(e,n){const t=document.getElementById("board");let r=[];if([...t.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),r.push(n)})),e){if(B(t,e))return!1;if(n&&null===r[0][0].firstElementChild)return!1;if(!n&&null===r[0][7].firstElementChild)return!1;if(!n||!F[2]||r[0][1].hasChildNodes()||r[0][2].hasChildNodes()||r[0][3].hasChildNodes()||"R"!==r[0][0].firstElementChild.classList[0]){if(!n&&F[1]&&!r[0][5].hasChildNodes()&&!r[0][6].hasChildNodes()&&"R"===r[0][7].firstElementChild.classList[0]&&o(r[0][4],r[0][5])&&o(r[0][4],r[0][6]))return R(r[0][7]),M(r[0][5],"R"),!0}else if(o(r[0][4],r[0][3])&&o(r[0][4],r[0][2]))return R(r[0][0]),M(r[0][3],"R"),!0}else{if(B(t,e))return!1;if(n&&null===r[7][7].firstElementChild)return!1;if(!n&&null===r[7][0].firstElementChild)return!1;if(n&&F[4]&&""===!r[7][1].hasChildNodes()&&!r[7][2].hasChildNodes()&&"r"===r[7][0].firstElementChild.classList[0]){if(o(r[7][4],r[7][3])&&o(r[7][4],r[7][2]))return R(r[7][0]),M(r[7][3],"r"),!0}else if(!n&&F[3]&&""===!r[7][5].hasChildNodes()&&!r[7][6].hasChildNodes()&&"r"===r[7][7].firstElementChild.classList[0]&&o(r[7][4],r[7][5])&&o(r[7][4],r[7][6]))return R(r[7][7]),M(r[7][5],"r"),!0}function o(n,r){R(n),M(r,e?"K":"k");let o=!B(t,e);return R(r),M(n,e?"K":"k"),o}return!1}function N(e,n,t){const r=document.getElementById("board");let o=[];[...r.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{!e.hasChildNodes()||"e"!==e.firstElementChild.classList[0]&&"E"!==e.firstElementChild.classList[0]||R(e),n.push(e)})),o.push(n)})),void 0!==e&&(!0===t&&R(o[e[0]][e[1]]),null!==e&&!0!==t&&M(o[e[0]][e[1]],n?"E":"e"))}function R(e){for(;e.lastChild;)e.removeChild(e.lastChild)}let D;async function j(){try{const e=function(){const e=[{rating:300,percentage:.25},{rating:400,percentage:.25},{rating:500,percentage:.25},{rating:600,percentage:.25},{rating:700,percentage:1},{rating:800,percentage:1},{rating:900,percentage:2},{rating:1e3,percentage:3},{rating:1100,percentage:4},{rating:1200,percentage:4},{rating:1300,percentage:5},{rating:1400,percentage:6},{rating:1500,percentage:7},{rating:1600,percentage:8},{rating:1700,percentage:8},{rating:1800,percentage:7},{rating:1900,percentage:8},{rating:2e3,percentage:7},{rating:2100,percentage:7},{rating:2200,percentage:6},{rating:2300,percentage:5},{rating:2400,percentage:3},{rating:2500,percentage:2},{rating:2600,percentage:2},{rating:2700,percentage:1.5},{rating:2800,percentage:.5},{rating:2900,percentage:.5},{rating:3e3,percentage:.5}],n=e.reduce(((e,n)=>e+n.percentage),0);let t=Math.random()*n;for(let n=0;n<e.length;n++){const{rating:r,percentage:o}=e[n];if(t<o)return r;t-=o}}(),n=await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,P(),D=[t.id,t.rating,t.ratingDeviation,t.games],Y(t.fen,t.moves)}catch(e){console.error(e)}}function O(e){let n=F[0];e.querySelectorAll(".square").forEach((e=>{e.classList.add(n?"white":"black"),n=!n}))}function P(){document.querySelectorAll(".answRow").forEach((e=>{e.classList.add("unsubmitted"),e.querySelectorAll(".square").forEach((e=>{e.innerHTML="",e.classList.remove("gray"),e.classList.remove("yellow"),e.classList.remove("green"),e.classList.remove("black"),e.classList.remove("white")}))}))}let F=[!1,!1,!1,!1,!1],K=[["",""],["",""],["",""],["",""],["",""],["",""]],Q=!0,Z=[],U=!0;function Y(e,n){const t=document.getElementById("board");t.addEventListener("contextmenu",(e=>e.preventDefault())),document.getElementById("board").innerHTML="";const r=["a","b","c","d","e","f","g","h"],o=function(e){F=[!1,!1,!1,!1,!1];const n=e.split(" ");"w"===n[1]&&(F[0]=!0),n[2].split("").forEach((e=>{"K"===e&&(F[1]=!0),"Q"===e&&(F[2]=!0),"k"===e&&(F[3]=!0),"q"===e&&(F[4]=!0)}));const t=n[0].split("/");let r=[];if(t.reverse().forEach((e=>{let n=[];for(let t=0;t<e.length;t++)if(isNaN(e[t]))n.push(e[t]);else for(let r=0;r<e[t];r++)n.push("#");r.push(n)})),"-"!==n[3]){const e={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[n[3].split("")[0]];"6"===n[3].split("")[1]?r[5][e]="e":r[2][e]="E"}return r}(e);let a=!1;for(let e=8;e>0;e--){let n=document.createElement("div");n.classList.add("row"),n.classList.add(`_${e}`);for(let t=0;t<8;t++){let i=document.createElement("div");a&&i.classList.add("darkSquare"),a=!a,i.classList.add("square"),i.classList.add(`${r[t]}`),i.addEventListener("mousedown",V),M(i,o[e-1][t]),n.appendChild(i)}a=!a,t.appendChild(n)}""===K[0][0]&&(K[0][0]=X()),void 0!==n&&(K=[["",""],["",""],["",""],["",""],["",""],["",""]],function(e){Z=[];let n=e.split(" ");for(let e=0;e<n.length;e++){const t=z(n[e].substring(0,2)),r=z(n[e].substring(2,4)),o=n[e].substring(4);n.length-e<=5?$(t,r,o,!0):($(t,r,o,!1),K[0][0]=X())}document.querySelector(".answRow").querySelectorAll(".square").forEach((e=>{Z.push(e.innerHTML)}));for(let e=0;e<=5;e++)G(K,!0,""),F[0]?Q=!0:(Q=!1,W());console.log(Z),document.querySelector(".firstMove").innerHTML=(Q?"White":"Black")+" to move.",document.querySelector(".boardside").src=Q?g:h,O(document.querySelector(".unsubmitted"))}(n)),J()}function X(){let e=H(),n="",t=F[0]?"w":"b",r=`${F[1]?"K":""}${F[2]?"Q":""}${F[3]?"k":""}${F[4]?"q":""}`;return e.forEach((e=>{let t="",r=0;e.forEach((e=>{"#"===e?r+=1:0!==r?(t+=`${r}${e}`,r=0):t+=e})),n+=0!==r?`${t}${r}/`:`${t}/`})),n=n.slice(0,-1),`${n} ${t} ${r||"-"} -`}function W(){let e;e=""!==document.getElementById("board").firstChild.style.order&&"-1"===document.getElementById("board").firstChild.style.order?1:-1;let n=0;document.getElementById("board").querySelectorAll(".row").forEach((t=>{let r=0;n+=e,t.style.order=n,t.querySelectorAll(".square").forEach((n=>{r+=e,n.style.order=r}))})),U=board.querySelector(".row").style.order>0,document.querySelector(".boardside").src=U?g:h,J()}function G(e,n,t){if(n)for(let n=5;n>=1;n--)""!==e[n][0]?(Y(e[n-1][0]),e[n][0]="",e[n][1]="",n=0):Y(e[0][0]);else for(let n=1;n<=5;n++)""===e[n][0]&&(e[n][0]=X(),e[n][1]=t,n=5);!function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)}));for(let n=1;n<=5;n++)t[n-1].innerHTML=e[n][1]}(e)}function J(){null===document.querySelector(".annotation")&&document.querySelector("#board").querySelectorAll(".row").forEach((e=>{const n=document.createElement("div");n.innerHTML=e.classList[1].charAt(1),n.classList.add("annotation"),e.appendChild(n)}));const e=document.querySelector("#board").querySelector(".row");let n=["a","b","c","d","e","f","g","h"];e.style.order>0&&n.reverse();const t=document.createElement("div");n.forEach(((e,n)=>{const r=document.createElement("div");r.innerHTML=e,r.style.color=n%2==0?"#B58863":"#F0D9B5",t.appendChild(r)})),t.classList.add("bottomAnnotation"),null!==document.querySelector(".bottomAnnotation")&&document.querySelector(".bottomAnnotation").remove(),document.querySelector("#board").appendChild(t),document.querySelectorAll(".annotation").forEach((n=>{e.style.order<0?n.style.color=n.innerHTML%2==0?"#F0D9B5":"#B58863":n.style.color=n.innerHTML%2==0?"#B58863":"#F0D9B5"}))}function V(e){if(2===event.button){let n=e.target;"IMG"===n.tagName&&(n=n.parentElement),n.classList.contains("selected")?n.classList.remove("selected"):n.classList.add("selected")}}document.querySelector(".submit").addEventListener("click",(()=>{""!==K[5][0]&&(function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)})),n.classList.remove("unsubmitted");let r=0;for(let n=0;n<5;n++)t[n].innerHTML!==e[n]&&t[n].classList.add("gray"),e.includes(t[n].innerHTML)&&(t[n].classList.remove("gray"),t[n].classList.add("yellow")),t[n].innerHTML===e[n]&&(t[n].classList.remove("yellow"),t[n].classList.add("green"),r+=1);5!==r&&null!==document.querySelector(".unsubmitted")||(function(e){const n=document.createElement("div");n.classList.add("fulloverlay");const t=document.createElement("div");t.classList.add("puzzleprompt");const r=document.createElement("div");r.classList.add("id"),r.innerHTML=`#${D[0]}`;const o=document.createElement("p");o.classList.add("info");const a=document.createElement("div");a.classList.add("playerAnswer");const i=document.createElement("div");i.classList.add("solution");const c=document.createElement("h4");c.classList.add("answerText"),c.innerHTML="Solution:";let l=0,s="";document.querySelectorAll(".answRow").forEach((e=>{if(!e.classList.contains("unsubmitted")){const n=document.createElement("div");n.classList.add("answers"),e.querySelectorAll(".square").forEach((e=>{const t=document.createElement("div");e.classList.forEach((e=>{"gray"!==e&&"yellow"!==e&&"green"!==e||(t.classList.add(e),"gray"===e&&(s+="⬛"),"yellow"===e&&(s+="🟨"),"green"===e&&(s+="🟩"))})),t.classList.add("answer"),t.innerHTML=`${e.innerHTML}`,n.appendChild(t)})),a.appendChild(n),l+=1,s+="\n"}})),o.innerHTML=`You completed puzzle <b>#${D[0]}</b> in ${l} out of 5 tries.`;const d=document.createElement("div");d.classList.add("answers"),Z.forEach((e=>{const n=document.createElement("div");n.classList.add("answer"),n.innerHTML=e,d.appendChild(n)})),i.appendChild(c),i.appendChild(d);const u=document.createElement("div");u.classList.add("footer");const f=document.createElement("button");f.classList.add("engine"),f.innerHTML="Engine",f.addEventListener("click",(()=>{window.open(D[3],"_blank")}));const p=document.createElement("button");p.classList.add("newPuzzle"),p.innerHTML="New Puzzle",p.addEventListener("click",(()=>{n.remove(),j()}));const m=document.createElement("button");m.classList.add("share"),m.innerHTML="Share",m.addEventListener("click",(()=>{let n=`NK Boardle #${D[0]} ${l}/5 ${e?"ت":""}\nLichess Elo: ${D[1]}\n\n${s}\n${window.location.href}`;navigator.clipboard.writeText(n)})),u.appendChild(f),u.appendChild(p),u.appendChild(m),n.appendChild(t),n.addEventListener("click",(()=>{n.remove()})),t.addEventListener("click",(e=>{e.stopPropagation()})),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a),t.appendChild(u),document.body.appendChild(n)}(5===r),document.querySelectorAll(".unsubmitted").forEach((e=>{e.classList.remove("unsubmitted")})))}(Z),null!==document.querySelector(".unsubmitted")&&(K=[K[0],["",""],["",""],["",""],["",""],["",""]],Y(K[0][0]),O(document.querySelector(".unsubmitted"))),document.querySelector(".boardside").src===h&&board.querySelector(".row").style.order>=0&&W())})),document.querySelector(".back").addEventListener("click",(()=>{null!==document.querySelector(".unsubmitted")&&(G(K,!0,""),document.querySelector(".boardside").src===h&&board.querySelector(".row").style.order>=0&&W())})),document.querySelector(".flip").addEventListener("click",W),document.querySelector(".search").addEventListener("click",(()=>{!async function(e){try{const n=await fetch(`http://nathank7256.pythonanywhere.com/searchpuzzle/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,P(),D=[t.id,t.rating,t.ratingDeviation,t.games],console.log(t),Y(t.fen,t.moves)}catch(e){console.error(e)}}(document.querySelector("input").value)})),document.querySelector(".random").addEventListener("click",(()=>{j()})),document.querySelectorAll(".rating button").forEach((e=>{e.addEventListener("click",(()=>{!async function(e){try{const n=await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,P(),D=[t.id,t.rating,t.ratingDeviation,t.games],Y(t.fen,t.moves)}catch(e){console.error(e)}}(e.textContent)}))})),j()})()})();