(window.webpackJsonp=window.webpackJsonp||[]).push([[17],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,function(t,e,n){var s,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(i="function"==typeof(s=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function s(t){return 100*(-1+t)}t.configure=function(t){var n,s;for(n in t)void 0!==(s=t[n])&&t.hasOwnProperty(n)&&(e[n]=s);return this},t.status=null,t.set=function(a){var o=t.isStarted();a=n(a,e.minimum,1),t.status=1===a?null:a;var l=t.render(!o),u=l.querySelector(e.barSelector),c=e.speed,h=e.easing;return l.offsetWidth,i(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),r(u,function(t,n,i){var r;return(r="translate3d"===e.positionUsing?{transform:"translate3d("+s(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+s(t)+"%,0)"}:{"margin-left":s(t)+"%"}).transition="all "+n+"ms "+i,r}(a,c,h)),1===a?(r(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout(function(){r(l,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},c)},c)):setTimeout(n,c)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var s=t.status;return s?("number"!=typeof e&&(e=(1-s)*n(Math.random()*s,.1,.95)),s=n(s+e,0,.994),t.set(s)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(s){return s&&"resolved"!==s.state()?(0===n&&t.start(),e++,n++,s.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=e.template;var a,l=i.querySelector(e.barSelector),u=n?"-100":s(t.status||0),h=document.querySelector(e.parent);return r(l,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),e.showSpinner||(a=i.querySelector(e.spinnerSelector))&&c(a),h!=document.body&&o(h,"nprogress-custom-parent"),h.appendChild(i),i},t.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&c(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var i=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),r=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var s,i=t.length,r=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((s=t[i]+r)in n)return s;return e}(n))}function s(t,e,s){e=n(e),t.style[e]=s}return function(t,e){var n,i,r=arguments;if(2==r.length)for(n in e)void 0!==(i=e[n])&&e.hasOwnProperty(n)&&s(t,n,i);else s(t,r[1],r[2])}}();function a(t,e){var n="string"==typeof t?t:u(t);return n.indexOf(" "+e+" ")>=0}function o(t,e){var n=u(t),s=n+e;a(n,e)||(t.className=s.substring(1))}function l(t,e){var n,s=u(t);a(t,e)&&(n=s.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function u(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function c(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?s.call(e,n,e,t):s)||(t.exports=i)},function(t,e,n){"use strict";var s=n(14);n.n(s).a},function(t,e,n){"use strict";var s=n(15);n.n(s).a},function(t,e,n){"use strict";var s=n(16);n.n(s).a},function(t,e,n){"use strict";var s=n(17);n.n(s).a},function(t,e,n){"use strict";var s=n(18);n.n(s).a},function(t,e,n){"use strict";var s=n(19);n.n(s).a},function(t,e,n){"use strict";var s=n(20);n.n(s).a},function(t,e,n){"use strict";var s=n(21);n.n(s).a},function(t,e,n){"use strict";var s=n(22);n.n(s).a},function(t,e,n){"use strict";var s=n(23);n.n(s).a},function(t,e,n){"use strict";var s=n(24);n.n(s).a},function(t,e,n){"use strict";var s=n(25);n.n(s).a},function(t,e,n){"use strict";var s=n(26);n.n(s).a},,,,,,,,,function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(37),r=n.n(i);const a=/#.*$/,o=/\.(md|html)$/,l=/\/$/,u=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(a,"").replace(o,"")}function h(t){return u.test(t)}function p(t){if(h(t))return t;const e=t.match(a),n=e?e[0]:"",s=c(t);return l.test(s)?t:s+".html"+n}function d(t,e){const n=t.hash,s=function(t){const e=t.match(a);if(e)return e[0]}(e);return(!s||n===s)&&c(t.path)===c(e)}function f(t,e,n){n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=c(e);for(let e=0;e<t.length;e++)if(c(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function g(t,e,n,s){const{pages:i,themeConfig:r}=n,a=s&&r.locales&&r.locales[s]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||r.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===b(t).indexOf(n))return{base:n,config:e[n]};return{}}(e,o);return n?n.map(e=>(function t(e,n,s,i){if("string"==typeof e)return f(n,e,s);if(Array.isArray(e))return Object.assign(f(n,e[0],s),{title:e[1]});{i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const r=e.children||[];return{type:"group",title:e.title,children:r.map(e=>t(e,n,s,!0)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function b(t){return/(\.html|\/)$/.test(t)?t:t+"/"}var _={props:{item:{required:!0}},computed:{link(){return p(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:h,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},k=n(1),$=Object(k.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);$.options.__file="NavLink.vue";var C=$.exports,x={components:{NavLink:C},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},y=(n(38),Object(k.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,s){return n("div",{key:s,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})):t._e(),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));y.options.__file="Home.vue";var S=y.exports,w=(n(39),Object(k.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));w.options.__file="SidebarButton.vue";var L=w.exports,T={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$localePath,s=e=>e.title&&e.title.toLowerCase().indexOf(t)>-1,i=[];for(let t=0;t<e.length&&!(i.length>=5);t++){const r=e[t];if(this.getPageLocalePath(r)===n)if(s(r))i.push(r);else if(r.headers)for(let t=0;t<r.headers.length&&!(i.length>=5);t++){const e=r.headers[t];s(e)&&i.push(Object.assign({},r,{path:r.path+"#"+e.slug,header:e}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},O=(n(40),Object(k.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,s){return n("li",{staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){t.go(s)},mouseenter:function(e){t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));O.options.__file="SearchBox.vue";var I=O.exports,E={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},N=(n(41),Object(k.a)(E,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));N.options.__file="DropdownTransition.vue";var U=N.exports,j={components:{NavLink:C,DropdownTransition:U},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},P=(n(42),Object(k.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null));P.options.__file="DropdownLink.vue";var D={components:{NavLink:C,DropdownLink:P.exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(i=>{const r=t[i],a=s[i]&&s[i].label||r.lang;let o;return r.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===o)||(o=i)),{text:a,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(v(t),{items:(t.items||[]).map(v)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:`https://github.com/${t}`},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}},M=(n(43),Object(k.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));M.options.__file="NavLinks.vue";var W=M.exports;function A(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var B={components:{SidebarButton:L,NavLinks:W,SearchBox:I,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(A(this.$el,"paddingLeft"))+parseInt(A(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},H=(n(44),Object(k.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));H.options.__file="Navbar.vue";var G=H.exports;function q(t,e,n){const s=[];e.forEach(t=>{"group"===t.type?s.push(...t.children||[]):s.push(t)});for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===t.path)return s[e+n]}}var R={props:["sidebarItems"],computed:{lastUpdated(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?f(this.$site.pages,t,this.$route.path):function(t,e){return q(t,e,-1)}(this.$page,this.sidebarItems)},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?f(this.$site.pages,t,this.$route.path):function(t,e){return q(t,e,1)}(this.$page,this.sidebarItems)},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:n="",docsBranch:s="master",docsRepo:i=t}=this.$site.themeConfig;let r=c(this.$page.path);return l.test(r)?r+="README.md":r+=".md",i&&e?this.createEditLink(t,i,n,s,r):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,i){if(/bitbucket.org/.test(t)){return(u.test(e)?e:t).replace(l,"")+`/${s}`+(n?"/"+n.replace(l,""):"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}return(u.test(e)?e:`https://github.com/${e}`).replace(l,"")+`/edit/${s}`+(n?"/"+n.replace(l,""):"")+i}}},z=(n(45),Object(k.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));z.options.__file="Page.vue";var V=z.exports;function J(t,e,n,s){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},n)}function X(t,e,n,s,i,r=1){return!e||r>i?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const a=d(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[J(t,n+"#"+e.slug,e.title,a),X(t,e.children,n,s,i,r+1)])}))}var Y={functional:!0,props:["item"],render(t,{parent:{$page:e,$site:n,$route:s},props:{item:i}}){const r=d(s,i.path),o="auto"===i.type?r||i.children.some(t=>d(s,i.basePath+"#"+t.slug)):r,l=J(t,i.path,i.title||i.path,o),u=null!=e.frontmatter.sidebarDepth?e.frontmatter.sidebarDepth:n.themeConfig.sidebarDepth,c=null==u?1:u,h=!!n.themeConfig.displayAllHeaders;if("auto"===i.type)return[l,X(t,i.children,i.basePath,s,c)];if((o||h)&&i.headers&&!a.test(i.path)){return[l,X(t,m(i.headers),i.path,s,c)]}return l}},K=(n(46),Object(k.a)(Y,void 0,void 0,!1,null,null,null));K.options.__file="SidebarLink.vue";var F=K.exports,Q={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:F,DropdownTransition:U}},Z=(n(47),Object(k.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null));Z.options.__file="SidebarGroup.vue";var tt={components:{SidebarGroup:Z.exports,SidebarLink:F,NavLinks:W},props:["items"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if("group"===s.type&&s.children.some(e=>d(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return d(this.$route,t.regularPath)}}},et=(n(48),Object(k.a)(tt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,s){return n("li",{key:s},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===s,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(s)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));et.options.__file="Sidebar.vue";var nt={components:{Home:S,Page:V,Sidebar:et.exports,Navbar:G},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return g(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),r.a.configure({showSpinner:!1}),this.$router.beforeEach((t,e,n)=>{t.path===e.path||s.a.component(t.name)||r.a.start(),n()}),this.$router.afterEach(()=>{r.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},st=(n(49),n(50),Object(k.a)(nt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),n("div",{staticStyle:{display:"flex","min-width":"0"}},[n("div",{staticStyle:{display:"flex","align-items":"flex-start",margin:"0 auto","min-width":"0"}},[t.$page.frontmatter.layout?n(t.$page.frontmatter.layout,{tag:"component"}):t.$page.frontmatter.pageLayout?n(t.$page.frontmatter.pageLayout,{tag:"component"}):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$themeConfig.userInfoLayout?n(t.$themeConfig.userInfoLayout,{tag:"component"}):t._e()],1)])],1)},[],!1,null,null,null));st.options.__file="Layout.vue";e.default=st.exports}]]);