/*! women-in-the-army 2022-04-18 */
!function(f,p,h){function m(e,t){return typeof e===t}function i(e){var t=T.className,n=x._config.classPrefix||"";if(w&&(t=t.baseVal),x._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?T.className.baseVal=t:T.className=t)}function g(){return"function"!=typeof p.createElement?p.createElement(arguments[0]):w?p.createElementNS.call(p,"http://www.w3.org/2000/svg",arguments[0]):p.createElement.apply(p,arguments)}function v(e,t){return!!~(""+e).indexOf(t)}function l(e,t){return e-1===t||e===t||e+1===t}function a(e,t){if("object"==typeof e)for(var n in e)C(e,n)&&a(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=x[r[0]];if(2==r.length&&(o=o[r[1]]),void 0!==o)return x;t="function"==typeof t?t():t,1==r.length?x[r[0]]=t:(!x[r[0]]||x[r[0]]instanceof Boolean||(x[r[0]]=new Boolean(x[r[0]])),x[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),x._trigger(e,t)}return x}function y(e,t,n,r){var o,i,a,s,d,l="modernizr",c=g("div"),u=((d=p.body)||((d=g(w?"svg":"body")).fake=!0),d);if(parseInt(n,10))for(;n--;)(a=g("div")).id=r?r[n]:l+(n+1),c.appendChild(a);return(o=g("style")).type="text/css",o.id="s"+l,(u.fake?u:c).appendChild(o),u.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(p.createTextNode(e)),c.id=l,u.fake&&(u.style.background="",u.style.overflow="hidden",s=T.style.overflow,T.style.overflow="hidden",T.appendChild(u)),i=t(c,e),u.fake?(u.parentNode.removeChild(u),T.style.overflow=s,T.offsetHeight):c.parentNode.removeChild(c),!!i}function s(e,t){return function(){return e.apply(t,arguments)}}function b(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(e,t,n,r){function o(){a&&(delete L.style,delete L.modElem)}if(r=!m(r,"undefined")&&r,!m(n,"undefined")){var i=function(e,t){var n=e.length;if("CSS"in f&&"supports"in f.CSS){for(;n--;)if(f.CSS.supports(b(e[n]),t))return!0;return!1}if("CSSSupportsRule"in f){for(var r=[];n--;)r.push("("+b(e[n])+":"+t+")");return y("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return h}(e,n);if(!m(i,"undefined"))return i}for(var a,s,d,l,c,u=["modernizr","tspan"];!L.style;)a=!0,L.modElem=g(u.shift()),L.style=L.modElem.style;for(d=e.length,s=0;s<d;s++)if(l=e[s],c=L.style[l],v(l,"-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),L.style[l]!==h){if(r||m(n,"undefined"))return o(),"pfx"!=t||l;try{L.style[l]=n}catch(e){}if(L.style[l]!=c)return o(),"pfx"!=t||l}return o(),!1}function r(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(i+" ")+i).split(" ");return m(t,"string")||m(t,"undefined")?d(a,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:m(r=t[e[o]],"function")?s(r,n||t):r;return!1}(a=(e+" "+W.join(i+" ")+i).split(" "),t,n)}function o(e,t,n){return r(e,h,h,t,n)}var c=[],u=[],e={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){u.push({name:e,fn:t,options:n})},addAsyncTest:function(e){u.push({name:null,fn:e})}},x=function(){};x.prototype=e,(x=new x).addTest("svg",!!p.createElementNS&&!!p.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),x.addTest("target",function(){var e=f.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(e){return!1}}),x.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in f&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return e});var T=p.documentElement,w="svg"===T.nodeName.toLowerCase();w||function(e,a){function u(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function f(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=g[e[c]];return t||(t={},m++,e[c]=m,g[m]=t),t}function o(e,t,n){return t||(t=a),s?t.createElement(e):(n||(n=p(t)),!(r=n.cache[e]?n.cache[e].cloneNode():l.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||d.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function r(e){e||(e=a);var t,n,r=p(e);return!v.shivCSS||i||r.hasCSS||(r.hasCSS=!!u(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return v.shivMethods?o(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+f().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,n.frag)),e}function h(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(x+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function t(s){function d(){clearTimeout(e._removeSheetTimer),l&&l.removeNode(!0),l=null}var l,c,e=p(s),t=s.namespaces,n=s.parentWindow;return!T||s.printShived||(void 0===t[x]&&t.add(x),n.attachEvent("onbeforeprint",function(){d();for(var e,t,n,r=s.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&b.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+f().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+x+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),c=function(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+f().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(h(t)));return i}(s),l=u(s,o)}),n.attachEvent("onafterprint",function(){(function(e){for(var t=e.length;t--;)e[t].removeNode()})(c),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(d,500)}),s.printShived=!0),s}var i,s,n=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,c="_html5shiv",m=0,g={};!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",i="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=i=!0}}();var v={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==n.shivCSS,supportsUnknownElements:s,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:r,createElement:o,createDocumentFragment:function(e,t){if(e||(e=a),s)return e.createDocumentFragment();for(var n=(t=t||p(e)).frag.cloneNode(),r=0,o=f(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=v.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),v.elements=n+" "+e,r(t)}};e.html5=v,r(a);var y,b=/^$|\b(?:all|print)\b/,x="html5shiv",T=!(s||(y=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===y.applyElement||void 0===y.removeNode||void 0===e.attachEvent));v.type+=" print",(v.shivPrint=t)(a),"object"==typeof module&&module.exports&&(module.exports=v)}(void 0!==f?f:this,p);var S=e._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];e._prefixes=S,x.addTest("adownload",!f.externalHost&&"download"in g("a")),x.addTest("csscalc",function(){var e=g("a");return e.style.cssText="width:"+S.join("calc(10px);width:"),!!e.style.length}),x.addTest("cssgradients",function(){for(var e,t="background-image:",n="",r=0,o=S.length-1;r<o;r++)e=0===r?"to ":"",n+=t+S[r]+"linear-gradient("+e+"left top, #9f9, white);";x._config.usePrefixes&&(n+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var i=g("a").style;return i.cssText=n,-1<(""+i.backgroundImage).indexOf("gradient")}),x.addTest("multiplebgs",function(){var e=g("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),x.addTest("opacity",function(){var e=g("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),x.addTest("rgba",function(){var e=g("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",-1<(""+e.backgroundColor).indexOf("rgba")}),x.addTest("placeholder","placeholder"in g("input")&&"placeholder"in g("textarea")),x.addTest("inlinesvg",function(){var e=g("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),x.addTest("hsla",function(){var e=g("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",v(e.backgroundColor,"rgba")||v(e.backgroundColor,"hsla")});var t="CSS"in f&&"supports"in f.CSS,n="supportsCSS"in f;x.addTest("supports",t||n);var C,E,z={}.toString;x.addTest("svgclippaths",function(){return!!p.createElementNS&&/SVGClipPath/.test(z.call(p.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),C=m(E={}.hasOwnProperty,"undefined")||m(E.call,"undefined")?function(e,t){return t in e&&m(e.constructor.prototype[t],"undefined")}:function(e,t){return E.call(e,t)},e._l={},e.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),x.hasOwnProperty(e)&&setTimeout(function(){x._trigger(e,x[e])},0)},e._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},x._q.push(function(){e.addTest=a}),x.addTest("svgasimg",p.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var _,N,k,j,P,R=e.testStyles=y;x.addTest("touchevents",function(){var t;if("ontouchstart"in f||f.DocumentTouch&&p instanceof DocumentTouch)t=!0;else{var e=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");R(e,function(e){t=9===e.offsetTop})}return t}),R("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,x.addTest("displaytable",t,{aliases:["display-table"]})},2),(_=navigator.userAgent,N=_.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),k=_.match(/w(eb)?osbrowser/gi),j=_.match(/windows phone/gi)&&_.match(/iemobile\/([0-9])+/gi)&&9<=parseFloat(RegExp.$1),P=N<533&&_.match(/android/gi),k||P||j)?x.addTest("fontface",!1):R('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=p.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);x.addTest("fontface",i)}),R('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){x.addTest("generatedcontent",7<=e.offsetHeight)}),R("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){x.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),R("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;r<5;r++)n=n&&t[r].offsetWidth===r%2+1;x.addTest("nthchild",n)},5),R("#modernizr { height: 50vh; }",function(e){var t=parseInt(f.innerHeight/2,10),n=parseInt((f.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);x.addTest("cssvhunit",n==t)}),R("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.max(i,a),10),d=parseInt((f.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);x.addTest("cssvmaxunit",l(s,d)||l(s,d-o))},3),R("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.min(i,a),10),d=parseInt((f.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);x.addTest("cssvminunit",l(s,d)||l(s,d-o))},3),R("#modernizr { width: 50vw; }",function(e){var t=parseInt(f.innerWidth/2,10),n=parseInt((f.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);x.addTest("cssvwunit",n==t)});var M,F=(M=f.matchMedia||f.msMatchMedia)?function(e){var t=M(e);return t&&t.matches||!1}:function(e){var t=!1;return y("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(f.getComputedStyle?f.getComputedStyle(e,null):e.currentStyle).position}),t};e.mq=F,x.addTest("mediaqueries",F("only all"));var I="Moz O ms Webkit",A=e._config.usePrefixes?I.split(" "):[];e._cssomPrefixes=A;var W=e._config.usePrefixes?I.toLowerCase().split(" "):[];e._domPrefixes=W;var B={elem:g("modernizr")};x._q.push(function(){delete B.elem});var L={style:B.elem.style};x._q.unshift(function(){delete L.style});var $=e.testProp=function(e,t,n){return d([e],h,t,n)};x.addTest("textshadow",$("textShadow","1px 1px")),e.testAllProps=r,e.testAllProps=o,x.addTest("cssanimations",o("animationName","a",!0)),x.addTest("backgroundsize",o("backgroundSize","100%",!0)),x.addTest("borderimage",o("borderImage","url() 1",!0)),x.addTest("borderradius",o("borderRadius","0px",!0)),x.addTest("boxshadow",o("boxShadow","1px 1px",!0)),x.addTest("boxsizing",o("boxSizing","border-box",!0)&&(p.documentMode===h||7<p.documentMode)),function(){x.addTest("csscolumns",function(){var e=!1,t=o("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=o("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||o(n[r])),x.addTest("csscolumns."+e,t)}(),x.addTest("flexbox",o("flexBasis","1px",!0)),x.addTest("flexboxlegacy",o("boxDirection","reverse",!0)),x.addTest("cssreflections",o("boxReflect","above",!0)),x.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&o("transform","scale(1)",!0)}),x.addTest("csstransforms3d",function(){var t=!!o("perspective","1px",!0),e=x._config.usePrefixes;if(t&&(!e||"webkitPerspective"in T.style)){var n;x.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",e&&(n+=",(-webkit-transform-3d)")),R("#modernizr{width:0;height:0}"+(n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(e){t=7===e.offsetWidth&&18===e.offsetHeight})}return t}),x.addTest("preserve3d",o("transformStyle","preserve-3d")),x.addTest("csstransitions",o("transition","all",!0)),x.addTest("csspseudotransitions",function(){var t=!1;if(!x.csstransitions||!f.getComputedStyle)return t;var e='#modernizr:before { content:" "; font-size:5px;'+x._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return x.testStyles(e,function(e){f.getComputedStyle(e,":before").getPropertyValue("font-size"),e.className+="trigger",t="5px"===f.getComputedStyle(e,":before").getPropertyValue("font-size")}),t}),function(){var e,t,n,r,o,i;for(var a in u)if(u.hasOwnProperty(a)){if(e=[],(t=u[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=m(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?x[i[0]]=r:(!x[i[0]]||x[i[0]]instanceof Boolean||(x[i[0]]=new Boolean(x[i[0]])),x[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}(),i(c),delete e.addTest,delete e.addAsyncTest;for(var V=0;V<x._q.length;V++)x._q[V]();f.Modernizr=x}(window,document);