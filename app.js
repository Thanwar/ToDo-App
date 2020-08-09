function addtask()
{
    // getting elements 
    var task = document.getElementById("inputfield")
    var list = document.getElementById("list")

    // creating li for list
    var li = document.createElement("li")
    var p = document.createTextNode(task.value)


    // creating buttons for list
    var editBtn = document.createElement("button")
    var edit = document.createTextNode("Edit")
    var delBtn = document.createElement("button")
    var del = document.createTextNode("Delete")


    // adding values 
    li.appendChild(p)
    list.appendChild(li)
    editBtn.appendChild(edit)
    li.appendChild(editBtn)
    delBtn.appendChild(del)
    li.appendChild(delBtn)


    // to empty input feild 
    task.value=""


    // getting delete button
    delBtn.setAttribute("onclick","deletetask(this)")
    // getting edit button
    editBtn.setAttribute("onclick","editTask(this)")

}


// delete element in ul
function deletetask(e)
{
    e.parentNode.remove()
}


function editTask(e)
{
    var updatedtask = prompt("Edit task",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = updatedtask

}


// delete all elements in list
function deleteAll()
{
    var list = document.getElementById("list")
    list.innerHTML=""
}