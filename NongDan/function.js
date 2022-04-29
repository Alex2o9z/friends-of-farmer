<!-- Header -->
function responsiveMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.classList.add("responsive");
	} else if (x.className === "topnav sticky") {
		x.classList.add("responsive");
	} else {
		x.classList.remove("responsive");
	}
}

<!-- maybe useless -->
window.onscroll = function() {stickyMenu()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function stickyMenu() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

// Get the modal
var modal = document.getElementById('signIn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signIn) {
        modal.style.display = "none";
    }
}

<!-- Footer -->

function copyToClipboard(elementId) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(elementId).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	alert("Đã sao chép vào khay nhớ tạm:\n" + aux.value);
}