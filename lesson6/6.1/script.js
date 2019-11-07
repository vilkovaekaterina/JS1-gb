
function init(){
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = changeBigPicture;
	}
}

function changeBigPicture(event){
	var appDiv = document.getElementById("big_picture");
	appDiv.innerHTML = "";
	var eventElement = event.target;
	var imageNameParts = eventElement.id;
	var src = "big/" + imageNameParts + ".jpg";
	var imageDomElement = document.createElement("img");
	imageDomElement.src = src;
	appDiv.appendChild(imageDomElement);
	imageDomElement.onerror = function(){
		appDiv.innerHTML="<h2>Файл не найден</h2>"
	}
}

window.onload = init;
