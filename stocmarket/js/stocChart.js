!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===la||n[0]===sa?sa+n:n}function l(n){return(n+="")[0]===sa?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=fa.length;r>e;++e){var u=fa[e]+t;if(u in n)return u}}function y(){}function x(){}function M(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function _(){Bo.event.preventDefault()}function b(){for(var n,t=Bo.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new x,e=0,r=arguments.length;++e<r;)t[arguments[e]]=M(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Bo.event;u.target=n,Bo.event=u,t[u.type].apply(e,r)}finally{Bo.event=i}}},t}function S(n){return ga(n,ya),n}function k(n){return"function"==typeof n?n:function(){return pa(n,this)}}function E(n){return"function"==typeof n?n:function(){return va(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Bo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function C(n){return n.trim().replace(/\s+/g," ")}function N(n){return new RegExp("(?:^|\\s+)"+Bo.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function L(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(T);var u=n.length;return"function"==typeof t?r:e}function T(n){var t=N(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",C(u+" "+n))):e.setAttribute("class",C(u.replace(t," ")))}}function q(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=Bo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(n){return{__data__:n}}function U(n){return function(){return ma(this,n)}}function j(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function F(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function H(n){return ga(n,Ma),n}function O(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function Y(){var n=this.__transition__;n&&++n.active}function I(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Jo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Bo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=Z;a>0&&(n=n.slice(0,a));var l=ba.get(n);return l&&(n=l,c=V),a?t?u:r:t?y:i}function Z(n,t){return function(e){var r=Bo.event;Bo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Bo.event=r}}}function V(n,t){var e=Z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function X(){var n=".dragsuppress-"+ ++Sa,t="click"+n,e=Bo.select(Qo).on("touchmove"+n,_).on("dragstart"+n,_).on("selectstart"+n,_);if(wa){var r=Ko.style,u=r[wa];r[wa]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),wa&&(r[wa]=u),i&&(e.on(t,function(){_(),o()},!0),setTimeout(o,0))}}function $(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>ka&&(Qo.scrollX||Qo.scrollY)){e=Bo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();ka=!(u.f||u.e),e.remove()}return ka?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function B(){return Bo.event.changedTouches[0].identifier}function W(){return Bo.event.target}function J(){return Qo}function G(n){return n>0?1:0>n?-1:0}function K(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function Q(n){return n>1?0:-1>n?Ea:Math.acos(n)}function nt(n){return n>1?Ca:-1>n?-Ca:Math.asin(n)}function tt(n){return((n=Math.exp(n))-1/n)/2}function et(n){return((n=Math.exp(n))+1/n)/2}function rt(n){return((n=Math.exp(2*n))-1)/(n+1)}function ut(n){return(n=Math.sin(n/2))*n}function it(){}function ot(n,t,e){return this instanceof ot?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ot?new ot(n.h,n.s,n.l):Mt(""+n,_t,ot):new ot(n,t,e)}function at(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new dt(u(n+120),u(n),u(n-120))}function ct(n,t,e){return this instanceof ct?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof ct?new ct(n.h,n.c,n.l):n instanceof st?ht(n.l,n.a,n.b):ht((n=bt((n=Bo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new ct(n,t,e)}function lt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new st(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function st(n,t,e){return this instanceof st?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof st?new st(n.l,n.a,n.b):n instanceof ct?lt(n.h,n.c,n.l):bt((n=dt(n)).r,n.g,n.b):new st(n,t,e)}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Ya,r=gt(r)*Ia,i=gt(i)*Za,new dt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?new ct(Math.atan2(e,t)*Ta,Math.sqrt(t*t+e*e),n):new ct(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n,t,e){return this instanceof dt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof dt?new dt(n.r,n.g,n.b):Mt(""+n,dt,at):new dt(n,t,e)}function mt(n){return new dt(n>>16,255&n>>8,255&n)}function yt(n){return mt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function Mt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(St(u[0]),St(u[1]),St(u[2]))}return(i=$a.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new ot(r,u,c)}function bt(n,t,e){n=wt(n),t=wt(t),e=wt(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Ya),u=pt((.2126729*n+.7151522*t+.072175*e)/Ia),i=pt((.0193339*n+.119192*t+.9503041*e)/Za);return st(116*u-16,500*(r-u),200*(u-i))}function wt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function St(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function kt(n){return"function"==typeof n?n:function(){return n}}function Et(n){return n}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Ct(t,e,n,r)}}function Ct(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Bo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!Qo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Bo.event;Bo.event=n;try{o.progress.call(i,c)}finally{Bo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Jo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Bo.rebind(i,o,"on"),null==r?i:i.get(Nt(r))}function Nt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function Lt(){var n=Tt(),t=qt()-n;t>24?(isFinite(t)&&(clearTimeout(Ga),Ga=setTimeout(Lt,t)),Ja=0):(Ja=1,Qa(Lt))}function Tt(){var n=Date.now();for(Ka=Ba;Ka;)n>=Ka.t&&(Ka.f=Ka.c(n-Ka.t)),Ka=Ka.n;return n}function qt(){for(var n,t=Ba,e=1/0;t;)t.f?t=n?n.n=t.n:Ba=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Wa=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*ca(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:Et;return function(n){var e=tc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=ec.get(g)||Ut;var x=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=Bo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var M,_,b=n.lastIndexOf(".");if(0>b){var w=y?n.lastIndexOf("e"):-1;0>w?(M=n,_=""):(M=n.substring(0,w),_=n.substring(w))}else M=n.substring(0,b),_=t+n.substring(b+1);!l&&f&&(M=i(M,1/0));var S=v.length+M.length+_.length+(x?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return x&&(M=i(k+M,k.length?s-_.length:1/0)),u+=v,n=M+_,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(x?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new uc(e-1)),1),e}function i(n,e){return t(n=new uc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{uc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{uc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{uc=jt;var r=new jt;return r._=t,n(r,e)._}finally{uc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=oc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&uc!==jt,o=new(i?jt:uc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in oc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.slice(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function l(n,t,r){return e(n,C.X.toString(),t,r)}function s(n,t,e){var r=x.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{uc=jt;var t=new uc;return t._=n,r(t)}finally{uc=Date}}var r=t(n);return e.parse=function(n){try{uc=jt;var t=r.parse(n);return t&&t._}finally{uc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var x=Bo.map(),M=It(v),_=Zt(v),b=It(d),w=Zt(d),S=It(m),k=Zt(m),E=It(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Yt(n.getDate(),t,2)},e:function(n,t){return Yt(n.getDate(),t,2)},H:function(n,t){return Yt(n.getHours(),t,2)},I:function(n,t){return Yt(n.getHours()%12||12,t,2)},j:function(n,t){return Yt(1+rc.dayOfYear(n),t,3)},L:function(n,t){return Yt(n.getMilliseconds(),t,3)},m:function(n,t){return Yt(n.getMonth()+1,t,2)},M:function(n,t){return Yt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Yt(n.getSeconds(),t,2)},U:function(n,t){return Yt(rc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Yt(rc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Yt(n.getFullYear()%100,t,2)},Y:function(n,t){return Yt(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function Yt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function It(n){return new RegExp("^(?:"+n.map(Bo.requote).join("|")+")","i")}function Zt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|ca(t)/60,u=ca(t)%60;return e+Yt(r,"0",2)+Yt(u,"0",2)}function oe(n,t,e){cc.lastIndex=0;var r=cc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&hc.hasOwnProperty(n.type)&&hc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=La,t=t*La/2+Ea/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);pc.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;vc.point=function(o,a){vc.point=n,r=(t=o)*La,u=Math.cos(a=(e=a)*La/2+Ea/4),i=Math.sin(a)},vc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Me(n){return[Math.atan2(n[1],n[0]),nt(n[2])]}function _e(n,t){return ca(n[0]-t[0])<Na&&ca(n[1]-t[1])<Na}function be(n,t){n*=La;var e=Math.cos(t*=La);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++dc,yc+=(n-yc)/dc,xc+=(t-xc)/dc,Mc+=(e-Mc)/dc}function Se(){function n(n,u){n*=La;var i=Math.cos(u*=La),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);mc+=l,_c+=l*(t+(t=o)),bc+=l*(e+(e=a)),wc+=l*(r+(r=c)),we(t,e,r)}var t,e,r;Ac.point=function(u,i){u*=La;var o=Math.cos(i*=La);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Ac.point=n,we(t,e,r)}}function ke(){Ac.point=be}function Ee(){function n(n,t){n*=La;var e=Math.cos(t*=La),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-Q(g)/h,v=Math.atan2(h,g);Sc+=p*l,kc+=p*s,Ec+=p*f,mc+=v,_c+=v*(r+(r=o)),bc+=v*(u+(u=a)),wc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Ac.point=function(o,a){t=o,e=a,Ac.point=n,o*=La;var c=Math.cos(a*=La);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Ac.lineEnd=function(){n(t,e),Ac.lineEnd=ke,Ac.point=be}}function Ae(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new ze(e,n,null,!0),l=new ze(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new ze(r,n,null,!1),l=new ze(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),Ne(i),Ne(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Ne(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function ze(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=Bo.merge(g);var n=je(m,p);g.length?(_||(i.polygonStart(),_=!0),Ce(g,Re,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=qe(),M=t(x),_=!1;return y}}function Te(n){return n.length>1}function qe(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Re(n,t){return((n=n.x)[0]<0?n[1]-Ca-Na:Ca-n[1])-((t=t.x)[0]<0?t[1]-Ca-Na:Ca-t[1])}function De(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Ea:-Ea,c=ca(i-e);ca(c-Ea)<Na?(n.point(e,r=(r+o)/2>0?Ca:-Ca),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Ea&&(ca(e-u)<Na&&(e-=u*Na),ca(i-a)<Na&&(i-=a*Na),r=Pe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Pe(n,t,e,r){var u,i,o=Math.sin(n-e);return ca(o)>Na?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Ue(n,t,e,r){var u;if(null==n)u=e*Ca,r.point(-Ea,u),r.point(0,u),r.point(Ea,u),r.point(Ea,0),r.point(Ea,-u),r.point(0,-u),r.point(-Ea,-u),r.point(-Ea,0),r.point(-Ea,u);else if(ca(n[0]-t[0])>Na){var i=n[0]<t[0]?Ea:-Ea;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function je(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;pc.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Ea/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Ea/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Ea,k=p*x;if(pc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Aa:_,S^h>=e^m>=e){var E=de(pe(f),pe(n));xe(E);var A=de(u,E);xe(A);var C=(S^_>=0?-1:1)*nt(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Na>i||Na>i&&0>pc)^1&o}function Fe(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Ea:-Ea),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Na,p[1]+=Na,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),x=m*m-y*(ve(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ye(d,(-m-M)/y);if(me(_,p),_=Me(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ca(A-Ea)<Na,N=C||Na>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ca(_[0]-w)<Na?k:E):k<=_[1]&&_[1]<=E:A>Ea^(w<=_[0]&&_[0]<=S)){var z=ye(d,(-m+M)/y);return me(z,p),[_,Me(z)]}}}function u(t,e){var r=o?n:Ea-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ca(i)>Na,c=gr(n,6*La);return Le(t,e,c,o?[0,-n]:[-Ea,n-Ea])}function He(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Oe(n,t,e,r){function u(r,u){return ca(r[0]-n)<Na?u>0?0:3:ca(r[0]-e)<Na?u>0?2:1:ca(r[1]-t)<Na?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&K(l,i,n)>0&&++t:i[1]<=r&&K(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Nc,Math.min(Nc,n)),t=Math.max(-Nc,Math.min(Nc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=qe(),C=He(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Bo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return N}}function Ye(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ie(n){var t=0,e=Ea/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Ea/180,e=n[1]*Ea/180):[180*(t/Ea),180*(e/Ea)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,nt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Lc+=u*n-r*t,r=n,u=t}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,t=r=i,e=u=o},Pc.lineEnd=function(){n(t,e)}}function Xe(n,t){Tc>n&&(Tc=n),n>Rc&&(Rc=n),qc>t&&(qc=t),t>Dc&&(Dc=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){yc+=n,xc+=t,++Mc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);_c+=o*(t+n)/2,bc+=o*(e+r)/2,wc+=o,We(t=n,e=r)}var t,e;jc.point=function(r,u){jc.point=n,We(t=r,e=u)}}function Ge(){jc.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);_c+=o*(r+n)/2,bc+=o*(u+t)/2,wc+=o,o=u*n-r*t,Sc+=o*(r+n),kc+=o*(u+t),Ec+=3*o,We(r=n,u=t)}var t,e,r,u;jc.point=function(i,o){jc.point=n,We(t=r=i,e=u=o)},jc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Aa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function s(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=l+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ca(ca(w)-1)<Na||ca(r-h)<Na?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-e,T=x*z-y*L;
(T*T/M>i||ca((y*z+x*L)/M-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*La),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ta,e*Ta])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ta,n[1]*Ta]}function r(){a=Ye(o=lr(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Cc,_=Et,b=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(M(o,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Cc):Fe((b=+n)*La),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Oe(n[0][0],n[0][1],n[1][0],n[1][1]):Et,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*La,d=n[1]%360*La,r()):[v*Ta,d*Ta]},t.rotate=function(n){return arguments.length?(m=n[0]%360*La,y=n[1]%360*La,x=n.length>2?n[2]%360*La:0,r()):[m*Ta,y*Ta,x*Ta]},Bo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*La,e*La)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Ea?n-Aa:-Ea>n?n+Aa:n,t]}function lr(n,t,e){return n?t||e?Ye(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>Ea?t-Aa:-Ea>t?t+Aa:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),nt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),nt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Aa)):(u=n+o*Aa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=Me([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,xe(e);var r=Q(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Na)%(2*Math.PI)}function vr(n,t,e){var r=Bo.range(n,t-Na,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=Bo.range(n,t-Na,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(ut(r-t)+u*o*ut(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ta,Math.atan2(o,Math.sqrt(r*r+u*u))*Ta]}:function(){return[n*Ta,t*Ta]};return p.distance=h,p}function Mr(){function n(n,u){var i=Math.sin(u*=La),o=Math.cos(u),a=ca((n*=La)-t),c=Math.cos(a);Fc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Hc.point=function(u,i){t=u*La,e=Math.sin(i*=La),r=Math.cos(i),Hc.point=n},Hc.lineEnd=function(){Hc.point=Hc.lineEnd=y}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function br(n,t){function e(n,t){o>0?-Ca+Na>t&&(t=-Ca+Na):t>Ca-Na&&(t=Ca-Na);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Ea/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=G(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ca]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ca(u)<Na?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-G(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Ea/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Ea*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Ea/4+t/2)),-n]}function Ar(n){return n[0]}function Cr(n){return n[1]}function Nr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&K(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function Lr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Tr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function qr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=Kc.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),Wc.remove(n),Kc.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&ca(e-c.circle.x)<Na&&ca(r-c.circle.cy)<Na;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&ca(e-l.circle.x)<Na&&ca(r-l.circle.cy)<Na;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Wc._;a;)if(r=Fr(a,o)-i,r>Na)a=a.L;else{if(u=i-Hr(a,o),!(u>Na)){r>-Na?(t=a.P,e=a):u>-Na?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Wc.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),Wc.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Jr(t.site,c.site),void 0;Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+s,y:(h*x-v*y)/m+f};Kr(e.edge,l,p,M),c.edge=Jr(l,n,null,M),e.edge=Jr(n,p,null,M),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Yr(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Bc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(ca(r-t)>Na||ca(u-e)>Na)&&(a.splice(o,0,new Qr(Gr(i.site,s,ca(r-f)<Na&&p-u>Na?{x:f,y:ca(t-f)<Na?e:p}:ca(u-p)<Na&&h-r>Na?{x:ca(e-p)<Na?t:h,y:p}:ca(r-h)<Na&&u-g>Na?{x:h,y:ca(t-h)<Na?e:g}:ca(u-g)<Na&&r-f>Na?{x:ca(e-g)<Na?t:f,y:g}:null),i.site,null)),++c)}function Ir(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=Qc.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Gc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Gc.insert(y,m),y||(Jc=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(Jc=t.N),Gc.remove(t),Qc.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=$c,r=He(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||ca(t.a.x-t.b.x)<Na&&ca(t.a.y-t.b.y)<Na)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return $c.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Bc[n.i].edges.push(new Qr(u,n,t)),Bc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,$c.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for($c=[],Bc=new Array(n.length),Wc=new nu,Gc=new nu;;)if(u=Jc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Bc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Yr(t));var o={cells:Bc,edges:$c};return Wc=Gc=$c=Bc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Bo.rgb(n),t=Bo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function gu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=du(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function pu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function vu(n,t){var e,r,u,i=tl.lastIndex=el.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=tl.exec(n))&&(r=el.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pu(e,r)})),i=el.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function du(n,t){for(var e,r=Bo.interpolators.length;--r>=0&&!(e=Bo.interpolators[r](n,t)););return e}function mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(du(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*Ca)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Aa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Aa/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function zu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=Bo.hcl(n),t=Bo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return lt(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=Bo.hsl(n),t=Bo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return at(e+i*n,r+o*n,u+a*n)+""}}function qu(n,t){n=Bo.lab(n),t=Bo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Du(n){var t=[n.a,n.b],e=[n.c,n.d],r=Uu(t),u=Pu(t,e),i=Uu(ju(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ta,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ta:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Fu(n,t){var e,r=[],u=[],i=Bo.transform(n),o=Bo.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:pu(g[0],p[0])},{i:e-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Hu(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Yu(n){for(var t=n.source,e=n.target,r=Zu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Iu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var e=Iu(n),r=Iu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Vu(n){n.fixed|=2}function Xu(n){n.fixed&=-7}function $u(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Wu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Wu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Ju(n,t){return Bo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ei,n}function Gu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Ku(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function Qu(n){return n.children}function ni(n){return n.value}function ti(n,t){return t.value-n.value}function ei(n){return Bo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ri(n){return n.x}function ui(n){return n.y}function ii(n,t,e){n.y0=t,n.y=e}function oi(n){return Bo.range(n.length)}function ai(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ci(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function li(n){return n.reduce(si,0)}function si(n,t){return n+t[1]}function fi(n,t){return hi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function hi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function gi(n){return[Bo.min(n),Bo.max(n)]}function pi(n,t){return n.value-t.value}function vi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function di(n,t){n._pack_next=t,t._pack_prev=n}function mi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function yi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],bi(r,u,i),t(i),vi(r,i),r._pack_prev=i,vi(i,u),u=r._pack_next,o=3;l>o;o++){bi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(mi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?di(r,u=a):di(r=c,u),o--):(vi(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,x=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Mi)}}function xi(n){n._pack_next=n._pack_prev=n}function Mi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function bi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function wi(n,t){return n.parent==t.parent?1:2}function Si(n){var t=n.children;return t.length?t[0]:n.t}function ki(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ei(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ai(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function Ni(n){return 1+Bo.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function qi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ri(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Di(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Pi(n){return n.rangeExtent?n.rangeExtent():Di(n.range())}function Ui(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function ji(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Fi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:gl}function Hi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Bo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Oi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Hi:Ui,c=r?Ou:Hu;return o=u(n,t,c,e),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Vi(n,t)},i.tickFormat=function(t,e){return Xi(n,t,e)},i.nice=function(t){return Ii(n,t),u()},i.copy=function(){return Oi(n,t,e,r)},u()}function Yi(n,t){return Bo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Ii(n,t){return ji(n,Fi(Zi(n,t)[2]))}function Zi(n,t){null==t&&(t=10);var e=Di(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Vi(n,t){return Bo.range.apply(Bo,Zi(n,t))}function Xi(n,t,e){var r=Zi(n,t);if(e){var u=tc.exec(e);if(u.shift(),"s"===u[8]){var i=Bo.formatPrefix(Math.max(ca(r[0]),ca(r[1])));return u[7]||(u[7]="."+$i(i.scale(r[2]))),u[8]="f",e=Bo.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Bi(u[8],r)),e=u.join("")}else e=",."+$i(r[2])+"f";return Bo.format(e)}function $i(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Bi(n,t){var e=$i(t[2]);return n in pl?Math.abs(e-$i(Math.max(ca(t[0]),ca(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Wi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=ji(r.map(u),e?Math:dl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Di(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return vl;arguments.length<2?t=vl:"function"!=typeof t&&(t=Bo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Wi(n.copy(),t,e,r)},Yi(o,n)}function Ji(n,t,e){function r(t){return n(u(t))}var u=Gi(t),i=Gi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Vi(e,n)},r.tickFormat=function(n,t){return Xi(e,n,t)},r.nice=function(n){return r.domain(Ii(e,n))},r.exponent=function(o){return arguments.length?(u=Gi(t=o),i=Gi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Ji(n.copy(),t,e)},Yi(r,n)}function Gi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ki(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Bo.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=(l-c)/(Math.max(1,n.length-1)+a);return i=r(n.length<2?(c+l)/2:c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c)),g=f-s-(n.length-a)*h;return i=r(s+Math.round(g/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Di(t.a[0])},e.copy=function(){return Ki(n,t)},e.domain(n)}function Qi(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=Bo.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[Bo.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return Qi(r,u)},i()}function no(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return no(n,t,e)},u()}function to(n,t){function e(e){return e>=e?t[Bo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return to(n,t)},e}function eo(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Vi(n,t)},t.tickFormat=function(t,e){return Xi(n,t,e)},t.copy=function(){return eo(n)},t}function ro(n){return n.innerRadius}function uo(n){return n.outerRadius}function io(n){return n.startAngle}function oo(n){return n.endAngle}function ao(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=kt(e),p=kt(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Cr,u=Ae,i=co,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=wl.get(n)||co).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function co(n){return n.join("L")}function lo(n){return co(n)+"Z"}function so(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function fo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function ho(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function go(n,t){return n.length<4?co(n):n[1]+mo(n.slice(1,n.length-1),yo(n,t))}function po(n,t){return n.length<3?co(n):n[0]+mo((n.push(n[0]),n),yo([n[n.length-2]].concat(n,[n[1]]),t))}function vo(n,t){return n.length<3?co(n):n[0]+mo(n,yo(n,t))}function mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return co(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function yo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function xo(n){if(n.length<3)return co(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",wo(El,o),",",wo(El,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),So(c,o,a);return n.pop(),c.push("L",r),c.join("")}function Mo(n){if(n.length<4)return co(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(wo(El,i)+","+wo(El,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),So(e,i,o);return e.join("")}function _o(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[wo(El,o),",",wo(El,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),So(t,o,a);return t.join("")}function bo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return xo(n)}function wo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function So(n,t,e){n.push("C",wo(Sl,t),",",wo(Sl,e),",",wo(kl,t),",",wo(kl,e),",",wo(El,t),",",wo(El,e))}function ko(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Eo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=ko(u,i);++t<e;)r[t]=(o+(o=ko(u=i,i=n[t+1])))/2;return r[t]=o,r}function Ao(n){for(var t,e,r,u,i=[],o=Eo(n),a=-1,c=n.length-1;++a<c;)t=ko(n[a],n[a+1]),ca(t)<Na?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Co(n){return n.length<3?co(n):n[0]+mo(n,Ao(n))}function No(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+_l,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=kt(e),_=kt(u),b=e===r?function(){return g}:kt(r),w=u===i?function(){return p}:kt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Cr,o=Ae,a=co,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=wl.get(n)||co).key,l=a.reverse||a,s=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Lo(n){return n.radius}function To(n){return[n.x,n.y]}function qo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+_l;return[e*Math.cos(r),e*Math.sin(r)]}}function Ro(){return 64}function Do(){return"circle"}function Po(n){var t=Math.sqrt(n/Ea);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Uo(n,t){return ga(n,Tl),n.id=t,n}function jo(n,t,e,r){var u=n.id;return F(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Fo(n){return null==n&&(n=""),function(){this.textContent=n}}function Ho(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var o=r.time;i=u[e]={tween:new a,time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Bo.timer(function(r){function a(r){return u.active>e?l():(u.active=e,i.event&&i.event.start.call(n,s,t),i.tween.forEach(function(e,r){(r=r.call(n,s,t))&&v.push(r)
}),Bo.timer(function(){return p.c=c(r||1)?Ae:c,1},0,o),void 0)}function c(r){if(u.active!==e)return l();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,s,t),l()):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var s=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ka,v=[];return p.t=h+o,r>=h?a(r-h):(p.c=a,void 0)},0,o)}}function Oo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Yo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Io(n){return n.toISOString()}function Zo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Bo.bisect(Ol,u);return i==Ol.length?[t.year,Zi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ol[i-1]<Ol[i]/u?i-1:i]:[Zl,Zi(n,e)[2]]}return r.invert=function(t){return Vo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Vo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Vo(+e+1),t).length}var i=r.domain(),o=Di(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(ji(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Vo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Vo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Di(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Vo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Zo(n.copy(),t,e)},Yi(r,n)}function Vo(n){return new Date(n)}function Xo(n){return JSON.parse(n.responseText)}function $o(n){var t=Go.createRange();return t.selectNode(Go.body),t.createContextualFragment(n.responseText)}var Bo={version:"3.4.13"};Date.now||(Date.now=function(){return+new Date});var Wo=[].slice,Jo=function(n){return Wo.call(n)},Go=document,Ko=Go.documentElement,Qo=window;try{Jo(Ko.childNodes)[0].nodeType}catch(na){Jo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Go.createElement("div").style.setProperty("opacity",0,"")}catch(ta){var ea=Qo.Element.prototype,ra=ea.setAttribute,ua=ea.setAttributeNS,ia=Qo.CSSStyleDeclaration.prototype,oa=ia.setProperty;ea.setAttribute=function(n,t){ra.call(this,n,t+"")},ea.setAttributeNS=function(n,t,e){ua.call(this,n,t,e+"")},ia.setProperty=function(n,t,e){oa.call(this,n,t+"",e)}}Bo.ascending=n,Bo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Bo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Bo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Bo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Bo.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},Bo.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},Bo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Bo.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?Bo.quantile(o.sort(n),.5):void 0};var aa=r(n);Bo.bisectLeft=aa.left,Bo.bisect=Bo.bisectRight=aa.right,Bo.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},Bo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Bo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Bo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Bo.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=Bo.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},Bo.transpose=function(n){return Bo.zip.apply(Bo,n)},Bo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Bo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Bo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Bo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ca=Math.abs;Bo.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(ca(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},Bo.map=function(n){var t=new a;if(n instanceof a)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t};var la="__proto__",sa="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),Bo.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Bo.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Bo.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),Bo.behavior={},Bo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var fa=["webkit","ms","moz","Moz","o","O"];Bo.dispatch=function(){for(var n=new x,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=M(n);return n},x.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Bo.event=null,Bo.requote=function(n){return n.replace(ha,"\\$&")};var ha=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ga={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},pa=function(n,t){return t.querySelector(n)},va=function(n,t){return t.querySelectorAll(n)},da=Ko.matches||Ko[m(Ko,"matchesSelector")],ma=function(n,t){return da.call(n,t)};"function"==typeof Sizzle&&(pa=function(n,t){return Sizzle(n,t)[0]||null},va=Sizzle,ma=Sizzle.matchesSelector),Bo.selection=function(){return _a};var ya=Bo.selection.prototype=[];ya.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ya.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Jo(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var xa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Bo.ns={prefix:xa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),xa.hasOwnProperty(e)?{space:xa[e],local:n}:n}},ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Bo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!N(n[u]).test(t))return!1;return!0}for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},ya.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(q(e,n[e],t));return this}if(2>r)return Qo.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(q(n,t,e))},ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ya.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ya.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ya.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=P(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=P(i);for(;f>r;++r)p[r]=P(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=H([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ya.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=U(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ya.sort=function(n){n=j.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ya.each=function(n){return F(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ya.call=function(n){var t=Jo(arguments);return n.apply(t[0]=this,t),this},ya.empty=function(){return!this.node()},ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ya.size=function(){var n=0;return F(this,function(){++n}),n};var Ma=[];Bo.selection.enter=H,Bo.selection.enter.prototype=Ma,Ma.append=ya.append,Ma.empty=ya.empty,Ma.node=ya.node,Ma.call=ya.call,Ma.size=ya.size,Ma.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Ma.insert=function(n,t){return arguments.length<2&&(t=O(this)),ya.insert.call(this,n,t)},ya.transition=function(){for(var n,t,e=Cl||++ql,r=[],u=Nl||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,l=a.length;++c<l;)(t=a[c])&&Ho(t,c,e,u),n.push(t)}return Uo(r,e)},ya.interrupt=function(){return this.each(Y)},Bo.select=function(n){var t=["string"==typeof n?pa(n,Go):n];return t.parentNode=Ko,S([t])},Bo.selectAll=function(n){var t=Jo("string"==typeof n?va(n,Go):n);return t.parentNode=Ko,S([t])};var _a=Bo.select(Ko);ya.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(I(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(I(n,t,e))};var ba=Bo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ba.forEach(function(n){"on"+n in Go&&ba.remove(n)});var wa="onselectstart"in Go?null:m(Ko.style,"userSelect"),Sa=0;Bo.mouse=function(n){return $(n,b())};var ka=/WebKit/.test(Qo.navigator.userAgent)?-1:0;Bo.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=b().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return $(n,r)},Bo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Bo.event.target===f),g({type:"dragend"}))}var l,s=this,f=Bo.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Bo.select(u()).on(i+d,a).on(o+d,c),y=X(),x=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-x[0],l.y-x[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,Bo.mouse,J,"mousemove","mouseup"),i=t(B,Bo.touch,W,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Bo.rebind(n,e,"on")},Bo.touches=function(n,t){return arguments.length<2&&(t=b().touches),t?Jo(t).map(function(t){var e=$(n,t);return e.identifier=t.identifier,e}):[]};var Ea=Math.PI,Aa=2*Ea,Ca=Ea/2,Na=1e-6,za=Na*Na,La=Ea/180,Ta=180/Ea,qa=Math.SQRT2,Ra=2,Da=4;Bo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=et(v),o=i/(Ra*h)*(e*rt(qa*t+v)-tt(v));return[r+o*l,u+o*s,i*e/et(qa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(qa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Da*f)/(2*i*Ra*h),p=(c*c-i*i-Da*f)/(2*c*Ra*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/qa;return e.duration=1e3*y,e},Bo.behavior.zoom=function(){function n(n){n.on(A,l).on(ja+".zoom",f).on("dblclick.zoom",h).on(z,s)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){x&&x.domain(y.range().map(function(n){return(n-S.x)/S.k}).map(y.invert)),b&&b.domain(M.range().map(function(n){return(n-S.y)/S.k}).map(M.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function l(){function n(){s=1,u(Bo.mouse(r),h),a(l)}function e(){f.on(C,null).on(N,null),g(s&&Bo.event.target===i),c(l)}var r=this,i=Bo.event.target,l=L.of(r,arguments),s=0,f=Bo.select(Qo).on(C,n).on(N,e),h=t(Bo.mouse(r)),g=X();Y.call(r),o(l)}function s(){function n(){var n=Bo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){var t=Bo.event.target;Bo.select(t).on(x,i).on(M,f),b.push(t);for(var e=Bo.event.changedTouches,o=0,c=e.length;c>o;++o)v[e[o].identifier]=null;var l=n(),s=Date.now();if(1===l.length){if(500>s-m){var h=l[0],g=v[h.identifier];r(2*S.k),u(h,g),_(),a(p)}m=s}else if(l.length>1){var h=l[0],y=l[1],w=h[0]-y[0],k=h[1]-y[1];d=w*w+k*k}}function i(){for(var n,t,e,i,o=Bo.touches(g),c=0,l=o.length;l>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=d&&Math.sqrt(s/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Bo.event.touches.length){for(var t=Bo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}Bo.selectAll(b).on(y,null),w.on(A,l).on(z,s),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,y=".zoom-"+Bo.event.changedTouches[0].identifier,x="touchmove"+y,M="touchend"+y,b=[],w=Bo.select(g),k=X();Y.call(g),e(),o(p),w.on(A,null).on(z,e)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(g=t(p=v||Bo.mouse(this)),Y.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),_(),r(Math.pow(2,.002*Pa())*S.k),u(p,g),a(n)}function h(){var n=L.of(this,arguments),e=Bo.mouse(this),i=t(e),l=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Bo.event.shiftKey?Math.ceil(l)-1:Math.floor(l)+1)),u(e,i),a(n),c(n)}var g,p,v,d,m,y,x,M,b,S={x:0,y:0,k:1},k=[960,500],E=Ua,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;Cl?Bo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Bo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ua:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(x=t,y=t.copy(),S={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(b=t,M=t.copy(),S={x:0,y:0,k:1},n):b},Bo.rebind(n,L,"on")};var Pa,Ua=[0,1/0],ja="onwheel"in Go?(Pa=function(){return-Bo.event.deltaY*(Bo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Go?(Pa=function(){return Bo.event.wheelDelta},"mousewheel"):(Pa=function(){return-Bo.event.detail},"MozMousePixelScroll");Bo.color=it,it.prototype.toString=function(){return this.rgb()+""},Bo.hsl=ot;var Fa=ot.prototype=new it;Fa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,this.l/n)},Fa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,n*this.l)},Fa.rgb=function(){return at(this.h,this.s,this.l)},Bo.hcl=ct;var Ha=ct.prototype=new it;Ha.brighter=function(n){return new ct(this.h,this.c,Math.min(100,this.l+Oa*(arguments.length?n:1)))},Ha.darker=function(n){return new ct(this.h,this.c,Math.max(0,this.l-Oa*(arguments.length?n:1)))},Ha.rgb=function(){return lt(this.h,this.c,this.l).rgb()},Bo.lab=st;var Oa=18,Ya=.95047,Ia=1,Za=1.08883,Va=st.prototype=new it;Va.brighter=function(n){return new st(Math.min(100,this.l+Oa*(arguments.length?n:1)),this.a,this.b)},Va.darker=function(n){return new st(Math.max(0,this.l-Oa*(arguments.length?n:1)),this.a,this.b)},Va.rgb=function(){return ft(this.l,this.a,this.b)},Bo.rgb=dt;var Xa=dt.prototype=new it;Xa.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new dt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new dt(u,u,u)},Xa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new dt(n*this.r,n*this.g,n*this.b)},Xa.hsl=function(){return _t(this.r,this.g,this.b)},Xa.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var $a=Bo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});$a.forEach(function(n,t){$a.set(n,mt(t))}),Bo.functor=kt,Bo.xhr=At(Et),Bo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Ct(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Bo.csv=Bo.dsv(",","text/csv"),Bo.tsv=Bo.dsv("	","text/tab-separated-values");var Ba,Wa,Ja,Ga,Ka,Qa=Qo[m(Qo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Bo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Wa?Wa.n=i:Ba=i,Wa=i,Ja||(Ga=clearTimeout(Ga),Ja=1,Qa(Lt))},Bo.timer.flush=function(){Tt(),qt()},Bo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var nc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Bo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Bo.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),nc[8+e/3]};var tc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ec=Bo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Bo.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),rc=Bo.time={},uc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ic.setUTCDate.apply(this._,arguments)},setDay:function(){ic.setUTCDay.apply(this._,arguments)},setFullYear:function(){ic.setUTCFullYear.apply(this._,arguments)},setHours:function(){ic.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ic.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ic.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ic.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ic.setUTCSeconds.apply(this._,arguments)},setTime:function(){ic.setTime.apply(this._,arguments)}};var ic=Date.prototype;rc.year=Ft(function(n){return n=rc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),rc.years=rc.year.range,rc.years.utc=rc.year.utc.range,rc.day=Ft(function(n){var t=new uc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),rc.days=rc.day.range,rc.days.utc=rc.day.utc.range,rc.dayOfYear=function(n){var t=rc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=rc[n]=Ft(function(n){return(n=rc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});rc[n+"s"]=e.range,rc[n+"s"].utc=e.utc.range,rc[n+"OfYear"]=function(n){var e=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(e+t)%7)/7)}}),rc.week=rc.sunday,rc.weeks=rc.sunday.range,rc.weeks.utc=rc.sunday.utc.range,rc.weekOfYear=rc.sundayOfYear;var oc={"-":"",_:" ",0:"0"},ac=/^\s*\d+/,cc=/^%/;Bo.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var lc=Bo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Bo.format=lc.numberFormat,Bo.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,sc),le(sc.s,this.s,this),this.s?this.t+=sc.t:this.s=sc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var sc=new ce;Bo.geo.stream=function(n,t){n&&fc.hasOwnProperty(n.type)?fc[n.type](n,t):se(n,t)};var fc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},hc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};Bo.geo.area=function(n){return gc=0,Bo.geo.stream(n,vc),gc};var gc,pc=new ce,vc={sphere:function(){gc+=4*Ea},point:y,lineStart:y,lineEnd:y,polygonStart:function(){pc.reset(),vc.lineStart=ge},polygonEnd:function(){var n=2*pc;gc+=0>n?4*Ea+n:n,vc.lineStart=vc.lineEnd=vc.point=y}};Bo.geo.bounds=function(){function n(n,t){x.push(M=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*La,e*La]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);xe(o),o=Me(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ta*l,d=ca(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ta;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ta;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=s,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ca(r)>180?r+(r>0?360:-360):r}else v=n,d=e;vc.point(n,e),t(n,e)}function i(){vc.lineStart()}function o(){u(v,d),vc.lineEnd(),ca(y)>Na&&(s=-(h=180)),M[0]=s,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,vc.polygonStart()},polygonEnd:function(){vc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>pc?(s=-(h=180),f=-(g=90)):y>Na?g=90:-Na>y&&(f=-90),M[0]=s,M[1]=h}};return function(n){g=h=-(s=f=1/0),x=[],Bo.geo.stream(n,_);
var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return x=M=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),Bo.geo.centroid=function(n){dc=mc=yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=0,Bo.geo.stream(n,Ac);var t=Sc,e=kc,r=Ec,u=t*t+e*e+r*r;return za>u&&(t=_c,e=bc,r=wc,Na>mc&&(t=yc,e=xc,r=Mc),u=t*t+e*e+r*r,za>u)?[0/0,0/0]:[Math.atan2(e,t)*Ta,nt(r/Math.sqrt(u))*Ta]};var dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc,Ec,Ac={sphere:y,point:be,lineStart:Se,lineEnd:ke,polygonStart:function(){Ac.lineStart=Ee},polygonEnd:function(){Ac.lineStart=Se}},Cc=Le(Ae,De,Ue,[-Ea,-Ea/2]),Nc=1e9;Bo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Oe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Bo.geo.conicEqualArea=function(){return Ie(Ze)}).raw=Ze,Bo.geo.albers=function(){return Bo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Bo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Bo.geo.albers(),o=Bo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Bo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Na,f+.12*l+Na],[s-.214*l-Na,f+.234*l-Na]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Na,f+.166*l+Na],[s-.115*l-Na,f+.234*l-Na]]).stream(c).point,n},n.scale(1070)};var zc,Lc,Tc,qc,Rc,Dc,Pc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Lc=0,Pc.lineStart=Ve},polygonEnd:function(){Pc.lineStart=Pc.lineEnd=Pc.point=y,zc+=ca(Lc/2)}},Uc={point:Xe,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},jc={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){jc.lineStart=Ke},polygonEnd:function(){jc.point=We,jc.lineStart=Je,jc.lineEnd=Ge}};Bo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Bo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return zc=0,Bo.geo.stream(n,u(Pc)),zc},n.centroid=function(n){return yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=0,Bo.geo.stream(n,u(jc)),Ec?[Sc/Ec,kc/Ec]:wc?[_c/wc,bc/wc]:Mc?[yc/Mc,xc/Mc]:[0/0,0/0]},n.bounds=function(n){return Rc=Dc=-(Tc=qc=1/0),Bo.geo.stream(n,u(Uc)),[[Tc,qc],[Rc,Dc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):Et,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Bo.geo.albersUsa()).context(null)},Bo.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Bo.geo.projection=ur,Bo.geo.projectionMutator=ir,(Bo.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,Bo.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t}return n=lr(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t},t},cr.invert=ar,Bo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*La,-n[1]*La,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ta,n[1]*=Ta}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*La,u*La),n):t},n.precision=function(r){return arguments.length?(e=gr(t*La,(u=+r)*La),n):u},n.angle(90)},Bo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,u=n[1]*La,i=t[1]*La,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},Bo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Bo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Bo.range(Math.ceil(l/m)*m,c,m).map(g)).concat(Bo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ca(n%d)>Na}).map(s)).concat(Bo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ca(n%m)>Na}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Na],[180,90-Na]]).minorExtent([[-180,-80-Na],[180,80+Na]])},Bo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return Bo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Bo.geo.interpolate=function(n,t){return xr(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},Bo.geo.length=function(n){return Fc=0,Bo.geo.stream(n,Hc),Fc};var Fc,Hc={sphere:y,point:y,lineStart:Mr,lineEnd:y,polygonStart:y,polygonEnd:y},Oc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Bo.geo.azimuthalEqualArea=function(){return ur(Oc)}).raw=Oc;var Yc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},Et);(Bo.geo.azimuthalEquidistant=function(){return ur(Yc)}).raw=Yc,(Bo.geo.conicConformal=function(){return Ie(br)}).raw=br,(Bo.geo.conicEquidistant=function(){return Ie(wr)}).raw=wr;var Ic=_r(function(n){return 1/n},Math.atan);(Bo.geo.gnomonic=function(){return ur(Ic)}).raw=Ic,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ca]},(Bo.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Zc=_r(function(){return 1},Math.asin);(Bo.geo.orthographic=function(){return ur(Zc)}).raw=Zc;var Vc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Bo.geo.stereographic=function(){return ur(Vc)}).raw=Vc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ca]},(Bo.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,Bo.geom={},Bo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=kt(e),i=kt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Nr(a),s=Nr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Bo.geom.polygon=function(n){return ga(n,Xc),n};var Xc=Bo.geom.polygon.prototype=[];Xc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Xc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Xc.clip=function(n){for(var t,e,r,u,i,o,a=qr(n),c=-1,l=this.length-qr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Lr(o,s,u)?(Lr(i,s,u)||n.push(Tr(i,o,s,u)),n.push(o)):Lr(i,s,u)&&n.push(Tr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var $c,Bc,Wc,Jc,Gc,Kc=[],Qc=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ir),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Bo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Na)*Na,y:Math.round(o(n,t)/Na)*Na,i:t}})}var r=Ar,u=Cr,i=r,o=u,a=nl;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Ir),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=kt(r=n),t):r},t.y=function(n){return arguments.length?(o=kt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?nl:n,t):a===nl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===nl?null:a&&a[1]},t)};var nl=[[-1e6,-1e6],[1e6,1e6]];Bo.geom.delaunay=function(n){return Bo.geom.voronoi().triangles(n)},Bo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ca(c-e)+ca(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,x=kt(a),M=kt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var _=+x(s=n[g],g),b=+M(s,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Cr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Bo.interpolateRgb=hu,Bo.interpolateObject=gu,Bo.interpolateNumber=pu,Bo.interpolateString=vu;var tl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,el=new RegExp(tl.source,"g");Bo.interpolate=du,Bo.interpolators=[function(n,t){var e=typeof t;return("string"===e?$a.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof it?hu:Array.isArray(t)?mu:"object"===e&&isNaN(t)?gu:pu)(n,t)}],Bo.interpolateArray=mu;var rl=function(){return Et},ul=Bo.map({linear:rl,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return zu}}),il=Bo.map({"in":Et,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Bo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=ul.get(e)||rl,r=il.get(r)||Et,yu(r(e.apply(null,Wo.call(arguments,1))))},Bo.interpolateHcl=Lu,Bo.interpolateHsl=Tu,Bo.interpolateLab=qu,Bo.interpolateRound=Ru,Bo.transform=function(n){var t=Go.createElementNS(Bo.ns.prefix.svg,"g");return(Bo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Du(e?e.matrix:ol)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var ol={a:1,b:0,c:0,d:1,e:0,f:0};Bo.interpolateTransform=Fu,Bo.layout={},Bo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Yu(n[e]));return t}},Bo.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=Bo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(Bo.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Aa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=l,b=l+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},Bo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=Bo.event.x,n.py=Bo.event.y,a.resume()}var e,r,u,i,o,a={},c=Bo.dispatch("start","tick","end"),l=[1,1],s=.9,f=al,h=cl,g=-30,p=ll,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=l[0]/2,M=l[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Wu(t=Bo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Bo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Bo.behavior.drag().origin(Et).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",Xu)),arguments.length?(this.on("mouseover.force",$u).on("mouseout.force",Bu).call(e),void 0):e},Bo.rebind(a,c,"on")};var al=20,cl=1,ll=1/0;Bo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Ku(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ti,e=Qu,r=ni;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Gu(t,function(n){n.children&&(n.value=0)}),Ku(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},Bo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Bo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Ju(e,r)},Bo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Bo.sum(o),l=Bo.range(i.length);null!=e&&l.sort(e===sl?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),s}var t=Number,e=sl,r=0,u=Aa;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var sl={};Bo.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=Bo.permute(l,f),s=Bo.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=Et,e=oi,r=ai,u=ii,i=ri,o=ui;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:fl.get(t)||oi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:hl.get(t)||ai,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var fl=Bo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ci),i=n.map(li),o=Bo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return Bo.range(n.length).reverse()},"default":oi}),hl=Bo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ai});Bo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[Bo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=gi,u=fi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=kt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return hi(n,t)}:kt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Bo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Ku(a,function(n){n.r=+s(n.value)}),Ku(a,yi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Ku(a,function(n){n.r+=f}),Ku(a,yi),Ku(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=Bo.layout.hierarchy().sort(pi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Ju(n,e)},Bo.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Ku(h,e),h.parent.m=-h.z,Gu(h,r),l)Gu(f,i);else{var g=f,p=f,v=f;Gu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Gu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ai(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=ki(o),u=Si(u),o&&u;)c=Si(c),i=ki(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ei(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!ki(i)&&(i.t=o,i.m+=f-s),u&&!Si(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Bo.layout.hierarchy().sort(null).value(null),a=wi,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Ju(n,o)},Bo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Ku(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=Ni(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Ku(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Bo.layout.hierarchy().sort(null).value(null),e=wi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Ju(n,t)},Bo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Bo.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=qi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?qi(t):Ri(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ri(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?qi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Ju(i,a)},Bo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Bo.random.normal.apply(Bo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Bo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Bo.scale={};var gl={floor:Et,ceil:Et};Bo.scale.linear=function(){return Oi([0,1],[0,1],du,!1)};var pl={s:1,g:1,p:1,r:1,e:1};Bo.scale.log=function(){return Wi(Bo.scale.linear().domain([0,1]),10,!0,[1,10])};var vl=Bo.format(".0e"),dl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Bo.scale.pow=function(){return Ji(Bo.scale.linear(),1,[0,1])},Bo.scale.sqrt=function(){return Bo.scale.pow().exponent(.5)},Bo.scale.ordinal=function(){return Ki([],{t:"range",a:[[]]})},Bo.scale.category10=function(){return Bo.scale.ordinal().range(ml)},Bo.scale.category20=function(){return Bo.scale.ordinal().range(yl)},Bo.scale.category20b=function(){return Bo.scale.ordinal().range(xl)},Bo.scale.category20c=function(){return Bo.scale.ordinal().range(Ml)};var ml=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(yt),yl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(yt),xl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(yt),Ml=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(yt);Bo.scale.quantile=function(){return Qi([],[])
},Bo.scale.quantize=function(){return no(0,1,[0,1])},Bo.scale.threshold=function(){return to([.5],[0,1])},Bo.scale.identity=function(){return eo([0,1])},Bo.svg={},Bo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+_l,a=u.apply(this,arguments)+_l,c=(o>a&&(c=o,o=a,a=c),a-o),l=Ea>c?"0":"1",s=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=bl?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=ro,e=uo,r=io,u=oo;return n.innerRadius=function(e){return arguments.length?(t=kt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=kt(t),n):e},n.startAngle=function(t){return arguments.length?(r=kt(t),n):r},n.endAngle=function(t){return arguments.length?(u=kt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+_l;return[Math.cos(i)*n,Math.sin(i)*n]},n};var _l=-Ca,bl=Aa-Na;Bo.svg.line=function(){return ao(Et)};var wl=Bo.map({linear:co,"linear-closed":lo,step:so,"step-before":fo,"step-after":ho,basis:xo,"basis-open":Mo,"basis-closed":_o,bundle:bo,cardinal:vo,"cardinal-open":go,"cardinal-closed":po,monotone:Co});wl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Sl=[0,2/3,1/3,0],kl=[0,1/3,2/3,0],El=[0,1/6,2/3,1/6];Bo.svg.line.radial=function(){var n=ao(No);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},fo.reverse=ho,ho.reverse=fo,Bo.svg.area=function(){return zo(Et)},Bo.svg.area.radial=function(){var n=zo(No);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Bo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+_l,s=l.call(n,u,r)+_l;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ea)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Lo,c=io,l=oo;return n.radius=function(t){return arguments.length?(a=kt(t),n):a},n.source=function(t){return arguments.length?(i=kt(t),n):i},n.target=function(t){return arguments.length?(o=kt(t),n):o},n.startAngle=function(t){return arguments.length?(c=kt(t),n):c},n.endAngle=function(t){return arguments.length?(l=kt(t),n):l},n},Bo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=To;return n.source=function(e){return arguments.length?(t=kt(e),n):t},n.target=function(t){return arguments.length?(e=kt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Bo.svg.diagonal.radial=function(){var n=Bo.svg.diagonal(),t=To,e=n.projection;return n.projection=function(n){return arguments.length?e(qo(t=n)):t},n},Bo.svg.symbol=function(){function n(n,r){return(Al.get(t.call(this,n,r))||Po)(e.call(this,n,r))}var t=Do,e=Ro;return n.type=function(e){return arguments.length?(t=kt(e),n):t},n.size=function(t){return arguments.length?(e=kt(t),n):e},n};var Al=Bo.map({circle:Po,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ll)),e=t*Ll;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/zl),e=t*zl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/zl),e=t*zl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Bo.svg.symbolTypes=Al.keys();var Cl,Nl,zl=Math.sqrt(3),Ll=Math.tan(30*La),Tl=[],ql=0;Tl.call=ya.call,Tl.empty=ya.empty,Tl.node=ya.node,Tl.size=ya.size,Bo.transition=function(n){return arguments.length?Cl?n.transition():n:_a.transition()},Bo.transition.prototype=Tl,Tl.select=function(n){var t,e,r,u=this.id,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,o))?("__data__"in r&&(e.__data__=r.__data__),Ho(e,l,u,r.__transition__[u]),t.push(e)):t.push(null)}return Uo(i,u)},Tl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=E(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Ho(u,g,o,i),t.push(u)}return Uo(a,o)},Tl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=U(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Uo(u,this.id)},Tl.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):F(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Tl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Fu:du,a=Bo.ns.qualify(n);return jo(this,"attr."+n,t,a.local?i:u)},Tl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Bo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Tl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Qo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=du(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return jo(this,"style."+n,t,u)},Tl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Qo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Tl.text=function(n){return jo(this,"text",n,Fo)},Tl.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Tl.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Bo.ease.apply(Bo,arguments)),F(this,function(e){e.__transition__[t].ease=n}))},Tl.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:F(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Tl.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:F(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Tl.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Nl,u=Cl;Cl=e,F(this,function(t,r,u){Nl=t.__transition__[e],n.call(t,t.__data__,r,u)}),Nl=r,Cl=u}else F(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Bo.dispatch("start","end"))).on(n,t)});return this},Tl.transition=function(){for(var n,t,e,r,u=this.id,i=++ql,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Ho(e,l,i,r)),n.push(e)}return Uo(o,i)},Bo.svg.axis=function(){function n(n){n.each(function(){var n,l=Bo.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):Et:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Na),d=Bo.transition(p.exit()).style("opacity",Na).remove(),m=Bo.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,x=Pi(f),M=l.selectAll(".domain").data([0]),_=(M.enter().append("path").attr("class","domain"),Bo.transition(M));v.append("line"),v.append("text");var b,w,S,k,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),N=v.select("text"),z=m.select("text"),L="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Oo,b="x",S="y",w="x2",k="y2",C.attr("dy",0>L?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+L*i+"V0H"+x[1]+"V"+L*i)):(n=Yo,b="y",S="x",w="y2",k="x2",C.attr("dy",".32em").style("text-anchor",0>L?"end":"start"),_.attr("d","M"+L*i+","+x[0]+"H0V"+x[1]+"H"+L*i)),E.attr(k,L*u),N.attr(S,L*y),A.attr(w,0).attr(k,L*u),z.attr(b,0).attr(S,L*y),f.rangeBand){var T=f,q=T.rangeBand()/2;s=f=function(n){return T(n)+q}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=Bo.scale.linear(),r=Rl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Dl?t+"":Rl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Rl="bottom",Dl={top:1,right:1,bottom:1,left:1};Bo.svg.brush=function(){function n(i){i.each(function(){var i=Bo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,Et);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Pl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=Bo.transition(i),h=Bo.transition(o);c&&(s=Pi(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=Pi(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Bo.event.keyCode&&(C||(y=null,z[0]-=s[1],z[1]-=f[1],C=2),_())}function p(){32==Bo.event.keyCode&&2==C&&(z[0]+=s[1],z[1]+=f[1],C=0,_())}function v(){var n=Bo.mouse(M),u=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(Bo.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Pi(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return C&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Bo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var y,x,M=this,b=Bo.select(Bo.event.target),w=a.of(M,arguments),S=Bo.select(M),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,C=b.classed("extent"),N=X(),z=Bo.mouse(M),L=Bo.select(Qo).on("keydown.brush",u).on("keyup.brush",p);if(Bo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);x=[s[1-T]-z[0],f[1-q]-z[1]],z[0]=s[T],z[1]=f[q]}else Bo.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Bo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Ul[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Cl?Bo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=mu(s,t.x),r=mu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Ul[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Ul[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},Bo.rebind(n,a,"on")};var Pl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ul=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],jl=rc.format=lc.timeFormat,Fl=jl.utc,Hl=Fl("%Y-%m-%dT%H:%M:%S.%LZ");jl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Io:Hl,Io.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Io.toString=Hl.toString,rc.second=Ft(function(n){return new uc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),rc.seconds=rc.second.range,rc.seconds.utc=rc.second.utc.range,rc.minute=Ft(function(n){return new uc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),rc.minutes=rc.minute.range,rc.minutes.utc=rc.minute.utc.range,rc.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new uc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),rc.hours=rc.hour.range,rc.hours.utc=rc.hour.utc.range,rc.month=Ft(function(n){return n=rc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),rc.months=rc.month.range,rc.months.utc=rc.month.utc.range;var Ol=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Yl=[[rc.second,1],[rc.second,5],[rc.second,15],[rc.second,30],[rc.minute,1],[rc.minute,5],[rc.minute,15],[rc.minute,30],[rc.hour,1],[rc.hour,3],[rc.hour,6],[rc.hour,12],[rc.day,1],[rc.day,2],[rc.week,1],[rc.month,1],[rc.month,3],[rc.year,1]],Il=jl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ae]]),Zl={range:function(n,t,e){return Bo.range(Math.ceil(n/e)*e,+t,e).map(Vo)},floor:Et,ceil:Et};Yl.year=rc.year,rc.scale=function(){return Zo(Bo.scale.linear(),Yl,Il)};var Vl=Yl.map(function(n){return[n[0].utc,n[1]]}),Xl=Fl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ae]]);Vl.year=rc.year.utc,rc.scale.utc=function(){return Zo(Bo.scale.linear(),Vl,Xl)},Bo.text=At(function(n){return n.responseText}),Bo.json=function(n,t){return Ct(n,"application/json",Xo,t)},Bo.html=function(n,t){return Ct(n,"text/html",$o,t)},Bo.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Bo):"object"==typeof module&&module.exports&&(module.exports=Bo),this.d3=Bo}();
(function ($) {

	

    //$.fn.stocCharts = function (data, xFieldName, yFieldName,styleConfg) {
		$.fn.stocCharts = function (styleConfg) {
        var WM = {
            attachWaterMark: function (id) {
         //       selectorElement.parent().css('background-image', 'url(http://www.stocinn.com/stoccharts/img/stoc-chart-logo.png)');
          //      selectorElement.parent().css('background-repeat', ' no-repeat');
           //     selectorElement.parent().css('background-position', 'bottom right');
            }
        }
        var selectorElement = $(this);
		var selectedElementId=$(selectorElement).attr("id");

        WM.attachWaterMark(selectorElement);
        var svgElement;
        var width;
        var height;
		var textStyleConfg;
		var margin = {
            "left": 10,
                "right": 35,
                'top': 5,
                "bottom": 35,
                "scale": 5
        };
		
        var yAxis;
        var xAxis;
        var yScale;
        var xScale;
        var parseDate = d3.time.format("%Y-%m-%d");
        var formatDate = d3.time.format("%b ");
        var minYScale;
        var maxYScale;
        var chartData;
        var marginSvg = 50;
		var margin={"left":10,"right":35,'top':10,"bottom":35,"scale":50,'areaLeft':60};
		var cfgArea;
		var xFieldName;
		var yFieldName;

        var agnitioChart = {
            drawYAxis: function () {
                var svg = d3.select(".yaxis")
                    .append('svg')
                    .attr('width', 40)
                    .attr('height', $(selectorElement).height());

                svg.append("g")
                    .attr("class", "y axis agnitio")
                    .attr("transform", "translate(" + (8) + "," + margin.top + ")")
                    .attr("stroke", 'black')
                    .attr("fill", 'none')
                    .call(yAxis)
            },
            drawMulitpleLineChartWithSquare: function (options) {
                var options = $.extend({
                    'lineArray': [],
                        'squareArray': []
                }, options);

                var lineArrayData = options.lineArray;
                var squareArryData = options.squareArray;

                var minValue, maxValue;
                for (var i = 0; i < lineArrayData.length; i++) {
                    var lineObj = lineArrayData[i];
                    var yField = lineObj.yFieldName;

                    var array = d3.extent(lineObj.data, function (d, i) {
                        return d[yField];
                    });
                    if (i == 0) {
                        minValue = array[0];
                        maxValue = array[1];
                    } else {
                        if (minValue > array[0]) {
                            minValue = array[0];
                        }
                        if (maxValue < array[1]) {
                            maxValue = array[1];
                        }
                    }
                }

                yScale.domain([minValue, (maxValue + 3)]);

                for (var i = 0; i < lineArrayData.length; i++) {
                    var lineObj = lineArrayData[i];
                    var keyValueArray = {};
                    for (key in lineObj) {
                        keyValueArray[key] = lineObj[key];
                    }
                    lineChart.drawLine(keyValueArray);
                }


                for (var i = 0; i < squareArryData.length; i++) {
                    var squareObj = squareArryData[i];

                    var squareKeyValueOptions = {};
                    for (key in squareObj) {
                        squareKeyValueOptions[key] = squareObj[key];
                    }
                    drawSquare.squareChart(squareKeyValueOptions);
                }
            }

        }
        
		var DataConverter={
		 getValueToPercentageArray:function(valueArray){
				var perArray=[];
				var sumEle=0;
				for(var d=0;d<valueArray.length;d++){			
					   sumEle+=valueArray[d];				
				}				
				for(var d=0;d<valueArray.length;d++){	
					   perArray.push((valueArray[d]/sumEle)*100);	
				}
				return perArray;
			 
		 }
			
		};
		
		var legendController={
     getLegendPositionArray:function(legendArray,width,height){
   
    var pixcelPerChar=6,widthLimit=width*0.7,textSeparator=10,nextLineSeparator=(height*0.05),endPos=0,legendPositionArray=[],legendWidth=10,nextLineCounter=0,yPos=0;
    for(var i=0;i<legendArray.length;i++){
     var legendObj=legendArray[i].toString();
     var obj={"x":0,"y":0,"endPos":0};
     
     var xPos=0;//(width*0.05);
     var initPos=(width*0.08);
     var legendSeparator=(width*0.05);
     if(initPos<30){
    initPos=30;
     }
     
     if(legendSeparator<20){
    legendSeparator=20;
     }
     
     if(i == 0){
      xPos=initPos;
     }
     else{
      xPos=legendPositionArray[i-1].endPos;
     }
     //yPos=0;
     var xEndPos=xPos+legendWidth+(legendObj.length*pixcelPerChar)+textSeparator+legendSeparator;
     if(xEndPos>widthLimit){
      //means shift the legend to new line
      nextLineCounter++;
      xPos=initPos;
      xEndPos=xPos+legendWidth+(legendObj.length*pixcelPerChar)+textSeparator+legendSeparator;
      yPos=nextLineCounter*nextLineSeparator;
     }
     
     obj.x=xPos;
     obj.y=yPos;
     obj.endPos=xEndPos;
     obj.textPos=xPos+legendWidth+textSeparator;
     
     legendPositionArray.push(obj);
    }
    return legendPositionArray;
     },

	showHorizontalLegend:function(scaleWidth,yPositionOfLegend,legendArray,legendSize)
	{			
			var largestStringLngth=0;
					for(var counter =0 ;counter<legendArray.length;counter++)
					{
						if(largestStringLngth<(legendArray[counter].toString()).length)
						{
							largestStringLngth = (legendArray[counter].toString()).length;
						}
					}		
			largestStringLngth = largestStringLngth * 6.5;
			var legendPositionArray = [];
			var obj={"x":0,"y":0,"textXPos":0};
			var seprator = 5;	
			var xPositionOfLegend = scaleWidth*.1;
			var temp,flag = scaleWidth*.1;
			var legendRow = Math.round((scaleWidth*.8)/(seprator+legendSize+largestStringLngth));
			
			for(var counter = 0 ; counter<legendArray.length ; counter++)
			{
				var obj={};
				if(counter%legendRow == 0)
				{
					xPositionOfLegend = scaleWidth*.1;
				}
				else
				{
					xPositionOfLegend = xPositionOfLegend+seprator+legendSize+largestStringLngth;
				}
				obj.x = xPositionOfLegend;
				
				if(counter%legendRow == 0  && counter!=0)
				{
					yPositionOfLegend = (yPositionOfLegend)+(2*legendSize);
				}
				obj.y = yPositionOfLegend;
				
				obj.textXPos = xPositionOfLegend+seprator + legendSize;
				
				legendPositionArray.push(obj);
					
			}	
			return legendPositionArray;
	} 
  };
  var axisLabelController={
	   //appendLabel:function(labelName,labelPos,svgElement,width,height){
	   appendLabel:function(labelName,labelXPos,labelYPos,rotateDeg,targetElem,labelColorArg,fontWeightArg){
		/*
		var leftPos=0;
		var topPos=0;
		var rotateDeg=-90;
		var pixcelPerChar=6;
		var totalPixels=0;
		
		labelName=labelName.toString();
		totalPixels=labelName.length*pixcelPerChar;
		
		var pixcelMid=totalPixels/2;
		
		if(labelPos == "left"){
		 leftPos=width*0.05;
		 rotateDeg=-90;
		 topPos=height/2+pixcelMid;
		}
		if(labelPos == "right"){
		 leftPos=width*0.97;
		 rotateDeg=90;
		 topPos=height/2+pixcelMid;
		}
		if(labelPos == "bottom"){
		 topPos=height*0.97;
		 rotateDeg=0;
		 leftPos=width/2+pixcelMid;
		}
		*/
		
		var labelColor="black",fontWeight=300;
		
		if(!isNaN(labelColorArg) || !(labelColorArg === undefined)){
			labelColor=labelColorArg;
		}
		
		if(!isNaN(fontWeightArg) || !(fontWeightArg === undefined)){
			fontWeight=fontWeightArg;
		}
		
		
		var textElem=targetElem
					.append("text");
		
		textElem.text(labelName)
		.attr("transform","translate("+labelXPos+","+labelYPos+") rotate("+rotateDeg+")")
		.style("font-family","italic","important")
		.style("fill",labelColor,"important")
		.style("font-weight",500,"important")
		.style("font-size",14,"important");
		
		
	   }
  }
		var tickController = {
            getTickArray: function (minVal, maxVal, noOfTicksRequired) {
                var tickArray = [];
                var factor = Math.round((maxVal - minVal) / (noOfTicksRequired - 1));
                var curval = minVal;
                tickArray.push(curval);
                noOfTicksRequired--;
                for (var i = 1; i < noOfTicksRequired; i++) {
                    curval += factor;
                    tickArray.push(curval);
                    if (i == noOfTicksRequired - 1) tickArray.push(maxVal);
                }
                return tickArray;
            },
            getXTickArray: function (minVal, maxVal, maxCharacterLength, svgWidth) {
                var tickArray = [];
                var maxTickWidth = 2 * 6.5 * maxCharacterLength;
                var totalTicks = Math.round(svgWidth / maxTickWidth);

                var curval = minVal;
                tickArray.push(curval);
                var factor = (maxVal - minVal) / totalTicks;
				
                while (curval < maxVal) {
					//alert(curval+"::"+maxVal+"::"+factor);
                    curval = Math.floor(curval + factor);
                    if (tickArray.indexOf(curval) == -1 && curval <= maxVal) 
					tickArray.push(curval);
					else
					curval++;
					
                }
				
                return tickArray;
            }
    };
	var textWrapper = {
					
					wrapText: function (text, width) 
					{
					
					text.each(function() {
					
					var text = d3.select(this);
					
					var words = text.text().split(/\s+/).reverse();
					
					var	word,
						line = [],
						lineNumber = 0,
						lineHeight = 1.1, // ems
						y = text.attr("y"),
						dy = parseFloat(text.attr("dy")),
						tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
					while (word = words.pop()) {
					  line.push(word);
					  tspan.text(line.join(" "));
					  if (tspan.node().getComputedTextLength() > width) {
						line.pop();
						tspan.text(line.join(" "));
						line = [word];
						tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
					  }
					}
				  });
					/*
					  text.each(function() 
					  {
						var text = d3.select(this),
							words = text.text().split(/\s+/).reverse(),
							word,
							line = [],
							lineNumber = 0,
							lineHeight = 1.1, // ems
							y = text.attr("y"),
							dy = parseFloat(text.attr("dy")),
							tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
						while (word = words.pop()) 
						{
						  line.push(word);
						  tspan.text(line.join(" "));
						  console.log((tspan.node().getComputedTextLength() > width));
						  if (tspan.node().getComputedTextLength() > width) 
						  {
							line.pop();
							tspan.text(line.join(" "));
							line = [word];
							tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
						  }
						}
						
					  });
					  */
					}

				/*	function type(d) {
					  d.value = +d.value;
					  return d;
					}  */
			};
        var toolTipManager = {
			
			
			appendToolTip:function(){
				var tootTipTemplate ='<div id="tooltipChart" style="z-index:999999;float:none;display:none; margin:0px; padding:0px; position:absolute; width:150px;">'+
						'<div id="textContainer" style="width:150px; background-color:#eeeeee; border:solid 1px #666666; box-shadow:5px 5px 5px #5d5d5d; border-radius:7px; font-family:calibri; float:left; font-size:11px; padding:10px;">'+
						'	<div class="xVal" style="text-align:center; font-size:13px; background-color:#6699cc; border-top-left-radius:7px; margin-top:-10px; margin-left:-10px;  margin-right:-10px;border-top-right-radius:7px; padding:5px 10px;">14 jan</div>'+
							'<div id="y-label" class="y-label label1" style="width:60%;display:none; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
							'<div  class="yVal label1" style="width:40%; float:right;display:none; text-align:right;  padding:3px 0;">$ 400</div>'+
					'		<div class="y-label label2" style="width:60%; float:left;display:none; text-align:left; padding:3px 0;">Auto Loans</div>'+
					'		<div class="yVal label2" style="width:40%;display:none; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
					'		<div class="y-label label3" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
					'		<div class="yVal label3" style="width:40%;display:none; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
					'		<div class="y-label label4" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
					'		<div class="yVal label4" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
					'		<div class="y-label label5" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
					'		<div class="yVal label5" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
					'		<div class="y-label label6" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
					'		<div class="yVal label6" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
					'	</div>'+
					'	<div id="handIcon" style="position: relative; bottom:1px; height:40px; width:36px; '+
					'	 background:url(http://www.stocinn.com/stoccharts/img/toolTips-arrow.png) no-repeat; clear:both; float:right; margin-bottom:-2px; right:-2px;">'+
					'	 </div>'+
					'</div>';
					
				$('body').append(tootTipTemplate);
				
			},
            appendToolTipOld: function () {
                var tootTipTemplate = "<div id='tooltipChart' style='display:none;position:absolute;background:rgba(0, 0, 0, 0.8); width:120px;  min-height: 40px; z-index:99999999 !important;box-shadow: inset 0 0 40px #222221;float:left; border-radius:5px; font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;  color:white; text-shadow: 1px 0 1px #000;    '>" +
                    "<div class='arrow' style='position: absolute;margin-left: -8px;font-size: 24px;color:#272726; text-shadow:none; top: 7px;'><i class='fa fa-caret-left'></i></div>" +

                    "<div id='textContainer'>" +
                    "<div   style='clear:both;width:100%;padding:2px 5px '><div style='width:50%;float:left;' class='xVal'></div></div>" +
                    "<div  class='yContainer1 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label'  style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal' style='width:45%;margin-left:5%;float:left;'></div></div>" +

                    "</div>" +
                    "</div>" +
                    "</div>";
                $('body').append(tootTipTemplate);

            },
            showToolTip: function (e, yValArg, xValArg, hideXVal, yHeadingMap,pageY) {
				
				//$('#tooltipChart').show();
				
				var x = e.pageX;
				
                var y; 
				
				if(isNaN(pageY)){
					y=e.pageY;
				}else{
					console.log("given pageY");
					y=pageY;
				}


                var yVal;
                yVal = yValArg;


                var timeVal;

                timeVal = xValArg;
                $('#tooltipChart').find('.xVal').html("");
				/*
                if (hideXVal) {
                    $('#tooltipChart').find('.xVal').html("");
                } else {
                   
                }
					*/
				 $('#tooltipChart').find('.xVal').html(timeVal);
				 
				//blank yLabel	
				$('#tooltipChart').find('.y-label').html("");
				
				//blank yVal
				$('#tooltipChart').find('.yVal').html("");
				
				//hide all  yLabel and yVal
				$('#tooltipChart').find('.yVal').hide();
				$('#tooltipChart').find('.y-label').hide();
				
				var toolTipRef=$('#tooltipChart');
				//get YHeadingNames width Values and iterate to update yLabel and YVal 
				for(var i=0;i<yHeadingMap.length;i++){
					var headingObj=yHeadingMap[i];
					var counter=i+1;
					var yLabelClass=".y-label.label"+counter;
					var yValClass=".yVal.label"+counter;
					$(toolTipRef).find(yLabelClass).html(headingObj.headingName);
					$(toolTipRef).find(yValClass).html(headingObj.headingVal);
					
					$(toolTipRef).find(yValClass).show();
					$(toolTipRef).find(yLabelClass).show();
				}
				
				/*
                $('#tooltipChart').find('.yVal').html(yVal);

                $('#tooltipChart').find('#y-label').html("");
                if (yHeadingName === undefined) {

                } else {
                    $('#tooltipChart').find('#y-label').html(yHeadingName);
                }
				*/
				
                var marginLeft = x;
                if ($(".ps-scrollbar-x-rail")) {
                    try {
                        marginLeft += parseInt($(".ps-scrollbar-x-rail").css('left').replace("px", ''));
                    } catch (err) {

                    }
                }

                var tooTipElem = $('body').find("#tooltipChart");
                var toolTipTextContainer = $(tooTipElem).find("#textContainer");
				
				
				/*
                if (($(window).width() - marginLeft) < $('body').find("#tooltipChart").width()) {
                    marginLeft = marginLeft - $(tooTipElem).width();

                    $(tooTipElem).css('-ms-transform', 'rotate(-180deg)');
                    $(tooTipElem).css('-webkit-transform', 'rotate(-180deg)');
                    $(tooTipElem).css('transform', 'rotate(-180deg)');


                    $(toolTipTextContainer).css('-ms-transform', ' translateY(10px) rotate(180deg)');
                    $(toolTipTextContainer).css('-webkit-transform', 'translateY(10px)  rotate(180deg)');
                    $(toolTipTextContainer).css('transform', 'translateY(10px) rotate(180deg)');

                } else {

                    $(tooTipElem).css('-ms-transform', '');
                    $(tooTipElem).css('-webkit-transform', '');
                    $(tooTipElem).css('transform', '');


                    $(toolTipTextContainer).css('-ms-transform', '');
                    $(toolTipTextContainer).css('-webkit-transform', '');
                    $(toolTipTextContainer).css('transform', '');

                }
				*/
				
				//alert(marginLeft +" : "+ $("body").find("#tooltipChart").width());
				
                var marginTop = y - ($("body").find("#tooltipChart").height()*0.98);
			//	marginLeft=marginLeft-($("body").find("#tooltipChart").width()*0.95);
				
			/*	if((marginLeft-$(tooTipElem).width())<170){
					marginLeft=marginLeft*0.8+$(tooTipElem).width();
					$(tooTipElem).find("#handIcon").css("right","94px");
				}else{
					$(tooTipElem).find("#handIcon").css("right","-14px");
				}*/
				
				marginLeft=marginLeft-($("body").find("#tooltipChart").width()*0.98);
				
                $('body').find("#tooltipChart").css("left", marginLeft);
                $('body').find("#tooltipChart").css("top", marginTop);
				//console.log("sss");
                $('body').find("#tooltipChart").show();

            },
            hideTooTip: function () {
                $('#tooltipChart').find('.yVal').html("");
                d3.select("#tooltipChart").style('display', 'none');
            },
            showToolTipForBarWithMultipleLine: function (e, yHeadingAndValueJson, xValArg, hideXVal, cx, isDraggerRequired) {

                var x = e.pageX;
                var y = e.pageY - $(selectorElement).find('svg').offset().top - 10;


                var timeVal;

                timeVal = xValArg;

                if (hideXVal) {
                    $('#draggLineToolTip').find('.xVal').html("");
                } else {
                    $('#draggLineToolTip').find('.xVal').html(timeVal);
                }
                if (isDraggerRequired) $('#draggLineToolTip').find('#tooltip-dragger').show();
                else $('#draggLineToolTip').find('#tooltip-dragger').hide();
                d3.select("#draggLineToolTip").selectAll(".yDiv").style("display", "none");

                var j = 1;
                for (key in yHeadingAndValueJson) {
                    var element = $(".yContainer" + (j)).show();
                    d3.select("#y-label" + (j)).html(key + " ");
                    d3.select("#yVal" + (j)).html(" " + yHeadingAndValueJson[key]);
                    j++;
                }





                var marginLeft = x + margin.left;
                if ($(".ps-scrollbar-x-rail")) {
                    try {
                        marginLeft += parseInt($(".ps-scrollbar-x-rail").css('left').replace("px", ''));
                    } catch (err) {

                    }
                }

                var tooTipElem = $('body').find("#draggLineToolTip");
                var toolTipTextContainer = $(tooTipElem).find("#textContainer");

                if (($(window).width() - marginLeft) < $('body').find("#draggLineToolTip").width()) {
                    marginLeft = marginLeft - $(tooTipElem).width();

                    $(tooTipElem).css('-ms-transform', 'rotate(-180deg) translate(15px)');
                    $(tooTipElem).css('-webkit-transform', 'rotate(-180deg) translate(15px)');
                    $(tooTipElem).css('transform', 'rotate(-180deg) translate(15px)');


                    $(toolTipTextContainer).css('-ms-transform', ' translateY(10px) rotate(180deg)');
                    $(toolTipTextContainer).css('-webkit-transform', 'translateY(10px)  rotate(180deg)');
                    $(toolTipTextContainer).css('transform', 'translateY(10px) rotate(180deg)');

                } else {

                    $(tooTipElem).css('-ms-transform', '');
                    $(tooTipElem).css('-webkit-transform', '');
                    $(tooTipElem).css('transform', '');


                    $(toolTipTextContainer).css('-ms-transform', '');
                    $(toolTipTextContainer).css('-webkit-transform', '');
                    $(toolTipTextContainer).css('transform', '');

                }

                var marginTop = e.pageY - ($(selectorElement).find("#draggLineToolTip").height() / 2);
                if (cx != null) {
                    //$('body').find("#draggLineToolTip").css("left", parseFloat(cx) + 100);
					$('body').find("#draggLineToolTip").css("left", marginLeft);
                } else {
                    $('body').find("#draggLineToolTip").css("left", marginLeft - 5);
                }

                $('body').find("#draggLineToolTip").css("top", marginTop - 20);
                $('body').find("#draggLineToolTip").show();

            },
            hideMulitpleLineBarToolTip: function () {
                d3.select('#draggLineToolTip').style('display', 'none');
            },
            appendToolTipForBarWithMultipleLine: function () {
                var tootTipTemplate = "<div id='draggLineToolTip' style='display:none;position:absolute;background:rgba(0, 0, 0, 0.8); width:120px;  min-height: 40px; z-index:99999999 !important;box-shadow: inset 0 0 40px #222221;float:left; border-radius:5px; font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;  color:white; text-shadow: 1px 0 1px #000;    '>" +
                    "<div  id='tooltip-dragger' style='position: absolute;margin-left: -8px; border-left:solid 1px #000; min-height:250px; top:-100px;'></div>" +

                    "<div class='arrow' style='position: absolute;margin-left: -8px;font-size: 24px;color:#272726; text-shadow:none; top: 7px;'><i class='fa fa-caret-left'></i></div>" +


                    "<div id='textContainer'>" +
                    "<div   style='clear:both;width:100%;padding:2px 5px '><div style='width:50%;float:left;' class='xVal'></div></div>" +
                    "<div  class='yContainer1 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label1'  style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal1' style='width:42%;float:left;margin-left:8%;'></div></div>" +
                    "<div  class='yContainer2 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label2' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal2' style='width:42%;float:left;margin-left:8%;'></div></div>" +
                    "<div  class='yContainer3 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label3' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal3' style='width:42%;float:left;margin-left:8%;'></div></div>" +
                    "<div  class='yContainer4 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label4' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal4' style='width:42%;float:left;margin-left:8%;'></div></div>" +
                    "<div  class='yContainer5 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label5' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal5' style='width:42%;float:left;margin-left:8%;'></div></div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('body').append(tootTipTemplate);
            }
        }


        var initSvg = function () {
            var marginSvg = 50;
            width = $(selectorElement).width() - marginSvg;
            height = $(selectorElement).height() - marginSvg;

            var selectorId = $(selectorElement).attr("id");

            var svgClassName = selectorId + "_svg";

            var tootTipTemplate = "<div id='tooltipChart' style='display:none;position:absolute;background:white;width:150px;z-index:99999999 !important;box-shadow:0 0 10px #c6c6c6;float:left;'>" +
                "<div class='arrow' style='position: absolute;margin-left: -8px;font-size: 24px;color: white;top: 24px;'><i class='fa fa-caret-left'></i></div>" +
                "<div class='toolTipHeading' style='padding:5px;background:#c6c6c6;border-bottom:solid 1px eae6e3;'>Chart tool Tip</div>" +
                "<div  style='clear:both;width:100%;padding:5px'><label style='width:50%;float:left;'>Time</label><div style='width:50%;float:left;' class='xVal'></div></div>" +
                "<div  style='clear:both;width:100%;padding:5px'><label style='width:50%;float:left;'>Value</label><div class='yVal' style='width:50%;float:left;'></div></div>" +
                "</div>";
            //$(selectorElement).append(tootTipTemplate);


            svgElement = d3.select("#" + selectorId)
                .append("svg")
                .attr("width", $(selectorElement).width())
                .attr("height", $(selectorElement).height()).attr('class',selectorId+"_svg");

            xScale = d3.time.scale().range([0, (width - margin.scale)]);
            yScale = d3.scale.linear().range([(height - margin.scale), 0]);

            minYScale = d3.min(data, function (d) {
                return d[yFieldName];
            });
            maxYScale = d3.max(data, function (d) {
                return d[yFieldName];
            });


			maxYScale=maxYScale*1.5;
            xScale.domain(d3.extent(data, function (d, i) {
                return parseDate.parse(d[xFieldName]);
            }));

            yScale.domain([minYScale,maxYScale]);

            xAxis = d3.svg.axis().scale(xScale)
                .orient("bottom").ticks(4).tickSize(5, 0).tickFormat(formatDate);

            yAxis = d3.svg.axis().scale(yScale)
                .orient("right").ticks(4).tickSize(5, 0);

            svgElement = svgElement.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        };

        var lineChart = {
            drawLine: function (options) {
                var options = $.extend({
                    'color': 'red',
                        'axisColor': 'blue',
                        'data': [],
                        'xFieldName': '',
                        'yFieldName': '',
                        'showAllTicks': false,
                        'formatDate': '%b %d'
                }, options);

			
				
                var data;
                if (options.data.length == 0) {
                    data = chartData;
                } else {
                    data = options.data;
                }


                var xFieldNameLine;
                var yFieldNameLine;
                if (options.xFieldName == "") {
                    xFieldNameLine = xFieldName;
                } else {
                    xFieldNameLine = options.xFieldName;
                }

                if (options.yFieldName == "") {
                    yFieldNameLine = yFieldName;
                } else {
                    yFieldNameLine = options.yFieldName;
                }

                if ($(selectorElement).find(".axis").length == 0) {
                    var formatXAxis = d3.time.format(options.formatDate);

                    if (options.showAllTicks) {
                        xAxis.ticks(d3.time.days, 1).tickFormat(formatXAxis).tickSize(0).tickPadding(8);
                    }
                    xAxis.tickFormat(formatXAxis).tickSize(0).tickPadding(8);


                    svgElement.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (height - margin.scale + 10) + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(xAxis).selectAll(".tick")
                        .each(function (data) {
                        var date = new Date(data);
                        date = convertDateIntoYYMMDD(date);
                        svgElement.append("line")
                            .attr('class', 'horizontalGridLine')
                            .attr('x1', function () {

                            return xScale(parseDate.parse(date));
                        })
                            .attr('x2', function () {
                            return xScale(parseDate.parse(date));
                        })
                            .attr('y1', 0)
                            .attr('y2', (height - margin.scale + 10)).attr('stroke', '#F2F3F3');
                    });

                    svgElement.append("g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (width - margin.scale + 10) + "," + 3 + ")")

                        .attr("fill", options.axisColor)
                        .call(yAxis);
                }

                var line = d3.svg.line()
                    .interpolate("linear")
                    .x(function (d, i) {
                    return (xScale(parseDate.parse(d[xFieldNameLine])) + 5);
                })
                    .y(function (d, i) {
                    return (yScale(d[yFieldNameLine]) - 10);
                })

                var className = $(selectorElement).attr("id") + "_line" + yFieldName;
                var path = svgElement.append("path")
                    .attr("d", line(data))
                    .attr("stroke", options.color)
                    .attr("class", className)
                    .attr("stroke-width", "2")
                    .attr("fill", "none")
                    .on("mouseover", function () {
                    attachToolTip.showToolTip(d3.event);
                })
                    .on("mouseleave", function () {
                    attachToolTip.hideToolTip(d3.event);
                });



            },
            drawBarWithMultipleLineAndCircle: function (options) {
                var options = $.extend({
                    'data': [],
                        'xAxis': [],
                        'marginLeft': 40,
                        'marginRight': 40,
                        'marginTop': 60
                }, options);

				var xAxisTick = options.xAxis.ticks;
                toolTipManager.appendToolTipForBarWithMultipleLine();
                var isRedrawChart = false;


                var rawData = options.data;


                var yFieldList = [];

                yFieldList = d3.keys(options.data);




                var color = d3.scale.ordinal();

                var colorList = [];
                var modifiedData = [];
                for (key in rawData) {
                    var obj = rawData[key];
                    colorList.push(obj.color);
                    modifiedData.push(obj.data);
                }

                color.domain(yFieldList);
                color.range(colorList);
				var counter=0;
                var multipleLineChartData = color.domain().map(function (keyName) {
                    return {
                        "name": keyName,
                            "values": rawData[keyName].data.map(function (d, i) {

                            return {
                                "x": i,
                                    "y": d,
                                    "timeIndex": options.xAxis.ticks[i],
                                    'name': keyName,
                                    'indicationLabel': rawData[keyName].indicationLabel
									
                            };
                        }),
                            'chartType': rawData[keyName].chartType,
                            'lineType': rawData[keyName].lineType
                    }
					counter++;
                });
				
				var legendMap={};
				for(var i=0;i<multipleLineChartData.length;i++){
					legendMap[multipleLineChartData[i].name]="legend-"+i;
					//alert(multipleLineChartData[i].name);
				}
				
				console.log("hi");
                var arrayListForHover = [];
                for (var j = 0; j < multipleLineChartData[0].values.length; j++) {
                    var obj = {};
                    for (var k = 0; k < yFieldList.length; k++) {
                        obj[yFieldList[k]] = multipleLineChartData[k].values[j].y + ":" + multipleLineChartData[k].values[j].indicationLabel;
                    }
                    obj["x"] = j;
                    obj["timeIndex"] = options.xAxis.ticks[j];

                    arrayListForHover.push(obj);
                }

                maxYScale = maxYScale * 1.4;

                height = height - options.marginTop * 1.5;

				var toggle = false;
                var left = 0;
                var right = 0;
                var headingGap = 40;
                var labelGap = 40;
                var yScaleJson = {};

                for (var i = 0; i < yFieldList.length; i++) {

                    toggle = !toggle;
                    if (toggle) {
                        right = right + options.marginRight + headingGap;
                    } else {
                        left = left + options.marginLeft + headingGap;
                    }

                    minYScale = d3.min(rawData[yFieldList[i]].data, function (d) {
                        return d;
                    });

                    maxYScale = d3.max(rawData[yFieldList[i]].data, function (d) {
                        return d;
                    });

                    maxYScale = maxYScale * 1.5;
                    yScale = d3.scale.linear()
                        .domain([minYScale, maxYScale])
                        .range([height, 0]);

                    yScaleJson[yFieldList[i]] = yScale;

                    var ticksArray = tickController.getTickArray(minYScale, maxYScale, 5);


                    var yAxisElem = svgElement.append('g')
                        .attr('class', 'y axis')

                        .attr("transform", function () {

                        if (toggle) {
                            yAxis = d3.svg.axis().scale(yScale).orient("right")
                                .tickValues(ticksArray).tickSize(5, 0);

                            return "translate(" + (width - right) + "," + options.marginTop + ")"
                        } else {
                            yAxis = d3.svg.axis().scale(yScale).orient("left")
                                .tickValues(ticksArray).tickSize(5, 0);
                            return "translate(" + (left) + "," + options.marginTop + ")"
                        }
                    })
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(yAxis);

                    yAxisElem.selectAll('text')
                        .text(function (textValue) {
							return textValue + " " + rawData[yFieldList[i]].unit;
						})
                        .style('fill', rawData[yFieldList[i]].color);

                    if (toggle) {
                        var textYPos = height / 2 + rawData[yFieldList[i]].indicationLabel.length * 2;
                        yAxisElem.append("text")
                            .text(function () {
								return rawData[yFieldList[i]].indicationLabel;
							})
                            .attr('transform', "translate(" + (headingGap + labelGap) + "," + (textYPos) + ") rotate(-90)")
                            .style('fill', rawData[yFieldList[i]].color,"important");
							
                    } else {
                        var textYPos = height / 2 + rawData[yFieldList[i]].indicationLabel.length * 2;
                        yAxisElem.append("text")
                            .text(function () {
                            return rawData[yFieldList[i]].indicationLabel;
                        })
                            .attr('transform', "translate(" + (-headingGap - labelGap/2) + "," + (textYPos) + ") rotate(-90)")
                            .style('fill', rawData[yFieldList[i]].color,"important");
                    }


                    if (i == 0) {

                        yAxisElem.selectAll(".tick")
                            .each(function (tickValue) {
                            svgElement.append("line")
                                .attr('class', 'horizontalGridLine')
                                .attr('x1', left)
                                .attr('x2', (width - right))
                                .attr('y1', function () {

                                return yScale(tickValue);
                            })
                                .attr('y2', function () {
                                return yScale(tickValue);
                            }).attr('stroke', '#F2F3F3');
                        })
                            .style("display", function () {
                            if (options.hideAxis) {
                                return "none";
                            } else {
                                return "block";
                            }
                        });
                    }

                }


                width = width - left;


                var svgElement1 = svgElement.append("g")
                    .attr("transform", "translate(" + (left - 40) + "," + options.marginTop + ")")
                    .attr("class", 'grouping');


                xScale = d3.scale.linear()
                    .range([left, width - right]);

                var minXScale = d3.min(multipleLineChartData, function (d) {
                    return d3.min(d.values, function (data) {

                        return data["x"];
                    });
                });
                var maxXScale = d3.max(multipleLineChartData, function (d) {
                    return d3.max(d.values, function (data) {

                        return data["x"];
                    });
                });

                xScale.domain([minXScale, maxXScale]);
				
				var largestStringLngth=0;
					for(var counter =0 ;counter<xAxisTick.length;counter++)
					{
						if(largestStringLngth<(xAxisTick[counter].toString()).length)
						{
							largestStringLngth = (xAxisTick[counter].toString()).length;
						}
					}
					
                xAxis = d3.svg.axis()
							.scale(xScale)
							.orient("bottom")
							.tickValues(tickController.getXTickArray(0,(xAxisTick.length-1),largestStringLngth, (width - right - left)));
							
			//	alert(xAxisTick);			
			//	alert(tickController.getXTickArray(0,(xAxisTick.length),largestStringLngth, (width - right)));
				
                var xAxisElem = svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + (left-40) + "," + (height + options.marginTop) + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none')
                    .call(xAxis);
					
				xAxisElem.selectAll('text')
						 .text(function(d){return xAxisTick[d];})
						 .attr('fill','black');	
	
				/*	
                var ticks = xAxisElem.selectAll(".tick");
                for (var j = 0; j < ticks[0].length; j++) {
                    var c = ticks[0][j],
                        n = ticks[0][j + 1];
                    if (!c || !n || !c.getBoundingClientRect || !n.getBoundingClientRect) continue;
                    while (c.getBoundingClientRect().right > n.getBoundingClientRect().left) {
                        d3.select(n).remove();
                        j++;
                        n = ticks[0][j + 1];
                        if (!n) break;
                    }
                }

                xAxisElem.selectAll("text")
                    .text(function (d) {
                    var textValue = d;

                    var xObj;
                    for (var i = 0; i < multipleLineChartData[0].values.length; i++) {
                        var currentObj = multipleLineChartData[0].values[i];

                        if (parseInt(textValue) == currentObj.x) {
                            xObj = currentObj;
                        }
                    }

                    return " " + xObj["timeIndex"];

                });
				*/

                var barChartData = multipleLineChartData.filter(function (obj) {
                    return (obj.chartType == "bar");
                });
				
				var barWidth = (width / barChartData[0].values.length);
                barWidth = barWidth / 2;
                var bars = svgElement1.selectAll(".bar")
                    .data(barChartData[0].values)
                    .enter()
                    .append("rect")
                    .attr("class", function (d) {
                    return "multichart bar " + legendMap[d.name] + " " + "pos_" + Math.floor(xScale(d.x));
                })
                    .attr("width", barWidth)
                    .attr("height", function (d) {
                    return 0;
                })
                    .attr("x", function (d) {

                    return 0;
                })
                    .attr("y", function (d) {
                    var scale = yScaleJson[d.name];
                    return scale(d.y);
                });


                bars.transition().duration(1000).attr('x', function (d) {
                    return (xScale(d.x) - (barWidth / 2));
                })
                    .attr('height', function (d) {
                    var scale = yScaleJson[d.name];
                    return (height - scale(d.y));
                })
                    .attr("fill", function (d) {
			
				    return color(d.name);
                });



                var lineGroup = svgElement1.selectAll("g.multipleLineGrouping")
                    .data(multipleLineChartData.filter(function (objData) {
                    return (objData.chartType != 'bar');
                }))
                    .enter()
                    .append('g')
                    .attr('class', 'multipleLineGrouping');


                var line;

                function linePath(lineType, lineData) {

                    line = d3.svg.line()
                        .interpolate(lineType)
                        .x(function (d, i) {
                        return xScale(d.x);
                    })
                        .y(function (d, i) {
                        var scale = yScaleJson[d.name];
                        return (scale(d.y));
                    });

                    return line(lineData);
                }



                var path = lineGroup.append("path")
                    .attr("d", function (d) {
                    return linePath(d.lineType, d.values);
                })
                    .attr("class", function (d) {

                    return "multipleLine " + legendMap[d.name] + " " + "pos_" + Math.floor(xScale(d.x));
                })
                    .attr("stroke", function (d) {
                    return color(d.name);
                })
                    .attr("fill", "none");


                    var totalLength = path.node().getTotalLength();

                    path.attr("stroke-dasharray", function (d) {


                    var dashLen = 3;
                    var ddLen = dashLen * 2;
                    var darray = dashLen;
                    while (ddLen < totalLength) {
                        darray += "," + dashLen + "," + dashLen;
                        ddLen += dashLen * 2;
                    }

                    if (rawData[d.name].isDottedLine) {
                        dottedLineParam = darray + "," + totalLength;
                    } else {
                        dottedLineParam = totalLength + "," + totalLength;
                    }
                    return dottedLineParam;
                })
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(2000)
                    .ease("linear")
                    .attr("stroke-dashoffset", 0)



                lineGroup.selectAll("circle.multipleLineCircle")
                    .data(function (d) {
                    return d.values;
                })
                    .enter()
                    .append("circle")
                    .attr("class", function (d) {
                    return "multichart  multipleLineCircle " + legendMap[d.name] + " " + "pos_" + Math.floor(xScale(d.x));
                })
                    .attr('cx', function (d) {
                    return xScale(d.x);
                })
                    .attr("cy", function (d) {
                    var scale = yScaleJson[d.name];
                    return scale(d.y);
                })
                    .attr("r", "3")
                    .attr("fill", function (d) {
                    return color(d.name);
                });

				
				var widthEachLegend=(width-right)/color.domain().slice().length;
				widthEachLegend=left+widthEachLegend;
	
				var legend = svgElement.append("g")
                    .attr("class", 'legend')
					.attr("transform", "translate(" + (left - 40) + "," + options.marginTop + ")");
                    
				var legendSize =12;
				var yPositionOfLegend = 0;
				var legendPositionArray = legendController.showHorizontalLegend(width-right,yPositionOfLegend,color.domain().slice().reverse(),legendSize);
					
				var legendRef = legend.selectAll('.rect')
										    .data(color.domain().slice().reverse())
										    .enter()
											.append('rect')
											.attr('width',legendSize)
											.attr('height',legendSize)
											.attr('x',function(d,i){ return legendPositionArray[i].x;})
											.attr('y',function(d,i){return legendPositionArray[i].y;})
											.attr('fill',color);
				
				var legendTextRef = legend.selectAll('.text')
										    .data(color.domain().slice().reverse())
										    .enter()
											.append('text')
											.attr('x',function(d,i){return legendPositionArray[i].textXPos;})
											.attr('y',function(d,i){return legendPositionArray[i].y + legendSize;})
											.attr('font-family','calibri')
											.text(function(d,i){return d;}); 
				
				
					
		/*		legend.selectAll('.rect')
					  .data(color.domain().slice().reverse())
					  .enter()
					  .append("rect")
					  .attr('x',function(d,i){return (left + i * 100)})
			//		  .attr('y',)
					  .attr("width", 12)
					  .attr("height", 12)
					  .style("fill", color)
					  .attr("class", function (d) {return "legend-rect " + legendMap[d];});
			*/
            /*    var mulitpleLineChartLegend = svgElement1.selectAll(".legend")
                    .data(color.domain().slice().reverse())
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) {
                    //return "translate(" + (left + i * 100) + "," + 0 + ")";
					//widthEachLegend
					return "translate(" + (widthEachLegend*(i+1))/2 + "," + 0 + ")";
                });

				
                var rectWidth = 18;
                var textGap = 10;
                var xRectLegend = 0;
                var xTextLegend = xRectLegend + rectWidth + textGap;

                var hideLegendList = {};
                mulitpleLineChartLegend.append("rect")
                    .attr("x", xRectLegend)
                    .attr("width", 12)
                    .attr("height", 12)
                    .style("fill", color)
                    .attr("class", function (d) {
                    return "legend-rect " + legendMap[d];
                })
                    .on('click', function (d) {


                    if ((d3.select(this).attr("class")).indexOf("disable") != -1) {

                        var className = "legend-rect";
                        d3.select(this).attr('class', className);

                        d3.select(this).style("fill", color);
                        d3.select(".legend-text." + legendMap[d]).style("text-decoration","none");

                        $(selectorElement).find(".multipleLineCircle." + legendMap[d]).show();

                        var selectedPath = svgElement.selectAll(".multipleLine." + legendMap[d]);
                        selectedPath.transition()
                            .duration(1000)
                            .ease("linear")
                            .attr("stroke-dashoffset", 0);
						
                        svgElement.selectAll(".bar." + legendMap[d])
                            .transition()
                            .duration(1000)
                            .attr("y", function (d) {
                            return yScale(d.y);
                        })
                            .attr('height', function (d) {
                            return (height - yScale(d.y));
                        });

                    } else {
                        $(this).addClass("disable");
                        var className = $(this).attr("class")
                        className = className + "  disable";

                        d3.select(this).attr('class', className);

                        d3.select(this).style("fill", "grey");
                        d3.select(".legend-text." + legendMap[d]).style("text-decoration","line-through");

                        $(selectorElement).find(".multipleLineCircle." + legendMap[d]).hide();

                        var selectedPath = svgElement.selectAll(".multipleLine." + legendMap[d]);

                        selectedPath.transition()
                            .duration(1000)
                            .ease("linear")
                            .attr("stroke-dashoffset", totalLength);

                        svgElement.selectAll(".bar." + legendMap[d])
                            .transition()
                            .duration(1000)
                            .attr("y", yScale(minYScale))
                            .attr('height', 0);

                    }
                });

                mulitpleLineChartLegend.append("text")
                    .attr("x", xTextLegend)
                    .attr("y", 6)
                    .attr("dy", ".35em")
                    .style("text-anchor", "start")
                    .attr('class', function (d) {
                    return "legend-text  " + legendMap[d];
                })
                    .text(function (d) {
                    return d;
                });
*/

                d3.selectAll(".multichart").on('mouseover', function () {

                    var x = 0;
                    var classArray = $(this).attr('class').split(' ');

                    var xPos = classArray[classArray.length - 1];
                    d3.selectAll("." + xPos).attr("stroke", "blue");

                    var cxPos = d3.selectAll("circle." + xPos).attr("cx");


                    var xVal = Math.floor(Math.floor(xScale.invert(cxPos)));

                    var selectedObj;
                    for (var j = 0; j < arrayListForHover.length; j++) {

                        if (arrayListForHover[j].x == xVal) {

                            selectedObj = arrayListForHover[j];
                        }
                    }

                    if (!(selectedObj === undefined)) {


                        var toolTipVal = "";
                        var yKeyMapJsonArray = {};

                        for (var j = 0; j < yFieldList.length; j++) {
                            var fieldName = yFieldList[j];
                            var keyValue = selectedObj[fieldName].split(":")[0];
                            var keyLabel = selectedObj[fieldName].split(":")[1];
                            toolTipVal += fieldName + " : " + keyValue + " : " + keyLabel + " ";
                            yKeyMapJsonArray[keyLabel] = keyValue;
                        }

                        toolTipManager.showToolTipForBarWithMultipleLine(d3.event, yKeyMapJsonArray, selectedObj.timeIndex, false, cxPos, true)

                    } else {
                        toolTipManager.hideMulitpleLineBarToolTip();
                    }


                })
                    .on('mouseout', function () {
                    d3.selectAll(".multichart").attr("stroke", "");
                    toolTipManager.hideMulitpleLineBarToolTip();
                });
			
				//set font here
				
				setTextStyleAndSvgBackGround(svgElement);
				
            }

        };

		
		var brushingChart={
			drawBrushing:function(callback){
				
				var data1=data;
				var selectedArea=d3.select("."+$(selectorElement).attr("id")+"_svg");//$(selectorElement).find("svg");//d3.select('.extent');
				 selectedArea
					.on("mousedown", mousedown)
					.on("mouseup", mouseup);
				var brushedContainer;
				
				var heightOfBrushedArea=height-margin.scale;//($(selectorElement).height()/1.2)-20;
				var heightMin=heightOfBrushedArea;//-yScale(minYScale);

				var isMouseDown=false;
				var initialPointOfDragging=0;	
				
				function mousedown() {
					
					var m = d3.mouse(this);
					brushedContainer = selectedArea.append("g").attr("transform", "translate("+0+"," +margin.top+ ")").attr("class","brushedArea").append("rect")
					.attr('class','brushedArea')
						.attr("x", m[0])
						.attr("y", yScale(maxYScale))
						.attr("width",0)
						.attr("height",function(){
							return heightOfBrushedArea;
							//return ;
						}).style("fill","rgba(1,1,1,.3)");
					initialPointOfDragging=m[0];
					selectedArea.on("mousemove",mousemove);
					isMouseDown=true;
				}
				
				function getData(){
					return data1;
				}
				
				
				var dataStarting,dataEnding,isMouseMove=false;
				function mouseup(){
					isMouseDown=false;
					if(isMouseMove){
						isMouseMove=false;
						var data1=getData();
						var startIndex=0,endIndex=0,isStartIndexFound=false,isLastIndexFound=false;
						
						for(var i=0;i<data1.length;i++){
							var dataObj=data1[i];
							//var objDate=new Date(dataObj[xFieldName]);
							//console.log(dataStarting +" : obj "+objDate);
							if((dataStarting == i)){
								startIndex=i;
								console.error("*** matched**");
								isStartIndexFound=true
							}
							if((dataEnding == i)){
								endIndex=i;
								isLastIndexFound=true
								console.error("*** matched ending**");
							}
						}
						
						if(isStartIndexFound && isLastIndexFound ){
							
							data1=data1.slice(startIndex,(endIndex+1));
							
							if((startIndex+3)<endIndex){
							
								$(selectorElement).find('svg g').empty();
								$(selectorElement).find(".brushedArea").remove();
								
								
								selectedArea.on("mousemove",null);
								selectedArea.on("mousedown",null);
								selectedArea.on("mouseup",null);
								
								callback(data1);
								
								//drawAreaChart.areaChart({'axisColor':'#222222','attachBrushEvent':true,'xAxisIndicationLabel':options.xAxisIndicationLabel,'yAxisIndicationLabel':options.yAxisIndicationLabel});
								//drawCircle.circleChart({'color':"black",'r':3,'data':data1});
							}else{
								alert("further  zooming is not feasible");
								$(selectorElement).find(".brushedArea").remove();
							}
						}
						//selectedArea.on("mousemove", null);
					}
				
				}
				var movementTimer = null;
				function mousemove() {
					console.log("Mosuemove");
					if(isMouseDown){
					//alert(data1.length);
						$(selectorElement).find("#tooltipChart").hide();
						var m = d3.mouse(this);
					    var bwidth=m[0]-initialPointOfDragging;
						brushedContainer.attr("width",bwidth);
					//	console.log("vakksjbshsddshj::: "+m[1]+"::  "+m[0]+":: "+width);
						dataStarting=Math.round(xScale.invert(m[1]));//new Date();
						dataEnding=Math.round(xScale.invert(m[0]));//new Date();
						console.log(Math.round(xScale.invert(m[1])) +":::"+Math.round(xScale.invert(m[0])));
						isMouseMove=true;
					}
					
				}
				 
			}
		};
		
		
		
        var drawBar = {
            barChart: function (options) {
                var options = $.extend({
                    'color': 'red',
                        'axisColor': 'blue',
                        'data': [],
                        'hideYAxis': false,
                        'widthOfBar': '',
                        'formatDate': '%b %d',
                        'showAllTicks': false,
                        'yFieldName': '',
                        'textonBar': false,
                        'yFieldName': '',
                        'padding': 0,
                        'attachBrushEvent': false,
                        'xAxisIndicationLabel': '',
                        'yAxisIndicationLabel': ''

                }, options);

                var data;
                if (options.data.length == 0) {
                    data = chartData;
                } else {
                    data = options.data;
                }

                var barYFieldName;
                if (options.yFieldName == "") {
                    barYFieldName = yFieldName;
                } else {
                    barYFieldName = options.yFieldName;
                }

                var differenceSlab = 10;
                var widthOfEachBar;

                if (options.widthOfBar == '') {
                    widthOfEachBar = Math.floor((width - margin.scale) / (data.length));
                } else {

                    widthOfEachBar = options.widthOfBar;
                }


                var elementId = $(selectorElement).attr("id");
                var className = elementId + "_rect_" + barYFieldName;





                if ($(selectorElement).find(".axis").length == 0) {

                    var formatXAxis = d3.time.format(options.formatDate);


                    if (options.showAllTicks) {
                        xAxis.ticks(d3.time.days, 1).tickFormat(formatXAxis).tickSize(0).tickPadding(8);
                    }
                    xAxis.tickFormat(formatXAxis).tickSize(0).tickPadding(8);

                    var xAxisElem = svgElement.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (height - margin.scale + 10) + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(xAxis);

                    xAxisElem.selectAll(".tick")
                        .each(function (data) {
                        var date = new Date(data);
                        date = convertDateIntoYYMMDD(date);
                        svgElement.append("line")
                            .attr('class', 'horizontalGridLine')
                            .attr('x1', function () {

                            return xScale(parseDate.parse(date));
                        })
                            .attr('x2', function () {
                            return xScale(parseDate.parse(date));
                        })
                            .attr('y1', 0)
                            .attr('y2', (height - margin.scale + 10)).attr('stroke', '#F2F3F3');
                    });


                    var yAxisElem = svgElement.append("g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (width - margin.scale + 10) + "," + 3 + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(yAxis);

                    yAxisElem.selectAll(".tick")
                        .each(function (data) {
                        svgElement.append("line")
                            .attr('class', 'horizontalGridLine')
                            .attr('x1', 0)
                            .attr('x2', (width - margin.scale + 10))
                            .attr('y1', function () {

                            return yScale(data) + 3;
                        })
                            .attr('y2', function () {
                            return yScale(data) + 3;
                        }).attr('stroke', '#F2F3F3');
                    })
                        .style("display", function () {
                        if (options.hideAxis) {
                            return "none";
                        } else {
                            return "block";
                        }
                    });


                }
                var barElements = svgElement.selectAll("." + className)
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("class", className)
                    .attr("x", function (d, i) {
                    return (xScale(parseDate.parse(d[xFieldName])) + options.padding);
                })
                    .attr("y", function (d) {
                    return yScale(d[barYFieldName]);
                })
                    .attr("width", widthOfEachBar)
                    .attr("height", function (d) {
                    return yScale(maxYScale);
                })
                    .on("mouseover", function (d) {
                    var yFieldVal = d[barYFieldName];
                    d3.select(this)
                        .attr("fill", 'red');

                    var parsedDate = parseDate.parse(d[xFieldName]);
                    var xVal = convertDateIntoYYMMDD(parsedDate);
                    attachToolTip.showToolTip(d3.event, yFieldVal, xVal, undefined);
                })
                    .on("mouseleave", function (d) {
                    var yFieldVal = d[barYFieldName];
                    d3.select(this)
                        .attr("fill", options.color);
                    attachToolTip.hideTooTip();
                });

                barElements.transition()
                    .duration(2000)
                    .attr('height', function (d, i) {
                    return (height - margin.scale) - yScale(d[barYFieldName]);
                }).attr("fill", options.color)


                if (options.textonBar) {
                    svgElement.selectAll(".barText")
                        .data(data)
                        .enter()
                        .append("text")
                        .text(function (d) {
                        return parseInt(d[barYFieldName]);
                    })
                        .attr('x', function (d) {
                        return (xScale(parseDate.parse(d[xFieldName])) + 2.5);
                    })
                        .attr('y', function (d) {
                        return (yScale(d[barYFieldName]) + 20);
                    });

                }

                if (options.attachBrushEvent) {
                    brushingChart.drawBrushing(data);
                }

            },
            mulipleBarChart: function (options) {
                var options = $.extend({
                    'barChartArray': []

                }, options);

                var barArray = options.barChartArray;

                var minValue, maxValue;
                for (var i = 0; i < barArray.length; i++) {
                    var barObj = barArray[i];
                    var yField = barObj.yFieldName;

                    var array = d3.extent(barObj.data, function (d, i) {
                        return d[yField];
                    });
                    if (i == 0) {
                        minValue = array[0];
                        maxValue = array[1];
                    } else {
                        if (minValue > array[0]) {
                            minValue = array[0];
                        }
                        if (maxValue < array[1]) {
                            maxValue = array[1];
                        }
                    }
                }


                yScale.domain([minValue, (maxValue + 3)]);

                for (var i = 0; i < barArray.length; i++) {
                    var barObj = barArray[i];

                    var keyValueArray = {};
                    for (key in barObj) {
                        keyValueArray[key] = barObj[key];
                    }
                    this.barChart(keyValueArray);
                }
            },
            stackedBarChart: function (options) {
                var options = $.extend({
                    'data': [],
                        'xFieldName': '',
                        'widthOfBar': '',
                        'axisColor': 'black',
                        'hideAxis': false,
                        'showAllTicks': false,
                        'redrawing': true,
                        'columnHeadingArray': [],
                        'xAxisIndicationLabel': '',
                        'yAxisIndicationLabel': ''
                }, options);




                width = width - marginSvg - margin.left;
                height = height - height*0.25;


                var stackedChartData = options.data;
                xFieldName = options.xFieldName;

                var widthOfEachBar;
                var stack = d3.layout.stack();

                var dataset = [];
                var color = options.colorArray;

                if (options.widthOfBar == '') {
                    widthOfEachBar = Math.floor((width) / data.length);
                } else {
                    widthOfEachBar = options.widthOfBar;
                }





                var keysArray = d3.keys(stackedChartData[0]).filter(function (key) {
                    return (key != options.xFieldName);
                });
				
				var legendNameMap={};
				for(var i=0;i<keysArray.length;i++){
					legendNameMap[keysArray[i]]="legend-"+i;
					
				}
				
               // color.domain(keysArray);

                var formattedStackedData = stackedChartData;

                formattedStackedData.forEach(function (d, i) {
                    var y0 = 0;
                    var countr = 0;
                    d.groupedData = keysArray.map(function (keyName) {

                        return {
                            x: d[xFieldName],
                            y0: y0,
                            y1: y0 += +d[keyName],
                            name: keyName,
                                'exactYVal': d[keyName]
                        };
                    });

                    d.total = d.groupedData[d.groupedData.length - 1].y1;
                });

                for (var j = 0; j < formattedStackedData.length; j++) {
                    var groupObj = formattedStackedData[j].groupedData;

                }

                maxYScale = d3.max(formattedStackedData, function (d) {
                    return d.total;
                });
                minYScale = d3.min(formattedStackedData, function (d) {
                    return d.total;
                });


                maxYScale = maxYScale * 1.5;
				//minYScale=minYScale-minYScale*0.5;

                yScale = d3.scale.linear()
                    .domain([0, maxYScale

                ])
                    .range([height, 0]);

                svgElement = svgElement.append("g")
                    .attr("transform", "translate(" + 0 + "," + margin.top + ")");

                xScale = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);
                xScale.domain(formattedStackedData.map(function (d) {
                    return d[xFieldName];
                }));

                xAxis = d3.svg.axis().scale(xScale).orient("bottom");



                yAxis = d3.svg.axis().scale(yScale)
                    .orient("right").ticks(4).tickSize(5, 0).tickFormat(d3.format(".2s"));

                var xAxisElem = svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + 0 + "," + (height) + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none')
                    .call(xAxis);
					
				xAxisElem.selectAll("text")
                    .attr("transform", "translate(" + 0 + ",15) rotate(0)");
				
				xAxisElem.selectAll("text").call(textWrapper.wrapText,xScale.rangeBand());
				

                var yAxisElem = svgElement.append('g')
                    .attr('class', 'y axis')
                    .attr("transform", "translate(" + (width) + "," + 0 + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none')
                    .call(yAxis);

                yAxisElem.selectAll(".tick")
                    .each(function (data) {
                    svgElement.append("line")
                        .attr('class', 'horizontalGridLine')
                        .attr('x1', 0)
                        .attr('x2', (width))
                        .attr('y1', function () {

                        return yScale(data);
                    })
                        .attr('y2', function () {
                        return yScale(data);
                    }).attr('stroke', '#F2F3F3');
                })
                    .style("display", function () {
                    if (options.hideAxis) {
                        return "none";
                    } else {
                        return "block";
                    }
                });

                if (options.xAxisIndicationLabel != "") {

                    var lengthOfLine = 40;
                    var indicationLineXPos0 = width / 2 - lengthOfLine;
                    var indicationLineXPos1 = width / 2 + lengthOfLine;

                    var indicationLineAndTextGap = 20;
                    var yLablePos = margin.scale - (indicationLineAndTextGap / 3);
                    var yLinePos = height + margin.scale - indicationLineAndTextGap;

                    var textPosition = height + margin.scale + indicationLineAndTextGap;
					
					/*
                    svgElement.append("path")
                        .attr('class', "axis-arrow-trianle")
                        .attr("d", d3.svg.symbol().type("triangle-up").size(10))
                        .attr("fill", "red")
                        .style('display', 'block')
                        .attr("transform", function (d) {
                        return "translate(" + indicationLineXPos1 + "," + yLinePos + ") rotate(90)";
                    });


                    svgElement.append("line")
                        .attr("class", 'x-axis-indication-line')
                        .attr('x1', indicationLineXPos0)
                        .attr('y1', (yLinePos))
                        .attr('x2', indicationLineXPos1)
                        .attr('y2', (yLinePos))
                        .attr("stroke", 'red');
					*/	
                    var textXPosition = (indicationLineXPos0 + indicationLineXPos1);
					
					/*
                    svgElement.append("text")
                        .attr('class', 'x-axis-indication')
                        .attr('text-anchor', 'middle')
                        .attr('x', (indicationLineXPos0))
                        .attr('y', (yLinePos+yLinePos*0.2))
                        .text(options.xAxisIndicationLabel);
					*/
					var pixcelPerChar=6;
					var xLabelTotalPixcel=options.xAxisIndicationLabel.toString().length*pixcelPerChar;
					var xLabelTop=height*0.2;
					var xLabelLeft=width/2-	xLabelTotalPixcel/2;
					axisLabelController.appendLabel(options.xAxisIndicationLabel,xLabelLeft,xLabelTop,0,xAxisElem,textStyleConfg.xLabelColor,600);

                }

                if (options.yAxisIndicationLabel != "") {

                    var lengthOfIndicatorLine = 40;
                    var yIndicatorLinePos0 = ((height) / 2 - 20);
                    var yIndicatorLinePos1 = yIndicatorLinePos0 + lengthOfIndicatorLine;

                    var xPosition0 = width + margin.scale - margin.left + 10;
					
					/*
                    svgElement.append("line")
                        .attr("class", 'y-axis-indication-line')
                        .attr('x1', xPosition0)
                        .attr('y1', (yIndicatorLinePos0))
                        .attr('x2', xPosition0)
                        .attr('y2', (yIndicatorLinePos1))
                        .attr("stroke", 'red');

				
                    svgElement.append("path")
                        .attr('class', "axis-arrow-trianle")
                        .attr("d", d3.svg.symbol().type("triangle-up").size(10))
                        .attr("fill", "red")
                        .style('display', 'block')
                        .attr("transform", function (d) {
                        return "translate(" + xPosition0 + "," + yIndicatorLinePos0 + ")";
                    });
					*/

                    var indicationLabelRef=svgElement
											.append("g")
											.attr("transform", "translate(" + (width + marginSvg - margin.left + 5) + "," + (yIndicatorLinePos1 + 30) + ")")
						
					axisLabelController.appendLabel(options.yAxisIndicationLabel,0,-(yIndicatorLinePos1 + 30)*0.4,90,indicationLabelRef,textStyleConfg.yLabelColor,600);
					/*
                        .append("text")
                        .attr("class", 'y-axis-indication')
                        .attr('text-anchor', 'middle')
                        .attr("transform", "rotate(90)")
                        .text(options.yAxisIndicationLabel)
					*/	
                }

                /* Add a group for each row of data */
                var groups = svgElement.selectAll("g.stack-grouping")
                    .data(formattedStackedData)
                    .enter()
                    .append("g")
                    .attr("class", 'stack-grouping')



               var allRect= groups.selectAll("rect")
                    .data(function (d) {
                    return d.groupedData;
                })
                    .enter()
                    .append("rect")
                    .attr("x", function (d, i) {
                    return (xScale((d["x"])));
                })
                    .attr("y", function (d) {
                    return yScale(0);
                })
                    .attr('class', function (d) {
                    return legendNameMap[d['name']] + " " + "bar";
                })
                    .attr("width", xScale.rangeBand())
                    .attr("height", function (d) {

                    return 0;
                })
                    .style("fill", function (d, i) {
                    return color[d.name];
                })
                    .on("mouseover", function (d) {
                    d3.select(this)
                        .attr('fill', 'yellow');

					

                    //toolTipManager.showToolTip(d3.event, d.exactYVal, d["x"], false, options.columnHeadingArray[d.name]);
					
					var yHeadingValueMap=[{"headingName":options.columnHeadingArray[d.name],"headingVal":d.exactYVal}];
						
					toolTipManager.showToolTip(d3.event,"",(d["x"]), false,yHeadingValueMap);

                })
                    .on("mouseleave", function (d, i) {
                    var targetElement = d3.select(this);
                    d3.select(this)
                        .attr('fill', $(targetElement).parents('g').attr('fill'));
                    toolTipManager.hideTooTip();
                });
				
				
				allRect.transition().duration(1000).attr("height",function(d){
						return (yScale(d["y0"]) - yScale(d.y1));
					
					})	
					.attr("y",function(d){
						return yScale(d.y1);
					});
					
				var legendColorArray=d3.keys(color);
                var stackChartLegend = svgElement.selectAll(".legend")
                    .data(legendColorArray)
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) {
                    return "translate("+margin.left+"," + (10 + i * 20) + ")";
                });

                var rectWidth = 18;
                var textGap = 10;
                var xRectLegend = 0;
                var xTextLegend = xRectLegend + rectWidth + textGap;
                var hideLegendList = {};
                stackChartLegend.append("rect")
                    .attr("x", xRectLegend)
                    .attr("width", 18)
                    .attr("height", 18)
                    .style("fill", function(d){
						return color[d];
					})
                    .on('click', function (d) {
                    var isHideElement = false;
                    if ($("rect" + "." + legendNameMap[d]).length > 1) {
                        isHideElement = true;
                        hideLegendList[d] = d;


                        d3.select(this).style("text-decoration", "grey");
                        d3.select(".legend-text." + legendNameMap[d]).style("text-decoration", "line-through");


                    } else {
                        isHideElement = false;
                        delete hideLegendList[d];



                        d3.select(this).style("fill", color[d]);
                        d3.select(".legend-text." + legendNameMap[d]).style("text-decoration", "none");
                    }

                    $(selectorElement).find("rect.bar").remove();
                    $(selectorElement).find("g.stack-grouping").remove();



                    redrawStackChart(d, hideLegendList);
                });

                stackChartLegend.append("text")
                    .attr("x", xTextLegend)
                    .attr("y", 9)
                    .attr("dy", ".35em")
                    .style("text-anchor", "start")
                    .attr("class", function (d) {
                    return "legend-text " + " " + legendNameMap[d];
                })
                    .text(function (d) {
                    return d;
                });
				
				hideAxisPath(svgElement);
						
				//set font here
				
				setTextStyleAndSvgBackGround(svgElement);
					
                function redrawStackChart(fieldName, hideLegendList) {



                    keysArray = d3.keys(stackedChartData[0]).filter(function (key) {
                        var filteredResult;

                        filteredResult = (key != options.xFieldName && hideLegendList[key] == undefined && key != "groupedData" && key != "total")



                        return filteredResult;
                    });


                    var formattedStackedData1 = stackedChartData;

                    formattedStackedData1.forEach(function (d, i) {
                        var y0 = 0;
                        d.groupedData = keysArray.map(function (keyName) {
                            return {
                                x: d[xFieldName],
                                y0: y0,
                                y1: y0 += +d[keyName],
                                name: keyName,
                                    'exactYVal': d[keyName]
                            };
                        });

                        d.total = d.groupedData[d.groupedData.length - 1].y1;

                    });


                    maxYScale = d3.max(formattedStackedData1, function (d) {
                        return d.total;
                    });
                    minYScale = d3.min(formattedStackedData1, function (d) {
                        return d.total;
                    });


                    maxYScale = maxYScale * 1.5;




                    var yScale1 = d3.scale.linear()
                        .domain([0, maxYScale

                    ]).range([height, 0]);

                    yAxis = d3.svg.axis().scale(yScale1)
                        .orient("right").ticks(4).tickSize(5, 0).tickFormat(d3.format(".2s"));

                    svgElement.select('.y.axis')
                        .call(yAxis)
                        .selectAll(".tick")
                        .each(function (data) {
                        svgElement.selectAll(".horizontalGridLine")
                            .attr('x1', 0)
                            .attr('x2', (width))
                            .attr('y1', function () {
                            return yScale1(data);
                        })
                            .attr('y2', function () {
                            return yScale1(data);
                        }).attr('stroke', '#F2F3F3');
                    })
                        .style("display", function () {
                        if (options.hideAxis) {
                            return "none";
                        } else {
                            return "block";
                        }
                    });

                    var groups = svgElement.selectAll("g.stack-grouping")
                        .data(formattedStackedData1)
                        .enter()
                        .append("g")
                        .attr("class", 'stack-grouping')



                    var rects = groups.selectAll("rect")
                        .data(function (d) {
                        return d.groupedData;
                    })
                        .enter()
                        .append("rect")
                        .attr("x", function (d, i) {
                        return (xScale((d["x"])));
                    })
                        .attr("y", function (d) {
                        return yScale1(0);
                    })
                        .attr('class', function (d) {
                        return legendNameMap[d['name']] + " " + "bar";
                    })
                        .attr("width", xScale.rangeBand())
                        .attr("height", function (d) {

                        return 0;
                    })
                        .style("fill", function (d, i) {
                        return color[d.name];
                    })
                        .on("mouseover", function (d) {
                        d3.select(this)
                            .attr('fill', 'yellow');


						
						var yHeadingValueMap=[{"headingName":options.columnHeadingArray[d.name],"headingVal":d.exactYVal}];
						
						toolTipManager.showToolTip(d3.event,"",(d["x"]), false,yHeadingValueMap);
                        //attachToolTip.showToolTip(d3.event, d.exactYVal, d["x"], false, options.columnHeadingArray[d.name]);

                    })
                        .on("mouseleave", function (d, i) {
                        var targetElement = d3.select(this);
                        d3.select(this)
                            .attr('fill', $(targetElement).parents('g').attr('fill'));
                        //attachToolTip.hideTooTip();
						toolTipManager.hideTooTip();
                    });

                    rects.transition()
                        .duration(2000)
                        .attr('height', function (d, i) {
                        return (yScale1(d.y0) - yScale1(d.y1));
                    })
					.attr("y",function(d){
						return yScale1(d.y1);
					})
					.
					attr("fill", function (d) {

                        return color[d.name];
                    });
					
					hideAxisPath(svgElement);
						
					//set font here
					
					setTextStyleAndSvgBackGround(svgElement);
					
                }
            },
			groupedBarChart: function (options) {
                var options = $.extend({
                    'data': [],
                        'xFieldName': '',
                        'widthOfBar': '',
                        'axisColor': 'black',
                        'hideAxis': false,
                        'yIndicationLabel': 'Value',
                }, options);

				
                width = width - marginSvg - margin.left;
                height = height - marginSvg;

                var widthOfEachBar;
                var stack = d3.layout.stack();

                var dataset = [];
                var color = '';

                color = d3.scale.category20


                var colors = options.colors;
			
                var groupedBarChartData = options.data;


                xFieldName = options.xFieldName;

                if (options.widthOfBar == '') {
                    widthOfEachBar = Math.floor((width) / groupedBarChartData.length);
                } else {
                    widthOfEachBar = options.widthOfBar;
                }


                var keysArray = d3.keys(groupedBarChartData[0]).filter(function (key) {
                    return (key != options.xFieldName);
                });

                groupedBarChartData.forEach(function (d, i) {
                    d.groupedData = keysArray.map(function (keyName) {
                        return {
                            xVal: keyName,
                            yVal: d[keyName],
							timeIndex:i,
							xFieldVal:d[xFieldName]
                        };
                    });
                    d.timeIndex = i;
                });
				
				var legendNameMap={};
				height=height*0.8;
				
				for(var i=0;i<keysArray.length;i++){
					legendNameMap[keysArray[i]]="legend-"+i;
				}
				
                dataset = groupedBarChartData;
				
                xScale = d3.time.scale().range([0, width], 0.5);
                
				xScale.domain(d3.extent(groupedBarChartData, function (d, i) {
                    return d["timeIndex"];
                }));
				
                var baseXScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.5);
                var tempXScale = d3.scale.ordinal();

                baseXScale.domain(dataset.map(function (d) {
                    return d["timeIndex"];
                }));

                tempXScale.domain(keysArray).rangeRoundBands([0, baseXScale.rangeBand()]);

                yScale = d3.scale.linear()
                    .range([(height-height*0.2),height*0.2]);

                maxYScale = d3.max(dataset, function (d, i) {

                    return d3.max(d.groupedData, function (d1) {
                        return d1["yVal"];
                    });
                });
                maxYScale = maxYScale * 1.5;
                yScale.domain([0, maxYScale])
                svgElement = svgElement.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			   
			   var largestStringLngth=0;
				var xAxisTicks = [];
				for(var counter =0 ;counter<dataset.length;counter++)
				{
					xAxisTicks[counter] = dataset[counter][xFieldName];
					if(largestStringLngth<(xAxisTicks[counter].toString()).length)
					{
							largestStringLngth = (xAxisTicks[counter].toString()).length;
					}
				}
		
				xAxis = d3.svg.axis().scale(baseXScale)
                    .orient("bottom")
					.tickValues(tickController.getXTickArray(0,(xAxisTicks.length),largestStringLngth, (width)));
          
				yAxis = d3.svg.axis().scale(yScale)
                    .orient("right").ticks(4).tickSize(5, 0);
                
				var xAxisElem =	svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + 0 + "," + (height) + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none')
                    .call(xAxis);
					
				xAxisElem.selectAll("text")
					.text(function(d){
						return xAxisTicks[d];
					})
					.attr('fill','black');
					
		
                var yAxisElem = svgElement.append('g')
                    .attr('class', 'y axis')
                    .attr("transform", "translate(" + (width) + "," + 0 + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none');

                yAxisElem.call(yAxis)
                    .selectAll(".tick")
                    .each(function (data) {
                    svgElement.append("line")
                        .attr('class', 'horizontalGridLine')
                        .attr('x1', 0)
                        .attr('x2', (width))
                        .attr('y1', function () {

                        return yScale(data);
                    })
                        .attr('y2', function () {
                        return yScale(data);
                    }).attr('stroke', '#F2F3F3');
                })
                    .style("display", function () {
                    if (options.hideAxis) {
                        return "none";
                    } else {
                        return "block";
                    }
                });
                var yLabelTop = ((height / 1.5) + (options.yAxisfactor.length / 2) * 5);
                var yLabelLeft = margin.right * 1.2;
				
				/*
                yAxisElem.append("text")
                    .text(function () {
                    return options.yAxisfactor;
                })
                    .style('font-style', 'italic')
                    .attr('transform', "translate(" + (yLabelLeft) + "," + (yLabelTop) + ") rotate(-90)")
                    .style('fill', options.yLabelColor);
				*/
				
				//y axis indication lable
				axisLabelController.appendLabel(options.yAxisfactor,yLabelLeft,yLabelTop,-90,yAxisElem,textStyleConfg.yLabelColor,600);
				
				//x axis indication lable
				var pixcelPerChar=6;
				var totalPixcel=options.xAxisfactor.length*pixcelPerChar;
				var xLabelLeft=(width/2)-(totalPixcel/2);
				var xLabelTop=height*0.2;
				
				axisLabelController.appendLabel(options.xAxisfactor,xLabelLeft,xLabelTop,0,xAxisElem,textStyleConfg.xLabelColor,600);
				
				var groups = svgElement.selectAll("g.bar-grouping")
                    .data(dataset)
                    .enter()
                    .append("g")
                    .attr("class", 'bar-grouping')
                    .attr("transform", function (d) {
                    return "translate(" + (baseXScale(d["timeIndex"])) + ",0)";
                });


                var rectsTrans = groups.selectAll("rect")
                    .data(function (d) {
                    return d.groupedData;
                })
                    .enter()
                    .append("rect")
                    .attr("x", function (d, i) {

                    return (tempXScale(0));
                })
                    .attr("y", function (d) {
                    return yScale(0);
                })
                    .attr('class', function (d) {
                    return "groupBar " + legendNameMap[d['xVal']];
                })
                    .style("fill", function (d, i) {
                    return options.colors[d['xVal']];
                })
                    .attr("width", (tempXScale.rangeBand() / 1.2))
                    .attr("height", function (d) {
                    return ((height) - yScale(d["yVal"]));
                })
                    .on("mouseover", function (d,i) {


                    d3.select(this)
                        .style('fill', 'yellow');
					
					var yHeadingValueMap=[{"headingName":d["xVal"],"headingVal":d["yVal"]}];
						
					toolTipManager.showToolTip(d3.event, d["yVal"],(options.xAxisfactor+ " "+d["xFieldVal"]), false,yHeadingValueMap);	
					
					//toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, options.yIndicationLabel);


                })
                    .on("mouseleave", function (d, i) {
                    var targetElement = d3.select(this);
                    d3.select(this)
                        .style('fill', function (d, i) {
                        return options.colors[d['xVal']];
                    });
                    toolTipManager.hideTooTip();
                });

                rectsTrans.transition().duration(function (d, i) {
                    return i * 600
                }).attr("x", function (d) {
                    return (tempXScale(d["xVal"]));
                }).attr('y', function (d) {
                    return yScale(d["yVal"]);
                });
                var stackChartLegend = svgElement.selectAll(".legend")
                    .data(keysArray)
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) {
                    return "translate(0," + (10 + i * 20) + ")";
                });

                var rectWidth = 18;
                var textGap = 10;
                var xRectLegend = 0;
                var xTextLegend = xRectLegend + rectWidth + textGap;
                var hideLegendList = {};

                stackChartLegend.append("rect")
                    .attr("x", xRectLegend)
                    .attr("width", 18)
                    .attr("height", 18)
                    .style("fill", function (d, i) {
                    return options.colors[d];
                })
                    .attr('index', function (d, i) {
                    return i;
                })
                    .on('click', function (d) {


                    var isHideElement = false;
                    var index = parseInt(d3.select(this).attr('index'));
                    if (!svgElement.selectAll("rect."+legendNameMap[d]).empty()) {

                        isHideElement = true;
                        hideLegendList[d] = d;

                        d3.select(this).style("fill", "grey");
                        d3.select(".legend-text." + legendNameMap[d]).style("text-decoration", "line-through");


                    } else {
                        isHideElement = false;
                        delete hideLegendList[d];

                        d3.select(this).style("fill", function (d, i) {

                            return options.colors[d];
                        });
                        d3.select(".legend-text." + legendNameMap[d]).style("text-decoration", "none");
                    }

                    $(selectorElement).find("rect.groupBar").remove();
                    $(selectorElement).find(".bar-grouping").remove();


                    redrawGroupedBarChart(d, hideLegendList);
                });
				
                function redrawGroupedBarChart(d, hideLegendList) {

                    keysArray = d3.keys(groupedBarChartData[0]).filter(function (key) {
                        var filteredResult;

                        filteredResult = (key != options.xFieldName && hideLegendList[key] == undefined && key != "groupedData" && key != "timeIndex")



                        return filteredResult;
                    });


                    var formattedGroupedBarData1 = groupedBarChartData;

                    groupedBarChartData.forEach(function (d, i) {
                        d.groupedData = keysArray.map(function (keyName) {
                            return {
                                xVal: keyName,
                                yVal: d[keyName]
                            };
                        });
                        d.timeIndex = i;
                    });

                    maxYScale = d3.max(dataset, function (d, i) {

                        return d3.max(d.groupedData, function (d1) {
                            return d1["yVal"];
                        });
                    });
                    maxYScale = maxYScale * 1.5;
                    yScale.domain([0, maxYScale]);

                    yAxis = d3.svg.axis().scale(yScale)
                        .orient("right").ticks(4).tickSize(5, 0);

                    tempXScale.domain(keysArray).rangeRoundBands([0, baseXScale.rangeBand()]);

                    svgElement.selectAll(".y.axis")
                        .call(yAxis);


                    /* Add a group for each row of data */
                    var groups = svgElement.selectAll("g.bar-grouping")
                        .data(groupedBarChartData)
                        .enter()
                        .append("g")
                        .attr("class", 'bar-grouping')
                        .attr("transform", function (d) {
                        return "translate(" + (baseXScale(0)) + ",0)";
                    });


                    var rectsTrans = groups.selectAll("rect")
                        .data(function (d) {
                        return d.groupedData;
                    })
                        .enter()
                        .append("rect")
                        .attr("x", function (d, i) {

                        return (tempXScale(d["xVal"]));
                    })
                        .attr("y", function (d) {
                        return yScale(d["yVal"]);
                    })
                        .attr('class', function (d) {
                        return "groupBar " + legendNameMap[d['xVal']];
                    })
                        .style("fill", function (d, i) {
                        return options.colors[d['xVal']];
                    })
                        .attr("width", (tempXScale.rangeBand() / 1.2))
                        .attr("height", function (d) {
                        return ((height) - yScale(d["yVal"]));
                    })
                        .on("mouseover", function (d) {
                        d3.select(this)
                            .attr('fill', 'yellow');

                        toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, options.yIndicationLabel);

                    })
                        .on("mouseleave", function (d, i) {
                        var targetElement = d3.select(this);
                        d3.select(this)
                            .attr('fill', $(targetElement).parents('g').attr('fill'));
                        toolTipManager.hideTooTip();
                    });

                    groups.transition().duration(function (d, i) {
                        return i * 190;
                    }).attr("transform", function (d) {
                        return "translate(" + (baseXScale(d["timeIndex"])) + ",0)";
                    });
					//hide all axis path
					hideAxisPath(svgElement);
						
					//set font here
					
						setTextStyleAndSvgBackGround(svgElement);
						

                }


                stackChartLegend.append("text")
                    .attr("x", xTextLegend)
                    .attr("y", 9)
                    .attr("dy", ".35em")
                    .style("text-anchor", "start")
                    .attr("class", function (d) {
                    return "legend-text " + " " + legendNameMap[d];
                })
                    .text(function (d) {
                    return d;
                });
				
				//hide all axis path
				hideAxisPath(svgElement);
					
				//set font here
				
				setTextStyleAndSvgBackGround(svgElement);
				
            },
	groupedBar2DChart: function(options,midCriteria) {
                var options =
				$.extend({
                    'data': [],
                        'xFieldName': '',
                        'widthOfBar': '',
                        'axisColor': 'black',
                        'hideAxis': false,
                        'yIndicationLabel': 'Value',
						'midVal':""
                }, options);
				
				
				
				
				var midVal;
				if(isNaN(midCriteria)){
					midVal="";
				}else{
					midVal=midCriteria;
				}
				
				width = width - marginSvg - margin.left;
                height = height - marginSvg;
				
				height=height*0.9;
				
                var widthOfEachBar;
                var stack = d3.layout.stack();
				
                var dataset = [];
                var color = '';

                color = d3.scale.category20


                var colors = options.colors;



                var groupedBarChartData = options.data;


                xFieldName = options.xFieldName;

                if (options.widthOfBar == '') {
                    widthOfEachBar = Math.floor((width) / groupedBarChartData.length);
                } else {
                    widthOfEachBar = options.widthOfBar;
                }



                var keysArray = d3.keys(groupedBarChartData[0]).filter(function (key) {
                    return (key != options.xFieldName);
                });

                groupedBarChartData.forEach(function (d, i) {
                    d.groupedData = keysArray.map(function (keyName) {
                        return {
                            xVal: keyName,
                            yVal: d[keyName],
							xFieldVal:d[xFieldName]
                        };
                    });
                    d.timeIndex = i;
                });
					
				var legendNameMap={};	
				for(var i=0;i<keysArray.length;i++){
					legendNameMap[keysArray[i]]="legend-"+i;
				}	
                dataset = groupedBarChartData;

                xScale = d3.time.scale().range([0, width], 0.5);
                xScale.domain(d3.extent(groupedBarChartData, function (d, i) {
                    return (d["timeIndex"]);
                }));

                var baseXScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.5);
                var tempXScale = d3.scale.ordinal();

                baseXScale.domain(dataset.map(function (d) {
                    return d["timeIndex"];
                }));

                tempXScale.domain(keysArray).rangeRoundBands([0, baseXScale.rangeBand()]);

                yScale = d3.scale.linear()
                    .range([(height), 0]);

                maxYScale = d3.max(dataset, function (d, i) {

                    return d3.max(d.groupedData, function (d1) {
                        return d1["yVal"];
                    });
                });
				
				var minYScale= d3.min(dataset, function (d, i) {

                    return d3.min(d.groupedData, function (d1) {
                        return d1["yVal"];
                    });
                });
				
				var midPoint;
				
				if(isNaN(midVal)){
					
					midPoint=Math.ceil((maxYScale+minYScale)/2);
				}else{
					midPoint=midVal;
				}
				
				
				maxYScale = maxYScale * 1.9;
				
				
				
				yScale.domain([minYScale, maxYScale])

                svgElement = svgElement.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			
			    var largestStringLngth=0;
				var xAxisTicks = [];
				for(var counter =0 ;counter<dataset.length;counter++)
				{
					xAxisTicks[counter] = dataset[counter][xFieldName];
					if(largestStringLngth<(xAxisTicks[counter].toString()).length)
					{
							largestStringLngth = (xAxisTicks[counter].toString()).length;
					}
				}
				
                xAxis = d3.svg.axis().scale(baseXScale)
                    .orient("bottom")
					.tickValues(tickController.getXTickArray(0,(xAxisTicks.length),largestStringLngth, (width)));
					
                yAxis = d3.svg.axis().scale(yScale)
                    .orient("right").ticks(4).tickSize(5, 0);

			var xAxisElem =	svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + 0 + "," + (height) + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none');
					
					xAxisElem
                    .call(xAxis)
					.selectAll("text")
					.text(function(d){
						return xAxisTicks[d];
					})
					.attr('fill','black');

         /*       svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + 0 + "," + (height) + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none')
                    .call(xAxis)
					.selectAll("text")
                    .text(function (d, i) {
						var obj = dataset[d];
						return obj[xFieldName];
					});*/

                var yAxisElem = svgElement.append('g')
                    .attr('class', 'y axis')
                    .attr("transform", "translate(" + (width) + "," + 0 + ")")
                    .attr("stroke", options.axisColor)
                    .attr("fill", 'none');
				
					
				//yAxis.tickValues(d3.range(0, height,midPoint));
				
				var tickArray=tickController.getTickArray(minYScale,maxYScale,5);
				
				if(tickArray.indexOf(midPoint) == -1){
					tickArray.push(midPoint);
				}
				
				//alert(tickArray +" mid "+midPoint + tickArray.indexOf(midPoint));
				
				yAxis.tickValues(tickArray);
				
				 yAxisElem.call(yAxis)
                    .selectAll(".tick")
                    .each(function (data) {
						svgElement.append("line")
							.attr('class', 'horizontalGridLine')
							.attr('x1', 0)
							.attr('x2', (width))
							.attr('y1', function () {

							return yScale(data);
						})
							.attr('y2', function () {
							return yScale(data);
						})
						.attr('stroke', '#F2F3F3')
						.attr("display",function(d){
							if(d == midPoint){
								return "none";
							}else{
								return "block";
							}
						});
					})
                    .style("display", function () {
						if (options.hideAxis) {
							return "none";
						} else {
							return "block";
						}
					});
					
                var yLabelTop = ((height / 1.5) + (options.yAxisfactor.length / 2) * 5);
                var yLabelLeft = margin.right * 1.2;
				/*
                yAxisElem.append("text")
                    .text(function () {
                    return options.yAxisfactor;
                })
                    .style('font-style', 'italic')
                    .attr('transform', "translate(" + (yLabelLeft) + "," + (yLabelTop) + ") rotate(-90)")
                    .style('fill', options.yLabelColor);
					
				*/	
				
				//y axis indication lable
				axisLabelController.appendLabel(options.yAxisfactor,yLabelLeft,yLabelTop,-90,yAxisElem,textStyleConfg.yLabelColor,600);
				
				//x axis indication lable
				var pixcelPerChar=6;
				var totalPixcel=options.xAxisfactor.length*pixcelPerChar;
				var xLabelLeft=(width/2)-(totalPixcel/2);
				var xLabelTop=height*0.15;
				
				axisLabelController.appendLabel(options.xAxisfactor,xLabelLeft,xLabelTop,0,xAxisElem,textStyleConfg.xLabelColor,600);
				
                var groups = svgElement.selectAll("g.bar-grouping")
                    .data(dataset)
                    .enter()
                    .append("g")
                    .attr("class", 'bar-grouping')
                    .attr("transform", function (d) {
                    return "translate(" + (baseXScale(d["timeIndex"])) + ",0)";
                });


                var rectsTrans = groups.selectAll("rect")
                    .data(function (d) {
                    return d.groupedData;
                })
                    .enter()
                    .append("rect")
                    .attr("x", function (d, i) {

                    return (tempXScale(0));
                })
                    .attr("y", function (d) {
                    return yScale(midPoint);
                })
                    .attr('class', function (d) {
                    return "groupBar " + legendNameMap[d['xVal']];
                })
                    .style("fill", function (d, i) {
                    return options.colors[d['xVal']];
                })
                    .attr("width", (tempXScale.rangeBand() / 1.2))
                    .attr("height", function (d) {
						if(yScale(d["yVal"])> yScale(midPoint)){
							return yScale(d["yVal"])-yScale(midPoint);
						}else{
							return (yScale(midPoint) - yScale(d["yVal"]));
						}
                })
                    .on("mouseover", function (d) {


                    d3.select(this)
                        .style('fill', 'yellow');
                    //toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, options.yIndicationLabel);
					
					var yHeadingValueMap=[{"headingName":options.yAxisfactor,"headingVal":d["yVal"]}];
						
					toolTipManager.showToolTip(d3.event,"",(d["xVal"] +" "+d["xFieldVal"]), false,yHeadingValueMap);

                })
                    .on("mouseleave", function (d, i) {
                    var targetElement = d3.select(this);
                    d3.select(this)
                        .style('fill', function (d, i) {
                        return options.colors[d['xVal']];
                    });
                    toolTipManager.hideTooTip();
                });

                rectsTrans.transition().duration(function (d, i) {
                    return i * 600
                }).attr("x", function (d) {
                    return (tempXScale(d["xVal"]));
                }).attr('y', function (d) {
					if(yScale(d["yVal"])> yScale(midPoint)){
						return yScale(midPoint);
					}else{
						return yScale(d["yVal"]);
					}
					
                });
                var stackChartLegend = svgElement.selectAll(".legend")
                    .data(keysArray)
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) {
                    return "translate(0," + (10 + i * 20) + ")";
                });

                var rectWidth = 18;
                var textGap = 10;
                var xRectLegend = 0;
                var xTextLegend = xRectLegend + rectWidth + textGap;
                var hideLegendList = {};

                stackChartLegend.append("rect")
                    .attr("x", xRectLegend)
                    .attr("width", 18)
                    .attr("height", 18)
                    .style("fill", function (d, i) {
                    return options.colors[d];
                })
                    .attr('index', function (d, i) {
                    return i;
                })
                    .on('click', function (d) {


                    var isHideElement = false;
                    var index = parseInt(d3.select(this).attr('index'));
					
					if (!svgElement.selectAll("rect."+legendNameMap[d]).empty()) {

                        isHideElement = true;
                        hideLegendList[d] = d;

                        d3.select(this).style("fill", "grey");
                        d3.select(".legend-text." +legendNameMap[d]).style("text-decoration", "line-through");


                    } else {
                        isHideElement = false;
                        delete hideLegendList[d];

                        d3.select(this).style("fill", function (d, i) {
							return options.colors[d];
                        });
                        d3.select(".legend-text." + legendNameMap[d]).style("text-decoration", "none");
                    }

                    $(selectorElement).find("rect.groupBar").remove();
                    $(selectorElement).find(".bar-grouping").remove();


                    redrawGroupedBarChart(d, hideLegendList);
                });

                function redrawGroupedBarChart(d, hideLegendList) {

                    keysArray = d3.keys(groupedBarChartData[0]).filter(function (key) {
                        var filteredResult;

                        filteredResult = (key != options.xFieldName && hideLegendList[key] == undefined && key != "groupedData" && key != "timeIndex")
						return filteredResult;
                    });


                    /*
					for(var i=0;i<keysArray.length;i++){
							
						console.log("key name "+keysArray[i] );
					}
					*/
					
                    groupedBarChartData.forEach(function (d, i) {
                        d.groupedData = keysArray.map(function (keyName) {
                            return {
                                xVal: keyName,
                                yVal: d[keyName]
                            };
                        });
                        d.timeIndex = i;
                    });
					
					var formattedGroupedBarData1 = groupedBarChartData;
					
					var maxYScale1 = d3.max(formattedGroupedBarData1, function (d, i) {

                        return d3.max(d.groupedData, function (d1) {
                            return d1["yVal"];
                        });
                    });
					
					var minYScale1= d3.min(formattedGroupedBarData1, function (d, i) {

										return d3.min(d.groupedData, function (d1) {
											return d1["yVal"];
										});
									});
				
					
					
					
					var midPoint1;
					if(isNaN(midVal)){
						midPoint1=Math.ceil((maxYScale1+minYScale1)/2);
					}else{
						midPoint1=midVal;
					}	
					//var midPoint1=((maxYScale1+minYScale1)/2);
					
					maxYScale1 = maxYScale1 * 1.9;
					yScale.domain([minYScale1, maxYScale1]);

                    yAxis = d3.svg.axis().scale(yScale)
                        .orient("right").ticks(4).tickSize(5, 0);
						
					tempXScale.domain(keysArray).rangeRoundBands([0, baseXScale.rangeBand()]);
					
					svgElement.selectAll(".horizontalGridLine").remove();
					//svgElement.selectAll(".customtick").remove();
					
					//yAxis.tickValues(d3.range(0, height,midPoint1));
					
					var tickArray2=tickController.getTickArray(minYScale,maxYScale,5);
					yAxis.tickValues(tickArray2);
				
					
					svgElement.selectAll(".y.axis")
                        .call(yAxis)
						.selectAll(".tick")
						.each(function (data) {
							console.log("************* text *******"+data);
							
								svgElement.append("line")
									.attr('class', 'horizontalGridLine')
									.attr('x1', 0)
									.attr('x2', (width))
									.attr('y1', function () {

									return yScale(data);
									})
									.attr('y2', function () {
										return yScale(data);
									}).attr('stroke', '#F2F3F3');
							
						})
						.style("display", function () {
							if (options.hideAxis) {
								return "none";
							} else {
								return "block";
							}
						});
						

                    /* Add a group for each row of data */
                    var groups = svgElement.selectAll("g.bar-grouping")
                        .data(formattedGroupedBarData1)
                        .enter()
                        .append("g")
                        .attr("class", 'bar-grouping')
						
                        .attr("transform", function (d) {
                        return "translate(" + (baseXScale(0)) + ",0)";
                    })
					
					
					

                    var rectsTrans = groups.selectAll("rect")
							.data(function (d) {
							return d.groupedData;
						})
                        .enter()
                        .append("rect")
                        .attr("x", function (d, i) {

                        return (tempXScale(d["xVal"]));
                    })
                    .attr("y", function (d) {
						//console.log("d[yVal ]"+yScale(d["yVal"]) +" mid "+ yScale(midPoint1));
						if(yScale(d["yVal"])>= yScale(midPoint1)){
							return yScale(midPoint1);
						}else{
							return yScale(d["yVal"]);
						}
                        //return yScale(d["yVal"]);
                    })
                    .attr('class', function (d) {
                        return "groupBar " + legendNameMap[d['xVal']];
                    })
                    .style("fill", function (d, i) {
                        return options.colors[d['xVal']];
                    })
					.attr("width", (tempXScale.rangeBand() / 1.2))
					.attr("height", function (d) {
						//console.log("d[yVal ]"+yScale(d["yVal"]) +" mid "+ yScale(midPoint1));
						if(yScale(d["yVal"])>= yScale(midPoint1)){
							return yScale(d["yVal"])-yScale(midPoint1);
						}else{
							return (yScale(midPoint1) - yScale(d["yVal"]));
						}
                        //return ((height) - yScale(d["yVal"]));
                    })
                        .on("mouseover", function (d) {
                        d3.select(this)
                            .attr('fill', 'yellow');

                        toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, options.yIndicationLabel);

                    })
                        .on("mouseleave", function (d, i) {
                        var targetElement = d3.select(this);
                        d3.select(this)
                            .attr('fill', $(targetElement).parents('g').attr('fill'));
                        toolTipManager.hideTooTip();
                    });
					
					
                    groups.transition().duration(function (d, i) {
                        return i * 190;
                    }).attr("transform", function (d) {
                        return "translate(" + (baseXScale(d["timeIndex"])) + ",0)";
                    });
					
					//hide all axis path
					hideAxisPath(svgElement);
						
					//set font here
					
					setTextStyleAndSvgBackGround(svgElement);
						
						
					
				}

                stackChartLegend.append("text")
                    .attr("x", xTextLegend)
                    .attr("y", 9)
                    .attr("dy", ".35em")
                    .style("text-anchor", "start")
                    .attr("class", function (d) {
                    return "legend-text " + " " + legendNameMap[d];
                })
                    .text(function (d) {
                    return d;
                });
				
				//hide all axis path
				hideAxisPath(svgElement);
					
				//set font here
				
					setTextStyleAndSvgBackGround(svgElement);
					
				
            },
			/*
				things left make xScale generic
				ticks spacing
			*/
			cricketAnalysis:function(cnfg){
				var marginCrickedAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.2,top:height*0.2,chartSeparator:5,xScalePaddingTop:height*0.1,yScalePaddingLeft:width*0.08};
				
				var scaleWidth=width-marginCrickedAnalChart.left-marginCrickedAnalChart.right;
				var scaleHeight=height-marginCrickedAnalChart.top-marginCrickedAnalChart.bottom;
				
				//var chartWidth=(scaleWidth)-marginCrickedAnalChart.chartSeparator;
				var overAxisStartPos=scaleHeight+marginCrickedAnalChart.chartSeparator;
				var heightOverAxis=(marginCrickedAnalChart.bottom/3);
				
				var wicketAxisStartPos=overAxisStartPos+heightOverAxis +marginCrickedAnalChart.chartSeparator;
				var wicketAxisHeight=marginCrickedAnalChart.bottom-heightOverAxis;
				 
				var tital = cnfg.data.tital; 
				var titalColor = cnfg.data.titalColor;
				var yData=cnfg.data.yData;
				var xData=cnfg.data.xData;
				var xDatacolor = cnfg.data.xDatacolor;
				var specialXData = cnfg.data.specialXData;
				var specialDataLabel = cnfg.data.specialDataLabel;
				var specialData = cnfg.data.specialData;
				var specialXDataColor = cnfg.data.specialXDataColor;
				var specialXDataLabel = cnfg.data.specialXDataLabel;
				var xLabelColor =  cnfg.data.xLabelColor;
				var yLabel = cnfg.data.yLabel;
				var specialDataLabelOfWicket = cnfg.data.specialDataLabelOfWicket;
				var colorArray=cnfg.colorArray;
				var xFieldName=cnfg.xFieldName;
				var yFieldName=cnfg.yFieldName;
				var axisColor=cnfg.axisColor;
				var tickColor=cnfg.data.textColor;
				var fontStyle=cnfg.data["font-style"];
				var ballSize =10,wicketWidth=30,wicketHeight=50,legendWidth=14,legendHeight=14,legendSize=14;
				//make Array of data
				var data=[];
				var loopIterator=yData.length>xData.length?yData:xData;
				
				for(var i=0;i<loopIterator.length;i++){
					var obj={};
					if(yData[i]){
						obj["y"]=yData[i];
					}else{
						//obj["y"]=0;
					}
					
					if(xData[i]){
						obj["x"]=xData[i];
					}else{
						//obj["x"]=xData[xData.length-1]+1;
					}
					if(specialXData[i])
					{
						obj["specialX"]=specialXData[i];
					}
					
					obj["timeIndex"]=i;
					data.push(obj);
				}			
				
				xScale =d3.scale.linear()
                    .range([(0),scaleWidth]);
				
				var minX=d3.min(data,function(d){
								return d["x"];
						 });
						 
				var maxX=d3.max(data,function(d){
								return d["x"];
							});		
				
				xScale.domain([0,maxX]);
				
				yScale =d3.scale.linear()
                    .range([(scaleHeight),5.5]);
				
				var minYScale=d3.min(data,function(d){
								return d["y"];
							});
				
				var maxYScale=d3.max(data,function(d){
								return d["y"];
							});
				
				maxYScale = maxYScale * 1.5;			
				
				yScale.domain([0,maxYScale]);
				
				svgElement = svgElement.append("g")
                    .attr("transform", "translate(" + marginCrickedAnalChart.left + "," + marginCrickedAnalChart.top + ")");

				xAxis = d3.svg.axis().scale(xScale)
                    .orient("bottom").ticks(10);


                yAxis = d3.svg.axis().scale(yScale)
                    .orient("left").tickValues(d3.range(3, maxYScale, maxYScale/4));
				
				var tooltip = d3.select("body")
								.append("div")
								.style('background','rgba(0,0,0,.6)')
								.style("position", "absolute")
									//.style("z-index", -1)
								.style("visibility", "hidden")
								.style("font-family",'calibri')
								.style("font-style",'normal')
								.style("color",'white')
								.style('padding','5px')
								.text("a simple tooltip"); 
				
				var GridLineLImage = svgElement.append("g")
						  .attr("class","GridLineLImage");
			/*	GridLineLImage.append("image")
							  .attr('x',-marginCrickedAnalChart.yScalePaddingLeft)
							  .attr('width',scaleWidth+marginCrickedAnalChart.yScalePaddingLeft+15)
						      .attr('height',scaleHeight)
						      .attr("xlink:href",'graph-base.png');*/
			
				var titalGroupOfTeam = svgElement.append("g")
						  .attr("class","tital-Group-of-team")
						  .attr("transform","translate("+(-marginCrickedAnalChart.yScalePaddingLeft)+","+(-marginCrickedAnalChart.top/1.5)+")");
				
				var gradientTital = titalGroupOfTeam.append("svg:defs")
									.append("svg:linearGradient")
									.attr("id", "gradientTital")
									.attr("x1", "0%")
									.attr("y1", "0%")
									.attr("x2", "100%")
									.attr("y2", "100%")
									.attr("spreadMethod", "pad")
								//	.attr("gradientUnits", "userSpaceOnUse")
									.attr("gradientTransform","rotate(45)");

				gradientTital.append("stop")
					.attr("offset", "0")
					.attr("stop-color", "#0e0c1a");
				gradientTital.append("stop")
					.attr("offset", "0.5")
					.attr("stop-color", "#414463");

				gradientTital
					.append("stop")
					.attr("offset", "1")
					.attr("stop-color", "#0e0c1a");
				
				titalGroupOfTeam.append('rect')
						  .attr("width",(scaleWidth+marginCrickedAnalChart.yScalePaddingLeft+15))
						  .attr("height",marginCrickedAnalChart.top/1.7)
						  .attr("fill","url(#gradientTital)");
				titalGroupOfTeam.append('text')
								.attr('x',30)
								.attr('y',30)
								.style("font-size",'22')
								.style("fill",titalColor)
								.style("font-family",fontStyle)
								.text(tital[0]+" v "+tital[1]);
			/*	var titalGroupOfGround = svgElement.append("g")
						  .attr("class","tital-Group-of-ground")
						  .attr("transform","translate("+(scaleWidth+15-marginCrickedAnalChart.yScalePaddingLeft)/2+","+(-marginCrickedAnalChart.top/1.5)+")");
				titalGroupOfGround.append('rect')
						  .attr("width",(scaleWidth+marginCrickedAnalChart.yScalePaddingLeft+15)/2)
						  .attr("height",marginCrickedAnalChart.top/1.7)
						  .attr('fill','#333c67');
				var GroundDetailText = tital[3]+"<br>"+tital[2];
				titalGroupOfGround.append('text')
								.attr('x',16)
								.attr('y',16)
								.style("font-size",'15')
								.style("fill",'white')
								.style("font-family",fontStyle)
								.html(GroundDetailText);*/
				
				var overAxis=svgElement.append("g")
						  .attr("class","over-axis-grouping");
						 // alert(overAxisStartPos);
						  
				var overAxisHeading=overAxis.append("rect")
											  .attr("class","over-axis-heading")
											  .attr("x",(-marginCrickedAnalChart.yScalePaddingLeft))
											  .attr("y",overAxisStartPos)
											  .attr("height",(heightOverAxis))
											  .attr("width",marginCrickedAnalChart.yScalePaddingLeft)
											  .attr("fill","#131e4c");
											  
				
				overAxis.append("text")
							  .attr("x",((-marginCrickedAnalChart.yScalePaddingLeft)/2))
							  .attr("y",(overAxisStartPos+(heightOverAxis/2)))
							  .attr("dy",".35em")							  
							  .attr("text-anchor","middle")
							  .text("OVERS")
							  .attr('fill',xLabelColor)
							  .style('font-weight',400)
							  .style("font-family",'Arial Black');
					
				var overScalegroup=overAxis.append("g").attr("class","over-scale-group").attr("transform", "translate(" + 0 + "," + (overAxisStartPos) + ")");
				
		var gradientOverAxis = overScalegroup.append("svg:defs")
									.append("svg:linearGradient")
									.attr("id", "gradientOverAxis")
									.attr("x1", "0%")
									.attr("y1", "0%")
									.attr("x2", "100%")
									.attr("y2", "100%")
									.attr("spreadMethod", "pad")
								//	.attr("gradientUnits", "userSpaceOnUse")
									.attr("gradientTransform","rotate(90)");

				gradientOverAxis.append("stop")
					.attr("offset", "0")
					.attr("stop-color", "#182051");
				gradientOverAxis.append("stop")
					.attr("offset", "0.5")
					.attr("stop-color", "#8289b5");

				gradientOverAxis
					.append("stop")
					.attr("offset", ".8")
					.attr("stop-color", "#182051");
				overScalegroup.append("rect")
						.attr("x",0)
						.attr("y",0)
						.attr("width",(scaleWidth+15))
						.attr("height",(heightOverAxis))
						.attr("fill","url(#gradientOverAxis)");
						
							  	
				var xAxisRef=overScalegroup.call(xAxis);
				d3.select('.over-scale-group').attr('fill','none');							 

				//xAxisRef.selectAll(".tick").attr("transform", "translate(" + (heightOverAxis/2) + "," + 0 + ")");
				
				xAxisRef.selectAll("text").attr("dy",".35em").text(function(d){
					if(parseInt(d) == 0){
						return "";
					}else{
						return d;
					}
				})
				.attr("transform", "translate(" + (0) + "," + (heightOverAxis/6) + ")")
				.style("fill","white")
				.style("font-family",fontStyle);
				
				
				var wicketAxisGroup=svgElement.append("g")
						  .attr("class","wicket-axis");
				
				var wicketAxisHeading=	wicketAxisGroup.append("rect")
														.attr("class","wicket-axis-heading")
														.attr("x",(-marginCrickedAnalChart.yScalePaddingLeft))
														.attr("y",wicketAxisStartPos)
														.attr("height",(heightOverAxis*3))
														.attr("width",marginCrickedAnalChart.yScalePaddingLeft)
														.attr("fill","#9c9ca6");
				wicketAxisGroup.append("image")
								.attr("x",(-marginCrickedAnalChart.yScalePaddingLeft/1.5))
								.attr("y",(wicketAxisStartPos))
								.attr("width",wicketWidth)
								.attr("height",wicketHeight)
								.attr("xlink:href",specialDataLabelOfWicket);
								
				var wicketScaleGroup=wicketAxisGroup
									 .append("g")
									 .attr("class","wicket-scale-group")
									 .attr("transform", "translate(" + 0 + "," + (wicketAxisStartPos) + ")");
				
			    wicketScaleGroup.append("rect")
				                .attr('class','show-wicket-in-over')
								.attr("x",0)
								.attr("y",0)
								.attr("width",(scaleWidth+15))
								.attr("height",(heightOverAxis*2))
								.attr("fill","#9c9ca6");
				var wicketsPerOver = [];
				var batsMan=[];
				for(key in specialData)
				{
					for(nestedKey in specialData[key])
					{
				     	for(batsman in specialData[key][nestedKey]){
							batsMan.push(batsman);
							wicketsPerOver.push(key);
						}
					}
					
				}	
				wicketScaleGroup.selectAll('img')
					.data(batsMan)
					.enter()
					.append("image")
					.attr("value",function(d,i){return d})
					.attr("x",function(d, i)
					{
				     	return   xScale(wicketsPerOver[i])-5
					})
					.attr("y",function(d,i)
					{
						var count =0 ;
						for(var index = i ;index>=0 ; index--)
						{
							if(wicketsPerOver[index]==wicketsPerOver[i])
							{
								count++;
							}
						}
						return count*(ballSize*1.1)-ballSize;
					})
					.attr("width",ballSize)
					.attr("height",ballSize)
					.attr("fill","red")
					.attr("xlink:href",specialDataLabel)
					.on("mouseover",function()
					{
					outerLoop:	for(key in specialData)
								{
									for(nestedKey in specialData[key])
									{
										for(batsman in specialData[key][nestedKey])
										{
											if(batsman==d3.select(this).attr('value'))
											break outerLoop;
										}
									}
								}	
							tooltip.style("visibility", "visible")
						   .style("top", (event.pageY-10)+"px")
					       .style("left",(event.pageX+10)+"px")
						   .text(d3.select(this).attr('value')+" "+specialData[key][nestedKey][batsman]);
					//	tooltip.style("visibility", "visible");
					//	getToolTipForShowWicketStatus(d3.select(this).attr('value'))
					})
					.on("mouseout",function(){tooltip.style("visibility", "hidden")});			
								
				
				
                var yAxisElem = svgElement.append('g')
                    .attr('class', 'y axis')
                    .attr("transform", "translate(" + (-marginCrickedAnalChart.yScalePaddingLeft) + "," + 0 + ")")
                    .attr("stroke", axisColor)
                    .attr("fill", 'none');
					
					yAxis.tickSize(0,50);
		
		/*		yAxisElem.append("image")
				         .attr("x",0)
						 .attr("y",0)
						 .style("stroke",'none')
						 .attr("height",scaleHeight)
						 .attr("width",marginCrickedAnalChart.yScalePaddingLeft)
						 .attr("xlink:href",'left-side-pattern.png');*/
			var gradientYAxis = yAxisElem.append("svg:defs")
									.append("svg:linearGradient")
									.attr("id", "gradientYAxis")
									.attr("x1", "0%")
									.attr("y1", "0%")
									.attr("x2", "100%")
									.attr("y2", "100%")
									.attr("spreadMethod", "pad")
								//	.attr("gradientUnits", "userSpaceOnUse")
									.attr("gradientTransform","rotate(45)");

				gradientYAxis.append("stop")
					.attr("offset", "0")
					.attr("stop-color", "#9c9ca6");
				gradientYAxis.append("stop")
					.attr("offset", "0.5")
					.attr("stop-color", "#ffffff");

				gradientYAxis
					.append("stop")
					.attr("offset", "1")
					.attr("stop-color", "#9c9ca6");		

				yAxisElem.append("rect")
						 .attr("class","run-axis")
						 .attr("x",0)
						 .attr("y",0)
						 .style("stroke",'none')
						 .attr("height",scaleHeight)
						 .attr("width",marginCrickedAnalChart.yScalePaddingLeft)
						 .attr("fill","url(#gradientYAxis)");
				
				var yAxisRef=yAxisElem.call(yAxis);
				yAxisRef.selectAll("text").attr("transform", "translate(" + (marginCrickedAnalChart.yScalePaddingLeft) + "," + 0 + ")").style("fill",tickColor);
				var yAxisLabel = svgElement.append("g")
                    .attr('class', 'yaxislabel')
                    .attr("transform", "translate(" + (-marginCrickedAnalChart.yScalePaddingLeft*2) + "," + 2*marginCrickedAnalChart.bottom + ")");
				yAxisLabel.append("text")
						  .attr("x",(0))
						  .attr("y",(scaleHeight/2))
						  .text(yLabel)
						  .style("font-size",'20')
						  .attr("transform","rotate(-90)")
						  .style("fill",tickColor)
						  .style("font-family",fontStyle);
				
				//width of bars	
				var barWidth=(scaleWidth/(data.length-1)*0.5);
				
				//simple line
				var simpleLine = svgElement.append("g")
								    .attr("class","simple-line")
								    .attr("transform","translate(0,0)");
				//				selectAll(".vline").d
                  simpleLine.append("line")
                    .attr("y1", function (d) {
                    return 0;
                })
                    .attr("y2", function (d) {
                    return scaleHeight;
                })
                    .attr("x1", function (d) {
                    return 0;
                })
                    .attr("x2", function (d) {
                    return 0;
                })
                    .style("stroke", "gray");
                  //  .attr("transform", "translate(" + left + "," + top + ")");	
				//draw bars
				var barRectangle=svgElement.append("g")
								.attr("class","bar-rectangle")
								.attr("transform","translate(0,0)");
		var gradientBar = barRectangle.append("svg:defs")
									.append("svg:linearGradient")
									.attr("id", "gradientBar")
									.attr("x1", "0%")
									.attr("y1", "0%")
									.attr("x2", "100%")
									.attr("y2", "100%")
									.attr("spreadMethod", "pad")
								//	.attr("gradientUnits", "userSpaceOnUse")
									.attr("gradientTransform","rotate(45)");

				gradientBar.append("stop")
					.attr("offset", "0")
					.attr("stop-color", "#9c9ca6");
				gradientBar.append("stop")
					.attr("offset", "0.5")
					.attr("stop-color", "#ffffff");

				gradientBar
					.append("stop")
					.attr("offset", "1")
					.attr("stop-color", "#0e0c1a");		

				barRectangle.append("rect")	
								.attr("class","run-bar")
								.attr("x",0)
								.attr("y",0)
								.style("stroke",'none')
								.attr("height",scaleHeight)
								.attr("width",scaleWidth+15)
								.attr("fill","url(#gradientBar)");
			/*	barGrouping.append("image")
							.attr("x",-20)
								.attr("y",0)
								.style("stroke",'none')
								.attr("height",scaleHeight)
								.attr("width",scaleWidth+55)
								.attr("xlink:href",'graph-base.png');*/
					

							 var gridManager = {
            init: function (svg, height, width, left, top) {
                var hfactor = Math.ceil(height * .2);
                var hRange = Math.ceil(height / hfactor);
                svg.selectAll(".hline").data(d3.range(hRange)).enter()
                    .append("line")
                    .attr("y1", function (d) {
                    return d * hfactor + 6;
                })
                    .attr("y2", function (d) {
                    return d * hfactor + 6;
                })
                    .attr("x1", function (d) {
                    return 0;
                })
                    .attr("x2", function (d) {
                    return width;
                })
                    .style("stroke", "gray")
                    .attr("transform", "translate(" + left + "," + top + ")");
            }

        };
				
				gridManager.init(svgElement, scaleHeight, scaleWidth, marginCrickedAnalChart.xScalePaddingLeft, marginCrickedAnalChart.xScalePaddingTop);
				
				//draw Legend of powerPlay
				var legendGroup = svgElement.append("g")
								.attr("class","legend-grouping")
								.attr("transform","translate("+(marginCrickedAnalChart.yScalePaddingLeft)/4+","+3+")");
					legendGroup.append("rect")	
							   .attr('width',legendWidth)
							   .attr('height',legendHeight)
							   .attr('fill',specialXDataColor);
					legendGroup.append('text')
							   .attr('x',legendHeight+3)
							   .attr('y',legendHeight/2)
							   .style("font-size !important",legendSize)
							   .style("fill",tickColor)
							   .style("font-family",fontStyle)
							   .text(specialXDataLabel);
				
				var barGrouping=svgElement.append("g")
								.attr("class","bar-grouping")
								.attr("transform","translate(0,0)");
				var bars=barGrouping.selectAll(".runs-bar")
							.data(data)
							.enter()
							.append("rect")
							.attr("class","runs-bar")
							.attr("x",function(d){
								return (xScale(d["x"])-barWidth/2);
							
							})
							.attr("y",function(d){
							
								return yScale(d["y"])+barWidth/2-5.5;
							})
							.attr("width",barWidth)
							.attr("height",function(d){
								return 0;
							})
							.attr("fill",function(d,i)
							{
									if(specialXData.indexOf(d["x"])==-1){return xDatacolor;}else{return specialXDataColor;}
							})
							.style("z-index", 51);
				var arcOverBar = barGrouping.selectAll("circle")
											.data(data)
							.enter()
							.append("circle")
							.attr("class","runs-bar")
							.attr("cx",function(d){
								return (xScale(d["x"]));
							
							})
							.attr("cy",function(d){
								return yScale(d["y"])+barWidth/2-5.5;
							})
							.attr("r",barWidth/2)
							.attr("fill",function(d,i)
							{
									if(specialXData.indexOf(d["x"])==-1){return xDatacolor;}else{return specialXDataColor;}
							})
							.style("z-index", 1);

			//	arcOverBar.transition().duration(2500);

				bars.transition().duration(1000).attr("height",function(d){
								return (yScale(0)-yScale(d["y"]));
							});
							

					
				svgElement.selectAll("text").style("font-weight",500);
				
			/*	function getToolTipForShowWicketStatus(keyName)
				{
					tooltip.style("z-index", 1)
							.style("visibility", "visible");
						   .style("top", (event.pageY-10)+"px")
					       .style("left",(event.pageX+10)+"px")
						   .text(keyName);
				}*/
				
				/*	
				yAxis.tickValues(yTickArray);
				
                var yAxisRef=yAxisElem.call(yAxis);
				
					yAxisRef.selectAll(".tick")
                    .each(function (data) {
						svgElement.append("line")
							.attr('class', 'horizontalGridLine')
							.attr('x1', 0)
							.attr('x2', (scaleWidth))
							.attr('y1', function () {
							return yScale(data);
						})
						.attr('y2', function () {
							return yScale(data);
						}).attr('stroke', '#F2F3F3');
					})
					.style("display", function () {
						
					});
				*/	
					/*
					yAxisRef.selectAll("text")
					.text(function(d,i){
						var tickVal="";
						if(parseInt(data1[i]["customY"]) == i){
							tickVal= data1[i][yFieldName];
						}
						return tickVal;
					})
					*/
			},
	/*
				this chart supprot xscale in quantity not for date
				also yscale should be sorted
			*/
			bulletBar:function(cnfg){
				
				var left=0,right;
				var yLabelLeftPer=0;
				if(width<400){
					left=80;
					right=80
					//yLabelLeftPer=0.8;
				}else{
					left=width*0.2;
					right=width*0.2;
					//yLabelLeftPer=0.8;
				}
				
				var marginBulletChart={left:left,right:right,bottom:height*0.2,top:height*0.05,chartSeparator:2,xScalePaddingTop:height*0.1,yScalePaddingLeft:left};
				
				var scaleWidth=width-marginBulletChart.left-marginBulletChart.right;
				var scaleHeight=height-marginBulletChart.top-marginBulletChart.bottom;
				
				var firstChartWidth=(scaleWidth/2)-marginBulletChart.chartSeparator;
				var secondChartStartPos=(scaleWidth/2)+marginBulletChart.chartSeparator;
				
				var data1=cnfg.data1;
				var data2=cnfg.data2;
				var colorArray=cnfg.colorArray;
				var xFieldName=cnfg.xFieldName;
				var yFieldName=cnfg.yFieldName;
				var axisColor=cnfg.axisColor;
				
				/*
				data1.sort(function(a,b){
					if(a[xFieldName]>b[xFieldName]){
						return 1;
					}
					else if(a[xFieldName]<b[xFieldName]){
						return -1;
					}else{
						return 0;
					}
				});
				*/
				
				
				var maxX=data1[0][xFieldName];
				
				//genereate timeIndex in integer
				for(var i=0;i<data1.length;i++){
					data1[i]["timeIndex"]=i;
					data1[i]["customY"]=i;
					
					if(data1[i][xFieldName]>data2[i][xFieldName]){
						maxX=data1[i][xFieldName];
					}else{
						maxX=data2[i][xFieldName];
					}
				}
				
				var yTickArray=[];
				
				for(var i=0;i<data1.length;i++){
					//yTickArray.push(data1[i][yFieldName]);
					yTickArray.push(data1[i]["customY"]);
				}
				
				
				
				xScale =d3.scale.linear()
                    .range([(firstChartWidth), 0]);
				
				var minX=data1[0]["timeIndex"];
				//var maxX=data1[(data1.length-1)]["timeIndex"];		
				
				//var maxX=d3.max(data1,function(d){
					//return d[xFieldName];
				//});
				
				xScale.domain([0,maxX]);
				
				
				var tempXScale=d3.scale.linear()
                    .range([firstChartWidth,0]);
				
				
				var tempMinX=d3.min(data1,function(d){
					return d[xFieldName];
				})
				
				var tempMaxX=d3.max(data1,function(d){
					return d[xFieldName];
				})
				
				tempXScale.domain([0,maxX]);
				
				
				//var baseXScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.5);
                //var tempXScale = d3.scale.ordinal();

                
               // tempXScale.domain(keysArray).rangeRoundBands([0, baseXScale.rangeBand()]);
				
				
				
                yScale =d3.scale.linear()
                    .range([(scaleHeight),0]);
				
				var minYScale=d3.min(data1,function(d){
								return d[yFieldName];
							});
				
				var maxYScale=d3.max(data1,function(d){
								return d["customY"];
							});
				
				//var midPoint=(minYScale+maxYScale)/2;	
				maxYScale = maxYScale * 1.5;			
				
				yScale.domain([0,maxYScale]);
				
				svgElement = svgElement.append("g")
                    .attr("transform", "translate(" + marginBulletChart.left + "," + (-marginBulletChart.top) + ")");

				xAxis = d3.svg.axis().scale(xScale)
                    .orient("bottom").ticks(10).tickSize(5, 0);


                yAxis = d3.svg.axis().scale(yScale)
                    .orient("left");
					
				var ticksInterval=maxX/5;
				xAxis.tickValues(d3.range(0,maxX,(ticksInterval)));
                var xAxisRef=svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + 0 + "," + (scaleHeight+marginBulletChart.xScalePaddingTop) + ")")
                    .attr("stroke", axisColor)
                    .attr("fill", 'none')
                    .call(xAxis)
					
					
					
					
                var yAxisElem = svgElement.append('g')
                    .attr('class', 'y axis')
                    .attr("transform", "translate(" + (-marginBulletChart.yScalePaddingLeft*0.05) + "," + 0 + ")")
                    .attr("stroke", axisColor)
                    .attr("fill", 'none');
				
				yAxis.tickValues(yTickArray);
				
                var yAxisRef=yAxisElem.call(yAxis);
				
					yAxisRef.selectAll(".tick")
                    .each(function (data) {
						svgElement.append("line")
							.attr('class', 'horizontalGridLine')
							.attr('x1', 0)
							.attr('x2', (scaleWidth))
							.attr('y1', function () {
							return yScale(data);
						})
						.attr('y2', function () {
							return yScale(data);
						}).attr('stroke', '#F2F3F3');
					})
					.style("display", function () {
						
					});
					
					yAxisRef.selectAll("text")
					.text(function(d,i){
						var tickVal="";
						if(parseInt(data1[i]["customY"]) == i){
							tickVal= data1[i][yFieldName];
						}
						return tickVal;
					})
				
				var barClassName=yFieldName+"-1";
				var barGrouping1=svgElement.append("g")
								.attr("class","bar-grouping");
				
				var heightOfBars=((scaleHeight/(data1.length-1))*0.5);
				var barGroupRangeBand=heightOfBars/2;
				var barGrouping1Ref=barGrouping1.selectAll("."+barClassName)
							.data(data1)
							.enter()
							.append("rect")
							.attr("class",""+barClassName)
							.attr("x",function(d){
								return xScale(0);
							})
							.attr("y",function(d){
								return yScale(d["customY"])-(barGroupRangeBand);
							})
							
							.attr("height",heightOfBars)
							.attr("width",function(d){
								return 0;
							})
							.on("mouseover",function(d,i){
								//var yHeadingValueMap=[{"headingName":yFieldName,"headingVal":data1[i][yFieldName]}];
								//toolTipManager.showToolTip(d3.event,"",(xFieldName +" "+d[xFieldName]), false,yHeadingValueMap);
								var yHeadingValueMap=[{"headingName":xFieldName,"headingVal":d[xFieldName]}];
								toolTipManager.showToolTip(d3.event,"",(yFieldName +" "+data1[i][yFieldName]), false,yHeadingValueMap);
								
								d3.select(this).style("fill","yellow");
							})
							.on("mouseleave",function(){
								toolTipManager.hideTooTip();
								d3.select(this).style("fill",colorArray[0]);
							});
							
				barGrouping1Ref
				.transition()
				.duration(1000)
				.attr("x",function(d){
					return (tempXScale(d[xFieldName]));
				})
				.attr("width",function(d){
					return (xScale(0)-tempXScale(d[xFieldName]));
				})
				.attr("fill",function(){
					return colorArray[0];
				})	;			
				
												
				//second chart 
				
				
				//genereate timeIndex in integer
				for(var i=0;i<data2.length;i++){
					data2[i]["timeIndex"]=i;
					data2[i]["customY"]=i;
				}
				
				var yTickArray2=[];
				
				for(var i=0;i<data2.length;i++){
					//yTickArray.push(data1[i][yFieldName]);
					yTickArray2.push(data2[i]["customY"]);
				}
				
				var xScale2 =d3.scale.linear()
                    .range([secondChartStartPos,scaleWidth]);
				
				var minX2=data2[0]["timeIndex"];
				//var maxX2=data1[(data1.length-1)]["timeIndex"];		
				
				var maxX2=d3.max(data2,function(d){
					return d[xFieldName];
				});		
				

				xScale2.domain([0,maxX2]);
				
				var xAxis2 = d3.svg.axis().scale(xScale2)
                    .orient("bottom").ticks(10).tickSize(5, 0);
				
			
				var ticksInterval=maxX2/5;
				xAxis2.tickValues(d3.range(0,maxX2,(ticksInterval)));
				//var tickArray=tickController.getTickArray(0,maxX2,3);
				//xAxis2.tickValues(tickArray);
				
				svgElement.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + 0 + "," + (scaleHeight+marginBulletChart.xScalePaddingTop) + ")")
                    .attr("stroke", axisColor)
                    .attr("fill", 'none')
                    .call(xAxis2)
					.selectAll("text")
                    .text(function (d, i) {
						
						var tickVal="";
						if(i == 0){
							return tickVal;
						}else{
							return d;
						}
					});
					
					
                var yAxisElem2 = svgElement.append('g')
                    .attr('class', 'y axis')
                    .attr("transform", "translate(" + (scaleWidth+marginBulletChart.yScalePaddingLeft*0.1) + "," +(0)+ ")")
                    .attr("stroke", axisColor)
                    .attr("fill", 'none');
				
				var yAxis2 = d3.svg.axis().scale(yScale)
                    .orient("right");
					
				//yAxis2.tickValues(d3.range(marginBulletChart.top, scaleHeight,(scaleHeight/9)));
				
				yAxis2.tickValues(yTickArray2);
                var yAxisRef2=yAxisElem2.call(yAxis2);
				yAxisRef2.selectAll("text")
						.text(function(d,i){
							var tickVal="";
							if(parseInt(data2[i]["customY"]) == i){
								tickVal= data2[i][yFieldName];
							}
							return tickVal;
						})
				
				
				var tempXScale2=d3.scale.linear()
                    .range([0,(scaleWidth-secondChartStartPos)]);
				
				
				var tempMinX2=d3.min(data2,function(d){
					return d[xFieldName];
				})
				
				var tempMaxX2=d3.max(data2,function(d){
					return d[xFieldName];
				})
				
				tempXScale2.domain([0,maxX]);
					
				var barGrouping2=svgElement.append("g")
											.attr("class","bar-grouping");
				
				var barClassName2=yFieldName+"-2";	
				var heightOfBars=((scaleHeight/(data1.length-1))*0.5);
				var barGroupRangeBand1=heightOfBars/2;
				var barGrouping2Ref=barGrouping2.selectAll("."+barClassName2)
							.data(data2)
							.enter()
							.append("rect")
							.attr("class",""+barClassName2)
							.attr("x",function(d){
								return (xScale2(0));
							})
							.attr("y",function(d){
								return yScale(d["customY"])-barGroupRangeBand1;
							})
							.attr("height",heightOfBars)
							.attr("width",function(d){
								return 0;;
							})
							.on("mouseover",function(d,i){
								var yHeadingValueMap=[{"headingName":xFieldName,"headingVal":d[xFieldName]}];
								toolTipManager.showToolTip(d3.event,"",(yFieldName +" "+data1[i][yFieldName]), false,yHeadingValueMap);
								d3.select(this).style("fill","yellow");
							})
							.on("mouseleave",function(){
								toolTipManager.hideTooTip();
								d3.select(this).style("fill",colorArray[1]);
							});;
							
				barGrouping2Ref
				.transition()
				.duration(1000)
				.attr("width",function(d){
					return tempXScale2(d[xFieldName]);
				})
				.attr("fill",function(){
					return colorArray[1];
				});
				
				//y inidcation label
				var yAxisPath=yAxisRef.selectAll("path");
				var yPathLength=yAxisPath.node().getTotalLength();
				
				var pixcelPerChar=6;
				var yTotalPixcel=cnfg.yLabel.length*pixcelPerChar;
				var yLabelTop=((yPathLength)/2+yTotalPixcel/2);
				var yLabelLeft=-(margin.left)*5.5;
				var yLabelLeft1=(margin.left)*5.5;
				
				axisLabelController.appendLabel(cnfg.yLabel,yLabelLeft,yLabelTop,-90,yAxisRef,textStyleConfg.yLabelColor,600);
				axisLabelController.appendLabel(cnfg.yLabel,yLabelLeft1,yLabelTop,-90,yAxisRef2,textStyleConfg.yLabelColor,600);
				
				//x indication label
				var xLabelLength=cnfg.xLabel.length*pixcelPerChar;
				var xLabelLeft=scaleWidth/2-xLabelLength/2;
				var xLabelTop=scaleHeight*0.15;
				axisLabelController.appendLabel(cnfg.xLabel,xLabelLeft,xLabelTop,0,xAxisRef,textStyleConfg.xLabelColor,600);
				//hide all axis path
				hideAxisPath(svgElement);
					
				//set font here
				
					setTextStyleAndSvgBackGround(svgElement);
						  
							
			},

            setYSclae: function (yField1, yField2) {
                var minAndMax = d3.extent(data, function (d) {
                    return d[yField1];
                });

                var minAndMax1 = d3.extent(data, function (d) {
                    return d[yField2];
                });


                var min1 = minAndMax[0];
                var max1 = minAndMax[1];

                var min2 = minAndMax1[0];
                var max2 = minAndMax1[1];

                var minYScaleTemp, maxYScaleTemp;
                if (min1 > min2) {
                    minYScaleTemp = min2;
                } else {
                    minYScaleTemp = min1;
                }

                if (max1 > max2) {
                    maxYScaleTemp = max1;
                } else {
                    maxYScaleTemp = max2;
                }

                minYScale = minYScaleTemp;
                maxYScale = maxYScaleTemp;
                yScale.domain([minYScale, (maxYScale)]);

            },
			
			barWithLogo:function(cnfg){
				
				width = $(selectorElement).width();
				height = $(selectorElement).height()*0.7;
				//textStyleConfg=styleConfg;
				
				selectorId = $(selectorElement).attr("id")
				$("#"+selectorId).empty();
				
				var svgClassName = selectorId + "_svg";
				
				console.error("id "+selectorId);
				svgElement = d3.select("#" + selectorId)
					.append("svg")
					.attr("width", '100%')
					.attr("height", height)
					.attr("class",svgClassName)
					.attr('viewBox','0 0 '+Math.max(width,height) +' '+Math.min(width,height) )
					.attr('preserveAspectRatio','xMinYMin')
					
				
				var marginCrickedAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.05,top:height*0.07,chartSeparator:5};
				
				var scaleWidth=width-marginCrickedAnalChart.left-marginCrickedAnalChart.right;
				var scaleHeight=height-marginCrickedAnalChart.top-marginCrickedAnalChart.bottom;
				
				var tital = cnfg.data.tital; 
				var titalColor = cnfg.data.titalColor;
				var yData=cnfg.data.yData;
				var xData=cnfg.data.xData;
				var imagePathArray=cnfg.data.imagePathArray;
				var xAxisLabelArray=cnfg.data.xData;
				var color=cnfg.data.color;
				var xIndicationLabel=cnfg.data.xIndicationLabel;
				var yIndicationLabel=cnfg.data.yIndicationLabel;
				//var xDatacolor = cnfg.data.xDatacolor;
				//var specialXData = cnfg.data.specialXData;
				//var specialDataLabel = cnfg.data.specialDataLabel;
				//var specialData = cnfg.data.specialData;
				//var specialXDataColor = cnfg.data.specialXDataColor;
				//var specialXDataLabel = cnfg.data.specialXDataLabel;
				//var xLabelColor =  cnfg.data.xLabelColor;
				//var yLabel = cnfg.data.yLabel;
				//var specialDataLabelOfWicket = cnfg.data.specialDataLabelOfWicket;
				//var colorArray=cnfg.colorArray;
				//var xFieldName=cnfg.xFieldName;
				//var yFieldName=cnfg.yFieldName;
				//var axisColor=cnfg.axisColor;
				//var tickColor=cnfg.data.textColor;
				//var fontStyle=cnfg.data["font-style"];
				//var ballSize =10,wicketWidth=30,wicketHeight=50,legendWidth=14,legendHeight=14,legendSize=14;
				//make Array of data
				var data=[];
				var loopIterator=yData.length>xData.length?yData:xData;
				var xAxisTickValues=[];
				for(var i=0;i<loopIterator.length;i++){
					var obj={"timeIndex":i,"x":xData[i],"y":yData[i],"imagePath":imagePathArray[i],'name':xAxisLabelArray[i]}
					data.push(obj);
					xAxisTickValues.push(i);
				}			
				
				xScale =d3.scale.linear()
                    .range([(0),scaleWidth-marginCrickedAnalChart.right]);
				
				var minX=data[0]["timeIndex"];
						 
				var maxX=data[data.length-1]["timeIndex"];
				
				xScale.domain([0,maxX]);
				
				yScale =d3.scale.linear()
                    .range([(scaleHeight),0]);
				
				var minYScale=d3.min(data,function(d){
								return d["y"];
							});
				
				var maxYScale=d3.max(data,function(d){
								return d["y"];
							});
				
				maxYScale = maxYScale * 1.5;			
				
				yScale.domain([0,maxYScale]);
				
				svgElement = svgElement.append("g")
                    .attr("transform", "translate(" + marginCrickedAnalChart.left + "," + marginCrickedAnalChart.top + ")");

				xAxis = d3.svg.axis().scale(xScale)
                    .orient("bottom").ticks(10);


                yAxis = d3.svg.axis().scale(yScale)
                    .orient("left");
				
				var xAxisElm=svgElement.append("g")
				.attr('class', 'x axis')
                .attr("transform", "translate(" + (0) + "," + (scaleHeight) + ")");
				
				var yAxisElm=svgElement.append("g")
				.attr('class', 'y axis')
                .attr("transform", "translate(" + (0) + "," + (0) + ")");
				
				xAxis.tickValues(xAxisTickValues);
				
				//xAxisElm.call(xAxis);
				
				
				yAxisElm.call(yAxis);
				
				
				var barWidth=(scaleWidth/data.length)*0.5;
				
				//create bars
				
				var barGrouping=svgElement.append("g")
								.attr("class","bar-grouping");
								
				var bars=barGrouping.selectAll(".bar")
							.data(data)
							.enter()
							.append("rect")
							.attr("width",barWidth)
							.attr("height",function(d,i){
								return 0;
							})
							.attr("x",function(d,i){
								
								return xScale(d["timeIndex"]);
								
							})
							.attr("y",function(d,i){
								return yScale(d.y);
							})
							.attr("fill",function(d,i){
								return color;
							})
							.on("mouseover",function(d,i){
								var yHeadingValueMap=[{"headingName":yIndicationLabel,"headingVal":d["y"]}];
								toolTipManager.showToolTip(d3.event,"",(xIndicationLabel +" "+d["x"]), false,yHeadingValueMap);
								d3.select(this).style("fill","yellow");	
							})
							.on("mouseleave",function(){
								toolTipManager.hideTooTip();
								d3.select(this).style("fill",color);
							});
				
				bars
				.transition()
				.duration(1000)
				.attr("height",function(d,i){
					return (yScale(0)-yScale(d.y))
				})
				;
				
				var xScaleOuterDiv=d3.select("#"+selectedElementId).append("div").style("left",(xScale(0))).style("width",scaleWidth).style("height",height*0.4);
				
				var xScaleGrouping=xScaleOuterDiv.selectAll(".xScalebar")
								  .data(data)
								  .enter()
								  .append("div")
								  .style("width",barWidth)
								  .style("height",(height*0.2))
								  
								  .style("left",function(d,i){
										return 0;
								  })
								  /*
								  .attr("y",function(d,i){
										return yScale(d["y"]);
								  })
								  */
								  .style("position","absolute")
								  .style("display","inline-block");
								  
								  
				var logoImgArray=xScaleGrouping.append("img")
							/*
							  .attr("x",function(d,i){
									return xScale(d["timeIndex"])-(barWidth/2.9)
							  })
							.attr("y",function(d,i){
								return 0;
							})
							*/
							.style("width",barWidth)
							.style("height",(height*0.2))
							.attr("src",function(d,i){
								return d.imagePath;
							})
							.on("mouseover",function(d,i){
								var yHeadingValueMap=[{"headingName":yIndicationLabel,"headingVal":d["y"]}];
								toolTipManager.showToolTip(d3.event,"",(xIndicationLabel +" "+d["x"]), false,yHeadingValueMap);
								
							})
							.on("mouseleave",function(){
								toolTipManager.hideTooTip();
								
							});
				
				xScaleGrouping
				.transition()
				.duration(1000)
				.style("left",function(d,i){
					if(i==0)	
					return marginCrickedAnalChart.left;
					else
					return (marginCrickedAnalChart.left)+xScale(i);
				});
				
				xScaleGrouping.append("div")
							.style("width",barWidth)
							.style("height",(height*0.1))
							.style("margin-top",height*0.05)
							.style("left",function(d,i){
									if(i==0)	
									return marginCrickedAnalChart.left;
									else
									return (marginCrickedAnalChart.left)+xScale(i);
							})
							.html(function(d,i){
								return d.name;
							})
							.style("word-wrap","break-word");	
							  	
				//hide all axis path
				hideAxisPath(svgElement);
					
				//set font here
				
				setTextStyleAndSvgBackGround(svgElement);
				
			}
        };

        var drawSquare = {
            squareChart: function (options) {
                var options = $.extend({
                    'color': 'red',
                        'axisColor': 'blue',
                        'data': [],
                        'xFieldName': '',
                        'yFieldName': '',
                        'widthOfSquare': 20
                }, options);

                var data;
                if (options.data.length == 0) {
                    data = chartData;
                } else {
                    data = options.data;
                }


                var xFieldNameSquare;
                var yFieldNameSquare;
                if (options.xFieldName == "") {
                    xFieldNameSquare = xFieldName;
                } else {
                    xFieldNameSquare = options.xFieldName;
                }

                if (options.yFieldName == "") {
                    yFieldNameSquare = yFieldName;
                } else {
                    yFieldNameSquare = options.yFieldName;
                }

                var differenceSlab = 10;
                var widthOfEachBar = Math.floor((width - margin.scale) / (data.length));
                var elementId = $(selectorElement).attr("id");
                var className = elementId + "_square_" + yFieldNameSquare;

                var squareDimesion = options.widthOfSquare;
                var percentageFctor = 35;

                svgElement.selectAll("." + className)
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("class", className)
                    .attr("x", function (d, i) {
                    return (xScale(parseDate.parse(d[xFieldNameSquare])) - ((squareDimesion * percentageFctor) / 100) + 7);
                })
                    .attr("y", function (d) {
                    return (yScale(d[yFieldNameSquare]) - 3 * ((squareDimesion * (percentageFctor)) / 100));
                })
                    .attr("width", squareDimesion)
                    .attr("height", function (d) {
                    return squareDimesion;
                })
                    .attr("fill", options.color)
                    .on("mouseover", function (d) {
                    var yFieldVal = d[yFieldNameSquare];
                    d3.select(this)
                        .attr('width', (squareDimesion + 5))
                        .attr('height', (squareDimesion + 5));
                    attachToolTip.showToolTip(d3.event);
                })
                    .on("mouseleave", function (d) {
                    var yFieldVal = d[yFieldNameSquare];
                    d3.select(this)
                        .attr('width', (squareDimesion))
                        .attr('height', (squareDimesion));
                    attachToolTip.hideTooTip();
                });

                if ($(selectorElement).find(".axis").length == 0) {
                    svgElement.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (height - margin.scale + 10) + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(xAxis);

                    svgElement.append("g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (width - margin.scale + 10) + "," + 3 + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(yAxis);
                }

            }

        }

        var drawCircle = {
            circleChart: function (options) {
                var options = $.extend({
                    'color': 'red',
                        'axisColor': 'blue',
                        "r": 10,
                        'data': []
                }, options);
                var data;
                if (options.data.length == 0) {
                    data = chartData;
                } else {
                    data = options.data;
                }

                var differenceSlab = 10;
                var widthOfEachBar = Math.floor((width - margin.scale) / (data.length));
                var elementId = $(selectorElement).attr("id");
                var className = elementId + "_circle";
                var squareDimesion = 20;
                var percentageFctor = 35;
				svgElement.selectAll("." + className)
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("class", className)
                    .attr("cx", function (d, i) {
						return (xScale(i) + options.r/2);
					})
                    .attr("cy", function (d) {
						return (yScale(d[yFieldName]) );
					})
                    .attr("r", options.r)
					.attr("fill",function(){return options.color})
                    .on("mouseover", function (d, i) {
					
						//$("#tooltipChart").show();
						console.log(JSON.stringify(d));
						
						//toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, "Money : " + d.id + "    Date : " + d.doj);
						var yHeadingValueMap=[{"headingName":cfgArea.yAxisIndicationLabel,"headingVal":d[yFieldName]}];
							
						toolTipManager.showToolTip(d3.event, "",(d[xFieldName]), false,yHeadingValueMap);
							var yFieldVal = d[yFieldName];
							d3.select(this)
								.attr('r', (options.r + 5));
							
						d3.select(this).attr("stroke",("cyan"));
						d3.select(this).attr("stroke-width","2").style("opacity","0.5");
						//attachToolTip.showToolTip(d3.event);
					})
                    .on("mouseleave", function (d) {
					
						var yFieldVal = d[yFieldName];
						d3.select(this)
							.attr('r', (options.r));
						toolTipManager.hideTooTip();
						
						d3.select(this).attr("stroke",("none"));
						d3.select(this).attr("stroke-width","0").style("opacity","1");
					   // attachToolTip.attachToolTip(d3.event);
					});


                if ($(selectorElement).find(".axis").length == 0) {
                    svgElement.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (height - margin.scale + 7) + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(xAxis)
						.selectAll("text")
						.text(function(d){
							return data[d][xFieldName];
						});

                    svgElement.append("g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (width - margin.scale + 5) + "," + 3 + ")")
                        .attr("stroke", options.axisColor)
                        .attr("fill", 'none')
                        .call(yAxis);
                }

            }

        }

		
		var selectorId;
		function init(){
			
			//if (arguments.length == 1) {
			width = $(selectorElement).width();
			height = $(selectorElement).height();
			textStyleConfg=styleConfg;
			
			selectorId = $(selectorElement).attr("id")
			var svgClassName = selectorId + "_svg";
			
			svgElement = d3.select("#" + selectorId)
				.append("svg")
				.attr("width", '100%')
				.attr("height", '100%')
				.attr("class",svgClassName)
				.attr('viewBox','0 0 '+Math.max(width,height) +' '+Math.min(width,height) )
				.attr('preserveAspectRatio','xMinYMin')
				
			if (d3.select("#tooltipChart").empty()) {

                toolTipManager.appendToolTip();
            }	
		}
        
		init();		
				
				
			
            
			

        //} else {
          //  initSvg();
			//textStyleConfg=styleConfg;
        //}


        var drawPieChart = {
            pieChart: function (options) {
                var options = $.extend({

                    'data': []
                }, options);

                var dataset;
                if (options.data.length == 0) {
                    dataset = chartData;
                } else {
                    dataset = options.data;
                }

                var outerRadius = width / 2;
                var innerRadius = 0;
                var arc = d3.svg.arc()
                    .innerRadius(innerRadius)
                    .outerRadius(outerRadius);

                var arcOver = d3.svg.arc()
                    .outerRadius(outerRadius + 10);



                var pie = d3.layout.pie();


                var color = d3.scale.category20();


                var svg = svgElement.append("svg")
                    .attr("width", width)
                    .attr("height", height);


                var arcs = svg.selectAll("g.arc")
                    .data(pie(dataset))
                    .enter()
                    .append("g")
                    .attr("class", "slice")
                    .attr("stroke", "white")
                    .attr("stroke-width", 3)
                    .attr("transform", "translate(" + (outerRadius) + "," + (outerRadius) + ")")
                    .on("mouseover", function (d) {
                    d3.select("#piechartTooltip")
                        .style("left", d3.event.pageX + "px")
                        .style("top", d3.event.pageY + "px")
                        .style("opacity", 10)
                        .select("#value")
                        .text(d.value);

                    d3.select(this)
                        .attr("stroke", "white")
                        .transition()
                        .duration(100)
                        .attr("d", arcOver)
                        .attr("stroke-width", 10);
                })
                    .on("mouseout", function () {

                    d3.select("#piechartTooltip")
                        .style("opacity", 0);

                    d3.select(this).transition()
                        .attr("d", arc)
                        .attr("stroke", "white")
                        .attr("stroke-width", 3)
                });



                arcs.append("path")
                    .attr("fill", function (d, i) {
                    return color(i);
                })
                    .attr("d", arc);

            }

        }



        var pyramidChart={
			drawPyramidChart:function(percent,textLabelsJson,isInvertPyramid,yLabel){
				//Increase the value for increasing width
				var widthFactor = -20;

				//Moving to left 
				//Note: It will decrease the width also
				var movingLeftFactor = 200;
				
				width=width-margin.scale;
				height=height-margin.scale;
				
				scaleX = d3.scale.linear()
				.domain([widthFactor, movingLeftFactor])
				.range([0, width]),

			scaleY = d3.scale.linear()
				.domain([0, 80])
				.range([height, 0]),

			color = d3.scale.category10();
		
			var value =  getCoordinatesFromPercent(sortNumber(percent)).arrayOfPolygons;
			
			var groping;
			if(isInvertPyramid){
				groping=svgElement.append("g")
					  .attr('transform',"translate(" + ((width-width/6)) + "," + (height+height/4) + ") rotate(180)")	;
			
			}else{
				groping=svgElement.append("g")
					  .attr('transform',"translate(" + (width/4) + "," + (margin.scale) + ")")	;
			}
			
			
			groping.selectAll("polygon").data(value)
				.enter().append("polygon")
				.attr("points", function (d) {
								return d.points.map(function (d) {
									return [scaleX(d.x), scaleY(d.y)].join(",");
									}).join(" ");
					})
				.attr("fill", function (d) {
				return color(d.name)
			}).attr("stroke-width", 0)
			.data(value)
			 .on("mouseover", function (d,i) {
				/*
				d3.select("#pyramidTooltip")
					.style("left", d3.event.pageX + "px")
					.style("top", d3.event.pageY + "px")
					.style("opacity", 1)
					.select("#value")
					.text(textLabelsJson[i].accountName + ' : '+textLabelsJson[i].amount);
					*/
					//toolTipManager.showToolTip(d3.event,textLabelsJson[i].amount, "", false,textLabelsJson[i].accountName);
					var yHeadingValueMap=[{"headingName":yLabel,"headingVal":textLabelsJson[i].amount}];
						
					toolTipManager.showToolTip(d3.event,"",(textLabelsJson[i].accountName), false,yHeadingValueMap);
			})
			.on("mouseout", function () {
				// Hide the tooltip
				/*
				d3.select("#pyramidTooltip")
					.style("opacity", 0);  
				*/
				toolTipManager.hideTooTip();	
			});
					
			var legendGrouping=svgElement.selectAll(".pyramidLegendGrouping")
						  .data(color.domain().slice())
						  .enter()
						  .append("g")
						  .attr("class","pyramidLegendGrouping")
						  .attr("transform", function(d, i) { return "translate(" + (width*0.05) + "," + (10+(i*22)) + ")" });
			
			var rectWidth=20;
			var textGap=10;
			var xRectLegend=0;
			var xTextLegend=xRectLegend+rectWidth+textGap;
				
			legendGrouping.append("rect")
						.attr("class","pyramidLegend")
						.attr("width",rectWidth)
						.attr("height",20)
						.attr("x",xRectLegend)
					    .attr("fill",color);
					  	
			legendGrouping.append("text")
				  .attr("x",xTextLegend)
				  .attr("y", 9)
				  .attr("dy", ".35em")
				  .style("text-anchor", "start")
				  .attr("class",function(d,i){
					return "legend-text "+" "+d;
				  })
				  .text(function(d,i) { return textLabelsJson[i].accountName; });  
	
				
			},
			draw3DPyramidSliceChart:function(cfg){
				var jsonData = DataConverter.getValueToPercentageArray(cfg.data);
								
					
				//height = 100;
				//width = 300;
				var outFactorInitial = ( width < height ? width : height);
				outFactor=outFactorInitial*0.60;
				
				var spaceInPyramid = 10;
				var sortedJsonData = [];
				var heightArray = getHeightArrayForData(jsonData);
				var angle = getNewAngle();
				var sideUpFactor = 30;
				var latentHeightArray = getLatentHeightArray(angle, heightArray, 0, sideUpFactor);
				var leftCoordinateX;
				var leftCoordinateY;
				var rightCoordinateX;
				var rightCoordinateY;
				var angleIncrement = 0;
				var colorArray=cfg.colorArray//["#8c564b", "#2ca02c","#d62728","#bcbd22","#1f77b4","#9467bd","#e377c2", "#7f7f7f", "#bcbd22","#1f77b4","#ff7f0e",];	
				var lowerData2 = [ { "x": 0, "y": 400},  { "x":0,  "y": 400}, { "x": 0,  "y": 400}, { "x": 0,  "y": 400}, { "x": 0,  "y": 400}]
				
				
				var lowerData = [ { "x": 200, "y": 400},  { "x": 200,  "y": 200},
								 { "x": 55,  "y": 150}, { "x": 35,  "y": 350}, { "x": 200,  "y": 400}]		
					
				var labelXPoints = [];
				var labelYPoints = [];
				var xNew=0;
				var yNew=0;
				if(width>height){
					xNew=(width-outFactor)/2;
					yNew=(0);
				}
				else{
					xNew=0;
					yNew=(height-outFactor)/2.1;
				}
				//else{}
				var transitionFator={"x":(outFactorInitial-getWidthOfPyramid())/2,"y":(outFactorInitial-getWidthOfPyramid())/2};
				
				
				var lineFunction = d3.svg.line()
										  .x(function(d) { return d.x; })
										  .y(function(d) { return d.y; })
										 .interpolate("linear");
				
				 
				 
				var svgContainer = svgElement
											.append("g")
											.attr("transform", "translate(" + (xNew) + "," + (yNew) + ")");;

				//var transitionFator={"x":(width-getWidthOfPyramid())/2,"y":0};			
			
				var x = (outFactorInitial*.3) +(outFactorInitial *.1);
				var y = outFactorInitial;		
				var intialX = x;
				var intialY = y;
				var heightY = heightArray[0];
				
				var color20 = d3.scale.category20c();
				var newY = y;
				var prevY = 0;
			
				var spacingFactor = spaceInPyramid;
				var flag = 0;
				
				for(var k = 0 ; k < heightArray.length  ; k++)
				{				
					if(k == (heightArray.length - 1))
						flag = 1;
						
					var lineGraph = svgContainer.append("path")
											.attr("d", lineFunction(lowerData2))
											.style("opacity", 0.0)
											
											.attr('fill', function (d, i) {
												return "white";
											})
											.transition().duration(2000).ease("linear")
											.attr("d", lineFunction(getCoordinatesForPyramid(x, newY, heightArray[k], jsonData, 1, sideUpFactor, latentHeightArray, latentHeightArray[k], angle, heightArray, prevY, k, spacingFactor, flag, sortedJsonData[k])))
											
											.style("opacity", 0.7)

											.attr("stroke",	"white")
											.attr("stroke-width", 1)
											
											.attr('fill', function (d, i) {
												return colorArray[k];
												//return color20(+i + +100)
											});
											
					var lineGraph = svgContainer.append("path")
											.attr("d", lineFunction(lowerData2))
											.style("opacity", 0.0)
											.attr('fill', function (d, i) {
												return "white";
											})
											.transition().duration(1500).ease("linear")
											.attr("d", lineFunction(getCoordinatesForPyramid(x, newY, heightArray[k], jsonData, 2, sideUpFactor, latentHeightArray, latentHeightArray[k], angle, heightArray, prevY, k, spacingFactor, flag, sortedJsonData[k])))
											.attr("stroke", "white")
											.style("opacity", 0.5)
											.attr("stroke-width", 0.5)
											.attr('fill', function (d, i) {
												return colorArray[k]
												//return color20(i)
											});
					
					
						
					var lineGraph = svgContainer.append("path")
											.attr("d", lineFunction(lowerData2))
											.style("opacity", 0.0)
											.attr('fill', function (d, i) {
												return "white";
											})
											.transition().duration(1000).ease("linear")
											.attr("d", lineFunction(getCoordinatesForPyramid(x, newY, heightArray[k], jsonData, 3, sideUpFactor, latentHeightArray, latentHeightArray[k], angle, heightArray, prevY, k, spacingFactor, flag, sortedJsonData[k])))
											.style("opacity", 0.3)
											.attr("stroke", "white")
											.attr("stroke-width", 0.3)
											.attr('fill', function (d, i) {
													return colorArray[k];
											});
					
					
					
						newY = y - heightArray[k] - spaceInPyramid;
						y = newY;
						prevY = heightArray[k];
					
					}
				
				var fontSize=outFactor<200?'10px':'12px';
				
				for(var j = 0; j < labelXPoints.length ; j++)
				{
					
					svgContainer.append("path")
											.attr("x", outFactor)
											.attr("y", outFactor)										
											.transition().delay( function(d, i){return 600 *j}).ease("bounce")
											.attr("d", lineFunction(getCoordinatesForLine(labelXPoints[j], labelYPoints[j], heightArray[j], sortedJsonData[j])))
											.attr("stroke", function (d, i) {
													return colorArray[j];
											})
											.attr("stroke-width", 1)
											.attr('fill',"none");			
											
					svgContainer.append("text")						
											.attr("x", outFactor)
											.attr("y", outFactor)
											.transition().delay( function(d, i){return 600 *j}).ease("bounce")
											.attr("x", labelXPoints[j] + 0.15* outFactor)
											.attr("y", labelYPoints[j] + (0.1*outFactor) + heightArray[j]/2)
											.text( cfg.labels[j]+":" + cfg.data[j]+" "+cfg.unit)										
											.attr("font-family", "sans-serif")
											.attr("font-size", fontSize)
											.attr("fill", colorArray[j]);
				}
				
				function getWidthOfPyramid(){
					return ((0.6 * outFactor)*2);
				}
				
				function getNewAngle()
				{
					var degrees = Math.atan( (outFactor / (0.6 * outFactor)) ) * 180/Math.PI;
					return degrees ;			
				}			
						
				//working
				function sortNumber(data) 
				{
					//alert(data);
					var heightArr = [];
					var num = data.sort(function (a, b) {
						return parseInt(a) < parseInt(b);
					})			
					return heightArr;
				}
				
				//working
				function getArraySum(arrayVal)
				{	
					var sum = 0 ;
					for(var j = 0 ; j < arrayVal.length ; j++)
					{
						sum = sum + arrayVal[j];				
					}
					return sum;				
				}
						
				//working
				function getHeightArrayForData(jsonData)
				{								
					var totalHeight = outFactor;
					var heightArrayValue = [];
					for(var j = 0 ; j < jsonData.length ; j++)
					{
						heightArrayValue.push(totalHeight*jsonData[j]/100); 
						sortedJsonData.push(jsonData[j]);
					}
					sortedJsonData.sort(function (a, b) {
						return parseInt(a) < parseInt(b);
					});
					heightArrayValue.sort(function (a, b) {
						return parseInt(a) < parseInt(b);
					});
					
					
					return heightArrayValue;
							
				}
				
				//working
				function getTotalWidth()
				{
					return outFactor * 0.6 ;
				}			
				
				function getLatentHeightArray(angle, heightArrayVal, prevY1, sideUpFactor)
				{

					
					var totalLatentHeight = getArraySum(heightArrayVal) / (Math.sin(angle * (Math.PI / 180.0))) ;
								
					var latentHeightArray = [];
					
					for( var j = 0 ; j < heightArrayVal.length ; j++)
					{
						latentHeightArray.push(totalLatentHeight * heightArrayVal[j] / totalLatentHeight - 
														sideUpFactor * heightArrayVal[j] / totalLatentHeight);					
					}				
	//				
					
					return latentHeightArray;						
				}		
				
				
				
				
				function getYForFourthCoordinate(latentHeight, angle, prevY, heightY)
				{
					//alert(angle);
					var x = (latentHeight * (Math.cos(angle * (Math.PI / 180))));				
					return x;
				}		
				
				function getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray)
				{
					var heightArraySum = getArraySum(heightArray);
					
					var latentHeightArraySum = getArraySum(latentHeightArray);	
								
					var radians = Math.sin(heightArraySum / (latentHeightArraySum - sideUpFactor));
					
					
					var angle = radians * 180/ Math.PI;
					
					return angle ;	
				}			
				
				function getHeightForTop(angle, bottomWidth)
				{	
					console.log("  Angle : " + angle + " bottomWidth : " + bottomWidth);
					var radians = angle * (Math.PI / 180);
					var h =  Math.tan(radians) * bottomWidth;
					return h;
				
				}
				
				function getCoordinatesForPyramid(x, y, heightY, jsonData, sideno, sideUpFactor, latentHeightArray, latentHeight, angle, heightArray, prevY, l, spacingFactor, flag, value)
				{
					
					var startX = x;
					var startY = y;			
					var lineData = [];						
					
						if(flag != 1)
						{
							if(sideno==1){						
									
									for(var i=0;i<5;i++){
											
																
									   if(i==0)
									   {						   
											y = y - heightY ;																		
									   }
									   else if(i==1)
									   {						   
											y = y + heightY ;										
									   }
									   else if(i==2)
									   {
											if(l==0)
											{
												x = x - getTotalWidth();
												y = y - sideUpFactor;
											}
											else
											{
												x = leftCoordinateX;
												y = leftCoordinateY - spacingFactor;									
											}								
									   }
									   else if(i==3)
									   {		
									
											//x = x + latentHeight;
											//y = y -  getYForFourthCoordinate(latentHeight, getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray), prevY);
											
											//y = y - latentHeight ;
												x = x + getYForFourthCoordinate(latentHeight, getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray) + angleIncrement, prevY, heightY) ;
												y = y - latentHeight ;
												leftCoordinateX = x;
												leftCoordinateY = y;
											
											
									   }     
										else if(i==4)
									   {						   
											x = startX;
											y = startY - heightY;								
									   }
										
										var nextY = y;
										var nextX = x;
														
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}                               
							}	
							else if(sideno==2){						
									
									for(var i=0;i<5;i++){
												
									   if(i==0)
									   {						   
											y = y - heightY;	
											
									   }
									   else if(i==1)
									   {						   
											y = y + heightY ;
											
									   }
									   else if(i==2)
									   {
									
											if(l==0)
											{
												
												x = x + getTotalWidth();
												y = y - sideUpFactor;
												
											}
											else
											{
												x = rightCoordinateX;
												y = rightCoordinateY - spacingFactor;
											}
											
											
									   }
									   else if(i==3)
									   {		
										
											
											x = x - getYForFourthCoordinate(latentHeight, getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray) + angleIncrement, prevY, heightY);
											
											y = y - latentHeight;
											
											labelXPoints.push(x);
											labelYPoints.push(y);
											
											rightCoordinateX = x;
											rightCoordinateY = y;
											
									   }     
										else if(i==4)
									   {						   
											x = startX;
											y = startY - heightY;
											
									   }
										
										var nextY = y;
										var nextX = x;							   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}   
								}
								
							else if(sideno==3){		
							
									if(flag != 1)
									{
										var startXVal;
										var startYVal;
										for(var i=0;i<5;i++){
												
											
										   if(i==0)
										   {			
												startXVal = x;
												y = y - heightY;
												startYVal = y;								
										   }
										   else if(i==1)
										   {						   
												x = leftCoordinateX;
												y = leftCoordinateY;							 
										   }
										   else if(i==2)
										   {
												x = x + (startX - leftCoordinateX);  
												y = y - (startYVal - leftCoordinateY);
												
										   }
										   else if(i==3)
										   {		
												x = rightCoordinateX;
												y = rightCoordinateY;
												
										   }   
											
											else if(i==4)
											{						   
												x = startX;
												y = startY - heightY;
											
											}
											
											var nextY = y;
											var nextX = x;
										   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
										}
										
									}							
								}
						}
						else
						{
							var margin = x - leftCoordinateX;
									var c = getHeightForTop(angle, margin);
									
							if(sideno==1){						
									
									for(var i=0;i<5;i++){
											
																
									   if(i==0)
									   {				
											y = y - c;	
											startX = x;
											startY = y;
									   }
									   else if(i==1)
									   {						   
											y = y + c;										
									   }
									   else if(i==2)
									   {
											if(l==0)
											{
												x = x - getTotalWidth();
												y = y - sideUpFactor;
											}
											else
											{
												x = leftCoordinateX;
												y = leftCoordinateY - spacingFactor;									
											}								
									   }
									   else if(i==3)
									   {										
											x = startX;
											y = startY;	
											
									   }     									
										
										var nextY = y;
										var nextX = x;
														
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}                               
							}	
							else if(sideno==2){						
									
									for(var i=0;i<4;i++){
												
									   if(i==0)
									   {						   
											y = y - c ;		
											startX = x;
											startY = y;
									   }
									   else if(i==1)
									   {						   
											y = y + c ;										
									   }
									   else if(i==2)
									   {
									
												x = rightCoordinateX;
												y = rightCoordinateY - spacingFactor;		
											
									   }
									   else if(i==3)
									   {		
										
											x = startX;
											y = startY;
											labelXPoints.push(x);
											labelYPoints.push(y);
											rightCoordinateY = y;
											
											
									   }     
																			
										var nextY = y;
										var nextX = x;							   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}   
								}
								
							else if(sideno==3){		
							
									if(flag != 1)
									{
										var startXVal;
										var startYVal;
										for(var i=0;i<5;i++){
												
											
										   if(i==0)
										   {			
												
												startXVal = x;
												y = y - heightY;
												startYVal = y;								
										   }
										   else if(i==1)
										   {						   
												x = leftCoordinateX;
												y = leftCoordinateY;							 
										   }
										   else if(i==2)
										   {
												x = x + (startX - leftCoordinateX);  
												y = y - (startYVal - leftCoordinateY);
												
										   }
										   else if(i==3)
										   {		
												x = rightCoordinateX;
												y = rightCoordinateY;
												
										   }   
											
											else if(i==4)
											{						   
												x = startX;
												y = startY - heightY;
											
											}
											
											var nextY = y;
											var nextX = x;
										   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
										}
										
									}							
								}
						}
					return lineData;			
				} 
				
				
				
				
				function getCoordinatesForLine(x, y, height, value)
				{
					//alert(" X : " + x + " Y : " + y);
					var lineDataPoint = [];
					
						for(var m=0;m<3;m++){											
													
										   if(m==0)
										   {		
												
												x = x;	
												y = y + height/2;
										   }
										   else if(m==1)
										   {	
										   
												x = x + (0.3*outFactor)/2;										
										   }
										   else if(m==2)
										   {
												x = x + (.025*outFactor);
												y = y + (.025*outFactor);
										   }							   
											
											var nextY = y;
											var nextX = x;
															
											//alert(" X : " + x + " Y : " + y);
											//lineDataPoint.push(JSON.parse('{"x":'+x+',"y":'+y+'}'))	
											lineDataPoint.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      

						}             
							return lineDataPoint;
				}		
		
			
			},
			draw3DPyramidChartWithoutSlice:function(cfg){
			
				var jsonData = DataConverter.getValueToPercentageArray(cfg.data);
								
				var outFactorInitial = ( width < height ? width : height);
				outFactor=outFactorInitial*0.60;
				
				var spaceInPyramid = 0;
				var sortedJsonData = [];
				var heightArray = getHeightArrayForData(jsonData);
				var angle = getNewAngle();
				var sideUpFactor = 30;
				var latentHeightArray = getLatentHeightArray(angle, heightArray, 0, sideUpFactor);
				var leftCoordinateX;
				var leftCoordinateY;
				var rightCoordinateX;
				var rightCoordinateY;
				var angleIncrement = 0;
				var colorArray=cfg.colorArray;
				var lowerData2 = [ { "x": 0, "y": 400},  { "x":0,  "y": 400}, { "x": 0,  "y": 400}, { "x": 0,  "y": 400}, { "x": 0,  "y": 400}]
				
				
				var lowerData = [ { "x": 200, "y": 400},  { "x": 200,  "y": 200},
								 { "x": 55,  "y": 150}, { "x": 35,  "y": 350}, { "x": 200,  "y": 400}]		
					
				var labelXPoints = [];
				var labelYPoints = [];
				var xNew=0;
				var yNew=0;
				if(width>height){
					xNew=(width-outFactor)/2;
					yNew=(0);
				}
				else{
					xNew=0;
					yNew=(height-outFactor)/2.1;
				}
				//else{}
				var transitionFator={"x":(outFactorInitial-getWidthOfPyramid())/2,"y":(outFactorInitial-getWidthOfPyramid())/2};
				
				
				var lineFunction = d3.svg.line()
										  .x(function(d) { return d.x; })
										  .y(function(d) { return d.y; })
										 .interpolate("linear");
				
				 
				 
				var svgContainer = svgElement
											.append("g")
											.attr("transform", "translate(" + (xNew) + "," + (yNew) + ")");;

				//var transitionFator={"x":(width-getWidthOfPyramid())/2,"y":0};			
			
				var x = (outFactorInitial*.3) +(outFactorInitial *.1);
				var y = outFactorInitial;		
				var intialX = x;
				var intialY = y;
				var heightY = heightArray[0];
				
				var color20 = d3.scale.category20c();
				var newY = y;
				var prevY = 0;
			
				var spacingFactor = spaceInPyramid;
				var flag = 0;
				
				for(var k = 0 ; k < heightArray.length  ; k++)
				{				
					if(k == (heightArray.length - 1))
						flag = 1;
						
					var lineGraph = svgContainer.append("path")
											.attr("d", lineFunction(lowerData2))
											.style("opacity", 0.0)
											
											.attr('fill', function (d, i) {
												return "white";
											})
											.transition().duration(2000).ease("linear")
											.attr("d", lineFunction(getCoordinatesForPyramid(x, newY, heightArray[k], jsonData, 1, sideUpFactor, latentHeightArray, latentHeightArray[k], angle, heightArray, prevY, k, spacingFactor, flag, sortedJsonData[k])))
											
											.style("opacity", 0.7)

											.attr("stroke",	"white")
											.attr("stroke-width", 1)
											
											.attr('fill', function (d, i) {
												return colorArray[k];
												//return color20(+i + +100)
											});
											
					var lineGraph = svgContainer.append("path")
											.attr("d", lineFunction(lowerData2))
											.style("opacity", 0.0)
											.attr('fill', function (d, i) {
												return "white";
											})
											.transition().duration(1500).ease("linear")
											.attr("d", lineFunction(getCoordinatesForPyramid(x, newY, heightArray[k], jsonData, 2, sideUpFactor, latentHeightArray, latentHeightArray[k], angle, heightArray, prevY, k, spacingFactor, flag, sortedJsonData[k])))
											.attr("stroke", "white")
											.style("opacity", 0.5)
											.attr("stroke-width", 0.5)
											.attr('fill', function (d, i) {
												return colorArray[k]
												//return color20(i)
											});
					
					
						
					var lineGraph = svgContainer.append("path")
											.attr("d", lineFunction(lowerData2))
											.style("opacity", 0.0)
											.attr('fill', function (d, i) {
												return "white";
											})
											.transition().duration(1000).ease("linear")
											.attr("d", lineFunction(getCoordinatesForPyramid(x, newY, heightArray[k], jsonData, 3, sideUpFactor, latentHeightArray, latentHeightArray[k], angle, heightArray, prevY, k, spacingFactor, flag, sortedJsonData[k])))
											.style("opacity", 0.3)
											.attr("stroke", "white")
											.attr("stroke-width", 0.3)
											.attr('fill', function (d, i) {
													return colorArray[k];
											});
					
					
					
						newY = y - heightArray[k] - spaceInPyramid;
						y = newY;
						prevY = heightArray[k];
					
					}
				
				var fontSize=outFactor<200?'10px':'12px';
				
				for(var j = 0; j < labelXPoints.length ; j++)
				{
					
					svgContainer.append("path")
											.attr("x", outFactor)
											.attr("y", outFactor)										
											.transition().delay( function(d, i){return 600 *j}).ease("bounce")
											.attr("d", lineFunction(getCoordinatesForLine(labelXPoints[j], labelYPoints[j], heightArray[j], sortedJsonData[j])))
											.attr("stroke", function (d, i) {
													return colorArray[j];
											})
											.attr("stroke-width", 1)
											.attr('fill',"none");			
											
					svgContainer.append("text")						
											.attr("x", outFactor)
											.attr("y", outFactor)
											.transition().delay( function(d, i){return 600 *j}).ease("bounce")
											.attr("x", labelXPoints[j] + 0.15* outFactor+(j*3))
											.attr("y", labelYPoints[j] + (0.1*outFactor) + heightArray[j]/2-(j*3))
											.text( cfg.labels[j]+":" + cfg.data[j]+" "+cfg.unit)										
											.attr("font-family", "sans-serif")
											.attr("font-size", fontSize)
											.attr("fill", colorArray[j]);
				}
				
				function getWidthOfPyramid(){
					return ((0.6 * outFactor)*2);
				}
				
				function getNewAngle()
				{
					var degrees = Math.atan( (outFactor / (0.6 * outFactor)) ) * 180/Math.PI;
					return degrees ;			
				}			
						
				//working
				function sortNumber(data) 
				{
					//alert(data);
					var heightArr = [];
					var num = data.sort(function (a, b) {
						return parseInt(a) < parseInt(b);
					})			
					return heightArr;
				}
				
				//working
				function getArraySum(arrayVal)
				{	
					var sum = 0 ;
					for(var j = 0 ; j < arrayVal.length ; j++)
					{
						sum = sum + arrayVal[j];				
					}
					return sum;				
				}
						
				//working
				function getHeightArrayForData(jsonData)
				{								
					var totalHeight = outFactor;
					var heightArrayValue = [];
					for(var j = 0 ; j < jsonData.length ; j++)
					{
						heightArrayValue.push(totalHeight*jsonData[j]/100); 
						sortedJsonData.push(jsonData[j]);
					}
					sortedJsonData.sort(function (a, b) {
						return parseInt(a) < parseInt(b);
					});
					heightArrayValue.sort(function (a, b) {
						return parseInt(a) < parseInt(b);
					});
					
					
					return heightArrayValue;
							
				}
				
				//working
				function getTotalWidth()
				{
					return outFactor * 0.6 ;
				}			
				
				function getLatentHeightArray(angle, heightArrayVal, prevY1, sideUpFactor)
				{

					
					var totalLatentHeight = getArraySum(heightArrayVal) / (Math.sin(angle * (Math.PI / 180.0))) ;
								
					var latentHeightArray = [];
					
					for( var j = 0 ; j < heightArrayVal.length ; j++)
					{
						latentHeightArray.push(totalLatentHeight * heightArrayVal[j] / totalLatentHeight - 
														sideUpFactor * heightArrayVal[j] / totalLatentHeight);					
					}				
	//				
					
					return latentHeightArray;						
				}		
				
				
				
				
				function getYForFourthCoordinate(latentHeight, angle, prevY, heightY)
				{
					//alert(angle);
					var x = (latentHeight * (Math.cos(angle * (Math.PI / 180))));				
					return x;
				}		
				
				function getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray)
				{
					var heightArraySum = getArraySum(heightArray);
					
					var latentHeightArraySum = getArraySum(latentHeightArray);	
								
					var radians = Math.sin(heightArraySum / (latentHeightArraySum - sideUpFactor));
					
					
					var angle = radians * 180/ Math.PI;
					
					return angle ;	
				}			
				
				function getHeightForTop(angle, bottomWidth)
				{	
					console.log("  Angle : " + angle + " bottomWidth : " + bottomWidth);
					var radians = angle * (Math.PI / 180);
					var h =  Math.tan(radians) * bottomWidth;
					return h;
				
				}
				
				function getCoordinatesForPyramid(x, y, heightY, jsonData, sideno, sideUpFactor, latentHeightArray, latentHeight, angle, heightArray, prevY, l, spacingFactor, flag, value)
				{
					
					var startX = x;
					var startY = y;			
					var lineData = [];						
					
						if(flag != 1)
						{
							if(sideno==1){						
									
									for(var i=0;i<5;i++){
											
																
									   if(i==0)
									   {						   
											y = y - heightY ;																		
									   }
									   else if(i==1)
									   {						   
											y = y + heightY ;										
									   }
									   else if(i==2)
									   {
											if(l==0)
											{
												x = x - getTotalWidth();
												y = y - sideUpFactor;
											}
											else
											{
												x = leftCoordinateX;
												y = leftCoordinateY - spacingFactor;									
											}								
									   }
									   else if(i==3)
									   {		
									
											//x = x + latentHeight;
											//y = y -  getYForFourthCoordinate(latentHeight, getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray), prevY);
											
											//y = y - latentHeight ;
												x = x + getYForFourthCoordinate(latentHeight, getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray) + angleIncrement, prevY, heightY) ;
												y = y - latentHeight ;
												leftCoordinateX = x;
												leftCoordinateY = y;
											
											
									   }     
										else if(i==4)
									   {						   
											x = startX;
											y = startY - heightY;								
									   }
										
										var nextY = y;
										var nextX = x;
														
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}                               
							}	
							else if(sideno==2){						
									
									for(var i=0;i<5;i++){
												
									   if(i==0)
									   {						   
											y = y - heightY;	
											
									   }
									   else if(i==1)
									   {						   
											y = y + heightY ;
											
									   }
									   else if(i==2)
									   {
									
											if(l==0)
											{
												
												x = x + getTotalWidth();
												y = y - sideUpFactor;
												
											}
											else
											{
												x = rightCoordinateX;
												y = rightCoordinateY - spacingFactor;
											}
											
											
									   }
									   else if(i==3)
									   {		
										
											
											x = x - getYForFourthCoordinate(latentHeight, getAngleAfterApplyingSideUp(sideUpFactor, heightArray, latentHeightArray) + angleIncrement, prevY, heightY);
											
											y = y - latentHeight;
											
											labelXPoints.push(x);
											labelYPoints.push(y);
											
											rightCoordinateX = x;
											rightCoordinateY = y;
											
									   }     
										else if(i==4)
									   {						   
											x = startX;
											y = startY - heightY;
											
									   }
										
										var nextY = y;
										var nextX = x;							   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}   
								}
								
							else if(sideno==3){		
							
									if(flag != 1)
									{
										var startXVal;
										var startYVal;
										for(var i=0;i<5;i++){
												
											
										   if(i==0)
										   {			
												startXVal = x;
												y = y - heightY;
												startYVal = y;								
										   }
										   else if(i==1)
										   {						   
												x = leftCoordinateX;
												y = leftCoordinateY;							 
										   }
										   else if(i==2)
										   {
												x = x + (startX - leftCoordinateX);  
												y = y - (startYVal - leftCoordinateY);
												
										   }
										   else if(i==3)
										   {		
												x = rightCoordinateX;
												y = rightCoordinateY;
												
										   }   
											
											else if(i==4)
											{						   
												x = startX;
												y = startY - heightY;
											
											}
											
											var nextY = y;
											var nextX = x;
										   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
										}
										
									}							
								}
						}
						else
						{
							var margin = x - leftCoordinateX;
									var c = getHeightForTop(angle, margin);
									
							if(sideno==1){						
									
									for(var i=0;i<5;i++){
											
																
									   if(i==0)
									   {				
											y = y - c;	
											startX = x;
											startY = y;
									   }
									   else if(i==1)
									   {						   
											y = y + c;										
									   }
									   else if(i==2)
									   {
											if(l==0)
											{
												x = x - getTotalWidth();
												y = y - sideUpFactor;
											}
											else
											{
												x = leftCoordinateX;
												y = leftCoordinateY - spacingFactor;									
											}								
									   }
									   else if(i==3)
									   {										
											x = startX;
											y = startY;	
											
									   }     									
										
										var nextY = y;
										var nextX = x;
														
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}                               
							}	
							else if(sideno==2){						
									
									for(var i=0;i<4;i++){
												
									   if(i==0)
									   {						   
											y = y - c ;		
											startX = x;
											startY = y;
									   }
									   else if(i==1)
									   {						   
											y = y + c ;										
									   }
									   else if(i==2)
									   {
									
												x = rightCoordinateX;
												y = rightCoordinateY - spacingFactor;		
											
									   }
									   else if(i==3)
									   {		
										
											x = startX;
											y = startY;
											labelXPoints.push(x);
											labelYPoints.push(y);
											rightCoordinateY = y;
											
											
									   }     
																			
										var nextY = y;
										var nextX = x;							   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
									}   
								}
								
							else if(sideno==3){		
							
									if(flag != 1)
									{
										var startXVal;
										var startYVal;
										for(var i=0;i<5;i++){
												
											
										   if(i==0)
										   {			
												
												startXVal = x;
												y = y - heightY;
												startYVal = y;								
										   }
										   else if(i==1)
										   {						   
												x = leftCoordinateX;
												y = leftCoordinateY;							 
										   }
										   else if(i==2)
										   {
												x = x + (startX - leftCoordinateX);  
												y = y - (startYVal - leftCoordinateY);
												
										   }
										   else if(i==3)
										   {		
												x = rightCoordinateX;
												y = rightCoordinateY;
												
										   }   
											
											else if(i==4)
											{						   
												x = startX;
												y = startY - heightY;
											
											}
											
											var nextY = y;
											var nextX = x;
										   
									 
										lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      
										}
										
									}							
								}
						}
					return lineData;			
				} 
				
				
				
				
				function getCoordinatesForLine(x, y, height, value)
				{
					//alert(" X : " + x + " Y : " + y);
					var lineDataPoint = [];
					
						for(var m=0;m<3;m++){											
													
										   if(m==0)
										   {		
												
												x = x;	
												y = y + height/2;
										   }
										   else if(m==1)
										   {	
										   
												x = x + (0.3*outFactor)/2;										
										   }
										   else if(m==2)
										   {
												x = x + (.025*outFactor);
												y = y + (.025*outFactor);
										   }							   
											
											var nextY = y;
											var nextX = x;
															
											//alert(" X : " + x + " Y : " + y);
											//lineDataPoint.push(JSON.parse('{"x":'+x+',"y":'+y+'}'))	
											lineDataPoint.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+ ',"value":'+value+'}'));                      

						}             
							return lineDataPoint;
				}					
			}	
		}

		function sortNumber(data) {
                var num = data.sort(function (a, b) {
                    return parseInt(a) < parseInt(b);
                })
                return num;
            }

            function getX(angle, height, widthX, prevX1) {
                var radians = angle * (Math.PI / 180);
                var x = (height / (Math.tan(radians))) + prevX1;
                return x;
            }

            function getY(angle, height) {
                var radians = angle * (Math.PI / 180);
                var val = (height / (Math.tan(radians)));
                return val;
            }

            function getCoordinatesFromPercent(data) {

                var widthFactorX = 50;
                var heightFactorY = 50;
                var spacingFactor = 2;

                var angle = 60;

                var widthX = (200) / 1.73;
                var heightY = data.length * heightFactorY;

                var currX1 = 0;
                var currX2 = 0;
                var currY1 = 0;
                var currY2 = 0;
                var prevX1 = 0;
                var prevY1 = 0;
                var prevX2 = 0;
                var prevY2 = 0;

                var polygon = {};
                var arrayOfPolygons = [];
                polygon.arrayOfPolygons = arrayOfPolygons;

                for (i = 1; i <= data.length; i++) {

                    var x;
                    var y;
                    var points = {};
                    var coordinates = [];
                    points.coordinates = coordinates;

                    for (j = 0; j < 4; j++) {

                        if (j == 0) {
                            x = getX(angle, data[i - 1], widthX, prevX1);
                            if (i == 1) {
                                y = getY(60, data[i - 1]);
                            } else {
                                y = +prevY1 + getY(angle, data[i - 1]);
                            }
                            currX1 = x;
                            currY1 = y + spacingFactor;

                        } else if (j == 1) {

                            x = x + (widthX - 2 * x);
                            if (i == 1) {
                                y = getY(60, data[i - 1]);
                            } else {
                                y = +prevY2 + getY(angle, data[i - 1]);
                            }
                            currX2 = x;
                            currY2 = y + spacingFactor;

                        } else if (j == 2) {
                            if (i == 1) {
                                x = widthX;
                                y = 0;
                            } else {
                                x = prevX2;
                                y = prevY2;
                            }

                        } else {
                            if (i == 1) {
                                x = 0;
                                y = 0;
                            } else {
                                x = prevX1;
                                y = prevY1;
                            }
                        }

                        var coordinate = {
                            "x": x,
                                "y": y
                        };

                        points.coordinates.push(coordinate)
                    }

                    prevX1 = currX1;
                    prevY1 = currY1;
                    prevX2 = currX2;
                    prevY2 = currY2;

                    var coordinateArray = {
                        "name": "Polygon-" + i,
                            "Percent": data[i - 1],
                            "points": points.coordinates
                    }
                    polygon.arrayOfPolygons.push(coordinateArray);
                }
                return polygon;
            }

        var radarChart = {
            drawRadarChart: function (id, d, options) {


                var curFactor = width > height ? height : width;
                var driftingFactorX = width * .10;
                var driftingFactorY = height * .10;
                var difting = 0;
                if (width > height) {
                    driftingFactorX = Math.round(width - height) / 2;
                    difting = driftingFactorX;
                } else {
                    driftingFactorY = Math.round(height - width) / 2;
                    difting = driftingFactorY;
                }

                var cfg = {
                    radius: 10,
                    w: curFactor - difting,
                    h: curFactor - difting,
                    factor: 1,
                    factorLegend: .85,
                    levels: 3,
                    maxValue: 0,
                    radians: 2 * Math.PI,
                    opacityArea: 0,
                    ToRight: 5,
                    TranslateX: driftingFactorX,
                    TranslateY: driftingFactorY,

                    ExtraWidthX: 100,
                    ExtraWidthY: 100,
                    color: d3.scale.category20()
                };

                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }
                cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function (i) {
                    return d3.max(i.map(function (o) {
                        return o.value;
                    }))
                }));
                var allAxis = (d[0].map(function (i, j) {
                    return i.axis
                }));
                var total = allAxis.length;
                var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
                var Format = d3.format('');


                var g = svgElement.append("svg:g")

                    .attr("width", cfg.w + cfg.ExtraWidthX)
                    .attr("height", cfg.h + cfg.ExtraWidthY)
                    .append("g")
                    .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");;

                var tooltip;



                for (var j = 0; j < cfg.levels; j++) {
                    var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
                    g.selectAll(".levels")
                        .data(allAxis)
                        .enter()
                        .append("svg:line")
                        .attr("x1", function (d, i) {
                        return levelFactor * (1 - cfg.factor * Math.sin(i * cfg.radians / total));
                    })
                        .attr("y1", function (d, i) {
                        return levelFactor * (1 - cfg.factor * Math.cos(i * cfg.radians / total));
                    })
                        .attr("x2", function (d, i) {
                        return levelFactor * (1 - cfg.factor * Math.sin((i + 1) * cfg.radians / total));
                    })
                        .attr("y2", function (d, i) {
                        return levelFactor * (1 - cfg.factor * Math.cos((i + 1) * cfg.radians / total));
                    })
                        .attr("class", "line")
                        .style("stroke", "grey")
                        .style("stroke-opacity", "3.75")
                        .style("stroke-width", "0.5px")
                        .attr("transform", "translate(" + (cfg.w / 2 - levelFactor) + ", " + (cfg.h / 2 - levelFactor) + ")");
                }


                for (var j = 0; j < cfg.levels; j++) {

                    var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
                    g.selectAll(".levels")
                        .data([0])
                        .enter()
                        .append("svg:text")
                        .attr("x", function (d) {
                        return levelFactor * (1 - cfg.factor * Math.sin(0));
                    })
                        .attr("y", function (d) {
                        return levelFactor * (1 - cfg.factor * Math.cos(0));
                    })
                        .attr("class", "legend")
                        .style("font-family", "sans-serif")
                        .style("font-size", "12px")
                        .attr("transform", "translate(" + (cfg.w / 2 - levelFactor + cfg.ToRight) + ", " + (cfg.h / 2 - levelFactor) + ")")
                        .attr("fill", "#737373")
                        .text(Format((j + 1) * cfg.maxValue / cfg.levels));
                }

                series = 0;

                var axis = g.selectAll(".axis")
                    .data(allAxis)
                    .enter()
                    .append("g")
                    .attr("class", "axis");

                axis.append("line")
                    .attr("x1", cfg.w / 2)
                    .attr("y1", cfg.h / 2)
                    .attr("x2", function (d, i) {
                    return cfg.w / 2 * (1 - cfg.factor * Math.sin(i * cfg.radians / total));
                })
                    .attr("y2", function (d, i) {
                    return cfg.h / 2 * (1 - cfg.factor * Math.cos(i * cfg.radians / total));
                })
                    .attr("class", "line")
                    .style("stroke", "grey")
                    .style("stroke-width", "1px");

                axis.append("text")
                    .attr("class", "legend")
                    .text(function (d) {
                    return d
                })
                    .style("font-family", "sans-serif")
                    .style("font-size", "11px")
			//		.style("fill","white")
                    .attr("text-anchor", "middle")
                    .attr("dy", "1.5em")
                    .attr("transform", function (d, i) {
                    return "translate(0, -10)"
                })
                    .attr("x", function (d, i) {
                    return cfg.w / 2 * (1 - cfg.factorLegend * Math.sin(i * cfg.radians / total)) - 60 * Math.sin(i * cfg.radians / total);
                })
                    .attr("y", function (d, i) {
                    return cfg.h / 2 * (1 - Math.cos(i * cfg.radians / total)) - 20 * Math.cos(i * cfg.radians / total);
                });


                d.forEach(function (y, x) {
                    dataValues = [];
                    g.selectAll(".nodes")
                        .data(y, function (j, i) {
                        dataValues.push([
                        cfg.w / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total)),
                        cfg.h / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))]);
                    });
                    dataValues.push(dataValues[0]);
                    g.selectAll(".area")
                        .data([dataValues])
                        .enter()
                        .append("polygon")
                        .attr("class", "radar-chart-serie" + series)
                        .style("stroke-width", "2px")
                        .style("stroke", cfg.color(series))
                        .attr("points", function (d) {
                        var str = "";
                        for (var pti = 0; pti < d.length; pti++) {
                            str = str + d[pti][0] + "," + d[pti][1] + " ";
                        }
                        return str;
                    })
                        .style("fill", function (j, i) {
                        return cfg.color(series)
                    })
                        .style("fill-opacity", cfg.opacityArea)
                        .on('mouseover', function (d) {
                        z = "polygon." + d3.select(this).attr("class");
                        g.selectAll("polygon")
                            .transition(200)
                            .style("fill-opacity", 0.1);
                        g.selectAll(z)
                            .transition(200)
                            .style("fill-opacity", 0.9);
                    })
                        .on('mouseout', function () {
                        g.selectAll("polygon")
                            .transition(200)
                            .style("fill-opacity", cfg.opacityArea);
                    });
                    series++;
                });
                series = 0;


                d.forEach(function (y, x) {
                    g.selectAll(".nodes")
                        .data(y).enter()
                        .append("svg:circle")
                        .attr("class", "radar-chart-serie" + series)
                        .attr('r', cfg.radius)
                        .attr("alt", function (j) {
                        return Math.max(j.value, 0)
                    })
                        .attr("cx", function (j, i) {
                        dataValues.push([
                        cfg.w / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total)),
                        cfg.h / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))]);
                        return cfg.w / 2 * (1 - (Math.max(j.value, 0) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total));
                    })
                        .attr("cy", function (j, i) {
                        return cfg.h / 2 * (1 - (Math.max(j.value, 0) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total));
                    })
                        .attr("data-id", function (j) {
                        return j.axis
                    })
                        .style("fill", cfg.color(series)).style("fill-opacity", 1.9)
                        .on('mouseover', function (d) {
                        newX = parseFloat(d3.select(this).attr('cx')) - 10;
                        newY = parseFloat(d3.select(this).attr('cy')) - 5;

                        tooltip.attr('x', newX)
                            .attr('y', newY)
                            .text(Format(d.value))
                            .transition(100)
                            .style('opacity', 1);

                        z = "polygon." + d3.select(this).attr("class");
                        g.selectAll("polygon")
                            .transition(100)
                            .style("fill-opacity", 0.1);
                        g.selectAll(z)
                            .transition(200)
                            .style("fill-opacity", .7);
                    })
                        .on('mouseout', function () {
                        tooltip.transition(200)
                            .style('opacity', 0);
                        g.selectAll("polygon")
                            .transition(200)
                            .style("fill-opacity", cfg.opacityArea);
                    })
                        .append("svg:title")
                        .text(function (j) {
                        return Math.max(j.value, 0)
                    });

                    series++;
                });

                tooltip = g.append('text')
                    .style('opacity', 0)
                    .style('font-family', 'sans-serif')
                    .style('font-size', '13px');
				
				
			
			//set font here
			setTextStyleAndSvgBackGround(svgElement);
			
			}
			
        };
		
		var combinationalChart={
			drawCombinationalChart:function(combinationalChartData){
			
			var divId=selectedElementId;
			var data=combinationalChartData;
			
			var width =parseInt(d3.select("#"+divId).style("width"));
			var height=parseInt(d3.select("#"+divId).style("height")); 
			var textSizeOfAxis,symbolSize,circleRadius,rectangleSize,legendSize;
			if(width<401)
			{
				textSizeOfAxis=8;
			}
			else if(width<601)
			{
				textSizeOfAxis =10;
			}
			else
			{
				textSizeOfAxis =13;
			}
			 
			if(height<301)
			{
				symbolSize = 10;
				circleRadius = 3; 
				rectangleSize = 5
				legendSize = 7;
			}
			else
			{
				symbolSize = 18;
				circleRadius = 5; 
				rectangleSize = 8
				legendSize = 12;
			}		
			
		  var margin = {top: height*.10, right: width*.10, bottom: height*.12, left: width*.10};
		  var scaleWidth = width - margin.left - margin.right;
		  var scaleHeight = height - margin.top - margin.bottom;
		  var divSelection = d3.select("#"+divId);
		  var i=0,maxGDP,minGDP,lineIndex,radius,innerRadius,selectedYear=data.xAxisData[0];
		  var grad = Math.PI/180;
		  var clickedYear = [data.PieData.Data1[0],data.PieData.Data2[0]];
		
		
		var xAxisTimeIndex = [];
		for(var counter = 0;counter<data.xAxisData.length ;counter++)
		{
			xAxisTimeIndex[counter] = counter;
		}
		
		//setmin and max data factor
		setMinMaxDataFactor();
			
		var scaleX = d3.scale.linear()
							.domain([0,data.xAxisData.length])
							.range([0,scaleWidth]); 
		
		var scaleOfCountry = d3.scale.linear()
							.domain([minGDP,maxGDP*2])
							.range([scaleHeight,0]); 

		  var divSelection = d3.select("#"+divId);
		  var checkSVGCicked =0;
		  var svgSelection = svgElement;
		
		//show grid view
		gridManager(svgSelection, scaleHeight, scaleWidth, margin.left, margin.top);
		
		var combinationalGroup = svgSelection.append("g")
						   .attr('id','combinationalGroup')
						   .attr("transform", "translate(" +margin.left + "," +margin.top + ")")
						   /*
							  .on("mouseover", function() {
									
									//d3.select("#toolTipChart").css("display","block");
									
									drawLine.style("visibility", "visible");tooltip.style("visibility", "visible");  
									mouseOverOnLine(d3.event);
								})
						 .on("mouseout",  function(){drawLine.style("visibility", "hidden");tooltip.style("visibility", "hidden"); })
						 */
						//.on("mousemove", mouseOverOnLine);

		radius = margin.top;
		innerRadius = radius - radius*.6;
		var arc = d3.svg.arc()
					.innerRadius(innerRadius)
					.outerRadius(radius);

				
		// show dount chart with revenue												 

		showDountChart();

		showLegend();				   
		showClickedSymbol();
		
		//title lable here
		axisLabelController.appendLabel(data.title,margin.left,-margin.top/3,0,combinationalGroup,textStyleConfg.titleColor,700);
		
		//xAxis label here
		var pixcelPerChar = 6;
		var totalXLabelPixcel=data.xAxisLabel.toString().length*pixcelPerChar;
		var xIndicationLabelTop=scaleHeight+(scaleHeight*0.12);
		var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;    
		axisLabelController.appendLabel(data.xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,combinationalGroup,textStyleConfg.xLabelColor,600);

		//yAxis label here
		
		var totalYLabelPixcel=data.yLabel.toString().length*pixcelPerChar;
		var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;        
		var yIndicationLabelLeft=(-margin.left/2);
		axisLabelController.appendLabel(data.yLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,combinationalGroup,textStyleConfg.yLabelColor,600);
		
		
		var tooltip = d3.select("body")
			.append("div")
			.style('background','rgba(0,0,0,.6)')
			.style("position", "absolute")
			//.style("z-index", -1)
			.style("visibility", "hidden")
			.style("font-family",'calibri')
			.style("font-style",'normal')
			.style("color",'white')
			.style('padding','5px')
			.text("a simple tooltip")
			.style("display","none");
		
			
		var message =  d3.select("body").attr('id','outerDiv')
			.append("div")
			.style('width',200)
			.style('background','#1f77b4')
			.style("position", "absolute")
			.style("visibility", "hidden")
			.style("font-family",'calibri')
			.style("font-style",'normal')
			.style("padding",'2px')
			.style('box-shadow','0 0 10px #ccc')
			.style("color",'white')
			.style("font-size",15)
			.text("NEWS");
		message.append('img').attr('id','closeButton')
		.style('float','right')
		.style('margin-top','-10px')
		.style('margin-right','-10px')							
		.attr("src",'./img/cross.png').on('click',function(){message.style("visibility",'hidden')});	
		message.append('div').attr('id','innerDiv').style('padding','5px 10px 5px 10px').style("font-size",12).style("color",'black').style('background',"#fff").text('inner box');	
		//show data of line1 and line2
		   showLineData();

		var largestStringLngth=0;
			for(var counter =0 ;counter<data.xAxisData.length;counter++)
			{
				if(largestStringLngth<(data.xAxisData[counter].toString()).length)
				{
					largestStringLngth = (data.xAxisData[counter].toString()).length;
				}
			}
			   
		var xAxis = d3.svg.axis()
				.scale(scaleX)
				.orient("bottom")
				.tickValues(tickController.getXTickArray(0,(data.xAxisData.length),largestStringLngth, (scaleWidth)));		
		// svgSelection.selectAll('path').attr('fill','none');
		var xAxisTextRef =combinationalGroup.append("g")
							.attr('id','xAxis')
							.attr("class", "xAxis")
							.attr('fill','none')
						//	.attr('font-size',textSizeOfAxis)
							.attr("transform", "translate("+0+"," + (scaleHeight) + ")")
							.call(xAxis);					
			
		xAxisTextRef.selectAll('text')
					 .text(function(d){return data.xAxisData[d];})
				//	 .style('font-size',fontSize)
					 .attr('font-family','calibri')
					 .attr('fill','black');

		var yAxis = d3.svg.axis()
				.scale(scaleOfCountry)
				.orient("left")
				.tickValues(tickController.getTickArray(minGDP,maxGDP*2,10));
		   // svgSelection.selectAll('path').attr('fill','none');
			combinationalGroup.append("g")
						 .attr('id','yAxis')
									 .attr("class","yAxis")
									//.attr('fill',"none")
									 .attr('font-size',textSizeOfAxis)
									 .attr("transform", "translate( "+ 0 +" , "+ 0 +")")
									 .call(yAxis);	

		d3.select('.yAxis path').attr('fill','none');							 

		//show simple vertical line							 
		var lineArray = [];
		var simpleLine = d3.svg.line()
							   .x(function(d) { return lineArray[lineIndex++]; })
							   .y(function(d) { return lineArray[lineIndex++]; });	
		var drawLine = svgSelection.append("path")
				//  .style("display", "none")
				  .data([lineArray])
				  .attr("stroke", "gray")
				  .attr("stroke-width", 1)
				  .attr("fill", "none");
		
		//hide all axis path
			hideAxisPath(svgElement);
					
		//set font here
					
		setTextStyleAndSvgBackGround(svgElement);	
					  
		function showLineData()
		{
			var lineFunctionCountry1 = d3.svg.line()
								 .x(function(d,i) {return scaleX(xAxisTimeIndex[i]); })
								 .y(function(d,i) 
								 {	
											return scaleOfCountry(data.dataOfLine1[i]); 
								 })                         
								// .interpolate("cardinal");

		var lineGraphCountry1 = combinationalGroup.selectAll(".path")
							 .data([data.xAxisData])
							 .enter()
							 .append("path")
							 .attr("d", lineFunctionCountry1)	  
							 .attr("stroke",function(){return data.color[0]})
							 .attr("stroke-width", 3)
							 .attr("fill", "none");
											 
		combinationalGroup.selectAll('rect')
						 .data(data.xAxisData)
		  .enter()
		  .append("rect")
		  .attr("class","country1")
		   .attr('value',function(d,i){return i})
		  .attr("fill",function(d,i) { if(data.dataOfLine1[i]<0){return 'red'}else{return data.color[0]}})
		  .attr("x", function(d, i){return scaleX(xAxisTimeIndex[i])-rectangleSize/2;})
		  .attr("y",function(d,i) { return scaleOfCountry(data.dataOfLine1[i])-rectangleSize/2;})
		  .attr("width",function(d,i){if(data.dataOfLine1[i]<0){return rectangleSize +1 }else{return rectangleSize}} )
		  .attr("height",function(d,i){if(data.dataOfLine1[i]<0){return rectangleSize+1} else{return rectangleSize}} )
			.on("mouseover", function(d) {
									
				drawLine.style("visibility", "visible");tooltip.style("visibility", "visible").style("display","none");  
				mouseOverOnLine(d3.event,d3.select(this).attr('value'));
			})
			.on("mouseout",  function(){drawLine.style("visibility", "hidden");tooltip.style("visibility", "hidden"); 
				toolTipManager.hideTooTip();
			});
				 
							 
		var lineFunctionCountry2 = d3.svg.line()
								 .x(function(d,i) { console.log("years="+data.xAxisData[i]); return scaleX(xAxisTimeIndex[i]); })
								 .y(function(d,i) { console.log("dataOfLine2"+data.dataOfLine2[i]); return scaleOfCountry(data.dataOfLine2[i]); })                         
								 .interpolate("cardinal");

		var lineGraphCountry2 = combinationalGroup.selectAll(".path")
							 .data([data.xAxisData])
							 .enter()
							 .append("path")
							 .attr("d", lineFunctionCountry2)	  
							 .attr("stroke",data.color[1])
							 .attr("stroke-width", 3)
							 .attr("fill", "none");							 
									 
		combinationalGroup.selectAll('circle')
						 .data(data.xAxisData)
		  .enter()
		  .append("circle")
		  .attr("class","country2")
		  .attr('value',function(d,i){return i})
		  .attr("fill",function(d,i) {  if(data.dataOfLine2[i]<0){return 'red'}else{return data.color[1]}})
		  .attr("cx", function(d, i){return scaleX(xAxisTimeIndex[i]);})
		  .attr("cy",function(d,i) { return scaleOfCountry(data.dataOfLine2[i]);})
		  .attr('r',function(d,i){if(data.dataOfLine2[i]<0){return circleRadius+1}else{return circleRadius}})
		  .on("mouseover", function(d) {
									
				drawLine.style("visibility", "visible");tooltip.style("visibility", "visible").style("display","none");  
				mouseOverOnLine(d3.event,d3.select(this).attr('value'));
			})
			.on("mouseout",  function(){drawLine.style("visibility", "hidden");tooltip.style("visibility", "hidden"); 
				toolTipManager.hideTooTip();
			});

		}			  
		function mouseOverOnLine(event,dataIndex) 
			{
			
			//	alert(dataIndex);
				lineIndex=0;	
		
						selectedYear = data.xAxisData[dataIndex];
		
				getToolTip(dataIndex,event);
				clickedYear = [data.PieData.Data1[dataIndex],data.PieData.Data2[dataIndex]];
				showDountChart();
		  }   
			
		function getToolTip(keyName,event)
		{
		//	alert(keyName);
			var text;	
			if(data.dataOfLine1[keyName]>data.dataOfLine2[keyName])
			{
				text = data.xAxisData[keyName]+"=>"+data.labelLine1+" "+data.yLabel+" "+data.dataOfLine1[keyName]+"<br>"+data.xAxisData[keyName]+"=>"+data.labelLine2+" "+data.yLabel+" "+data.dataOfLine2[keyName];
			}
			else
			{
				text = data.xAxisData[keyName]+"=>"+data.labelLine2+" "+data.yLabel+" "+data.dataOfLine2[keyName]+"<br>"+data.xAxisData[keyName]+"=>"+data.labelLine1+" "+data.yLabel+" "+data.dataOfLine1[keyName];
			}
//			event.pageY=event.pageY-10;
//			event.pageX=event.pageX+10;
var yHeadingValueMap=[{"headingName":(data.labelLine2+" "+data.yLabel) ,"headingVal":data.dataOfLine2[keyName]},{"headingName":(data.labelLine1+" "+data.yLabel) ,"headingVal":data.dataOfLine1[keyName]}];
						
toolTipManager.showToolTip(event,"",(data.xAxisData[keyName]), false,yHeadingValueMap);
			
			/*	
			tooltip.style("z-index", 1)
				   .style("top", (event.pageY-10)+"px")
				   .style("left",(event.pageX+10)+"px")
				   .html(text);
			*/
				
		}

		function showDountChart()
		{
		d3.select("#dountGroup")
			   .remove();
			   
			var dountGroup = combinationalGroup.append("g")
						   .attr('id','dountGroup')
						   .attr("transform", "translate(" +margin.left + "," +(margin.top) + ")");
			
		 var pie = d3.layout.pie()
							.sort(null)
							.value(function(d) {if(d<0){return 0}else{return d};});
			var arcs = dountGroup.selectAll(".arc")
						.data(pie(clickedYear))
						.enter()
						.append("g")
						.attr('value',function(d,i){if(i==0){return data.labelLine1;}else{return data.labelLine2;}})
						.attr("fill",function(d,i) {return data.color[i];} )
						.on("mouseover", function(){d3.select(this).transition().duration(500).ease('bounce')
									  .attr('transform', function (d) 
									 {
										var dist = 8;
										d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
										var x = Math.sin(d.midAngle) * dist;
										var y = -Math.cos(d.midAngle) * dist;
										return 'translate(' + x + ',' + y + ')';
									 }) ; return tooltip.style("visibility", "visible");})
						.on("mousemove", function(){ getToolTipForDount(d3.select(this).attr('value'));	})
						.on("mouseout", function(){	d3.select(this).transition().duration(500).ease('bounce')
											  .attr('transform', 'translate(0,0)')
									return tooltip.style("visibility", "hidden");});
					
		arcs.append("path")
			.attr("d",arc).transition().duration(1500).attrTween("d", sweep);

		}
			
		function sweep(d) {
			   var i = d3.interpolate({startAngle: -180*grad, endAngle: -180*grad},d);
			 return function (call) {
			  //console.log(call);
			  return arc(i(call));
			 };
			}
		function setMinMaxDataFactor()
		{

		if(d3.min(data.dataOfLine1)<d3.min(data.dataOfLine2))
		{
			minGDP = d3.min(data.dataOfLine1);
		}
		else
		{
			minGDP = d3.min(data.dataOfLine2);
		}		
		if(d3.max(data.dataOfLine1)>d3.max(data.dataOfLine2))
		{
			maxGDP = d3.max(data.dataOfLine1);
		}
		else
		{
			maxGDP = d3.max(data.dataOfLine2);
		}			
		}	

		function showLegend()
		{
			var legendGroup = svgSelection.append("g")
										  .attr('id','legendGroup')					
										  .attr("transform", "translate(" +(2*margin.left+radius*1.5)+ "," + (2*margin.top-legendSize)+ ")");
		legendGroup.selectAll('rect')
		  .data(data.color)
		  .enter()
		  .append("rect")
		  .attr("class","legend")
		  .attr("fill",function(d,i) { return data.color[i];})
		  .attr("y",function(d,i) { return i*2*legendSize  })
		  .attr("width", legendSize)
		  .attr("height",legendSize);
		legendGroup.selectAll('text')
				   .data(data.color)
				   .enter()
				   .append('text')
				 //  .attr('x',function(d, i){ return ((i*(width*.20))+20);})
				   .attr("x", function(d, i){ return legendSize+3})
				   .attr("y",function(d,i) {  if(i==0){return legendSize}else { return 3*legendSize}}   )
				   .style('font-size',12)
				   .style('font-family','calibri')
				   .style('font-style','italic')
				 //  .attr('y',10)
				   .text(function(d,i) { if(i==0){return data.labelLine1+" "+data.yLabel;}else{return data.labelLine2+" "+data.yLabel;} });
		}
		function getToolTipForDount(keyName)
		{
			var text;
			if(keyName==data.labelLine1)
			{
				text = selectedYear+"=>"+data.labelLine1+" "+data.pieDataFactor+" "+clickedYear[0];
			}
			else
			{
					text = selectedYear+"=>"+data.labelLine2+" "+data.pieDataFactor+" "+clickedYear[1];
			}
							tooltip.style("z-index", 1)
								   .style("top", (event.pageY-10)+"px")
								   .style("left",(event.pageX+10)+"px")
								   .text(text);
		}

		function showClickedSymbol()
		{	
			var clickedSymbolGroup = combinationalGroup.append("g")
						   .attr('id','clickedSymbolGroup')
						   .attr("transform", "translate(" + 0 + "," +0 + ")");
			
			var index;
			var GDP1,GDP2,finalData;
			var clickedArray=[];
			for(key in data.clickedInfo)
			{
				clickedArray.push(data.xAxisData.indexOf(parseInt(key)));
			}
						clickedSymbolGroup.selectAll('img')
										  .data(clickedArray)
										  .enter()
										  .append("image")
										  .attr("value",function(d,i){ return data.xAxisData[d]})
										  .attr('x',function(d,i){return scaleX(d)-(symbolSize/2);})
										  .attr('y',function(d,i)
										  {
												
												index = getIndex(data.xAxisData[d]);
												GDP1 = data.dataOfLine1[index];
												GDP2 = data.dataOfLine2[index];
												if(GDP1>GDP2)
												{
													finalData = GDP1;
												}
												else
												{
													finalData = GDP2;
												}
												var countSymbolOnSameYear=0;
												
												for(var counter=i;counter>=0;counter--)
												{
													if(clickedArray[counter]==clickedArray[i])
													{
														++countSymbolOnSameYear;
													}	
												}
												
												return scaleOfCountry(finalData)- ((symbolSize*1.5)*countSymbolOnSameYear);
												})
										  .attr('width',symbolSize)
										  .attr('height',symbolSize)
										  .attr("xlink:href",data.clickedSybmol)
										  .on("click",function() {onClickSymbol(d3.select(this).attr('value'))});

						
				}
				function getIndex(keyName)
				{
					
					for(var counter=0;counter<data.xAxisData.length;counter++)
					{
						if(data.xAxisData[counter]==keyName)
						{
							//alert(counter);
							break;
						}
					}
					return counter;
				}
				
				function onClickSymbol(keyName)
				{
					d3.select('#innerDiv').text(data.clickedInfo[keyName]);
					message.style("visibility", "visible");
					message.style("top", (event.pageY-10)+"px")
										   .style("left",(event.pageX+10)+"px");
										   
					tooltip.style("visibility", "hidden");
				}
				function gridManager(svg, height, width, left, top) 
				{
								var hfactor = Math.ceil(height * .1);
								var vfactor = Math.ceil(width * .1);
								var hRange = Math.ceil(height / hfactor);
								var vRange = Math.ceil(width) / vfactor;
								svg.selectAll(".hline").data(d3.range(hRange)).enter()
									.append("line")
									.attr("y1", function (d) 
								{
									return d * hfactor + 6;
								})
									.attr("y2", function (d) {
									return d * hfactor + 6;
								})
									.attr("x1", function (d) {
									return 0;
								})
									.attr("x2", function (d) {
									return width;
								})
									.style("stroke", "lightgray")
									.style("z-index", -5)
									.attr("transform", "translate(" + left + "," + top + ")");

								svg.selectAll(".vline").data(d3.range(vRange)).enter()
									.append("line")
									.attr("x1", function (d) {
									console.log(" value D : " + d);
									return d * (width / 10);
								})
									.attr("x2", function (d) {
									return d * (width / 10);
								})
									.attr("y1", function (d) {
									return 0;
								})
									.attr("y2", function (d) {
									return height;
								})
									.style("stroke", "lightgray")
									.attr("z-index", -5)
									.attr("transform", "translate(" + left + "," + top + ")");
					 }
			
			}
		
		}


		var drillDownChart = {
            drawDrillDownChart: function (id, barData,options) {
                var cfg = {
                    topMargin: 5,
                    rightMargin: 30,
                    bottomMargin: 0,
                    leftMargin: 10,
                    color: d3.scale.category20(),
					toolTipLabel:'Drilled Chart',
					redraw:'false'
					
                };
				
				
                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }
				
				if(svgElement.selectAll(".tick").empty()){
					chartData=barData;	
					height=height-height*0.2;
				}else{
					svgElement.selectAll("g").remove();
				}
				
				InitChart();
				
				
				
				
				
                function InitChart() {


					var groupingHeight=height*0.1;
					var left;
					
					if(width*0.05<30){
						left=30;
					}else{
						left=width*0.05;
					}
					
                    var vis = svgElement.append("svg:g")
                        .attr("width", width)
                        .attr("height", height)
                        .attr('class', 'backtobrand')
						.attr("transform","translate("+left+","+height*0.1+")")
                        .append("g");
						
					
					
					
					var browserData=[];
					var counter=0;
					//find Max for browser
					var maxBrowserYVal=0;
					var minBrowserYVal=0;
					for(var key  in barData){
						if(maxBrowserYVal<barData[key].data){
							maxBrowserYVal=barData[key].data;
						}
						
						if(minBrowserYVal>barData[key].data){
							minBrowserYVal=barData[key].data;
						}
						
						//fomrat data
						var subData=barData[key].subData;
						var subDataArray=[];
						var subDataCountr=0;
						for(var subDataKey in subData){
							var subVal=subData[subDataKey];
							
							var subObj={"name":subDataKey,"x":subDataCountr,"y":subVal};
							subDataArray.push(subObj);
							subDataCountr++;
						}
						
						var obj={"x":counter,"y":barData[key].data,color:barData[key].color,subDataColorArray:barData[key].subDataColorArray,"name":key,"subData":subDataArray};
						browserData.push(obj);
						
						counter++;
					}
					
					
					var maxYScale=maxBrowserYVal;
						
					maxYScale=maxYScale*1.5;
					
					var xScale = d3.scale.ordinal().rangeRoundBands([left, (width-width*0.05)], 0.1).domain(
						
					browserData.map(function(d,i){
						return i;
					}))
					
					,

						
						
                        yScale = d3.scale.linear().range([height - cfg.topMargin, cfg.bottomMargin]).domain([0,
                        maxYScale]),

                        xAxis = d3.svg.axis()
                            .scale(xScale)
                            .tickSize(5)
                            .tickSubdivide(true),

                        yAxis = d3.svg.axis()
                            .scale(yScale)
                            .tickSize(5)
                            .orient("left")
                            .tickSubdivide(false);

		/*			var largestStringLngth=((browserData[0]["name"].toString()).length);
					for(var charCountr=0;charCountr<browserData.length;charCountr++){
						var currentStringLngth=(browserData[charCountr]["name"].toString()).length;
						
						if(largestStringLngth<currentStringLngth){
								largestStringLngth=currentStringLngth;
						}
					}*/
				
				//	var xAxisTickArr=tickController.getXTickArray(0,(browserData.length-1),largestStringLngth, (width - cfg.rightMargin));
				//	alert(xAxisTickArr);			
					//alert("length "+browserData.length +" largest "+largestStringLngth +" w "+(width - cfg.rightMargin) +" arr "+xAxisTickArr);
					
			//		xAxis.tickValues(xAxisTickArr)
                    var xAxisRef=vis.append('svg:g')
                        .attr('class', 'x axis')
                        .attr('transform', 'translate(0,' + (height - cfg.bottomMargin) + ')')
                        .call(xAxis);
						
					xAxisRef.selectAll("text")
					.text(function(d,i){
							return browserData[d]["name"];
					});
					
					xAxisRef.selectAll("text").call(textWrapper.wrapText,40);
					
                    var yAxisRef=vis.append('svg:g')
                        .attr('class', 'y axis')
                        .attr('transform', 'translate(' + (cfg.leftMargin) + ','+(-cfg.bottomMargin)+')')
                        .call(yAxis);

                    vis.selectAll('rect')
                        .data(browserData)
                        .enter()
                        .append('rect')
                        .on('click', function (d) {
						
						
						if(d["subData"].length>0){
							drawNewBarChart(d["subData"],d.subDataColorArray);
						}else{
							alert("dont have sub data");
						}
                        
						d3.select(".resetDrillBtnGroup").style("display","block");

                    })
                    .on("mouseover", function (d) {
							
							/*
							d3.select("#drillDownTooltip")
                            .style("left", d3.event.pageX + "px")
                            .style("top", d3.event.pageY + "px")
                            .style("opacity", 1)
                            .select("#value")
                            .text(d.y);
							*/
							
							var yHeadingValueMap=[{"headingName":(cfg.yLabel) ,"headingVal":d.y}];
							
							
							toolTipManager.showToolTip(d3.event,"",(cfg.xLabel +" "+d.name), false,yHeadingValueMap,d3.event.pageY*0.95);
							
							//toolTipManager.showToolTip(d3.event, d.y,"", false, cfg.toolTipLabel );
                    })
                     .on('mouseout', function (d) {
						toolTipManager.hideTooTip();
                        //d3.select("#drillDownTooltip").style("opacity", 0);
                    })
                        .attr('x', 0)
                        .attr('y', height)
                        .transition()
                        .duration(1200)
                        .attr('x', function (d) {
                        return xScale(d.x);
                    })
                    .attr('y', function (d) {
                        return yScale(d.y)-cfg.bottomMargin;
                    })
                    .attr('width', xScale.rangeBand())
                    .attr('height', function (d) {
						return ((height) - yScale(d.y));
                    })
                    .attr('fill', function (d, i) {
	
                        return d.color;
                    })
					.style("cursor",function(d){
						if(d["subData"].length>0){
							return "pointer";
						}else{
							return "";
						}
					});
					
					if(d3.select(".resetDrillDownBtn").empty()){
					
									var reesetBtnWidth=70;
									var reesetBtnHeight=30;
									
									var resetBtnGrouping=svgElement.append("g")
															.attr("class","resetDrillBtnGroup")
														  .attr("transform", "translate(" + (width-(cfg.leftMargin*3)) + "," + (margin.top) + ")" );
														  
														  resetBtnGrouping.append("rect")
														  .attr("width",reesetBtnWidth)
														  .attr("height",reesetBtnHeight)
														  .attr("x","0")
														  .attr("y","0")
														  .attr("rx","2")
														  .attr("ry","2")
														  .attr("class",'resetDrillDownBtn')
														  .on("mouseover",function(){
															d3.select('.resetDrillDownBtn').style("fill",'#7F7FFF');
														  })
														  .on("mouseout",function(){
															d3.select(this).style("fill",'blue');
														  })
														  .style('fill','blue')
														  .style('display','inline-block')
														  .style("cursor","pointer")
														  ;
														  
														  
									resetBtnGrouping.append("text")
													.attr("x",20)
													.attr("y",reesetBtnHeight/2)
													.attr("dy",'.35em')
													.attr("class","resetDrillDownBtn")
													.text("Reset")
													.attr("fill","white");
								d3.select(".resetDrillBtnGroup").style("display","none");
							}
					
					function drawNewBarChart(d,colorArray) {

                        var data=d;
						
						/*
                        if (d.x == 'Chrome') data = Chrome;
                        else if (d.x == 'Firefox') data = Firefox;
						*/

                        if ('undefined' !== typeof data) {
                            vis.remove();


                            vis = svgElement.append("svg")
                                .attr("width", width)
                                .attr("height", (height*1.5))
                                .append("g")
								.attr("transform","translate("+left+","+height*0.05+")");


                            xScale = d3.scale.ordinal().rangeRoundBands([left, width - width*0.05], 0.1).domain(data.map(function (d) {
                                return d.x;
                            }));
							
							var maxYScale=d3.max(data, function (d) {
											return d.y;
										 });
							maxYScale=maxYScale*1.5;
							
                            yScale = d3.scale.linear().range([height -height*0.08,height*0.08]).domain([0,
                            maxYScale]);

                            xAxis = d3.svg.axis()
                                .scale(xScale)
                                .tickSize(5)
                                .tickSubdivide(false),

                            yAxis = d3.svg.axis()
                                .scale(yScale)
                                .tickSize(5)
                                .orient("left")
                                .tickSubdivide(false);
							
							var largestStringLngth=(data[0]["name"].length);
							for(var charCountr=0;charCountr<data.length;charCountr++){
								var currentStringLngth=data[charCountr]["name"].length;
								
								if(largestStringLngth<currentStringLngth){
										largestStringLngth=currentStringLngth;
								}
							}
						
							
							var xAxisTickArr=tickController.getXTickArray(0,(data.length),largestStringLngth, (width - cfg.rightMargin));
							
							//alert("length "+browserData.length +" largest "+largestStringLngth +" w "+(width - cfg.rightMargin) +" arr "+xAxisTickArr);
							
							xAxis.tickValues(xAxisTickArr)
                            var xAxisRef=vis.append('svg:g')
                                .attr('class', 'x axis')
                                .attr('transform', 'translate(0,' + (height - cfg.bottomMargin) + ')')
                                .call(xAxis);
								
								xAxisRef.selectAll("text")
								.text(function(d){
									return data[d]["name"];
								});

							var yAxisRef=vis.append('svg:g')
                                .attr('class', 'y axis')
                                .attr('transform', 'translate(' + (cfg.leftMargin) + ',-35)')
                                .call(yAxis);


                            vis.selectAll('rect')
                                .data(data)
                                .enter()
                                .append('rect')
                                .attr("id", id)
                                .on("mouseover", function (d) {
									/*
									d3.select("#drillDownTooltip")
										.style("left", d3.event.pageX + "px")
										.style("top", d3.event.pageY + "px")
										.style("opacity", 1)
										.select("#value")
										.text(d.y);
									*/
									var yHeadingValueMap=[{"headingName":(cfg.yLabel) ,"headingVal":d.y}];
						
									toolTipManager.showToolTip(d3.event,"",(cfg.xLabel +" "+d.name), false,yHeadingValueMap);
									
									//toolTipManager.showToolTip(d3.event, d.y,"", false, cfg.toolTipLabel );	
								})
                                .on('mouseout', function (d) {
									toolTipManager.hideTooTip();
									//d3.select("#drillDownTooltip").style("opacity", 0);
								})
                                .attr('x', 0)
                                .attr('y', height)
                                .transition()
                                .duration(1200)
                                .attr('x', function (d) {
                                return xScale(d.x);
                            })
                                .attr('y', function (d) {
                                return yScale(d.y)-cfg.bottomMargin;
                            })
                                .attr('width', xScale.rangeBand())
                                .attr('height', function (d) {
                                return ((height) - yScale(d.y));
                            })
                                .attr('fill', function (d, i) {
                                return colorArray[i];
                            });
							
							//draw y indication label
						var pixcelPerChar=6;
						var totalYLabelPixcel=cfg.yLabel.toString().length*pixcelPerChar;
						var yIndicationLabelTop=height/2+totalYLabelPixcel/2;
						var yIndicationLabelLeft=-left-left*0.5;
						axisLabelController.appendLabel(cfg.yLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,yAxisRef,textStyleConfg.xLabelColor,600);
						
						var totalYLabelPixcel=cfg.xLabel.toString().length*pixcelPerChar;
						var xIndicationLabelTop=height*0.1;
						var xIndicationLabelLeft=width/2-totalYLabelPixcel/2;
						axisLabelController.appendLabel(cfg.xLabel,xIndicationLabelLeft,xIndicationLabelTop,0,xAxisRef,textStyleConfg.yLabelColor,600);
						
							d3.select(".resetDrillDownBtn").on("click", function (d) {


                                //$(selectorElement).find("svg g").remove();
								
								drillDownChart.drawDrillDownChart(id,chartData,options);
								
								d3.select(".resetDrillBtnGroup").style("display","none");
								
								
                            });
                        }
                    };
					
					//draw y indication label
					var pixcelPerChar=6;
					var totalYLabelPixcel=cfg.yLabel.toString().length*pixcelPerChar;
					var yIndicationLabelTop=height/2+totalYLabelPixcel/2;
					var yIndicationLabelLeft=-left;
					axisLabelController.appendLabel(cfg.yLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,yAxisRef,textStyleConfg.yLabelColor,600);
					
					var totalYLabelPixcel=cfg.xLabel.toString().length*pixcelPerChar;
					var xIndicationLabelTop=height*0.1;
					var xIndicationLabelLeft=width/2-totalYLabelPixcel/2;
					axisLabelController.appendLabel(cfg.xLabel,xIndicationLabelLeft,xIndicationLabelTop,0,xAxisRef,textStyleConfg.xLabelColor,600);
					
					//hide all axis path
					hideAxisPath(svgElement);
					
					//set font here
					
						setTextStyleAndSvgBackGround(svgElement);
					
                };
            }
        };
		//variation chart
		
		var darwVariationAnalysisGraph=
		{
				variationAnalysis:function(cnfg)
				{
						var variationAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.15,top:height*0.15,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var title = cnfg.data.title;
				var subTitle =cnfg.data.subTitle;
				var titleColor = cnfg.data.titleColor;
				var yAxisData = cnfg.data.yAxisData;
				var yAxisLabel = cnfg.data.yAxisLabel;
				var xAxisData = cnfg.data.xAxisData;
				var xAxisLabel = cnfg.data.xAxisLabel;
				var scaleWidth=width-variationAnalChart.left-variationAnalChart.right;
				var scaleHeight=height-variationAnalChart.top-variationAnalChart.bottom;
				var fontSize,rectangleSize,rectangleTextSize,titleFontSize,gridFactor;
				if(width<501)
				{
						titleFontSize = 18
						gridFactor = 8;
						fontSize = 11;
						rectangleSize = 9;
						rectangleTextSize =9;
				}
				else
				{	
						titleFontSize = 20;
						gridFactor = 12;
						fontSize = 14;
						rectangleSize = 10;
						rectangleTextSize =10;
				}
				
				var fontFamily = 'calibri';
				var xAxisLabelColor = "black"
				//make low value and high value array
				var lowValue = [],highValue = [];
				var index =0;
				for(var outerLoop=0;outerLoop<xAxisData.length;outerLoop++)
				{
					for(var innerLoop=0;innerLoop<2;innerLoop++)
					{	
						if(innerLoop==0)
							lowValue[index]=xAxisData[outerLoop][innerLoop];
						else
							highValue[index++]=xAxisData[outerLoop][innerLoop];
					}
				}	
				
				variationMainGroup = svgElement.append("g")
					.attr('class','main-group')
                    .attr("transform", "translate(" + variationAnalChart.left + "," + variationAnalChart.top + ")");
								
			
				//title label here
				axisLabelController.appendLabel(title,(variationAnalChart.left),((-variationAnalChart.top/1.4)),0,variationMainGroup,textStyleConfg.titleColor,700);

				//subTitle label here				
				 axisLabelController.appendLabel(subTitle,(variationAnalChart.left+10),((-variationAnalChart.top/2.6)),0,variationMainGroup,textStyleConfg.titleColor,600);
				 
				 var gridManager = {
            init: function (svg, height, width, left, top) {
                var vfactor = Math.ceil(height * .2);
                var vRange = Math.ceil(width / vfactor);
				
                svg.selectAll(".vline").data(d3.range(vRange)).enter()
                    .append("line")
                    .attr("x1", function (d) {
                    return (d * (width /gridFactor));
                })
                    .attr("x2", function (d) {
                    return (d * (width /gridFactor));
                })
                    .attr("y1", function (d) {
                    return 0;
                })
                    .attr("y2", function (d) {
                    return height;
                })
                    .style("stroke", "gray")
                    .attr("transform", "translate(" + left + "," + top + ")");
            }

        };
				
		  gridManager.init(variationMainGroup, scaleHeight, scaleWidth, 0, 0);		
				
				
				var yScale = d3.scale.linear()
							   .domain([0,yAxisData.length-1])
                               .range([0,scaleHeight]);
	            
				var yAxis = d3.svg.axis()
                                  .scale(yScale)
                                  .orient("left")
								  .tickValues(tickController.getTickArray(0,yAxisData.length-1,12));
								  
                var yAxisGroup = variationMainGroup.append("g")
									.attr("class","y-axis")
									.attr("transform","translate("+0+","+0+")")
						       	    .attr('fill','none')
									.call(yAxis)
									.selectAll('text')
									.text(function(d){return yAxisData[d];})
									.attr('fill','black');	
		    
		    /*	var yAxisLabelGroup = variationMainGroup.append("g")
									.attr('class','y-axis-label-group')	
				     				.attr("transform","translate("+(-variationAnalChart.left/1.7)+","+scaleHeight/1.5+")");			
									
					yAxisLabelGroup.append('text')
					               .attr('x',0)
								   .attr('y',0)
								   .attr('font-size',fontSize)
							       .attr('font-family',fontFamily)
								   .attr('fill',titleColor)
								   .attr('transform','rotate(-90)')
								   .text(yAxisLabel);*/
				//yAxis label here
				var pixcelPerChar = 6;
				var totalYLabelPixcel=yAxisLabel.toString().length*pixcelPerChar;
				var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;
				var yIndicationLabelLeft=(-variationAnalChart.left/2)
				axisLabelController.appendLabel(yAxisLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,variationMainGroup,textStyleConfg.yLabelColor,600);
				   
									
		//		alert(d3.min(lowValue)+"  " +d3.max(highValue));
				var xScale = d3.scale.linear()
							   .domain([d3.min(lowValue)*1.5,d3.max(highValue)*1.5])
                               .range([0,scaleWidth]);
	            
				var xAxis = d3.svg.axis()
                                  .scale(xScale)
                                  .orient("bottom");						  
                var xAxisGroup = variationMainGroup.append("g")
									.attr("class","x-axis")
									.attr("transform","translate("+0+","+(scaleHeight+10)+")")
						         	 
							         .attr('font-size',fontSize)
									 .attr('fint-family',fontFamily)
					                 .call(xAxis)
									 .selectAll('text')
									 .attr('fill','black');
				d3.select('.x-axis').attr('fill','none');	
			
		//xAxis label here
				var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
				var xIndicationLabelTop=scaleHeight+(scaleHeight*0.15);
				var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;
				axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,variationMainGroup,textStyleConfg.xLabelColor,600);
				
				var rectangleGroup = variationMainGroup.append("g")
									.attr("class","rectangle-group")
									.attr("transform","translate("+0+","+0+")");
				
var rectangleGradient = rectangleGroup.append("svg:defs")
									.append("svg:linearGradient")
									.attr("id", "rectangleGradient")
									.attr("x1", "0%")
									.attr("y1", "0%")
									.attr("x2", "100%")
									.attr("y2", "100%")
									.attr("spreadMethod", "pad")
									.attr("gradientTransform","rotate(0)");

				rectangleGradient.append("stop")
					.attr("offset", "0")
					.attr("stop-color", "#04b4ae");
				rectangleGradient
					.append("stop")
					.attr("offset", "1")
					.attr("stop-color", "#0489b1");
		
								var midValue=(d3.min(lowValue)+d3.max(highValue))/2;
								
								var rectGroupRef=rectangleGroup.selectAll('rect')
											  .data(highValue)
											  .enter()
											  .append('rect')
											  .attr('value',function(d,i){return i})
											  .attr('x',function(d,i){return xScale(midValue);})
											  .attr('y',function(d,i){return yScale(i)})
											  .attr('width',function(d,i){return 0;})
											  .attr('height',rectangleSize)
											  .attr('fill',"url(#rectangleGradient)");
							
								rectGroupRef
								.transition()
								.duration(1000)
								.attr('x',function(d,i){return xScale(lowValue[i])})
								.attr('width',function(d,i){return xScale(highValue[i])-xScale(lowValue[i])});
								
											  
								rectangleGroup.selectAll('text')
											  .data(highValue)
											  .enter()
											  .append('text')
											  .attr('x',function(d,i){return xScale(lowValue[i])-((lowValue[i].toString().length+xAxisLabel.length)*(rectangleTextSize)/1.7)})
											  .attr('y',function(d,i){return yScale(i)+rectangleTextSize/1.5})
											  .attr('font-size',rectangleTextSize)
							                  .attr('font-family',fontFamily)
											  .attr('font-weight','500')
											  .text(function(d,i){return lowValue[i]+" "+xAxisLabel});
								
				var rectangleTextRightSide = variationMainGroup.append("g")
									.attr("class","rectangleTextRightSide")
									.attr("transform","translate("+0+","+0+")");
								
								
								rectangleTextRightSide.selectAll('text')
											  .data(highValue)
											  .enter()
											  .append('text')
											  .attr('x',function(d,i){return xScale(highValue[i])+6})
											  .attr('y',function(d,i){return yScale(i)+rectangleTextSize/1.5})
											  .attr('font-size',rectangleTextSize)
							                  .attr('font-family',fontFamily)
											  .attr('font-weight','500')
											  .text(function(d,i){return highValue[i]+" "+xAxisLabel});			  
											  //(lowValue[i].toString().length)*fontSize)
				}
		};
		
        var pieChartWithTransition = {
		drawPieChartWithTransition: function (options) {
                var options = $.extend({

                    'data': []
                }, options);

                var dataset=options.value;
				
				var factor = options.label;
				/*
                if (options.data.length == 0) {
                    dataset = chartData;
                } else {
                    dataset = options.data;
                }
				*/
                var legendsArray = options.key;
				var legendTextLength = 0;
				for(var index = 0;index<legendsArray.length;index++)
				{
					if(legendTextLength<legendsArray[index].length)
					{
						legendTextLength = legendsArray[index].length;
					}
				}
				
				
				
				
			//	alert(legendTextLength);
				var legendWidth=18;
                var curwidth = height > width ? width : height;
                var marginArc = curwidth * .20;
                var curMarginLeft = width * .25;
                var outerRadius = (curwidth - (marginArc)) / 2;
                outerRadius = outerRadius - legendTextLength*5-legendWidth*2;
				var innerRadius = 0;
                var radius = 100;
				var grad = Math.PI / 180;


                var pie = d3.layout.pie().sort(null).startAngle(0 * grad).endAngle(360 * grad);
                var arc = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
                var arcOver = d3.svg.arc().innerRadius(innerRadius)
                    .outerRadius(outerRadius + 14);

                var color = "";
                if (options.color == null) {
                    color = d3.scale.category20b();
                } else {
                    color = function (i) {
                        return options.color[i];
                    }
                }

                var svg = svgElement.append("g")
								.attr("transform", "translate(" +(-width*0.1) + "," + 0 + ")")
                  
				  //  .attr("width", width)
                  //  .attr("height", height);

                var arcs = svg.selectAll("g.arc")
                    .data(pie(dataset))
                    .enter()
                    .append("g")
                    .attr("class", "slice")
                    .attr("stroke", "white")
                    .attr("stroke-width", 0)
                    .attr("transform", "translate(" + (width/2) + "," + (height/3) + ")")
                    .on("mouseover", function (d, i) {

                    var json = JSON.parse('{"' + factor + '":' + d.value + "}");
				//	alert(legendsArray[i].replace(/ /g, "") + 'text')
                    d3.select('#' + legendsArray[i].replace(/ /g, "") + 'text')
                        .transition()
                        .attr("x", 24 + 10)
                        .style('font-weight', 'bold')
                        .style('fill', 'bold');
                    svg.select('#' + legendsArray[i].replace(/ /g, "") + 'path')
                        .attr("stroke", "white")
                        .transition()
                        .duration(500)
                        .attr("d", arcOver)
                        .attr("stroke-width", 1);
					
					var yHeadingValueMap=[{"headingName":(factor) ,"headingVal":d.value}];
						
					toolTipManager.showToolTip(d3.event,"",(legendsArray[i]), false,yHeadingValueMap);	
					//toolTipManager.showToolTip(d3.event,d.value,legendsArray[i], false,factor );	
                    //toolTipManager.showToolTipForBarWithMultipleLine(d3.event, json, legendsArray[i], false, null, false);
                })
                    .on("mouseout", function (d, i) {

                    d3.select('#' + legendsArray[i].replace(/ /g, "") + 'text')
                        .transition()
                        .attr("x", 24)
                        .style('font-weight', textStyleConfg["font-weight"])
                        .style('fill', 'black');
                    svg.select('#' + legendsArray[i].replace(/ /g, "") + 'path')
                        .transition()
                        .attr("d", arc)
                        .attr("stroke-width", 0);
					toolTipManager.hideTooTip();	
                    //toolTipManager.hideMulitpleLineBarToolTip();
                });



                arcs.append("path")
                    .attr("fill", function (d, i) {
                    return color(i);
                })
                    .attr('id', function (d, i) {
                    return legendsArray[i].replace(/ /g, "") + 'path';
                })
                .attr("d", arc)
                .on("click", function (d, i) {
                    svg.select('#' + legendsArray[i].replace(/ /g, "") + 'text')
                        .transition()
                        .attr("x", 24 + 10)
                        .style('font-weight', 'bold')
                        .style('fill', 'bold');
                    d3.select(this)
                        .attr("stroke", "white")
                        .transition()
                        .duration(500)
                        .attr("d", arcOver)
                        .attr("stroke-width", 1);
                })
                .on("mouseleave", function (d, i) {
					
                    svg.select('#' + legendsArray[i].replace(/ /g, "") + 'text')
                        .transition()
                        .attr("x", 24)
                        .style('font-weight', textStyleConfg["font-weight"])
                        .style('fill', textStyleConfg["legendTextColor"]);
					
						
                    d3.select(this).transition()
                        .attr("d", arc)
                        .attr("stroke-width", 0);
                })
                .transition().duration(1500).attrTween("d", sweep);

                function sweep(a) {
                    var i = d3.interpolate({
                        startAngle: -180 * grad,
                        endAngle: -180 * grad
                    }, a);
                    return function (t) {
                        return arc(i(t));
                    };
                }
				var legend = svgElement.append('g')
									   .attr('class','legend')
									   .attr("transform","translate(" + (10) + "," + 0 + ")"); 
									   
				legend.selectAll('rect')
                            .data(legendsArray)
                            .enter()
                            .append("rect")
					//		.attr('x',)
							.attr('y',function(d,i){return (legendWidth + (1.2*i * legendWidth))})
							.attr('height',legendWidth)
							.attr('width',legendWidth)
							.style("fill", function (d, i) {return color(i);});
							
							
				legend.selectAll('text')
                            .data(legendsArray)
                            .enter()
                            .append("text")
							.attr('id', function (d, i) {	return legendsArray[i].replace(/ /g, "") + 'text';})
							.attr("x", 233)
							.transition()
							.duration(function (d, i) {
							return i * 400;
							})
							.attr("x", legendWidth + 5)
							.attr("y", function(d,i){ return (legendWidth + (1.2*i * legendWidth))+(legendWidth/2)})
							.attr("dy", ".35em")
							.text(function (d, i) {return legendsArray[i];});			
	
		// set text style here
				setTextStyleAndSvgBackGround(svgElement);
            },
			dountChartWithLegend:function(cnfg)
			{
				var positionRect = 0,radius,innerRadius;
				var positionText = 0;
				var grad = Math.PI/180;
				var selected=1;
				var divId=cnfg.divId;
				var data=cnfg.data;
				
				 var backUpOfData = {
										key :[],
										value :[],
										color :[]
									};
				 var list = ['dountChart','pie chart'];
				 //alert(parseInt(d3.select("#"+divId).style("width")));
				 var width =parseInt(d3.select("#"+divId).style("width"));
				 var height=parseInt(d3.select("#"+divId).style("height")); 
				 var textSize,textHeight,textSpce;
				if(width<301 || height <301)
				{
					textSize = 10;textHeight=6,textSpace=7;
				}
				else if(width<401 || height <401)
				{
					textSize = 12;textHeight=9,textSpace=9;
				}
				else if(width<601 || height <601)
				{
					textSize = 14;textHeight=10,textSpace=12;
				}
				else
				{
					textSize = 15;textHeight=11,textSpace=19;
				}
				 var margin = {top: height*.10, right: width*.10, bottom: height*.20, left: width*.10};
				 var width = width - margin.left - margin.right;
				 var height = height - margin.top - margin.bottom;
				 var lengthOfChar=data.key.length;
				var tooltip = d3.select("body")
					.append("div")
					.style('background','rgba(0,0,0,.6)')
					.style("position", "absolute")
				//	.style("z-index", 1)
					.style("visibility", "hidden")
					.style("font-family",'calibri')
					.style("font-style",'normal')
					.style("color",'white')
					.text("a simple tooltip"); 
				var rectSize;
				if(height<width)
				{
					radius = (height/2);
					rectSize = height*.05;
				}
				else
				{
					radius = (width/2);
					rectSize = (width)*.05;
				}	 
				innerRadius = radius-(radius*.5);
				 var divSelection = d3.select("#"+divId);
				 
				 var svgSelection =svgElement;
				 
				 var group = svgSelection.append("g")
								   .attr('id','group')
								   .attr("transform", "translate(" + (width + margin.left + margin.right)/2 + "," + (((height + margin.top + margin.bottom)/2)-margin.top) + ")");
				 
				 var widthOfDount = 2*radius;
				 
				 var arc = d3.svg.arc()
							.innerRadius(innerRadius)
							.outerRadius(radius);
							
				 var pie = d3.layout.pie()
							//		.padAngle(.02)
									.sort(null)
									.value(function(d) { return d;});
									
					refreshPie();				
				 /*	*/  
				var legendGroup = svgSelection.append("g")
								   .attr("transform", "translate(" +(((width + margin.left + margin.right)/2)-radius)+ "," + (((height + margin.top + margin.bottom)/2)+radius)+ ")");

				legendGroup.selectAll('rect')
				  .data(data.value)
				  .enter()
				  .append("rect")
				  .attr("class","legend")
				  .attr ('value',function(d,i) { return data.key[i];})
				  .attr("fill",function(d,i) { return data.color[i];})
				  .attr("x", function(d, i){ if(i>3){return ((parseInt(i/4)-1)+(positionRect++)*(widthOfDount*.3))}else{return (i*(widthOfDount*.3))};})
				  .attr("y",function(d,i) { if(i>3){return (rectSize*2) }   })
				  .attr("width", rectSize)
				  .attr("height",rectSize)
				  .on("click", function(d,i) 
				  {	
						if(d3.select(this).attr("fill")=="gray")
						{          d3.select(this).attr("fill",addPie(d3.select(this).attr('value')));
									d3.select(this).style("text-decoration","none");
						}			
						else
						{			d3.select(this).attr("fill","gray")
									d3.select(this).style("text-decoration","line-through");
									removePie(d3.select(this).attr('value')) ;	}
				})

				var legendText=legendGroup.selectAll('text')
						   .data(data.value)
						   .enter()
						   .append('text')
						 //  .attr('x',function(d, i){ return ((i*(width*.20))+20);})
						   .attr("x", function(d, i){ if(i>3){return ((parseInt(i/4)-1)+(positionText++)*(widthOfDount*.3))+rectSize+3}else{return (i*(widthOfDount*.3))+rectSize+3};})
						   .attr("y",function(d,i) { if(i>3){return (3*rectSize) }else{return rectSize}   })
						   .style('font-size',textSize)
						   .style('font-family','calibri')
						   .style('font-style','italic')
						 //  .attr('y',10)
						   .text(function(d,i) { return data.key[i]; });
				
				setTextStyleAndSvgBackGround(legendGroup);	
				
				legendText.style("fill",textStyleConfg["legendTextColor"]);
				
				 function removePie(keyName)
				 {
					var keyIndex=getIndex(keyName);	
					backUpOfData.value.splice(0,0,data.value[keyIndex]);
					backUpOfData.key.splice(0,0,data.key[keyIndex]);
					backUpOfData.color.splice(0,0,data.color[keyIndex]);
					data.value.splice(keyIndex,1);
					data.key.splice(keyIndex,1);
					data.color.splice(keyIndex,1);
					
					refreshPie();
				}
				function addPie(keyName)
				{
					for(var counter=0;counter<backUpOfData.key.length;counter++)
					{
						if(backUpOfData.key[counter]==keyName)
						{break;}
					}
					data.value.splice(0,0,backUpOfData.value[counter]);
					data.key.splice(0,0,backUpOfData.key[counter]);
					data.color.splice(0,0,backUpOfData.color[counter]);
					refreshPie();	
					return backUpOfData.color[counter];
				}  

				function getIndex(keyName)
				{
					for(var counter=0;counter<data.key.length;counter++)
					{
						if(data.key[counter]==keyName)
						{
							//alert(counter);
							break;
						}
					}
					return counter;
				}				
				function getPercentage(keyName)
				{
					var keyValue,sum=0;
					for(var traverse = 0 ;traverse<data.value.length;traverse++)
					{
						if(data.key[traverse]==keyName)
						{
							keyValue=data.value[traverse];
						}
						sum =sum+data.value[traverse];
					}
					return Math.round(((keyValue/sum)*100));
				}
				function getToolTip(keyName,event)
				{

					var keyIndex=getIndex(keyName);
					/*	
					tooltip.style("top", (event.pageY-10)+"px")
				   .style("left",(event.pageX+10)+"px")
				   .text(data.key[keyIndex]+","+data.label+"-"+getPercentage(keyName)+"%");
				   */
				   
					var yHeadingValueMap=[{"headingName":(data.label) ,"headingVal":getPercentage(keyName)+"%"}];
						
					toolTipManager.showToolTip(event,"",(data.key[keyIndex]), false,yHeadingValueMap);	
					
				}

				function refreshPie()
				{
					d3.select("#group")
					   .remove();
					group = svgSelection.append("g")
								   .attr('id','group')
								   .attr("transform", "translate(" + (width + margin.left + margin.right)/2 + "," + (((height + margin.top + margin.bottom)/2)-margin.top) + ")");

				var arcs = group.selectAll(".arc")
								.data(pie(data.value))
								.enter()
								.append("g")
								.attr('value',function(d,i) {return data.key[i];})
								.attr("fill",function(d,i){return data.color[i];} )
								.on("mouseover", function(){
									d3.select(this).transition().duration(500).ease('bounce')
									.attr('transform', function (d) 
									 {
										var dist = 15;
										d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
										var x = Math.sin(d.midAngle) * dist;
										var y = -Math.cos(d.midAngle) * dist;
										return 'translate(' + x + ',' + y + ')';
									 }) ;
									//return tooltip.style("visibility", "visible");
									getToolTip(d3.select(this).attr('value'),d3.event);	
								})
								/*
								.on("mousemove", function(){ 
									getToolTip(d3.select(this).attr('value'));	
									
								})
								*/
								.on("mouseout", function(){	d3.select(this).transition().duration(500).ease('bounce')
													  .attr('transform', 'translate(0,0)')
											//return tooltip.style("visibility", "hidden");
										toolTipManager.hideTooTip();	
								});
								
				arcs.append("path")
					.attr("d",arc)
					.transition().duration(1500).attrTween("d", sweep);
					try{
						setTextStyleAndSvgBackGround(legendGroup);
					}catch(err){
						
					}
				}

				function sweep(d) {
					   var i = d3.interpolate({startAngle: -180*grad, endAngle: -180*grad},d);
					 return function (call) {
					  //console.log(call);
					  return arc(i(call));
					 };
					}
				
			},

			drawDountWithBarChart:function(cnfg)
			{
				var divId=cnfg.divId;
				var data=cnfg.data;
				var subDataArray=cnfg.subDataArray;
				//var textColor=cnf.textColor;
				
				var positionRect = 0;
				var positionText = 0;
				var grad = Math.PI/180;
				var selected=1,radius,innerRadius;
				var popUpArc=0;
				var backUpOfData = {
										key :[],
										value :[],
										color :[]
									};
									
				 var width =parseInt(d3.select("#"+divId).style("width"));
				 var height=parseInt(d3.select("#"+divId).style("height")); 
				 var textSize,textHeight,textSpace;
				 if(width<301 || height <301)
				{
					textSize = 7;textHeight=6,textSpace=7;
				}
				else if(width<401 || height <401)
				{
					textSize = 10;textHeight=9,textSpace=9;
				}
				else if(width<601 || height <601)
				{
					textSize = 12;textHeight=10,textSpace=12;
				}
				else
				{
					textSize = 14;textHeight=11,textSpace=19;
				}
				var marginSpace = {top: height*.10, right: width*.10, bottom: height*.20, left: width*.10};
				var width = width - marginSpace.left - marginSpace.right;
				var height = height - marginSpace.top - marginSpace.bottom;
				
				var tooltip = d3.select("body")
					.append("div")
					.style('background','rgba(0,0,0,.6)')
					.style("position", "absolute")
				//	.style("z-index", 1)
					.style("visibility", "hidden")
					.style("font-family",'calibri')
					.style("font-style",'normal')
					.style("color",'white')
					.text("a simple tooltip"); 
				var divSelection = d3.select("#"+divId);
				 
				var svgSelection = svgElement.append("g")
											 .attr("transform","translate("+0+","+marginSpace.top+")");
				
				var dountGroup = svgSelection.append("g")
								   .attr('id','dountGroup')
								   .attr("transform", "translate(" + ((width + marginSpace.left + marginSpace.right)*.40)/2 + "," + ((marginSpace.top+marginSpace.bottom)) + ")");

				if(height<width*.40)
				{
					radius = (height/2);
					rectSize = height*.06;
				}
				else
				{
					radius = ((width*.40)/2);
					rectSize = (width*.40)*.06
				}	
				innerRadius = radius-(radius*.5);

				var lineGroup = svgSelection.append("g")
								   .attr('id','lineGroup')
								   .attr("transform", "translate(" + ((width + marginSpace.left + marginSpace.right)/2.4) + "," + 0 + ")");

				var lineArray = [0,(((height + marginSpace.top + marginSpace.bottom)/2)-marginSpace.bottom)-radius,0,(((height + marginSpace.top + marginSpace.bottom)/2)-marginSpace.bottom)+radius];				   
				var lineIndex=0;				   
				var simpleLine = d3.svg.line()
									   .x(function(d) { return lineArray[lineIndex++]; })
									   .y(function(d) { return lineArray[lineIndex++]; });	
				var drawLine = lineGroup.append("path")
							//  .style("display", "none")
							  .data([lineArray])
							  .attr("stroke", "lightgray")
							  .attr("stroke-width", 1)
							  .attr("fill", "none");	
				drawLine.attr("d",simpleLine);	  
						   
				var widthOfDount = (2*radius)+(2*margin.right/2.5);
				var arc = d3.svg.arc()
							.innerRadius(innerRadius)
							.outerRadius(radius);
							
				var pie = d3.layout.pie()
									.sort(null)
									.value(function(d) { return d;});

								
				//call piedount chart
				refreshPie();		
				//call bar chart
				showBarChart(data.key[0]);			
				// pop up arc
				d3.select("#"+data.key[0]).transition().duration(500).ease('bounce')
								.attr('transform', function (d) 
											 {
												var dist = 10;
												d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
												var x = Math.sin(d.midAngle) * dist;
												var y = -Math.cos(d.midAngle) * dist;
												return 'translate(' + x + ',' + y + ')';
											 }) ;										


				var legendGroup = svgSelection.append("g")
								   .attr("transform", "translate(" +((((width + marginSpace.left + marginSpace.right)*.40)/2)-(radius+marginSpace.right/2.5))+ "," +  ((((height + margin.top + margin.bottom)/2)-margin.bottom)+radius+10)+ ")");
				var widthOfDount = (2*radius)+(2*marginSpace.right/3);
				
				var legendWidth=10,legendHeight=10,pixcelPerChar=6,widthLimit=widthOfDount*0.9,textSeparator=20,nextLineSeparator=20;
				function isMoveLegendToNextLine(string,xPos,i){
					var currentLegendXPos=xPos+legendWidth+(string.length*pixcelPerChar)+textSeparator;
					
					if(currentLegendXPos>widthLimit){
						return {"startPos":(widthOfDount*0.05),"move":true};
						//return true;
					}
					else if(i == 0){
						return {"startPos":(widthOfDount*0.05),"move":false};
					}
					else{
						return {"startPos":currentLegendXPos+(widthOfDount*0.1),"move":false};
						//return false;
					}
				}
				
				var nextLineCounter=0;
				var xPos=(widthOfDount*.05),xPos1=(widthOfDount*.05),yPos=0;
				var positionXArray=[];
				var positionYArray=[];
				
				var legendPositionArray=legendController.getLegendPositionArray(data.key,(widthOfDount+widthOfDount*0.5),height);
				legendGroup.selectAll('rect')
				  .data(data.key)
				  .enter()
				  .append("rect")
				  .attr("class","legend")
				  .attr ('value',function(d,i) { return data.key[i];})
				  .attr("fill",function(d,i) { return data.color[i];})
				  .attr("x", function(d, i){ 
						//if(i>3){return ((parseInt(i/4)-1)+(positionRect++)*(widthOfDount*.3))}else{return (i*(widthOfDount*.3))};
						/*
						var moveToNextLine=isMoveLegendToNextLine(data.key[i],xPos,i);
						
						if(moveToNextLine.move){
							xPos=moveToNextLine.startPos;
						}else{
							xPos=moveToNextLine.startPos;
						}
						positionXArray.push(xPos);
						return xPos;
						*/
						return legendPositionArray[i].x
				  })
				  .attr("y",function(d,i) { 
						/*
						//if(i>3){return (rectSize*2) }   
						//var xPos=i*(widthOfDount*.3);
						var moveToNextLine=isMoveLegendToNextLine(data.key[i],xPos1,i);
						
						//var yPos=0;
						if(moveToNextLine.move){
							nextLineCounter++;
							yPos=nextLineCounter*nextLineSeparator;
							xPos1=moveToNextLine.startPos;
						}else{
							xPos1=moveToNextLine.startPos;
						}
						positionYArray.push(yPos);
						return yPos;
						*/
						return legendPositionArray[i].y;
					})
				  .attr("width", legendWidth)
				  .attr("height",legendHeight)
				  .on("click", function(d,i) 
				  {	
						if(d3.select(this).attr("fill")=="gray")
						{          d3.select(this).attr("fill",addPie(d3.select(this).attr('value')));
									d3.select(this).style("text-decoration","none");
						}			
						else
						{			d3.select(this).attr("fill","gray");
									d3.select(this).style("text-decoration","line-through");
									removePie(d3.select(this).attr('value')) ;	}
				})
				
				nextLineCounter=0;
				xPos=0*(widthOfDount*.3)+textSeparator,xPos1=0*(widthOfDount*.3);
				legendGroup.selectAll('text')
						   .data(data.key)
						   .enter()
						   .append('text')
						 //  .attr('x',function(d, i){ return ((i*(width*.20))+20);})
						   .attr("x", function(d, i){ 
								/*
								var x=positionXArray[i]+textSeparator;
								return x;
								*/
								return legendPositionArray[i].textPos;
						   })
						   .attr("y",function(d,i) {
								/*
								var y=positionYArray[i]+textSeparator-legendHeight;
								return y;
								*/
								return legendPositionArray[i].y+legendHeight;
						   })
						   .style('font-size',textSize)
						   .attr('fill',data.textAndLegendColor)
						   .style('font-style','italic')
						   .style('font-family','calibri')
						 //  .attr('y',10)
						   .text(function(d,i) { return d; });				   
					
				function removePie(keyName)
				 {
					var keyIndex=getIndex(keyName);	
					backUpOfData.value.splice(0,0,data.value[keyIndex]);
					backUpOfData.key.splice(0,0,data.key[keyIndex]);
					backUpOfData.color.splice(0,0,data.color[keyIndex]);
					data.value.splice(keyIndex,1);
					data.key.splice(keyIndex,1);
					data.color.splice(keyIndex,1);
					refreshPie();
				}
				function addPie(keyName)
				{
					for(var counter=0;counter<backUpOfData.key.length;counter++)
					{
						if(backUpOfData.key[counter]==keyName)
						{break;}
					}
					data.value.splice(0,0,backUpOfData.value[counter]);
					data.key.splice(0,0,backUpOfData.key[counter]);
					data.color.splice(0,0,backUpOfData.color[counter]);
					refreshPie();	
					return backUpOfData.color[counter];
				}  

				function getIndex(keyName)
				{
					for(var counter=0;counter<data.key.length;counter++)
					{
						if(data.key[counter]==keyName)
						{
							//alert(counter);
							break;
						}
					}
					return counter;
				}				
				function getPercentage(keyName)
				{
					var keyValue,sum=0;
					for(var traverse = 0 ;traverse<data.value.length;traverse++)
					{
						if(data.key[traverse]==keyName)
						{
							keyValue=data.value[traverse];
						}
						sum =sum+data.value[traverse];
					}
					return Math.round(((keyValue/sum)*100));
				}
				function getToolTip(keyName,event)
				{
					
					var keyIndex=getIndex(keyName);	
					//alert(event.pageY );
					console.log("*****event pagey "+event.pageY +" ****spae "+marginSpace.top);
					event.pageY=event.pageY;//-marginSpace.top;
					/*	
					tooltip.style("top", (event.pageY-10)+"px")
						   .style("left",(event.pageX+10)+"px")
						   .text(data.key[keyIndex]+"," +data.label+"-"+data.value[keyIndex] + ", " 
						   +getPercentage(keyName)+"%");
					*/
					var yHeadingValueMap=[{"headingName":(data.label) ,"headingVal":data.value[keyIndex]+" "+getPercentage(keyName)+"%"}];
						
					toolTipManager.showToolTip(event,"",(data.key[keyIndex]), false,yHeadingValueMap,d3.event.pageY*.90);	
					
				}

		
				function refreshPie()
					{

					d3.select("#dountGroup").remove();
					 dountGroup = svgSelection.append("g")
									   .attr('id','dountGroup')
									   .attr("transform", "translate(" + ((width + marginSpace.left + marginSpace.right)*.40)/2 + "," + (((height + marginSpace.top + marginSpace.bottom)/2)-marginSpace.bottom) + ")");

					var arcs = dountGroup.selectAll(".arc")
					.data(pie(data.value))
					.enter()
					.append("g")
					.attr('id',function(d,i) {return data.key[i];})
					.attr('value',function(d,i) {return data.key[i];})
					.attr("fill",function(d,i){return data.color[i];} )
					.on("click",function(){
							showBarChart(d3.select(this).attr('value'));	
							})

					.on("mouseover", function(){
					
				
					
					d3.select(this).transition().duration(500).ease('bounce')
					.attr('transform', function (d) 
								 {
									var dist = 10;
									d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
									var x = Math.sin(d.midAngle) * dist;
									var y = -Math.cos(d.midAngle) * dist;
									return 'translate(' + x + ',' + y + ')';
								 }) ;							 
								 //return tooltip.style("visibility", "visible");
						getToolTip(d3.select(this).attr('value'),d3.event);			 
					})
								 
					.on("mousemove", function(){ 
						if(popUpArc==0)
						{
							d3.select("#"+data.key[0]).transition().duration(500).ease('bounce')
										  .attr('transform', 'translate(0,0)');
							popUpArc=1;				  
						}
						getToolTip(d3.select(this).attr('value'),d3.event);	
					})
					
					.on("mouseout", function(){	
							d3.select(this).transition().duration(500).ease('bounce')
							.attr('transform', 'translate(0,0)')
							toolTipManager.hideTooTip();
							//return tooltip.style("visibility", "hidden");
					});
					
					arcs.append("path")
						.attr("d",arc)
						.transition().duration(1500).attrTween("d", sweep);
					}
					function sweep(d) {
						   var i = d3.interpolate({startAngle: -180*grad, endAngle: -180*grad},d);
						 return function (call) {
						  //console.log(call);
						  return arc(i(call));
						 };
						}
					function showBarChart(country)
					{
						d3.select("#barGroup").remove();
										var barGroup =  svgSelection.append("g")
									   .attr('id','barGroup')
									   .attr("transform","translate("+(((width + marginSpace.left + marginSpace.right)*.40)+ marginSpace.left)+"," +((((height + marginSpace.top + marginSpace.bottom)/2)-marginSpace.bottom)-(radius/1.5))+ ")");
										
											d3.select("#showCountryGroup").remove();
										var showCountryGroup =  svgSelection.append("g")
														   .attr('id','showCountryGroup')
														   .attr("transform","translate("+(((width + marginSpace.left + marginSpace.right)*.40)+ marginSpace.left)+"," +((((height + marginSpace.top + marginSpace.bottom)/2)-marginSpace.bottom)-(radius))+ ")");
											
										//	var country = d3.select(this).attr('value');
											
											showCountryGroup.append('text')
															.transition().duration(1500)
															.attr('fill',data.color[getIndex(country)])
															.style('font-family','calibri')
															.style('font-size',textSize*2)
															.style('font-style','italic')
															.text(country);	
										//	alert(subDataArray[country]);
										  //  var barHeight=30;
											var x = d3.scale.linear()
													  .domain([0, d3.max(subDataArray[country])])
													  .range([0, width*.32]);
											var bar = barGroup.selectAll("g")
															  .data(subDataArray[country]).enter().append("g")
															  .attr("transform", function(d, i) { return "translate(0," + i * rectSize*2.6 + ")"; });
										   
											var barRef=	bar.append("rect")
													.attr("width", function(d,i){return 0;})
												   .attr("height",rectSize*1.3);
												   
												   
										   barRef.transition().duration(1500)
										   .attr("width", function(d,i){return x(subDataArray[country][i]);})
										   .attr("fill",function(d,i) {return  subDataArray.color[i];});
												   
												   
												var sum=0;
												for(var index=0;index<subDataArray[country].length;index++)
												{
													sum = sum + subDataArray[country][index];
												} 
											   bar.append("text")
												  .transition().duration(1500)
												  .attr("x", function(d,i) {return x((subDataArray[country][i]))-textSize*2; })
												  .attr("y", (rectSize*1.3)/ 2)
												  .attr("dy", ".35em")
												  .style('font-size',textSize+2)
												  .attr('fill',data.textAndLegendColor)
												  .style('font-family','calibri')
												  .style('font-style','italic')
												  .text(function(d,i) { return Math.round((((subDataArray[country][i])/sum)*100)) + "%  "+subDataArray.key[i]; });
												 
			}
			
			//set font here
			setTextStyleAndSvgBackGround(svgElement);
			
			//set legendColor
			legendGroup.selectAll("text").style("fill",textStyleConfg.legendTextColor);	
		},
			
			multipleDountChartAnalysis : function(data) {
				
				
				var dountAnalChart={left:width*0.05,right:width*0.05,bottom:height*0.05,top:height*0.05,chartSeparator:10,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-dountAnalChart.left-dountAnalChart.right;
				var scaleHeight=height-dountAnalChart.top-dountAnalChart.bottom;			
				var group,arcs;
				var totalClasses = data.data.length;
				var dountCenter = 1;
				var radius,innerRadius;
				var grad = Math.PI/180;
				var legendSize = scaleWidth * 0.015;
				var legendFontSize = legendSize*1.3;
				var arc12;
				radius = (((scaleWidth*.8)/Math.round(totalClasses/2))/2)<(scaleHeight/2)?(((scaleWidth*.8)/Math.round(totalClasses/2))/2):(scaleHeight/2);
				radius = radius*.4;
				innerRadius = radius * .75;
							
							
				var pie = d3.layout.pie()
						    .sort(null)
							.value(function(d) { return d;});	
				
				var setHorizontalDistance,setHorizontalDistanceRef; 
				for(var counter = 0 ; counter<totalClasses;counter++)
				{
					
					if(totalClasses==1)
					{
						group = svgElement.append('g')
							  .attr('class','dount-main-group')
							  .attr("transform", "translate(" + ((scaleWidth*.8)/2) + "," + (scaleHeight*.5) + ")");
							
							radius = ((scaleWidth*.8))<(scaleHeight)?(scaleWidth*.8):(scaleHeight);
							radius = radius*.4;
							innerRadius = radius * .75;
										
					}
					else if(counter<Math.round(totalClasses/2))
					{
						setHorizontalDistance = (scaleHeight*.3);
						group = svgElement.append('g')
							  .attr('class','dount-main-group'+counter)
							  .attr("transform", "translate(" + (((((scaleWidth*.8)/Math.round(totalClasses/2))*(counter+1))/2)+(counter*1.5*radius)) + "," + (setHorizontalDistance) + ")");								
					}
					else
					{
						
						if(totalClasses>6)
						{
							setHorizontalDistanceRef = ((setHorizontalDistance)+(radius*4));
						}
						else
						{
							setHorizontalDistanceRef = ((setHorizontalDistance)+(radius*3));
						}
						group = svgElement.append('g')
							  .attr('class','dount-main-group'+counter)
							  .attr("transform", "translate(" + (((((scaleWidth*.8)/Math.round(totalClasses/2))*(dountCenter))/2)+((dountCenter++ -1)*1.5*radius)) + "," + setHorizontalDistanceRef + ")");
					
					}
					
				var arc = d3.svg.arc()
							.innerRadius(innerRadius)
							.outerRadius(radius);	
					
					arcs = group.selectAll(".arc")
				.data(pie(data.data[counter].dountData))
		        .enter()
				.append("g")
				.attr('value',function(d,i) {return counter+" "+i;})
				.attr("fill",function(d,i){return data.data[counter].colorArray[i];} )
				.on("mouseover", function(d)
				{
					var KeyValue = d3.select(this).attr('value');
					var KeyArray  = KeyValue.split(" ");
					
						d3.select(this).transition().duration(500).ease('bounce')
						  .attr('transform', function (d) 
						 {
							var dist = 7;
							d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
							var x = Math.sin(d.midAngle) * dist;
							var y = -Math.cos(d.midAngle) * dist;
							return 'translate(' + x + ',' + y + ')';
						 });
						 /*
						 arc12 = d3.svg.arc()
							.innerRadius(innerRadius-5)
							.outerRadius(innerRadius-3)
							.startAngle(d.startAngle)
							.endAngle(d.endAngle);
															
															
						group.append("svg:path")
							.attr('display','block')
							.attr('class','ShowArc')
							.attr("fill", function(d, i){
								return "black";
							})
							.attr("d", arc12);*/

				})
				.on("mousemove", function()
				{
					var KeyValue = d3.select(this).attr('value');
					var KeyArray  = KeyValue.split(" ");
					console.log(data.data[parseInt(KeyArray[0])].dountKey[parseInt(KeyArray[1])]);
					var yHeadingValueMap=[{"headingName":data.data[parseInt(KeyArray[0])].dountKey[parseInt(KeyArray[1])],"headingVal":data.data[parseInt(KeyArray[0])].dountData[parseInt(KeyArray[1])]+" "+data.unit}];
						
						toolTipManager.showToolTip(d3.event,"",(data.data[parseInt(KeyArray[0])].className), false,yHeadingValueMap);
					
				})
				.on("mouseout", function()
				{	
					d3.select(".ShowArc").attr('display','none');
					d3.select(this).transition().duration(500).ease('linear')
					                  .attr('transform', 'translate(0,0)')
			    //         	return tooltip.style("visibility", "hidden");
				})
				.on("mouseleave",function(){
						toolTipManager.hideTooTip();
				});
		
		arcs.append("path")
		   .attr("d",arc)
		   .transition().duration(1500).attrTween("d", sweep);
				
	
				group.append('text')
					 .attr('x',-(data.data[counter].totalStudent.length*6)/2)
					 .attr('y',3)
					 .attr('font-family','calibri')
					 .text(data.data[counter].totalStudent);
				
				group.append('text')
					 .attr('x',-((data.data[counter].className.length*6)/2))
					 .attr('y',radius+(11))
					 .attr('font-family','calibri')
					 .text(data.data[counter].className);
					 
			
			
			}
	//legend here		
	var legendGroup = svgElement.append('g')
					   .attr('class','dount-main-group')
					   .attr("transform","translate(" +scaleWidth*.8 +","+scaleHeight*.3+")");
			
	
    var recrRef = legendGroup.selectAll('rect')
			   .data(data.legend)
			   .enter()
			   .append('rect')
			   .attr('width',legendSize)
			   .attr('height',legendSize)
			   .attr('x',function(){return -scaleWidth*.78})
			   .attr('y',function(d,i){return scaleHeight})
			   .attr('fill',function(d,i){return data.legendColor[i]});
			   
		recrRef.transition().duration(1500)
		       .attr('x',0)
			   .attr('y',function(d,i){return i*2*legendSize});
	
	
var textRef = legendGroup.selectAll('text')
			   .data(data.legend)
			   .enter()
			   .append('text')
			   .attr('x',function(){return -scaleWidth*.78})
			   .attr('y',function(d,i){return i*2*legendSize+legendSize/2})
			   .attr("dy",".31em")
			   .attr('font-family','calibri')
			   .attr('font-size',legendFontSize)
			   .text(function(d,i){return d;});

	    textRef.transition().duration(1500)
		       .attr('x',legendSize+8);
	
//horizontal line here
			legendGroup.append('line')
					   .attr("x1",-((scaleWidth*.75)*0.1))
					   .attr("y1",-legendSize/2)
					   .attr("x2",-((scaleWidth*.75)*0.1))
					   .attr("y2",data.legend.length*2*legendSize)
					   .attr("stroke","lightsteelblue")
			   	
			   
function sweep(d) {
       var i = d3.interpolate({startAngle: -180*grad, endAngle: -180*grad},d);
     return function (call) {
      //console.log(call);
      return arc(i(call));
     };
    }			

			}

		}


        var heatMapChart = {
            drawHeatMapChart: function (id, data,options) {
                var cfg = {

                    colorLow: '#F6fdff',
                    colorMed: '#81DCFF',
                    colorHigh: '#0BBCFF',
                    yAxisLabelSpacing: 50
                };


                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }
				
				var heatMapData=[];
				var yAxisValue=data["yAxisValue"];
				var xAxisValue=[];
				
                var gridSize = (0.70 * width) / yAxisValue.length;


                var margin = {
                    top: 0.03 * height,
                    right: (1 / 12) * width,
                    bottom: (1 / 20) * height,
                    left: (8 / 60) * width
                },
                widthHeatMap = width - cfg.yAxisLabelSpacing,
                    heightHeatMap = height - 0.03 * height - margin.top - margin.bottom;

				
				//format data according to heat map data requiremenet
				var tempHeatMapData=data.data;
				var rowNmber=0;
				for(var dataKey in tempHeatMapData){
					var dataArray=tempHeatMapData[dataKey];
					xAxisValue.push(dataKey);
					
					for(var dataCountr=0;dataCountr<dataArray.length;dataCountr++){
						var heatMapDataObj={};
						heatMapDataObj.row=rowNmber;
						heatMapDataObj.col=dataCountr;
						heatMapDataObj.hours=dataArray[dataCountr];
						heatMapData.push(heatMapDataObj);
					}
					rowNmber++;
				}
				
                var minColorValue = d3.min(heatMapData, function (d) {
                    return d.hours;
                })
                var maxColorValue = d3.max(heatMapData, function (d) {
                    return d.hours;
                });

                var colorScale = d3.scale.linear()
                    .domain([minColorValue, (minColorValue + maxColorValue) / 2, maxColorValue])
                    .range([cfg.colorLow, cfg.colorMed, cfg.colorHigh]);



                var h = (0.80 * height) / yAxisValue.length;
                w = (0.70 * width) / rowNmber;


                var x = d3.scale.linear()
                    .range([0, widthHeatMap]);

                var y = d3.scale.linear()
                    .range([heightHeatMap, 0]);

                var xScale = d3.scale.ordinal()
                    .domain(d3.range(rowNmber))
                    .rangeRoundBands([0, w * (rowNmber)], 0.05);

                var yScale = d3.scale.ordinal()
                    .domain(d3.range(yAxisValue.length))
                    .rangeRoundBands([0, h * (yAxisValue.length)], 0.10);


                var xAxis = d3.svg.axis()
                    .scale(xScale)
					
                    // .tickFormat(function (d) {
				   //	return xAxisValue[d];
				   //})
                    .orient("bottom").ticks(5);


                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .tickFormat(function (d) {
                    return yAxisValue[d];
                })
                    .orient("left").ticks(5);


                var svg = svgElement.append("svg")
                    .attr("width", widthHeatMap + margin.right / 2)
                    .attr("height", heightHeatMap + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + widthHeatMap*0.15 + "," + margin.top + ")");


                var heatMap = svg.selectAll("g")
                    .data(heatMapData, function (d) {
                    return d.col + ':' + d.row;
                })
                    .enter().append("svg:rect")
                    .attr("x", function (d) {
                    return d.row * w;
                })
                    .attr("y", function (d) {
                    return d.col * h;
                })
                    .attr("width", function (d) {
                    return w;
                })
                    .attr("height", function (d) {
                    return h;
                })
                    .style("fill", function (d) {
                    return colorScale(d.hours);
                })
                    .on("mouseover", function (d) {
                    d3.select(this).style('fill', 'cyan');
                    var x = d3.event.pageX;
                    drawPointer(d, x);
                })
                    .on("mouseout", function () {
                    d3.select(this).style("fill", function (d) {
                        return colorScale(d.hours);
                    })
                    undrawPointer();
                });


                var text = svg.selectAll("g")
                    .data(heatMapData, function (d) {
                    return d.col + ':' + d.row;
                })
                    .enter().append("svg:text")
                    .attr("x", function (d) {
                    return d.row * w;
                })
                    .attr("y", function (d) {
                    return d.col * h;
                })
                    .attr("text-anchor", "middle")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", function () {
                    return w * h / ((w + h) * 2.5);


                })
                    .attr("dy", function (d, i) {
                    return d.row + h / 2;
                })
                    .attr("dx", function (d) {
                    return d.col + w / 2;
                })
                    .text(function (d) {
                    return d.hours
                })
                    .on("mouseover", function (d) {

                    var x = d3.event.pageX;
                    drawPointer(d, x);

                })
                    .on("mouseout", function () {

                    undrawPointer();
                });
				
				//capture all x axis ticks
				var xAxisTickArray=[];
				for(var xTickCountr=0;xTickCountr<xAxisValue.length;xTickCountr++){
					xAxisTickArray.push(xTickCountr);
				}
				
				xAxis.tickValues(xAxisTickArray);
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + h * yAxisValue.length + ")")
                    .call(xAxis)
                    .selectAll("text")
					.text(function(d){
						return xAxisValue[d];
					})
                    .style("text-anchor", "end")
                    .attr("dx", "-1.0em")
                    .attr("dy", "0.15em")
                    .attr("transform", function (d) {
                    return "rotate(-45)"
                });

                svg.append("g")
                    .attr("class", "y axis")
					.call(yAxis)
                    .selectAll("text")
                    .style("text-anchor", "end")
                    .attr("dx", "-0.0em")
                    .attr("dy", "0.0em")
                    .attr("transform", function (d) {
						return "rotate(0)"
					});
					
				var marginMeter = {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 8
                },
                widthMeter = width - marginMeter.left - marginMeter.right,
                    heightMeter = height - marginMeter.top - marginMeter.bottom;

                var svgMeter = svgElement.append("svg")
                    .attr("width", width - marginMeter.left + marginMeter.right)
                    .attr("height", heightMeter + marginMeter.top + marginMeter.bottom)
                    .append("g");



                var gradient = svgMeter
								/*
								.selectAll(id)
								.data(data, function (d) {
									return d.col + ':' + d.row;
								})
                    .enter()*/
					.append("svg:defs")
                    .append("svg:linearGradient")
                    .attr("id", "gradient")
                    .attr("x1", "0%")
                    .attr("y1", yScale(0))
                    .attr("x2", "0%")
                    .attr("y2", yScale(yAxisValue.length - 1))
                    .attr("gradientUnits", "userSpaceOnUse");
				
				gradient.append("svg:stop")
                    .attr("offset", "0%")
                    .attr("stop-color", colorScale(minColorValue))
                    .attr("stop-opacity", 1);

                gradient.append("svg:stop")
                    .attr("offset", "20%")
                    .attr("stop-color", colorScale(10))
                    .attr("stop-opacity", 1);

                gradient.append("svg:stop")
                    .attr("offset", "40%")
                    .attr("stop-color", colorScale(20))
                    .attr("stop-opacity", 1);

                gradient.append("svg:stop")
                    .attr("offset", "60%")
                    .attr("stop-color", colorScale(30))
                    .attr("stop-opacity", 1);

                gradient.append("svg:stop")
                    .attr("offset", "80%")
                    .attr("stop-color", colorScale(40))
                    .attr("stop-opacity", 1);

                gradient.append("svg:stop")
                    .attr("offset", "100%")
                    .attr("stop-color", colorScale(maxColorValue))
                    .attr("stop-opacity", 1);
				
				
                svgMeter.append("svg:rect")

                    .attr("x", width - (0.05 * width))
                    .attr("y", margin.top)
                    .attr("width", (yAxisValue.length * 3))
                    .attr("height", h * yAxisValue.length)
                    .style("fill", "url(#gradient)");


                var maxHours = d3.max(heatMapData, function (d) {
                    return d.hours
                });

                var meterYScale = d3.scale.linear().range([(h * yAxisValue.length), 0]);
                minYScale = d3.min(heatMapData, function (d) {
                    return d.hours;
                });
                maxYScale = d3.max(heatMapData, function (d) {
                    return d.hours;
                });

                meterYScale.domain([maxYScale, minYScale]);

                var meterYAxis = d3.svg.axis()
                    .scale(meterYScale).orient("right").ticks(4).tickSize(5, 0);


                svgMeter.append("g")
                    .attr("class", "y axis")
					.call(meterYAxis)
					.selectAll("text")
                    .style("text-anchor", "right")

                    .attr("x", width - (0.09 * width))
                    .attr("y", marginMeter.top)
                    .attr("dx", "0.0em")
                    .attr("dy", "0.0em")
                    .attr("transform", function (d) {
                    return "rotate(0)"
                });
				
				svgMeter.selectAll("line")
						.style("display",'none');
						
                svgMeter.append("g").append("svg:image")
                    .attr("id", "img")
                    .attr("xlink:href", "http://www.stocinn.com/stoccharts/img/pointer.png")
                    .attr("width", width / 30)
                    .attr("height", width / 30)
                    .style('display', 'none');

                function drawPointer(d, x) {
                    svgMeter.select(" #img").style('display', 'block');
                    svgMeter.select("#img")
                        .transition()
                        .attr("x", width - (0.09 * width))
                        .attr("y", meterYScale(d.hours));
                }

                function undrawPointer() {

                    svgMeter.select("#img").style('display', 'none');
                }
				
				//hide all axis path
					hideAxisPath(svgElement);
				
				//set font here
				
					setTextStyleAndSvgBackGround(svgElement);
				
            }
        }

		
       var scatterPlotChart = {

			drawScatterPlotChart: function (id, data) {
                var cfg = {

                    padding: data.padding,
                    toolTipLabel: "Population"
                };
				
				width=width*0.9;
				height=height*0.9;
				
				var xAxisArray=data.xAxisTickArray;
				var yIndicationLabel=data.yIndicationLabel;
				var xIndicationLabel=data.xIndicationLabel;
				var chartTitle=data.chartTitle;	
				/*
                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }*/


                var maxX = 0;
                var maxY = 0;
                var currMaxX;
                var currMaxY;
                var actualData = data.yAixsData;


                for (i = 0; i < actualData.length; i++) {
                    currMaxX = d3.max(actualData[i].data, function (d,k) {
								
                        return d;
                    });
                    currMaxY = d3.max(actualData[i].data, function (d) {
                        return d;
                    });

                    if (currMaxX > maxX) maxX = currMaxX;

                    if (currMaxY > maxY) maxY = currMaxY;
					actualData[i].legendName="legend-"+i
                }
				
				
                var leftMargins = 10;
                var topMargins = 0;
                var colors = d3.scale.category20();
				
				maxX=xAxisArray.length;
				
				var left;
				if(width*0.08<40){
					left=40;
				}else{
					left=width*0.08;
				}
				
				var xScale = d3.scale.linear()
                    .domain([0, maxX])
                    .range([left, width - width*0.05]);




                var yScale = d3.scale.linear()
                    .domain([0, 1.5 * maxY])
                    .range([height - cfg.padding * 2, cfg.padding]);


                var rScale = d3.scale.linear()
                    .domain([10, maxY])
                    .range([5, 10]);



                var formatAsPercentage = d3.format(".1%");


                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
                    .ticks(5);



                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(5);



                var svg = svgElement
                    .append("g")
                    .attr("transform", "translate(" + (left) + "," + topMargins + ")");

				/*
                gridManager.init(svg, height, width, leftMargins, topMargins);

				*/


                for (iVal = 0; iVal < actualData.length; iVal++) {
                    drawLineWithShape(svg, actualData[iVal], actualData[iVal].color, actualData[iVal].legendName);

                }

                function drawLineWithShape(svg, dataV, color, name) {

                    if (dataV.shape == 'circle') {
                        drawCircle(svg, getFormattedDataFromDataSetForScatter(dataV), color, name,dataV);

                    }
					
					else if (dataV.shape == 'square') {
                        drawSquare(svg, getFormattedDataFromDataSetForScatter(dataV), color, name,dataV);
                    }
					else {

                        drawTriangle(svg, getFormattedDataFromDataSetForScatter(dataV), color, name,dataV);
                    }
					
                }

				
                function drawCircle(svg, data, color, name,dataObj) {


                    svg.selectAll("." + name + " dot")
                        .data(data.coordinates)
                        .enter()
                        .append("circle")
                        .attr("class", name + " dot")
                        .on("mouseover", function (d,i) {
						
						var yHeadingValueMap=[{"headingName":dataObj.name +" "+yIndicationLabel,"headingVal":d.y}];
						
						toolTipManager.showToolTip(d3.event, d["yVal"],(xIndicationLabel +" " +xAxisArray[i]), false,yHeadingValueMap);
						//toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, cfg.toolTipLabel + "  " + d.y);
                    })
                        .on('mouseout', function (d) {

                        toolTipManager.hideTooTip();
                    })
         //               .attr('x', 0)
                        .attr("cx", function (d, i) {

                        return 0;
                    })
                        .attr("cy", function (d, i) {

                        return 0;
                    })

           //             .attr('y', height)
                        .transition()
                        .duration(1000)
             //           .attr('x', function (d,i) {
               //         return xScale(i);
                //    })
                        .attr("cx", function (d, i) {
						return xScale(i)-5/2;
                    })
                        .attr("cy", function (d, i) {
                        return yScale(d.y);
                    })
                        .attr("r", function (d, i) {

                        return 5;
                    })
                        .style("fill", function (d, i) {
                        return d.color;
                    });

                }

                function drawSquare(svg, data, color, name,dataObj) {

                    svg.selectAll("." + name + " dot")
                        .data(data.coordinates)
                        .enter()
                        .append("rect")
                        .attr("class", name + " dot")
                        .on("mouseover", function (d,i) {
						
						var yHeadingValueMap=[{"headingName":dataObj.name +" "+yIndicationLabel,"headingVal":d.y}];
						
						toolTipManager.showToolTip(d3.event, d["yVal"],(xIndicationLabel +" " +xAxisArray[i]), false,yHeadingValueMap);
                        //toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, cfg.toolTipLabel + "  " + d.y);
                    })
                        .on('mouseout', function (d) {

                        toolTipManager.hideTooTip();
                    })
                        .attr('x', 0)
                        .attr("width", function (d, i) {

                        return 0;
                    })
                        .attr("height", function (d, i) {

                        return 0;
                    })
                        .attr('y', 0)
                        .transition()
                        .duration(2000)
                        .attr("x", function (d,i) {

                        return xScale(i);
                    })
                        .attr("y", function (d, i) {
                        return yScale(d.y);
                    })
                        .attr("width", 10)
                        .attr("height", 10)
                        .attr("fill", function (d) {

                        return d.color;
                    });


                }

                function drawTriangle(svg, data, color, name,dataObj) {
                    svg.selectAll(name + " dot")
                        .data(data.coordinates)
                        .enter()
                        .append("path")
                        .on("mouseover", function (d) {
							
						var yHeadingValueMap=[{"headingName":dataObj.name +" "+yIndicationLabel,"headingVal":d.y}];
						
						toolTipManager.showToolTip(d3.event, d["yVal"],(xIndicationLabel +" " +xAxisArray[i]), false,yHeadingValueMap);
                        //toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, cfg.toolTipLabel + "  " + d.y);
                    })
                        .on('mouseout', function (d) {

                        toolTipManager.hideTooTip();
                    })
                        .attr("class", name + " dot")
                        .attr('x', 0)
                        .attr("width", function (d, i) {

                        return 0;
                    })
                        .attr("height", function (d, i) {

                        return 0;
                    })
                        .attr('y', 0)
                        .transition()
                        .duration(2000)
                        .attr("d", d3.svg.symbol().type("triangle-up"))
                        .attr("transform", function (d, i) {
                        return "translate(" + xScale(i) + "," + yScale(d.y) + ")";
                    })
                        .attr("fill", function (d) {
                        return d.color;
                    });


                }


                function getFormattedDataFromDataSetForScatter(dataV) {

                    var points = {};
                    var coordinates = [];
                    points.coordinates = coordinates;
                    for (j = 0; j < dataV.data.length; j++) {

                        var coordinate = {
                            "color": dataV.color,
                                "name": dataV.name,
                                "x": j,
                                "y": dataV.data[j]
                        };
                        points.coordinates.push(coordinate)
                    }
                    return points;
                }

                function convertStringToNumber(str) {
                    var hash = 0;
                    if (str.length == 0) return hash;

                    for (i = 0; i < str.length; i++) {
                        char = str.charCodeAt(i);
                        hash = ((hash << 5) - hash) + char;
                        hash = hash & hash;
                    }
                    return hash;
                }
				
				
				var largestStringLngth=((xAxisArray[0].toString()).length);
				for(var charCountr=0;charCountr<xAxisArray.length;charCountr++){
					var currentStringLngth=(xAxisArray[charCountr].toString()).length;
					
					if(largestStringLngth<currentStringLngth){
							largestStringLngth=currentStringLngth;
					}
				}
				
				
				var xAxisTickArr=tickController.getXTickArray(0,(xAxisArray.length),largestStringLngth, (width - (cfg.padding * 2) -(cfg.padding)));
				
				xAxis.tickValues(xAxisTickArr);
				
                var xAxisRef=svg.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(0," + (height - cfg.padding) + ")")
                    .call(xAxis);
					
				xAxisRef.selectAll("text")
					
					.text(function(d,i){
						return xAxisArray[d];
					});
					

                var yAxisRef=svg.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(" + leftMargins + ",0)")
                    .call(yAxis);


                var legend = svg.append("g")
                    .attr("class", "legend")
                    .attr("width", width)
                    .attr("height", height)
                    .attr('transform', 'translate(' + width / 10 + ',50)');
					
				
				var legendHeight=10,legendWidth=10;
				var legendNameArray=[];
				for(var i=0;i<actualData.length;i++){
					legendNameArray.push(actualData[i].name);
				}
				var legendPositionArray=legendController.getLegendPositionArray(legendNameArray,(width*0.98),height);
				

                for (k = 0; k < actualData.length; k++) {
                    if (actualData[k].shape == 'square') {

                        legend.selectAll('rect')
                            .data([actualData[k]])
                            .enter()
                            .append("rect")
                            .attr("x", function (d, i) {
								//return i * ((100 / 500) * width);
								return legendPositionArray[k].x;
							})
                            .attr("y",function(d,i){
								return legendPositionArray[k].y;
							})
                            .attr("width",legendWidth)
                            .attr("height", legendHeight)
                            .style("fill", function (d, i) {
								return d.color;
							})
                            .on("click", function (d) {
								var state = d3.selectAll("." + d.legendName + ".dot").style("display");
								if (state == "none") {

									d3.selectAll("." + d.legendName + ".dot").style("display", "block");
									d3.select(".rectLegend" +"."+ d.name).style("text-decoration","none");
								} else {

									var selectedPath = svgElement.selectAll("." + d.legendName + "line");

									d3.selectAll("." + d.legendName + ".dot").style("display", "none");
									d3.select(".rectLegend" +"."+ d.name).style("text-decoration","line-through");
								}
							});
						
                        legend.selectAll('.rectLegend')
                            .data([actualData[k]])
                            .enter()
                            .append("text")
							.attr("class",function(d){
								return "rectLegend"+" "+d.name;
							})
                            .attr("x", function (d, i) {
								//return i * ((100 / 500) * width);
								return legendPositionArray[k].textPos;
							})
                            .attr("y",(legendPositionArray[k].y+legendHeight/2))
                            .attr("width", (actualData.length / 300) * width)
                            .attr("height", (actualData.length / 300) * width)
                            .attr("font-size", (10 / 500) * (width + height) / 2)
                            //.attr("dx", "1.50em")
                            .attr("dy", ".50em")
                            .text(function (d, i) {
								return d.name;
							});
							
                    } else if (actualData[k].shape == 'circle') {

                        legend.selectAll('circle')
                            .data([actualData[k]])
                            .enter()
                            .append("circle")
                            //.attr("x", function (d, i) {
                            //return i * ((100 / 500) * width);
							//return legendPositionArray[k].x;
                        //})
                            //.attr("y",legendPositionArray[k].y)
                            .attr("cx",legendPositionArray[k].x)
                            .attr("cy",legendPositionArray[k].y+legendHeight/2)
                            .attr("r", function (d, i) {

                            return legendWidth/2;
                        })
                            .style("fill", function (d, i) {

                            return d.color;
                        })
                        .on("click", function (d) {
                            var state = d3.selectAll("." + d.legendName + ".dot").style("display");
                            if (state == "none") {
                                d3.selectAll("." + d.legendName + ".dot").style("display", "block");
                                d3.select(".circleLegend" +"."+ d.name).style("text-decoration","none");
                            } else {
                                var selectedPath = svgElement.selectAll("." + d.legendName + "line");

                                d3.selectAll("." + d.legendName + ".dot").style("display", "none");
                                d3.select(".circleLegend" +"."+ d.name).style("text-decoration","line-through");
                            }
                        });


                        legend.selectAll('text1')
                            .data([actualData[k]])
                            .enter()
                            .append("text")
							.attr("class",function(d){
								return "circleLegend"+" "+d.name;
							})
                            .attr("x", function (d, i) {
								//return i * ((100 / 500) * width) + 0.20 * width;
								return legendPositionArray[k].textPos;
                        })
                            .attr("y",(legendPositionArray[k].y+legendHeight/2))
                            //.attr("width", (actualData.length / 300) * width)
                            //.attr("height", (actualData.length / 300) * width)
                            .attr("font-size", (10 / 500) * (width + height) / 2)
                            //.attr("dx", "1.5em")
                            .attr("dy", "0.50em")
                            .text(function (d, i) {
								return d.name;
							});
                    } else if (actualData[k].shape == 'triangle') {
                        legend.selectAll('triangle')
                            .data([actualData[k]])
                            .enter()
                            .append("path")
                            .attr("x", function (d, i) {
								//return i * ((100 / 500) * width);
								return legendPositionArray[k].x
							})
                            .attr("y",legendPositionArray[k].y)
                            .attr("d", d3.svg.symbol().type("triangle-up"))
                            .attr("transform", function (d, i) {
                            return "translate(" + (legendPositionArray[k].x) + "," + (legendPositionArray[k].y+legendHeight/2) + ")";
                        })
                            .style("fill", function (d, i) {
                            return d.color;
                        })
                            .on("click", function (d) {
                            var state = d3.selectAll("." + d.legendName + ".dot").style("display");
                            if (state == "none") {

                                d3.selectAll("." + d.legendName + ".dot").style("display", "block");
                                d3.select(".triangleLegend" +"."+ d.name).style("text-decoration","none");
                            } else {

                                var selectedPath = svgElement.selectAll("." + d.legendName + ".line");

                                d3.selectAll("." + d.legendName + ".dot").style("display", "none");
                                d3.select(".triangleLegend" +"."+ d.name).style("text-decoration","line-through");
                            }
                        });

                        legend.selectAll('text2')
                            .data([actualData[k]])
                            .enter()
                            .append("text")
							.attr("class",function(d){
								return "triangleLegend"+" "+d.name;
							})
                            .attr("x", function (d, i) {
                            //return i * ((100 / 500) * width) + 500;
							return legendPositionArray[k].textPos;
                        })
                            .attr("y",legendPositionArray[k].y+legendHeight/2)
                            //.attr("width", (actualData.length / 300) * width)
                            //.attr("height", (actualData.length / 300) * width)
                            .attr("font-size", (10 / 500) * (width + height) / 2)
                            //.attr("dx", "1.50em")
                            .attr("dy", ".50em")
                            .text(function (d, i) {
                            return d.name;
                        });
                    }

                }
				
				
				//y indicaton label
				var pixcelPerChar=6;
				var totalPixcel=yIndicationLabel.toString().length*pixcelPerChar;
				var yLabelTop=height/2+totalPixcel/2;
				
				axisLabelController.appendLabel(yIndicationLabel,-left*0.8,yLabelTop,-90,yAxisRef,textStyleConfg.yLabelColor,600);
				
				//x indication label
				var xLabelPixcel=xIndicationLabel.toString().length*pixcelPerChar;
				var xLabelLeft=width/2-xLabelPixcel/2;
				axisLabelController.appendLabel(xIndicationLabel,xLabelLeft,height*0.15,0,xAxisRef,textStyleConfg.xLabelColor,600);
				
				/*
				//chart title
				var xLabelPixcel=chartTitle.toString().length*pixcelPerChar;
				var xLabelLeft=width/2-xLabelPixcel/2;
				axisLabelController.appendLabel(chartTitle,xLabelLeft,height*0.1,0,svgElement);
				*/
				
				//hide all axis path
				hideAxisPath(svgElement);
				
				//set font here
				
				setTextStyleAndSvgBackGround(svgElement);
				
            }
        };
		
		function hideAxisPath(svgElement){
			svgElement.selectAll(".axis").select("path").style("display","none");
			svgElement.selectAll(".tick line").style("display","none");
			svgElement.selectAll("path.domain").style("display","none");

			}
		
		function setTextStyleAndSvgBackGround(svgElement){
			
			var textStyle=textStyleConfg;
			
			var allText=svgElement.selectAll("text");
			allText.style("font-size",textStyle["font-size"],null)
			allText.style("font-family",textStyle["font-family"])
	//		allText.style("fill",textStyle["tick-font-color"],null);
			//allText.style("fill",textStyle["font-color"],null);
		//	allText.style("font-weight",textStyle["font-weight"]);
			
			//set legend color
			svgElement.selectAll(".legend").selectAll("text").style("fill",textStyle["legendTextColor"]);
			
			console.log(textStyle["legendTextColor"]);
			
			
			/*
			if(textStyle["axisTickColor"]){
				//axis color
				svgElement.selectAll(".axis").selectAll("text").style("fill",textStyle["axisTickColor"],"");
			}
			*/
			
			//set svg background
			//var backgroundColor=textStyle["svg-background"];	
			//svgElement.style("background",backgroundColor)
			
		}
		
		
		
		
        var gridManager = {
            init: function (svg, height, width, left, top) {
                var hfactor = Math.ceil(height * .15);
                var vfactor = Math.ceil(height * .5);
                var hRange = Math.ceil(height / hfactor);

                var vRange = Math.ceil(width / vfactor);

                svg.selectAll(".hline").data(d3.range(hRange)).enter()
                    .append("line")
                    .attr("y1", function (d) {
                    return d * hfactor + 6;
                })
                    .attr("y2", function (d) {
                    return d * hfactor + 6;
                })
                    .attr("x1", function (d) {
                    return 0;
                })
                    .attr("x2", function (d) {
                    return width;
                })
                    .style("stroke", "#4e4e4e")
					.style("stroke-width",.3)
                    .attr("transform", "translate(" + left + "," + top + ")");



                svg.selectAll(".vline").data(d3.range(vRange)).enter()
                    .append("line")
                    .attr("x1", function (d) {
                    return d * vfactor;
                })
                    .attr("x2", function (d) {
                    return d * vfactor;
                })
                    .attr("y1", function (d) {
                    return 0;
                })
                    .attr("y2", function (d) {
                    return height;
                })
                    .style("stroke", "#4e4e4e")
					.style("stroke-width",.1)
                    .attr("transform", "translate(" + left + "," + top + ")");
            }

        };

		
var threeDBarChart = {
            drawThreeDBarChart: function (id, heightOfBars, options) {
                var cfg = {
                    topMargin: 5,
                    rightMargin: 30,
                    bottomMargin: 0,
                    leftMargin: 10,
                    color: d3.scale.category20(),
					toolTipLabelForYAxis: "Profit(in Crores)"
                };

                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }

               
			
			var widthOfBars = width / (2 * heightOfBars.length);
			var spacingFactorInBars = 40;
			var rightMargin = 140;
			height=height*0.8;
			
			var xAxisTicksArray=options.xAxisTickArray;
			
			
			var newXSpacingInBars = (0.3*width) / heightOfBars.length;
			spacingFactorInBars=newXSpacingInBars;		
			var newWidthOfBars = width / (2 * heightOfBars.length)
			widthOfBars = newWidthOfBars;
			
			var xSpacingInBars = widthOfBars + spacingFactorInBars;
			
			var maxHeight = d3.max(heightOfBars, function(d,i){ return d;})
			//alert(maxHeight);
			
			
			
			var leftBarMargin = 0;
			var leftMargins	= 30;
			var padding = 0;
			var bottomMargins = 0;
			var spacingInHorizontalLines = 40;
			
			var sum = 1;				
			for(k=0;k<(''+maxHeight).length - 1;k++)
			{
				sum = sum+"0";				
			}		
			
			var lineFunction = d3.svg.line()
									  .x(function(d) { return d.x; })
									  .y(function(d) { return d.y; })
									 .interpolate("linear");
			
			//The SVG Container
			
			var widthOfBarRegion=(heightOfBars.length * xSpacingInBars) + 50;
			
			var xScale = d3.scale.linear()
                    .domain([0, heightOfBars.length])
                    .range([leftMargins,widthOfBarRegion*0.95]);


            var yScale = d3.scale.linear()
                    .domain([0, 1.2 * maxHeight])
                    .range([height - 0.08 *height, 0]);             
			 
            var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
					.tickFormat(formatAsPercentage);

            var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");			
			
            var formatAsPercentage = d3.format("1");		
			//var midPoint=Math.ceil((maxYScale+minYScale)/2);
			
		
			yAxis.tickValues(d3.range(0, 1.15* maxHeight, ((1.15* maxHeight)/10)));
			
			var maxYScale =	maxHeight + 100*(''+maxHeight).length;			
			var nextY = yScale(1.15*maxHeight);			
			
			
			svgElement=svgElement
						.append("g")
						.attr("transform","translate("+widthOfBarRegion*0.1+","+height*0.08+")");
			
			widthOfBarRegion=widthOfBarRegion+widthOfBarRegion*0.05;
			function drawHorizontalLines(startX, startY, widthOfBars, maxHeight, heightOfBars, nextY)
			{
				maxHeight = yScale(maxHeight);
				startY = yScale(startY);
				
				
				var scaleLine=[];				
						for(l=0; l<3; l++)
						{
							if(l==0)
							{
								
								x = startX-widthOfBarRegion*0.07;
								y = (startY-nextY) + 0.03 * widthOfBarRegion;
								
							}	
							else if(l==1)
							{
								x=startX-20;
								y=(startY-nextY);
							}
							else if(l==2)
							{
								x=widthOfBarRegion;
								y=(startY-nextY);														
							}
						
							scaleLine.push(JSON.parse('{"x":'+x+',"y":'+y+'}'));                      
						}
						return scaleLine;					
			}
			
			var startX= width  - width * 0.89;
			var startY= height - height * 0.90;					
			
			
			var svgContainer = svgElement;
			for(j=0;j<10;j++)
			{
			
				var lineGraph = svgContainer.append("path")
									.attr("d", lineFunction(drawHorizontalLines(startX, startY, widthOfBars, maxHeight, heightOfBars, nextY)))
									//.attr("stroke", "blue")
									.attr("stroke-width", 0.5)
									.attr("fill", "none");	
				
				var lineGraphLength= lineGraph.node().getTotalLength();

									lineGraph
									  .attr("stroke-dasharray", lineGraphLength + " " + lineGraphLength)
									  .attr("stroke-dashoffset", lineGraphLength)
									  .transition()
									  .duration(2000)
									  .ease("linear")
									  .attr("stroke-dashoffset", 1)
									  .attr("stroke", "blue")
									  .attr("stroke-width", 0.5)
									  .attr("fill", "none");
			
						
				//drawScales(startX, startY, widthOfBars,maxHeight, heightOfBars, maxHeight, nextY);
						nextY=nextY + (yScale(0) - yScale((1.15* maxHeight)/10));						
			}
			
			
		var startX= width  - width * 0.89;
			var startY= height - height * 0.90;		
				//startY = 0;
				//showToolTip: function (e, yValArg, xValArg, hideXVal, yHeadingName)
				
			for(var j=0;j<heightOfBars.length;j++)
			{
				
				
				var lineGraph = svgContainer.append("path")	
								.attr("d", lineFunction(getSidesCordinates(startX+leftBarMargin, startY, widthOfBars, heightOfBars[j], 1, heightOfBars[j])))							
								.attr('val',function(){
									var cordinateArray=getSidesCordinates(startX+leftBarMargin, startY, widthOfBars, heightOfBars[j], 1, heightOfBars[j]);
									return cordinateArray[0].height;
								})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								   //toolTipManager.showToolTip(d3.event, null, null, false, cfg.toolTipLabelForYAxis + " :- " + d3.select(this).attr('val'));
								})
								.on("mouseout", function (d, i) {
									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								});
																	
					var lineGraphLength = lineGraph.node().getTotalLength();
		
									lineGraph
									  .attr("stroke-dasharray", lineGraphLength + " " + lineGraphLength)
									  .attr("stroke-dashoffset", lineGraphLength)
									  .transition()
									  .duration(2000)
									  .ease("linear")
									  .attr("stroke-dashoffset", 1)
									  .attr("stroke", "blue")
									  .attr("stroke-width", 1)
									  .attr("fill", cfg.color);
				
				
				var lineGraph = svgContainer.append("path")
								.attr("d", lineFunction(getSidesCordinates(startX+leftBarMargin, startY, widthOfBars, heightOfBars[j], 2, heightOfBars[j])))
								.attr('val',function(){
										var cordinateArray=getSidesCordinates(startX+leftBarMargin, startY, widthOfBars, heightOfBars[j], 2, heightOfBars[j]);
										return cordinateArray[0].height;
									})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								   //toolTipManager.showToolTip(d3.event, null, null, false, cfg.toolTipLabelForYAxis + " :- " + d3.select(this).attr('val'));
								})
								.on("mouseout", function (d, i) {

									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								});
				
				var lineGraphLength = lineGraph.node().getTotalLength();

									lineGraph
									  .attr("stroke-dasharray", lineGraphLength + " " + lineGraphLength)
									  .attr("stroke-dashoffset", lineGraphLength)
									  .transition()
									  .duration(2000)
									  .ease("linear")
									  .attr("stroke-dashoffset", 1)
									  .attr("stroke", "blue")
									  .attr("stroke-width", 1)
									  .attr("fill",cfg.color);
									  
				var lineGraph = svgContainer.append("path")
								.attr("d", lineFunction(getSidesCordinates(startX+leftBarMargin, startY, widthOfBars, heightOfBars[j], 3, heightOfBars[j])))
								.attr('val',function(){
										var cordinateArray=getSidesCordinates(startX+leftBarMargin, startY, widthOfBars, heightOfBars[j], 3, heightOfBars[j]);
										return cordinateArray[0].height;
									})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								   //toolTipManager.showToolTip(d3.event, null, null, false, cfg.toolTipLabelForYAxis + " :- " + d3.select(this).attr('val'));
								})
								.on("mouseout", function (d, i) {

									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								});
					
				var lineGraphLength= lineGraph.node().getTotalLength();

									lineGraph
									  .attr("stroke-dasharray", lineGraphLength + " " + lineGraphLength)
									  .attr("stroke-dashoffset", lineGraphLength)
									  .transition()
									  .duration(2000)
									  .ease("linear")
									  .attr("stroke-dashoffset", 1)
									  .attr("stroke", "blue")
									  .attr("stroke-width", 1)
									  .attr("fill", cfg.color);
									  
				leftBarMargin=leftBarMargin+xSpacingInBars;		
				
			}
				


				function getSidesCordinates(x,y,width,height,sideno,heightOfBar){
				
			
				height = yScale(0) - yScale(height) ;
				
				
				var lineData=[];
				
				if(sideno==1){
						var factor=parseInt(width*.33) + 1;
						var xHit=0;
						var yHit=0;
						for(var i=0;i<5;i++){
									
						   if(i==0)
						   {
								y = yScale(0);				   
						   }
						   else if(i==1)
						   {
							   //height = yScale(y+height) - yScale(y);
							   y = y - height;								 
						   }
						   else if(i==2)
						   {
							   x=x+width;   
						   }
						   else if(i==3)
						   {
							   y=y+height;    
						   }     
							else if(i==4)
						   {
							  x=x-width;    
						   }
							
							var nextY=y;
							var nextX=x;
							   
						  //  alert(nextX+"::"+nextY);
							lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}'));                      
						}                               
				}
					  else if(sideno==2){
					  

						//var factor=parseInt(width*.33) + 1;
						var factor = 15;
						var xHit=0;
						var yHit=0;
						y = yScale(y); 
						
						for(var i=0;i<4;i++){
									
						   if(i==0)
						   {
							   y = yScale(0);
								//y = yScale(y);				   
						   }
						   else if(i==1)
						   {
							  // factor = yScale(y) - yScale(y + factor);
							   x=x-factor;
							   y=y-factor;								 
						   }
						   else if(i==2)
						   { 								
							   y=y-height;
							   //alert(" Y : "+ y  + "Height : " + height);
							
								//y = y + height;
							  // console.log("  Y : " +  y + " Height : " + height);
							 //  y = y - 1000;   
							   //nextY=nextY + (yScale(nextY) - yScale(nextY+spacingInHorizontalLines));	
						   }
						   else if(i==3)
						   {
							   x=x+factor;
							   y=y+factor;    
						   }     
							   
							var nextY=y;
							var nextX=x;
							lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}'));  
						}                               
						
					}
					else if(sideno==3){
						//var factor=parseInt(width*.33) + 1;
						factor = 15;
						var xHit=0;
						var yHit=0;
						for(var i=0;i<4;i++){
									
						   if(i==0)
						   {
								y=yScale(0) - height;
									
						   }
						   else if(i==1)
						   {
							   x=x-factor;
							   y=y-factor;
								 
						   }
						   else if(i==2)
						   {
							   x=x+width;   
						   }
						   else if(i==3)
						   {
							   x=x+factor;
							   y=y+factor;    
						   }     
							   
							var nextY=y;
							var nextX=x;
							   
							lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}')); 
						                   
						}                               
						
					}
				
					return lineData;
					
				}
					
			function mMove(){

				 var m = d3.mouse(this);
				 console.log(m);
				 d3.select(this).select("title").text(yScale(m[1]));
			}
			
			var largestStringLngth=0;
				for(var counter =0 ;counter<xAxisTicksArray.length;counter++)
				{
					if(largestStringLngth<(xAxisTicksArray[counter].toString()).length)
					{
						largestStringLngth = (xAxisTicksArray[counter].toString()).length;
					}
				}
				
			xAxis.tickValues(tickController.getXTickArray(0,(xAxisTicksArray.length),largestStringLngth, (widthOfBarRegion-leftMargins)));
	
			var xAxisRef=svgContainer.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate("+(startX)+"," + (height-20) + ")")
                    .call(xAxis);
					
			xAxisRef.selectAll("text")
					.text(function(d){
						return xAxisTicksArray[d];
					});


            var yAxisRef=svgContainer.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(" + (widthOfBarRegion*0.05) + ","+ (-5)  +")")
                    .call(yAxis);
						
			yAxisRef.selectAll("line").style("display",'none');
			yAxisRef.selectAll("path").style("display",'none');	
			
			//y axis indication label
			var pixcelPerChar=6;
			var yTotalPixcel=cfg.yLabel.toString().length*pixcelPerChar;
			var yLabelTop=height/2+yTotalPixcel/2;
			var yLabelLeft;
			
			if(width<350){
				yLabelLeft=-leftMargins*1.2;
			}else{
				yLabelLeft=-leftMargins*1.5;
			}
			
			axisLabelController.appendLabel(cfg.yLabel,yLabelLeft,yLabelTop,-90,yAxisRef,textStyleConfg.yLabelColor,600);
			
			var xTotalPixcel=cfg.xLabel.toString().length*pixcelPerChar;
			var xLabelLeft=widthOfBarRegion/2-xTotalPixcel/1.5;
			var xLabelTop=height*0.15;
			axisLabelController.appendLabel(cfg.xLabel,xLabelLeft,xLabelTop,0,xAxisRef,textStyleConfg.xLabelColor,600);
			
			//set font here
				setTextStyleAndSvgBackGround(svgElement);
				
			//hide all axis path
				hideAxisPath(svgElement);
                $('path.domain').hide();				
			
			}
			
			
		}


        var basicLineChart = {
          drawBasicLineChart: function (id, data) {
                var cfg = {

					padding :data.padding	,
					yAxisfactor : data.yAxisfactor,
					yLabelColor:data.yLabelColor,
					xAxisfactor : data.xAxisfactor,
					xLabelColor:data.xLabelColor
                };
				
				
				/*
                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }
				*/
				var xScaleTicksArray=data.xAxisTickArray;
				
				var margin = {
                    top: 30,
                    right: 30,
                    bottom: 40,
                    left: 100
                };
                width = width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;


                var maxValue = 0;
                var currMaxValue;
                var actualData = data.yAxisData;

                for (i = 0; i < actualData.length; i++) {
                    currMaxValue = d3.max(actualData[i].data, function (d,k) {
									d["xVal"]=xScaleTicksArray[k];
					
									d["timeIndex"]=k;
									d["shape"]=actualData[i].shape;
                        return d;
                    });

                    if (currMaxValue > maxValue){
						maxValue = currMaxValue;
					}
					
					actualData[i].legendName="legend-"+i;	
					
                }
				var maxXScale = xScaleTicksArray.length;//d3.max(data, function(d, i){return data[i].Values.length;});
				
                var x = d3.scale.linear().domain([0, (maxXScale)]).range([width*0.02, width]),
                    y = d3.scale.linear().domain([0, 1.5 * maxValue]).range([height, 0]);
        	
				xAxis = d3.svg.axis()
							  .scale(x)
							  .orient("bottom");
	
                yAxis = d3.svg.axis().scale(y).ticks(10).orient("left");

                var factor = cfg.yAxisfactor;
                var svg = svgElement.append("g")
						  .attr("transform", "translate(" + (width*0.06) + "," + 0 + ")");
						  
				
				gridManager.init(svg, height, width, margin.left, margin.top);


				var line = d3.svg.line()
                    .x(function (d, i) {
                    return x(i);
                })
                    .y(function (d) {
                    return y(d);
                }).interpolate("cardinal");

                var rectOrder = d3.svg.line()
                    .x(function (d, i) {
                    return x(i) - 3;
                })
                .y(function (d) {
                    return y(d) - 3;
                }).interpolate("cardinal");

                var triangleOrder = d3.svg.line()
                    .x(function (d, i) {
                    return x(i) - 3;
                })
                    .y(function (d) {
                    return y(d) - 3;
                }).interpolate("cardinal");

                var area = d3.svg.area()
                    .x(line.x())
                    .y1(line.y())
                    .y0(y(0));


                for (iVal = 0; iVal < actualData.length; iVal++) {
					
					drawLineWithShape(svg, actualData[iVal], actualData[iVal].color, actualData[iVal].Name);
					
                }

                function drawLineWithShape(svg, data, color, name) {

                    if (data.Shape == 'circle') {
						drawCircle(svg, data, color, data.legendName);
					}
					else if (data.Shape == 'square') {

                        drawSquare(svg, data, color, data.legendName);
                    } else {

                        drawTriangle(svg, data, color,data.legendName);
                    }
					
                }


                function drawCircle(svg, data, color, name) {
                    var circleData = [data.data];
					
					var aLineContainer = svg.selectAll("svg")
                        .data(circleData)
                        .enter().append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                    var path = aLineContainer.append("path")
                        .attr("class", name + "line" +" "+data.legendName)
                        .attr("d", line)
                        .attr("fill", "none")
                        .style("stroke", color);


                    var lineLen = path.node().getTotalLength();

                    path.attr("stroke-dasharray",
                    lineLen + ", " + lineLen)
                        .attr("stroke-dashoffset", lineLen);

                    path.transition()
                        .duration(2000)
                        .attr("stroke-dashoffset", 0);

                    aLineContainer.selectAll("." + name + "dot")
                        .data(function (d, i) {
                        return d;
                    })
                        .enter()
                        .append("circle")
                        .on("mouseover", function (d, i) {

						d3.select(this)
						.attr('stroke','white')
						.attr('stroke-width','2px');
						
						
						var yHeadingValueMap=[{"headingName":data.Name,"headingVal":d}];
						
						toolTipManager.showToolTip(d3.event, d["yVal"],(xScaleTicksArray[i]), false,yHeadingValueMap);
                    })
                        .on("mouseout", function (d, i) {
							
						d3.select(this)
						.attr('stroke','white')
						.attr('stroke-width','0px');
                        var targetElement = d3.select(this);


                        toolTipManager.hideTooTip();
                    })
                        .attr("class", name + "dot circle")
                        .attr('x', 0)
                        .attr("cx", function (d, i) {

                        return 0;
                    })
                        .attr("cy", function (d, i) {

                        return 0;
                    })
                        .attr('y', 0)
                        .transition()
                        .duration(2000)
                        .attr("cx", line.x())
                        .attr("cy", line.y())
                        .attr("r", 3.0)
                        .attr("fill", color);

                }

                function drawSquare(svg, data, color, name) {

                    var data2 = [data.data];

                    var aLineContainer = svg.
                    selectAll("svg")
                        .data(data2)
                        .enter().append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                    var path = aLineContainer.append("path")
                        .attr("class", function (d) {
                        return name + "line" +" "+data.legendName;
                    })
                        .attr("d", line)
                        .attr("fill", "none")
                        .style("stroke", color);


                    var lineLen = path.node().getTotalLength();

                    path.attr("stroke-dasharray",
                    lineLen + ", " + lineLen)
                        .attr("stroke-dashoffset", lineLen);

                    path.transition()
                        .duration(2000)
                        .attr("stroke-dashoffset", 0);

                    aLineContainer.selectAll("." + name + "dot")
                        .data(function (d, i) {
                        return d;
                    })
                        .enter()
                        .append("rect")
                        .on("mouseover", function (d, i) {

						d3.select(this)
						.attr('stroke','white')
						.attr('stroke-width','2px');

                        //toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, name + " :- " + d);
						
						var yHeadingValueMap=[{"headingName":data.Name,"headingVal":d}];
						toolTipManager.showToolTip(d3.event, d["yVal"],((xScaleTicksArray[i])), false,yHeadingValueMap);	
                    })
                        .on("mouseout", function (d, i) {


						d3.select(this)
						.attr('stroke','white')
						.attr('stroke-width','0px');

                        toolTipManager.hideTooTip();
                    })
                        .attr("class", name + "dot square")
                        .attr('x', 0)
                        .attr("width", function (d, i) {

                        return 0;
                    })
                        .attr("height", function (d, i) {

                        return 0;
                    })
                        .attr('y', 0)
                        .transition()
                        .duration(2000)
                        .attr("x", rectOrder.x())
                        .attr("y", rectOrder.y())
                        .attr("width", 6)
                        .attr("height", 6)
                        .attr("fill", color);

                }

                function drawTriangle(svg, data, color, name) {
                    var triangleData = [data.data];

                    var aLineContainer = svg.
                    selectAll("svg")
                        .data(triangleData)
                        .enter().append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                    var path = aLineContainer.append("path")
                        .attr("class", name + "line" +" "+data.legendName)
                        .attr("d", line)
                        .attr("fill", "none")
                        .style("stroke", color);

                    var lineLen = path.node().getTotalLength();

                    path.attr("stroke-dasharray",
                    lineLen + ", " + lineLen)
                        .attr("stroke-dashoffset", lineLen);

                    path.transition()
                        .duration(2000)
                        .attr("stroke-dashoffset", 0);

                    aLineContainer.selectAll(name + "dot")
                        .data(function (d, i) {
                        return d;
                    })
                        .enter()
                        .append("path")
						.on("mouseover", function (d, i) {

						d3.select(this)
						.attr('stroke','white')
						.attr('stroke-width','2px');

						var yHeadingValueMap=[{"headingName":data.Name,"headingVal":d}];
						toolTipManager.showToolTip(d3.event, d["yVal"],(xScaleTicksArray[i]), false,yHeadingValueMap);	
                        //toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, name + " :- " + d);
                    })
                        .on("mouseout", function (d, i) {

						
						d3.select(this)
						.attr('stroke','white')
						.attr('stroke-width','0px');

                        var targetElement = d3.select(this);


                        toolTipManager.hideTooTip();
                    })
                        .attr("class", name + "dot triangle")
                        .attr('x', 0)
                        .attr("width", function (d, i) {

                        return 0;
                    })
                        .attr("height", function (d, i) {

                        return 0;
                    })
                        .attr('y', 0)
                        .transition()
                        .duration(2000)
                        .attr("d", d3.svg.symbol().type("triangle-up"))
                        .attr("transform", function (d, i) {
                        return "translate(" + x(i) + "," + y(d) + ")";
                    })
                        .attr("fill", color);


                }

                function getValueFromArray(data) {
                    var dataSet = [];

                    for (i = 0; i < data.length; i++) {
                        dataSet.push(data[i].value);
                    }

                    return dataSet;
                }


                var legend = svg.append("g")
                    .attr("class", "legend")
                    .attr("width", width)
                    .attr("height", height)
                    .attr('transform', 'translate(' + width / actualData.length + ',50)');
				
				
				var legendHeight=10,legendWidth=10;
				var legendNameArray=[];
				for(var i=0;i<actualData.length;i++){
					legendNameArray.push(actualData[i].Name);
				}
				var legendPositionArray=legendController.getLegendPositionArray(legendNameArray,(width*0.98),height);
				
                legend.selectAll('rect')
                    .data(actualData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d, i) {
						//return i * ((100 / 500) * width);
						return legendPositionArray[i].x;
                })
                    .attr("y",function(d,i){
						return legendPositionArray[i].y;
					})
                    .attr("width",legendWidth)
                    .attr("height",legendHeight)
                    .style("fill", function (d, i) {
                    return d.color;
                })
                    .on("click", function (d) {
                    var state = d3.selectAll("." +d.legendName+"dot").style("display");
                    if (state == "none") {

                        var selectedPath = svgElement.selectAll("." + d.legendName + "line");
                        selectedPath.transition()
                            .duration(1000)
                            .ease("linear")
                            .attr("stroke-dashoffset", 0);
                        d3.selectAll("." + d.legendName+"dot."+d.Shape).style("display", "block");
						console.log(d.legendName+"dot"+d.Shape);
						d3.select("#" + d.legendName + "text").style("text-decoration", "none");
                    } else {


                        var selectedPath = svgElement.selectAll("." + d.legendName + "line");
                        var lineLen = selectedPath.node().getTotalLength();
                        selectedPath.transition()
                            .duration(1000)
                            .ease("linear")
                            .attr("stroke-dashoffset", lineLen);
							
							
                        d3.selectAll("." + d.legendName+"dot."+d.Shape).style("display", "none");
						console.log(d.legendName+"dot"+d.Shape);
						
                        d3.select("#" + d.legendName + "text").style("text-decoration", "line-through");
                    }


                });
				
				
                legend.selectAll('text')
                    .data(actualData)
                    .enter()
                    .append("text")

                    .attr('id', function (d) {
                    return d.legendName + "text";
                })
                    .attr("x", function (d, i) {
						//return i * ((100 / 500) * width);
						return legendPositionArray[i].textPos;
                })
                    .attr("y",function(d,i){
						return legendPositionArray[i].y+legendHeight/2;
					})
                    .attr("width", (15 / 500) * width)
                    .attr("height", (15 / 500) * height)
                    .attr("font-size", (12 / 500) * (width + height) / 2)
                    //.attr("dx", "1.50em")
                    .attr("dy", ".50em")
                    .text(function (d, i) {
                    return d.Name;
                });
				
				
				var largestStringLngth=((xScaleTicksArray[0].toString()).length);
				for(var charCountr=0;charCountr<xScaleTicksArray.length;charCountr++){
					var currentStringLngth=(xScaleTicksArray[charCountr].toString()).length;
					
					if(largestStringLngth<currentStringLngth){
							largestStringLngth=currentStringLngth;
					}
				}
				
				
				var xAxisTickArr=tickController.getXTickArray(0,(xScaleTicksArray.length),largestStringLngth, (width-width*0.02));
				xAxis.tickValues(xAxisTickArr);
				
                var xAxisEle = svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + (margin.left) + "," + (height + margin.top) + ")")
                    .call(xAxis);
					
				xAxisEle.selectAll("text")
					.text(function(d,i){
						var xTextVal="";
						//retrived text index
						
						xTextVal=xScaleTicksArray[d];
						return xTextVal;
					});
					
				var yAxisElem = svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                    .call(yAxis);
					
                var yLabelTop = ((height / 2) + (cfg.yAxisfactor.length / 2) * 5);
                var yLabelLeft = margin.left * .20 - margin.left;
				/*
                yAxisElem.append("text")
                    .text(function () {
                    return cfg.yAxisfactor + " ";
                })
                    .style('font-style', 'italic')
                    .attr('transform', "translate(" + (yLabelLeft) + "," + (yLabelTop) + ") rotate(-90)")
                    .style('fill', cfg.yLabelColor);
				*/
				
				axisLabelController.appendLabel(cfg.yAxisfactor,yLabelLeft,yLabelTop,-90,yAxisElem,textStyleConfg.yLabelColor,600);
				
                var xLabelTop = margin.top + 5;
                var xLabelLeft = ((width / 2) - (cfg.xAxisfactor.length / 2) * 5);
				/*
                xAxisEle.append("text")
                    .text(function () {
                    return cfg.xAxisfactor + " ";
                })
                    .style('font-style', 'italic')
                    .attr('transform', "translate(" + (xLabelLeft) + "," + (xLabelTop) + ") ")
                    .style('fill', cfg.xLabelColor);
				*/	
					
				axisLabelController.appendLabel(cfg.xAxisfactor,xLabelLeft,xLabelTop,0,xAxisEle,textStyleConfg.xLabelColor,600);	
				
				//hide all axis path
				hideAxisPath(svgElement);
					
				//set font here
				
				setTextStyleAndSvgBackGround(svgElement);
				
            }
        };
		
		
		
		var stackedAreaChart = {
            drawStackedAreaChart: function (id, stackedAreaData, options) {
                var cfg = {
                    topMargin: 5,
                    rightMargin: 30,
                    bottomMargin: 0,
                    leftMargin: 10,
                    color: d3.scale.category20(),
					yAxisTootltipLabel:"Cost(in Crores): "
                };

                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }

            
			var data =  stackedAreaData;
			
			var margin = {top: 20, right: 30, bottom: 30, left: 40};
				width = width - margin.left - margin.right,
				height = height - margin.top - margin.bottom;

			var x = d3.scale.ordinal()
				.rangePoints([0, width]);

			var y = d3.scale.linear()
				.range([height, 0]);

			var z = d3.scale.category20();

			var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left");
			var stack = d3.layout.stack().offset("zero")
				.values(function(d) { return d.values; })
				.x(function(d) { return d; })
				.y(function(d) { return d.y; });

			var nest = d3.nest()
			.key(function(d) {return d.name; })		

			var area = d3.svg.area()
				//.interpolate("monotone")
				.x(function(d) { return x(d.category); })
				   .y0(function(d) { return y(d.y0); })
				.y1(function(d) { return y(d.y0 + d.y); });

			var svg = svgElement.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				data.forEach(function(d) {
					d.value = +d.value;
				});

			var layers = stack(nest.entries(data));
				

			var a = function(d, i) { return d[i].category; };


			x.domain(['Dec','Jan','Feb']);
			   
			y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

			var svgE = svg.selectAll(".layer")
				  .data(layers)
				  .enter().append("g");
				  
			
			//svg.selectAll(".layer")
				//  .data(layers)
				 // .enter()
			svgE.append("path")
				  .attr("class", "area")
				  .attr("d", function(d) { return area(d.values); })
				  .style("fill", function(d, i) { return "white";  })
				  .on("mouseover", function (d,i) {
						
                        //toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, cfg.yAxisTootltipLabel + "  " + d.values[0].y + "   Name : " + d.values[0].name);
						var yHeadingValueMap=[{"headingName":cfg.yAxisTootltipLabel+" "+d.values[0].name,"headingVal":d.values[0].y}];
						
						toolTipManager.showToolTip(d3.event,"",(cfg.xLabel), false,yHeadingValueMap);
                    })
                  .on('mouseout', function (d) {

                        toolTipManager.hideTooTip();
                    })
				  .transition().delay(function(d, i) {
					return i * 500;
						})
				  .ease("back")
				  .style("fill", function(d, i) { return z(i); });
			   

			svgE.append("g")
				  .attr("class", "x axis")
				  .attr("transform", "translate(0," + height + ")")
				  .transition().duration(2000)
				  .call(xAxis);
				  

			svgE.append("g")
				  .attr("class", "y axis")
				  .transition().duration(2000)
				  .call(yAxis);
				  
			//hide all axis path
			hideAxisPath(svgElement);
				
			//set font here
			
			setTextStyleAndSvgBackGround(svgElement);
					  
			        
			}
		}
		
		
		var funnelChart={
			drawFunnelChart:function(data){
				
				var funnelData = data.funnelData;
				var funnelKey = data.funnelKey;
				var colorArray = data.colorArray;
				var unit=data.unit;
				var label=data.label;
				
				var FunnelAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.15,top:height*0.1,chartSeparator:10,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-FunnelAnalChart.left-FunnelAnalChart.right;
				var scaleHeight=height-FunnelAnalChart.top-FunnelAnalChart.bottom;
					
				
				var funnelChartMainGroup = svgElement.append("g")
								   .attr('class','main-group')
								   .attr("transform", "translate(" + FunnelAnalChart.left + "," + FunnelAnalChart.top + ")")

				var funnelClosedPath = d3.svg.line()
										 .x(function(d,i) {return funnelPathXCoordinate[i]; })
										 .y(function(d,i) {return funnelPathYCoordinate[i]; })                         
										 .interpolate("basis-closed");
						 
				var funnelPath = d3.svg.line()
									 .x(function(d,i) {return funnelPathXCoordinate[i]; })
									 .y(function(d,i) {return funnelPathYCoordinate[i]; }) 									 
						//			 .interpolate("basis-closed");
						
				var transitionPath = d3.svg.line()
									 .x(function(d,i) {return transitionXData[i]; })
									 .y(function(d,i) {return transitionYData[i]; }) 

				var funnelLowerClosedPath = d3.svg.line()
									 .x(function(d,i) {return funnelXCoordinateOfBelowPath[i]; })
									 .y(function(d,i) {return funnelYCoordinateOfBelowPath[i]; }) 
									 .interpolate("basis-closed");
			 
var transitionXData = [scaleWidth/2,scaleWidth/2,scaleWidth/2,scaleWidth/2];
var transitionYData = [scaleHeight+40,scaleHeight+40,scaleHeight+40,scaleHeight+40];
var ProductSum = 0;
var heightOfProduct = 0;
var rectXPosition; 
var rectYPosition;
var rectWidth; 
var funnelPathXCoordinate = [];
var funnelPathYCoordinate = [];

var funnelXCoordinateOfBelowPath = [];
var funnelYCoordinateOfBelowPath = [];
var scaleWidthForFunnel = (scaleWidth*.6);
var x1 = ((scaleWidth/2)-(scaleWidthForFunnel/2));
var y1 = 0;
var x4;
for(var i = 0 ; i<funnelData.length; i++)
{
	ProductSum = ProductSum + funnelData[i];
}
var scaleHeightWithSeparator = (scaleHeight+(funnelData.length*FunnelAnalChart.chartSeparator));
var rad = (scaleHeightWithSeparator/(scaleWidthForFunnel/2));
var degree = Math.atan(rad) * (180 / Math.PI);		

var angleValue = Math.tan(toRadians(degree));

function toRadians (angle) 
{
  return angle * (Math.PI / 180);
}			

var JsonXArray = {};
var JsonYArray = {};				
for(var index = 0 ; index<funnelData.length; index++)
{
	
	funnelPathXCoordinate = [];      
	funnelPathYCoordinate = []; 
	funnelXCoordinateOfBelowPath = [];
	funnelYCoordinateOfBelowPath = [];
	heightOfProduct = (funnelData[index]/ProductSum);
  
	var x2;
	 if(index!=funnelData.length-1)
	 {
		x2 = Math.abs(((scaleHeightWithSeparator*heightOfProduct)/angleValue));
	 }
	 else
	 {
		x2 = Math.abs(((scaleHeightWithSeparator*heightOfProduct)/2)/angleValue);
	 }
	 x4 = (((scaleWidth/2)-x1)*2)+x1;
	 
	 //set Coordinate of linear path
	 funnelPathXCoordinate.push(x1);
	 funnelPathXCoordinate.push(x1+x2);
	 funnelPathXCoordinate.push(x4-(funnelPathXCoordinate[1]-x1));
	 funnelPathXCoordinate.push(x4); 
	 
	 funnelPathYCoordinate.push(y1);
	 if(index!=funnelData.length-1)
	 {
		funnelPathYCoordinate.push(y1+(scaleHeight*heightOfProduct));
		funnelPathYCoordinate.push(y1+(scaleHeight*heightOfProduct));
	 }
	 else
	 {
		funnelPathYCoordinate.push(y1+((scaleHeight*heightOfProduct)/2));
		funnelPathYCoordinate.push(y1+((scaleHeight*heightOfProduct)/2));
	 }
	 funnelPathYCoordinate.push(y1);
	 
	 funnelChartMainGroup.append("linearGradient")				
        .attr("id", "gradient")			
        .attr("gradientUnits", "userSpaceOnUse")	
        .attr("x1",funnelPathXCoordinate[0])
		.attr("y1",funnelPathYCoordinate[0])			
        .attr("x2",funnelPathXCoordinate[3])
		.attr("y2", funnelPathYCoordinate[2])		
        .selectAll("stop")						
        .data([								
            {offset: "15%", color: colorArray[index]},		
        //    {offset: "40%", color: colorArrayLinearPath[index]},	
       //     {offset: "40%", color: "#ffffff"},		
            {offset: "62%", color: "#eaeaea"},		
       //     {offset: "62%", color: colorArrayLinearPath[index]},	
            {offset: "85%", color: colorArray[index]}	
        ])					
		.enter().append("stop")			
        .attr("offset", function(d) { return d.offset; })	
        .attr("stop-color", function(d) { return d.color; });

	 var lineGraph1 = funnelChartMainGroup.selectAll(".path")
						 .data([transitionXData])
						 .enter()   
						 .append("path")
						 .attr("d", transitionPath)
						 .attr("value",index)
						 .attr("stroke-width", 1)
						 .attr("fill","url(#gradient)")
						 .on("mouseover",function(){
							 
							   var keyIndex = d3.select(this).attr('value');
							   var sum = 0;
							   for(var index = 0;index<funnelData.length;index++)
							   {
								sum = sum + funnelData[index];
							   }
							   var percentage = Math.round(((funnelData[keyIndex])/sum)*100);
							   var yHeadingValueMap=[{"headingName":label,"headingVal":percentage + " " +unit}];
								  
							    toolTipManager.showToolTip(d3.event,"",(funnelKey[keyIndex]), false,yHeadingValueMap,d3.event.pageY*.90); 
						   })
						  .on("mouseleave",function(){
								  toolTipManager.hideTooTip();
						   });
						   
		lineGraph1.transition().duration(1000).ease("linear")
						 .attr("d", funnelPath(funnelPathXCoordinate))
						  
						 
						 
	// set horizontal Line here
		funnelChartMainGroup.append('line')
							.attr('class','horizontalLine')
							.attr('x1',function(){return ((funnelPathXCoordinate[3]+funnelPathXCoordinate[2])/2)+5})
							.attr('y1',function(){
							if(index!=funnelData.length-1)
							{return ((funnelPathYCoordinate[3]+funnelPathYCoordinate[2])/2)}
							else
							{
								return funnelPathYCoordinate[2];
							}})
							.attr('x2',function(){return ((scaleWidth/2)+(scaleWidthForFunnel/2))})
							.attr('y2',function(){
							if(index!=funnelData.length-1)
							{return ((funnelPathYCoordinate[3]+funnelPathYCoordinate[2])/2)}
							else
							{
								return funnelPathYCoordinate[2];
							}})
							.style("stroke","gray");
		
	// set text here
	 funnelChartMainGroup.append('text')
							.attr('class','text')
							.attr('x',function(){return ((scaleWidth/2)+(scaleWidthForFunnel/2))+5})
							.attr('y',function(){
							if(index!=funnelData.length-1)
							{return ((funnelPathYCoordinate[3]+funnelPathYCoordinate[2])/2)+3}
							else
							{
								return funnelPathYCoordinate[2]+3;
							}})
							.text(funnelKey[index])
							.attr("fill","gray")
							.style("font-family","calibri");
							
	x1 = funnelPathXCoordinate[1]+2;  
	y1 = funnelPathYCoordinate[1]+FunnelAnalChart.chartSeparator;
	
	//set cordinate for lower closed path
	funnelXCoordinateOfBelowPath[0] = funnelPathXCoordinate[1];
	funnelXCoordinateOfBelowPath[2] = funnelPathXCoordinate[2]; 
	funnelXCoordinateOfBelowPath[1] = (funnelPathXCoordinate[1] + funnelPathXCoordinate[2])/2;
	funnelXCoordinateOfBelowPath[3]= funnelXCoordinateOfBelowPath[1];
	var closedPathSharinkValue1 = (funnelXCoordinateOfBelowPath[1]-funnelXCoordinateOfBelowPath[0])/2;
	funnelXCoordinateOfBelowPath[0] = funnelXCoordinateOfBelowPath[0] - closedPathSharinkValue1;
	funnelXCoordinateOfBelowPath[2] = funnelXCoordinateOfBelowPath[2] + closedPathSharinkValue1;
	
	funnelYCoordinateOfBelowPath[0] = funnelPathYCoordinate[1];
	funnelYCoordinateOfBelowPath[1] = funnelYCoordinateOfBelowPath[0]-10;
	funnelYCoordinateOfBelowPath[2] = funnelPathYCoordinate[1];
	funnelYCoordinateOfBelowPath[3] = funnelYCoordinateOfBelowPath[0]+10;
	
	//store Value of Lower closed path
	JsonXArray[index] = funnelXCoordinateOfBelowPath;
	JsonYArray[index] = funnelYCoordinateOfBelowPath;

	rectXPosition = funnelPathXCoordinate[1];
	rectYPosition = funnelPathYCoordinate[1]
	rectWidth = funnelPathXCoordinate[2]-funnelPathXCoordinate[1];
	//set cordinate for upper closed path
	funnelPathXCoordinate[2] = funnelPathXCoordinate[3];
	funnelPathXCoordinate[1] = (funnelPathXCoordinate[0] + funnelPathXCoordinate[2])/2;  
	funnelPathXCoordinate[3] = funnelPathXCoordinate[1];
	var closedPathSharinkValue2 = (funnelPathXCoordinate[1]-funnelPathXCoordinate[0])/2;
	funnelPathXCoordinate[0] = funnelPathXCoordinate[0] - closedPathSharinkValue2;
	funnelPathXCoordinate[2] = funnelPathXCoordinate[2] + closedPathSharinkValue2;
	
	funnelPathYCoordinate[1] = funnelPathYCoordinate[0]-10;
	funnelPathYCoordinate[2] = funnelPathYCoordinate[0];
	funnelPathYCoordinate[3] = funnelPathYCoordinate[0]+10; 

	var lineGraph3 = funnelChartMainGroup.selectAll(".path")
						 .data([funnelPathXCoordinate])
						 .enter()
						 .append("path")
						 .attr("d", funnelClosedPath)	  
						 .attr("stroke-width", 1)
						 .attr("fill", function(){return colorArray[index]});
//		lineGraph3.transition().duration(1000).ease("linear")
	//					 .attr("d", funnelClosedPath(funnelPathXCoordinate));			
	 

	 
}

for(var index = 0;index<funnelData.length;index++)
{
	funnelXCoordinateOfBelowPath = JsonXArray[index];
	funnelYCoordinateOfBelowPath = JsonYArray[index];
	
 funnelChartMainGroup.append("linearGradient")				
        .attr("id", "gradient1")	
		.attr("gradientUnits", "userSpaceOnUse")	
        .attr("x1",funnelXCoordinateOfBelowPath[0])
		.attr("y1",funnelYCoordinateOfBelowPath[1])			
        .attr("x2",funnelXCoordinateOfBelowPath[2])
		.attr("y2", funnelYCoordinateOfBelowPath[3])		
        .selectAll("stop")						
        .data([								
            {offset: "15%", color: colorArray[index]},		
        //    {offset: "40%", color: colorArrayLinearPath[index]},	
       //     {offset: "40%", color: "#ffffff"},		
            {offset: "62%", color: "#eaeaea"},		
       //     {offset: "62%", color: colorArrayLinearPath[index]},	
            {offset: "85%", color: colorArray[index]}	
        ])					
		.enter().append("stop")			
        .attr("offset", function(d) { return d.offset; })	
        .attr("stop-color", function(d) { return d.color; });
	
	if(index!=funnelData.length-1)
	{
		var lineGraph2 = funnelChartMainGroup.selectAll(".path")
						 .data([funnelXCoordinateOfBelowPath])
						 .enter()
						 .append("path")
						 .attr("d", funnelLowerClosedPath)	  
						 .attr("stroke-width", 0)
						 .attr("fill","url(#gradient1)");
					//	 .attr("fill", function(){return colorArrayLinearPath[index]})
					//	 .attr("opacity",0.8);
	}
}

					funnelChartMainGroup.append('rect')
										.attr('x',rectXPosition)
										.attr('y',rectYPosition)
										.attr('width',rectWidth)
										.attr('height',((scaleHeightWithSeparator*heightOfProduct)/2))
										.attr('fill',colorArray[index-1])
				}

		}
		
		
		
		var drawGauageGraph={
			gaugeGraph:function(options){
			
				var	options=$.extend({
								'color': 'url(#gradient123)',
								'axisColor':'blue',
								'dataA':[],
								
							}, options);
				
				//appendToolTip();
				//data = dataA;
				var elementId=$(selectorElement).attr("id");
				var className=elementId+"_gauge";
				
				
				var tempData;
				if(options.dataA.length == 0 ){
					tempData=chartData;
				}else{
					tempData=options.dataA;
				}
				
				var maxSpeedValue=tempData[0].maxSpeedVal;
				
				var speedVal=tempData[0].speedVal;
				
				var differenceLeft=maxSpeedValue-speedVal;
				
				var data=[{"label":speedVal,"value":speedVal},{"label":differenceLeft,"value":differenceLeft}];
				
				
				var pi = Math.PI;
				var r=width*0.25;
				var ir=r/2;
				
				var color = d3.scale.category20c();     
				
				var centerChartDim=(width/2);
				var vis=svgElement.append("svg:g")
				.attr("class","pie")	
				.attr("transform", "translate(" + centerChartDim + "," + width*0.3 + ")")    
				
				var arc = d3.svg.arc()              
					.outerRadius(r)
					.innerRadius(ir);
			 
				var pie = d3.layout.pie() 
					.sort(null)
					.value(function(d) { return d.value; })
					.startAngle(-90 * (pi/180))
					.endAngle(90 * (pi/180));
			 
				var arcs = vis.selectAll("g.slice")     
					.data(pie(data))                          
					.enter()                            
					.append("svg:g")                
					.attr("class", "slice")
					
					arcs.append("svg:path")
							.attr("fill", function(d, i) {
								if(i == 0){
									return "yellow"
								}else{
									return "grey";
								}
							} ) 
							.attr("d", arc).on('mouseover',function(d){
								var hideXValue=true;
								console.log(JSON.stringify(d));
								//toolTipManager.showToolTip(d3.event, d["yVal"], d["xVal"], false, "" + "  " + d.value);
							})
							.on('mouseleave',function(){
								//toolTipManager.hideTooTip();
							});    
					                                    
					
					arcs.append("svg:text")                                     
							.attr("transform", function(d) {                    

							return "translate(" + arc.centroid(d) + ")";        
						})
						.attr("text-anchor", "middle")
						.attr("fill",function(){return options.textColor})
						.text(function(d, i) {
							return data[i].label;
						});
				
				function findCharacterWidth(word){
						return ((word.length*18)/2);
				}
				
				vis.append("svg:text")
						 .attr("x",function(){
							options.arcStartIndLabel.length
							var widthOfLabel=findCharacterWidth(options.arcStartIndLabel);
							return (-(.35)*((width/2)+widthOfLabel));
						 })
						 .attr("y",20)
						 .attr("text-anchor","start")
						 .attr("fill",function(){return options.textColor})
						 .text(options.arcStartIndLabel);
						 /*
						 .attr("transform", function(d) {                    

							return "translate(" + arc.centroid(d) + ")";        
						  });
						 */
                 
				vis.append("svg:text")
                        .attr("x",0)
						.attr("y",20)
						.attr("text-anchor","middle")
						.attr("fill",function(){return options.textColor})
						 .text(options.arcMiddleIndLabel);
						 
                 vis.append("svg:text")
                         .attr("x",function(){
							var widthOfLabel=findCharacterWidth(options.arcEndIndLabel);
							return ((.35)*((r*2)+widthOfLabel));
						 })
						 .attr("y",20)
                         .attr("text-anchor","end")
						 .attr("fill",function(){return options.textColor})
                         .text(options.arcEndIndLabel);
                         
                //set font here
				/*
					setTextStyleAndSvgBackGround(svgElement);
				*/	 
			}
		
		}	
		
		
		var redrawAreaChart=false;
		var drawAreaChart={
			areaChart:function(options){
				var	options=$.extend({
								'color': 'url(#gradient123)',
								'axisColor':'blue',
								'data':[],
								'attachBrushEvent':false,
								'xAxisIndicationLabel':'',
								'yAxisIndicationLabel':'',
								'xFieldName':'',
								'yFieldName':'',
								
							}, options);
			data=options.data;
			
			
			if(d3.select(".resetAreaBtn").empty()){
					
				var resetBtnWidth=70;
				var resetBtnHeight=30;
				var resetBtnGrouping=d3.select("#"+selectedElementId).append("div")
									  .style("left",(width*0.8))
									  .style("top",(height*0.1))
									  .attr("class",'resetAreaBtn')
									  .on("mouseover",function(){
										d3.select('.resetAreaBtn').style("background",'#7F7FFF');
									  })
									  .on("mouseout",function(){
										d3.select(this).style("background",'blue');
									  })
									  .style("width",resetBtnWidth)
									  .style("height",resetBtnHeight)
									  .style('background','blue')
									  .style('display','inline-block')
									  .style("z-index","999")
									  .style("position","absolute")
									  .style("line-height",resetBtnHeight+"px")
									  .style("color","#FFFFFF")
									  .style("text-align","center")
									  .style("border-radius","3px")
									  .style("cursor","pointer");
									  
				resetBtnGrouping.html("Reset");
				/*
									  resetBtnGrouping.append("rect")
									  .attr("width",reesetBtnWidth)
									  .attr("height",reesetBtnHeight)
									  .attr("x","0")
									  .attr("y","0")
									  .attr("rx","2")
									  .attr("ry","2")
									  */
									  
				/*					  
				resetBtnGrouping.append("text")
								.attr("x",20)
								.attr("y",reesetBtnHeight/2)
								.attr("dy",'.35em')
								.attr("class","resetAreaBtn")
								.text("Reset")
								.attr("fill","white");
				*/
			}
			
				
			d3.selectAll(".resetAreaBtn")
			.on("click",function(){
				
				xScale.domain(d3.extent(chartData, function(d,i) {
								return i;
							}));
							
							redrawAreaChart=true;
							$(selectorElement).find('svg g').empty();
							$(selectorElement).find(".brushedArea").remove();
							drawAreaChart.areaChart({'xFieldName':xFieldName,'yFieldName':yFieldName,'axisColor':'#222222','attachBrushEvent':true,'xAxisIndicationLabel':options.xAxisIndicationLabel,'yAxisIndicationLabel':options.yAxisIndicationLabel,data:chartData});
							drawCircle.circleChart({'color':"black",'r':3,'data':chartData});
			});
				
			if(!redrawAreaChart){
				xFieldName=options.xFieldName;
				yFieldName=options.yFieldName;
				chartData=data;
				cfgArea=options;
				
				var marginSvg = 50;
				width = $(selectorElement).width() - marginSvg;
				height = $(selectorElement).height() - marginSvg;

				var selectorId = $(selectorElement).attr("id");

				var svgClassName = selectorId + "_svg";
			

				svgElement = svgElement;

				xScale = d3.scale.linear().range([0, (width - margin.scale)]);
				yScale = d3.scale.linear().range([(height - margin.scale), 0]);

				minYScale = d3.min(data, function (d) {
					return d[yFieldName];
				});
				maxYScale = d3.max(data, function (d) {
					return d[yFieldName];
				});


				maxYScale=maxYScale*1.5;
				
				xScale.domain(d3.extent(data, function (d, i) {
					return i;
				}));
				
				/*
				xScale(0,data.length-1);
				*/
				yScale.domain([minYScale,maxYScale]);

				xAxis = d3.svg.axis().scale(xScale)
					.orient("bottom");

				yAxis = d3.svg.axis().scale(yScale)
					.orient("right").ticks(4).tickSize(5, 0);

				svgElement = svgElement.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
					.attr("class","grouping");

			}
				
				xScale.range([margin.areaLeft,width-margin.scale]);
				if(options.data.length == 0 ){
					data=chartData;
				}else{
					data=options.data;
				}			
				var elementId=$(selectorElement).attr("id");
				var className=elementId+"_area";
				//var className="hii";
				var squareDimesion=20;
				var percentageFctor=35;
				var area = d3.svg.area()
				.x(function(d,i) { 
					//console.error("x xScale "+d[xFieldName]+" x "+xScale(parseDate.parse(d[xFieldName])));
					return xScale(i); })
				.y0((height-margin.scale))
				.y1(function(d) { 
					//console.error("x "+yScale(d[yFieldName]));
					return yScale(d[yFieldName]); });
				
				
				var gradient1 = svgElement.append("svg:defs")
				.append("svg:linearGradient")
				.attr("id", "gradient123")
				.attr("x1", "0%")
				.attr("y1",yScale(minYScale))
				.attr("x2", "100%")
				.attr("y2", yScale(maxYScale))
				.attr("gradientUnits", "userSpaceOnUse")
				.attr("gradientTransform","rotate(90)");
				
				var startColor="#dce9f6";
				
				gradient1
					.append("stop")
					.attr("offset", "0%")
					.attr("stop-color", startColor)
					
					
				gradient1
					.append("stop")
					.attr("offset", "0.25")
					.attr("stop-color", "#e0ecf7");
				gradient1
					.append("stop")
					.attr("offset", "0.5")
					.attr("stop-color", "#e6f0f9");

				gradient1
					.append("stop")
					.attr("offset", ".75")
					.attr("stop-color", "#ebf2f9");
				
				gradient1
					.append("stop")
					.attr("offset", "100%")
					.attr("stop-color", "#ecf3fa")
					
				
				
				 
				var areaPath=svgElement
					   .append("path")
					   .datum(data)
					   .attr("class",className)
					   .attr("d",area)
					   .attr("fill",options.color)
					   
					   .on("mousemove",function(d){
							
							/*
							d3.event.stopPropagation();
							var xVal=xScale.invert(d3.event.pageX-margin.scale);
							var year=xVal.getFullYear();
							var month=(xVal.getMonth()+1);
							var date=xVal.getDate();
							
							if(month <10){
								month="0"+month;
							}
							if(date<10){
								date="0"+date;
							}
							var xDateValue=year+"-"+month+"-"+date;
							var y=d3.event.pageY-$(selectorElement).find('svg').position().top;
							var yVal=  Math.floor(yScale.invert(y));
							console.log("show tool tip ");
							//attachToolTip.showToolTip(d3.event,yVal,xDateValue,undefined);
							//toolTipManager.showToolTip(d3.event, d["yVal"], d["xDateValue"], false, "Tooltip" + "  ");
							var yHeadingValueMap=[{"headingName":options.yAxisIndicationLabel,"headingVal":yVal}];
							
							toolTipManager.showToolTip(d3.event, "",(options.xAxisIndicationLabel +" "+xDateValue), false,yHeadingValueMap);
							*/
						})
						.on("mouseleave",function(){
							try{
								//toolTipManager.hideTooTip(d3.event);
							}catch(err){
							}
						});
				
					
				//areaPath.transition().duration(1000).attr("d",area);						
				/*
				var areaLine=d3.svg.line()
								.x(function(d){	
									return xScale(parseDate.parse(d[xFieldName]));
								})
								.y(function(d){
									return yScale(d[yFieldName]);
								})
								.interpolate("linear");
				*/				
				/*				
				//draw line
				svgElement.append("path")
						   .attr("class","area-line")
						   .attr("d",areaLine(data))
						   .attr("stroke","blue")
						   .attr("fill","none");
				*/
				var xAxisElem;
				var yAxisElem;
				
				/*
				var largestStringLngth=(data[0][xFieldName].length);
					for(var charCountr=0;charCountr<data.length;charCountr++){
						var currentStringLngth=data[charCountr][xFieldName].length;
						
						if(largestStringLngth<currentStringLngth){
								largestStringLngth=currentStringLngth;
						}
					}
				
					
				var xAxisTickArr=tickController.getXTickArray(0,(data.length),largestStringLngth, (width - margin.scale));
				xAxis.tickValues(xAxisTickArr)
				*/
				
				//var formatDate = d3.time.format("%d'%b ");
				//xAxis.tickFormat(formatDate)
				  var largestStringLngth=0;
				var xAxisTicks = [];
				for(var counter =0 ;counter<data.length;counter++)
				{
					xAxisTicks[counter] = data[counter][xFieldName];
					if(largestStringLngth<(xAxisTicks[counter].toString()).length)
					{
							largestStringLngth = (xAxisTicks[counter].toString()).length;
					}
				}
				
			xAxis.tickValues(tickController.getXTickArray(0,(xAxisTicks.length),largestStringLngth, (width - margin.scale)));
					
				if($(selectorElement).find(".axis").length == 0){	
					xAxisElem=svgElement.append("g")			// Add the X Axis
					.attr("class", "x axis")
					.attr("transform", "translate(0," + (height-margin.scale+7) + ")")
					.attr("stroke",options.axisColor)
					.attr("fill",'none')
					.call(xAxis);
					
					xAxisElem.selectAll("text")
					.text(function(d){
						return xAxisTicks[d];
					})
					.attr('fill','black');
					
					yAxis.orient("left");
					
					yAxisElem=svgElement.append("g")			// Add the X Axis
					.attr("class", "y axis")
					.attr("transform", "translate("+(margin.areaLeft)+"," + 3+ ")")
					.attr("stroke",options.axisColor)
					.attr("fill",'none')
					.call(yAxis);
					
					
					// title here
					axisLabelController.appendLabel(options.title,2*margin.areaLeft,(height*0.08),0,svgElement,textStyleConfg.titleColor,700);
					
					//xAxis label here	
					var pixcelPerChar = 6;				
					var totalXLabelPixcel=options.xAxisIndicationLabel.toString().length*pixcelPerChar;
					var xIndicationLabelTop=(height*0.13);
					var xIndicationLabelLeft=width/2-totalXLabelPixcel/2;
					axisLabelController.appendLabel(options.xAxisIndicationLabel,xIndicationLabelLeft,xIndicationLabelTop,0,xAxisElem,textStyleConfg.xLabelColor,600);
					//yAxis label here
					var totalYLabelPixcel=options.xAxisIndicationLabel.toString().length*pixcelPerChar;
					var yIndicationLabelTop=height/2+totalYLabelPixcel/2;
					var yIndicationLabelLeft=(-margin.areaLeft/1.3);
					axisLabelController.appendLabel(options.yAxisIndicationLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,yAxisElem,textStyleConfg.yLabelColor,600);
				
				}
				
				/*
				if(d3.select(".resetAreaBtn").empty()){
					
					var reesetBtnWidth=70;
					var reesetBtnHeight=30;
					
					var resetBtnGrouping=svgElement.append("g")
										  .attr("transform", "translate(" + (width-(margin.scale)) + "," + (margin.top) + ")" );
										  
										  resetBtnGrouping.append("rect")
										  .attr("width",reesetBtnWidth)
										  .attr("height",reesetBtnHeight)
										  .attr("x","0")
										  .attr("y","0")
										  .attr("rx","2")
										  .attr("ry","2")
										  .attr("class",'resetAreaBtn')
										  .on("mouseover",function(){
											d3.select('.resetAreaBtn').style("fill",'#7F7FFF');
										  })
										  .on("mouseout",function(){
											d3.select(this).style("fill",'blue');
										  })
										  .style('fill','blue')
										  .style('display','inline-block')
										  .style("z-index","999");
										  
					resetBtnGrouping.append("text")
									.attr("x",20)
									.attr("y",reesetBtnHeight/2)
									.attr("dy",'.35em')
									.attr("class","resetAreaBtn")
									.text("Reset")
									.attr("fill","white");
					
				}
				
				
				d3.selectAll(".resetAreaBtn")
				.on("click",function(){
					
					xScale.domain(d3.extent(chartData, function(d,i) {
									return parseDate.parse(d[xFieldName]);
								}));
								
								redrawAreaChart=true;
								$(selectorElement).find('svg g').empty();
								$(selectorElement).find(".brushedArea").remove();
								drawAreaChart.areaChart({'xFieldName':xFieldName,'yFieldName':yFieldName,'axisColor':'#222222','attachBrushEvent':true,'xAxisIndicationLabel':options.xAxisIndicationLabel,'yAxisIndicationLabel':options.yAxisIndicationLabel,data:chartData});
								drawCircle.circleChart({'color':"black",'r':3,'data':chartData});
				});
				*/
				
				brushingChart.drawBrushing(function(brushedData){
					
					redrawAreaChart=true;
					/*redraw graph */
					xScale.domain(d3.extent(brushedData, function(d,i) {
								return i;
							}));
					$(selectorElement).find('svg .grouping').empty();
					$(selectorElement).find(".brushedArea").remove();		
					
					drawAreaChart.areaChart({'axisColor':'#222222','attachBrushEvent':true,'data':brushedData,'xAxisIndicationLabel':options.xAxisIndicationLabel,'yAxisIndicationLabel':options.yAxisIndicationLabel});
					drawCircle.circleChart({'color':"black",'r':3,'data':brushedData});
				});
					
				//hide all axis path
				hideAxisPath(svgElement);
					
				//set font here
				/*
					setTextStyleAndSvgBackGround(svgElement);
				*/	
				
				//}
				
			}
		
		}
		
		
		
		
		var drawMeter={
		   image:'',
		   needle:'',
		   plot:'',
		   arc:'',
		   prevdata:90,
		   text:'',
			meterChartTest:function(selectorId,imageURL){
			  var svg = svgElement;//d3.select("#"+selectorId).append("svg")
			  //.attr("width", 300)
			  //.attr("height", 300);
			  //Path inner and outer radius is adjusted
			  
			  var radius=(width/3);
			  var ir=(radius/2);
			  
			  drawMeter.arc = d3.svg.arc()
			  .innerRadius(ir)
			  .outerRadius(radius)
			  .startAngle(120 * (Math.PI/180))
			  .endAngle(240 * (Math.PI/180));

			  

			  var plot = svg
			  .append("g")
			  .attr("class", "arc");
			
			  var imageElement=svg.append("g").attr("transform", "translate( "+ (width/2-radius)+" , "+ (height/4) +")");	
			  drawMeter.image =imageElement.append("svg:image")
			  .attr('x',0)
			  .attr('y',0)
			  .attr('width',(radius*2))
			  .attr('height',ir)
			  .attr("xlink:href","gauge_skin.jpg")
			  .attr("id", "fillImage")
			  //.on("click", turnNeedle);
			  
			  drawMeter.text = svg.append("svg:text")
							
								// .attr("transform","translate(340,360)")
								.attr("transform", "translate( "+ (0.5112*width)+" , "+ (0.8780*height) +")")
								.attr("text-anchor", "middle")
								.text("");
			  
			  console.log("height of meter: " + height);
			  console.log("width of meter " + width);
			  var lengthOfNeedle=ir/2;
			  var marginNeedle=margin.top+4;
			  
			  drawMeter.needle = imageElement
			  /*
			  .append("g")
			  .attr("class", "needle")
			  .attr("transform", "translate( "+ (width-(width/4)-(lengthOfNeedle))+" , "+ (-(height-height/4-ir+marginNeedle)) +")")*/
			  //.attr("transform", "translate( "+ (0.29*width)+" , "+ (height/4) +")")
			  .append("path")
			  .attr("class", "tri")
			  .attr("d", "M" + (lengthOfNeedle + 2) + " " + (120 + 10) + " L" + lengthOfNeedle + " 0 L" + (lengthOfNeedle - 3) + " " + (120 + 10) + " C" + (lengthOfNeedle - 3) + " " + (120 + 20) + " " + (lengthOfNeedle + 3) + " " + (120 + 20) + " " + (lengthOfNeedle + 3) + " " + (120 + 10) + " Z")
			  //.attr("transform", "rotate(-90, " + lengthOfNeedle + "," + (height + 10) + ")");
			  .attr("transform", "translate("+(radius-ir)+","+(ir)+") rotate(-90) ");
			},

			turnNeedle:function(data)
			{    
			  
			 if(data<0){
			   drawMeter.text
			   .transition()
			  .attr('stroke','red')
			  .text(data);
			 }
			 else{
				  drawMeter.text
				.transition()
			  .attr('stroke','green')
			  .text(data);
			 }
			 drawMeter.needle
			  .transition()
			  .duration(1000)
			  .attrTween("transform", tween);
			 var x = drawMeter.getAngleFromCoordinate(drawMeter.getCoordinateFromData(drawMeter.prevdata));
			 
			 var y = drawMeter.getAngleFromCoordinate(drawMeter.getCoordinateFromData(drawMeter.getPercentFromAngle(drawMeter.getAngleForProfitAndLoss(data))));       
			 
			 function tween(d, i, a) {
			  return d3.interpolateString("rotate("+ x +", 150, 130)", "rotate("+ y +", 150, 130)");
			 }
			
			 
			 
			},   

			getPercentFromAngle:function(data)
			{
			 if(data < 0 && data >= -180)
			  return -(data*5/9);
			 else 
			  return (data*5/9);
			},
			getAngleFromCoordinate:function(x)
			{
			 var angle = 0;
			 var intialSum = 90;
			 return angle+= intialSum * x;
			},

			 getCoordinateFromData:function(percent)
			{
			 var coodinate;
			   coordinate = ((percent/100) - (1-percent/100)) ;      
			 
			 return coordinate;    
			},
			 getRadianFromData:function(percent)
			{
			 var coodinate;
			   coordinate = percent / 57.2958;      
			 
			 return coordinate;    
			},

			 callTurnNeedle:function()
			{
				var x = (Math.random() * 100) ;

			  meterChart.turnNeedle(x);
			  meterChart.prevdata = x;
			},
			
			getAngleForProfitAndLoss:function(x)
			{
			 var angle;
			 
			 if(x > 0 && x <= 100)
			 {
			   angle = 90 + (0.9 * x); 
			 }
			 else{ 
			 
			   angle =  90 + (0.9 * x);
			 }
			 //console.log(angle);
			 return angle;    
			}
			
		}
		
		var threeDStackedBarChart = {
				drawThreeDStackedBarChart: function (id, heightOfBars, heightOfBarTwo, threeDStackedBarsData, options, colorArray,gridLineColor, textColor, xAxisArray) {
                
				var cfg = {
						topMargin: 5,
						rightMargin: 30,
						bottomMargin: 0,
						leftMargin: 10,
						color: d3.scale.category20(),
						toolTipLabelForYAxis: "Profit(in Crores)",
						axisTextColor:'black',
						legendTextColor:'black'
					};

					if ('undefined' !== typeof options) {
						for (var i in options) {
							if ('undefined' !== typeof options[i]) {
								cfg[i] = options[i];
							}
						}
					}		   
		
				var widthOfBars = (0.9 * width) / (threeDStackedBarsData[0].data.length* 2);
				var spacingFactorInBars = 10;
				var rightMargin = 140;
				var ySpacingFactor = 5;		
				var newXSpacingInBars = (0.3*width) / threeDStackedBarsData.length;
				spacingFactorInBars=widthOfBars*.6;		
				var newWidthOfBars = (width) / (threeDStackedBarsData[0].data.length* 2);
				widthOfBars = newWidthOfBars;
				
				var xSpacingInBars = newWidthOfBars + spacingFactorInBars;
				
				var maxArrayForBars = [];
				var sumOfMaxInEachBar = 0;
				var legendArray=[];
				var legendNameMap={};
				for(var k = 0 ; k < threeDStackedBarsData.length ; k++)
				{					
					var max = d3.max(threeDStackedBarsData[k].data, function(d,i){ return d;});
					sumOfMaxInEachBar = sumOfMaxInEachBar + max;
					maxArrayForBars.push(max);	
					legendArray.push(threeDStackedBarsData[k].key);	
					legendNameMap[threeDStackedBarsData[k].key]="legend-"+k;	
				}
				
				var maxHeight =sumOfMaxInEachBar;
				var leftBarMargin = 0;
				var leftMargins	= 30;
				var padding = 0;
				var bottomMargins = 0;
				var spacingInHorizontalLines = 40;
				
				var sum = 1;				
				for(k=0;k<(''+maxHeight).length - 1;k++)
				{
					sum = sum+"0";				
				}		
				
				var lineFunction = d3.svg.line()
										  .x(function(d) { return d.x; })
										  .y(function(d) { return d.y; })
										 .interpolate("linear");
				
				
				var threeDBarXRegion=(threeDStackedBarsData[0].data.length* xSpacingInBars) + widthOfBars/2;
				var xScale = d3.scale.linear()
						.domain([0, threeDStackedBarsData[0].data.length])
						.range([widthOfBars/1.5,threeDBarXRegion ]);
						
					


				var yScale = d3.scale.linear()
						.domain([0, 1.55 * maxHeight])
						.range([height - 0.15 *height, 0]);             
				 
				var xAxis = d3.svg.axis()
						.scale(xScale)
						.orient("bottom")					
						.tickFormat(formatAsPercentage)
						.tickSize(0);

				var yAxis = d3.svg.axis()
						.scale(yScale)						
						.orient("left")
						.tickSize(0);;			
				
				var formatAsPercentage = d3.format("1");		
			
				var largestStringLngth=0;
					for(var counter =0 ;counter<xAxisArray.length;counter++)
					{
						if(largestStringLngth<(xAxisArray[counter].toString()).length)
						{
							largestStringLngth = (xAxisArray[counter].toString()).length;
						}
					}
		        xAxis.tickValues(tickController.getXTickArray(0,(xAxisArray.length),largestStringLngth, (threeDBarXRegion-widthOfBars/1.5)));	
				//xAxis.tickValues(d3.range(0, xAxisArray.length , 1));
				yAxis.tickValues(d3.range(0, 1.5* maxHeight, ((1.5* maxHeight)/10)));
				
				var maxYScale =	maxHeight + 100*(''+maxHeight).length;			
				var nextY = yScale(1.5*maxHeight);			
				
				var leftTranslation;
				if(width<400){
					leftTranslation=50;
				}else{
					leftTranslation=threeDBarXRegion*0.02;
				}
				svgElement=svgElement.append("g")
						  .attr("transform","translate("+leftTranslation+",0)");
				
				threeDBarXRegion=threeDBarXRegion+threeDBarXRegion*.1;	
				function drawHorizontalLines(startX, startY, widthOfBars, maxHeight, heightOfBars, nextY)
				{
					maxHeight = yScale(maxHeight);
					startY = yScale(startY);
					
					
					var scaleLine=[];				
							for(l=0; l<3; l++)
							{
								if(l==0)
								{
									
									x = startX-threeDBarXRegion*0.07;
									y = (startY-nextY) + 0.03 * width;
									
								}	
								else if(l==1)
								{
									x=startX-20;
									y=(startY-nextY);
								}
								else if(l==2)
								{
									x=threeDBarXRegion;
									y=(startY-nextY);														
								}
							
								scaleLine.push(JSON.parse('{"x":'+x+',"y":'+y+'}'));                      
							}
							return scaleLine;					
				}
				
				var startX= width  - width * 0.89;
				var startY= height - height * 0.90;					
				
				
				var svgContainer = svgElement.append("g")
											  .attr("transform","translate("+width*0.04+","+0+")")	;
				for(j=0;j<10;j++)
				{
				
					var lineGraph = svgContainer.append("path")
										.attr("d", lineFunction(drawHorizontalLines(startX, startY, widthOfBars, maxHeight, heightOfBars, nextY)))
										//.attr("stroke", "blue")
										.attr("stroke-width", 0.5)
										.attr("fill", "none");	
					
					var lineGraphLength= lineGraph.node().getTotalLength();

										lineGraph
										  .attr("stroke-dasharray", lineGraphLength + " " + lineGraphLength)
										  .attr("stroke-dashoffset", lineGraphLength)
										  .transition()
										  .duration(2000)
										  .ease("linear")
										  .attr("stroke-dashoffset", 1)
										  .attr("stroke", gridLineColor)
										  .attr("stroke-width", 0.5)
										  .attr("fill", "none");
				
							nextY=nextY + (yScale(0) - yScale((1.5* maxHeight)/10));						
				}
				
				
			var startX= width  - width * 0.89;
		
			var startY = yScale(0);
			
			var topYSideOne = 0;
			var topYSideTwo = 0;
			var topYSideThree = 0;
				
				
			
            var elementLengthInData=threeDStackedBarsData[0].data.length;
			var totalElementsType = threeDStackedBarsData.length;
			
			for(var q=0; q<elementLengthInData; q++){
				
				var startY1 = yScale(0); 
				var currentHeight=0;
				
				for(var w=0; w<totalElementsType; w++){
				
					var currentData = threeDStackedBarsData[w].data;
					
					var lineGraph1 = svgContainer.append("path")	
									.attr("class","lineGraphClass " + legendNameMap[threeDStackedBarsData[w].key])
									.attr("d", lineFunction(getSidesCordinates(startX+leftBarMargin, startY1, widthOfBars, currentData[q], 1, currentData[q], 1 )))			
									.attr('val',function(){
										var cordinateArray=getSidesCordinates(startX+leftBarMargin, startY1, widthOfBars, currentData[q], 1, currentData[q], 1);
										return cordinateArray[0].height;
									})
									.attr("stroke", "grey")
									.attr("fill", colorArray[w])
									.attr("xVal",threeDStackedBarsData[w].key)		
									.on("mouseover",function(){
									   //toolTipManager.showToolTip(d3.event, null, null, false, cfg.toolTipLabelForYAxis + " :- " + d3.select(this).attr('val'));
									   var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
						
										toolTipManager.showToolTip(d3.event,"",(d3.select(this).attr('xVal')), false,yHeadingValueMap);
									})
									.on("mouseout", function (d, i) {
										var targetElement = d3.select(this);
										toolTipManager.hideTooTip();
									})
									.style("display","none");
						
					
					var lineGraph2 = svgContainer.append("path")
									.attr("class","lineGraphClass " + legendNameMap[threeDStackedBarsData[w].key])
									.attr("d", lineFunction(getSidesCordinates(startX+leftBarMargin, startY1, widthOfBars,currentData[q], 2, currentData[q], 1 )))
									.attr('val',function(){
											var cordinateArray=getSidesCordinates(startX+leftBarMargin, startY1, widthOfBars, currentData[q], 2, currentData[q], 1 );
											return cordinateArray[0].height;
										})
										.attr("stroke", "white")
									.attr("fill", colorArray[w])
									.attr("stroke", "grey")
									.attr("xVal",threeDStackedBarsData[w].key)		
									.on("mouseover",function(){
									   //toolTipManager.showToolTip(d3.event, null, null, false, cfg.toolTipLabelForYAxis + " :- " + d3.select(this).attr('val'));
									   var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
						
										toolTipManager.showToolTip(d3.event,"",(d3.select(this).attr('xVal')), false,yHeadingValueMap);
									})
									.on("mouseout", function (d, i) {

										var targetElement = d3.select(this);
										toolTipManager.hideTooTip();
									})
									.style("display","none");
				
					var lineGraph3 = svgContainer.append("path")
									.attr("class","lineGraphClass " + legendNameMap[threeDStackedBarsData[w].key])
									.attr("d", lineFunction(getSidesCordinates(startX+leftBarMargin, startY1, widthOfBars, currentData[q], 3, currentData[q], 1 )))
									.attr('val',function(){
											var cordinateArray=getSidesCordinates(startX+leftBarMargin, startY1, widthOfBars, currentData[q], 3, currentData[q], 1 );
											return cordinateArray[0].height;
										})
										.attr("stroke", "grey")
									.attr("fill", colorArray[w])
									.attr("xVal",threeDStackedBarsData[w].key)		
									.on("mouseover",function(){
									   //toolTipManager.showToolTip(d3.event, null, null, false, cfg.toolTipLabelForYAxis + " :- " + d3.select(this).attr('val'));
									   var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
						
										toolTipManager.showToolTip(d3.event,"",(d3.select(this).attr('xVal')), false,yHeadingValueMap);
									})
									.on("mouseout", function (d, i) {

										var targetElement = d3.select(this);
										toolTipManager.hideTooTip();
									})
									.style("display","none");
						
				        currentHeight+=currentData[q] ;
						startY1 = yScale(currentHeight) - ySpacingFactor * (w+1);						
						
				}			  
					
				leftBarMargin=leftBarMargin+xSpacingInBars;		
				startY1 = yScale(0);
			}
			
			
			var eleArray=$(".lineGraphClass").hide();
				for(var m=0; m<eleArray.length; m++){
					
					$(eleArray[m]).slideUp(m * 100).delay(m *40).fadeIn();					
				}
			
			hideAxisPath(svgElement);
		
			function getSidesCordinates(x,y,width,height,sideno,heightOfBar, dataNumber){
	
						height = yScale(0)-yScale(height) ;
					
						var lineData=[];
					
						if(sideno==1){
							var factor=parseInt(width*.33) + 1;
							var xHit=0;
							var yHit=0;
							for(var i=0;i<5;i++){
										
							   if(i==0)
							   {
									y = y;
														
							   }
							   else if(i==1)
							   {
								   y = y - height;	
							   }
							   else if(i==2)
							   {
								   x=x+width;   
							   }
							   else if(i==3)
							   {
								   y=y+height;    
							   }     
								else if(i==4)
							   {
								  x=x-width;    
							   }
								
								var nextY=y;
								var nextX=x;
								   
								lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}'));                      
							}                               
						}
					 else if(sideno==2){
						 
							//var factor = *(15/380);
							var factor=parseInt(width*.33) + 1;
							//alert(height);
							
							for(var i=0;i<4;i++){
										
							   if(i==0)
							   {								   
								   y = y;											   
							   }
							   else if(i==1)
							   {
								   x=x-factor;
								   y=y-factor;								 
							   }
							   else if(i==2)
							   { 								
								   y=y-height;									
							   }
							   else if(i==3)
							   {
								   x=x+factor;
								   y=y+factor;  
							   }     
								   
								var nextY=y;
								var nextX=x;
								lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}'));  
							}                               
							
						}
						else if(sideno==3){
							
							var factor=parseInt(width*.33) + 1;
							
							for(var i=0;i<4;i++){
										
							   if(i==0)
							   {
									topYSideThree = y + height;
									y = y - height;
									//topYSideThree = y;		
							   }
							   else if(i==1)
							   {
								   x=x-factor;
								   y=y-factor;
									 
							   }
							   else if(i==2)
							   {
								   x=x+width;   
							   }
							   else if(i==3)
							   {
								   x=x+factor;
								   y=y+factor;    
							   }     
								   
								var nextY=y;
								var nextX=x;
								   
								lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}')); 											   
							}                              							
						}					
						return lineData;						
					}
			
				
				function mMove(){

					 var m = d3.mouse(this);
					 console.log(m);
					 d3.select(this).select("title").text(yScale(m[1]));
				}
				

				var xAxisRef=svgContainer.append("g")
						.attr("class", "axis")
						.attr("transform", "translate("+startX+"," + (height - height * 0.15 + yScale(1.5 * maxHeight)) + ")")						
						.call(xAxis);
						
				xAxisRef.selectAll('text').text(function(d,i){
							
						 return xAxisArray[i];
						})
						.style("fill",textColor+" !important");


				var yAxisRef=svgElement.append("g")
						.attr("class", "axis")
						.attr("transform", "translate(" + (width*0.08) + ","+ (yScale(1.5 * maxHeight))  +")")
						.call(yAxis);
				/*
				d3.selectAll('.axis text')
						.style("fill",textColor);;	   
				
				d3.selectAll('.axis path').attr('fill','none');	
				*/
				
				//y indication label
				var pixcelPerChar=6;
				var indexOfParaenthesis=yAxisRef.attr("transform").indexOf("(")+1;
				var indexOfComma=yAxisRef.attr("transform").indexOf(",");
				
				var yTotalPixcel=cfg.yLabel.toString().length*pixcelPerChar;
				var yLabelTop=height/2+yTotalPixcel/2;
				
				var yLabelLeft;
				if(width<400){
					yLabelLeft=-parseInt(yAxisRef.attr("transform").substring(indexOfParaenthesis,indexOfComma))*1.5;
				}else{
					yLabelLeft=-parseInt(yAxisRef.attr("transform").substring(indexOfParaenthesis,indexOfComma))*0.7;
				}
				
				axisLabelController.appendLabel(cfg.yLabel,yLabelLeft,yLabelTop,-90,yAxisRef,textStyleConfg.yLabelColor,600);	
				
				//x indication label
				var xTotalPixcel=cfg.xLabel.toString().length*pixcelPerChar;
				var xLabelLeft=threeDBarXRegion/2-xTotalPixcel;
				var xLabelTop=height*0.1;
				axisLabelController.appendLabel(cfg.xLabel,xLabelLeft,xLabelTop,0,xAxisRef,textStyleConfg.xLabelColor,600);	
				
				var legend = svgContainer.append("g")
                    .attr("class", "legend")
                    .attr("width", width)
                    .attr("height", height)
                    .attr('transform', 'translate(' +startX + ','+(height * 0.08)+')');

				  
				  var legendWidth = 0;
				  var legendHeight = 0;
				
				  if(width > 300)
				  {
					  legendWidth = 12;
					  legendHeight = 12;
				  }
				  else
				  {
					  legendWidth = 10;
					  legendHeight = 10;
				  }
				 
				  var maxLengthOfKeys = d3.max(threeDStackedBarsData, function(d,i){  return d.key.length;});
				  
					
					
				   var newXCord=0;
				   var CordBean={
					   
						getX:function(){
							
							return newXCord;
						},
						setX:function(val){
							newXCord=val;
						}
				   }
				   
				   var legendPositionArray=legendController.getLegendPositionArray(legendArray,width,maxHeight*0.25);
                    legend.selectAll('rect')
							.data(legendArray)
                            .enter()
                            .append("rect")
                            .attr("x", function (d, i) {
								/*
								var moveToNextLine=isMoveLegendToNextLine(d.key,xPos,i);
						
								if(moveToNextLine.move){
									xPos=moveToNextLine.startPos;
								}else{
									xPos=moveToNextLine.startPos;
								}
								positionXArray.push(xPos);
								return xPos;
								*/
								return legendPositionArray[i].x;
                        })
                            .attr("y", function(d,i){
								/*
								var moveToNextLine=isMoveLegendToNextLine(d.key,xPos1,i);
						
								//var yPos=0;
								if(moveToNextLine.move){
									nextLineCounter++;
									yPos=nextLineCounter*nextLineSeparator;
									xPos1=moveToNextLine.startPos;
								}else{
									xPos1=moveToNextLine.startPos;
								}
								positionYArray.push(yPos);
								return yPos;
								*/
								return legendPositionArray[i].y;
							})
							.attr("width", legendWidth)
                            .attr("height", legendHeight)
                            .style("fill", function (d, i) {
                            return colorArray[i];
                        })
						.on("click", function (d) {
                            var state = svgElement.selectAll("." + legendNameMap[d]).style("display");
                            if (state == "none") {

								$("#"+selectedElementId).find("path."+legendNameMap[d]).slideUp(400).delay(400).fadeIn();
								svgElement.selectAll(".legend-text."+legendNameMap[d]).style("text-decoration","none");
                              
                            } else {

                                var selectedPath = svgElement.selectAll("." + legendNameMap[d]);
								$("#"+selectedElementId).find("path."+legendNameMap[d]).slideDown(400).delay(400).fadeOut();                              
								svgElement.selectAll(".legend-text."+legendNameMap[d]).style("text-decoration","line-through");
                            }
                        });	
                           
                    
                    legend.selectAll('text')
                            .data(legendArray)
                            .enter()
                            .append("text")
							.attr("class",function(d){
								return "legend-text "+legendNameMap[d];
							})
                            .attr("x", function (d, i) {
								/*
								var x=positionXArray[i]+textSeparator;
								return x;
								*/
								return legendPositionArray[i].textPos;
							})
                            .attr("y",function(d,i){
								/*
								var y=positionYArray[i]+textSeparator-legendHeight;
								return y;
								*/
								return legendPositionArray[i].y+legendHeight;
							})
							.attr("width", legendWidth)
                            .attr("height", legendHeight)
                            .attr("font-size", 12)
                           //.attr("dx", "1.50em")
                           .attr("dy", ".08em")
                            .text(function (d, i) {
                            return d;
                        });
						
				//set axistextColor
				//svgElement.selectAll(".axis").selectAll("text").style("fill",cfg.axisTextColor);
				
				//set legendColor
				//legend.selectAll("text").style("fill",cfg.legendTextColor);
				
				//set font here
				setTextStyleAndSvgBackGround(svgElement);	
			}
		};
		
		/*Network Connection Chart*/
		var globAnalysisGraph = 
		{
			globChartAnalysis:function(cnfg)
			{
				var globAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.1,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
			
				var nodesArray = cnfg.data.nodesArray;
				var cordArray = cnfg.data.cordArray;
				var nodesColor = cnfg.data.nodesColor;
				var Data = cnfg.data.Data;
				var titleColor = cnfg.data.titleColor;
				var titleSize = cnfg.data.titleSize;
				var title = cnfg.data.title;
				var backGroundImage = cnfg.data.backGroundImage;
				var nodeText = 12 , pathText = 10 ,nodeTextColor = "gray",nodeCircleSize = 4;
				var textFamily = 'calibri';
				svgElement.style('background','url('+backGroundImage+') no-repeat')
				          .style('background-size','100% 100%');
				var globMainGroup = svgElement.append("g")
					.attr('class','glob-main-group')
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");
		
				var xCoordinate = [],yCoordinate = [];
				var index =0;
				for(var outerLoop=0;outerLoop<cordArray.length;outerLoop++)
				{
					for(var innerLoop=0;innerLoop<2;innerLoop++)
					{	
						if(innerLoop==0)
							xCoordinate[index]=cordArray[outerLoop][innerLoop];
						else
							yCoordinate[index++]=cordArray[outerLoop][innerLoop];
					}
				}	

				globMainGroup.append('text')
							 .attr('class','globTitle')
							 .attr('x',globAnalChart.left*2)
							 .attr('y',titleSize)
							 .attr('font-size',titleSize)
						     .attr('text-family',textFamily)
							 .attr('fill',titleColor)
			 			     .text(title);
				
				var yScale = d3.scale.linear()
									 .domain([0,100])
									 .range([height,0]);
	            
				var yAxis = d3.svg.axis()
                                  .scale(yScale)
                                  .orient("left");
	             
                var yAxisGroup = globMainGroup.append("g")
									.attr("class","y-axis")
									.attr("transform","translate("+30+","+10+")")
						       	    .attr('fill','none')
									.style('display','none')
									.call(yAxis);
				var xScale = d3.scale.linear()
							         .domain([0,100])
                                     .range([0,width-20]);
	            
				var xAxis = d3.svg.axis()
                                  .scale(xScale)
                                  .orient("bottom");
	   
                var xAxisGroup = globMainGroup.append("g")
									.attr("class","x-axis")
									.attr("transform","translate("+10+","+(height-30)+")")
						       	    .attr('fill','none')
									.style('display','none')
									.call(xAxis);
						
				var showNodes =  globMainGroup.append("g")
											  .attr("class","show-nodes")
											  .attr("transform","translate("+0+","+0+")");		
				
								showNodes.selectAll('circle')
										 .data(nodesArray)
										 .enter()
										 .append('circle')
										 .attr('value',function(d,i){return i})
										 .attr('cx',function(d,i){return xScale(xCoordinate[i])})
										 .attr('cy',function(d,i){return yScale(yCoordinate[i])})
										 .attr('r',nodeCircleSize)
										 .attr('fill',function(d,i){return nodesColor[i]})
										 .on('mouseover',function()
										 {
												d3.select(this).attr('r',nodeCircleSize+3);
												var selectedNodeIndex = d3.select(this).attr('value');
												var selectedNode = nodesArray[selectedNodeIndex];
												d3.select("#"+selectedNode.replace(/ /g,'')).attr('font-size',nodeText+2).attr('fill','black');
												d3.selectAll('.'+selectedNode.replace(/ /g,'')).style('display','none');
												var setIndexOfData;
												for(var nodeCounter =0;nodeCounter<Data.length;nodeCounter++)
												{
													if(selectedNode==Data[nodeCounter].node)
													{
														setIndexOfData=nodeCounter;
														break;
													}
												}
												for(var connectedNodeWithPresentNode=0;connectedNodeWithPresentNode< Data[setIndexOfData].connectedNodes.length;connectedNodeWithPresentNode++)
												{	
													
													var nestedConnectedNode = Data[setIndexOfData].connectedNodes[connectedNodeWithPresentNode];
													var indexOfConnectedNode = nodesArray.indexOf(nestedConnectedNode);
													d3.select("#"+nestedConnectedNode.replace(/ /g,'')).attr('font-size',nodeText+2).attr('fill','black');
													d3.select("#"+(selectedNode+nestedConnectedNode).replace(/ /g,'')).attr('font-size',nodeText+1).attr('fill','black');
					   //                           alert("city "+ nestedConnectedNode + "index = "+indexOfConnectedNode+"  "+Data[nodeCounter].pathColor);
													var dashedLineGroup=globMainGroup.append("line")
																.attr('class','dotedLine')
																.attr("x1", function (d) 
																{
																	return xScale(xCoordinate[selectedNodeIndex]);
																})
																.attr("y1", function (d) {
																	return yScale(yCoordinate[selectedNodeIndex]);
																})
																.attr("x2", function (d) {
																	return xScale(xCoordinate[selectedNodeIndex]);
																})
																.attr("y2", function (d) {
																	return yScale(yCoordinate[selectedNodeIndex]);
																});
																
																dashedLineGroup
																.transition()
																.duration(1500)
																.attr("x2",function(){
																	return xScale(xCoordinate[indexOfConnectedNode]);
																})
																.attr("y2",function(){
																	return yScale(yCoordinate[indexOfConnectedNode]);
																})
																.style("stroke",'red')
																.style("stroke-dasharray", ("5, 5"));
												}
										})
										.on('mouseout',function()
										{
											d3.select(this).attr('r',nodeCircleSize);
											var selectedNodeIndex = d3.select(this).attr('value');
												var selectedNode = nodesArray[selectedNodeIndex];
											d3.selectAll('.'+selectedNode.replace(/ /g,'')).style('display','block');
											d3.selectAll('.dotedLine').style('display','none');
											d3.select("#"+selectedNode.replace(/ /g,'')).attr('font-size',nodeText).attr('fill',nodeTextColor);
											
											var setIndexOfData123;
												for(var nodeCounter =0;nodeCounter<Data.length;nodeCounter++)
												{
													if(selectedNode==Data[nodeCounter].node)
													{
														setIndexOfData123=nodeCounter;
														break;
													}
												}
											for(var connectedNodeWithPresentNode=0;connectedNodeWithPresentNode< Data[setIndexOfData123].connectedNodes.length;connectedNodeWithPresentNode++)
												{		
													var nestedConnectedNode = Data[setIndexOfData123].connectedNodes[connectedNodeWithPresentNode];
													d3.select("#"+nestedConnectedNode.replace(/ /g,'')).attr('font-size',nodeText).attr('fill',nodeTextColor);
													d3.select("#"+(selectedNode+nestedConnectedNode).replace(/ /g,'')).attr('font-size',nodeText-1).attr('fill',nodeTextColor);
												}

										});
				var showNodesText =  globMainGroup.append("g")
											  .attr("class","show-nodes-text")
											  .attr("transform","translate("+0+","+0+")")	;
									
									  showNodesText.selectAll('text')
									               .data(nodesArray)
												   .enter()
												   .append('text')
												   .attr('id',function(d){return d.replace(/ /g,'')})
												   .attr('x',function(d,i){return xScale(xCoordinate[i])-((d.length*nodeText)/2.5)})
												   .attr('y',function(d,i){return yScale(yCoordinate[i])-8})
												   .attr('font-size',nodeText)
												   .attr('font-family',textFamily)
												   .attr('fill',nodeTextColor)
												   .text(function(d,i){return d});
									
									  
				//show paths 						
				for(var nodeCounter =0;nodeCounter<Data.length;nodeCounter++)
				{
					var presentNode = Data[nodeCounter].node;
					var indexOfpresentNode = nodesArray.indexOf(presentNode);
					//alert(presentNode);
					for(var connectedNodeWithPresentNode=0;connectedNodeWithPresentNode< Data[nodeCounter].connectedNodes.length;connectedNodeWithPresentNode++)
					{
						
					   var nestedConnectedNode = Data[nodeCounter].connectedNodes[connectedNodeWithPresentNode];
					   var indexOfConnectedNode = nodesArray.indexOf(nestedConnectedNode);
					   
					   var deltaXX = Math.abs(xScale(xCoordinate[indexOfConnectedNode])-xScale(xCoordinate[indexOfpresentNode]));
					   var deltaYY = Math.abs(yScale(yCoordinate[indexOfConnectedNode])-yScale(yCoordinate[indexOfpresentNode]));
					   var rad = Math.atan2(deltaYY, deltaXX);
					   var degree = rad * (180 / Math.PI);
							globMainGroup.append('text')
								.attr('id',(presentNode+nestedConnectedNode).replace(/ /g,''))
								.attr("transform","translate("+(xScale(xCoordinate[indexOfConnectedNode])+xScale(xCoordinate[indexOfpresentNode]))/2+","+(yScale(yCoordinate[indexOfConnectedNode])+yScale(yCoordinate[indexOfpresentNode]))/2+")rotate("+(degree)+")")					
								.attr('font-size',nodeText-1)
							    .attr('font-family',textFamily)
								.attr('fill',nodeTextColor)
								.text(Data[nodeCounter].pathTexts[connectedNodeWithPresentNode]);
					   
					   var lineGroup = globMainGroup.append("line")
					                .attr('class',presentNode.replace(/ /g,''))
									.attr("x1", function (d) 
									{
										return xScale(xCoordinate[indexOfpresentNode]);
									})
									.attr("y1", function (d) {
										return yScale(yCoordinate[indexOfpresentNode]);
									})
									.attr("x2", function (d) {
										return xScale(xCoordinate[indexOfpresentNode]);
									})
									.attr("y2", function (d) {
										return yScale(yCoordinate[indexOfpresentNode]);
									});
									lineGroup.transition()
									         .delay(200)
											.duration(1500)
											.attr("x2",function(){
													return xScale(xCoordinate[indexOfConnectedNode]);
													})
											.attr("y2",function(){
													return yScale(yCoordinate[indexOfConnectedNode]);
													})
									.style("stroke",function(){return Data[nodeCounter].pathColor});
					}
				}
				
			},
		};
		
		
		var drawTreeChart={
			treeChart:function(cfg){
				var data=cfg.data;
				var linkColor=cfg["link-color"];
				var nodeColor=cfg["node-color"];
				
				
				var margin = {'top':(height*0.1),'right':(width*0.1), 'bottom': (height*0.1), 'left': (width*0.1)};
				
				width = width - margin.right - margin.left;
				height = height - margin.top - margin.bottom;
				
			
				
				var i = 0,
					duration = 750,
					root;

				var tree = d3.layout.tree()
					.size([height, width])
					.children(function(d) { return d.SubRoot; });

				var diagonal = d3.svg.diagonal()
					.projection(function(d) { return [d.y, d.x]; });

				var svg = svgElement
						  .append("g")
					      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


				  root = data;
				  root.x0 = height / 2;
				  root.y0 = 0;

				
				  update(root);


				  var no_of_levels = 0;
				  
				  console.log("Get of depth : " + getDepth(root));
				  
				 function getDepth(obj) {
						var depth = 0;
						if (obj.SubRoot) {
							obj.SubRoot.forEach(function (d) {
								var tmpDepth = getDepth(d)
								if (tmpDepth > depth) {
									depth = tmpDepth
								}
							})
						}
						return 1 + depth
					}
				  

				function update(source) {

				  // Compute the new tree layout.
				  var nodes = tree.nodes(root).reverse(),
					  links = tree.links(nodes);

				  // Normalize for fixed-depth.
				  nodes.forEach(function(d) { 
					d.y = d.depth * ((width-20)/getDepth(root)); });

				  // Update the nodes…
				  var node = svg.selectAll("g.node")
					  .data(nodes, function(d) { return d.ids || (d.ids = ++i); });

				  // Enter any new nodes at the parent's previous position.
				  var nodeEnter = node.enter().append("g")
					  .attr("class", "node")
					  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
					  .on("click", click);

				  nodeEnter.append("circle")
					  .attr("r", 1e-6)
					  .style("fill", function(d) { 
							//return d._children1 ? "lightsteelblue" : "#fff"; 
							return nodeColor;
						})
						.style("stroke","lightsteelblue")
						.on("mouseover",function(){
							d3.select(this).style("stroke-width","2");	
						})
						.on("mouseleave",function(){
							d3.select(this).style("stroke-width","1");
						});

				  nodeEnter.append("text")
					  .attr("x", function(d) { return d._children1 || d._children1 ? -10 : 10; })
					  .attr("dy", ".35em")
					  .attr("text-anchor", function(d) { return d._children1 || d._children1 ? "end" : "start"; })
					  .text(function(d) { return d.Element || d.Element || d.Root; })
					  .style("fill-opacity", 1e-6);

				  // Transition nodes to their new position.
				  var nodeUpdate = node.transition()
					  .duration(duration)
					  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

				  nodeUpdate.select("circle")
					  .attr("r", 4.5)
					  .style("fill", function(d) { 
							//return d._children1 ? "lightsteelblue" : "#fff"; 
							return nodeColor;
						})
						.style("stroke","lightsteelblue")
						/*
						.on("mouseover",function(){
							d3.select(this).style("stroke-width","2");	
						})
						.on("mouseleave",function(){
							d3.select(this).style("stroke-width","1");
						});
						*/
						
				  nodeUpdate.select("text")
					  .style("fill-opacity", 1);

				  // Transition exiting nodes to the parent's new position.
				  var nodeExit = node.exit().transition()
					  .duration(duration)
					  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
					  .remove();

				  nodeExit.select("circle")
					  .attr("r", 1e-6);

				  nodeExit.select("text")
					  .style("fill-opacity", 1e-6);

				  // Update the links…
				  var link = svg.selectAll("path.link")
					  .data(links, function(d) { return d.target.ids; });

				  // Enter any new links at the parent's previous position.
				  link.enter().insert("path", "g")
					  .attr("class", "link")
					  .attr("d", function(d) {
						var o = {x: source.x0, y: source.y0};
						return diagonal({source: o, target: o});
					  })
					  .style("stroke",linkColor)
					  .style("fill","none")
					  ;

				  // Transition links to their new position.
				  link.transition()
					  .duration(duration)
					  .attr("d", diagonal);

				  // Transition exiting nodes to the parent's new position.
				  link.exit().transition()
					  .duration(duration)
					  .attr("d", function(d) {
						var o = {x: source.x, y: source.y};
						return diagonal({source: o, target: o});
					  })
					  .remove();

				  // Stash the old positions for transition.
				  nodes.forEach(function(d) {
					d.x0 = d.x;
					d.y0 = d.y;
				  });
				}

				// Toggle children on click.
				function click(d) {
				  if (d.SubRoot) {
					d._children1 = d.SubRoot;
					d.SubRoot = null;
				  } else {
					d.SubRoot = d._children1;
					d._children1 = null;
				  }
				  update(d);
				}
				
			//set font here
				setTextStyleAndSvgBackGround(svgElement);		
			
			},
		};
		
		
		
		var areaChartWithNegativeValueGraph=
			{
					areaChartWithNegativeValueAnalysis:function(cnfg)
					{			
							var title = cnfg.data.title;
							var yAxisArray = cnfg.data.yAxisArray;
							var xAxisArray = cnfg.data.xAxisArray;
							var xAxisLabel = cnfg.data.xAxisLabel;
							var yAxisLabel = cnfg.data.yAxisLabel;
							var midPoint = cnfg.data.midPoint;
							var midPointLabel = cnfg.data.midPointLabel;
							var conditionArrayAboveMidPoint = cnfg.data.conditionArrayAboveMidPoint;
							var conditionArrayBelowMidPoint = cnfg.data.conditionArrayBelowMidPoint;
							
						
							var areaAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.15,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
							var scaleWidth=width-areaAnalChart.left-areaAnalChart.right;
				            var scaleHeight=height-areaAnalChart.top-areaAnalChart.bottom;
							
							var fontSize =12,fontFamily = "calibri";
							//create array of x axis time index
							var xAxisTimeIndex = [];
							for(var counter = 0;counter<xAxisArray.length ;counter++)
							{
								xAxisTimeIndex[counter] = counter;
							}
							//grid view here
							var gridManager =   
								{
										init: function (svg, height, width, left, top) 
									{
										var hfactor = Math.ceil(height * .1);
										var vfactor = Math.ceil(height * .1);
										var hRange = Math.ceil(height / hfactor);

										var vRange = Math.ceil(width / vfactor);

										svg.selectAll(".hline").data(d3.range(hRange)).enter()
											.append("line")
											.attr("y1", function (d) {
											return d * hfactor+10;
										})
											.attr("y2", function (d) {
											return d * hfactor+10;
										})
											.attr("x1", function (d) {
											return 0;
										})
											.attr("x2", function (d) {
											return width;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");



										svg.selectAll(".vline").data(d3.range(vRange)).enter()
											.append("line")
											.attr("x1", function (d) {
											return d * vfactor;
										})
											.attr("x2", function (d) {
											return d * vfactor;
										})
											.attr("y1", function (d) {
											return 0;
										})
											.attr("y2", function (d) {
											return height;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");
									}

								};
						
				gridManager.init(svgElement, scaleHeight, scaleWidth, areaAnalChart.left, areaAnalChart.top);
						var leftMarginOfSvg = $(selectorElement).offset().left;
						svgElement.on("mouseover",function()
									{
										var x = event.pageX;
										var y = event.pageY;
										x=x-(leftMarginOfSvg+areaAnalChart.left);
										x = Math.round(xScale.invert(x));
										
										if(x>=0 && x<=xAxisArray.length)
										{
										var heading=xAxisArray[x];
										var xAxisVal = xAxisArray[x];
										var yAxisVal = yAxisArray[x];
										var yHeadingValueMap=[{"headingName":xAxisLabel,"headingVal":xAxisVal},
															//  {"headingName":"sss","headingVal":runPerBall},
															  {"headingName":yAxisLabel,"headingVal":yAxisVal}
														//	  {"headingName":totalRunUnit,"headingVal":totalRun}
															  ];
										
										toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90);	
										}
									})
									.on("mouseleave",function(){
										toolTipManager.hideTooTip();
									});


				
				
	
	var areaChartMainGroup = svgElement.append("g")
								   .attr('class','main-group')
								   .attr("transform", "translate(" + areaAnalChart.left + "," + areaAnalChart.top + ")")
		
		//title label here
		axisLabelController.appendLabel(title,(areaAnalChart.left),(-areaAnalChart.top/3),0,areaChartMainGroup,textStyleConfg.titleColor,600);
		var xScale = d3.scale.linear()
					 .domain([0,xAxisArray.length-1])
					 .range([0,scaleWidth]); 

		var yScale = d3.scale.linear()
                    .domain([d3.min(yAxisArray),d3.max(yAxisArray)*1.3])
                    .range([scaleHeight,0]);
					
			var largestStringLngth=0;
			for(var counter =0 ;counter<xAxisArray.length;counter++)
			{
				if(largestStringLngth<(xAxisArray[counter].toString()).length)
				{
					largestStringLngth = (xAxisArray[counter].toString()).length;
				}
			}
					
		//x axis
		var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.tickValues(tickController.getXTickArray(0,(xAxisArray.length),largestStringLngth, (scaleWidth)));
		var xAxisGroup=areaChartMainGroup.append("g")
						.attr('id','xAxis')
						.attr("class", "xAxis")
						.attr('fill',"none")
						.attr("transform", "translate("+0+"," + scaleHeight + ")")
						.call(xAxis);
	
			
					xAxisGroup.selectAll('text')
							 .text(function(d){
								return xAxisArray[d];
							 
							 })
							 .style('font-size',fontSize)
						     .attr('font-family',fontFamily)
							 .attr('fill','black');
							 
	/*	var xAxisLabelGroup = areaChartMainGroup.append("g")
									.attr("class","x-axis-label-group")
									.attr("transform","translate("+scaleWidth/2.5+","+(scaleHeight+(areaAnalChart.bottom))+")")
									xAxisLabelGroup.append('text')
											        .attr('x',0)
													.attr('y',0)
													.attr('font-size',fontSize*1.5)
													.attr('font-family',fontFamily)
													.attr('fill','gray')
													.text(xAxisLabel);	*/
	
	// xAxis label here
	var pixcelPerChar = 6;
	var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
	var xIndicationLabelTop=scaleHeight+(scaleHeight*0.15);
	var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;
	axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,areaChartMainGroup,textStyleConfg.xLabelColor,600);												

		var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
		.tickValues(tickController.getTickArray(d3.min(yAxisArray),d3.max(yAxisArray)*1.3,10));
				
			areaChartMainGroup.append("g")
						.attr('id','yAxis')
						.attr("class", "yAxis")
						.attr('fill',"none")
						.attr('font-size',fontSize)
						.attr('font-family',fontFamily)
						.attr("transform", "translate("+(-fontSize)+"," + 0 + ")")
						.call(yAxis)
					    .selectAll('text')
						.attr('font-size',fontSize)
					    .attr('font-family',fontFamily)
						.attr('fill','black');	
		/*	var yAxisLabelGroup = areaChartMainGroup.append("g")
									.attr('class','y-axis-label-group')	
				     				.attr("transform","translate("+(-areaAnalChart.left/2)+","+scaleHeight/1.5+")");			
									
					yAxisLabelGroup.append('text')
								   .attr('font-size',fontSize*1.5)
							       .attr('font-family',fontFamily)
								   .attr('fill','gray')
								   .attr('transform','rotate(-90)')
								   .text(yAxisLabel);		*/
			//yAxis label here
			var totalYLabelPixcel=yAxisLabel.toString().length*pixcelPerChar;		
			var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;
			var yIndicationLabelLeft=(-areaAnalChart.left/2);
			axisLabelController.appendLabel(yAxisLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,areaChartMainGroup,textStyleConfg.yLabelColor,600);
								   
		/*	var midPointLabelGroup = areaChartMainGroup.append("g")
									.attr('class','y-axis-label-group')	
				     				.attr("transform","translate("+(scaleWidth+(areaAnalChart.right/4))+","+0+")");			
									*/
					var midPointLabelArray = midPointLabel.split(' ');
					midPointLabelArray.push(midPoint);
					var midPointLabelArrayLength = parseInt(midPointLabelArray.length/2);
									
					for(var index = 0;index<midPointLabelArray.length;index++)
					{
						axisLabelController.appendLabel(midPointLabelArray[index],(scaleWidth+(scaleWidth*.01)),yScale(midPoint)-(midPointLabelArrayLength)*(fontSize) + (index*fontSize),0,areaChartMainGroup,"black",600);
					}
			/*		midPointLabelGroup.selectAll('text')
								   .data(midPointLabelArray)
								   .enter()
								   .append('text')
								   .attr('y',function(d,i){return yScale(midPoint)-(midPointLabelArrayLength)*(fontSize) + (i*fontSize)})
								   .attr('font-size',fontSize)
							       .attr('font-family',fontFamily)
								   .attr('fill','black')
								//   .attr('transform','rotate(90)')
								   .text(function(d){return d;});								*/   
							
						var	gradientAboveMid=$.extend({
								'color': 'url(#gradientAboveMid)',
							/*	'axisColor':'blue',
								'data':[],
								'attachBrushEvent':false,
								'xAxisIndicationLabel':'',
								'yAxisIndicationLabel':''*/
								
							}, gradientAboveMid);
					
					var aboveMidPointkey = [];
					var aboveMidPointvalues = [];
					for(index in conditionArrayAboveMidPoint)
					{
						for(key in conditionArrayAboveMidPoint[index])
							{
								aboveMidPointkey.push(key);
								aboveMidPointvalues.push(conditionArrayAboveMidPoint[index][key]);
							}
					}
				
				//	alert(keys+"  "+values)
				//	var aboveMidPointColorArray = ['#FFCCCC','#FF4D4D','#B22400'];
					var gradient1 = areaChartMainGroup.append("svg:defs")
				.append("svg:linearGradient")
				.attr("id", "gradientAboveMid")
				.attr("x1", "0%")
				.attr("y1", yScale(midPoint))
				.attr("x2", "0%")
				.attr("y2", yScale(d3.max(yAxisArray)*1.3))
				.attr("gradientUnits", "userSpaceOnUse")
				.selectAll("stop")
				.data(aboveMidPointkey)
				.enter().append("stop")
				.attr("offset", function(d,i) {return ""+((d-midPoint)/(d3.max(yAxisArray)*1.3))*100+"%"; })
				.attr("stop-color", function(d,i) {return aboveMidPointvalues[i]; });

				var	gradientBelowMid=$.extend({
								'color': 'url(#gradientBelowMid)',
							/*	'axisColor':'blue',
								'data':[],
								'attachBrushEvent':false,
								'xAxisIndicationLabel':'',
								'yAxisIndicationLabel':''*/
								
							}, gradientBelowMid);
					
				var belowMidPointkey = [];
					var belowMidPointvalues = [];
					for(index in conditionArrayBelowMidPoint)
					{
						for(key in conditionArrayBelowMidPoint[index])
							{
								belowMidPointkey.push(key);
								belowMidPointvalues.push(conditionArrayBelowMidPoint[index][key]);
							}
					}
				
				var gradient2 = areaChartMainGroup.append("svg:defs")
				.append("svg:linearGradient")
				.attr("id", "gradientBelowMid")
				.attr("x1", "0%")
				.attr("y1", yScale(d3.min(yAxisArray)))
				.attr("x2", "0%")
				.attr("y2", yScale(midPoint))
				.attr("gradientUnits", "userSpaceOnUse")
				.attr("gradientUnits", "userSpaceOnUse")
				.selectAll("stop")
				.data(belowMidPointkey)
				.enter().append("stop")
				.attr("offset", function(d,i) {return ""+(((midPoint)-d)/(midPoint-d3.min(yAxisArray)))*100+"%"; })
				.attr("stop-color", function(d,i) {return belowMidPointvalues[belowMidPointvalues.length-1-i]; });

				var turningPoints = [];
				var timeIndex = 0;
				var setColor = 1;
				var lastPointOfData = 0;
				var firstPath = -1,lastPath = -1;
				for(var index = 0 ; index<yAxisArray.length ; index++)
				{
					turningPoints = [];
					if(yAxisArray[index]>=midPoint)
					{
						setColor = 1;
						turningPoints.push(midPoint);
						for(var innerIndex = index ; innerIndex<yAxisArray.length ; innerIndex++)
						{
							if(yAxisArray[innerIndex]<midPoint)
							{
								turningPoints.push(midPoint);
								break;
							}
							turningPoints.push(yAxisArray[innerIndex]);
						//	alert("+ " +turningPoints);
						}
						if(turningPoints.length == 2 && index==yAxisArray.length-1)
						{
								turningPoints = [];
								turningPoints.push(midPoint);
								turningPoints.push(yAxisArray[yAxisArray.length-1]);
								turningPoints.push(midPoint);
						//		alert(turningPoints);
						}
					}
					else
					{
						setColor = 0;
						turningPoints.push(midPoint);
						for(var innerIndex = index ; innerIndex<yAxisArray.length ; innerIndex++)
						{
							
							if(yAxisArray[innerIndex]>=midPoint)
							{
								turningPoints.push(midPoint);
								break;
							}
							turningPoints.push(yAxisArray[innerIndex]);
						//	alert("- " +turningPoints);
						}
						if(turningPoints.length == 2 && index==yAxisArray.length-1)
						{
								turningPoints = [];
								turningPoints.push(midPoint);
								turningPoints.push(yAxisArray[yAxisArray.length-1]);
						}
					}
					
					
					firstPath = index;
					if(firstPath==0)
					{
						turningPoints.splice(0,1);
					}
					if(innerIndex==yAxisArray.length)
					{
						lastPath = 0;  
					}
					
					index = innerIndex-1;
				
				var area = d3.svg.area()
							.x(function(d,i) { return 0;})
							.y0(yScale(midPoint))
							.y1(function(d,i) { return yScale(turningPoints[i]); })
							.interpolate("cardinal");
									
				    var pathRef=areaChartMainGroup
							.append("path")
							.datum(turningPoints)
						    .attr("class","spyCloseprice")
						//.attr("class","spyCloseprice")
							//.attr("fill",'red')
							
							.attr("d",area(turningPoints));
							
					var area2 = d3.svg.area()
							.x(function(d,i) 
							{ 
								if(firstPath == 0)
								{
									firstPath = 1;
									return xScale(timeIndex++)
									
								}
								else if(lastPath == 0 && i==turningPoints.length-1)
								{
									lastPath = 1;
									return xScale(timeIndex);
								}
								else if(i==0)
								{
									return xScale(timeIndex-0.5);
								}
								else if(i==turningPoints.length-1)
								{
								//	alert(timeIndex-0.5+"  i==20 " );
									return xScale(timeIndex-0.5);
								}
								else
								{
								//	alert(timeIndex);
									return xScale(xAxisTimeIndex[timeIndex++]); }
							})
							.y0(yScale(midPoint))
							.y1(function(d,i) {return yScale(turningPoints[i]); })
							.interpolate("cardinal");
	
					pathRef.transition()
							.duration(2000)
							.attr("d",area2(turningPoints))
							//.attr("class","spyCloseprice")
							.attr("fill",function(d,i)
							{
								if(setColor==1)
								{
									return gradientAboveMid.color;
								}
								else
								{
									return gradientBelowMid.color;
								}
								//options.color
							});

			
							
					//	timeIndex--;	
				}
				var circleRef = areaChartMainGroup.selectAll('circle')
								  .data(xAxisTimeIndex)
								  .enter()
								  .append('circle')
								  .attr('cx',function(d,i){return 0})
								  .attr('cy',function(d,i){return 0})
								  .attr('r',4)
								//  .attr("fill","url(#gradient1)");
								 .attr('fill',function(d,i)
								 {
								 if(yAxisArray[i]>midPoint)
								 {return aboveMidPointvalues[aboveMidPointvalues.length-1];}
								 else
								 {return belowMidPointvalues[belowMidPointvalues.length-1]}});
			   circleRef.transition().duration(2000)
									 .attr('cx',function(d,i){return xScale(xAxisTimeIndex[i])})
								     .attr('cy',function(d,i){return yScale(yAxisArray[i])})
							
					},
			}
		
		var areaChartWithVaryColorGraph=
			{
					areaChartWithVaryColorAnalysis:function(cnfg)
					{			
							var title = cnfg.data.title;
							var yAxisArray = cnfg.data.yAxisArray;
							var xAxisArray = cnfg.data.xAxisArray;
							var xAxisLabel = cnfg.data.xAxisLabel;
							var yAxisLabel = cnfg.data.yAxisLabel;
							var midPoint = cnfg.data.midPoint;
							var midPointLabel = cnfg.data.midPointLabel;
							
							height=height*0.9;
							
							var areaAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.1,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
							var scaleWidth=width-areaAnalChart.left-areaAnalChart.right;
				            var scaleHeight=height-areaAnalChart.top-areaAnalChart.bottom;
							
							var fontSize =14,fontFamily = "calibri";
							//create array of x axis time index
							var xAxisTimeIndex = [];
							for(var counter = 0;counter<xAxisArray.length ;counter++)
							{
								xAxisTimeIndex[counter] = counter;
							}
							//grid view here
							var gridManager =   
								{
										init: function (svg, height, width, left, top) 
									{
										var hfactor = Math.ceil(height * .1);
										var vfactor = Math.ceil(height * .1);
										var hRange = Math.ceil(height / hfactor);

										var vRange = Math.ceil(width / vfactor);

										svg.selectAll(".hline").data(d3.range(hRange)).enter()
											.append("line")
											.attr("y1", function (d) {
											return d * hfactor+10;
										})
											.attr("y2", function (d) {
											return d * hfactor+10;
										})
											.attr("x1", function (d) {
											return 0;
										})
											.attr("x2", function (d) {
											return width;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");



										svg.selectAll(".vline").data(d3.range(vRange)).enter()
											.append("line")
											.attr("x1", function (d) {
											return d * vfactor;
										})
											.attr("x2", function (d) {
											return d * vfactor;
										})
											.attr("y1", function (d) {
											return 0;
										})
											.attr("y2", function (d) {
											return height;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");
									}

								};
						
				gridManager.init(svgElement, scaleHeight, scaleWidth, areaAnalChart.left, areaAnalChart.top);

	var leftMarginOfSvg = $(selectorElement).offset().left;
	var areaChartMainGroup = svgElement.append("g")
								   .attr('class','main-group')
								   .attr("transform", "translate(" + areaAnalChart.left + "," + areaAnalChart.top + ")")
								   .on("mouseover",function()
									{
										var x = event.pageX;
										var y = event.pageY;
										x=x-(leftMarginOfSvg+areaAnalChart.left);
										x = Math.round(xScale.invert(x));
										var heading="XYZ";
										var xAxisVal = xAxisArray[x];
										var yAxisVal = yAxisArray[x];
										var yHeadingValueMap=[{"headingName":xAxisLabel,"headingVal":xAxisVal},
															//  {"headingName":"sss","headingVal":runPerBall},
															  {"headingName":yAxisLabel,"headingVal":yAxisVal}
														//	  {"headingName":totalRunUnit,"headingVal":totalRun}
															  ];
										
									//	toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap);	
									})
									.on("mouseleave",function(){
									//	toolTipManager.hideTooTip();
									});

		//title label here
		axisLabelController.appendLabel(title,(areaAnalChart.left),(-areaAnalChart.top/3),0,areaChartMainGroup,textStyleConfg.titleColor,700);
		var xScale = d3.scale.linear()
                    .domain([0,xAxisArray.length-1])
                    .range([0,scaleWidth]); 
		
		var yMin = d3.min(yAxisArray)*1.3;
		var yMax = d3.max(yAxisArray)*1.3;
		var yScale = d3.scale.linear()
                    .domain([yMin,yMax])
                    .range([scaleHeight,0]);
						
		var largestStringLngth=0;
					for(var counter =0 ;counter<xAxisArray.length;counter++)
					{
						if(largestStringLngth<(xAxisArray[counter].toString()).length)
						{
							largestStringLngth =(xAxisArray[counter].toString()).length;
						}
					}
					

		
		//x axis
		var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
		.tickValues(tickController.getXTickArray(0,(xAxisArray.length),largestStringLngth, (scaleWidth)));
		
			var xAxisGroup=areaChartMainGroup.append("g")
						.attr('id','xAxis')
						.attr("class", "xAxis")
						.attr('fill',"none")
						.attr("transform", "translate("+0+"," + scaleHeight + ")")
						.call(xAxis);
	
			
					xAxisGroup.selectAll('text')
							 .text(function(d){
								return xAxisArray[d];
							 
							 })
							 .style('font-size',fontSize)
						     .attr('font-family',fontFamily)
							 .attr('fill','black');
	

	//xAxis label here
	var pixcelPerChar = 6;
	var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
	var xIndicationLabelTop=scaleHeight+(scaleHeight*0.15);
	var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;
    axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,areaChartMainGroup,textStyleConfg.xLabelColor,600);
		

		var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
		.tickValues(tickController.getTickArray(yMin,yMax,10));
				
			areaChartMainGroup.append("g")
						.attr('id','yAxis')
						.attr("class", "yAxis")
						.attr('fill',"none")
						.attr('font-size',12)
						.attr("transform", "translate("+0+"," + 0 + ")")
						.call(yAxis)
					    .selectAll('text')
						.attr('font-size',fontSize)
					    .attr('font-family',fontFamily)
						.attr('fill','black');	
		
	//yAxis label here
	var totalYLabelPixcel=yAxisLabel.toString().length*pixcelPerChar;
	var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;					
	var yIndicationLabelLeft=(-areaAnalChart.left/2);
		axisLabelController.appendLabel(yAxisLabel,(-areaAnalChart.left/2),(scaleHeight/1.5),-90,areaChartMainGroup,textStyleConfg.yLabelColor,600);
		
					
					var midPointLabelArray = midPointLabel.split(' ');
					midPointLabelArray.push(midPoint);
					var midPointLabelArrayLength = parseInt(midPointLabelArray.length/2);
					//mid point label here
					for(var index = 0;index<midPointLabelArray.length;index++)
					{
						axisLabelController.appendLabel(midPointLabelArray[index],(scaleWidth+(scaleWidth*.01)),yScale(midPoint)-(midPointLabelArrayLength)*(fontSize) + (index*fontSize),0,areaChartMainGroup,"black",600);
					}
							   

				var turningPoints = [];
				var timeIndex = -0.5;
				var setColor = 1;
				var flag =0;
				for(var index = 0 ; index<yAxisArray.length ;)
				{
					turningPoints = [];
			
								if(flag==0)
								{
									flag=1;
									turningPoints.push(yAxisArray[index]);
									if((index+1)<yAxisArray.length )
									{
										turningPoints.push((yAxisArray[index+1]+yAxisArray[index])/2);
									}
								}
								else
								{
									flag=0;
									if((index+1)<yAxisArray.length )
									{
										turningPoints.push((yAxisArray[index+1]+yAxisArray[index])/2);
									}
									turningPoints.push(yAxisArray[index+1]);
									 index++
								}
					index = index;
				timeIndex= timeIndex+0.5;
				var area = d3.svg.area()
							.x(function(d,i) 
							{
								if(i==0)
								{
									return xScale(timeIndex);
								}
								else
								{
									return xScale(timeIndex+0.5);
								}
							})
							.y0(yScale(midPoint))
							.y1(function(d,i){ return yScale(turningPoints[i]); })
							
							
				areaChartMainGroup
							.append("path")
							.datum(turningPoints)
						    .attr("class","spyCloseprice")
							.attr("fill",function(d,i)
							{
								if(flag==0)
								{
								return "#1abc9c";
								}
								else
								{
									return "#d7dcde";
								}
							})
							.attr("d",area(turningPoints));	
				}
				var circleRef = areaChartMainGroup.selectAll('circle')
								  .data(xAxisTimeIndex)
								  .enter()
								  .append('circle')
								  .attr('cx',function(d,i){return 0})
								  .attr('cy',function(d,i){return 0})
								  .attr('r',4)
								//  .attr("fill","url(#gradient1)");
								 .attr('fill','#47A3FF');
							circleRef.transition().duration(2000)
									 .attr('cx',function(d,i){return xScale(xAxisTimeIndex[i])})
								     .attr('cy',function(d,i){return yScale(yAxisArray[i])})
							
					},
			}
			
		var comparisonGraph = 
		{
			comparisonAnalysis:function(cnfg)
			{
				 var yAxisEstimateData = cnfg.data.yAxisEstimateData;
				var yAxisActualData = cnfg.data.yAxisActualData;
				var xAxisData = cnfg.data.xAxisData;
				var yAxisUnit = cnfg.data.yAxisUnit;
				var yAxisLabel = cnfg.data.yAxisLabel;
				var xAxisLabel = cnfg.data.xAxisLabel;
				var title = cnfg.data.title;
				var titleColor = cnfg.data.titleColor;
				var yAxisEstimateDataUnit = cnfg.data.yAxisEstimateDataUnit;
				var yAxisActualDataUnit = cnfg.data.yAxisActualDataUnit;
				
				var compareAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.15,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-compareAnalChart.left-compareAnalChart.right;
				var scaleHeight=height-compareAnalChart.top-compareAnalChart.bottom;
					
				var estimateDataBarWidth =  (scaleWidth/(1.5*xAxisData.length));
				
				var fontSize =12,fontFamily = "calibri";	
				var xAxisTimeIndex = [];
			    for(var counter = 0;counter<xAxisData.length ;counter++)
				{
					xAxisTimeIndex[counter] = counter;
				}
				//grid here
				var gridManager =   
								{
										init: function (svg, height, width, left, top) 
									{
										var hfactor = Math.ceil(height * .1);
										var vfactor = Math.ceil(height * .2);
										var hRange = Math.ceil(height / hfactor);

										var vRange = Math.ceil(width / vfactor);

										svg.selectAll(".hline").data(d3.range(hRange)).enter()
											.append("line")
											.attr("y1", function (d) {
											return d * hfactor+10;
										})
											.attr("y2", function (d) {
											return d * hfactor+10;
										})
											.attr("x1", function (d) {
											return 0;
										})
											.attr("x2", function (d) {
											return width;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");



										svg.selectAll(".vline").data(d3.range(vRange)).enter()
											.append("line")
											.attr("x1", function (d) {
											return d * vfactor;
										})
											.attr("x2", function (d) {
											return d * vfactor;
										})
											.attr("y1", function (d) {
											return 0;
										})
											.attr("y2", function (d) {
											return height;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");
									}

								};
						
				gridManager.init(svgElement, scaleHeight, scaleWidth, compareAnalChart.left-(estimateDataBarWidth/2), compareAnalChart.top);
				
				var leftMarginOfSvg = $(selectorElement).offset().left;
				
				var compareChartMainGroup = svgElement.append("g")
								   .attr('class','main-group')
								   .attr("transform", "translate(" + compareAnalChart.left + "," + compareAnalChart.top + ")")
								   .on("mouseover",function()
									{
										var x = event.pageX;
										var y = event.pageY;
										x=x-(leftMarginOfSvg+compareAnalChart.left);
										x = Math.round(xScale.invert(x));
										if(x>=0 && x<xAxisData.length)
										{
										var heading=xAxisData[x];
										var yAxisEstimateVal = yAxisEstimateData[x] + " "+yAxisUnit;
										var yAxisActualVal = yAxisActualData[x] + " "+yAxisUnit;
										var yHeadingValueMap=[{"headingName":yAxisEstimateDataUnit+" "+yAxisLabel,"headingVal":yAxisEstimateVal},
															  {"headingName":yAxisActualDataUnit+" "+yAxisLabel,"headingVal":yAxisActualVal}
															  ];
										
										toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90);	
										}
									})
									.on("mouseleave",function(){
										toolTipManager.hideTooTip();
									});
				
	
			// title label here
			axisLabelController.appendLabel(title,compareAnalChart.left,(-compareAnalChart.top/3),0,compareChartMainGroup,textStyleConfg.titleColor,700);			   
				//	compareChartMainGroup.selectAll(".title").call(textWrapper.wrapText,80);	   
						   
								   
			//	titleRef.text(textWrapper.wrapText(title,30));						   
				
				var xScale = d3.scale.linear()
                                     .domain([0,xAxisData.length])
                                     .range([0,scaleWidth]); 
									 
				var yMin = d3.min(yAxisEstimateData)<d3.min(yAxisActualData)?d3.min(yAxisEstimateData):d3.min(yAxisActualData);
				var yMax = d3.max(yAxisEstimateData)>d3.max(yAxisActualData)?d3.max(yAxisEstimateData):d3.max(yAxisActualData);
				yMin = yMin*.3;
				yMax = yMax * 1.3;
				
				var yScale = d3.scale.linear()
								.domain([yMin,yMax])
								.range([scaleHeight,0]);
						
		//x axis
		
					var largestStringLngth=0;
					for(var counter =0 ;counter<xAxisData.length;counter++)
					{
						if(largestStringLngth<(xAxisData[counter].toString()).length)
						{
							largestStringLngth = (xAxisData[counter].toString()).length;
						}
					}
					
				var xAxis = d3.svg.axis()
							.scale(xScale)
							.orient("bottom")
							.tickValues(tickController.getXTickArray(0,(xAxisData.length),largestStringLngth, (scaleWidth)));
				
				var xAxisTextRef = compareChartMainGroup.append("g")
										.attr('id','xAxis')
										.attr("class", "xAxis")
										.attr('fill',"none")
										.attr("transform", "translate("+0+"," + scaleHeight + ")")
										.call(xAxis);
						xAxisTextRef.selectAll('text')
							             .text(function(d){return xAxisData[d];})
										 .style('font-size',fontSize)
										 .attr('font-family',fontFamily)
										 .attr('fill','black');

			       
	//xAxis label here	
		
	var pixcelPerChar=6;
	var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
	var xIndicationLabelTop=scaleHeight+(scaleHeight*0.13);
	var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;
	axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,compareChartMainGroup,textStyleConfg.xLabelColor,600);			   							
													
				var yAxis = d3.svg.axis()
								.scale(yScale)
								.orient("left")
								.tickValues(tickController.getTickArray(yMin,yMax,8));
				
				compareChartMainGroup.append("g")
								.attr('id','yAxis')
								.attr("class", "yAxis")
								.attr('fill',"none")
								.attr("transform", "translate("+(-estimateDataBarWidth/2)+"," + 0 + ")")
								.call(yAxis)
								.selectAll('text')
								.style('font-size',fontSize)
								.style('font-family',fontFamily)
								.attr('fill','black');
				
		
		//yAxis label here					
		var totalYLabelPixcel=yAxisLabel.toString().length*pixcelPerChar;			
		var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;
        var yIndicationLabelLeft=(-compareAnalChart.left/1.5);
		axisLabelController.appendLabel(yAxisLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,compareChartMainGroup,textStyleConfg.yLabelColor,600);			   													   
					
				var estimateRectGroupRef = compareChartMainGroup
											.selectAll('.rect')
											.data(yAxisEstimateData)
						    				.enter()
											.append('rect')
											.attr('width',estimateDataBarWidth)
											.attr('height',0)
											.attr('x',function(d,i){return xScale(i)-(estimateDataBarWidth/2)})
											.attr('y',scaleHeight)
											.attr('fill','#000000')
											.attr("opacity",0.2);
						estimateRectGroupRef
								.transition()
								.duration(1500)
								.attr('height',function(d,i){return yScale(yMin)-yScale(d)})
								.attr('y',function(d,i){return yScale(d)});
								
			var gradient = compareChartMainGroup.append("svg:defs")
						.append("svg:linearGradient")
						.attr("id", "gradient")
						.attr("x1", "0%")
						.attr("y1", "0%")
						.attr("x2", "100%")
						.attr("y2", "100%")
						.attr("spreadMethod", "pad");

						gradient.append("svg:stop")
						.attr("offset", "0%")
						.attr("stop-color", "#bfefee")
						.attr("stop-opacity", 1);

						gradient.append("svg:stop")
						.attr("offset", "50%")
						.attr("stop-color", "#79d1cf")
						.attr("stop-opacity", 1);
						
						 gradient.append("svg:stop")
						.attr("offset", "100%")
						.attr("stop-color", "#bfefee")
						.attr("stop-opacity", 1);

				
				var actualDataBarWidth =  (scaleWidth/(3*xAxisData.length));
				
				var actualRectGroupRef = compareChartMainGroup
											.selectAll('.rect')
											.data(yAxisActualData)
						    				.enter()
											.append('rect')
											.attr('width',actualDataBarWidth)
											.attr('height',0)
								            .attr('x',function(d,i){return xScale(i)-(actualDataBarWidth/2)})                               
								            .attr('y',scaleHeight)
										//	.attr('fill','#ff7f0e');
											.attr('fill',"url(#gradient)")
											.on("mouseover",function()
											{
												d3.select(this).attr('fill',"#3e9ad9");
											})
											.on("mouseleave",function()
											{
												d3.select(this).attr('fill',"url(#gradient)");
											});
											
						actualRectGroupRef
								.transition()
								.duration(1500)
								.attr('height',function(d,i){return yScale(yMin)-yScale(d)})
								.attr('y',function(d,i){return yScale(d)});
			},
		}

		var musicSpikesGraph=
		{
			musicSpikesAnalysis:function(cnfg)
			{
				var title = cnfg.data.title;
				var titleColor = cnfg.data.titleColor;
				var yAxisData = cnfg.data.yAxisData;
				var xAxisData = cnfg.data.xAxisData;
				var yAxisLabel = cnfg.data.yAxisLabel;
				var xAxisLabel = cnfg.data.xAxisLabel;
				var yAxisUnit = cnfg.data.yAxisUnit;
				
				
				var spikesAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.15,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-spikesAnalChart.left-spikesAnalChart.right;
				var scaleHeight=height-spikesAnalChart.top-spikesAnalChart.bottom;
					
				var fontSize =12,fontFamily = "calibri";	
				var xAxisTimeIndex = [];
			    for(var counter = 0;counter<xAxisData.length ;counter++)
				{
					xAxisTimeIndex[counter] = counter;
				}
				var leftMarginOfSvg = $(selectorElement).offset().left;			
				var spikesChartMainGroup = svgElement.append("g")
								   .attr('class','main-group')
								   .attr("transform", "translate(" + spikesAnalChart.left + "," + spikesAnalChart.top + ")")
								   .on("mouseover",function()
								   {
			
										var x = event.pageX;
										var y = event.pageY;
										x=x-(leftMarginOfSvg+spikesAnalChart.left);
										x = Math.round(xScale.invert(x));
										if(x>=0 && x<xAxisData.length)
										{
										var heading=xAxisData[x];
										var yAxisVal = yAxisData[x] + " "+yAxisUnit;
										var yHeadingValueMap=[{"headingName":yAxisLabel,"headingVal":yAxisVal}];
										
										toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90);	
										}
								   })
								   .on("mouseleave",function(){
										toolTipManager.hideTooTip();
									});
				
				// title here
			/*	spikesChartMainGroup.append('text')
							        .attr('class','title')
								   .attr('x',spikesAnalChart.left)
								   .attr('y',(-spikesAnalChart.top/3))
								   .attr('font-size',fontSize*1.4)
								   .attr('text-family',fontFamily)
								   .attr('fill',titleColor)
								   .text(title);*/
				// title label here				   
				axisLabelController.appendLabel(title,spikesAnalChart.left,(-spikesAnalChart.top/3),0,spikesChartMainGroup,textStyleConfg.titleColor,700);
				var xScale = d3.scale.linear()
                                     .domain([0,xAxisData.length])
                                     .range([0,scaleWidth]); 
		
				var yMin = d3.min(yAxisData)*.3;
				var yMax = d3.max(yAxisData)*1.3;
				var yScale = d3.scale.linear()
								.domain([yMin,yMax])
								.range([scaleHeight,0]);
						
		//x axis
				var largestStringLngth=0;
					for(var counter =0 ;counter<xAxisData.length;counter++)
					{
						if(largestStringLngth<(xAxisData[counter].toString()).length)
						{
							largestStringLngth = (xAxisData[counter].toString()).length;
						}
					}
					

				var xAxis = d3.svg.axis()
							.scale(xScale)
							.orient("bottom")
							.tickValues(tickController.getXTickArray(0,(xAxisData.length),largestStringLngth, (scaleWidth)));
				
				var xAxisTextRef = spikesChartMainGroup.append("g")
										.attr('id','xAxis')
										.attr("class", "xAxis")
										.attr('fill',"none")
										.attr("transform", "translate("+0+"," + scaleHeight + ")")
										.call(xAxis);
							 xAxisTextRef.selectAll('text')
							             .text(function(d){return xAxisData[d];})
										 .style('font-size',fontSize)
										 .attr('font-family',fontFamily)
										 .attr('fill','black');

			/*	var xAxisLabelGroup = spikesChartMainGroup.append("g")
									.attr("class","x-axis-label-group")
									.attr("transform","translate("+scaleWidth/3+","+(scaleHeight+(spikesAnalChart.top))+")")
									xAxisLabelGroup.append('text')
											        .attr('x',0)
													.attr('y',0)
													.attr('font-size',fontSize*1.5)
													.attr('font-family',fontFamily)
													.attr('fill','gray')
													.text(xAxisLabel);*/
			// xAxis label here
			var pixcelPerChar = 6;
			var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
			var xIndicationLabelTop=scaleHeight+(scaleHeight*0.13);
			var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;

			axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,spikesChartMainGroup,textStyleConfg.xLabelColor,600);										
													
				var yAxis = d3.svg.axis()
								.scale(yScale)
								.orient("left")
								.tickValues(tickController.getTickArray(yMin,yMax,10));
				
				spikesChartMainGroup.append("g")
								.attr('id','yAxis')
								.attr("class", "yAxis")
								.attr('fill',"none")
								.attr("transform", "translate("+(-fontSize)+"," + 0 + ")")
								.call(yAxis)
								.selectAll('text')
								.style('font-size',fontSize)
								.style('font-family',fontFamily)
								.attr('fill','black');
				
            /*    var yAxisLabelGroup = spikesChartMainGroup.append("g")
									.attr('class','y-axis-label-group')	
				     				.attr("transform","translate("+(-spikesAnalChart.left/2)+","+scaleHeight/1.5+")");			
									
				yAxisLabelGroup.append('text')
								   .attr('font-size',fontSize*1.5)
							       .attr('font-family',fontFamily)
								   .attr('fill','gray')
								   .attr('transform','rotate(-90)')
								   .text(yAxisLabel);		*/
				//yAxis Label here				   
			var totalYLabelPixcel=yAxisLabel.toString().length*pixcelPerChar;
			var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;
			var yIndicationLabelLeft=(-spikesAnalChart.left/2);	
			axisLabelController.appendLabel(yAxisLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,spikesChartMainGroup,textStyleConfg.yLabelColor,600);	
				
				var barWidth =  (scaleWidth/(2*yAxisData.length)) ;	
				var subRect = [];
				for(var index = 0 ; index<yAxisData.length ; index++)
				{
					
					var rectHeight = yScale(d3.min(yAxisData)*.5)-yScale(yAxisData[index]);
					rectHeight = Math.round(rectHeight/7);
					for(var i =0;i<rectHeight;i++)
					{
						if(i==0)
						{
							subRect.push("newRectangle");
						}
						else
						{
							subRect.push("oldRectangle");
						}	
					}
				}	
					var timeIndexValue = -1;
					var yArrayIndex = -1;
					var YPositionOfRect= 0;
					var colorIndex = -1;
					var yValuetoSetColor=0;
					var rectangleGroupRef = spikesChartMainGroup
									 .selectAll('rect')
									 .data(subRect)
									 .enter()
									 .append('rect')
									 .attr("x",function(d,i)
									 {
										if(d=="newRectangle")
										{
											timeIndexValue++;
										}
										return ((xScale(timeIndexValue))-(barWidth/2));
									 })
									 .attr("y",function(d,i)
									 {return scaleHeight})
									 .attr('width',barWidth)
									 .attr('height',function(d)
									 {
										return 4;
									 })
									 .attr('fill',function(d,i)
									 {
										
										if(d=="newRectangle")
										{
											yValuetoSetColor = 0;
											colorIndex++;
										}
										var yValue = yScale.invert(((yScale(yAxisData[colorIndex]))+((yValuetoSetColor++)*7)));
										if(yValue<(d3.max(yAxisData))*.33)
										{		
											return "#1fb5ad";
										}
										else if(yValue<(d3.max(yAxisData))*.66)
										{
											return "#5cb85c";
										}
										else
										{
											return "#ff7878";
										}
									 });
					//	rectangleGroupRef			 
						rectangleGroupRef.transition()
							.duration(1000)
							.attr("y",function(d,i)
									 {
										if(d=="newRectangle")
										{
											YPositionOfRect=0;
											yArrayIndex++;
										}
										return ((yScale(yAxisData[yArrayIndex]))+((YPositionOfRect++)*7));
										return scaleHeight;
									 });
			},      
		};          
		var threeDGroupedBarChart = {
			drawThreeDGroupedBarChart: function (id, heightOfBarOne, heightOfBarTwo, options) {
                var cfg = {
                    topMargin: 5,
                    rightMargin: 30,
                    bottomMargin: 0,
                    leftMargin: 10,
                    colorArray:[],
					toolTipLabelForYAxis: "Profit(in Crores)"
                };  
                    
                if ('undefined' !== typeof options) {
                    for (var i in options) {
                        if ('undefined' !== typeof options[i]) {
                            cfg[i] = options[i];
                        }
                    }
                }   
                    
                    
			var margin = {top: 0.1*height, right: 0.05*width, bottom: 0.13*height, left: 0.05*width};					
			var xAxisTicksArray=options.xAxisTickArray;
			         
			var scaleWidth  = width - margin.left - margin.right;
			var scaleHeight = height - margin.top - margin.bottom;
			var spacingFactorInBars = (0.9*width) /  (2*heightOfBarOne.length);
			var widthOfBars = (0.9 * width) / (2 * (heightOfBarOne.length + heightOfBarTwo.length));
			
			var xSpacingInBars = widthOfBars + spacingFactorInBars;
			
			var maxHeightForBarOneData = d3.max(heightOfBarOne, function(d,i){ return d;});
			var maxHeightForBarTwoData = d3.max(heightOfBarTwo, function(d,i){ return d;});
			
			var maxHeight = maxHeightForBarOneData > maxHeightForBarTwoData ? maxHeightForBarOneData : maxHeightForBarTwoData;
			
			var leftBarMargin = widthOfBars;
			var leftMargins	= 0.03 * height;
			var padding = 0;
			
			
			var sum = 1;				
			for(k=0;k<(''+maxHeight).length - 1;k++)
			{
				sum = sum+"0";				
			}		
			
			var lineFunction = d3.svg.line()
									  .x(function(d) { return d.x; })
									  .y(function(d) { return d.y; })
									 .interpolate("linear");
			
			//The SVG Container
			
			var widthOfBarRegion=((heightOfBarOne.length + heightOfBarTwo.length) * widthOfBars)+ spacingFactorInBars*heightOfBarTwo.length ;
		
			var startX = width  - width * 0.90;
			var xScale = d3.scale.linear()
                    .domain([0, (heightOfBarOne.length)])
					.range([(startX+leftBarMargin), (scaleWidth)]);
					

            var yScale = d3.scale.linear()
                    .domain([0, 1.3 * maxHeight])
                    .range([scaleHeight, 0]);             
			 
            var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
					.tickFormat(formatAsPercentage);

            var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");			
			
            var formatAsPercentage = d3.format("1");							
			
		//	xAxis.tickValues(d3.range(0, heightOfBarOne.length, 1));
			yAxis.tickValues(d3.range(0, 1.3* maxHeight, ((1.3* maxHeight)/10)));
			
			var maxYScale =	maxHeight + 100*(''+maxHeight).length;			
			var nextY = yScale(1.3*maxHeight);			
			
			
			svgElement=svgElement
						.append("g")
						.attr("transform","translate("+width*0.07+","+margin.top+")");
						//.attr("transform","translate("+widthOfBarRegion*0.05+","+height*0.03+")");
			
		
			widthOfBarRegion=widthOfBarRegion+widthOfBarRegion*0.15;
			
			function drawHorizontalLines(startX, startY, widthOfBars, maxHeight, heightOfBarOne, nextY)
			{
				maxHeight = yScale(maxHeight);
				startY = yScale(startY);
				
				
				var scaleLine=[];				
						for(l=0; l<3; l++)
						{
							if(l==0)
							{
								
								x = startX-widthOfBarRegion*0.05;
								y = (startY-nextY) - 0.04 * widthOfBarRegion;
								
							}	
							else if(l==1)
							{
								x=startX-20;
								y=(startY-nextY);
							}
							else if(l==2)
							{
								x=scaleWidth;
								y=(startY-nextY);														
							}
						
							scaleLine.push(JSON.parse('{"x":'+x+',"y":'+y+'}'));                      
						}
						return scaleLine;					
			}
			
	
			var startY = yScale(1.2*maxHeight) ;					
			
			
			var svgContainer = svgElement;
			for(j=0;j<10;j++)
			{
			
				var lineGraph = svgContainer.append("path")
									.attr("d", lineFunction(drawHorizontalLines(startX, startY, widthOfBars, maxHeight, heightOfBarOne, nextY)))
									//.attr("stroke", "blue")
									.attr("stroke-width", 0.5)
									.attr("fill", "none");	
				
				var lineGraphLength= lineGraph.node().getTotalLength();

									lineGraph
									  .attr("stroke-dasharray", lineGraphLength + " " + lineGraphLength)
									  .attr("stroke-dashoffset", lineGraphLength)
									  .transition()
									  .duration(2000)
									  .ease("linear")
									  .attr("stroke-dashoffset", 1)
									  .attr("stroke", "blue")
									  .attr("stroke-width", 0.5)
									  .attr("fill", "none");
			
						
			
				nextY=nextY + (yScale(0) - yScale((1.3* maxHeight)/10));						
			}
			
			
			var startY= height - height * 0.90;		
			var colorGradientArray = ["#aaaa00","#75c200","#006bd5"];
			var colorArray = options.colorArray;
	
			
			
			
			for(var j=0;j<heightOfBarOne.length;j++)
			{			
				
				var lineGraph1 = svgContainer.append("path")	
								.attr("class", "threeDGroupedBarChart "+j)
								.attr("d", lineFunction(getSidesCordinates(xScale(j), startY, widthOfBars, heightOfBarTwo[j], 1, heightOfBarTwo[j])))							
								.attr('val',function(){
									var cordinateArray=getSidesCordinates(xScale(j), startY, widthOfBars, heightOfBarTwo[j], 1, heightOfBarTwo[j]);
									return cordinateArray[0].height;
								})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								})
								.on("mouseout", function (d, i) {
									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								})
								.attr("fill",function(){return cfg.barColorArray[0]});
																	
				
				
					
										
				
				var lineGraph2 = svgContainer.append("path")
								.attr("class", "threeDGroupedBarChart "+j)
								.attr("d", lineFunction(getSidesCordinates(xScale(j), startY, widthOfBars, heightOfBarTwo[j], 2, heightOfBarTwo[j])))
								.attr('val',function(){
										var cordinateArray=getSidesCordinates(xScale(j), startY, widthOfBars, heightOfBarTwo[j], 2, heightOfBarTwo[j]);
										return cordinateArray[0].height;
									})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								})
								.on("mouseout", function (d, i) {

									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								})
								.attr("fill",function(){return cfg.barColorArray[0]});
				
					
				
					var lineGraph3 = svgContainer.append("path")
								.attr("class", "threeDGroupedBarChart "+j)
								.attr("d", lineFunction(getSidesCordinates(xScale(j), startY, widthOfBars, heightOfBarTwo[j], 3, heightOfBarTwo[j])))
								.attr('val',function(){
										var cordinateArray=getSidesCordinates(xScale(j), startY, widthOfBars, heightOfBarTwo[j], 3, heightOfBarTwo[j]);
										return cordinateArray[0].height;
									})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								})
								.on("mouseout", function (d, i) {

									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								})
								.attr("fill",function(){return cfg.barColorArray[0]});
					
							

			
			var lineGraph1 = svgContainer.append("path")	
								.attr("class", "threeDGroupedBarChart "+j)
								.attr("d", lineFunction(getSidesCordinates(xScale(j)-widthOfBars, startY, widthOfBars, heightOfBarOne[j], 1, heightOfBarOne[j])))							
								.attr('val',function(){
									var cordinateArray=getSidesCordinates(xScale(j)-widthOfBars, startY, widthOfBars, heightOfBarOne[j], 1, heightOfBarOne[j]);
									return cordinateArray[0].height;
								})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								})
								.on("mouseout", function (d, i) {
									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								})
								.attr("fill",function(){return cfg.barColorArray[1]});
																	
					
				
				
			var lineGraph2 = svgContainer.append("path")
								.attr("class", "threeDGroupedBarChart "+j)
								.attr("d", lineFunction(getSidesCordinates(xScale(j)-widthOfBars, startY, widthOfBars, heightOfBarOne[j], 2, heightOfBarOne[j])))
								.attr('val',function(){
										var cordinateArray=getSidesCordinates(xScale(j)-widthOfBars, startY, widthOfBars, heightOfBarOne[j], 2, heightOfBarOne[j]);
										return cordinateArray[0].height;
									})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								})
								.on("mouseout", function (d, i) {

									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								})
								.attr("fill",function(){return cfg.barColorArray[1]});
				
											  
											
							
							
			
									  
				var lineGraph3 = svgContainer.append("path")
								.attr("class", "threeDGroupedBarChart "+j)
								.attr("d", lineFunction(getSidesCordinates(xScale(j)-widthOfBars, startY, widthOfBars, heightOfBarOne[j], 3, heightOfBarOne[j])))
								.attr('val',function(){
										var cordinateArray=getSidesCordinates(xScale(j)-widthOfBars, startY, widthOfBars, heightOfBarOne[j], 3, heightOfBarOne[j]);
										return cordinateArray[0].height;
									})
								.attr("xVal",xAxisTicksArray[j])	
								.attr("fill", "white")
								.on("mouseover",function(){
									var yHeadingValueMap=[{"headingName":cfg.toolTipLabelForYAxis,"headingVal":d3.select(this).attr('val')}];
									toolTipManager.showToolTip(d3.event,"",(options.xLabel+" "+d3.select(this).attr('xVal')), false,yHeadingValueMap);
								   
								})
								.on("mouseout", function (d, i) {

									var targetElement = d3.select(this);
									toolTipManager.hideTooTip();
								})
								.attr("fill",function(){return cfg.barColorArray[1]});
				
					}
				
				var eleArray=$(".threeDGroupedBarChart").hide();
				for(var m=0; m<eleArray.length; m++){
					
					$(eleArray[m]).slideUp(m * 300).delay(m *100).fadeIn();					
				}

			function getSidesCordinates(x,y,width,height,sideno,heightOfBar){
				
			
				height = yScale(0) - yScale(height) ;
				
				
				var lineData=[];
				
				if(sideno==1){
						var factor=parseInt(width*.33) + 1;
						var xHit=0;
						var yHit=0;
						for(var i=0;i<5;i++){
									
						   if(i==0)
						   {
								y = yScale(0);				   
						   }
						   else if(i==1)
						   {
							   //height = yScale(y+height) - yScale(y);
							   y = y - height;								 
						   }
						   else if(i==2)
						   {
							   x=x+width;   
						   }
						   else if(i==3)
						   {
							   y=y+height;    
						   }     
							else if(i==4)
						   {
							  x=x-width;    
						   }
							
							var nextY=y;
							var nextX=x;
							   
						  //  alert(nextX+"::"+nextY);
							lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}'));                      
						}                               
				}
					  else if(sideno==2){
					  

						var factor=parseInt(width*.33) + 1;
						
						var xHit=0;
						var yHit=0;
						y = yScale(y); 
						
						for(var i=0;i<4;i++){
									
						   if(i==0)
						   {
							   y = yScale(0);
								//y = yScale(y);				   
						   }
						   else if(i==1)
						   {
							  // factor = yScale(y) - yScale(y + factor);
							   x=x-factor;
							   y=y-factor;								 
						   }
						   else if(i==2)
						   { 								
							   y=y-height;
							   //alert(" Y : "+ y  + "Height : " + height);
							
								//y = y + height;
							  // console.log("  Y : " +  y + " Height : " + height);
							 //  y = y - 1000;   
							   //nextY=nextY + (yScale(nextY) - yScale(nextY+spacingInHorizontalLines));	
						   }
						   else if(i==3)
						   {
							   x=x+factor;
							   y=y+factor;    
						   }     
							   
							var nextY=y;
							var nextX=x;
							lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}'));  
						}                               
						
					}
					else if(sideno==3){
						var factor=parseInt(width*.33) + 1;
						var xHit=0;
						var yHit=0;
						for(var i=0;i<4;i++){
									
						   if(i==0)
						   {
								y=yScale(0) - height;
									
						   }
						   else if(i==1)
						   {
							   x=x-factor;
							   y=y-factor;
								 
						   }
						   else if(i==2)
						   {
							   x=x+width;   
						   }
						   else if(i==3)
						   {
							   x=x+factor;
							   y=y+factor;    
						   }     
							   
							var nextY=y;
							var nextX=x;
							   
							lineData.push(JSON.parse('{"x":'+nextX+',"y":'+nextY+',"height":'+heightOfBar+'}')); 
						                   
						}                               
						
					}
				
					return lineData;
					
				}
					
			function mMove(){

				 var m = d3.mouse(this);
				 console.log(m);
				 d3.select(this).select("title").text(yScale(m[1]));
			}
			
			var largestStringLngth=0;
			for(var counter =0 ;counter<xAxisTicksArray.length;counter++)
			{
				if(largestStringLngth<(xAxisTicksArray[counter].toString()).length)
				{
					largestStringLngth = (xAxisTicksArray[counter].toString()).length;
				}
			}
			xAxis.tickValues(tickController.getXTickArray(0,(xAxisTicksArray.length),largestStringLngth, (width-(startX+leftBarMargin))));
			var xAxisRef = svgContainer.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate("+(0)+"," + (scaleHeight) + ")")
                    .call(xAxis);
					
			xAxisRef.selectAll("text")
					.text(function(d){
						return xAxisTicksArray[d];
					});

			
					
			var startXForXTicks = width  - width * 0.90;				
            var yAxisRef=svgContainer.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(" + (startXForXTicks-widthOfBarRegion*0.05) + ","+ (-0.04 * widthOfBarRegion)  +")")
                    .call(yAxis);	   
			yAxisRef.selectAll("line").style("display",'none');
			yAxisRef.selectAll("path").style("display",'none');	
			
			//y indicationa label
			var indexOfParaenthesis=yAxisRef.attr("transform").indexOf("(")+1;
			var indexOfComma=yAxisRef.attr("transform").indexOf(",");
			 
			var pixcelPerChar=6;
			var yTotalPixcel=cfg.yLabel.toString().length*pixcelPerChar;
			var yLabelTop=scaleHeight/2+yTotalPixcel/2;
			
			var yLabelLeft;
			if(width<400){
				yLabelLeft=-parseInt(yAxisRef.attr("transform").substring(indexOfParaenthesis,indexOfComma))*2;
			}else{
				yLabelLeft=-parseInt(yAxisRef.attr("transform").substring(indexOfParaenthesis,indexOfComma))*0.95
			}
			
			axisLabelController.appendLabel(cfg.yLabel,yLabelLeft,yLabelTop,-90,yAxisRef,textStyleConfg.yLabelColor,600);
			
			//x indication label
			var xLabelPixcel=cfg.xLabel.length*pixcelPerChar;
			var xLabelTop=(scaleHeight*0.15);
			var xLabelLeft=(scaleWidth)/2-xLabelPixcel/2;
			axisLabelController.appendLabel(cfg.xLabel,xLabelLeft,xLabelTop,0,xAxisRef,textStyleConfg.xLabelColor,600);
			
			}
		}

		var barWithLabelGraph = 
		{
			barWithLabelAnalysis:function(data)
			{
				var yAxisData = data.yAxisData;
				var xAxisData = data.xAxisData;
				var colorArray = data.colorArray;
				var averageValue = data.averageValue;
				var unit = data.unit
				var bottomLabel = data.bottomLabel;
				
				var barAnalChart={left:width*0.15,right:width*0.1,bottom:height*0.25,top:height*0.15,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-barAnalChart.left-barAnalChart.right;
				var scaleHeight=height-barAnalChart.top-barAnalChart.bottom;
				var legendSize = 10;				
				var gridManager =   
								{
										init: function (svg, height, width, left, top) 
									{
										var hfactor = Math.ceil(height * .1);
										var hRange = Math.ceil(height / hfactor);
										svg.selectAll(".hline").data(d3.range(hRange)).enter()
											.append("line")
											.attr("y1", function (d) {
											return d * hfactor+10;
										})
											.attr("y2", function (d) {
											return d * hfactor+10;
										})
											.attr("x1", function (d) {
											return 0;
										})
											.attr("x2", function (d) {
											return width;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");
										}
								};
						
				gridManager.init(svgElement, scaleHeight, scaleWidth, barAnalChart.left, barAnalChart.top);
			
				var xAxisTimeIndex = [];
			    for(var counter = 0;counter<xAxisData.length ;counter++)
				{
					xAxisTimeIndex[counter] = counter;
				}
		
				var barMainGroup = svgElement.append("g")
					.attr('class','barMainGroup')
                    .attr("transform", "translate(" + (barAnalChart.left) + "," + barAnalChart.top + ")")
					
				// xScale here
				
				var xScale = d3.scale.linear()
							         .domain([0,xAxisData.length-1])
                                     .range([0,scaleWidth]);

				
			/*	var xAxis = d3.svg.axis()
                                  .scale(xScale)
                                  .orient("bottom")
								  .tickValues(tickController.getXTickArray(0,(xAxisData.length),largestStringLngth, (scaleWidth)));
	   
                var xAxisGroup = barMainGroup.append("g")
									.attr("class","x-axis")
									.attr("transform","translate("+0+","+(scaleHeight)+")")

						       	    .attr('fill','none')
									//.style('display','none')
									.call(xAxis)
									.selectAll('text')
									.text(function(d){return xAxisData[d]})
									.attr('fill','black');*/

				var yMin = d3.min(yAxisData);
				var yMax = d3.max(yAxisData);
				
				if(yMax == 0){
					yMax =yMax +  2;
				}
				else{
					if(yMax>0){
						yMax =yMax* 1.5;
					}else{
						yMax =yMax * 0.5;
					}
				}
				
				
				if(yMin == 0){
					yMin =yMin-  2;
				}
				else{
					if(yMin<0){
						yMin =yMin* 1.2;
					}else{
						yMin =yMin * 0.8;
					}
				}
				
				
				//yScale here
				
				var yScale = d3.scale.linear()
							         .domain([yMin,yMax])
                                     .range([scaleHeight,0]);
	            
				var yAxis = d3.svg.axis()
                                  .scale(yScale)
                                  .orient("left");
	             
                var yAxisGroup = barMainGroup.append("g")
									.attr("class","left-y-axis")
									.attr("transform","translate("+(-barAnalChart.left*0.2)+","+0+")")
						       	    .attr('fill','none')
									.call(yAxis)
									.selectAll('text')
									.attr('fill','black');
									
				// draw bar here 
				
				var dataBarWidth =  (scaleWidth/(3*xAxisData.length));
				
				var rectGroupRef = barMainGroup
											.selectAll('.rect')
											.data(yAxisData)
						    				.enter()
											.append('rect')
											.attr('width',dataBarWidth)
											.attr('height',0)
								            .attr('x',function(d,i){return xScale(i)-(dataBarWidth/2)})                               
								            .attr('y',yScale(averageValue))
										//	.attr('fill','#ff7f0e');
											.attr('fill',function(d,i){return colorArray[i];})
										//	.on("mouseover",function()
										//	{
										//		d3.select(this).attr('fill',"#3e9ad9");
										//	})
										//	.on("mouseleave",function()
										//	{
										//		d3.select(this).attr('fill',"url(#gradient)");
										//	});
											
						rectGroupRef
								.transition()
								.duration(1500)
								.attr('height',function(d,i)
								{
									if(d>averageValue){return yScale(averageValue)-yScale(d);}
									else{return yScale(d) - yScale(averageValue);}
								})
								.attr('y',function(d,i)
								{
									if(d>averageValue){return yScale(d);}
									else{return yScale(averageValue);}
								});
									
				// bar label here
				var textGroupRef = barMainGroup.selectAll('.text')
											   .data(yAxisData)
											   .enter()
										       .append('text')
											   .attr('x',function(d,i){return xScale(i)-(dataBarWidth/3)})
											   .attr('y',function(d,i)
											   {
													if(d>=averageValue){return yScale(d)-5;}
													else{return yScale(d)+15;}
											   })
											   .attr('fill',function(d){if(d>=averageValue){return "green";}else{return "red";}})
											   .text(function(d)
											   {
												if(d>averageValue){return "+"+d+" "+unit;}
												else{return d+" "+unit;}
											   });
				
				// draw legend here
		
					var yPositionOfLegend = scaleHeight+scaleHeight*0.02;
					var legendPositionArray = legendController.showHorizontalLegend(scaleWidth,yPositionOfLegend,xAxisData,legendSize);
					
				var legendRef = barMainGroup.selectAll('.rect')
										    .data(legendPositionArray)
										    .enter()
											.append('rect')
											.attr('width',legendSize)
											.attr('height',legendSize)
											.attr('x',function(d,i){ return legendPositionArray[i].x;})
											.attr('y',function(d,i){return legendPositionArray[i].y;})
											.attr('fill',function(d,i){return colorArray[i]});
				
				var legendTextRef = barMainGroup.selectAll('.text')
										    .data(legendPositionArray)
										    .enter()
											.append('text')
											.attr('x',function(d,i){return legendPositionArray[i].textXPos;})
											.attr('y',function(d,i){return legendPositionArray[i].y + legendSize;})
											.style('font-family','calibri')
											.text(function(d,i){return xAxisData[i];}); 
				// draw dotted line here
				
				var dottedLineRef = barMainGroup.append('line')
												.attr('x1',0)
												.attr('y1',(scaleHeight + (barAnalChart.bottom*.7)))
												.attr('x2',scaleWidth)
												.attr('y2',(scaleHeight + (barAnalChart.bottom*.7)))
												.attr('stroke','lightsteelblue');
				
				var lineTotalLength = scaleWidth;

                dottedLineRef.attr("stroke-dasharray", function (d) {


                    var dashLen = 3;
                    var ddLen = dashLen * 2;
                    var darray = dashLen;
                    while (ddLen < lineTotalLength) {
                        darray += "," + dashLen + "," + dashLen;
                        ddLen += dashLen * 2;
                    }
                        return darray + "," + lineTotalLength;
                })
                    .attr("stroke-dashoffset", lineTotalLength)
                    .transition()
                    .duration(2000)
                    .ease("linear")
                    .attr("stroke-dashoffset", 0);
			
			// bottom label here
				barMainGroup.append('text')
							.attr('x',((scaleWidth/2)-(bottomLabel.length*6)/2))
							.attr('y',(scaleHeight + (barAnalChart.bottom*.7)+15))
							.attr('font-size',14)
							.style('font-style','bold')
							.style('font-family','calibri')
							.text(bottomLabel);

				
			}
		};
			
		/**
			logo Chart
		*/
		
		var drawLogoChart={
			logoChart:function(cnfg){
			
				width = $(selectorElement).width()*0.98;
				height = $(selectorElement).height()*0.98;
				//textStyleConfg=styleConfg;
				
				var margin={left:width*0.05,right:width*0.05,bottom:height*0.1,top:height*0.05,chartSeparator:5};
				
				var scaleWidth=width-margin.left-margin.right;
				var scaleHeight=height-margin.top-margin.bottom;
				
				var tital = cnfg.tital; 
				
				var textArray=cnfg.textArray;
				var imageArray=cnfg.imageArray;
				var imageFrameColorArray=cnfg.imageFrameColor;
				var legendArray=cnfg.legendArray;
				var legendImageArray=cnfg.legendImageArray;
				var nameArray = cnfg.nameArray;
				var classArray = cnfg.classArray;
				var textColor = cnfg.textColor;
				var unit = cnfg.unit;
				//make Array of data
				var maxRows=3;
				var elementPerRow=Math.ceil(imageArray.length/maxRows);
				
				var profilingElem=svgElement
								  .append("g")
				                  .attr("transform", "translate(" + (margin.left) + "," + (margin.top) + ")");	
				
				xScale =d3.scale.linear()
                    .range([0,scaleWidth-margin.right]);
				
				
				var minX=0;
						 
				var maxX=imageArray.length-1;
				
				yScale =d3.scale.linear()
                    .range([(scaleHeight-margin.top),margin.bottom]);
				
				
				
				
				var maxColumns;
				
				
				if(width>400){
					maxColumns=4;
				}else{
					maxColumns=3;
				}
				
				
				
				//if data length is less than column length then take data.length as xScale max 
				//else xScale max is maxColumn
				if(imageArray.length>maxColumns){
					elementPerRow=maxColumns;
				}else{
					elementPerRow=imageArray.length;
				}
				
				maxRows=Math.ceil(imageArray.length/maxColumns);
				yScale.domain([0,(maxRows)]);	
				
				xScale.domain([0,elementPerRow]);
				
				//iterate data to set x and y for each record
				//whenever elementPerRow exceed it means we need to start new row 
				var chartData=[];	
				var y=maxRows-1,x=0,counter=0;
				for(var i=0;i<imageArray.length;i++){
					
					counter++;
					console.log("counter "+counter +"  "+(counter>(elementPerRow)));
					if(counter>(elementPerRow)){
						y--;
						x=0;
						counter=1;
					}
					
					
					var obj={"x":x,"y":y,"index":i};
					chartData.push(obj);
					console.log("x "+obj.x+"  y"+obj.y +" row "+elementPerRow+" c"+counter);
					x++;
				}
				
				//find the difference between two nearest x and y points
				//if there is only one point then divide its value to max scale
				
				var differenceX,differenceY;
				if(chartData[1]){
					differenceX=(xScale(chartData[1].x)-xScale(chartData[0].x))/2;
				}else{
					differenceX=xScale(chartData[0].x+0.5);
				}
				
				if(maxRows>1){
					differenceY=(yScale(chartData[maxColumns].y)-yScale(chartData[0].y))/2;
				}else{
					differenceY=yScale(chartData[0].y+0.5);
				}
				//var differenceX=(xScale(chartData[1].x)-xScale(chartData[0].x))/2;
				//var differenceY=(yScale(chartData[elementPerRow].y)-yScale(chartData[0].y))/2;
				
				//find min difference between two points to set radius
				var tempRadius=0;
				tempRadius=(differenceY>differenceX)?differenceX:differenceY;
				
				tempRadius=Math.abs(tempRadius)*1.1;
				
				var imageRadius=tempRadius;
				
				//arc radius will be always half of image radius because it cover area according to diametr
				var arcRadius=tempRadius*0.50;
				
				/*
				var xAxis= d3.svg.axis()
							 .scale(xScale)
                             .orient("bottom");
				
				var yAxis= d3.svg.axis()
							 .scale(yScale)
                             .orient("left");
							 
				svgElement.append("g")
				.attr("transform", "translate(" + (margin.left) + "," + (scaleHeight) + ")")
				.call(xAxis);	
                
				svgElement.append("g")
				.attr("transform", "translate(" + (margin.left) + "," + (margin.top) + ")")
				.call(yAxis);			*/	
				
				for(var i=0;i<chartData.length;i++){
					chartData[i]["imageWidth"]=imageRadius;
					chartData[i]["imageHeight"]=imageRadius;
					chartData[i]["arcRadius"]=arcRadius;
					chartData[i]["profileImageName"]=imageArray[i];
					chartData[i]["imageFrameColor"]=imageFrameColorArray[i];
					chartData[i]["text"]=textArray[i];
					//chartData[i]["remark"]=
					drawProfile(chartData[i],profilingElem,i);
					//alert(arcRadius +" "+imageRadius);
				}
				
				
				//legend here
					var radius = 5;
					var yPositionOfLegend = scaleHeight ;
					var legendPositionArray = legendController.showHorizontalLegend(scaleWidth,yPositionOfLegend,legendArray,radius*1.5);
					
					var circleLegendPosition=[];
					circleLegendPosition.push(legendPositionArray[0]);
					circleLegendPosition.push(legendPositionArray[1]);
				var legendRef = profilingElem.selectAll('.circle')
										     .data(circleLegendPosition)
										     .enter()
											 .append('circle')
											 .attr('class','legend')
											 .attr('r',radius)
											 .attr('cx',function(d,i){ return circleLegendPosition[i].x;})
											 .attr('cy',function(d,i){return circleLegendPosition[i].y ;})
											 .attr('fill',function(d,i){return legendImageArray[i]});
				
				circleLegendPosition=[];
					circleLegendPosition.push(legendPositionArray[2]);
					circleLegendPosition.push(legendPositionArray[3]);
				
				profilingElem.selectAll(".polygon")
							  .data(circleLegendPosition)
							  .enter()
							  .append('polygon')
							  .attr("class","legend")
							  .style('fill',function(d,i){return legendImageArray[i]})
							  .attr('points',function(d,i)
							  {
								var x = circleLegendPosition[i].x;
								var y = circleLegendPosition[i].y;
							  return ''+(x-2)+','+(y-(radius/2))+','+(x-9)+','+(y+8)+','+(x+5)+','+(y+8)+''
							  });
				
				
				var legendTextRef = profilingElem.selectAll('.text')
										     .data(legendPositionArray)
										     .enter()
											 .append('text')
											 .attr('x',function(d,i){return legendPositionArray[i].textXPos;})
											 .attr('y',function(d,i){return legendPositionArray[i].y + radius;})
											 .style('font-family','calibri')
											 .text(function(d,i){return legendArray[i];});
											 
				function drawProfile(obj,parentElem,index){
						var profileGrouping=parentElem.append("g")
									 .attr("class",""+obj["profileImageName"])
									 .attr("transform", "translate(" + (0) + "," + (0) + ")");
						
						var y=obj["y"]+0.5;
						var x=obj["x"]+0.5;
						var arcInnerRadius=obj["arcRadius"];
						var arcOuterRadius=obj["arcRadius"]*1.2;
						var arrowImageWidth=(arcOuterRadius*2)*0.8;
						//var arrowImageHeight=obj["imageHeight"]*0.5;
				//		var arrowImageHeight=(arcOuterRadius*2)*0.6;
						var imageFrameColor=obj["imageFrameColor"];
						var profileImageName=obj["profileImageName"];
						var profileImageWidth=obj["imageWidth"];
						var profileImageHeight=obj["imageHeight"];
						
						var pie = d3.layout.pie()
							.sort(null)
							.value(function(d) { return d;});
							
				/*		var startAngle;
						var endAngle;
						
						if(textArray[index]>0)
						{
							startAngle = -1;
						    endAngle = 4.8;
						}
						else
						{
							startAngle = 2;
							endAngle = 7.9;
						}*/
						
						var arc = d3.svg.arc()
								   .innerRadius(arcInnerRadius)
								   .outerRadius(arcOuterRadius)
								   .startAngle(0)
								   .endAngle(8);
								   
						
						//arc
					var arcRef = profileGrouping.append("path")
										.attr("d",arc)
										.attr("id","arc"+index)
										.attr("transform",function(){
											return  "translate(" + (xScale(x)) + "," + (yScale(y)) + ")";
										})
										.attr("fill",imageFrameColor)
										.style("opacity",0);
						
						arcRef.transition().duration(2000).style("opacity",1);
						
				//		$("#arc"+index).animate({"fill": 'yellow'}, 'slow');
							
						//profileImage	
						profileGrouping.append("image")
										.attr("xlink:href",profileImageName)
										.attr("width",profileImageWidth)
										.attr("height",profileImageHeight)
										.attr("value",index)
										.attr("x",(xScale(x)-obj["imageWidth"]/2))
										.attr("y",(yScale(y)-obj["imageHeight"]/2))
										.on("mousemove",function()
										{
											var keyValue = d3.select(this).attr('value');
										var yHeadingValueMap=[{"headingName":nameArray[keyValue],"headingVal":classArray[keyValue]}
															  ];
									
										toolTipManager.showToolTip(d3.event,"","", false,yHeadingValueMap,d3.event.pageY*.90);	
										})
										.on("mouseleave",function(){
										toolTipManager.hideTooTip();
		    							});
		
						
						
						if(textArray[index]>0)
						{
							var x1 = xScale(x)-((arcOuterRadius + arcInnerRadius)/2);
							var y1 = yScale(y)-(arcOuterRadius - arcInnerRadius)*2.2;
							var x2 = xScale(x) - (((arcOuterRadius + arcInnerRadius)/2)-(arcOuterRadius - arcInnerRadius)*1.5);
							var y2 = yScale(y);
							var x3 = xScale(x) - (((arcOuterRadius + arcInnerRadius)/2)+(arcOuterRadius - arcInnerRadius)*1.5);
							var y3 = yScale(y);
						}
						else
						{
							var x1 = xScale(x)+((arcOuterRadius + arcInnerRadius)/2);
							var y1 = yScale(y)+(arcOuterRadius - arcInnerRadius)*2.2;
							var x2 = xScale(x) + (((arcOuterRadius + arcInnerRadius)/2)-(arcOuterRadius - arcInnerRadius)*1.5);
							var y2 = yScale(y);
							var x3 = xScale(x) + (((arcOuterRadius + arcInnerRadius)/2)+(arcOuterRadius - arcInnerRadius)*1.5);
							var y3 = yScale(y);
						}
						
			 var trangleRef = profileGrouping.append("polygon")
							  .attr("class","triangle-value-indicator")
							  .style('stroke','white')
							  .style('stroke-width',2)
							  .style('fill',function()
							  {
								if(textArray[index]>=0){return legendImageArray[2]}else{return legendImageArray[3]};
							  })
							  .attr('points',function()
							  {
							  if(textArray[index]>=0){return''+x1+','+(yScale(y - 0.5)-15)+','+x2+','+yScale(y - 0.5)+','+x3+','+yScale(y - 0.5)+''}
							  else{return''+x1+','+(yScale(y + 0.5)+15)+','+x2+','+yScale(y + 0.5)+','+x3+','+yScale(y + 0.5)+''}
							  });
						
						trangleRef.transition()
								  .duration(2000)
								  .attr('points',''+x1+','+y1+','+x2+','+y2+','+x3+','+y3+'');
		
				//		var arrowImageXPos=xScale(x)-obj["imageWidth"]/2;
				//		var arrowImageYPos=(yScale(y)+arrowImageHeight*0.2);
						
						//arrow image	
						/*
						profileGrouping.append("image")
										.attr("xlink:href",obj["arrowImageName"])
										.attr("width",arrowImageWidth)
										.attr("height",arrowImageHeight)
										.attr("x",(arrowImageXPos))
										.attr("y",(arrowImageYPos));
						*/
						
						var textData=obj["text"].toString();
						var pixcelPerChar=8;
					//	var fontSize=arrowImageWidth>arrowImageHeight?arrowImageHeight*0.25:arrowImageWidth*0.25;
					//	fontSize=Math.round(fontSize);
						
				//		if(fontSize>20){
				//			fontSize=20;
				//		}
				//		if(fontSize<10){
				//			fontSize=10;
				//		}
						
						//append text as remarks
						var textSeprator = 8;
						textData = textData+" "+unit;
						var textXPos=xScale(x)-(textData.length/2)*pixcelPerChar;
						var textYPos=yScale(y)+arcOuterRadius+textSeprator;
						
						profileGrouping.append("text")
										.attr("x",textXPos)
										.attr("y",textYPos)
										.attr("dx",".2em")
										.attr("dy",".25em")
										.attr("text-anchor","start")
										.attr("fill",function()
										{
											if(textArray[index]>0){return textColor[0]}else{return textColor[1]}
										})
										.text(function()
										{
											if(textArray[index]>0){return "+"+textData}
											else{return textData;}
										});
					//					.style("font-size",fontSize,"important");						
				}
				//set font here
					setTextStyleAndSvgBackGround(svgElement);		
			}
		}
		
		
		var candleChartGraph =
		{
			candleChartAnaalysis:function(data)
			{
				var dataObject = data.dataObject;
				var xAxisLabel = data.xAxisLabel;
				var yAxisLabel = data.yAxisLabel;
				var unit = data.unit;
				var horizontalLineColor = data.horizontalLineColor;
				var verticalLineColor = data.verticalLineColor;
				var circleColor = data.circleColor;
				var xAxisData = data.xAxisData;
				var legendColorArray = data.legendColorArray;
				var legendArray = data.legendArray;
					
				var candleAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.1,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-candleAnalChart.left-candleAnalChart.right;
				var scaleHeight=height-candleAnalChart.top-candleAnalChart.bottom;
				
				var candleChartMainGroup = svgElement.append("g")
					.attr('class','candleMainGroup')
                    .attr("transform", "translate(" + candleAnalChart.left + "," + candleAnalChart.top + ")")
					
				
		//xAxis scale here
			var xAxisTimeIndex = [];
			for(var counter = 0;counter<dataObject.length ;counter++)
			{
				xAxisTimeIndex[counter] = counter;
			}
				
			var xScale = d3.scale.linear()
								 .domain([0,xAxisTimeIndex.length-1])
								 .range([0,scaleWidth]);
			
			var largestStringLngth=0;
			for(var counter =0 ;counter<xAxisData.length;counter++)
			{
				if(largestStringLngth<(xAxisData[counter].toString()).length)
				{
					largestStringLngth = (xAxisData[counter].toString()).length;
				}
			}
		
		/*
   		//xAxis label here	
		
			var pixcelPerChar=6;
			var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
			var xIndicationLabelTop=scaleHeight+(scaleHeight*0.13);
			var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;
			axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,candleChartMainGroup,textStyleConfg.xLabelColor,600);			   							
		*/
			
			
			var xAxis = d3.svg.axis()
							  .scale(xScale)
							  .orient("bottom")
							  .tickValues(tickController.getXTickArray(0,(xAxisData.length),largestStringLngth, (scaleWidth)));

			var xAxisGroup = candleChartMainGroup.append("g")
								.attr("class","x-axis")
								.attr("transform","translate("+0+","+(scaleHeight)+")")
								.attr('fill','none')
								.call(xAxis)
								.selectAll('text')
								.text(function(d){return xAxisData[d]})
								.attr('fill','black');
				/*
		//yAxis Label here				   
			var totalYLabelPixcel=(yAxisLabel+unit).toString().length*pixcelPerChar;
			var yIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;
			var yIndicationLabelLeft=(-candleAnalChart.left/2);	
			axisLabelController.appendLabel(yAxisLabel+" "+unit,yIndicationLabelLeft,yIndicationLabelTop,-90,candleChartMainGroup,textStyleConfg.yLabelColor,600);	
		*/
			
			var yScale = d3.scale.linear()
								 .domain([0,100])
								 .range([scaleHeight,0]);
			
			var yAxis = d3.svg.axis()
                              .scale(yScale)
                              .orient("left")
							  .tickValues(tickController.getTickArray(0,100,8));
							  
			candleChartMainGroup.append("g")
							.attr("class","left-y-axis")
							.attr("transform","translate("+(-candleAnalChart.left*.1)+","+0+")")
							.attr('fill','none')
							.call(yAxis)
							.selectAll('text')
							.attr('fill','black');
			
			var verticalLineRef = candleChartMainGroup.selectAll('.line')
												   .data(dataObject)
												   .enter()
												   .append('line')
												   .attr('x1',function(d,i){ return xScale(xAxisTimeIndex[i])})
												   .attr('y1',yScale(0))
												   .attr('x2',function(d,i){ return xScale(xAxisTimeIndex[i])})
												   .attr('y2',yScale(0))
												   .attr('stroke',verticalLineColor)
												   .attr('stroke-width',2);
									verticalLineRef.transition().duration(1000)
												   .attr('y1',yScale(100));
			var horizontalLine = candleChartMainGroup.selectAll('.line')
												   .data(dataObject)
												   .enter()
												   .append('line')
												   .attr('x1',function(d,i){ return xScale(xAxisTimeIndex[i])-10})
												   .attr('y1',function(d,i){return yScale(dataObject[i].average)})
												   .attr('x2',function(d,i){ return xScale(xAxisTimeIndex[i])+10})
												   .attr('y2',function(d,i){return yScale(dataObject[i].average)})
												   .attr('stroke',horizontalLineColor)
												   .attr('stroke-width',2);									   
			
			var radius = 5;
			
			for(var outerLoop = 0;outerLoop<dataObject.length;outerLoop++)
			{
				for(var innerLoop = 0;innerLoop<dataObject[outerLoop].marks.length;innerLoop++)
				{
					var circleRef = candleChartMainGroup.append('circle')
													    .attr('cx',function(){return -candleAnalChart.left})
														.attr('cy',function(){return 0})
														.attr('r',radius)
														.attr('fill',circleColor)
														.style('opacity',0.6)
									circleRef.transition().duration(1000)
											 .attr('cx',function(){return xScale(xAxisTimeIndex[outerLoop])})
											 .attr('cy',function(){return yScale(dataObject[outerLoop].marks[innerLoop])})

				}
			}
			
			//legend here
			/*	candleChartMainGroup.selectAll("line")
									.data(legendArray)
									.enter()
									.append("line")
									.attr('x1',)
									.attr('y1',)
									.attr('x2',)
									.attr('y2',)
									.attr('stroke',function(){return legendColorArray[i]})
									.attr('stroke-width',2)
			*/
			}
		}
		
		
		var multiAxisChartGraph =
		{
			multiAxisChartAnalysis:function(data)
			{
			
				var yObject = data.yObject;
				var xAxisData = data.xAxisData;
				var legendColor = data.legendColor;
				var legend = data.legend;
				
				var multiAxisAnalChart={left:width*0.05,right:width*0.05,bottom:height*0.1,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=(width)-multiAxisAnalChart.left-multiAxisAnalChart.right;
				var scaleHeight=height-multiAxisAnalChart.top-multiAxisAnalChart.bottom;
	
				var leftMarginOfSvg = $(selectorElement).offset().left;

				var multiAxisMAinGroup = svgElement.append("g")
					.attr('class','multiAxisMainGroup')
                    .attr("transform", "translate(" + multiAxisAnalChart.left + "," + multiAxisAnalChart.top + ")")
					.on("mouseover",function()
									{
										var x = d3.event.pageX;
										var y = d3.event.pageY;
										x=x-(leftMarginOfSvg+multiAxisAnalChart.left);
										x = Math.round(xScale.invert(x));
										if(x>=0 && x<xAxisData.length)
										{
										console.log(x);
										var heading=xAxisData[x];
										var yHeadingValueMap=[{"headingName":legend[0],"headingVal":yObject[0].yAxisData[x]},
															  {"headingName":legend[1],"headingVal":yObject[0].yAixsAvgData[x]},
															  {"headingName":legend[2],"headingVal":yObject[1].yAxisData[x]},
															  {"headingName":legend[3],"headingVal":yObject[1].yAixsAvgData[x]},
															  {"headingName":legend[4],"headingVal":yObject[2].yAxisData[x]},
															  {"headingName":legend[5],"headingVal":yObject[2].yAixsAvgData[x]}						  
															  ];
										
										toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90,scaleHeight/2);	
										}
										
							      verticalLineRef.attr('display','block')
												 .attr('x1',xScale(x))
										         .attr('x2',xScale(x));
									})
									.on("mouseleave",function(){
										verticalLineRef.attr('display','none')
										toolTipManager.hideTooTip();
									});
					
			//vertical line here	

			var verticalLineRef = multiAxisMAinGroup.append('line')
										  .attr('y1',0)
										  .attr('y2',scaleHeight)
										  .attr('stroke','red')
										  .attr('display','none');
	
			/*	var selectionDiv = svgElement.append('div')
											 .attr('width',width*.26)
											 .attr('height',height)
											 .style('position','absolute')
											 .style('left',width*.72);*/
											
	/*										
	    var divWidth = width*.4+(multiAxisAnalChart.left);
											 
		var selectionDiv = d3.select("#"+selectorId)
							.append("div")
							.attr('id','selectionDiv')
							.attr("class","selection-container")
							.style("width",divWidth)
							.style("height",scaleHeight)
				//			.style('border','solid black')
							.style("position","absolute")
							.style("left",width*.6 -(multiAxisAnalChart.left))
							.style('top',multiAxisAnalChart.top)
						//	.style("top",objectPositionAnalChart.top*2);			
		 var options = ["gurdas","sarbjit","pardeep","hardeep"]
		 
		 var select1 = selectionDiv
				//		.append("div")
						.append("select")
						.style('position','absolute')
						.style('margin-left',multiAxisAnalChart.left)
						.style('margin-top',multiAxisAnalChart.top)
						.style('width',divWidth*.25)
						.style('height',scaleHeight*.1)
						.on("change", function () {});

      select1.selectAll("option")
        .data(options)
        .enter().append("option")
        .attr("value", function (d) { return d; })
        .text(function (d) { return d; });
		
		
		var select2 = selectionDiv
				//		.append("div")
						.append("select")
						.style('position','absolute')
						.style('margin-left',divWidth - (divWidth*.25 + multiAxisAnalChart.left))
						.style('margin-top',multiAxisAnalChart.top)
						.style('width',divWidth*.25)
						.style('height',scaleHeight*.1)
						.on("change", function () {});

      select2.selectAll("option")
        .data(options)
        .enter().append("option")
        .attr("value", function (d) { return d; })
        .text(function (d) { return d; });
		
		
		selectionDiv.append('text')
					.style('position','absolute')
					.style('margin-left',(divWidth/2)-7)
					.style('margin-top',multiAxisAnalChart.top+3)
					.text('VS')
		
		var selectedName;
		var fieldSeprator = 15;
		var addMatrix = selectionDiv
				//		.append("div")
						.append("select")
						.style('position','absolute')
						.style('margin-left',multiAxisAnalChart.left)
						.style('margin-top',multiAxisAnalChart.top + scaleHeight*.1 + fieldSeprator)
						.style('width',divWidth*.40)
						.attr("id","nameSelect")
						.style('height',scaleHeight*.1)
						.on("change", function () {
							var sel=document.getElementById("nameSelect");
							selectedName=sel.options[sel.selectedIndex].value;
						});

      addMatrix.selectAll("option")
			   .data(options)
			   .enter().append("option")
			   .attr("value", function (d) { return d; })
			   .text(function (d) { return d; });
		
		var btnClick=0;	
		var addButton = selectionDiv.append('button')
									.style('position','absolute')
									.style('margin-left',multiAxisAnalChart.left + divWidth*.5)
									.style('margin-top',multiAxisAnalChart.top + scaleHeight*.1 + fieldSeprator)
									.style('width',divWidth*.1)
									.style('height',scaleHeight*.1)
									.attr('value','ADD')
									.text('ADD')
									.on('click',function(){
										btnClick++;
										
										var updatedData=addMetricJson[selectedName];
										
										$("#"+selectedElementId).empty();
										var stocChart42=$("#"+selectedElementId).stocCharts(textStyleConfg);
										stocChart42.multiAxisChartAnalysis(updatedData);
									});
									
			
	var data4 =  
			{
			yObject:
			 [
				{
							yAxisData : [210,280,270,320,350,260,325],
							yAixsAvgData : [80,37,40,100,75,45,30],
							yAxisColor : "orange"
				},
				{
						
							yAxisData : [240,250,160,295,160,180,170],
							yAixsAvgData : [35,25,20,45,30,20,55],
							yAxisColor : "blue"
				},
				{
						
							yAxisData : [100,150,50,200,125,75,230],
							yAixsAvgData : [135,125,120,150,130,120,155],
							yAxisColor : "green"
				},
				{
						
							yAxisData : [50,70,20,100,165,45,120],
							yAixsAvgData : [105,105,90,100,90,80,85],
							yAxisColor : "red"
				}
			],
			xAxisData : ["Jan","Feb","Mar","Apr","May","June","July"],
			unit:"Student's",
			legend : ["Student Login","Class Avg.Login","Student Interaction","Class.Avg Interaction","Student Time Spent","Class Time Spent","Student","Class"],
			legendColor: ['orange','orange','blue','blue','green','green','red','red']
			}
			
		
		var data5 =  
			{
			yObject:
			 [
				{
							yAxisData : [210,280,270,320,350,260,325],
							yAixsAvgData : [80,37,40,100,75,45,30],
							yAxisColor : "orange"
				},
				{
						
							yAxisData : [240,250,160,295,160,180,170],
							yAixsAvgData : [35,25,20,45,30,20,55],
							yAxisColor : "blue"
				},
				{
						
							yAxisData : [100,150,50,200,125,75,230],
							yAixsAvgData : [135,125,120,150,130,120,155],
							yAxisColor : "green"
				},
				{
						
							yAxisData : [50,70,20,100,165,45,120],
							yAixsAvgData : [105,105,90,100,90,80,85],
							yAxisColor : "red"
				},
				{
						
							yAxisData : [50,70,20,100,165,45,120],
							yAixsAvgData : [105,105,90,100,90,80,85],
							yAxisColor : "cyan"
				}
			],
			xAxisData : ["Jan","Feb","Mar","Apr","May","June","July"],
			unit:"Student's",
			legend : ["Student Login","Class Avg.Login","Student Interaction","Class.Avg Interaction","Student Time Spent","Class Time Spent","Student","Class","Test","Test Avg"],
			legendColor: ['orange','orange','blue','blue','green','green','red','red','cyan','cyan']
			}
		
var addMetricJson={'gurdas':data4,'sarbjit':data5};		
*/
				var yScale = [];
				var leftAxisMargin = 0,rightAxisMargin = scaleWidth,pixcelPerCharactor = 11,flag=0;
				for(var counter = 0;counter<yObject.length;counter++)
				{
					
					var largestStringLngth=0;
					for(var index =0 ;index<yObject[counter].yAxisData.length;index++)
					{
						if(largestStringLngth<(yObject[counter].yAxisData[index].toString()).length)
						{
							largestStringLngth = (yObject[counter].yAxisData[index].toString()).length;
						}
						
						if(largestStringLngth<(yObject[counter].yAixsAvgData[index].toString()).length)
						{
							largestStringLngth = (yObject[counter].yAixsAvgData[index].toString()).length;
						}
					}
					
					
					largestStringLngth = largestStringLngth*pixcelPerCharactor;
					
					var yMin = d3.min(yObject[counter].yAxisData)<d3.min(yObject[counter].yAixsAvgData)? d3.min(yObject[counter].yAxisData):d3.min(yObject[counter].yAixsAvgData);
					var yMax = d3.max(yObject[counter].yAxisData)>d3.max(yObject[counter].yAixsAvgData)?d3.max(yObject[counter].yAxisData):d3.max(yObject[counter].yAixsAvgData);
					
					if(yMax>0)
					{
						yMax = yMax*1.3;
					}
					else
					{
						yMax =yMax*.7;
					}
					if(yMin>0)
					{
						yMin = yMin* .5;
					}
					else
					{
						yMin = yMin * 1.5;
					}
					
					
					 yScale[counter]= d3.scale.linear()
									 .domain([yMin,yMax])
									 .range([scaleHeight,0]);
					
					
					if(counter%2==0)
					{
					leftAxisMargin  = leftAxisMargin + largestStringLngth;
							var yAxis = d3.svg.axis()
                                  .scale(yScale[counter])
                                  .orient("left")
								  .tickValues(function(){if(flag==0){return tickController.getTickArray(yMin,yMax,6)}
								  else
								  {
									return tickController.getTickArray(yMin,yMax,5)
								  }
								  });
	             
					        multiAxisMAinGroup.append("g")
									.attr("class","left-y-axis")
									.attr("transform","translate("+leftAxisMargin+","+0+")")
						       	    .attr('fill','none')
						//			.style('display','none')
									.style('stroke-width',0.3)
									.style('stroke',yObject[counter].yAxisColor)
									.call(yAxis)
									.selectAll('text')
									.attr('fill',yObject[counter].yAxisColor);
									
						
					}
					else
					{
						
						var yAxis = d3.svg.axis()
                                  .scale(yScale[counter])
                                  .orient("left")
								  .tickValues(function(){if(flag==0){flag=1;return tickController.getTickArray(yMin,yMax,6)}
								  else
								  {
									flag=0;
									return tickController.getTickArray(yMin,yMax,5)
								  }
								  });
	             
							  multiAxisMAinGroup.append("g")
									.attr("class","left-y-axis")
									.attr("transform","translate("+rightAxisMargin+","+0+")")
						       	    .attr('fill','none')
							//		.style('display','none')
									.style('stroke-width',0.3)
									.style('stroke',yObject[counter].yAxisColor)
								//	.style('shape-rendering','crispEdges')
									.call(yAxis)
									.selectAll('text')
									.attr('fill',yObject[counter].yAxisColor);
						rightAxisMargin  = rightAxisMargin - (largestStringLngth);			
									
					}
				}
			//xAxis scale here
			var xAxisTimeIndex = [];
			for(var counter = 0;counter<xAxisData.length ;counter++)
			{
				xAxisTimeIndex[counter] = counter;
			}
				
			var xScale = d3.scale.linear()
								 .domain([0,xAxisData.length-1])
								 .range([leftAxisMargin,rightAxisMargin-rightAxisMargin*.01]);
			
			var largestStringLngth=0;
			for(var counter =0 ;counter<xAxisData.length;counter++)
			{
				if(largestStringLngth<(xAxisData[counter].toString()).length)
				{
					largestStringLngth = (xAxisData[counter].toString()).length;
				}
			}
				

			
			var xAxis = d3.svg.axis()
							  .scale(xScale)
							  .orient("bottom")
							  .tickValues(tickController.getXTickArray(0,(xAxisData.length),largestStringLngth, (rightAxisMargin-leftAxisMargin)));

			var xAxisGroup = multiAxisMAinGroup.append("g")
								.attr("class","x-axis")
								.attr("transform","translate("+0+","+(scaleHeight)+")")
								.attr('fill','none')
								//.style('display','none')
								.call(xAxis)
								.selectAll('text')
								.text(function(d){return xAxisData[d]})
								.attr('fill','black'); 

			// legend here

					
/*				var legendSVG = selectionDiv.append('svg')
											.attr('class','legendSVG')
											.attr('width',divWidth)
											.attr('height',scaleHeight);
								leftAxisMargin,rightAxisMargin  */
				var legendGroup = multiAxisMAinGroup.append('g')
										 .attr('class','legend')
										 .attr("transform", "translate(" + leftAxisMargin + "," +0+ ")")
				
				var legendSize = 15;
				var lineStroke = 3;
				var yPositionOfLegend = 0;
				var legendPositionArray = legendController.showHorizontalLegend(rightAxisMargin-leftAxisMargin,yPositionOfLegend,legend,legendSize);
		
				var legendRef = legendGroup.selectAll('.line')
										    .data(legendPositionArray)
										    .enter()
											.append('line')
											.attr('x1',function(d,i){ return legendPositionArray[i].x;})
											.attr('y1',function(d,i){return legendPositionArray[i].y;})
											.attr('x2',function(d,i){ return legendPositionArray[i].x + legendSize;})
											.attr('y2',function(d,i){return legendPositionArray[i].y;})
											.attr('stroke',function(d,i){return legendColor[i]})
											.attr('stroke-width',function(d,i){if(i%2==0){return lineStroke;}else{return 1.5}})
											.style("stroke-dasharray",function(d,i){if(i%2==0){return ("0, 0")}else{return ("2, 2")}});
				var legendTextRef = legendGroup.selectAll('.text')
										    .data(legendPositionArray)
										    .enter()
											.append('text')
											.attr('x',function(d,i){return legendPositionArray[i].textXPos;})
											.attr('y',function(d,i){return legendPositionArray[i].y + lineStroke ;})
											.attr('font-family','calibri')
											.text(function(d,i){return legend[i];});				
		

										
			// line path here
			for(var counter = 0;counter<yObject.length;counter++)
			{
				var lineFunction = d3.svg.line()
								.x(function(d,i) {return xScale(xAxisTimeIndex[i]); })
								.y(function(d,i) {return yScale[counter](yObject[counter].yAxisData[i]); })                       
			//					.interpolate("cardinal");
								
				var lineGraphRef = multiAxisMAinGroup.selectAll(".path")
										 .data([xAxisData])
										 .enter()
										 .append("path")
										 .attr("d", lineFunction)	  
										 .attr("stroke",yObject[counter].yAxisColor)
										 .attr("stroke-width",3)
										 .attr("fill", "none");
										 
				//transition here
				
			var totalLength = lineGraphRef.node().getTotalLength();

			lineGraphRef.attr("stroke-dasharray", function (d) {
			
				
					return totalLength + "," + totalLength;
			})
				.attr("stroke-dashoffset", totalLength)
				.transition()
				.duration(2000)
				.ease("linear")
				.attr("stroke-dashoffset", 0);
					 
					 
				var dashedLine = d3.svg.line()
								.x(function(d,i) {return xScale(xAxisTimeIndex[i]); })
								.y(function(d,i) {return yScale[counter](yObject[counter].yAixsAvgData[i]); })                       
					//			.interpolate("cardinal");
								
				var dashedLineGraphRef = multiAxisMAinGroup.selectAll(".path")
										 .data([xAxisData])
										 .enter()
										 .append("path")
										 .attr("d", dashedLine)	  
										 .attr("stroke",yObject[counter].yAxisColor)
										 .attr("stroke-width",1.5)
							//			 .style("stroke-dasharray", ("3, 3"))
										 .attr("fill", "none");
			//transition dashed Line
			
			var leftLineTotalLength = dashedLineGraphRef.node().getTotalLength();

			dashedLineGraphRef.attr("stroke-dasharray", function (d) {


				var dashLen = 3;
				var ddLen = dashLen * 2;
				var darray = dashLen;
				while (ddLen < leftLineTotalLength) {
					darray += "," + dashLen + "," + dashLen;
					ddLen += dashLen * 2;
				}

					return darray + "," + leftLineTotalLength;
			})
				.attr("stroke-dashoffset", leftLineTotalLength)
				.transition()
				.duration(2000)
				.ease("linear")
				.attr("stroke-dashoffset", 0); 
				
			var circleRef1 = multiAxisMAinGroup.selectAll('.circle')
											  .data(xAxisData)
											  .enter()
											  .append('circle')
											  .attr('cx',function(d,i){return xScale(xAxisTimeIndex[i])})
											  .attr('cy',function(d,i){return yScale[counter](yObject[counter].yAxisData[i]); })
											  .attr('r',3)
											  .attr('fill','white');
			
			var circleRef2 = multiAxisMAinGroup.selectAll('.circle')
											  .data(xAxisData)
											  .enter()
											  .append('circle')
											  .attr('cx',function(d,i){return xScale(xAxisTimeIndex[i])})
											  .attr('cy',function(d,i){return yScale[counter](yObject[counter].yAixsAvgData[i]); })
											  .attr('r',3)
											  .attr('fill','white');
											  
						
			}
			
		}
	}
	
		
		var detailAnalysisGraph = 
		{
			detailAnalysis:function(cnfg)
			{
				var leftYAxisData = cnfg.data.leftYAxisData;
				var rightYAxisData = cnfg.data.rightYAxisData;
				var xAxisData = cnfg.data.xAxisData;
				var topYSymbolArray = cnfg.data.topYSymbolArray;
				var bottomYSymbolArray = cnfg.data.bottomYSymbolArray;
				var title = cnfg.data.title;
				var titleColor = cnfg.data.titleColor;
				var titleSize = cnfg.data.titleSize;
				var rightYAxisLabel =cnfg.data.rightYAxisLabel;
				var leftYAxisLabel =cnfg.data.leftYAxisLabel;
				var xAxisLabel = cnfg.data.xAxisLabel;
				var leftYAxisColor = cnfg.data.leftYAxisColor;
				var rightYAxisColor = cnfg.data.rightYAxisColor;
				
				var detailAnalChart={left:width*0.1,right:width*0.1,bottom:height*0.13,top:height*0.1,chartSeparator:5,xScalePaddingTop:height*0.2,yScalePaddingLeft:width*0.1};
				var scaleWidth=width-detailAnalChart.left-detailAnalChart.right;
				var scaleHeight=height-detailAnalChart.top-detailAnalChart.bottom;
				
				var imageFolderPath=cnfg.data.imageFolderPath;
				
				var bottomYSymbolLabel=cnfg.data.bottomYSymbolLabel;
				var leftYAxisUnit=cnfg.data.leftYAxisUnit;
				var rightYAxisUnit=cnfg.data.rightYAxisUnit;
				
                var textFamily = 'calibri',textSize = 14;
				
				var xAxisTimeIndex = [];
			    for(var counter = 0;counter<xAxisData.length ;counter++)
				{
					xAxisTimeIndex[counter] = counter;
				}
				var gridManager =   
								{
										init: function (svg, height, width, left, top) 
									{
										var hfactor = Math.ceil(height * .1);
										var vfactor = Math.ceil(height * .1);
										var hRange = Math.ceil(height / hfactor);

										var vRange = Math.ceil(width / vfactor);

										svg.selectAll(".hline").data(d3.range(hRange)).enter()
											.append("line")
											.attr("y1", function (d) {
											return d * hfactor+10;
										})
											.attr("y2", function (d) {
											return d * hfactor+10;
										})
											.attr("x1", function (d) {
											return 0;
										})
											.attr("x2", function (d) {
											return width;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");



										svg.selectAll(".vline").data(d3.range(vRange)).enter()
											.append("line")
											.attr("x1", function (d) {
											return d * vfactor;
										})
											.attr("x2", function (d) {
											return d * vfactor;
										})
											.attr("y1", function (d) {
											return 0;
										})
											.attr("y2", function (d) {
											return height;
										})
											.style("stroke", "#eee")
											.attr("transform", "translate(" + left + "," + top + ")");
									}

								};
						
				gridManager.init(svgElement, scaleHeight, scaleWidth, detailAnalChart.left, detailAnalChart.top);
            
		  //alert($("#line28").offset().left);
			var leftMarginOfSvg = $(selectorElement).offset().left;
				var scoredMainGroup = svgElement.append("g")
					.attr('class','scoredMainGroup')
                    .attr("transform", "translate(" + detailAnalChart.left + "," + detailAnalChart.top + ")")
					.on("mouseover",function()
					{
						var x = event.pageX;
						var y = event.pageY;
						console.log("x = "+x+" y = "+y);
						x=x-(leftMarginOfSvg+detailAnalChart.left);
						x = Math.round(xScale.invert(x));
						
						console.log("x = "+x+" y = "+y);
						var ballType=bottomYSymbolArray[x];
						var runPerBall=topYSymbolArray[x];
						
						var averageUnit=leftYAxisUnit;
						var averageVal=leftYAxisData[x];
						
						var totalRunUnit=rightYAxisUnit;
						var totalRun=rightYAxisData[x];
						
						var yHeadingValueMap=[{"headingName":bottomYSymbolLabel,"headingVal":ballType},
											//  {"headingName":"sss","headingVal":runPerBall},
											  {"headingName":averageUnit,"headingVal":averageVal},
											  {"headingName":totalRunUnit,"headingVal":totalRun}
											  ];
						
						toolTipManager.showToolTip(d3.event,"",(runPerBall), false,yHeadingValueMap);	
					})
					.on("mouseleave",function(){
						toolTipManager.hideTooTip();
					});
			
				//left y scale
							   
				// title label here
				axisLabelController.appendLabel(title,detailAnalChart.left,0,0,scoredMainGroup,textStyleConfg.titleColor,700);
				
				// Right YAxis Label here
				var pixcelPerChar = 6;
				var totalYLabelPixcel=rightYAxisLabel.toString().length*pixcelPerChar;
				var leftYIndicationLabelTop=scaleHeight/2-totalYLabelPixcel/2;
				var leftYIndicationLabelLeft=(scaleWidth+(scaleWidth*0.01));
				axisLabelController.appendLabel(rightYAxisLabel,leftYIndicationLabelLeft,leftYIndicationLabelTop,90,scoredMainGroup,textStyleConfg.yLabelColor,600);			   
				
				// left YAxis Label here
				var totalYLabelPixcel=leftYAxisLabel.toString().length*pixcelPerChar;
				var rightYIndicationLabelTop=scaleHeight/2+totalYLabelPixcel/2;
				var rightYIndicationLabelLeft=(-detailAnalChart.yScalePaddingLeft/2);
				axisLabelController.appendLabel(leftYAxisLabel,rightYIndicationLabelLeft,rightYIndicationLabelTop,-90,scoredMainGroup,textStyleConfg.yLabelColor,600);			   

				// xAxis label here
				var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
				var xIndicationLabelTop=scaleHeight+(scaleHeight*0.13);
				var xIndicationLabelLeft=scaleWidth/2-totalXLabelPixcel/2;
				axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,scoredMainGroup,textStyleConfg.xLabelColor,600);
				
							   
				var leftYScale = d3.scale.linear()
									 .domain([d3.min(leftYAxisData)*.7,d3.max(leftYAxisData)*1.5])
									 .range([scaleHeight,0]);
	            
				var leftYAxis = d3.svg.axis()
                                  .scale(leftYScale)
                                  .orient("left");
	             
                var LeftYAxisGroup = scoredMainGroup.append("g")
									.attr("class","left-y-axis")
									.attr("transform","translate("+0+","+0+")")
						       	    .attr('fill','none')
								//	.style('display','none')
									.call(leftYAxis)
									.selectAll('text')
									.attr('fill',leftYAxisColor);
				//right y scale
				var rightYScale = d3.scale.linear()
									 .domain([d3.min(rightYAxisData)*.8,d3.max(rightYAxisData)*1.1])
									 .range([scaleHeight,0]);
	            
				var rightYAxis = d3.svg.axis()
                                  .scale(rightYScale)
                                  .orient("left");
	             
                var yAxisGroup = scoredMainGroup.append("g")
									.attr("class","right-y-axis")
									.attr("transform","translate("+(scaleWidth)+","+0+")")
						       	    .attr('fill','none')
								//	.style('display','none')
									.call(rightYAxis)
									.selectAll('text')
									.attr('fill',rightYAxisColor);
				
				var xAxisTimeIndex = [];
			    for(var counter = 0;counter<xAxisData.length ;counter++)
				{
					xAxisTimeIndex[counter] = counter;
				}
				
				var xScale = d3.scale.linear()
							         .domain([0,xAxisData.length-1])
                                     .range([0,scaleWidth*.9]);
	            
					var largestStringLngth=0;
					for(var counter =0 ;counter<xAxisData.length;counter++)
					{
						if(largestStringLngth<(xAxisData[counter].toString()).length)
						{
							largestStringLngth = (xAxisData[counter].toString()).length;
						}
					}
					

				
				var xAxis = d3.svg.axis()
                                  .scale(xScale)
                                  .orient("bottom")
								  .tickValues(tickController.getXTickArray(0,(xAxisData.length),largestStringLngth, (scaleWidth)));
	   
                var xAxisGroup = scoredMainGroup.append("g")
									.attr("class","x-axis")
									.attr("transform","translate("+0+","+(scaleHeight)+")")
						       	    .attr('fill','none')
									//.style('display','none')
									.call(xAxis)
									.selectAll('text')
									.text(function(d){return xAxisData[d]})
									.attr('fill','black');
				
				var bottomSymbolSize = scaleWidth/(bottomYSymbolArray.length*2);
				var bottomYAxisImages = scoredMainGroup.selectAll('img')
							   .data(bottomYSymbolArray)
		     				   .enter()
							   .append('image')
							   .attr('x',function(d,i){return 0})
							   .attr('y',function(d,i){return scaleHeight-(bottomSymbolSize)})
							   .attr('width',bottomSymbolSize)
							   .attr('height',bottomSymbolSize)
							   .attr("xlink:href",function(d,i){
									return imageFolderPath+""+ d+'.png';
								});
								
		   bottomYAxisImages.transition()
							.duration(2500)
							.attr('x',function(d,i){return xScale(xAxisTimeIndex[i])-(bottomSymbolSize/2)});

				
											
				var rightLine = d3.svg.line()
								.x(function(d,i) {return xScale(xAxisTimeIndex[i]); })
								.y(function(d,i) {return rightYScale(rightYAxisData[i]); })                       
								.interpolate("cardinal");
				var topSymbolSize = scaleWidth/(topYSymbolArray.length*2);
				var rightLineGraph = scoredMainGroup.selectAll(".path")
										 .data([rightYAxisData])
										 .enter()
										 .append("path")
										 .attr("d", rightLine)	  
										 .attr("stroke",rightYAxisColor)
										 .attr("stroke-width",1)
										 .attr("fill", "none");
				
				//transition
				var totalLength = rightLineGraph.node().getTotalLength();

                rightLineGraph.attr("stroke-dasharray", function (d) {
				
					
                        return totalLength + "," + totalLength;
                })
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(2000)
                    .ease("linear")
                    .attr("stroke-dashoffset", 0);


				
				
				
			var topYAxisImages = 	scoredMainGroup.selectAll('img')
							   .data(topYSymbolArray)
		     				   .enter()
							   .append('image')
							   .attr('x',function(d,i){return 0})
							   .attr('y',function(d,i){return 0})
							   .attr('width',topSymbolSize)
							   .attr('height',topSymbolSize)
							   .attr("xlink:href",function(d,i){
									return imageFolderPath+""+d+'.png'
								});
						topYAxisImages.transition()
							.duration(2500)
							.attr('x',function(d,i){ return  xScale(xAxisTimeIndex[i])-(topSymbolSize/2)})
							.attr('y',function(d,i){return rightYScale(rightYAxisData[i])-(topSymbolSize+5)});
		
				var leftLine = d3.svg.line()
								.x(function(d,i) {return xScale(xAxisTimeIndex[i]); })
								.y(function(d,i) {return leftYScale(leftYAxisData[i]); })                       
								.interpolate("cardinal");
				var leftLineGraph = scoredMainGroup.selectAll(".path")
										 .data([leftYAxisData])
										 .enter()
										 .append("path")
										 .attr("d", leftLine)	  
										 .attr("stroke",leftYAxisColor)
										 .attr("stroke-width",1)
										 .attr("fill", "none");
									//	 .style("stroke-dasharray", ("3, 3"));
				//transition dashed Line
				var leftLineTotalLength = leftLineGraph.node().getTotalLength();

                leftLineGraph.attr("stroke-dasharray", function (d) {


                    var dashLen = 3;
                    var ddLen = dashLen * 2;
                    var darray = dashLen;
                    while (ddLen < leftLineTotalLength) {
                        darray += "," + dashLen + "," + dashLen;
                        ddLen += dashLen * 2;
                    }

                        return darray + "," + leftLineTotalLength;
                })
                    .attr("stroke-dashoffset", leftLineTotalLength)
                    .transition()
                    .duration(2000)
                    .ease("linear")
                    .attr("stroke-dashoffset", 0);
				
				//hide axis path
				hideAxisPath(svgElement);
				
				//set font here
		//		setTextStyleAndSvgBackGround(svgElement);	

			},
		};
		
		var drawThreeDBubbleChart=
		{
				threeDBubbleChart:function(cnfg)
				{
							
					var title = cnfg.data.title;
					var titleColor = cnfg.data.titleColor;
					var yAxisData = cnfg.data.yAxisData;
					var yAxisLabel = cnfg.data.yAxisLabel;
					var xAxisData = cnfg.data.xAxisData;
					var xAxisLabel = cnfg.data.xAxisLabel;
					var series = cnfg.data.series;
					var legendArray=cnfg.data.legendArray;
					
				//	alert(title)
					if(width<501)
					{
							titleFontSize = 18
							gridFactor = 8;
							fontSize = 11;
							rectangleSize = 9;
							rectangleTextSize =9;
					}
					else
					{	
							titleFontSize = 20;
							gridFactor = 12;
							fontSize = 14;
							rectangleSize = 10;
							rectangleTextSize =10;
					}
					
					var fontFamily = 'calibri';
					var xAxisLabelColor = "black"
					
					var actualWidth = width < height ? width : height;

					var margin = {top: 0.15*height, right: 0.15*width, bottom: 0.15*height, left: 0.15*width};


					var arrraySampleData = [];

					function inputDataToRequiredData(series)
					{
						
						for(var j = 0 ; j < series.length ; j++)
						{
							var sData = [];
						   
								for(var k = 0; k < series[j].data.length; k++)
								{             
									 var reqD = series[j].data[k]  ;             sData.push(JSON.parse('{"x":'+reqD[0]+',"y":'+reqD[1]+',"r":'+reqD[2]+'}'));
									
								}
							arrraySampleData.push(sData);
						}
						return arrraySampleData;
					}

					var actualData = inputDataToRequiredData(series);

					var minXScale = d3.min(actualData[0], function (d) { return d.x; });
					var maxXScale = d3.max(actualData[0], function (d) { return d.x; });;
					var minYScale = d3.min(actualData[0], function (d) { return d.y; });
					var maxYScale = d3.max(actualData[0], function (d) { return d.y; });
					var maxRadius =  d3.max(actualData[0], function (d) { return d.r; });;
					var minRadius = d3.min(actualData[0], function (d) { return d.r; });;
					var currentMaxRadius = 0;
					var currentMinRadius = 0;
					   
					var currentMinXScale = 0;
					var currentMaxXScale = 0;
						
					var currentMinYScale = 0;
					var currentMaxYScale = 0;

					for(var a = 1 ; a < actualData.length ; a ++)
					{
							// console.log("  actualDataElement[b] : " + JSON.stringify(actualDataElement[b]));
							 
							 //alert(JSON.stringify(actualDataElement[b]));
							 currentMaxRadius = d3.max(actualData[a], function (d) { return d.r; });
							 currentMinRadius = d3.min(actualData[a], function (d) { return d.r; });  
							   
							 //console.log("  currentMaxRadius : "+ currentMaxRadius);
							 currentMaxXScale = d3.max(actualData[a], function (d) { return d.x; });
							 currentMinXScale = d3.min(actualData[a], function (d) { return d.x; });
							 
							 currentMaxYScale = d3.max(actualData[a], function (d) { return d.y; });
							 currentMinYScale = d3.min(actualData[a], function (d) { return d.y; });
						
						 if(currentMaxRadius > maxRadius)
							 maxRadius = currentMaxRadius;
						
						 if(currentMinRadius < minRadius)
							 minRadius = currentMinRadius;
						
						 if(currentMaxXScale > maxXScale)
							 maxXScale = currentMaxXScale;
						
						 if(currentMinXScale < minXScale)
							 minXScale = currentMinXScale;
						
						 if(currentMaxYScale > maxYScale)
							 maxYScale = currentMaxYScale;
						
						 if(currentMinYScale < minYScale)
							 minYScale = currentMinYScale;

					}

					var scale = d3.scale.linear().domain([0, maxRadius]).range([0 , 0.1*actualWidth]);

					var xRange = d3.scale.linear().range([margin.left, width - margin.right]).domain([0, 1.1*maxXScale]);

					var yRange = d3.scale.linear().range([height-margin.top,margin.bottom]).domain([minYScale, 1.2*maxYScale]);

					var xAxis = d3.svg.axis().scale(xRange).orient("bottom");
					var yAxis = d3.svg.axis().scale(yRange).orient("left");

							/*
							var vis = d3.select("#svgChart")
									 .append("svg")
									 .attr("width", width)
									 .attr("height", height)
									 .append("g")
									 .attr("transform", "translate(" + (0) + "," + 0 + ")");
							*/
						  
						  var vis = svgElement
									 .append("g")
									 .attr('class','bubble-main-group')
									 .attr("transform", "translate(" + (0) + "," + 0 + ")");
						  
					//title label here
					axisLabelController.appendLabel(title,margin.left*1.5,margin.top/2,0,vis,textStyleConfg.titleColor,700);
					//xAxis Label here
					var pixcelPerChar = 6;
					var totalXLabelPixcel=xAxisLabel.toString().length*pixcelPerChar;
					var xIndicationLabelTop=(height-margin.top)+((height-margin.top)*0.13);
					var xIndicationLabelLeft=(width - margin.right)/2-totalXLabelPixcel/2;
					axisLabelController.appendLabel(xAxisLabel,xIndicationLabelLeft,xIndicationLabelTop,0,vis,textStyleConfg.xLabelColor,600);
					
					//yAxis Label here	  
					var totalYLabelPixcel=yAxisLabel.toString().length*pixcelPerChar;
					var yIndicationLabelTop=(height)/2+totalYLabelPixcel/2;
					var yIndicationLabelLeft=(margin.left/2);
					axisLabelController.appendLabel(yAxisLabel,yIndicationLabelLeft,yIndicationLabelTop,-90,vis,textStyleConfg.yLabelColor,600);
					
					var colorGradientArray = ["#aaaa00","#75c200","#006bd5"];
					var colorArray = cnfg.data.colorArray;

					var x = 0;

					for(var e = 0 ; e < actualData.length; e++)
					{
							vis.selectAll("circle.s"+ e)   
							.data(actualData[e])
							.enter()
							.insert("circle")
							.attr("cx", function (d) { return xRange(d.x); })
							.attr("cy", function (d) { return yRange(d.y); })
							.attr("r", function (d) { return getActualRadius(d.r) })    
							.on("mouseover",function(d,i){
								var yHeadingValueMap=[{"headingName":yAxisLabel,"headingVal":d.y}];
						
								toolTipManager.showToolTip(d3.event,"",xAxisLabel+" "+(d.x), false,yHeadingValueMap);	
							})
							.on("mouseleave",function(d,i){
								toolTipManager.hideTooTip();	
							})
							.transition()
							.duration(1000)
							.attr("opacity", 0.3)
							.attr("class",'s'+ e)
							//.attr("fill",function (d, m) { return colorArray[e] }); 
							//.attr('fill', 'url(#gradient+'+e+')')
							.attr('fill',  function(d, i) {
								return "url(#gradient" + e + ")" ;
							});
							 
					   
							
						var gradient = vis.append("svg:defs")
							.append("svg:linearGradient")
							.attr("id", "gradient"+e)
							.attr("x1", "0%")
							.attr("y1", "0%")
							.attr("x2", "100%")
							.attr("y2", "100%")
							.attr("spreadMethod", "pad");
						
						// Define the gradient colors
						gradient.append("svg:stop")
							.attr("offset", "0%")
							//.attr("stop-color", colorGradientArray[e])
							.attr("stop-color", colorArray[e])
							.attr("stop-opacity", 1);
						
						gradient.append("svg:stop")
							.attr("offset", "100%")
							//.attr("stop-color", colorGradientArray[e]+1000)
							.attr("stop-color", colorArray[e]+1000)
							.attr("stop-opacity", 1);
						
					}

					function getActualRadius(radius)
					{
					   var val = scale(radius);
						
					   if(val < 0.008*actualWidth)
					   {
						   val = 0.008*actualWidth;
					   }
					   if(val > 0.04*actualWidth)
					   {
							val = 0.04*actualWidth;   
					   }
					   return val;    
					}


					vis.append("g")         
							.attr("class", "xGrid")
							.attr("transform", "translate(0," + (width - margin.bottom) + ")")
							.call(make_x_axis()        
							.tickSize(-width + margin.bottom , 0, 0)
							.tickFormat("")
							 
							).attr("opacity","0.3");

					   vis.append("g")         
							.attr("class", "yGrid")
						   .attr("transform",  "translate("+ margin.left +","+0+")")
							.call(make_y_axis()
							.tickSize(-height + 2*margin.bottom, 0, 0)
							.tickFormat("")
							).attr("opacity","0.3");


					function make_x_axis() {        
						return d3.svg.axis()
							 .scale(xRange)
							 .orient("bottom")
							 .ticks(10);
					}

					function make_y_axis() {        
						return d3.svg.axis()
							.scale(yRange)
							.orient("left")
							.ticks(10);
					}

				  vis.append("svg:g")
						.attr("class","xAxis axis")
						.transition()
						.call(xAxis)       
						.attr("transform", "translate("+ 0 +","+ (actualWidth - 0.9*margin.bottom) +")")
						.attr("stroke", 'black');
						
						vis.append("svg:g")
						.attr("class", "yAxis axis")
						.transition()
						.call(yAxis)        
						.attr("transform", "translate("+ 0.9*margin.left +","+0+")")
						.attr("stroke", 'black');

					
					
					svgElement.selectAll('.yAxis path').attr("fill", "none");
					svgElement.selectAll('.xAxis path').attr("fill", "none");

					svgElement.selectAll('.xGrid').attr("stroke", "lightgrey");
					svgElement.selectAll('.yGrid').attr("stroke", "lightgrey");

					svgElement.selectAll('.xGrid ').attr("opacity", 0.5);
					svgElement.selectAll('.yGrid ').attr("opacity", 0.5);

					svgElement.selectAll('.xGrid .tick').attr("stroke-width", 0);
					svgElement.selectAll('.yGrid .tick').attr("stroke-width", 0);
					
					

					var legendTop=height-margin.top;
					var chartWidth=width-margin.right;
					
					var legendGrouping = vis.append("g")
                    .attr("class", "legend-grouping")
                    .attr('transform', 'translate(' +0.9*margin.left + ','+(legendTop * 0.13)+')');

				  
				  var legendWidth = 12;
				  var legendHeight = 12;
				/*
				
				  if(width > 300)
				  {
					  legendWidth = 12;
					  legendHeight = 12;
				  }
				  else
				  {
					  legendWidth = 10;
					  legendHeight = 10;
				  }
				 */
				 
				
				var nextLineCounter=0;
				var xPos=(chartWidth*.05),xPos1=(chartWidth*.05),yPos=0;
				var positionXArray=[];
				var positionYArray=[];
				
				var legendPositionArray=legendController.getLegendPositionArray(legendArray,chartWidth,legendTop);
				
				for(var i=0;i<legendPositionArray.length;i++){
					console.log("x "+legendPositionArray[i].x +" y "+legendPositionArray[i].y +" end "+legendPositionArray[i].endPos);
				}
				
				legendGrouping.selectAll('rect.legendRect')
						.data(legendArray)
						.enter()
						.append("rect")
						.attr("class","legendRect")
						.attr("x", function (d, i) {
							return legendPositionArray[i].x;
						})
						.attr("y", function(d,i){
							return legendPositionArray[i].y;
						})
						.attr("width", legendWidth)
						.attr("height", legendHeight)
						
						.style("fill", function (d, i) {
							return "url(#gradient" + i + ")" ;
						})
						.attr("opacity", 0.3);
						/*
						.on("click", function (d) {
							
							var state = d3.selectAll("." + d.key.replace(/ /g,'')).style("display");
							if (state == "none") {

								$("."+d.key.replace(/ /g,'')).slideUp(400).delay(400).fadeIn();
							  
							} else {

								var selectedPath = svgElement.selectAll("." + d.key.replace(/ /g,''));
								$("."+d.key.replace(/ /g,'')).slideDown(400).delay(400).fadeOut();                              
							}
							
						});	
						*/
                           
                    newXCord=0;
					
                    legendGrouping.selectAll('text')
                            .data(legendArray)
                            .enter()
                            .append("text")
                            .attr("x", function (d, i) {
								return legendPositionArray[i].textPos;
							})
							.attr("y",function(d,i){
								return (legendPositionArray[i].y)+legendHeight;
							})
							.attr("width", legendWidth)
                            .attr("height", legendHeight)
                            .attr("font-size", 12)
                           //.attr("dx", "1.50em")
                            //.attr("dy", "1.15em")
                            .text(function (d, i) {
								return d;
							});
								
					
						
					
					//hide axis path
					hideAxisPath(svgElement);
					
					//set font here
					setTextStyleAndSvgBackGround(svgElement);	
					
					
				}
		};
		
		
		
        return {
            drawLine: lineChart.drawLine,
            drawBarWithMultipleLineAndCircle: lineChart.drawBarWithMultipleLineAndCircle,
            squareChart: drawSquare.squareChart,
            areaChart: drawAreaChart.areaChart,
            circleChart: drawCircle.circleChart,
            pieChart: drawPieChart.pieChart,
			gaugeGraph: drawGauageGraph.gaugeGraph,
            drawYAxis: agnitioChart.drawYAxis,
            drawMulitpleLineChartWithSquare: agnitioChart.drawMulitpleLineChartWithSquare,

			
            setYSclae: drawBar.setYSclae,
            drawPyramidChart: pyramidChart.drawPyramidChart,
			draw3DPyramidChartWithoutSlice:pyramidChart.draw3DPyramidChartWithoutSlice,
			draw3DPyramidSliceChart:pyramidChart.draw3DPyramidSliceChart,
            drawRadarChart: radarChart.drawRadarChart,
            drawDrillDownChart: drillDownChart.drawDrillDownChart,
            drawPieChartWithTransition: pieChartWithTransition.drawPieChartWithTransition,
			dountChartWithLegend:pieChartWithTransition.dountChartWithLegend,
			drawDountWithBarChart:pieChartWithTransition.drawDountWithBarChart,
			multipleDountChartAnalysis:pieChartWithTransition.multipleDountChartAnalysis,
            drawHeatMapChart: heatMapChart.drawHeatMapChart,
            groupedBarChart: drawBar.groupedBarChart,
			groupedBar2DChart: drawBar.groupedBar2DChart,
			bulletBar:drawBar.bulletBar,
			cricketAnalysis:drawBar.cricketAnalysis,
			barWithLogo:drawBar.barWithLogo,
            drawScatterPlotChart: scatterPlotChart.drawScatterPlotChart,
            drawBasicLineChart: basicLineChart.drawBasicLineChart,
			drawThreeDBarChart: threeDBarChart.drawThreeDBarChart,
			drawStackedAreaChart: stackedAreaChart.drawStackedAreaChart,
			stackedBarChart:drawBar.stackedBarChart,
			drawFunnelChart:funnelChart.drawFunnelChart,
			areaChart:drawAreaChart.areaChart,
			meterChart:drawMeter.meterChart,
			turnNeedle:drawMeter.turnNeedle,
			drawCombinationalChart:combinationalChart.drawCombinationalChart,
			drawThreeDStackedBarChart: threeDStackedBarChart.drawThreeDStackedBarChart,
			variationAnalysis:darwVariationAnalysisGraph.variationAnalysis,
			areaChartWithNegativeValueAnalysis:areaChartWithNegativeValueGraph.areaChartWithNegativeValueAnalysis,
			areaChartWithVaryColorAnalysis:areaChartWithVaryColorGraph.areaChartWithVaryColorAnalysis,
			musicSpikesAnalysis:musicSpikesGraph.musicSpikesAnalysis,
			comparisonAnalysis:comparisonGraph.comparisonAnalysis,
			drawThreeDGroupedBarChart: threeDGroupedBarChart.drawThreeDGroupedBarChart,
			globChartAnalysis:globAnalysisGraph.globChartAnalysis,
			detailAnalysis:detailAnalysisGraph.detailAnalysis,
			threeDBubbleChart:drawThreeDBubbleChart.threeDBubbleChart,
			treeChart:drawTreeChart.treeChart,
			barWithLabelAnalysis:barWithLabelGraph.barWithLabelAnalysis,
			logoChart:drawLogoChart.logoChart,
			multiAxisChartAnalysis:multiAxisChartGraph.multiAxisChartAnalysis,
			candleChartAnaalysis:candleChartGraph.candleChartAnaalysis
			
			
		
        };
    };
})(jQuery);

function convertDateIntoYYMMDD(date) {
    var month = date.getMonth() + 1;
    var dateInDigit = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (dateInDigit < 10) {
        dateInDigit = "0" + dateInDigit;
    }
    var dateInString = date.getFullYear() + "-" + month + "-" + dateInDigit;
    return dateInString;
}


var meterChart={
			image:'',
			needle:'',
			plot:'',
			arc:'',
			prevdata:90,
			text:'',
            init:function(selectorId,imageURL){
						
						var width=d3.select("#"+selectorId).style("width");
						var height=d3.select("#"+selectorId).style("height");
						
						width=parseInt(width.replace("px",""));
						height=parseInt(height.replace("px",""))
						
						var svg = d3.select("#"+selectorId).append("svg")
						.attr("width", width)
						.attr("height", height)
						.append("g")
						.attr("transform","translate("+(width/4)+","+0+")");
						
						//Path inner and outer radius is adjusted
						this.arc = d3.svg.arc()
						.innerRadius(30)
						.outerRadius(120)
						.startAngle(120 * (Math.PI/180))
						.endAngle(240 * (Math.PI/180));

						//alert(height);
						//alert(width);

						var plot = svg
						.append("g")
						.attr("class", "arc");

						this.image = svg.append("svg:image")
						.attr('x',20)
						.attr('y',0)
						.attr('width', 300-20)
						.attr('height', 250)
						.attr("xlink:href","gauge_skin.jpg")
						.attr("id", "fillImage")
						//.on("click", turnNeedle);
						
						this.text = svg.append("svg:text")
                    
                         .attr("transform","translate(165,220)")
                         .attr("text-anchor", "middle")
                         .text("");

						this.needle = svg
						.append("g")
						.attr("class", "needle")
						.attr("transform", "translate( 20 , 70)")
						.append("path")
						.attr("class", "tri")
						.attr("d", "M" + (300/2 + 2) + " " + (120 + 10) + " L" + 300/2 + " 0 L" + (300/2 - 3) + " " + (120 + 10) + " C" + (300/2 - 3) + " " + (120 + 20) + " " + (300/2 + 3) + " " + (120 + 20) + " " + (300/2 + 3) + " " + (120 + 10) + " Z")
						.attr("transform", "rotate(-90, " + 300/2 + "," + (120 + 10) + ")");
				},

				turnNeedle:function(data)
				{    
					 
					if(data<0){
						 meterChart.text
						 .transition()
						.attr('stroke','red')
						.text(data);
					}
					else{
					     meterChart.text
						 .transition()
						 .attr('stroke','green')
						 .text(data);
					}
					this.needle
						.transition()
						.duration(1000)
						.attrTween("transform", tween);
					var x = this.getAngleFromCoordinate(meterChart.getCoordinateFromData(meterChart.prevdata));
					
					var y = this.getAngleFromCoordinate(meterChart.getCoordinateFromData(meterChart.getPercentFromAngle(meterChart.getAngleForProfitAndLoss(data))));				   
					
					function tween(d, i, a) {
						return d3.interpolateString("rotate("+ x +", 150, 130)", "rotate("+ y +", 150, 130)");
					}				
					
				},   

				getPercentFromAngle:function(data)
				{
					if(data < 0 && data >= -180)
						return -(data*5/9);
					else 
						return (data*5/9);
				},
				getAngleFromCoordinate:function(x)
				{
					var angle = 0;
					var intialSum = 90;
					return angle+= intialSum * x;
				},

				 getCoordinateFromData:function(percent)
				{
					var coodinate;
					  coordinate = ((percent/100) - (1-percent/100)) ;      
					
					return coordinate;    
				},
				 getRadianFromData:function(percent)
				{
					var coodinate;
					  coordinate = percent / 57.2958;      
					
					return coordinate;    
				},

				 callTurnNeedle:function()
				{
					   var x = (Math.random() * 100) ;

						meterChart.turnNeedle(x);
						meterChart.prevdata = x;
				},
				
				getAngleForProfitAndLoss:function(x)
				{
					var angle;
					
					if(x > 0 && x <= 100)
					{
							angle = 90 + (0.9 * x); 
					}
					else{	
					
							angle =  90 + (0.9 * x);
					}
					//console.log(angle);
					return angle;				
				}
				
}

/*dashboard charts*/
/*dashboard charts*/
/*dashboard charts*/
/*dashboard charts*/
StockMarketChartManager={
	xScaleHistoricChart:'',
	data:'',
	cmfConfigurations:'',
	lineChartConfiguration:'',
	powerGauageChartConfiguration:'',
	selectorContainerId:'',
	chartHeightMap:{},
	margin:{top:10,left:20,right:20,bottom:10},
	scalableLimit:2,
	areaSubsetArray:[],
	area:'',
	textLabelDx:50,
	dateArray:[],
	chartStyleMap:{"hlcChart":"block","cmfChart":"block","powerGaugeChart":"block"},
	
	drawStockMarketCharts:function(id,data,cmfConfigurations,lineChartConfiguration,powerGauageChartConfiguration,dateArray){
		
		StockMarketChartManager.selectorContainerId=id;
		
		//d3.select("#"+id).style("background","#3A5568");
		
		StockMarketChartManager.emptyCharts();
		StockMarketChartManager.getHeightOfEachChart();
		
		StockMarketChartManager.cmfConfigurations=cmfConfigurations;
		StockMarketChartManager.lineChartConfiguration=lineChartConfiguration;
		StockMarketChartManager.powerGauageChartConfiguration=powerGauageChartConfiguration;
		
		
		StockMarketChartManager.data=data;
		StockMarketChartManager.dateArray=dateArray;
		
		StockMarketChartManager.drawHLCChart(lineChartConfiguration);
		StockMarketChartManager.drawCmfChart(cmfConfigurations);
		StockMarketChartManager.drawPowerGauageChart(powerGauageChartConfiguration);
		StockMarketChartManager.drawTimeScale(dateArray);
		StockMarketChartManager.attachHoveringEffect();
		StockMarketChartManager.listenWindowResize();	
		StockMarketChartManager.appendToolTip();	
		//StockMarketChartManager.attachPanningAndZooming(StockMarketChartManager.xScaleHistoricChart,id);
		
	},
	listenWindowResize:function(){
		$(window).resize(function () {
			StockMarketChartManager.updateChartOnResize();
		});
	},
	attachHoveringEffect:function(){
		
		var containerId=StockMarketChartManager.selectorContainerId;
		var margin=StockMarketChartManager.margin;
		
		var dateArray= StockMarketChartManager.dateArray;
		var hlcData=StockMarketChartManager.lineChartConfiguration.data;
		var cmfData=StockMarketChartManager.cmfConfigurations.data;
		var powerGauageData=StockMarketChartManager.powerGauageChartConfiguration.data;
		
		var hlcHighFieldName=StockMarketChartManager.lineChartConfiguration["highFieldName"];
		var hlcCloseFieldName=StockMarketChartManager.lineChartConfiguration["closeFieldName"];
		var hlcLowFieldName=StockMarketChartManager.lineChartConfiguration["lowFieldName"];
		
		
		var cmfFieldName=StockMarketChartManager.cmfConfigurations["fieldName"];
		var powerGaugeFieldName=StockMarketChartManager.powerGauageChartConfiguration["pgrFieldName"];
		
		d3.select("#"+containerId)
		.on("mousemove",function(){
		    console.log("mousemove ");
			var xScale=StockMarketChartManager.xScaleHistoricChart;	
			var marginLeft=margin.left-margin.left*0.08;
			
			var pageX=event.pageX-$("#"+containerId).offset().left;
			var lineXPos=Math.round(xScale.invert(pageX));
			
			if(lineXPos<0 || lineXPos>(dateArray.length-1)){
				//console.log("out of bound");
				d3.select("#"+containerId)
				.selectAll(".drag-line")
				.style("display","none");
				
				StockMarketChartManager.hideToolTip();
			}
			else{
				d3.select("#"+containerId)
				.selectAll(".drag-line")
				.attr("x1",xScale(lineXPos))
				.attr("x2",xScale(lineXPos));
				
				var hlcHigh=hlcData[lineXPos][hlcHighFieldName];
				var hlcClose=hlcData[lineXPos][hlcCloseFieldName];
				var hlcLow=hlcData[lineXPos][hlcLowFieldName];
				
				var cmfValue=cmfData[lineXPos][cmfFieldName];
				var powerGaugeVal=powerGauageData[lineXPos][powerGaugeFieldName];
				
				console.log(hlcHigh+" :: "+"::"+hlcClose+" :: "+hlcLow+":: "+cmfValue +" :: "+powerGaugeVal + " :: "+dateArray[lineXPos]);
				
				 var yHeadingValueMap=[{"headingName":hlcCloseFieldName,"headingVal":hlcClose},
									   {"headingName":hlcHighFieldName,"headingVal":hlcHigh},
									   {"headingName":hlcLowFieldName,"headingVal":hlcLow},
									   {"headingName":cmfFieldName,"headingVal":cmfValue},
									   {"headingName":powerGaugeFieldName,"headingVal":powerGaugeVal}
									   
									  ];
				 
				StockMarketChartManager.showToolTip(d3.event, "", dateArray[lineXPos],false,yHeadingValueMap ,"");
				
				d3.select("#"+containerId)
				.selectAll(".drag-line")
				.style("display","block");
			}
		})
		.on("mouseleave",function(){
				StockMarketChartManager.hideToolTip();
				
				d3.select("#"+containerId)
				.selectAll(".drag-line")
				.style("display","none");
			
		})
	},
	updateChartOnResize:function(){
	
		var cmfConfigurations=StockMarketChartManager.cmfConfigurations;
		var lineChartConfiguration=StockMarketChartManager.lineChartConfiguration;
		var powerGauageChartConfiguration=StockMarketChartManager.powerGauageChartConfiguration;
		
		StockMarketChartManager.emptyCharts();
		
		//StockMarketChartManager.chartStyleMap[chartName]="none";
		
		var isShowHlC=StockMarketChartManager.chartStyleMap["hlcChart"];
		var isShowCMF=StockMarketChartManager.chartStyleMap["cmfChart"];
		var isShowPowerGauage=StockMarketChartManager.chartStyleMap["powerGaugeChart"];
		
		StockMarketChartManager.getHeightOfEachChart();
		//var data=StockMarketChartManager.data;
		if(isShowHlC == "block"){
			StockMarketChartManager.drawHLCChart(lineChartConfiguration);
		}
		
		if(isShowCMF == "block"){
			StockMarketChartManager.drawCmfChart(cmfConfigurations);
		}
		
		if(isShowPowerGauage == "block"){
			StockMarketChartManager.drawPowerGauageChart(powerGauageChartConfiguration);
		}
		
		var dateArray=StockMarketChartManager.dateArray;
		StockMarketChartManager.drawTimeScale(dateArray);
	},
	updateChartWithData:function(data){
		var id=StockMarketChartManager.selectorContainerId;
		var cmfConfigurations=StockMarketChartManager.cmfConfigurations;
		var lineChartConfiguration=StockMarketChartManager.lineChartConfiguration;
		var powerGauageChartConfiguration=StockMarketChartManager.powerGauageChartConfiguration;
		
		StockMarketChartManager.drawStockMarketCharts(id,data,cmfConfigurations,lineChartConfiguration,powerGauageChartConfiguration);
	},
	hideChart:function(chartName){
		var id=StockMarketChartManager.selectorContainerId;
		//d3.select("#"+id).select("."+chartName).style("display",'none');
		
		var cmfConfigurations=StockMarketChartManager.cmfConfigurations;
		var lineChartConfiguration=StockMarketChartManager.lineChartConfiguration;
		var powerGauageChartConfiguration=StockMarketChartManager.powerGauageChartConfiguration;
		
		
		
		StockMarketChartManager.emptyCharts();
		
		StockMarketChartManager.chartStyleMap[chartName]="none";
		
		var isShowHlC=StockMarketChartManager.chartStyleMap["hlcChart"];
		var isShowCMF=StockMarketChartManager.chartStyleMap["cmfChart"];
		var isShowPowerGauage=StockMarketChartManager.chartStyleMap["powerGaugeChart"];
		
		StockMarketChartManager.getHeightOfEachChart();
		//var data=StockMarketChartManager.data;
		if(isShowHlC == "block"){
			StockMarketChartManager.drawHLCChart(lineChartConfiguration);
		}
		
		if(isShowCMF == "block"){
			StockMarketChartManager.drawCmfChart(cmfConfigurations);
		}
		
		if(isShowPowerGauage == "block"){
			StockMarketChartManager.drawPowerGauageChart(powerGauageChartConfiguration);
		}
		
		var dateArray=StockMarketChartManager.dateArray;
		StockMarketChartManager.drawTimeScale(dateArray);
		
		
	},
	showChart:function(chartName){
		var id=StockMarketChartManager.selectorContainerId;
		//d3.select("#"+id).select("."+chartName).style("display",'block');
		
		StockMarketChartManager.chartStyleMap[chartName]="block";
		
		var isShowHlC=StockMarketChartManager.chartStyleMap["hlcChart"];
		var isShowCMF=StockMarketChartManager.chartStyleMap["cmfChart"];
		var isShowPowerGauage=StockMarketChartManager.chartStyleMap["powerGaugeChart"];
		
		var cmfConfigurations=StockMarketChartManager.cmfConfigurations;
		var lineChartConfiguration=StockMarketChartManager.lineChartConfiguration;
		var powerGauageChartConfiguration=StockMarketChartManager.powerGauageChartConfiguration;
		
		StockMarketChartManager.emptyCharts();
		
		StockMarketChartManager.getHeightOfEachChart();
		//var data=StockMarketChartManager.data;
		if(isShowHlC == "block"){
			StockMarketChartManager.drawHLCChart(lineChartConfiguration);
		}
		
		if(isShowCMF == "block"){
			StockMarketChartManager.drawCmfChart(cmfConfigurations);
		}
		
		if(isShowPowerGauage == "block"){
			StockMarketChartManager.drawPowerGauageChart(powerGauageChartConfiguration);
		}
		
		var dateArray=StockMarketChartManager.dateArray;
		StockMarketChartManager.drawTimeScale(dateArray);
		
	},
	attachPanningAndZooming:function(xScale,id){
		var panningAndZooming=d3.behavior.zoom().x(xScale).scaleExtent([1, 8]).on("zoom", zoom);					
		d3.select('#'+id).call(panningAndZooming);
		var scalableLimit=StockMarketChartManager.scalableLimit;
		
		var width=d3.select('#'+id).style("width").replace("px","");
		
		function zoom() {
			
			var t = panningAndZooming.translate(),
			tx = t[0],
			ty = t[1];

			tx = Math.min(tx, 0);
			tx = Math.max(tx, width -( scalableLimit*width) );
			panningAndZooming.translate([tx, ty]);
			/* 
			d3.select("#xAxisCloseDifference").call(xAxisHistoricCharts);
			
			historicChartSvg.select(".historicLineDema").attr('d',demaLine(historicChartData));
			d3.selectAll('.closePriceDifferenceRect').data(historicChartData)
			.attr('x',function(d){ //console.log("update rect");
			return xScaleHistoricChart(parseDate.parse(d.timeIndex));})
			.attr('y',function(d){ return yScaleCloseDifference(d.close);});
			
			d3.selectAll('.closeBar').data(historicChartData)
						.attr('x',function(d){
							return xScaleHistoricChart(parseDate.parse(d.timeIndex));
						})
						.attr('y',function(d){
							return yScaleHistoricChart(d.close);
						});
			*/	
			
			var datRef=d3.selectAll('.money-flow-area ').data([StockMarketChartManager.areaSubsetArray])
			.attr('d',function(d){return StockMarketChartManager.area(d);});
			
			
		} 
	},
	emptyCharts:function(){
		var id=StockMarketChartManager.selectorContainerId;
		document.getElementById(""+id).innerHTML="";
		
	},
	getHeightOfEachChart:function(){
		var id=StockMarketChartManager.selectorContainerId;
		
		var containerHeight=d3.select("#"+id).style("height");
		
		containerHeight=parseInt(containerHeight.replace("px",""));
		
		var  chartHeightMap={"cmf":'',"hlc":"","powergauage":""};
		
		var cmfChartDisplay=StockMarketChartManager.chartStyleMap["cmfChart"];
		var lineChartDisplay=StockMarketChartManager.chartStyleMap["hlcChart"];
		var powerGauageChartDisplay=StockMarketChartManager.chartStyleMap["powerGaugeChart"];
		
		/*
		try{
			cmfChartDisplay=d3.select("#"+id).select(".cmfChart").style("display");
		}
		catch(err){
			console.log("cmf chart not exist");
		}
		
		try{
			lineChartDisplay=d3.select("#"+id).select(".hlcChart").style("display");
		}
		catch(err){
			console.log("line chart not exist");
		}
		
		try{
			powerGauageChartDisplay=d3.select("#"+id).select(".powerGaugeChart").style("display")
		}
		catch(err){
			console.log("gauage chart not exist");
		}
		*/
		
		var midHeight= containerHeight/2;	
		//height of hlc
		var hlcHeight=containerHeight;
		if(powerGauageChartDisplay == 'block'){
			hlcHeight=hlcHeight-midHeight/3;
		}
		
		if(cmfChartDisplay == "block"){
			hlcHeight=hlcHeight-midHeight/1.5;
		}
		
		
		//cmf height
		var cmfHeight=containerHeight;
		if(powerGauageChartDisplay == "block"){
			cmfHeight=cmfHeight-midHeight/3;
			//console.log("********cmf height removed ****");
		}
		
		if(lineChartDisplay == "block"){
			cmfHeight=cmfHeight-midHeight;
		}
		
		var powerGauageHeight=midHeight/6;
		
		chartHeightMap.cmf=cmfHeight;
		chartHeightMap.hlc=hlcHeight;
		chartHeightMap.powergauage=powerGauageHeight;
		
		StockMarketChartManager.chartHeightMap=chartHeightMap;
		
	},
	generateXScale:function(){
		var xMin=d3.min(dateArray.map( function(d) { return parseDate.parse(d);}));
		var xMax=d3.max(dateArray.map(function(d) { return parseDate.parse(d);}));
		xScaleHistoricChart=d3.time.scale().range([0, (historicalChartWidth*scalableLimit)]).domain([xMin,xMax]);
		
	},
	drawCmfChart:function(cmfChartConfigration){
		
		var id=StockMarketChartManager.selectorContainerId;
		var margin=StockMarketChartManager.margin;
		var scalableLimit=StockMarketChartManager.scalableLimit;
		
		var data=cmfChartConfigration.data;
		var cmfFieldName=cmfChartConfigration.fieldName;
		var chartHeightMap=StockMarketChartManager.chartHeightMap;
		
		
		var width=d3.select("#"+id).style("width");
		var height=chartHeightMap.cmf;
		
		width=parseInt(width.replace("px",""));
		
		var widthDomain=width-margin.left-margin.right;
		var heightDomain=height-margin.top-margin.bottom;
		
		
		
		var chart = d3.select("#"+id)
            .append("svg:svg")
            .attr("class", "cmfChart")
			.attr("id","cmfChart")
            .attr("width",width)
            .attr("height",height);
			
		
		var clipCMF = chart.append("defs").append("svg:clipPath")
		.attr("id", "clip1")
		.append("svg:rect")
		.attr("id", "clip-rect")
		.attr("x", "0")
		.attr("y", "0")
		.attr("width", width)
		.attr("height",height);	
		
		var cmfClipGrouping=chart.append('g').attr("clip-path", "url(#clip1)")
		
        if (data == undefined || data.length == 0) return;
		
		for (var i=0; i < data.length; i++) {
			var e=data[i];
			for (var k in e) {
				if (isNaN(e[k]) || e[k] == null){
					//console.log("value befor "+e[k]);
					e[k]="N/A";
					// console.log("value after "+e[k]);
				}
			}
			data[i]=e;
					
		}
		
		var moneyFlowArray=new Array();
		for(var i=0;i<data.length;i++){
			if(data[i][cmfFieldName] != "N/A"){
				moneyFlowArray.push(data[i][cmfFieldName]);
			}
			//data[i].timeIndex=data[i].timeIndex1;
		}
		
		moneyFlowArray.sort(function(a,b){
			if(a>b){
				return 1; 
			}
			else if(b>a){
				return -1;
			}
			else{
				return 0;
			}
		});
		
		var min=moneyFlowArray[0];
		var max=moneyFlowArray[moneyFlowArray.length-1];
		
		var midPoint=0;//(min+max)/2;
		
		
		var yScale = d3.scale.linear()
		.domain([min,max])
		.range([heightDomain-margin.bottom, margin.top]);
		
		var xScale = d3.scale.linear()
            .domain([d3.min(data.map(function (d) {
                return d.timeIndex;
            })), d3.max(data.map(function (d) {
                return d.timeIndex;
            }))])
			.range([margin.left, (widthDomain)]);
            //.range([margin.left, (widthDomain)*scalableLimit]);
		
		StockMarketChartManager.xScaleHistoricChart=xScale;
		
		// console.log("money flow min "+min +" max Money flow "+max);
		
		var textLabelDx=StockMarketChartManager.textLabelDx;
		
        cmfClipGrouping.append("line")
            .attr("class", "divider")
            .attr("x1", xScale(data[0].timeIndex))
            .attr("y1", yScale(midPoint))
            .attr("x2", xScale(data[data.length - 1].timeIndex))
            .attr("y2", yScale(midPoint));
		
		cmfClipGrouping.append("text")
            .attr("class", "yrule")
            .attr("x", widthDomain - margin.right+textLabelDx)
            .attr("y", yScale(midPoint))
            .attr("dy", 0)
            .attr("dx","-1.2em")
            .attr("text-anchor", "end")
            .text(parseFloat(midPoint).toFixed(2))
			.style("color","#FFFFFF")
			.attr("fill","white");
		
		
		var turningPoints = [0];

        $(data).each(function (index, datum) {
            if (index > 0) {
				if(!isNaN(data[index - 1][cmfFieldName]) && !isNaN(datum[cmfFieldName])){
					if (sign(data[index - 1][cmfFieldName]) != sign(datum[cmfFieldName]) && datum[cmfFieldName] != 0) {
						turningPoints.push(index);
					}
				}
				else{
					turningPoints.push(index);
				}
            }
        });
		
		/*
		$(data).each(function(i,obj){
			console.error("obj "+obj[cmfFieldName]);
		});
		*/
		
        turningPoints.push(data.length - 1);
		
		var alternatingStyle = data[0][cmfFieldName] > midPoint;
        var lastMidPointTimeStamp;
        $(turningPoints).each(function (index, tp0) {
            var subset;
            if (index != turningPoints.length - 1) {
                var tp1 = turningPoints[index + 1];
				//console.log("INDEX "+index + "index next  "+(index+1));
                subset = data.slice(tp0, tp1);
                if (lastMidPointTimeStamp != undefined) {
                    subset.unshift({
                        timeIndex: lastMidPointTimeStamp,
                        MoneyFlow: midPoint
                    });
                }
                lastMidPointTimeStamp = Math.round((data[tp1 - 1].timeIndex + data[tp1].timeIndex) / 2);
				
                
				var mFlow;
				if(tp1!=tp0 && tp1!=data.length-1){
					// < data.length - 1){
					mFlow=midPoint;
				}
				else{
					if(data[tp1][cmfFieldName]=="N/A"){
						mFlow=midPoint;
					}
					else{
						mFlow=data[tp1][cmfFieldName];
					}
				}
				

				subset.push({
					timeIndex: (tp1 + 1 <= data.length - 1) ? lastMidPointTimeStamp : data[data.length - 1].timeIndex+1,
					MoneyFlow:mFlow 
				});
				//console.log(data.length-1);
				if(data[data.length-1][cmfFieldName]>0 && data[data.length-2][cmfFieldName]<0 && tp1== (data.length-1) && tp1!=tp0 ){
					// console.log('splice');
					subset.splice(-1,1);
					subset.push({
						timeIndex: (tp1 + 1 <= data.length - 1) ? lastMidPointTimeStamp : data[data.length - 1].timeIndex+1,
						MoneyFlow:midPoint
					});
				}
				else if((data[data.length-1][cmfFieldName]<0 && data[data.length-2][cmfFieldName]>0) && tp1==data.length-1  && tp1!=tp0){
					// console.log('splice');
					subset.splice(-1,1);
					subset.push({
						timeIndex: (tp1 + 1 <= data.length - 1) ? lastMidPointTimeStamp : data[data.length - 1].timeIndex+1,
						MoneyFlow:midPoint
					});
				}
				
				else if((tp1!=tp0 && tp1==data.length-1)){
					subset.push({
						timeIndex: (tp1 + 1 <= data.length - 1) ? lastMidPointTimeStamp : data[data.length - 1].timeIndex+1,
						MoneyFlow:midPoint
					});
				}
				
				if(data[tp0].cmfFieldName == "N/A"){
					alternatingStyle=(data[tp1][cmfFieldName] >= midPoint);
				}
				else{	
              	
                  alternatingStyle=(data[tp0][cmfFieldName] >= midPoint);
				}
                
				//StockMarketChartManager.area = d3.svg.area()
				var area = d3.svg.area()
                    .x(function (d) {
						//console.log("time indewx "+xScale(d.timeIndex))
                        return xScale(d.timeIndex);
                    })
                    .y0(yScale(midPoint))
                    .y1(function (d) {
						
						if(d[cmfFieldName]!="N/A"){
							//console.log("cmf "+d[cmfFieldName] +" y "+yScale(d[cmfFieldName]));
							if(d[cmfFieldName] !=undefined){
								return yScale(d[cmfFieldName]);
							}else{
								//console.log("undefined");
								return yScale(midPoint);
							}
							
						}else{
							console.log("0 "+yScale(midPoint));
							return yScale(midPoint);
						}
                        
                    })
                    .interpolate("basis");
				
				$(subset).each(function(i,obj){
					//console.log("cmfsss "+obj[cmfFieldName] +" y "+yScale(obj[cmfFieldName]));
					if(obj[cmfFieldName] === undefined){
						//console.log("undeifne condi");
						obj[cmfFieldName]="N/A";
					}
					StockMarketChartManager.areaSubsetArray.push(obj);
				});
				
				
                cmfClipGrouping.append("path")
                    .datum(subset)
                    .attr("class", "money-flow-area " + ((alternatingStyle) ? "positive" : "negative"))
					.attr('fill',function(){
						if(alternatingStyle){
							return "green"
						}else{
							return "red";
						}
						
					})
                    .attr("d", area(subset));
				
            }
        });

		function sign(x) {
            return x > midPoint ? 1 : x < midPoint ? -1 : 0;
        }
		
		//append tool tip
		chart
		.append("line")
		.attr("x1",5)
		.attr("x2",5)
		.attr("y1",0)
		.attr("y2",height)
		.attr("class","drag-line")
		.style("display","none")
		.style("stroke","#FFFFFF")
		.style("stroke-width","2px");
	
	},
	drawHLCChart:function(lineChartConfiguration){
		var id=StockMarketChartManager.selectorContainerId;
		var margin=StockMarketChartManager.margin;
		var scalableLimit=StockMarketChartManager.scalableLimit;
		
		var data=lineChartConfiguration.data;
		var highFieldName=lineChartConfiguration.highFieldName;
		var closeFieldName=lineChartConfiguration.closeFieldName;
		var lowFieldName=lineChartConfiguration.lowFieldName;
		var highBand=lineChartConfiguration.HighBand;
		var lowBand=lineChartConfiguration.LowBand;
		var band=lineChartConfiguration.Band;
		var trend=lineChartConfiguration.Trend;
		
		var chartHeightMap=StockMarketChartManager.chartHeightMap;
		
		for (var i=0; i < data.length; i++) {
			var e=data[i];
			for (var k in e) {
				if (isNaN(e[k]) || e[k] == null){
					//console.log("value befor "+e[k]);
					e[k]="N/A";
					// console.log("value after "+e[k]);
				}
			}
			data[i]=e;
					
		}
		
		var width=d3.select("#"+id).style("width");
		var height=chartHeightMap.hlc;
		
		width=parseInt(width.replace("px",""));
		
		var widthDomain=width-margin.left-margin.right;
		var heightDomain=height-margin.top-margin.bottom;
		
		var chart = d3.select("#"+id)
            .append("svg:svg")
            .attr("class", "hlcChart")
			.attr("id","hlcChart")
            .attr("width",width)
            .attr("height",height);
		
		var min = getMinRange(data);

        var max = getMaxRange(data);
		
		var yScale = d3.scale.linear()
		.domain([min,max])
		.range([heightDomain-margin.bottom, margin.top]);
		
		var xScale = d3.scale.linear()
            .domain([d3.min(data.map(function (d) {
                return d.timeIndex;
            })), d3.max(data.map(function (d) {
                return d.timeIndex;
            }))])
			.range([margin.left, (widthDomain)]);
            //.range([margin.left, (widthDomain)*scalableLimit]);
		
		StockMarketChartManager.xScaleHistoricChart=xScale;	
		
		
		/*
       chart.selectAll("line.x")
            .data(xScale.ticks(10))
            .enter().append("svg:line")
            .attr("class", "x")
            .attr("x1", xScale)
            .attr("x2", xScale)
            .attr("y1", marginBottom)
            .attr("y2", chartHeight - marginTop)
            .attr("stroke", "#ccc");

        chart.selectAll("line.y")
            .data(yScale.ticks(10))
            .enter().append("svg:line")
            .attr("class", "y")
            .attr("x1", marginLeft)
            .attr("x2", width - marginRight)
            .attr("y1", yScale)
            .attr("y2", yScale)
            .attr("stroke", "#ccc");
		*/
		var textLabelDx=StockMarketChartManager.textLabelDx;
		
        chart.selectAll("text.yrule")
            .data(yScale.ticks(10))
            .enter().append("svg:text")
            .attr("class", "yrule")
            .attr("x", widthDomain - margin.right + textLabelDx)
            .attr("y", yScale)
            .attr("dy", 0)
            .attr("dx", 0)
            .attr("text-anchor", "end")
			.style("color","#FFFFFF")
			.style("font-size","12px")
            .attr("fill","#FFFFFF")
			.append("tspan")
			.text(function (d) {
                return (new Number(d)).toFixed(2) + "";
            })
			
			
			
		
        chart.selectAll("line.close")
            .data(data)
            .enter().append("svg:line")
            .attr("class", "close")
            .attr("x1", function (d) {
                return xScale(d.timeIndex) + 0.25 * (widthDomain) / data.length - 0.5;
            })
            .attr("y1", function (d) {
				//console.log("d.close "+d.Close +"scale  "+yScale(d.Close));
				if(d[closeFieldName]!="N/A"){
					return yScale(d[closeFieldName]);
				}else{
					$(this).select("line.close").attr('class','NA');
					return yScale(0);
				}
            })
            .attr("x2", function (d) {
                return xScale(d.timeIndex) + 0.25 * (widthDomain - (margin.left + margin.right)) / data.length + 2;
            })
            .attr("y2", function (d) {
                if(d[closeFieldName]!="N/A"){
                return yScale(d[closeFieldName]);
				}else{
					$(this).select("line.close").attr('class','NA');
					return yScale(0);
				}
            })
			.style("stroke","#15c515")
			.attr("stroke-width",'1px');
		
        chart.selectAll("line.stem")
            .data(data)
            .enter().append("svg:line")
            .attr("class", "stem")
            .attr("x1", function (d) {
                return xScale(d.timeIndex) + 0.25 * (widthDomain - (margin.left + margin.right)) / data.length;
            })
            .attr("x2", function (d) {
                return xScale(d.timeIndex) + 0.25 * (widthDomain - (margin.left + margin.right)) / data.length;
            })
            .attr("y1", function (d) {
				if(d[highFieldName]!="N/A"){
					//chart.select("line.stem").attr('class','NA');
                return yScale(d[highFieldName]);
				}else{
					$(this).select("line.stem").attr('class','NA');
					return yScale(0);
				}
                
            })
            .attr("y2", function (d) {
				
				if(d[lowFieldName]!="N/A"){
					return yScale(d[lowFieldName]);
				}else{
					$(this).select("line.stem").attr('class','NA');
					return yScale(0);
				}
                
            })
			.attr("stroke",'#15c515')
			.attr("stroke-width","1px");
		
		
        var highBandFunction = d3.svg.line()
            .x(function (d) {
                return xScale(d.timeIndex);
            })
            .y(function (d) {
                return yScale(d[highBand]);
            })
            .interpolate("linear").defined(function (d) {
                return d[highBand] != 0;
            }).defined(function (d) {
                return (d[highBand] != "N/A" && d[highBand]!=0);
            });

        var lowBandFunction = d3.svg.line()
            .x(function (d) {
                return xScale(d.timeIndex);
            })
            .y(function (d) {
                return yScale(d[lowBand]);
            })
            .interpolate("linear").defined(function (d) {
                return d[lowBand] != 0;
            })
			.defined(function (d) {
                return (d[lowBand] != "N/A" && d[lowBand]!=0);
            });
		
        var bandFunction = d3.svg.line()
            .x(function (d) {
                return xScale(d.timeIndex);
            })
            .y(function (d) {
                return yScale(d[band]);
            })
            .interpolate("linear").defined(function (d) {
                return d[band] != 0;
            })
			.defined(function (d) {
                return (d[band] != "N/A" && d[band]!=0);
            });

        var trendFunction = d3.svg.line()
            .x(function (d) {
                return xScale(d.timeIndex);
            })
            .y(function (d) {
                return yScale(d[trend]);
            })
            .interpolate("linear")
            .defined(function (d) {
                return (d[trend] != 0 && d[trend]!="N/A");
            });
		

        chart.selectAll("path.high-band")
            .data([data])
            .enter()
            .append("path")
            .attr("class", "high-band band")
            .style("stroke-dasharray", ("1, 4"))
            .attr("d", highBandFunction)
            .attr("stroke-width", 2)
            .attr("fill", "none")
			.attr("stroke-dasharray","1px, 4px")
			.attr("stroke",'#fcfcfc');

        chart.selectAll("path.low-band")
            .data([data])
            .enter()
            .append("path")
            .attr("class", "low-band band")
            .style("stroke-dasharray", ("1, 4"))
            .attr("d", lowBandFunction)
            .attr("stroke-width", 2)
            .attr("fill", "none")
			.attr("stroke-dasharray","1px, 4px")
			.attr("stroke",'#fcfcfc');
		
        chart.selectAll("path.mid-band")
            .data([data])
            .enter()
            .append("path")
            .attr("class", "band mid-band")
            .style("stroke-dasharray", ("1, 4"))
            .attr("d", bandFunction)
			.attr("stroke-width", 1)
            .attr("fill", "none")
			.attr("stroke",'#fcfcfc');

        chart.selectAll("path.trend")
            .data([data])
            .enter()
            .append("path")
            .attr("class", "trend")
            .attr("d", trendFunction)
            .attr("fill", "none")
			.attr("stroke","#e38502")
			.attr("stroke-width","1px");
		
		//append tool tip
		chart
		.append("line")
		.attr("x1",5)
		.attr("x2",5)
		.attr("y1",0)
		.attr("y2",height)
		.attr("class","drag-line")
		.style("display","none")
		.style("stroke","#FFFFFF")
		.style("stroke-width","2px");
		
		
	},
	drawPowerGauageChart:function(powerGauageConfiguration){
		var id=StockMarketChartManager.selectorContainerId;
		var margin=StockMarketChartManager.margin;
		var scalableLimit=StockMarketChartManager.scalableLimit;
		
		var data=powerGauageConfiguration.data;
		var powerGauageFieldName=powerGauageConfiguration.pgrFieldName;
		var pgrColorMap=powerGauageConfiguration.pgrColorMap;
		
		var chartHeightMap=StockMarketChartManager.chartHeightMap;
		
		
		for (var i=0; i < data.length; i++) {
			var e=data[i];
			for (var k in e) {
				if (isNaN(e[k]) || e[k] == null){
					//console.log("value befor "+e[k]);
					e[k]="N/A";
					// console.log("value after "+e[k]);
				}
			}
			data[i]=e;
					
		}
		
		var width=d3.select("#"+id).style("width");
		var height=chartHeightMap.powergauage;
		
		width=parseInt(width.replace("px",""));
		
		var widthDomain=width-margin.left-margin.right;
		var heightDomain=height-margin.top-margin.bottom;
		
		var chart = d3.select("#"+id)
            .append("svg:svg")
            .attr("class", "power-gauage")
			.attr("id","power-gauage")
            .attr("width",width)
            .attr("height",height);
		
		
		var max = d3.max(data.map(function (x) {
            return x["powerGauageFieldName"];
        }));

        var min = d3.min(data.map(function (x) {
            return x["powerGauageFieldName"];
        }));

		var yScale = d3.scale.linear()
		.domain([min,max])
		.range([heightDomain-margin.bottom, margin.top]);
		
		var xScale = d3.scale.linear()
            .domain([d3.min(data.map(function (d) {
                return d.timeIndex;
            })), d3.max(data.map(function (d) {
                return d.timeIndex;
            }))])
			.range([margin.left, (widthDomain)]);
            //.range([margin.left, (widthDomain)*scalableLimit]);
		
		StockMarketChartManager.xScaleHistoricChart=xScale;	
		
		var rectwidth = (xScale(data[1].timeIndex) - xScale(data[0].timeIndex));
		//console.log("recangle width "+rectwidth  +": i+1 timeIndex "+data[1].timeIndex +"  i timeIndex "+data[0].timeIndex);

        chart.selectAll("rect.rel-strength")
            .data(data)
            .enter()
            .append("svg:rect")
            .attr("class", "rel-strength")
            .attr("x", function (d) {
                return xScale(d.timeIndex);
            })
            .attr("y", function (d) {
                return 0;
            })
            .attr("width", rectwidth)
            .attr("height", heightDomain)
            .attr("fill", function (d) {
				return pgrColorMap[d[powerGauageFieldName]];
            })
            .attr("stroke", function (d) {
                return pgrColorMap[d[powerGauageFieldName]];
            });

		//append tool tip
		chart
		.append("line")
		.attr("x1",5)
		.attr("x2",5)
		.attr("y1",0)
		.attr("y2",height)
		.attr("class","drag-line")
		.style("display","none")
		.style("stroke","#FFFFFF")
		.style("stroke-width","2px");
		
	},
	drawTimeScale:function(dateArray){
	
		var xScale=StockMarketChartManager.xScaleHistoricChart;	
		var id=StockMarketChartManager.selectorContainerId;
		var margin=StockMarketChartManager.margin;
		
		var width=d3.select("#"+id).style("width");
		var height=30;
		
		width=parseInt(width.replace("px",""));
		
		var widthDomain=width-margin.left-margin.right;
		var heightDomain=20;
		
		var shown = {};
		var ticks=[];
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		
		var tickArray={};
		$(dateArray).each(function (i, d) {
			var date = new Date(d);
			if (shown[date.getMonth() + "-" + date.getYear()] == undefined
				&& date.getDate() < 15) {
				ticks.push(d);
				tickArray[d]=i;
				shown[date.getMonth() + "-" + date.getYear()] = true;
			}
         });
		
		
		for(var key in tickArray){
			console.log("keys    "+key +" value "+tickArray[key]);
		}
		var initialDate=new Date(ticks[0]);
		var counter=0;
		

		var svgSelection=d3.select("#"+id)
							.append("svg:svg")
							.attr("class", "time-axis")
							.attr("id","time-axis")
							.attr("width",width)
							.attr("height",height);
		/*	
		var timeAxisConatiner=svgSelection.append("div")
							.attr("class","time-axis")
							.attr("width",widthDomain)
							.attr("height",heightDomain)
							.attr("x",xScale(0))
							.attr("y",heightDomain);
		*/			
		/*
		var axis= d3.svg.axis()
                  .scale(xScale);
		
		svgSelection.call(axis).selectAll("text").attr("text",function(d,i){
			console.log("text "+d +"tick val "+tickArray[d]);
			if(tickArray[d]){
				var date=new Date(tickArray[d]);
				console.log("show me"+months[date.getMonth()]);
				return months[date.getMonth()];
			}else{
				return "";
			}
		});*/
			
		var tickGrouping=svgSelection.selectAll("div.tick")
		.data(ticks)
		.enter()
		.append("g")
		.attr("class", "tick")
		.attr("transform",function(d){
			console.log("xScale  "+xScale(tickArray[d]));
			var left= xScale(tickArray[d]);		
			return "translate("+left+"," + (margin.top) + ")";
		});
		
		tickGrouping
		.append("text")
		.style("color","#FFFFFF")
		.style("font-size","12px")
		.attr("fill","#FFFFFF")
		.text(function (d, i) {
			var date = new Date(d);

			if(i==0){
				// console.error("'" + (initialDate.getFullYear() + "").substr(2,3));
				return "'" + (initialDate.getFullYear() + "").substr(2,3);
			}

			return months[date.getMonth()];
		});
		/*
		.attr("x",function(d){
			console.log("xScale  "+xScale(tickArray[d]));
			return xScale(tickArray[d]);
		});
		
		.style("left", function (d) {
			return Math.round(xScale(d)) - 30 + "px";
		});
		*/
		
		//append tool tip
		svgSelection
		.append("line")
		.attr("x1",5)
		.attr("x2",5)
		.attr("y1",0)
		.attr("y2",height)
		.attr("class","drag-line")
		.style("display","none")
		.style("stroke","#FFFFFF")
		.style("stroke-width","2px");
	},
	appendToolTip:function(){
		var tootTipTemplate ='<div id="tooltipChart-stock-market" style="z-index:99999;float:none;display:none; margin:0px; padding:0px; position:absolute; width:150px;">'+
				'<div id="textContainer" style="width:150px; background-color:#eeeeee; border:solid 1px #666666; box-shadow:5px 5px 5px #5d5d5d; border-radius:7px; font-family:calibri; float:left; font-size:11px; padding:10px;">'+
				'	<div class="xVal" style="text-align:center; font-size:13px; background-color:#6699cc; border-top-left-radius:7px; margin-top:-10px; margin-left:-10px;  margin-right:-10px;border-top-right-radius:7px; padding:5px 10px;">14 jan</div>'+
					'<div id="y-label" class="y-label label1" style="width:60%;display:none; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
					'<div  class="yVal label1" style="width:40%; float:right;display:none; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label2" style="width:60%; float:left;display:none; text-align:left; padding:3px 0;">Auto Loans</div>'+
			'		<div class="yVal label2" style="width:40%;display:none; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label3" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
			
			'		<div class="yVal label3" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label4" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
			
			'		<div class="yVal label4" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label5" style="width:60%; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
			
			'		<div class="yVal label5" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'	</div>'+
			//'	<div id="handIcon" style="position: relative; bottom:1px; height:40px; width:36px; '+
			//'	 background:url(http://www.stocinn.com/stoccharts/img/toolTips-arrow.png) no-repeat; clear:both; float:right; margin-bottom:-2px; right:-27px;">'+
			//'	 </div>'+
			'</div>';
		
		var id=StockMarketChartManager.selectorContainerId;	
		$('body').append(tootTipTemplate);
				
	},
	showToolTip: function (e, yValArg, xValArg, hideXVal, yHeadingMap) {
				
				
				
		var x = e.pageX;
		
		var y; 
		
		y=e.pageY;
		


		var yVal;
		yVal = yValArg;


		var timeVal;

		timeVal = xValArg;
		$('#tooltipChart-stock-market').find('.xVal').html("");
		
		$('#tooltipChart-stock-market').find('.xVal').html(timeVal);
		 
		//blank yLabel	
		$('#tooltipChart-stock-market').find('.y-label').html("");
		
		//blank yVal
		$('#tooltipChart-stock-market').find('.yVal').html("");
		
		//hide all  yLabel and yVal
		$('#tooltipChart-stock-market').find('.yVal').hide();
		$('#tooltipChart-stock-market').find('.y-label').hide();
		
		var toolTipRef=$('#tooltipChart-stock-market');
		//get YHeadingNames width Values and iterate to update yLabel and YVal 
		for(var i=0;i<yHeadingMap.length;i++){
			var headingObj=yHeadingMap[i];
			var counter=i+1;
			var yLabelClass=".y-label.label"+counter;
			var yValClass=".yVal.label"+counter;
			$(toolTipRef).find(yLabelClass).html(headingObj.headingName);
			$(toolTipRef).find(yValClass).html(headingObj.headingVal);
			
			$(toolTipRef).find(yValClass).show();
			$(toolTipRef).find(yLabelClass).show();
		}
		
		
		var marginLeft = x;
		if ($(".ps-scrollbar-x-rail")) {
			try {
				marginLeft += parseInt($(".ps-scrollbar-x-rail").css('left').replace("px", ''));
			} catch (err) {

			}
		}

		var tooTipElem = $('body').find("#tooltipChart-stock-market");
		var toolTipTextContainer = $(tooTipElem).find("#textContainer");
		
		
		var marginTop = y - ($("body").find("#tooltipChart-stock-market").height()*0.9);
		marginLeft=marginLeft-($("body").find("#tooltipChart-stock-market").width()*0.95);
		
		if((marginLeft-$(tooTipElem).width())<170){
			marginLeft=marginLeft*0.5+$(tooTipElem).width();
			
			//$(tooTipElem).find("#handIcon").css("right","94px");
		}else{
			//$(tooTipElem).find("#handIcon").css("right","-14px");
		}
		
		console.log("page y "+marginTop +"y "+y);
		
		$('body').find("#tooltipChart-stock-market").css("left", marginLeft);
		
		//keep margintop fixed for stock market chart
		var id=StockMarketChartManager.selectorContainerId;	
		
		var heightOfContainer=parseInt(d3.select("#"+id).style("height").replace("px",""));
		
		$('body').find("#tooltipChart-stock-market").css("top",heightOfContainer/2);
		//console.log("sss");
		$('body').find("#tooltipChart-stock-market").show();

	},
	hideToolTip: function () {
			$('#tooltipChart-stock-market').find('.yVal').html("");
			d3.select("#tooltipChart-stock-market").style('display', 'none');
	}
}
	
	function getMinRange(data) {
		//return Math.min(Math.min(getMinFromArray(data, "Trend"), getMinFromArray(data, "LowBand")), getMinFromArray(data, "Low"));
        return Math.min(Math.min(getMinFromArray(data, "Trend"), getMinFromArray(data, "LowBand")), getMinFromArray(data, "Low"),getMinFromArray(data, "Close"));
    }

    function getMaxRange(data) {
        //return Math.max(Math.max(getMaxFromArray(data, "Trend"), getMaxFromArray(data, "HighBand")), getMaxFromArray(data, "High"));
		return Math.max(Math.max(getMaxFromArray(data, "Trend"), getMaxFromArray(data, "HighBand")), getMaxFromArray(data, "High"),getMaxFromArray(data, "Close"));
    }

    function getMinFromArray(array, field) {
        var min = Number.MAX_VALUE;

        angular.forEach(array, function (d) {
            if (d[field] < min && d[field] != 0)
                min = d[field];
        });

        /*if (min == Number.MAX_VALUE)
            return undefined;*/

        return min;
    }

    function getMaxFromArray(array, field) {
        var max = -Number.MAX_VALUE;

        angular.forEach(array, function (d) {
            if (d[field] > max && d[field] != 0)
                max = d[field];
        });

        if (max == Number.MIN_VALUE)
            return undefined;

        return max;
    }

	