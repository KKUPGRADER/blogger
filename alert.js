function asyncData(a,b){var c=document.createElement('script');c.src=a;c.onload=function(){if(typeof b=="function")b();b=null};c.onreadystatechange=function(){if(c.readyState==4||c.readyState=="complete"){if(typeof b=="function")b();b=null}};document.getElementsByTagName('head')[0].appendChild(c)}function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" })}function loadJS(scriptURL){!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=scriptURL,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");function getParameterByName(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}var foo=getParameterByName("o");if(null!=foo){var scripts=["https://rawcdn.githack.com/KKUPGRADER/blogger/67ed8d6c31e0c65e7e992dc8ac31b93554d9ef49/alert-timer.js","https://rawcdn.githack.com/KKUPGRADER/blogger/a29f252f0233c23853dfeeba66664e8236aa1884/alert-sfclip.js"];function injectJS(t){asyncData(t,function(){console.log("Scripts Injected!")})}scripts.forEach(injectJS)}jQuery.cachedScript=function(e,c){return c=$.extend(c||{},{dataType:"script",cache:!0,url:e}),jQuery.ajax(c)};!function(e){e.fn.lazyload=function(t){var o={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};t&&e.extend(o,t);var n=this;return"scroll"==o.event&&e(o.container).bind("scroll",function(t){var r=0;n.each(function(){if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(r++>o.failurelimit)return!1}else e(this).trigger("appear")});var i=e.grep(n,function(e){return!e.loaded});n=e(i)}),this.each(function(){var t=this;null==e(t).attr("original")&&e(t).attr("original",e(t).attr("src")),"scroll"!=o.event||null==e(t).attr("src")||o.placeholder==e(t).attr("src")||e.abovethetop(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.rightoffold(t,o)?(o.placeholder?e(t).attr("src",o.placeholder):e(t).removeAttr("src"),t.loaded=!1):t.loaded=!0,e(t).one("appear",function(){this.loaded||e("<img />").bind("load",function(){e(t).hide().attr("src",e(t).attr("original").replace(/\/s[0-9]+(\-c)?\//,"/s1600/"))[o.effect](o.effectspeed),t.loaded=!0}).attr("src",e(t).attr("original"))}),"scroll"!=o.event&&e(t).bind(o.event,function(o){t.loaded||e(t).trigger("appear")})}),e(o.container).trigger(o.event),this},e.belowthefold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).height()+e(window).scrollTop();else n=e(o.container).offset().top+e(o.container).height();return n<=e(t).offset().top-o.threshold},e.rightoffold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).width()+e(window).scrollLeft();else n=e(o.container).offset().left+e(o.container).width();return n<=e(t).offset().left-o.threshold},e.abovethetop=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollTop();else n=e(o.container).offset().top;return n>=e(t).offset().top+o.threshold+e(t).height()},e.leftofbegin=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollLeft();else n=e(o.container).offset().left;return n>=e(t).offset().left+o.threshold+e(t).width()},e.extend(e.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container:window})"})}(jQuery),$(function(){$("img:not(#disqus-notif img)").lazyload({placeholder:"https://3.bp.blogspot.com/-xtM_7x0_cU4/XIok1BisovI/AAAAAAAAPUc/QGJpBJZ3QBM_Spkd9r3-SMurEUbRI1pOQCLcBGAs/s10/loadingku.gif",effect:"fadeIn",threshold:"0"})});function popup(content, id){$('#Model-Parent').html("<div class='popup-wrap' id='popup-wrap-"+id+"'><div class='popup-box' id='popup-box-"+id+"'><span class='fa fa-times-circle-o popup-close' id='popup-close-"+id+"'></span>"+content+"</div></div>");$('#popup-wrap-'+id).fadeIn(500);$('#popup-box-'+id).removeClass('transform-out').addClass('transform-in');$('.popup-close, #popup-close-'+id).click(function(e){$('#popup-wrap-'+id).fadeOut(500);$('#popup-box-'+id).removeClass('transform-in').addClass('transform-out');e.preventDefault()})}function updateIndicator(){navigator.onLine||(popup('<p>You Are Offline! Please Connect to the internet and click reload.</p><button class="btn" onclick="window.location=window.location">Reload</button>'))}window.addEventListener("online",updateIndicator),window.addEventListener("offline",updateIndicator),updateIndicator();function alert(content){var a="<div class='alert'><span class='alert-colse fa fa-close' onclick='this.parentElement.style.display=&quot;none&quot;'></span><div class='alert-main'><span class='alert-icon fa fa-bell'></span><div class='alert-content'>"+content+"</div><div class='c-timebar'><div class='c-timebar__remaining'></div></div></div></div>";$('#Alert-Parent').html(a);var countdown;$(".alert").show(resetCountdown).mousemove(resetCountdown);function resetCountdown(){clearTimeout(countdown);countdown=setTimeout(function(){$('.alert').hide()},5000)}}$("br + br").next('br').hide()
