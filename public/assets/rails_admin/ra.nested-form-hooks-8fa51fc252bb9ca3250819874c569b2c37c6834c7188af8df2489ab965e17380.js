(function(){var e;e=jQuery,e(document).ready(function(){return window.nestedFormEvents.insertFields=function(t,i,n){var r;return r=e(n).closest(".controls").siblings(".tab-content"),r.append(t),r.children().last()}}),e(document).on("nested:fieldAdded","form",function(t){var i,n,r,o,s,a,l;if(n=t.field.addClass("tab-pane").attr("id","unique-id-"+(new Date).getTime()),o=e('<li><a data-toggle="tab" href="#'+n.attr("id")+'">'+n.children(".object-infos").data("object-label")+"</a></li>"),a=n.closest(".control-group"),i=a.children(".controls"),s=void 0!==i.data("nestedone"),r=i.children(".nav"),t=a.children(".tab-content"),l=i.find(".toggler"),r.append(o),e(window.document).trigger("rails_admin.dom_ready",[n,a]),o.children("a").tab("show"),s||r.select(":hidden").show("slow"),t.select(":hidden").show("slow"),l.addClass("active").removeClass("disabled").children("i").addClass("icon-chevron-down").removeClass("icon-chevron-right"),s)return i.find(".add_nested_fields").removeClass("add_nested_fields").html(n.children(".object-infos").data("object-label"))}),e(document).on("nested:fieldRemoved","form",function(t){var i,n,r,o,s,a,l,u;return o=t.field,s=o.closest(".control-group").children(".controls").children(".nav"),r=s.children("li").has('a[href="#'+o.attr("id")+'"]'),l=o.closest(".control-group"),n=l.children(".controls"),a=void 0!==n.data("nestedone"),u=n.find(".toggler"),(r.next().length?r.next():r.prev()).children("a:first").tab("show"),r.remove(),0===s.children().length&&(s.select(":visible").hide("slow"),u.removeClass("active").addClass("disabled").children("i").removeClass("icon-chevron-down").addClass("icon-chevron-right")),a&&(i=u.next(),i.addClass("add_nested_fields").html(i.data("add-label"))),o.find("[required]").each(function(){return e(this).removeAttr("required")})})}).call(this);