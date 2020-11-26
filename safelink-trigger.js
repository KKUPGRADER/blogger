//<![CDATA[
$(document).ready(function(){$.urlParam=function(o){var n=new RegExp("[?&]"+o+"=([^&#]*)").exec(window.location.href);return null==n?null:decodeURI(n[1])||0};var getlink=$("#getlink"),gotolink=$("#gotolink"),timer=$("#timer");function gotolinkcountdown(){var o=10;gotolink.removeClass("hidden");var n=setInterval(function(){var e=o-=1;gotolink.html('<span class="fa fa-cog fa-spin"></span> Please Wait...'),e<0&&(clearInterval(n),gotolink.prop("disabled",!1),gotolink.html('<span class="fa fa-check"></span> Go to Link'))},1e3)}null!=$.urlParam("o")&&timer.pietimer({timerSeconds:20,color:"#03a9f4",fill:!1,showPercentage:!0,callback:function(){getlink.prop("disabled",!1),getlink.removeClass("hidden"),timer.addClass("hidden")}});var request=!1;getlink.click(function(){0==request&&(gotolinkcountdown(),request=!0),$("html, body").animate({scrollTop:eval(gotolink.offset().top-10)},500)}),gotolink.on("click",function(){var o=aesCrypto.decrypt(convertstr($.urlParam("o")),convertstr("root")); window.open(realurl, '_blank'); }); });

//blank
function gotolinkcountdown(){var btn = $('#gotolink');btn.text('Please wait...');btn.removeClass('d-none');var countDown = 16;
$('#countdown').removeClass('d-none'); var x = setInterval(function() {var distance = countDown -= 1;$('#countdown span').text(distance);if (distance < 0) {$('#countdown').hide();clearInterval(x);btn.prop('disabled', false);btn.text('Go to link');$('#gotolink').removeClass('pt-5').removeClass('mt-5');
$('#alert-done').removeClass('d-none');}}, 1000);}
$(document).ready(function(){
$.urlParam = function(name){var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);if (results==null){return null;}else{return decodeURI(results[1]) || 0;}}
if ($.urlParam('o') == null){
$('#progressbar').parent().hide();}else{percentVal = 0;setInterval(function(){percentVal += .5;$('#progressbar').css("width", percentVal+ '%');  if(percentVal > 120){
$('#progressbar').parent().hide();
$('#getlink').removeClass('d-none');} }, 30);}
$('body').on('click', '#btngetlink', function(){
$(this).parent().fadeOut();
$('html, body').animate({ scrollTop: $("#middle-post").offset().top}, 800);gotolinkcountdown(); });
$('body').on('click', '#gotolink', function(){var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root')); window.open(realurl, '_blank');}); });
//]]>
