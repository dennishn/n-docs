console.log('docs.js');
$( window ).bind( "create.xrayhtml", function( e ) {

	var $instance = $(e.target);

	// Wire up Prism on xray-html components with the .docs--prism class
	var prism = $instance.hasClass('docs--prism');
	if( prism && "Prism" in window ) {
		$( ".docs--prism" ).find( "code" ).addClass( "language-markup" );
		Prism.highlightAll();
	}

	// Wire up ZeroClipboard on xray-html elements with a .docs--copy-code-btn button as the
	// immediate previous element.
	var clippable = $instance.prev().hasClass('docs--copy-code-btn');
	if(clippable && 'ZeroClipboard' in window) {

		var $clipButton = $instance.prev();
		var targetCode = $instance.find('.snippet').html().toString().trim();
		var clipboardClient = new ZeroClipboard($clipButton);

		clipboardClient.on('ready', function(e) {

			clipboardClient.on('copy', function(e) {
				e.clipboardData.setData('text/plain', targetCode);
			});

			clipboardClient.on('afterCopy', function(e) {
				console.log('Copied some shizz to clipboard!');
			});

		});
	}


});