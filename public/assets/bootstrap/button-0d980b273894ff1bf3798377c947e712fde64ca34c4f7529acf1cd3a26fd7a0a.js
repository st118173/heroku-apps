+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),r=n.data("bs.button"),o="object"==typeof t&&t;r||n.data("bs.button",r=new i(this,o)),"toggle"==t?r.toggle():t&&r.setState(t)})}var i=function(t,n){this.$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.3.7",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(t){var i="disabled",n=this.$element,r=n.is("input")?"val":"html",o=n.data();t+="Text",null==o.resetText&&n.data("resetText",n[r]()),setTimeout(e.proxy(function(){n[r](null==o[t]?this.options[t]:o[t]),"loadingText"==t?(this.isLoading=!0,n.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),e&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=t,e.fn.button.Constructor=i,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=e(i.target).closest(".btn");t.call(n,"toggle"),e(i.target).is('input[type="radio"], input[type="checkbox"]')||(i.preventDefault(),n.is("input,button")?n.trigger("focus"):n.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery);