function myFunction() {
  var copyText = document.getElementById(&quot;myInput&quot;);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand(&quot;copy&quot;);
  
  var tooltip = document.getElementById(&quot;myTooltip&quot;);
  tooltip.innerHTML = &quot;Copied: &quot; + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById(&quot;myTooltip&quot;);
  tooltip.innerHTML = &quot;Copy to clipboard&quot;;
}
 function addCopyButtons(clipboard) { document.querySelectorAll(&#39;pre &gt; code&#39;).forEach(function (codeBlock) { var button = document.createElement(&#39;button&#39;); button.className = &#39;copy-code-button&#39;; button.type = &#39;button&#39;; button.innerText = &#39;Copy&#39;; button.addEventListener(&#39;click&#39;, function () { clipboard.writeText(codeBlock.innerText).then(function () { /* Chrome doesn&#39;t seem to blur automatically,                    leaving the button in a focused state. */ button.blur(); button.innerText = &#39;Copied!&#39;; setTimeout(function () { button.innerText = &#39;Copy&#39;; }, 2000); }, function (error) { button.innerText = &#39;Error&#39;; }); }); var pre = codeBlock.parentNode; if (pre.parentNode.classList.contains(&#39;highlight&#39;)) { var highlight = pre.parentNode; highlight.parentNode.insertBefore(button, highlight); } else { pre.parentNode.insertBefore(button, pre); } }); } if (navigator &amp;&amp; navigator.clipboard) { addCopyButtons(navigator.clipboard); } else { var script = document.createElement(&#39;script&#39;); script.src = &#39;https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js&#39;; script.integrity = &#39;sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=&#39;; script.crossOrigin = &#39;anonymous&#39;; script.onload = function() { addCopyButtons(clipboard); }; document.body.appendChild(script); }  function myFunction() { var copyText = document.getElementById(&quot;myInput&quot;); copyText.select(); copyText.setSelectionRange(0, 99999); document.execCommand(&quot;copy&quot;); var tooltip = document.getElementById(&quot;myTooltip&quot;); tooltip.innerHTML = &quot;Copied: &quot; + copyText.value; } function outFunc() { var tooltip = document.getElementById(&quot;myTooltip&quot;); tooltip.innerHTML = &quot;Copy to clipboard&quot;; }
