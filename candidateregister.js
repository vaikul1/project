$(document).ready(function(){

$('form[id="form_val"]').validate({
rules:{

username: "required",
password: {
required: true,
},
confirmpassword:{
required: true,
equalTo: "#cpassword"
},
mobile:{
required:true,
minlength:10,
maxlength:10,
},

email:{
required:true,
email:true,
},


address:"required",
per10:"required",


yop10: "required",
board10: "required",
per12: "required",
yop12: "required",
board12: "required",
stream12: "required",
ugper: "required",
ugyop: "required",
ugbranch: "required",
resume:"required",
photo:"required",

securedquestion: "required",
securedanswer: "required"
},
messages:{
username:"Name is required",

password:{
required: "Enter the password",
},
confirmpassword:{
required:"Enter confirm password",
equalTo:"Passwords does not match",
},

mobile:{
required:"Please enter your contact no",
minlength:"Contact no must be 10 digit",
maxlength:"Contact no must be 10 digit"
},
email:{
required:"Enter valid Email"
},
address:{
required:" Enter address"
},

per10:
{
required:"Enter  percentage"
},
yop10:{
required:"Enter  year of passing"
},
board10:{
required:"Enter 10th board"
},
per12:{
required:"Enter  percentage"
},
yop12:{
required:"Enter year of passing"
},
board12:{
required:"Enter 12th board"
},
stream12:{
required:"Enter 12th stream"
},
ugper:{
required:"Enter UG percentage"
},
ugyop:{
required:"Enter UG year of passing"
},
ugbranch:{
required:"Enter UG branch"
},
resume:{
required:" Please upload resume"
},
photo:{
required:" Please upload resume"
},

securedquestion:{
required:"Please select question"
},
securedanswer:{
required:"Please provide answer"
}
},

submitHandler:function(form){
form.submit();
}
});
});