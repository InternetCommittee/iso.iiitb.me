
		function createFunctionWithTimeout(callback, opt_timeout) {
			var called = false;
			function fn() {
				if (!called) {
				called = true;
				callback();
				}
			}
			setTimeout(fn, opt_timeout || 1000);
			return fn;
		}


		let linksOnPage = document.getElementsByTagName('a');

		for(let i = 0, len = linksOnPage.length; i < len; i++) {
			linksOnPage[i].onclick = function onDownloadISO(event) {
				ga('send', 'event', {
					eventCategory: 'Outbound Link',
					eventAction: 'click',
					eventLabel: event.target.href,
					transport: 'beacon',
				});
			}

			let isoName = linksOnPage[i].href.split("/").slice(-1)[0];
			linksOnPage[i].setAttribute("id", isoName);
			linksOnPage[i].setAttribute("download", isoName);
		}

		console.log(
			`%c 
										___......__             _
									_.-'           ~-_       _.=a~~-_
			--=====-.-.-_----------~   .--.       _   -.__.-~ ( ___===>
						'''--...__  (    \ \\\ { )       _.-~
									=_ ~_  \\-~~~//~~~~-=-~
									|-=-~_ \\   \\
									|_/   =. )   ~}
									|}      ||
									//       ||
								_//        {{
							'='~'          \\_    =
											~~'
										run! @4ravind is shitposting again!
			`,
			"font-family:monospace"
		)