
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