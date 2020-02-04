
// find the opinion section and get rid of it.
var sections = document.getElementsByTagName('section');
for(var i = 0; i < sections.length; ++i) {
    if(sections[i].getAttribute('data-block-tracking-id') == 'Opinion') {
	sections[i].style.display = 'none';
    }
} 
