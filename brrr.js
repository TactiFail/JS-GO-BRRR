function brr() {
	[].filter.call(document.getElementsByTagName("*"), el => (/brr+/i.test(el.tagName))).forEach(function(el){
		count = el.tagName.substring(1).length;
		let brs = [];
		for (i = 0; i < count; i++) {
			brs.push(document.createElement("br"));
		}
		el.replaceWith(...brs);
	});
}
