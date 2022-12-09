(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(81),r=t.n(i),s=t(645),o=t.n(s)()(r());o.push([e.id,"body {\n  background-color: #f6f6f6;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n  height: 100vh;\n  font-family: 'Times New Roman', Times, serif;\n}\n\ninput {\n  font-style: italic;\n  border: none;\n  padding: 1em;\n  font-size: 1em;\n  outline: none;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  padding: 1em;\n  margin: 0;\n  list-style: none;\n}\n\n.title,\ninput,\nli {\n  border-bottom: lightgray solid 1px;\n}\n\nlabel {\n  margin-left: 0.5em;\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em 1em;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.title > p {\n  margin: 0;\n}\n\n.item-element {\n  display: flex;\n  justify-content: space-between;\n}\n\n.icon-menu-container {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  width: min-content;\n  cursor: move;\n}\n\n.checkbox-container {\n  display: flex;\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  background-color: white;\n  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.76);\n  -webkit-box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.76);\n  -moz-box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.76);\n  width: 26rem;\n}\n\n.container-todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.btn-clear-task {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  align-self: center;\n  margin: 1em;\n}\n\n.text-input {\n  font-family: 'Times New Roman', Times, serif;\n  color: #333;\n  display: block;\n  border: none !important;\n  outline: none;\n  justify-self: baseline;\n  background: transparent;\n  box-shadow: none;\n  overflow: auto;\n  font-size: 1rem;\n  font-style: normal;\n  resize: none;\n  margin: 0;\n  margin-left: 0.5em;\n  padding: 0;\n  word-wrap: break-word;\n  width: 20rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.editing {\n  background-color: #fffedd;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],l=i.base?c[0]+i.base:c[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,i);i.byIndex=a,n.splice(a,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var s=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=t(s[o]);n[a].references--}for(var c=i(e,r),l=0;l<s.length;l++){var d=t(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var s=n[i]={id:i,exports:{}};return e[i](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=document.querySelector(".container-todo"),n=document.querySelector(".ul-element"),i=class{constructor(e,n=!1,t=2){this.description=e,this.completed=n,this.index=t}populateFields=()=>{let e=-1;this.tasks.forEach((n=>{e+=1,n.index=e})),localStorage.setItem("savedTasks",JSON.stringify(this.tasks))};removeTask(e){const n=this.tasks.filter((n=>n!==e));this.tasks=n,this.populateFields()}addTask=e=>{this.tasks.push(e),this.populateFields(),this.displayTasks()};displayTasks=()=>(n.innerHTML="",this.tasks.map((e=>{const t=document.createElement("li"),i=document.createElement("div"),r=document.createElement("input"),s=document.createElement("div");s.classList.add("checkbox-container");const o=document.createElement("label"),a=document.createElement("input"),c=document.createElement("div");a.classList.add("text-input","hidden"),c.classList.add("icon-menu-container"),i.classList.add("item-element"),c.innerHTML='<i class="fas fa-ellipsis-v"></i>';const l='<i class="fas fa-trash-alt"></i>';return r.type="checkbox",r.id=`check${e.index}`,a.value=e.description,o.innerHTML=e.description,r.checked=e.completed,r.checked&&(o.style.textDecoration="line-through"),o.addEventListener("click",(()=>{o.classList.add("hidden"),a.classList.remove("hidden"),t.classList.add("editing"),c.innerHTML=l,c.style.cursor="pointer",a.focus()})),a.addEventListener("focus",(()=>{this.populateFields(),c.innerHTML=l,c.style.cursor="pointer"})),a.addEventListener("change",(n=>{e.description=n.target.value,o.innerHTML=e.description,this.populateFields(),c.innerHTML=l,c.style.cursor="pointer"})),a.addEventListener("blur",(()=>{o.classList.remove("hidden"),a.classList.add("hidden"),t.classList.remove("editing"),setTimeout((()=>{c.innerHTML='<i class="fas fa-ellipsis-v"></i>',c.style.cursor="menu"}),100)})),r.addEventListener("click",(()=>{r.checked?(o.style.textDecoration="line-through",e.completed=r.checked,this.populateFields()):(o.style.textDecoration="none",e.completed=r.checked,this.populateFields())})),c.addEventListener("click",(()=>{c.innerHTML===l&&(this.removeTask(e),n.removeChild(t))})),t.addEventListener("keyup",(e=>{"Enter"===e.key&&(r.focus(),a.classList.add("hidden"),o.classList.remove("hidden"),t.classList.remove("editing"))})),s.append(r,o,a),i.append(s,c),t.appendChild(i),n.appendChild(t),n})),e.appendChild(n),e)};var r=t(379),s=t.n(r),o=t(795),a=t.n(o),c=t(569),l=t.n(c),d=t(565),p=t.n(d),u=t(216),m=t.n(u),f=t(589),h=t.n(f),v=t(426),y={};y.styleTagTransform=h(),y.setAttributes=p(),y.insert=l().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=m(),s()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const g={},x=new i;localStorage.savedTasks&&(x.tasks=JSON.parse(localStorage.getItem("savedTasks")));const b=document.createElement("button"),k=document.querySelector(".root"),L=document.querySelector(".ul-element"),T=document.querySelector(".input-element");b.innerHTML="Clear all completed",b.classList.add("btn-clear-task"),T.addEventListener("change",(()=>{g.description=T.value,g.completed=!1,g.index=x.tasks.length,x.addTask(new i(g.description,g.completed,g.index))})),window.addEventListener("keyup",(e=>{"Enter"===e.key&&(T.value="")})),b.addEventListener("click",(()=>{const e=x.tasks.filter((e=>!1===e.completed));x.tasks=e,x.populateFields(),L.innerHTML="",k.innerHTML='\n    <div class="title">\n      <p>Today\'s To Do</p><i class="fas fa-sync-alt"></i>\n    </div>\n    <div class="container-todo">\n      <ul class=\'ul-element\'></ul>\n    </div>\n  ',k.append(x.displayTasks(),b)})),x.displayTasks(),k.append(b)})()})();