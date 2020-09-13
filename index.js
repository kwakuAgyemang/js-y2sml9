// Import stylesheets
import './style.css';

// Use DOM to insert text in an element
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add User</h1>`;
const form = document.getElementById("addForm");
// write a function to connect to the listner
function onSubmit(event) {
   event.preventDefault(); 
   const first= form.elements["f_name"].value;
   const last = form.elements["l_name"].value;
   const email = form.elements["email"].value;
  
   
  if (first.length == 0){
    form.elements["f_name"].style.border = "2px solid";
    form.elements["f_name"].style.borderColor = "red";
  }else {
    form.elements["f_name"].style.border = "none";
  }
  if (last.length == 0){
    form.elements["l_name"].style.border = "2px solid";
    form.elements["l_name"].style.borderColor = "red";
  }else {
    form.elements["l_name"].style.border = "none";
  }
  if (email.length == 0){
    form.elements["email"].style.border = "2px solid";
    form.elements["email"].style.borderColor = "red";
  }else {
    form.elements["email"].style.border = "none";
  }

   if (first.length == 0 || last.length == 0 || email.length == 0 || !document.getElementById("male").checked && !document.getElementById("female").checked){
     const error = document.getElementById('form-errors');
     error.innerHTML = '<p> First name, Last name, gender, or email is invalid.</p>';
   }
   else{
     let gender = "Male";
     if (document.getElementById("female").checked){
       gender = "Female";
     }
     window.alert(`hey ${first} ${last}, ${gender},  ${email} you submitted a form`);
   }
   
}
// attach function to the form "submit" event.
form.addEventListener('submit',onSubmit)