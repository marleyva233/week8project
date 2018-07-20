//the function will be triggered when clicking a button

//we want to submit the information from the 
//input and textarea field so they need a class or id

//input id is userName 
//textarea id is myComment
//my variables to make the code shorter
//this is how i access the elements values that i'm going to use later

//this is my attempt at creating a variable containing a function that i can add as an onclick property of 
//the newly created deletemycomment button
var counter=0;
function submitMyComment(){
	// my variables
	var userName=document.getElementById("userName");
	var myComment=document.getElementById("myComment");
	var parentDiv=document.getElementById("divParent");
	var date=new Date();


	// to keep the user from posting an incomplete comment the following if statements are used	
	if (userName.value==""){
		alert("Please enter your username!");
		return false;
	}
	if (myComment.value==""){
		alert("You cannot submit an empty comment :( !");
		return false;
	}
	// create the elements needed for the output
	//creating a DIV to hold the comments
	var newDiv=document.createElement("div");
		newDiv.className="childDiv mx-auto bg-light col-8 mb-1";
		newDiv.id="comment"+counter;
	//creating a span element to hold the username
	var newSpan=document.createElement("span");
		newSpan.className="text-info username";
	//creating a p element to hold the actual comment
	var newPara=document.createElement("p");
		newPara.className="comment";
	//creating a span element to hold the date
	var newDate=document.createElement("span");
		newDate.className="smalldate";
	//creating a button that deletes the comment
	var deleteComment=document.createElement("button");
		deleteComment.className="deletebutton p-1 bg-light text-info";
		//trying to give deleteComment an onclick property
	    deleteComment.setAttribute("onclick", "deletingComment("+ counter + ")");

	
	// give the elements content
	newSpan.innerText=userName.value;
	newPara.innerText=myComment.value;
	//the div element does not need connet because
	//everything is appended to it (i.e it has content appended)
	newDate.innerText=date;	
	//the date is created as a variable outside of the function
	//creating the text for the new delete comment element
	deleteComment.innerText="delete comment";

	// append the elements to the dom
	//appending the newly created js div to the html div
	parentDiv.appendChild(newDiv);
	// apppending the username span element to the div
	newDiv.appendChild(newSpan);
	//appending the comment paragraph to the div
	newDiv.appendChild(newPara);
	//appending the date element to the div element
	newDiv.appendChild(newDate);
	//appending the delete comment button to the div element
	newDiv.appendChild(deleteComment);

	counter++;
}
function deletingComment(num){
	var commentsArea=document.getElementById("divParent");
	commentsArea.removeChild(document.getElementById("comment"+num));
}