(function (window) {
	try {
		
	} catch (e) {
		console.error("MGC加载失败");
	}
	const STACKTV = $ASTV({
		selector: ".container",
		showAbout: false,
		lazyLoadSize: 20,
		autoPlay: true,
		// showLog: false
	});
	let url = new URL(location.href).searchParams.get("url") || "http://yamanx.42web.io/tv.m3u";
	let playUrl = new URL(location.href).searchParams.get("playUrl") || "";
	url = url.trim();
	playUrl = playUrl.trim();
	if (playUrl.length > 0) {
		try {
			STACKTV.loadUrl(playUrl);
			console.info("准备播放节目：" + playUrl);
		} catch (err) {
			console.error("请求发生错误:" + playUrl);
			console.error(err)
		}

		return;
	}
	STACKTV.fetchM3U(url);
})(window)
