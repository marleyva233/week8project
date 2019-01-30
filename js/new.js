var counter = 0;
function submitMyComment() {
	var userName = document.getElementById("userName");
	var myComment = document.getElementById("myComment");
	var parentDiv = document.getElementById("divParent");
	var date = new Date();
	if (userName == "" || myComment == "") {
		alert("Please enter your username and/or comment!");
		return false;
	}
	var newComment = document.createElement("div");
		newComment.id = "comment" + counter;
		newComment.classList.add("col-10", "mx-auto");
		newComment.innerHTML = "<h4>" + userName.value + "</h2>";
		newComment.innerHTML += "<p>" + myComment.value + "</p>";
		newComment.innerHTML += "<span class='smalldate'>" + date + "</span>";
		newComment.innerHTML += "<button class='deleteBtn' onclick='deletingComment(" + counter + ");'> Delete Comment </button>";
	parentDiv.appendChild(newComment);
	counter++;
	userName.value="";
	myComment.value="";
}
function deletingComment(num) {
	var commentsArea = document.getElementById("divParent");
	commentsArea.removeChild(document.getElementById("comment" + num));
}