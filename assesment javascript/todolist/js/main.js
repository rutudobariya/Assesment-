// navbar Toggler Button
// navbar toggler
const menu=document.querySelector("#menu");
const btnToggle=document.querySelector("#btn-toggle");
const menuList=document.querySelector("#menu-list");
btnToggle.addEventListener("click",function(){
    menuList.classList.toggle("active");
});

// for enable submit button
function toggleButton(ref,btnId)
{
document.getElementById(btnId).disabled=false;
}
// window onload 
window.onload=()=>
{
const form1=document.querySelector("#addForm");
let items=document.getElementById("items"); //display or read a items
let submit=document.getElementById("submit");
editItem=null;
form1.addEventListener("submit",additem);
items.addEventListener("click",removeitem);
//alert('hi')

}

// for add new items create a function
function additem(e)
{
e.preventDefault(); //pervent redirections or redirect on same page
// update a item in items list
if(submit.value!="Submit")
{
   editItem.target.parentNode.childNodes[0].data=document.getElementById("item").value;
   Swal.fire({
    title: "Wow!",
    text: "We are successfully updated new items!",
    icon: "success"
  });

   submit.value="Submit";
   document.getElementById("item").value="";
   return false;
}



if(submit.value!="Submit")
{
console.log('Hi anybody');
}

// add new items
let newitem=document.getElementById("item").value;

if(newitem.trim()=="" || newitem.trim()==null)
{
if(document.frm.item.value=="")
{   
//alert('We can not accept Null values for add Items please Input some values for add Items')  
// sweet alert2 js messages
Swal.fire({
    title: "Something went wrong!",
    text: "Can not accept null values!",
    icon: "error"
  });
document.frm.item.focus();
return false;  
}
}

let itmalpa=/^[a-zA-Z]+$/;
if(!itmalpa.test(document.frm.item.value))
{
//alert('We can accept only alphabetic character')  
Swal.fire({
    title: "Something went wrong!",
    text: "We can only accept alpahbetic character Only!",
    icon: "error"
  });
document.frm.item.focus();       
return false;  
}
else 
{
document.getElementById("item").value="";
let li=document.createElement("li");
li.className="list-group-item";
// for add delete button in list
let deleteButton=document.createElement("button");
deleteButton.className="btn btn-danger btn-sm text-white float-end delete";
deleteButton.appendChild(document.createTextNode("Delete"));
// for add edit button in list
let editButton=document.createElement("button");
editButton.className="btn btn-sm btn-primary text-white float-end edit";
editButton.appendChild(document.createTextNode("Edit"));

li.appendChild(document.createTextNode(newitem));
// li.appendChild(li);
li.append(deleteButton);
li.append(editButton);
//li.append(editButton);
// add new items and read items
items.appendChild(li);
Swal.fire({
    title: "Hurrey!",
    text: "Items succefully Addedd!",
    icon: "success"
  });
//alert('Hi i am just checked')
}
}
// create a function for remove items
function removeitem(e)
{
    e.preventDefault();// redirections prevents
    if(e.target.classList.contains("delete"))
    { 
      if(confirm('Are you sure to Delete Items'))
      {
     let li=e.target.parentNode;
     items.removeChild(li);  
    Swal.fire({
        title: "wow!",
        text: "Items succefully Deleted!",
        icon: "success"
      });
    }
  
    else 
    {

      Swal.fire({
        title: "Err!",
        text: "Something wen wrong!",
        icon: "error"
      });
    }  
  }

  // edit a item from items list

  if(e.target.classList.contains("edit"))
  { 
     document.getElementById("item").value=e.target.parentNode.childNodes[0].data;
     submit.value="Edit";
     editItem=e;

  }


}