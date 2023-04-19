(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body{\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    margin: 0;\n}\n\n.stop-scrolling {\n    height: 100%;\n    overflow: hidden;\n  }\n\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dcdcdc;\n}\n\n.header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(54, 54, 54);\n    padding: 0.5rem;\n}\n\n.content{\n    display:grid;\n    grid-template-columns: 0.5fr 2fr;\n}\n\n.content .left{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.content .right{\n    margin: 1rem;\n}\n\n.answRow{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 10px;\n}\n\n.answRow>*{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border: #3a3a3c solid 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n}\n\n#board{\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    aspect-ratio: 1 / 1;\n    background-color: #F0D9B5;\n    position: relative;\n}\n\n#board .darkSquare{\n    background-color: #B58863;\n}\n\n#board .row>*{\n    width: 100%;\n    position: relative;\n    aspect-ratio: 1 / 1;\n}\n\n#board .row>*>*{\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    user-select: none;\n}\n\n#board .row{\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n\n\n.buttons button{\n    color:black;\n    width: 100%;\n    padding:0.4rem;\n}\n\n.buttons{\n    display:flex;\n    width: 100%;\n    margin-top: 0.8rem;\n}\n\n.back{\n    margin-left: 0;\n    margin-right: 0.1rem;\n}\n\n.submit{\n    margin-right: 0;\n    margin-left: 0.1rem;\n}\n\n.green{\n    background-color: #538d4e;\n    border-color: #538d4e;\n}\n\n.gray{\n    background-color: #3a3a3c;\n}\n\n.yellow{\n    background-color: #b59f3b;\n    border-color: #b59f3b;\n}\n\n#board .row>* .prompt{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 4;\n}\n\n.prompt>button{\n    background-color: transparent;\n    display: flex;\n    border: none;\n    padding: 0px;\n}\n\n.overlay{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 3;\n}\n\n.prompt>button>img{\n    width: 100%;\n}\n\n.prompt>button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor: pointer;\n}\n\n#playarea{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#playarea >*{\n    margin:1rem;\n}\n\n#playarea >.boxes{\n    margin-left: 0rem;\n}\n\n.info>div{\n    background-color: rgb(54, 54, 54);\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n    margin-right: 0;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.flipbutton{\n    color: black;\n}\n\n.flip{\n    display: flex;\n    color: black;\n}\n\n.searchbar>* {\n    color:black\n}\n\n.random{\n    color:black;\n    width: 65%;\n    padding: 0.5rem;\n}\n\n.rating > div:last-child{\n    display: flex;\n    flex-wrap:wrap;\n    gap: 10px;\n    margin: 0.5rem;\n    margin-left: 0;\n}\n\n.rating:last-of-type button{\n    font-size: large;\n    border: none;\n    background-color: rgb(19, 133, 226);\n    border-radius: 8px;\n    padding: 4px;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\n.rating:last-of-type button:hover{\n    background-color: rgba(0,0,0,0.2);\n    cursor:pointer;\n}\n\n.fulloverlay{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    z-index: 4;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.puzzleprompt{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #151515;\n    padding: 1.2rem;\n    gap:1rem;\n    padding-bottom: 0rem;\n    border-radius: 12px;\n    z-index: 5;\n}\n.answers{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    color: white;\n}\n.answer{\n    width: 5rem;\n    border: #151515 solid 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    height: 2rem;\n}\n.solution .answer {\n    background-color: #538d4e;\n}\n.puzzleprompt .id{\n    font-size: 2rem;\n\n}\n.answerText{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0;\n}\n.footer{\n    padding-top: 1.5rem;\n    padding-bottom: 1.2rem;\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n}\n.puzzleprompt button, .puzzleprompt a{\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    user-select: none;\n    border: 1px transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    background-color: rgb(72, 75, 77);\n\n}\n.puzzleprompt button.share{\n    background-color: rgb(0, 116, 210);\n}\n.puzzleprompt .clipboardNotif {\n\tpadding: 0.5rem 1.2rem 0.5rem 1.2rem;\n\tmargin-top: -1rem;\n\tbackground-color: rgb(0, 116, 210);\n\tdisplay: flex;\n\twidth: 100%;\n\tborder-radius: 0px 0px 12px 12px;\n\tjustify-content: center;\n\talign-items: center;\n}\n.puzzleprompt a.engine{\n    background-color: rgb(157, 11, 11);\n    text-decoration: none;\n}\n.playerAnswer{\n    margin-top: 1rem;\n    margin-bottom: -0.5rem;\n}\n\n.unsubmitted .white{\n    background-color: #fff;\n    color: black;\n}\n.unsubmitted .black {\n    color: #fff;\n    background-color: #1a1a1a;\n}\n\n#board .row > .annotation {\n\tposition: absolute;\n\theight: 0%;\n\tz-index: 1;\n\tuser-select: none;\n    padding: 4px;\n    pointer-events: none;\n}\n\n.bottomAnnotation {\n\tposition: absolute;\n\tbottom: 0;\n\tdisplay: grid; /* Use flexbox layout */\n\tflex-direction: row-reverse; /* Reverse the order of child elements */\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n\twidth: 100%;\n\tpadding-bottom: 4px;\n\tz-index: 1;\n\tdirection: rtl; /* Set direction to right-to-left */\n\tpointer-events: none;\n}\n\n.bottomAnnotation > *{\n    padding-right: 4px;\n    user-select: none;\n}\n\n#board .square.selected, #board .square.highlighted.selected{\n    background-color: rgba(255,0,0,0.5);\n}\n\n#board .darkSquare.selected, #board .darkSquare.highlighted.selected{\n    background-color: #DA4331;\n}\n\n#board .square.highlighted, #board .square.playerHighlighted{\n    background-color:  #F8EC5A;\n}\n\n#board .darkSquare.highlighted, #board .darkSquare.playerHighlighted{\n    background-color: #DAC431;\n}\n\n#board > .row > .inCheck{\n    box-shadow: inset 0px 0px 50px rgba(255, 0, 0, 0.8), 0px 0px 25px rgba(255, 0, 0, 0.1), 0px 0px 20px rgba(255, 0, 0, 0.5);\n}\n\ncanvas{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 3;\n    pointer-events: none;\n    width: 100%;\n    height: 100%;\n}\n\ncanvas.flipped{\n    transform: scaleX(-1) scaleY(-1);\n}\n\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=t(i[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),l=t.n(c),s=t(216),d=t.n(s),u=t(589),p=t.n(u),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"c83f5581968cfa1416d4.svg",g=t.p+"ae4879833ee0111ba3b2.svg",b=t.p+"e475a365a63ab9c3b484.svg",y=t.p+"30871ebbc0ad7f46a1c7.svg",v=t.p+"48665a8ce082e5f12710.svg",E=t.p+"c051a30b157b9deadd0d.svg",w=t.p+"e196dd569ecbcb92d569.svg",L=t.p+"b2002308f81e96903120.svg",q=t.p+"2806967ff884b67af8fc.svg",S=t.p+"dc9544a72b2cf7a92579.svg",C=t.p+"0bac57fcee185c845528.svg",k=t.p+"2062ce2d4d0e8d018369.svg",x=t.p+"5a58dd80a641cfdf5fb0ca6601fdbda7.ogg",M=t.p+"4c0d6b27175ec63ec634b0f4bc329ede.ogg",A=e=>/^[A-Z]*$/.test(e);let T,$;function z(e,n){const t={k:h,K:g,q:b,Q:y,r:v,R:E,b:w,B:L,n:q,N:S,p:C,P:k};if("#"!==n&&"e"!==n&&"E"!==n){const r=new Image;r.src=t[n],r.classList.add(n),r.setAttribute("draggable",!1),function(e,n){let t=0,r=0,o=0,i=0;function a(n){(n=n||window.event).preventDefault(),t=o-n.clientX,r=i-n.clientY,o=n.clientX,i=n.clientY,e.style.top=e.offsetTop-r+"px",e.style.left=e.offsetLeft-t+"px",e.style.zIndex="3"}function c(){if(0===event.button){document.onmouseup=null,document.onmousemove=null,n.style.zIndex="auto",e.style.zIndex="2";let t=document.querySelectorAll("#board .square"),r=e.getBoundingClientRect(),o=r.left+r.width/2,i=r.top+r.height/2,a=null,c=1/0;t.forEach((e=>{let n=e.getBoundingClientRect(),t=n.left+n.width/2,r=n.top+n.height/2,l=Math.sqrt(Math.pow(o-t,2)+Math.pow(i-r,2));l<c&&(a=e,c=l)})),c<a.getBoundingClientRect().width/2?H(n,a,"",!0,!0):(O(n),z(n,e.classList[0]))}}e.onmousedown=function(t){if(0===event.button){const r=document.querySelector("canvas");if(r.getContext("2d").clearRect(0,0,r.width,r.height),te.clear(),document.querySelectorAll(".selected").forEach((e=>{e.classList.remove("selected")})),W[0]===A(e.classList[0])){e.style.pointerEvents="auto",(t=t||window.event).preventDefault(),o=t.clientX,i=t.clientY;let r=e.getBoundingClientRect(),l=r.left-e.offsetLeft,s=r.top-e.offsetTop,d=e.offsetWidth/2,u=e.offsetHeight/2;e.style.left=o-d-l+"px",e.style.top=i-u-s+"px",document.onmouseup=c,document.onmousemove=a,document.onmousedown=()=>{0!==event.button&&H(n,n,"",!0,!0)}}else void 0!==T&&H(T,n,"",!0,!0);K(n)}}}(r,e),e.appendChild(r)}if("e"===n||"E"===n){const t=document.createElement("div");t.classList.add(`${n}`),e.appendChild(t)}}function H(e,n,t,r,o){if(!e.firstElementChild)return;const i=document.getElementById("board"),a=[i.cloneNode(!0),I()],c=e.firstElementChild.classList[0],l=null!==n.firstElementChild&&("e"!==n.firstElementChild.classList[0].toLowerCase()||"p"===c.toLowerCase()),s=n.firstElementChild,d=l?new Audio(M):new Audio(x);if(n!==e&&N(c,e,n,l,I()))if(""===G[5][0]){function u(){!function(e){return R(e,W[0])}(i)?(W[0]=!W[0],r&&(ce(G,!1,function(e,n,t,r,o,i,a){let c=B(t),l="";switch(e.toLowerCase()){case"p":"1"!==c[1]&&"8"!==c[1]||(l=`=${t.firstElementChild.classList[0]}`),e=r?B(n).split("")[0]:"";break;case"k":const o=B(n);"e1"===o&&("c1"===c&&(e="O-O-O",c=""),"g1"===c&&(e="O-O",c="")),"e8"===o&&("c8"===c&&(e="O-O-O",c=""),"g8"===c&&(e="O-O",c=""));break;default:let i=function(e,n,t,r){let o=n[0].querySelectorAll(".square"),i=[];o.forEach((n=>{null!==n.firstElementChild&&n.firstElementChild.classList.contains(e)&&i.push(n)}));let a=[];i.forEach((o=>{N(e,o,t,r,n[1],!0)&&a.push(o)}));let c=new Set,l=new Set;return a.forEach((e=>{["a","b","c","d","e","f","g","h"].forEach((n=>{e.classList.contains(n)&&c.add(n)})),["_1","_2","_3","_4","_5","_6","_7","_8"].forEach((n=>{e.parentElement.classList.contains(n)&&l.add(n)}))})),[c.size>1,l.size>1]}(e,a,t,r),s=`${e}`;i[0]&&!i[1]&&(s=e+=B(n).split("")[0]),i[1]&&!i[0]&&(s=e+=B(n).split("")[1]),i[0]&&i[1]&&(s=e+=B(n)),e=s}return`${e}${r?"x":""}${c}${l}${i?"#":o?"+":""}`}(c,e,n,l,R(i,W[0]),!!R(i,W[0])&&function(e,n){const t=I(),r=[...t].reverse();let o=[];[...e.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),o.push(n)}));let i=0;for(let c=0;c<r.length;c++)for(let l=0;l<r.length;l++){if("#"!==r[c][l]&&"e"!==r[c][l]&&"E"!==r[c][l]&&A(r[c][l])===n)switch(r[c][l].toLowerCase()){case"p":s([[1,0],[2,0],[-1,0],[-2,0],[1,1],[1,-1],[-1,-1],[-1,1]]);break;case"n":s([[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]]);break;case"b":d([[1,1],[1,-1],[-1,-1],[-1,1]]);break;case"r":d([[0,1],[1,0],[0,-1],[-1,0]]);break;case"q":d([[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]);break;case"k":s([[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]])}function s(e){for(const[n,s]of e){let e=c+n,d=l+s;if(e>=0&&e<8&&d>=0&&d<8){const n="#"!==r[e][d]&&"e"!==r[e][d]&&"E"!==r[e][d];N(r[c][l],o[c][l],o[e][d],n,t,!0)&&a(r[c][l],o[c][l],o[e][d])&&(i+=1)}}}function d(e){for(const[n,s]of e){let e=c+n,d=l+s;for(;e>=0&&e<8&&d>=0&&d<8;){const u="#"!==r[e][d]&&"e"!==r[e][d]&&"E"!==r[e][d];if(N(r[c][l],o[c][l],o[e][d],u,t,!0)&&a(r[c][l],o[c][l],o[e][d])&&(i+=1),u)break;e+=n,d+=s}}}}function a(t,r,o){const i=o.firstElementChild;return O(r),O(o),z(o,t),R(e,n)?(O(o),i&&o.appendChild(i),z(r,t),!1):(O(o),i&&o.appendChild(i),z(r,t),!0)}return 0===i}(i,W[0]),a)),F(B(e),B(n)),ne.push((()=>F(B(e),B(n)))),o&&d.play(),K())):(O(n),null!==s&&n.appendChild(s),z(e,c)),P(W[0])}O(n),O(e),function(e,n){return!!("p"===n&&e.parentElement.classList.contains("_1")||"P"===n&&e.parentElement.classList.contains("_8"))}(n,c)?""!==t?(z(n,W[0]?t.toUpperCase():t),u()):(async()=>{const e=await(t=n,r=W[0],new Promise((e=>{const n=document.createElement("div");n.classList.add("prompt");const o=document.createElement("div");o.classList.add("overlay"),document.getElementById("board").appendChild(o);const i=document.createElement("button"),a=new Image;a.src=r?y:b,i.appendChild(a),i.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"Q":"q")}));const c=document.createElement("button"),l=new Image;l.src=r?E:v,c.appendChild(l),c.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"R":"r")}));const s=document.createElement("button"),d=new Image;d.src=r?L:w,s.appendChild(d),s.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"B":"b")}));const u=document.createElement("button"),p=new Image;p.src=r?S:q,u.appendChild(p),u.addEventListener("click",(()=>{n.remove(),o.remove(),e(r?"N":"n")})),n.appendChild(i),n.appendChild(c),n.appendChild(s),n.appendChild(u),t.appendChild(n)})));var t,r;z(n,e),u()})():(z(n,c),u())}else O(e),z(e,c);else O(e),z(e,c);P(W[0])}function B(e){const n=["a","b","c","d","e","f","g","h"],t=["_1","_2","_3","_4","_5","_6","_7","_8"];let r,o;return e.classList.forEach((e=>{n.includes(e)&&(r=e)})),e.parentElement.classList.forEach((e=>{t.includes(e)&&(o=e[1])})),`${r}${o}`}function _(e){const n=e.split("");return document.querySelector(`.${{1:"_1",2:"_2",3:"_3",4:"_4",5:"_5",6:"_6",7:"_7",8:"_8"}[n[1]]} .square.${n[0]}`)}function I(){let e=[];return document.getElementById("board").querySelectorAll(".row").forEach((n=>{let t=[];n.querySelectorAll(".square").forEach((e=>{null===e.firstElementChild?t.push("#"):t.push(e.firstElementChild.classList[0])})),e.push(t)})),e}function N(e,n,t,r,o,i){const a={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8},c=a[B(n)[0]],l=a[B(t)[0]],s=Number(B(n)[1]),d=Number(B(t)[1]);let u=s-1,p=c-1;const f=[...o].reverse();if(!i&&W[0]!==A(e))return!1;if(r&&A(f[d-1][l-1])===A(e))return!1;switch(e.toLowerCase()){case"p":const m="P"===e?1:-1,h="P"===e?2:7;if(r)return d-s===m&&(l===c+1||l===c-1)&&("e"!==t.firstElementChild.classList[0]&&"E"!==t.firstElementChild.classList[0]||j([d-1-m,l-1],A(e),!0),j(),!0);if(c===l&&d-s===m)return j(),!0;if(c===l&&s===h&&d-s==2*m&&"#"===f[u+m][p])return j([u+m,p],A(e),!1),!0;break;case"n":if(2===Math.abs(l-c)&&1===Math.abs(d-s)||1===Math.abs(l-c)&&2===Math.abs(d-s))return j(),!0;break;case"b":if(l>c){if(d>s){for(let b=s+1;b<d;b++)if(u+=1,p+=1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;if(d-2===u&&l-2===p)return j(),!0}if(d<s){for(let y=s-1;y>d;y--)if(u-=1,p-=-1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;if(d===u&&l-2===p)return j(),!0}}if(l<c){if(d>s){for(let v=s+1;v<d;v++)if(u-=-1,p-=1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;if(d-2===u&&l===p)return j(),!0}if(d<s){for(let E=s-1;E>d;E--)if(u+=-1,p+=-1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;if(d===u&&l===p)return j(),!0}}break;case"r":if(s===d){if(c<l){for(let w=l-1;w>c;w--)if(p+=1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;return g(),j(),!0}for(let L=c-1;L>l;L--)if(p-=1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;return g(),j(),!0}if(c===l){if(s<d){for(let q=d-1;q>s;q--)if(u+=1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;return g(),j(),!0}for(let S=s-1;S>d;S--)if(u-=1,"#"!==f[u][p]&&"e"!==f[u][p]&&"E"!==f[u][p])return!1;return g(),j(),!0}function g(){i||(1===s&&1===c&&(W[1]=!1),1===s&&8===c&&(W[2]=!1),8===s&&1===c&&(W[3]=!1),8===s&&8===c&&(W[4]=!1))}break;case"q":if(N("Q"===e?"R":"r",n,t,r,o,!0))return j(),!0;if(N("Q"===e?"B":"b",n,t,r,o,!0))return j(),!0;break;case"k":if(1===Math.abs(l-c)&&1===Math.abs(d-s)||0===Math.abs(l-c)&&1===Math.abs(d-s)||1===Math.abs(l-c)&&0===Math.abs(d-s))return A(e)?(W[1]=!1,W[2]=!1):(W[3]=!1,W[4]=!1),j(),!0;if(!(1!==d&&8!==d||3!==l&&7!==l)){if(A(e)&&1===d)if(3==l){if(W[2]&&D(!0,!0))return j(),!0}else if(W[1]&&D(!0,!1))return j(),!0;if(!A(e)&&8===d)if(3==l){if(W[4]&&D(!1,!0))return j(),!0}else if(W[3]&&D(!1,!1))return j(),!0}}return!1}function R(e,n){const t=I(),r=function(e){const n=[...t].reverse(),r=e?"K":"k";for(let e=0;e<n.length;e++)for(let t=0;t<n.length;t++)if(r===n[e][t])return[e+1,t+1]}(n),o=e.querySelector(`._${r[0]}`).querySelector(`.square.${{1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h"}[r[1]]}`);let i=!1;return e.querySelectorAll(".row").forEach((e=>{e.querySelectorAll(".square").forEach((e=>{null!==e.firstElementChild&&A(e.firstElementChild.classList[0])!==n&&N(e.firstElementChild.classList[0],e,o,!0,t,!0)&&(i=!0)}))})),i}function D(e,n){const t=document.getElementById("board");let r=[];if([...t.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{n.push(e)})),r.push(n)})),R(t,e))return!1;if(e){if(n&&W[2]&&o([r[0][1],r[0][2],r[0][3]],r[0][0])){if(i(r[0][4],r[0][3])&&i(r[0][4],r[0][2]))return O(r[0][0]),z(r[0][3],"R"),!0}else if(!n&&W[1]&&o([r[0][5],r[0][6]],r[0][7])&&i(r[0][4],r[0][5])&&i(r[0][4],r[0][6]))return O(r[0][7]),z(r[0][5],"R"),!0}else if(n&&W[4]&&o([r[7][1],r[7][2],r[7][3]],r[7][0])){if(i(r[7][4],r[7][3])&&i(r[7][4],r[7][2]))return O(r[7][0]),z(r[7][3],"r"),!0}else if(!n&&W[3]&&o([r[7][5],r[7][6]],r[7][7])&&i(r[7][4],r[7][5])&&i(r[7][4],r[7][6]))return O(r[7][7]),z(r[7][5],"r"),!0;function o(n,t){let r=!0,o=!1;return n.forEach((e=>{e.hasChildNodes()&&(r=!1)})),t.hasChildNodes()&&(t.firstElementChild.classList[0]===e||"r")&&(o=!0),r&&o}function i(n,r){O(n),z(r,e?"K":"k");let o=!R(t,e);return O(r),z(n,e?"K":"k"),o}return!1}function j(e,n,t){const r=document.getElementById("board");let o=[];[...r.querySelectorAll(".row")].reverse().forEach((e=>{let n=[];e.querySelectorAll(".square").forEach((e=>{!e.hasChildNodes()||"e"!==e.firstElementChild.classList[0]&&"E"!==e.firstElementChild.classList[0]||O(e),n.push(e)})),o.push(n)})),void 0!==e&&(!0===t&&O(o[e[0]][e[1]]),null!==e&&!0!==t&&z(o[e[0]][e[1]],n?"E":"e"))}function O(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function P(e){document.querySelector(".inCheck")&&document.querySelector(".inCheck").classList.remove("inCheck"),R(document.querySelector("#board"),e)&&document.querySelector("img."+(e?"K":"k")).parentElement.classList.add("inCheck")}function F(e,n){document.querySelectorAll(".highlighted").forEach((e=>{e.classList.remove("highlighted")})),_(e).classList.add("highlighted"),_(n).classList.add("highlighted")}function K(e){void 0===T&&(T="");let n=!0;void 0!==e&&T!==e&&e.hasChildNodes()&&A(e.firstElementChild.classList[0])===W[0]||(n=!1),document.querySelector("#board").querySelectorAll(".square").forEach((e=>{e.classList.remove("playerHighlighted"),T=void 0})),n&&(e.classList.add("playerHighlighted"),T=e)}async function Y(){try{const e=function(){const e=[{rating:300,percentage:.25},{rating:400,percentage:.25},{rating:500,percentage:.25},{rating:600,percentage:.25},{rating:700,percentage:1},{rating:800,percentage:1},{rating:900,percentage:2},{rating:1e3,percentage:3},{rating:1100,percentage:4},{rating:1200,percentage:4},{rating:1300,percentage:5},{rating:1400,percentage:6},{rating:1500,percentage:7},{rating:1600,percentage:8},{rating:1700,percentage:8},{rating:1800,percentage:7},{rating:1900,percentage:8},{rating:2e3,percentage:7},{rating:2100,percentage:7},{rating:2200,percentage:6},{rating:2300,percentage:5},{rating:2400,percentage:3},{rating:2500,percentage:2},{rating:2600,percentage:2},{rating:2700,percentage:1.5},{rating:2800,percentage:.5},{rating:2900,percentage:.5},{rating:3e3,percentage:.5}],n=e.reduce(((e,n)=>e+n.percentage),0);let t=Math.random()*n;for(let n=0;n<e.length;n++){const{rating:r,percentage:o}=e[n];if(t<o)return r;t-=o}}(),n=await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,X(),$=[t.id,t.rating,t.ratingDeviation,t.games],oe(t.fen,t.moves)}catch(e){console.error(e)}}const Q=t.p+"9f7038bfe2d1af2807b45a6f067379e9.ogg";let U;function Z(e){let n=W[0];e.querySelectorAll(".square").forEach((e=>{e.classList.add(n?"white":"black"),n=!n}))}function X(){document.querySelectorAll(".answRow").forEach((e=>{e.classList.add("unsubmitted"),e.querySelectorAll(".square").forEach((e=>{e.innerHTML="",e.classList.remove("gray"),e.classList.remove("yellow"),e.classList.remove("green"),e.classList.remove("black"),e.classList.remove("white")}))}))}let W=[!1,!1,!1,!1,!1],G=[["",""],["",""],["",""],["",""],["",""],["",""]],J=!0,V=[],ee=!0,ne=[];const te=new Set;function re(){null!==document.querySelector(".unsubmitted")&&(ce(G,!0,""),P(W[0]),K(),ne.length>1?(ne.pop(),ne[ne.length-1]()):ne[0](),document.querySelector(".boardside").src===h&&board.querySelector(".row").style.order>=0&&ae())}function oe(e,n){const t=document.getElementById("board");t.addEventListener("contextmenu",(e=>e.preventDefault())),document.getElementById("board").innerHTML="";const r=["a","b","c","d","e","f","g","h"],o=function(e){W=[!1,!1,!1,!1,!1];const n=e.split(" ");"w"===n[1]&&(W[0]=!0),n[2].split("").forEach((e=>{"K"===e&&(W[1]=!0),"Q"===e&&(W[2]=!0),"k"===e&&(W[3]=!0),"q"===e&&(W[4]=!0)}));const t=n[0].split("/");let r=[];if(t.reverse().forEach((e=>{let n=[];for(let t=0;t<e.length;t++)if(isNaN(e[t]))n.push(e[t]);else for(let r=0;r<e[t];r++)n.push("#");r.push(n)})),"-"!==n[3]){const e={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[n[3].split("")[0]];"6"===n[3].split("")[1]?r[5][e]="e":r[2][e]="E"}return r}(e);let i=!1;for(let e=8;e>0;e--){let n=document.createElement("div");n.classList.add("row"),n.classList.add(`_${e}`);for(let t=0;t<8;t++){let a=document.createElement("div");i&&a.classList.add("darkSquare"),i=!i,a.classList.add("square"),a.classList.add(`${r[t]}`),se(a),z(a,o[e-1][t]),n.appendChild(a)}i=!i,t.appendChild(n)}t.appendChild(function(){const e=document.createElement("canvas");return e.width=1600,e.height=1600,e}()),""===G[0][0]&&(G[0][0]=ie()),void 0!==n&&(G=[["",""],["",""],["",""],["",""],["",""],["",""]],function(e){V=[],U=void 0;let n=e.split(" ");for(let e=0;e<n.length;e++){const t=_(n[e].substring(0,2)),r=_(n[e].substring(2,4)),o=n[e].substring(4);n.length-e<=5?H(t,r,o,!0,!1):(H(t,r,o,!1,!1),G[0][0]=ie())}document.querySelector(".answRow").querySelectorAll(".square").forEach((e=>{V.push(e.innerHTML)}));for(let e=0;e<=5;e++)ce(G,!0,""),W[0]?J=!0:(J=!1,ae());console.log(V),document.querySelector(".firstMove").innerHTML=(J?"White":"Black")+" to move.",document.querySelector(".boardside").src=J?g:h,Z(document.querySelector(".unsubmitted")),P(W[0]),F(n[n.length-6].substring(0,2),n[n.length-6].substring(2,4)),ne=[],ne[0]=()=>F(n[n.length-6].substring(0,2),n[n.length-6].substring(2,4))}(n)),le(),document.querySelector("#board").querySelectorAll(".square").forEach((e=>{e.addEventListener("click",(()=>{if(0===event.button){const n=document.querySelector("canvas");n.getContext("2d").clearRect(0,0,n.width,n.height),te.clear(),void 0!==T&&H(T,e,"",!0,!0),K()}}))}))}function ie(){let e=I(),n="",t=W[0]?"w":"b",r=`${W[1]?"K":""}${W[2]?"Q":""}${W[3]?"k":""}${W[4]?"q":""}`;return e.forEach((e=>{let t="",r=0;e.forEach((e=>{"#"===e?r+=1:0!==r?(t+=`${r}${e}`,r=0):t+=e})),n+=0!==r?`${t}${r}/`:`${t}/`})),n=n.slice(0,-1),`${n} ${t} ${r||"-"} -`}function ae(){const e=document.querySelector("canvas");let n;n=""!==document.getElementById("board").firstChild.style.order&&"-1"===document.getElementById("board").firstChild.style.order?1:-1;let t=0;document.getElementById("board").querySelectorAll(".row").forEach((e=>{let r=0;t+=n,e.style.order=t,e.querySelectorAll(".square").forEach((e=>{r+=n,e.style.order=r}))})),ee=board.querySelector(".row").style.order>0,ee?e.classList.remove("flipped"):e.classList.add("flipped"),document.querySelector(".boardside").src=ee?g:h,le()}function ce(e,n,t){if(n)for(let n=5;n>=1;n--)""!==e[n][0]?(oe(e[n-1][0]),e[n][0]="",e[n][1]="",n=0):oe(e[0][0]);else for(let n=1;n<=5;n++)""===e[n][0]&&(e[n][0]=ie(),e[n][1]=t,n=5);!function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)}));for(let n=1;n<=5;n++)t[n-1].innerHTML=e[n][1]}(e)}function le(){null===document.querySelector(".annotation")&&document.querySelector("#board").querySelectorAll(".row").forEach((e=>{const n=document.createElement("div");n.innerHTML=e.classList[1].charAt(1),n.classList.add("annotation"),e.appendChild(n)}));const e=document.querySelector("#board").querySelector(".row");let n=["a","b","c","d","e","f","g","h"];(e.style.order>0||""===e.style.order)&&n.reverse();const t=document.createElement("div");n.forEach(((e,n)=>{const r=document.createElement("div");r.innerHTML=e,r.style.color=n%2==0?"#B58863":"#F0D9B5",t.appendChild(r)})),t.classList.add("bottomAnnotation"),null!==document.querySelector(".bottomAnnotation")&&document.querySelector(".bottomAnnotation").remove(),document.querySelector("#board").appendChild(t),document.querySelectorAll(".annotation").forEach((n=>{e.style.order<0?n.style.color=n.innerHTML%2==0?"#F0D9B5":"#B58863":n.style.color=n.innerHTML%2==0?"#B58863":"#F0D9B5"}))}function se(e){function n(){if(2===event.button){document.onmouseup=null,document.onmousemove=null;let n=document.querySelectorAll("#board .square"),t=null,r=1/0;if(n.forEach((e=>{let n=e.getBoundingClientRect(),o=n.left+n.width/2,i=n.top+n.height/2,a=Math.sqrt(Math.pow(event.clientX-o,2)+Math.pow(event.clientY-i,2));a<r&&(t=e,r=a)})),t===e)!function(e){K(),e.classList.contains("selected")?e.classList.remove("selected"):e.classList.add("selected")}(e);else if(r<t.getBoundingClientRect().width){const n=ue(e)[0],r=ue(e)[1],o=ue(t)[0],i=ue(t)[1],a=`${n},${r},${o},${i}`;te.has(a)?(de(n,r,o,i,!0),te.delete(a)):(de(n,r,o,i,!1),te.add(a))}}}e.onmousedown=function(t){if(2===event.button){if(t.buttons>=3)return;e="IMG"===t.target.tagName?t.target.parentElement:t.target,document.onmouseup=n}}}function de(e,n,t,r,o){const i=document.querySelector("canvas").getContext("2d"),a=[0,20,-75,20,-75,50];i.fillStyle="orange",i.globalAlpha=o?1:.8,i.globalCompositeOperation=o?"destination-out":"source-over",i.beginPath();var c=t-e,l=r-n,s=Math.sqrt(c*c+l*l),d=l/s,u=c/s,p=[];p.push(0,0);for(var f=0;f<a.length;f+=2){var m=a[f],h=a[f+1];p.push(m<0?s+m:m,h)}for(p.push(s,0),f=a.length;f>0;f-=2)m=a[f-2],h=a[f-1],p.push(m<0?s+m:m,-h);for(p.push(0,0),f=0;f<p.length;f+=2)m=p[f]*u-p[f+1]*d+e,h=p[f]*d+p[f+1]*u+n,0===f?i.moveTo(m,h):i.lineTo(m,h);i.fill()}function ue(e){return[{a:100,b:300,c:500,d:700,e:900,f:1100,g:1300,h:1500}[B(e).split("")[0]],{8:100,7:300,6:500,5:700,4:900,3:1100,2:1300,1:1500}[B(e).split("")[1]]]}document.querySelector(".submit").addEventListener("click",(()=>{U?document.body.appendChild(U):""!==G[5][0]&&(function(e){const n=document.querySelector(".unsubmitted"),t=[];n.querySelectorAll(".square").forEach((e=>{t.push(e)})),n.classList.remove("unsubmitted");let r=0;for(let n=0;n<5;n++)t[n].innerHTML!==e[n]&&t[n].classList.add("gray"),e.includes(t[n].innerHTML)&&(t[n].classList.remove("gray"),t[n].classList.add("yellow")),t[n].innerHTML===e[n]&&(t[n].classList.remove("yellow"),t[n].classList.add("green"),r+=1);5!==r&&null!==document.querySelector(".unsubmitted")||(function(e){const n=document.createElement("div");n.classList.add("fulloverlay");const t=document.createElement("div");t.classList.add("puzzleprompt");const r=document.createElement("div");r.classList.add("id"),r.innerHTML=`#${$[0]}`;const o=document.createElement("p");o.classList.add("info");const i=document.createElement("div");i.classList.add("playerAnswer");const a=document.createElement("div");a.classList.add("solution");const c=document.createElement("h4");c.classList.add("answerText"),c.innerHTML="Solution:";let l=0,s="";document.querySelectorAll(".answRow").forEach((e=>{if(!e.classList.contains("unsubmitted")){const n=document.createElement("div");n.classList.add("answers"),e.querySelectorAll(".square").forEach((e=>{const t=document.createElement("div");e.classList.forEach((e=>{"gray"!==e&&"yellow"!==e&&"green"!==e||(t.classList.add(e),"gray"===e&&(s+="⬛"),"yellow"===e&&(s+="🟨"),"green"===e&&(s+="🟩"))})),t.classList.add("answer"),t.innerHTML=`${e.innerHTML}`,n.appendChild(t)})),i.appendChild(n),l+=1,s+="\n"}})),o.innerHTML=`You completed puzzle <b>#${$[0]}</b> in ${l} out of 5 tries.`;const d=document.createElement("div");d.classList.add("answers"),V.forEach((e=>{const n=document.createElement("div");n.classList.add("answer"),n.innerHTML=e,d.appendChild(n)})),a.appendChild(c),a.appendChild(d);const u=document.createElement("div");u.classList.add("footer");const p=document.createElement("a"),f=function(e){if(e.includes("/black"))return e.replace("/black","");{const n=e.lastIndexOf("#");return-1===n?e+"/black":e.slice(0,n)+"/black"+e.slice(n)}}($[3]);p.classList.add("engine"),p.innerHTML="Engine",p.href=f,p.addEventListener("click",(e=>{e.preventDefault(),window.open(f,"_blank")}));const m=document.createElement("button");m.classList.add("newPuzzle"),m.innerHTML="New Puzzle",m.addEventListener("click",(()=>{n.remove(),Y()}));const h=document.createElement("button");h.classList.add("share"),h.innerHTML="Share",h.addEventListener("click",(()=>{let n=`NK Boardle #${$[0]} ${l}/5 ${e?"ت":""}\nLichess Elo: ${$[1]}\n\n${s}\n${window.location.href}`;navigator.clipboard.writeText(n);const r=document.createElement("div");if(r.classList.add("clipboardNotif"),document.querySelector(".clipboardNotif")){let e=document.querySelector(".clipboardNotif"),n=e.innerHTML.match(/\d+/g);e.innerHTML=null===n?"<div>Copied to clipboard!  <b>(2)</b></div>":`<div>Copied to clipboard!  <b>(${Number(n)+1})</b></div>`}else r.innerHTML="Copied to clipboard!",t.appendChild(r)})),u.appendChild(p),u.appendChild(m),u.appendChild(h),n.appendChild(t),n.addEventListener("click",(()=>{n.remove()})),t.addEventListener("click",(e=>{e.stopPropagation()})),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(i),t.appendChild(u),document.body.appendChild(n),U=n}(5===r),document.querySelectorAll(".unsubmitted").forEach((e=>{e.classList.remove("unsubmitted")})),new Audio(Q).play())}(V),null!==document.querySelector(".unsubmitted")&&(G=[G[0],["",""],["",""],["",""],["",""],["",""]],ne=[ne[0]],oe(G[0][0]),ne[0](),P(W[0]),K(),Z(document.querySelector(".unsubmitted"))),document.querySelector(".boardside").src===h&&board.querySelector(".row").style.order>=0&&ae())})),document.querySelector(".back").addEventListener("click",re),window.addEventListener("wheel",(function(e){e.deltaY>0?(window.scrollTo(0,0),this.document.body.classList.add("stop-scrolling"),re()):this.document.body.classList.remove("stop-scrolling")})),window.addEventListener("keydown",(function(e){"ArrowLeft"===e.key&&re()})),document.querySelector(".flip").addEventListener("click",ae),document.querySelector(".search").addEventListener("click",(()=>{!async function(e){try{const n=await fetch(`http://nathank7256.pythonanywhere.com/searchpuzzle/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,X(),$=[t.id,t.rating,t.ratingDeviation,t.games],console.log(t),oe(t.fen,t.moves)}catch(e){console.error(e)}}(document.querySelector("input").value)})),document.querySelector(".random").addEventListener("click",(()=>{Y()})),document.querySelectorAll(".rating button").forEach((e=>{e.addEventListener("click",(()=>{!async function(e){try{const n=await fetch(`http://nathank7256.pythonanywhere.com/searchbyrating/${e}`),t=await n.json();return document.querySelector(".id").innerHTML="ID: #"+t.id,document.querySelector(".elo").innerHTML="Lichess Elo: "+t.rating+"±"+t.ratingDeviation,X(),$=[t.id,t.rating,t.ratingDeviation,t.games],oe(t.fen,t.moves)}catch(e){console.error(e)}}(e.textContent)}))})),Y()})()})();