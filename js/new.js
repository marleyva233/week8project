let counter = 0;
let myComment = document.getElementById("myComment");
function submitMyComment() {
	let userName = document.getElementById("userName");
	const parentDiv = document.getElementById("divParent");
	const date = new Date();
	if (userName.value == "" || myComment.value == "") {
		alert("Please enter your username and/or comment!");
		return false;
	}
	let newComment = document.createElement("div");
		newComment.id = "comment" + counter;
		newComment.classList.add("col-10", "pb-3", "mx-auto");
		newComment.innerHTML = `<h6>${userName.value}</h6>${myComment.value}
		<span class='smalldate'>${date}<span>
		<button class='deleteBtn' onclick='deletingComment("${counter}");'> Delete Comment </button>`;
	parentDiv.appendChild(newComment);
	counter++;
	userName.value = "";
	myComment.value = "";
}
function deletingComment(num) {
	var commentsArea = document.getElementById("divParent");
	commentsArea.removeChild(document.getElementById("comment" + num));
}
myComment.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		submitMyComment();
	} else return false;
});