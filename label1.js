//----------------------------Defaults
var ListBlogLink = window.location.hostname;
var ListCount = 5;
var TitleCount = 70;
var ListLabel ="data:label.name";
//----------------------------Function Start
function mbtlist(json) {
document.write('<ul class="mbtlist">');
for (var i = 0; i < ListCount; i++)
{

//-----------------------------Variables Declared
var listing= ListUrl = ListTitle = "";
//----------------------------- Title URL
for (var j = 0; j < json.feed.entry[i].link.length; j++) {
if (json.feed.entry[i].link[j].rel == 'alternate') {
break;
}
}
ListUrl= "'" + json.feed.entry[i].link[j].href + "'";
//----------------------------------- Title Stirng
if (json.feed.entry[i].title!= null)
{
ListTitle= json.feed.entry[i].title.$t.substr(0, TitleCount);
}
//----------------------------------- Printing List
var listing = "<li><a class='mbttitle' href="
+ListUrl+
"target='_blank'>"
+ListTitle+
"</a></li>";
document.write(listing);
}
document.write("</ul>");
}