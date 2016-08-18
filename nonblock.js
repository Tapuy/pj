function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
     var htmlDiv = document.createElement("div");
    for (var i = 0; i < selection.rangeCount; ++i) {
        htmlDiv.appendChild(selection.getRangeAt(i).cloneContents()); 
    } 
    var selectionHTML = htmlDiv.innerHTML;     
    var pagelink = "<br /><br /> Read more at animepjm.com - <a href='"+document.location.href+"'>"+document.location.href+"</a><br />";
    body_element.setAttribute("blockquote", false);
    var copytext = selectionHTML + pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
  document.oncopy = addLink;