$("body").bind('copy', function (e) {
	if (typeof window.getSelection == "undefined") return; //IE8 or earlier...
	
	var body_element = document.getElementsByTagName('body')[0];
	var selection = window.getSelection();
	
	//if the selection is short let's not our users
    		if ($(".tr_bq" + selection).attr("disabled") == false;)



	//create a div outside of the visible area
	//and fill it with the selected text
	var newdiv = document.createElement('div');
	newdiv.style.position = 'absolute';
	newdiv.style.left = '-99999px';
	body_element.appendChild(newdiv);
	newdiv.appendChild(selection.getRangeAt(0).cloneContents());
	
	//we need a <pre> tag workaround
	//otherwise the text inside "pre" loses all the line breaks!
	if (selection.getRangeAt(0).commonAncestorContainer.nodeName == "PRE") {
		newdiv.innerHTML = "<pre>" + newdiv.innerHTML + "</pre>";
	}
	
	newdiv.innerHTML += "<br /><br />Read more at: <a href='"
	+ document.location.href + "'>"
	+ document.location.href + "</a> MySite.com";
			
	selection.selectAllChildren(newdiv);
	window.setTimeout(function () { body_element.removeChild(newdiv); }, 200);
});
