(function(){var e;e=jQuery,e(document).on("click","#list input.toggle",function(){return e("#list [name='bulk_ids[]']").prop("checked",e(this).is(":checked"))}),e(document).on("click",".pjax",function(t){if(t.which>1||t.metaKey||t.ctrlKey);else{if(e.support.pjax)return t.preventDefault(),e.pjax({container:e(this).data("pjax-container")||"[data-pjax-container]",url:e(this).data("href")||e(this).attr("href"),timeout:2e3});if(e(this).data("href"))return window.location=e(this).data("href")}}),e(document).on("submit",".pjax-form",function(t){if(e.support.pjax)return t.preventDefault(),e.pjax({container:e(this).data("pjax-container")||"[data-pjax-container]",url:this.action+(this.action.indexOf("?")!==-1?"&":"?")+e(this).serialize(),timeout:2e3})}),e(document).on("pjax:start",function(){return e("#loading").show()}).on("pjax:end",function(){return e("#loading").hide()}),e(document).on("click","[data-target]",function(){if(!e(this).hasClass("disabled")){if(e(this).has("i.icon-chevron-down").length)return e(this).removeClass("active").children("i").toggleClass("icon-chevron-down icon-chevron-right"),e(e(this).data("target")).select(":visible").hide("slow");if(e(this).has("i.icon-chevron-right").length)return e(this).addClass("active").children("i").toggleClass("icon-chevron-down icon-chevron-right"),e(e(this).data("target")).select(":hidden").show("slow")}}),e(document).on("click",".form-horizontal legend",function(){return e(this).has("i.icon-chevron-down").length?(e(this).siblings(".control-group:visible").hide("slow"),e(this).children("i").toggleClass("icon-chevron-down icon-chevron-right")):e(this).has("i.icon-chevron-right").length?(e(this).siblings(".control-group:hidden").show("slow"),e(this).children("i").toggleClass("icon-chevron-down icon-chevron-right")):void 0}),e(document).on("click","form .tab-content .tab-pane a.remove_nested_one_fields",function(){return e(this).children('input[type="hidden"]').val(e(this).hasClass("active")).siblings("i").toggleClass("icon-check icon-trash")}),e(document).ready(function(){return e(document).trigger("rails_admin.dom_ready")}),e(document).on("pjax:end",function(){return e(document).trigger("rails_admin.dom_ready")}),e(document).on("rails_admin.dom_ready",function(){return e(".animate-width-to").each(function(){var t,i;return t=e(this).data("animate-length"),i=e(this).data("animate-width-to"),e(this).animate({width:i},t,"easeOutQuad")}),e(".form-horizontal legend").has("i.icon-chevron-right").each(function(){return e(this).siblings(".control-group").hide()}),e(".table").tooltip({selector:"th[rel=tooltip]"}),e("[formnovalidate]").on("click",function(){return e(this).closest("form").attr("novalidate",!0)})}),e(document).on("click","#fields_to_export label input#check_all",function(){var t;return t=e("#fields_to_export label input"),e("#fields_to_export label input#check_all").is(":checked")?e(t).prop("checked",!0):e(t).prop("checked",!1)}),e(document).on("pjax:popstate",function(){e(document).one("pjax:end",function(t){e(t.target).find("script").each(function(){e.globalEval(this.text||this.textContent||this.innerHTML||"")})})}),e(document).on("click","#remove_filter",function(t){return t.preventDefault(),e("#filters_box").html(""),e("hr.filters_box").hide(),e(this).parent().siblings("input[type='search']").val(""),e(this).parents("form").submit()})}).call(this);