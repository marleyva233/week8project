var counter = 0;
function submitMyComment() {
	var userName = document.getElementById("userName").value;
	var myComment = document.getElementById("myComment");
	var parentDiv = document.getElementById("divParent");
	var date = new Date();
	if (userName === "") {
		alert("All fields must be filled to comment!");
		return false;
	}
	var newDiv=document.createElement("div");
		newDiv.className="childDiv mx-auto bg-light col-8 mb-1";
		newDiv.id="comment"+counter;
	var newSpan=document.createElement("span");
		newSpan.className="text-info username";
	var newPara=document.createElement("p");
		newPara.className="comment";
	var newDate=document.createElement("span");
		newDate.className="smalldate";
	var deleteComment=document.createElement("button");
		deleteComment.className="deletebutton p-1 bg-light text-info";
	    deleteComment.setAttribute("onclick", "deletingComment("+ counter + ")");
	newSpan.innerText=userName.value;
	newPara.innerText=myComment.value;
	newDate.innerText=date;	
	deleteComment.innerText="delete comment";
	parentDiv.appendChild(newDiv);
	newDiv.appendChild(newSpan);
	newDiv.appendChild(newPara);
	newDiv.appendChild(newDate);
	newDiv.appendChild(deleteComment);
	counter++;
}
function deletingComment(num){
	var commentsArea=document.getElementById("divParent");
	commentsArea.removeChild(document.getElementById("comment" + num));
}