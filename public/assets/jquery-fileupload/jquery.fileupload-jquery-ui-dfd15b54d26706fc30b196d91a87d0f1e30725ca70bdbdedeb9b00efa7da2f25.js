!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fileupload-ui"],e):e("object"==typeof exports?require("jquery"):window.jQuery)}(function(e){"use strict";e.widget("blueimp.fileupload",e.blueimp.fileupload,{options:{processdone:function(e,t){t.context.find(".start").button("enable")},progress:function(e,t){t.context&&t.context.find(".progress").progressbar("option","value",parseInt(t.loaded/t.total*100,10))},progressall:function(t,i){var n=e(this);n.find(".fileupload-progress").find(".progress").progressbar("option","value",parseInt(i.loaded/i.total*100,10)).end().find(".progress-extended").each(function(){e(this).html((n.data("blueimp-fileupload")||n.data("fileupload"))._renderExtendedProgress(i))})}},_renderUpload:function(t,i){var n=this._super(t,i),r=e(window).width()>480;return n.find(".progress").empty().progressbar(),n.find(".start").button({icons:{primary:"ui-icon-circle-arrow-e"},text:r}),n.find(".cancel").button({icons:{primary:"ui-icon-cancel"},text:r}),n.hasClass("fade")&&n.hide(),n},_renderDownload:function(t,i){var n=this._super(t,i),r=e(window).width()>480;return n.find(".delete").button({icons:{primary:"ui-icon-trash"},text:r}),n.hasClass("fade")&&n.hide(),n},_startHandler:function(t){e(t.currentTarget).button("disable"),this._super(t)},_transition:function(t){var i=e.Deferred();return t.hasClass("fade")?t.fadeToggle(this.options.transitionDuration,this.options.transitionEasing,function(){i.resolveWith(t)}):i.resolveWith(t),i},_create:function(){this._super(),this.element.find(".fileupload-buttonbar").find(".fileinput-button").each(function(){var t=e(this).find("input:file").detach();e(this).button({icons:{primary:"ui-icon-plusthick"}}).append(t)}).end().find(".start").button({icons:{primary:"ui-icon-circle-arrow-e"}}).end().find(".cancel").button({icons:{primary:"ui-icon-cancel"}}).end().find(".delete").button({icons:{primary:"ui-icon-trash"}}).end().find(".progress").progressbar()},_destroy:function(){this.element.find(".fileupload-buttonbar").find(".fileinput-button").each(function(){var t=e(this).find("input:file").detach();e(this).button("destroy").append(t)}).end().find(".start").button("destroy").end().find(".cancel").button("destroy").end().find(".delete").button("destroy").end().find(".progress").progressbar("destroy"),this._super()}})});