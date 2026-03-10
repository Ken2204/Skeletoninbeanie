function openTab(evt, tabName) {
// Hide all tab contents
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

// Remove "active" class from all buttons
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the selected tab and mark it as active
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}
