var counter = 0;
function submitMyComment() {
	var userName = document.getElementById("userName");
	var myComment = document.getElementById("myComment");
	var parentDiv = document.getElementById("divParent");
	var date = new Date();
	if (userName.value == "" || myComment.value == "") {
		alert("Please enter your username and/or comment!");
		return false;
	}
	var newComment = document.createElement("div");
		newComment.id = "comment" + counter;
		newComment.innerHTML = "<h2>" + userName.value + "</h2>";
		newComment.innerHTML += "<p>" + myComment.value + "</p>";
		newComment.innerHTML += "<span class='smalldate'>" + date + "</span>";
		newComment.innerHTML += "<button class='btn btn-info' onclick='deletingComment(" + counter + ");'> Delete Comment </button>";
	parentDiv.appendChild(newComment);
	counter++;
}
function deletingComment(num) {
	var commentsArea = document.getElementById("divParent");
	commentsArea.removeChild(document.getElementById("comment" + num));
}