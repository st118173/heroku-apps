!function(e){"use strict";e.ajaxPrefilter(function(e){if(e.iframe)return"iframe"}),e.ajaxTransport("iframe",function(t,n,i){function r(){u.each(function(t){e(this).replaceWith(d[t]),u.splice(t,1)}),s.remove(),a.bind("load",function(){a.remove()}),a.attr("src","about:blank")}var o,s=null,a=null,l="iframe-"+e.now(),d=e(t.files).filter(":file:enabled"),u=null;if(t.dataTypes.shift(),d.length)return s=e("<form enctype='multipart/form-data' method='post'></form>").hide().attr({action:t.url,target:l}),"string"==typeof t.data&&t.data.length>0&&e.error("data must not be serialized"),e.each(t.data||{},function(t,n){e.isPlainObject(n)&&(t=n.name,n=n.value),e("<input type='hidden' />").attr({name:t,value:n}).appendTo(s)}),e("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(s),o=t.dataTypes[0]&&t.accepts[t.dataTypes[0]]?t.accepts[t.dataTypes[0]]+("*"!==t.dataTypes[0]?", */*; q=0.01":""):t.accepts["*"],e("<input type='hidden' name='X-Http-Accept'>").attr("value",o).appendTo(s),u=d.after(function(){return e(this).clone().prop("disabled",!0)}).next(),d.appendTo(s),{send:function(t,n){a=e("<iframe src='about:blank' name='"+l+"' id='"+l+"' style='display:none'></iframe>"),a.bind("load",function(){a.unbind("load").bind("load",function(){var e=this.contentWindow?this.contentWindow.document:this.contentDocument?this.contentDocument:this.document,t=e.documentElement?e.documentElement:e.body,o=t.getElementsByTagName("textarea")[0],s=o&&o.getAttribute("data-type")||null,a=o&&o.getAttribute("data-status")||200,l=o&&o.getAttribute("data-statusText")||"OK",d={html:t.innerHTML,text:s?o.value:t?t.textContent||t.innerText:null};r(),i.responseText||(i.responseText=d.text),n(a,l,d,s?"Content-Type: "+s:null)}),s[0].submit()}),e("body").append(s,a)},abort:function(){null!==a&&(a.unbind("load").attr("src","javascript:false;"),r())}}})}(jQuery);