(this.webpackJsonpmusicblocks=this.webpackJsonpmusicblocks||[]).push([[2,8,11,16,18,19,20,29,38],{22:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))},23:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,"a",(function(){return r}))},29:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return b}));var r,i,o,c,u=n(1),a=n(3),s=n.n(a),f=n(30),l=(n(48),n(0));function d(){var t=Object(u.useRef)(null),e=Object(u.useRef)(null),n=Object(u.useRef)(null),a=Object(u.useRef)(null);return Object(u.useEffect)((function(){r=e.current,i=n.current,o=a.current,c(),Object(f.setupCartesian)(t.current)}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"artboard-wrapper",children:[Object(l.jsx)("div",{id:"artboard-background",ref:t}),Object(l.jsxs)("div",{id:"artboard-container",children:[Object(l.jsx)("div",{className:"artboard",ref:e}),Object(l.jsx)("div",{className:"artboard-background",ref:n})]}),Object(l.jsx)("div",{id:"artboard-interactor",ref:a})]})})}function b(t){return new Promise((function(e){s.a.render(Object(l.jsx)(d,{}),t),c=function(){return requestAnimationFrame((function(){e({artboard:r,artboardBackground:i,interactor:o})}))}}))}},30:function(t,e,n){"use strict";n.r(e),n.d(e,"setupCartesian",(function(){return o}));var r=n(58),i=n.n(r);function o(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;new i.a((function(t){t.setup=function(){t.createCanvas(n,r),t.noLoop();var e=10,i=Math.floor((t.width>>1)/e),o=Math.floor((t.height>>1)/e);t.stroke(252,252,252),t.strokeWeight(1);for(var c=1;c<=i;c++)t.line((t.width>>1)+c*e,0,(t.width>>1)+c*e,t.height),t.line((t.width>>1)-c*e,0,(t.width>>1)-c*e,t.height);for(var u=1;u<=o;u++)t.line(0,(t.height>>1)+u*e,t.width,(t.height>>1)+u*e),t.line(0,(t.height>>1)-u*e,t.width,(t.height>>1)-u*e);e=100,i=Math.floor((t.width>>1)/e),o=Math.floor((t.height>>1)/e),t.stroke(244,244,244),t.strokeWeight(1);for(var a=1;a<=i;a++)t.line((t.width>>1)+a*e,0,(t.width>>1)+a*e,t.height),t.line((t.width>>1)-a*e,0,(t.width>>1)-a*e,t.height);for(var s=1;s<=o;s++)t.line(0,(t.height>>1)+s*e,t.width,(t.height>>1)+s*e),t.line(0,(t.height>>1)-s*e,t.width,(t.height>>1)-s*e);t.stroke(240,240,240),t.strokeWeight(2),t.line(t.width>>1,0,t.width>>1,t.height),t.line(0,t.height>>1,t.width,t.height>>1)}}),t)}},33:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},34:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,"a",(function(){return i}))},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(23);function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Object(r.a)(t,e)}},36:function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,"a",(function(){return r}))},37:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},47:function(t,e,n){"use strict";n.r(e),n.d(e,"mount",(function(){return s})),n.d(e,"mountSketch",(function(){return f})),n.d(e,"updateBackgroundColor",(function(){return l}));var r,i,o=n(19),c=n(4),u=n(29),a=n(49);function s(){return new Promise((function(t){var e=Object(c.a)({location:"workspace"});e.id="painter",Object(u.setup)(e).then((function(e){var n=e.artboard,o=e.artboardBackground,c=e.interactor;r=n,i=o,Object(a.setup)(c),t()}))}))}function f(t){return new Promise((function(e){t.setup(r),requestAnimationFrame((function(){var t=r.children[0];t.style.position="absolute",t.style.left="50%",t.style.transform="translateX(-50%)",e()}))}))}function l(t,e){if("unset"===t)i.style.backgroundColor="unset";else{var n=e,r=Object(o.a)(n,3),c=r[0],u=r[1],a=r[2];i.style.backgroundColor="rgb(".concat(c,", ").concat(u,", ").concat(a,")")}}},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return c})),n.d(e,"updatePosition",(function(){return u})),n.d(e,"updateHeading",(function(){return a})),n.d(e,"updateAccent",(function(){return s}));var r,i,o=n(50).default;function c(t){var e=document.createElement("div");e.classList.add("artboard-sprite-wrapper"),e.style.left="50%",e.style.bottom="50%",e.style.transform="translate(-50%, 50%)",t.appendChild(e),r=e,fetch(o).then((function(t){return t.text()})).then((function(t){e.innerHTML=t;var n=e.children[0];n.classList.add("artboard-sprite"),i=n}))}function u(t,e){r.style.left="calc(50% + ".concat(t,"px)"),r.style.bottom="calc(50% + ".concat(e,"px)")}function a(t){r.style.transform="translate(-50%, 50%) rotate(".concat(-t,"deg)")}function s(t,e,n){if("unset"===t)return i.querySelectorAll(".path-fill").forEach((function(t){t.classList.add("path-fill-default"),t.setAttribute("fill","")})),i.querySelectorAll(".path-stroke").forEach((function(t){t.classList.add("path-stroke-default"),t.setAttribute("stroke","")})),void i.querySelectorAll(".path-fill-stroke").forEach((function(t){t.classList.add("path-fill-stroke-default"),t.setAttribute("fill",""),t.setAttribute("stroke","")}));i.querySelectorAll(".path-fill").forEach((function(t){t.classList.remove("path-fill-default"),t.setAttribute("fill",e)})),i.querySelectorAll(".path-stroke").forEach((function(t){t.classList.remove("path-stroke-default"),t.setAttribute("stroke",n)})),i.querySelectorAll(".path-fill-stroke").forEach((function(t){t.classList.remove("path-fill-stroke-default"),t.setAttribute("fill",n),t.setAttribute("stroke",n)}))}},50:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/mouse.19733222.svg"},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(36),i=n(37);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(t,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var e=Object(i.a)();return function(){var n,i=Object(r.a)(t);if(e){var o=Object(r.a)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}},69:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return c})),n.d(e,"drawLine",(function(){return u})),n.d(e,"drawPoint",(function(){return a})),n.d(e,"drawArc",(function(){return s})),n.d(e,"drawBezier",(function(){return f})),n.d(e,"setFillOn",(function(){return l})),n.d(e,"setFillOff",(function(){return d})),n.d(e,"setColor",(function(){return b})),n.d(e,"setThickness",(function(){return h})),n.d(e,"setBackground",(function(){return p})),n.d(e,"clear",(function(){return O}));var r,i=n(58),o=n.n(i);function c(t){var e=t.getBoundingClientRect(),n=e.width,i=e.height;new o.a((function(t){r=t,t.setup=function(){t.createCanvas(n,i),t.noLoop(),t.translate(t.width/2,t.height/2),t.angleMode(t.DEGREES),t.scale(1,-1)}}),t)}function u(t,e,n,i){r.line(t,e,n,i)}function a(t,e){r.point(t,e)}function s(t,e,n,i,o,c){r.noFill(),r.arc(t,e,n,i,o,c,r.OPEN)}function f(t,e,n,i,o,c,u,a){r.bezier(t,e,n,i,o,c,u,a)}function l(t,e,n){"number"===typeof e&&"number"===typeof n?r.fill(t,e,n):r.fill(t)}function d(){r.noFill()}function b(t,e,n){"number"===typeof e&&"number"===typeof n?r.stroke(t,e,n):r.stroke(t)}function h(t){r.strokeWeight(t)}function p(t,e,n){"number"===typeof e&&"number"===typeof n?r.background(t,e,n):r.background(t)}function O(){r.clear()}},70:function(t,e,n){"use strict";function r(t){return t/Math.PI*180}function i(t){return t/180*Math.PI}n.r(e),n.d(e,"radToDeg",(function(){return r})),n.d(e,"degToRad",(function(){return i}))},72:function(t,e,n){"use strict";n.r(e),n.d(e,"sketch",(function(){return v})),n.d(e,"setup",(function(){return E})),n.d(e,"reset",(function(){return S})),n.d(e,"run",(function(){return P})),n.d(e,"ElementMoveForward",(function(){return x})),n.d(e,"ElementMoveBackward",(function(){return A})),n.d(e,"ElementTurnRight",(function(){return R})),n.d(e,"ElementTurnLeft",(function(){return C})),n.d(e,"ElementSetXY",(function(){return T})),n.d(e,"ElementSetHeading",(function(){return M})),n.d(e,"ElementDrawArc",(function(){return L})),n.d(e,"ElementSetColor",(function(){return B})),n.d(e,"ElementSetThickness",(function(){return V})),n.d(e,"ElementPenUp",(function(){return D})),n.d(e,"ElementPenDown",(function(){return q})),n.d(e,"ElementSetBackground",(function(){return F})),n.d(e,"ElementClear",(function(){return _}));var r=n(80);var i=n(73);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(19),u=n(33),a=n(34),s=n(35),f=n(51),l=n(22),d=n(69),b=n(49),h=n(47),p=n(70),O=n(52),j={position:{x:0,y:0},heading:90,drawing:!0},g=Object(l.a)({},j),y=new Proxy(g,{set:function(t,e,n){return"position"===e?(g.position=n,Object(b.updatePosition)(n.x,n.y)):"heading"===e?(g.heading=(n+360)%360,Object(b.updateHeading)((n+360-90)%360)):"drawing"===e&&(g.drawing=n),!0}}),m=[[255,241,0],[255,140,0],[232,17,35],[236,0,140],[104,33,122],[0,24,143],[0,188,242],[0,178,148],[0,158,73],[186,216,10]],v=d;function w(t){var e=[y.position.x,y.position.y,y.position.x+t*Math.cos(Object(p.degToRad)(y.heading)),y.position.y+t*Math.sin(Object(p.degToRad)(y.heading))],n=e[0],r=e[1],i=e[2],o=e[3];y.position={x:i,y:o},y.drawing&&v.drawLine(n,r,i,o)}function k(t){y.heading+=t}function E(t){v.setup(t)}function S(){y.position=Object(l.a)({},j.position),y.heading=j.heading,y.drawing=j.drawing,v.clear(),Object(h.updateBackgroundColor)("unset")}function P(){}var x=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"move-forward","forward",{steps:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){w(t.steps)}}]),n}(O.ElementStatement),A=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"move-backward","backward",{steps:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){w(-t.steps)}}]),n}(O.ElementStatement),R=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"turn-right","right",{angle:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){k(-t.angle)}}]),n}(O.ElementStatement),C=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"turn-left","left",{angle:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){k(t.angle)}}]),n}(O.ElementStatement),T=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"set-xy","set-xy",{x:["number"],y:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){var e=[y.position.x,y.position.y,-t.x,t.y],n=e[0],r=e[1],i=e[2],o=e[3];y.position={x:i,y:o},y.drawing&&v.drawLine(n,r,i,o)}}]),n}(O.ElementStatement),M=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"set-heading","set-heading",{angle:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){y.heading=t.angle+90}}]),n}(O.ElementStatement),L=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"draw-arc","draw-arc",{radius:["number"],angle:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){var e=t.radius,n=t.angle,r=Math.sign(n),i=1===r?y.heading+n-90:y.heading+n+90,o=y.position.x+e*Math.cos(Object(p.degToRad)(y.heading+90*r)),u=y.position.y+e*Math.sin(Object(p.degToRad)(y.heading+90*r));if(y.drawing){var a=1===r?[i-n,i]:[i,i-n],s=Object(c.a)(a,2),f=s[0],l=s[1];v.drawArc(o,u,2*e,2*e,f,l)}y.heading+=n,y.position={x:o+e*Math.cos(Object(p.degToRad)(i)),y:u+e*Math.sin(Object(p.degToRad)(i))}}}]),n}(O.ElementStatement),B=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"set-color","set color",{value:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){var e=(t.value-1)%10;v.setColor.apply(v,o(m[e]))}}]),n}(O.ElementStatement),V=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"set-thickness","set-thickness",{value:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){v.setThickness(t.value)}}]),n}(O.ElementStatement),D=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"pen-up","pen-up",{})}return Object(a.a)(n,[{key:"onVisit",value:function(){y.drawing=!1}}]),n}(O.ElementStatement),q=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"pen-down","pen-down",{})}return Object(a.a)(n,[{key:"onVisit",value:function(){y.drawing=!0}}]),n}(O.ElementStatement),F=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"set-background","set-background",{value:["number"]})}return Object(a.a)(n,[{key:"onVisit",value:function(t){var e=(t.value-1)%10;Object(h.updateBackgroundColor)("set",m[e])}}]),n}(O.ElementStatement),_=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.call(this,"clear","clear",{})}return Object(a.a)(n,[{key:"onVisit",value:function(){v.clear(),Object(h.updateBackgroundColor)("unset")}}]),n}(O.ElementStatement)}}]);
//# sourceMappingURL=2.22ddb0b9.chunk.js.map