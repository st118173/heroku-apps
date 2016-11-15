(function(){var t=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},createConsumer:function(t){var e;return null==t&&(t=null!=(e=this.getConfig("url"))?e:this.INTERNAL.default_mount_path),new ActionCable.Consumer(this.createWebSocketURL(t))},getConfig:function(t){var e;return e=document.head.querySelector("meta[name='action-cable-"+t+"']"),null!=e?e.getAttribute("content"):void 0},createWebSocketURL:function(t){var e;return t&&!/^wss?:/i.test(t)?(e=document.createElement("a"),e.href=t,e.href=e.href,e.protocol=e.protocol.replace("http","ws"),e.href):t},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var e;if(e=1<=arguments.length?t.call(arguments,0):[],this.debugging)return e.push(Date.now()),console.log.apply(console,["[ActionCable]"].concat(t.call(e)))}},"undefined"!=typeof window&&null!==window&&(window.ActionCable=this.ActionCable),"undefined"!=typeof module&&null!==module&&(module.exports=this.ActionCable)}).call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};ActionCable.ConnectionMonitor=function(){function e(e){this.connection=e,this.visibilityDidChange=t(this.visibilityDidChange,this),this.reconnectAttempts=0}var n,i,o;return e.pollInterval={min:3,max:30},e.staleThreshold=6,e.prototype.start=function(){if(!this.isRunning())return this.startedAt=i(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),ActionCable.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},e.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=i(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),ActionCable.log("ConnectionMonitor stopped")},e.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},e.prototype.recordPing=function(){return this.pingedAt=i()},e.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,ActionCable.log("ConnectionMonitor recorded connect")},e.prototype.recordDisconnect=function(){return this.disconnectedAt=i(),ActionCable.log("ConnectionMonitor recorded disconnect")},e.prototype.startPolling=function(){return this.stopPolling(),this.poll()},e.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},e.prototype.poll=function(){return this.pollTimeout=setTimeout(function(t){return function(){return t.reconnectIfStale(),t.poll()}}(this),this.getPollInterval())},e.prototype.getPollInterval=function(){var t,e,i,o;return o=this.constructor.pollInterval,i=o.min,e=o.max,t=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*n(t,i,e))},e.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+o(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?ActionCable.log("ConnectionMonitor skipping reopening recent disconnect"):(ActionCable.log("ConnectionMonitor reopening"),this.connection.reopen())},e.prototype.connectionIsStale=function(){var t;return o(null!=(t=this.pingedAt)?t:this.startedAt)>this.constructor.staleThreshold},e.prototype.disconnectedRecently=function(){return this.disconnectedAt&&o(this.disconnectedAt)<this.constructor.staleThreshold},e.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout(function(t){return function(){if(t.connectionIsStale()||!t.connection.isOpen())return ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),t.connection.reopen()}}(this),200)},i=function(){return(new Date).getTime()},o=function(t){return(i()-t)/1e3},n=function(t,e,n){return Math.max(e,Math.min(n,t))},e}()}.call(this),function(){var t,e,n,i,o,r,s=[].slice,a=function(t,e){return function(){return t.apply(e,arguments)}},l=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};i=ActionCable.INTERNAL,e=i.message_types,n=i.protocols,o=2<=n.length?s.call(n,0,t=n.length-1):(t=0,[]),r=n[t++],ActionCable.Connection=function(){function t(t){this.consumer=t,this.open=a(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new ActionCable.ConnectionMonitor(this),this.disconnected=!0}return t.reopenDelay=500,t.prototype.send=function(t){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(t)),!0)},t.prototype.open=function(){if(this.isActive())throw ActionCable.log("Attempted to open WebSocket, but existing socket is "+this.getState()),new Error("Existing connection must be closed before opening");return ActionCable.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+n),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new WebSocket(this.consumer.url,n),this.installEventHandlers(),this.monitor.start(),!0},t.prototype.close=function(t){var e,n;if(e=(null!=t?t:{allowReconnect:!0}).allowReconnect,e||this.monitor.stop(),this.isActive())return null!=(n=this.webSocket)?n.close():void 0},t.prototype.reopen=function(){var t;if(ActionCable.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(e){return t=e,ActionCable.log("Failed to reopen WebSocket",t)}finally{ActionCable.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},t.prototype.getProtocol=function(){var t;return null!=(t=this.webSocket)?t.protocol:void 0},t.prototype.isOpen=function(){return this.isState("open")},t.prototype.isActive=function(){return this.isState("open","connecting")},t.prototype.isProtocolSupported=function(){var t;return t=this.getProtocol(),l.call(o,t)>=0},t.prototype.isState=function(){var t,e;return e=1<=arguments.length?s.call(arguments,0):[],t=this.getState(),l.call(e,t)>=0},t.prototype.getState=function(){var t,e,n;for(e in WebSocket)if(n=WebSocket[e],n===(null!=(t=this.webSocket)?t.readyState:void 0))return e.toLowerCase();return null},t.prototype.installEventHandlers=function(){var t,e;for(t in this.events)e=this.events[t].bind(this),this.webSocket["on"+t]=e},t.prototype.uninstallEventHandlers=function(){var t;for(t in this.events)this.webSocket["on"+t]=function(){}},t.prototype.events={message:function(t){var n,i,o,r;if(this.isProtocolSupported())switch(o=JSON.parse(t.data),n=o.identifier,i=o.message,r=o.type,r){case e.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case e.ping:return this.monitor.recordPing();case e.confirmation:return this.subscriptions.notify(n,"connected");case e.rejection:return this.subscriptions.reject(n);default:return this.subscriptions.notify(n,"received",i)}},open:function(){if(ActionCable.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(){if(ActionCable.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return ActionCable.log("WebSocket onerror event")}},t}()}.call(this),function(){var t=[].slice;ActionCable.Subscriptions=function(){function e(t){this.consumer=t,this.subscriptions=[]}return e.prototype.create=function(t,e){var n,i,o;return n=t,i="object"==typeof n?n:{channel:n},o=new ActionCable.Subscription(this.consumer,i,e),this.add(o)},e.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},e.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},e.prototype.reject=function(t){var e,n,i,o,r;for(i=this.findAll(t),o=[],e=0,n=i.length;e<n;e++)r=i[e],this.forget(r),this.notify(r,"rejected"),o.push(r);return o},e.prototype.forget=function(t){var e;return this.subscriptions=function(){var n,i,o,r;for(o=this.subscriptions,r=[],n=0,i=o.length;n<i;n++)e=o[n],e!==t&&r.push(e);return r}.call(this),t},e.prototype.findAll=function(t){var e,n,i,o,r;for(i=this.subscriptions,o=[],e=0,n=i.length;e<n;e++)r=i[e],r.identifier===t&&o.push(r);return o},e.prototype.reload=function(){var t,e,n,i,o;for(n=this.subscriptions,i=[],t=0,e=n.length;t<e;t++)o=n[t],i.push(this.sendCommand(o,"subscribe"));return i},e.prototype.notifyAll=function(){var e,n,i,o,r,s,a;for(n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],r=this.subscriptions,s=[],i=0,o=r.length;i<o;i++)a=r[i],s.push(this.notify.apply(this,[a,n].concat(t.call(e))));return s},e.prototype.notify=function(){var e,n,i,o,r,s,a;for(s=arguments[0],n=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],a="string"==typeof s?this.findAll(s):[s],r=[],i=0,o=a.length;i<o;i++)s=a[i],r.push("function"==typeof s[n]?s[n].apply(s,e):void 0);return r},e.prototype.sendCommand=function(t,e){var n;return n=t.identifier,this.consumer.send({command:e,identifier:n})},e}()}.call(this),function(){ActionCable.Subscription=function(){function t(t,n,i){this.consumer=t,null==n&&(n={}),this.identifier=JSON.stringify(n),e(this,i)}var e;return t.prototype.perform=function(t,e){return null==e&&(e={}),e.action=t,this.send(e)},t.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},t.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},e=function(t,e){var n,i;if(null!=e)for(n in e)i=e[n],t[n]=i;return t},t}()}.call(this),function(){ActionCable.Consumer=function(){function t(t){this.url=t,this.subscriptions=new ActionCable.Subscriptions(this),this.connection=new ActionCable.Connection(this)}return t.prototype.send=function(t){return this.connection.send(t)},t.prototype.connect=function(){return this.connection.open()},t.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},t.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},t}()}.call(this),function(){this.App||(this.App={}),App.cable=ActionCable.createConsumer()}.call(this);