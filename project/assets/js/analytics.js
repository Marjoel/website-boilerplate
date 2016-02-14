var _gaq = _gaq || [];
var gaId = 'UA-XXXXXXXX-X'; // change 'UA-XXXXXXXX-X' for your Google Analytics ID

function getAnalytics() {
	window._gaq.push(['_setAccount', gaId]);
	window._gaq.push(['_trackPageview']);
	(function() {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
}

getAnalytics();