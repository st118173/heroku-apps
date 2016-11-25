!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t="ui-effects-",i=e;return e.effects={effect:{}},function(e,t){function i(e,t,i){var n=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=u(),n=i._rgba=[];return t=t.toLowerCase(),f(l,function(e,r){var s,o=r.re.exec(t),a=o&&r.parse(o),l=r.space||"rgba";if(a)return s=i[l](a),i[d[l].cache]=s[d[l].cache],n=i._rgba=s._rgba,!1}),n.length?("0,0,0,0"===n.join()&&e.extend(n,s.transparent),i):s[t]}function r(e,t,i){return i=(i+1)%1,6*i<1?e+(t-e)*i*6:2*i<1?t:3*i<2?e+(t-e)*(2/3-i)*6:e}var s,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=e.Color=function(t,i,n,r){return new e.Color.fn.parse(t,i,n,r)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=u.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(r,o,a,l){if(r===t)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(o),o=t);var c=this,h=e.type(r),p=this._rgba=[];return o!==t&&(r=[r,o,a,l],h="array"),"string"===h?this.parse(n(r)||s._default):"array"===h?(f(d.rgba.props,function(e,t){p[t.idx]=i(r[t.idx],t)}),this):"object"===h?(r instanceof u?f(d,function(e,t){r[t.cache]&&(c[t.cache]=r[t.cache].slice())}):f(d,function(t,n){var s=n.cache;f(n.props,function(e,t){if(!c[s]&&n.to){if("alpha"===e||null==r[e])return;c[s]=n.to(c._rgba)}c[s][t.idx]=i(r[e],t,!0)}),c[s]&&e.inArray(null,c[s].slice(0,3))<0&&(c[s][3]=1,n.from&&(c._rgba=n.from(c[s])))}),this):void 0},is:function(e){var t=u(e),i=!0,n=this;return f(d,function(e,r){var s,o=t[r.cache];return o&&(s=n[r.cache]||r.to&&r.to(n._rgba)||[],f(r.props,function(e,t){if(null!=o[t.idx])return i=o[t.idx]===s[t.idx]})),i}),i},_space:function(){var e=[],t=this;return f(d,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=u(e),r=n._space(),s=d[r],o=0===this.alpha()?u("transparent"):this,a=o[s.cache]||s.to(o._rgba),l=a.slice();return n=n[s.cache],f(s.props,function(e,r){var s=r.idx,o=a[s],u=n[s],d=c[r.type]||{};null!==u&&(null===o?l[s]=u:(d.mod&&(u-o>d.mod/2?o+=d.mod:o-u>d.mod/2&&(o-=d.mod)),l[s]=i((u-o)*t+o,r)))}),this[r](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),r=u(t)._rgba;return u(e.map(i,function(e,t){return(1-n)*r[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&t<3&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,r=e[1]/255,s=e[2]/255,o=e[3],a=Math.max(n,r,s),l=Math.min(n,r,s),u=a-l,d=a+l,c=.5*d;return t=l===a?0:n===a?60*(r-s)/u+360:r===a?60*(s-n)/u+120:60*(n-r)/u+240,i=0===u?0:c<=.5?u/d:u/(2-d),[Math.round(t)%360,i,c,null==o?1:o]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],s=e[3],o=n<=.5?n*(1+i):n+i-n*i,a=2*n-o;return[Math.round(255*r(a,o,t+1/3)),Math.round(255*r(a,o,t)),Math.round(255*r(a,o,t-1/3)),s]},f(d,function(n,r){var s=r.props,o=r.cache,l=r.to,d=r.from;u.fn[n]=function(n){if(l&&!this[o]&&(this[o]=l(this._rgba)),n===t)return this[o].slice();var r,a=e.type(n),c="array"===a||"object"===a?n:arguments,h=this[o].slice();return f(s,function(e,t){var n=c["object"===a?e:t.idx];null==n&&(n=h[t.idx]),h[t.idx]=i(n,t)}),d?(r=u(d(h)),r[o]=h,r):u(h)},f(s,function(t,i){u.fn[t]||(u.fn[t]=function(r){var s,o=e.type(r),l="alpha"===t?this._hsla?"hsla":"rgba":n,u=this[l](),d=u[i.idx];return"undefined"===o?d:("function"===o&&(r=r.call(this,d),o=e.type(r)),null==r&&i.empty?this:("string"===o&&(s=a.exec(r),s&&(r=d+parseFloat(s[2])*("+"===s[1]?1:-1))),u[i.idx]=r,this[l](u)))})})}),u.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,r){var s,o,a="";if("transparent"!==r&&("string"!==e.type(r)||(s=n(r)))){if(r=u(s||r),!h.rgba&&1!==r._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===a||"transparent"===a)&&o&&o.style;)try{a=e.css(o,"backgroundColor"),o=o.parentNode}catch(e){}r=r.blend(a&&"transparent"!==a?a:"_default")}r=r.toRgbaString()}try{t.style[i]=r}catch(e){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=u(t.elem,i),t.end=u(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},u.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},s=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function t(t){var i,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)i=r[n],"string"==typeof r[i]&&(s[e.camelCase(i)]=r[i]);else for(i in r)"string"==typeof r[i]&&(s[i]=r[i]);return s}function n(t,i){var n,r,o={};for(n in i)r=i[n],t[n]!==r&&(s[n]||!e.fx.step[n]&&isNaN(parseFloat(r))||(o[n]=r));return o}var r=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(i.style(e.elem,n,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,s,o,a){var l=e.speed(s,o,a);return this.queue(function(){var s,o=e(this),a=o.attr("class")||"",u=l.children?o.find("*").addBack():o;u=u.map(function(){var i=e(this);return{el:i,start:t(this)}}),s=function(){e.each(r,function(e,t){i[t]&&o[t+"Class"](i[t])})},s(),u=u.map(function(){return this.end=t(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",a),u=u.map(function(){var t=this,i=e.Deferred(),n=e.extend({},l,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,n),i.promise()}),e.when.apply(e,u.get()).done(function(){s(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,n,r,s){return n?e.effects.animateClass.call(this,{add:i},n,r,s):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,n,r,s){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},n,r,s):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,n,r,s,o){return"boolean"==typeof n||void 0===n?r?e.effects.animateClass.call(this,n?{add:i}:{remove:i},r,s,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},n,r,s)}}(e.fn.toggleClass),switchClass:function(t,i,n,r,s){return e.effects.animateClass.call(this,{add:i,remove:t},n,r,s)}})}(),function(){function i(t,i,n,r){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(r=i,n=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(r=n,n=i,i={}),e.isFunction(n)&&(r=n,n=null),i&&e.extend(t,i),n=n||i.duration,t.duration=e.fx.off?0:"number"==typeof n?n:n in e.fx.speeds?e.fx.speeds[n]:e.fx.speeds._default,t.complete=r||i.complete,t}function n(t){return!(t&&"number"!=typeof t&&!e.fx.speeds[t])||("string"==typeof t&&!e.effects.effect[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}e.extend(e.effects,{version:"1.11.4",save:function(e,i){for(var n=0;n<i.length;n++)null!==i[n]&&e.data(t+i[n],e[0].style[i[n]])},restore:function(e,i){var n,r;for(r=0;r<i.length;r++)null!==i[r]&&(n=e.data(t+i[r]),void 0===n&&(n=""),e.css(i[r],n))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},n=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(e){s=document.body}return t.wrap(n),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),n=t.parent(),"static"===t.css("position")?(n.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,n){i[n]=t.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(r),n.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,n,r){return r=r||{},e.each(i,function(e,i){var s=t.cssUnit(i);s[0]>0&&(r[i]=s[0]*n+s[1])}),r}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(s)&&s.call(r[0]),e.isFunction(t)&&t()}var r=e(this),s=n.complete,a=n.mode;(r.is(":hidden")?"hide"===a:"show"===a)?(r[a](),i()):o.call(r[0],n,i)}var n=i.apply(this,arguments),r=n.mode,s=n.queue,o=e.effects.effect[n.effect];return e.fx.off||!o?r?this[r](n.duration,n.complete):this.each(function(){n.complete&&n.complete.call(this)}):s===!1?this.each(t):this.queue(s||"fx",t)},show:function(e){return function(t){if(n(t))return e.apply(this,arguments);var r=i.apply(this,arguments);return r.mode="show",this.effect.call(this,r)}}(e.fn.show),hide:function(e){return function(t){if(n(t))return e.apply(this,arguments);var r=i.apply(this,arguments);return r.mode="hide",this.effect.call(this,r)}}(e.fn.hide),toggle:function(e){return function(t){if(n(t)||"boolean"==typeof t)return e.apply(this,arguments);var r=i.apply(this,arguments);return r.mode="toggle",this.effect.call(this,r)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?i(2*e)/2:1-i(e*-2+2)/2}})}(),e.effects}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.drop=function(t,i){var n,r=e(this),s=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(r,t.mode||"hide"),a="show"===o,l=t.direction||"left",u="up"===l||"down"===l?"top":"left",d="up"===l||"left"===l?"pos":"neg",c={opacity:a?1:0};e.effects.save(r,s),r.show(),e.effects.createWrapper(r),n=t.distance||r["top"===u?"outerHeight":"outerWidth"](!0)/2,a&&r.css("opacity",0).css(u,"pos"===d?-n:n),c[u]=(a?"pos"===d?"+=":"-=":"pos"===d?"-=":"+=")+n,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&r.hide(),e.effects.restore(r,s),e.effects.removeWrapper(r),i()}})}});