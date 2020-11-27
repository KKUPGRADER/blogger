
(function( opt ){

	var icode = null;
	if ( opt.async == 't' ) {
		icode = opt.icode;
	} else {
		document.write(opt.icode);
	}

	function loadScript(url, callback){
		var script = document.createElement("script");
		script.type = "text/javascript";

		if (script.readyState){/*IE*/
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" ||
						script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {/*Others*/
			script.onload = function(){
				callback();
			};
		}

		script.src = url;
		document.body.appendChild(script);
	};

	if ( opt.loader_sig in window ) {
		var loader = window[opt.loader_sig];
		var rec = {
			iid:opt.iid,
			icode:icode
		};

		if ( loader.b_loaded ) {
			loader.app.initLateInst(rec);
		} else {
			loader.ilist.push(rec);
		}
	} else {
		window[opt.loader_sig] = {
			b_loaded:false,
			ilist:[]
		};
		var loader = window[opt.loader_sig];
		loader.ilist.push({
			iid:opt.iid,
			icode:icode
		});

		loadScript(opt.url_js1,function(){
			var loader = window[opt.loader_sig];
			loader.jQuery = window.jQuery;
			jQuery.noConflict( true );

			loadScript(opt.url_js2,function(){
				loader.b_loaded = true;
				loader.app = window[opt.init_app](loader.jQuery,opt.settings);
				loader.app.initInstance();
				for( var i=0; i<loader.ilist.length; i++ ) {
					var rec = loader.ilist[i];
					if ( rec.icode != null ) {
						loader.app.initLateInst(rec);
					}
				}
			});
		});
	}
}({
loader_sig:"ajaxlikes_0209",
init_app:"initAjaxLikesApp",
url_js1:"https://www.phpkobo.com:443/mod/main/v3.00/mod/btpl/js/jquery-1.11.1.min.js",
url_js2:"https://www.phpkobo.com:443/mod/ALNJX/v2.09/demoex/cn/js/als.js",
iid:"demo-004",
async:"f",
icode:"<style>/* [BEGIN] CSS Reset */.ld-tpl-4 table,.ld-tpl-4 tbody,.ld-tpl-4 tfoot,.ld-tpl-4 thead,.ld-tpl-4 tr,.ld-tpl-4 th,.ld-tpl-4 td {margin:0 !important;padding:0 !important;border:0 !important;font-size:100% !important;vertical-align:baseline !important;background-color:transparent;box-shadow:none;}.ld-tpl-4 img {margin:0 !important;padding:0 !important;border:0 !important;background-color:transparent;box-shadow:none;}.ld-tpl-4 table {border-collapse:collapse !important;border-spacing:0 !important;}/* [END] CSS Reset */.ld-tpl-4.ld-container {position:relative;display:inline-block;*zoom:1;*display:inline;color:black;font-family:Verdana, Geneva, sans-serif;font-size:15px;line-height:normal;-moz-user-select: none; /* Firefox */-ms-user-select: none; /* Internet Explorer */-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */-webkit-user-select: none; /* Chrome, Safari, and Opera */-webkit-touch-callout: none; /* Disable Android and iOS callouts*/}.ld-tpl-4 .ld-container-inner {}.ld-tpl-4 .ld-btn-y,.ld-tpl-4 .ld-btn-n {position:relative;text-align:center;min-width:160px;border:1px solid #dca;background-color:#fec;cursor:pointer;}.ld-tpl-4 .ld-btn-y:hover {border:1px solid #ada;background-color:#cfc;}.ld-tpl-4 .ld-btn-n:hover {border:1px solid #daa;background-color:#fcc;}.ld-tpl-4 .ld-btn-inner {margin:5px 15px;}.ld-tpl-4 .ld-img-y,.ld-tpl-4 .ld-img-n {width:24px;vertical-align:middle;}.ld-tpl-4 .ld-ck-y,.ld-tpl-4 .ld-ck-n {visibility:hidden;position:absolute;width:12px;}.ld-tpl-4 .ld-ck-y {top:-5px;left:-2px;}.ld-tpl-4 .ld-ck-n {top:-5px;right:-2px;}.ld-tpl-4 .ld-txt {position:relative;top:1px;font-family:arial;font-size:16px;font-weight:bold;color:black;vertical-align:middle;}.ld-tpl-4 .ld-cnt-y,.ld-tpl-4 .ld-cnt-n,.ld-tpl-4 .ld-per-y,.ld-tpl-4 .ld-per-n {}</style><div class='ld-container ld-tpl-4' data-iid=\"demo-004\" data-cy=\"1007\" data-cn=\"603\" data-choice=\"y\" data-shorten='10000' data-pdig='1' data-checkmark='t'><div class='ld-container-inner'><table border='0' cellpadding='0' cellspacing='0'><tr><td><div class='ld-btn-y' title='I like it'><img class='ld-ck-y' src='https://www.phpkobo.com:443/mod/ALNJX/v2.09/demoex/tpl/tpl-4/img/checked.png'><div class='ld-btn-inner'><img class='ld-img-y' src='https://www.phpkobo.com:443/mod/ALNJX/v2.09/demoex/tpl/tpl-4/img/up.png'> <span class='ld-txt'><span class='ld-cnt-y'></span> (<span class='ld-per-y'></span>%)</span></div></div></td><td width='2'></td><td><div class='ld-btn-n' title='I dislike it'><img class='ld-ck-n' src='https://www.phpkobo.com:443/mod/ALNJX/v2.09/demoex/tpl/tpl-4/img/checked.png'><div class='ld-btn-inner'><img class='ld-img-n' src='https://www.phpkobo.com:443/mod/ALNJX/v2.09/demoex/tpl/tpl-4/img/down.png'> <span class='ld-txt'><span class='ld-cnt-n'></span> (<span class='ld-per-n'></span>%)</span></div></div></td></tr></table></div></div>",
settings:{"url_server":"https:\/\/www.phpkobo.com:443\/mod\/ALNJX\/v2.09\/demoex\/cn\/poll.php"}}));
