(function(){var e;this.RailsAdmin||(this.RailsAdmin={}),this.RailsAdmin.I18n=e=function(){function e(){}return e.init=function(e,t){return this.locale=e,this.translations=t,moment.locale(this.locale)},e.t=function(e){var t;return t=e.charAt(0).toUpperCase()+e.replace(/_/g," ").slice(1),this.translations[e]||t},e}()}).call(this);