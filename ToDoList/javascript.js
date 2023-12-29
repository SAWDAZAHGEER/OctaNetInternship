 function addtask()
{ 
 var todoInput=document.getElementById("to-do-input");
 var todoList=document.getElementById("to-do-list");

if(todoInput.value!=="") // A task is actually added
{
 var li=document.createElement("li"); var bttn=document.createElement("button"); //creating a list item and button in memory 
 bttn.classList.add("myBttn");
 li.textContent=todoInput.value; bttn.textContent= "-";//input task is added to list 
 todoList.appendChild(li);todoList.appendChild(bttn);//append the created elements to list in DOM
 todoInput.value="";//clear input 
 // Keeping track of Remaining Tasks 
 var countel=parseInt(document.getElementById("count").innerHTML); 
 countel=countel+1;
 document.getElementById("count").innerHTML = countel;
 bttn.onclick = function()
 {
    // Remove the task (li) and the button (bttn) when this button is clicked
    todoList.removeChild(li);
    todoList.removeChild(bttn);
    // Keeping track of Remaining Tasks 
 var countel=parseInt(document.getElementById("count").innerHTML); 
 countel=countel-1;
 document.getElementById("count").innerHTML = countel;
};
}
else
{
 alert("please enter a task !");
}

}