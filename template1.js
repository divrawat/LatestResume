// Grabbing Elements

var Cname=document.getElementById("name");
var designation=document.getElementById("designation"); 
var contact=document.getElementById("contact"); 
var description=document.getElementById("description"); 
var exp=document.getElementById("exp"); 
var degree=document.getElementById("degree"); 


var college=document.getElementById("college"); 

var project1=document.getElementById("project1"); 
var project2=document.getElementById("project2"); 
var project3=document.getElementById("project3"); 
var project4=document.getElementById("project4"); 
var descproject=document.getElementById("descproject"); 


var skills1=document.getElementById("skills1"); 
var skills2=document.getElementById("skills2"); 
var skills3=document.getElementById("skills3"); 
var skills4=document.getElementById("skills4"); 
var addskills=document.getElementById("addskills"); 




// Previewing using Input - Addeventlistener
Cname.addEventListener("input",()=>{
 document.getElementById("getname").innerText=Cname.value;
});
designation.addEventListener("input",()=>{
  document.getElementById("getdesignation").innerText=designation.value;
});
contact.addEventListener("input",()=>{
  document.getElementById("getcontact").innerText=contact.value;
});
description.addEventListener("input",()=>{
  document.getElementById("getdescription").innerText=description.value;
});
exp.addEventListener("input",()=>{
  document.getElementById("getexp").innerText=exp.value;
});



degree.addEventListener("input",()=>{
  document.getElementById("getdegree").innerText=degree.value;
});



college.addEventListener("input",()=>{
  document.getElementById("getcollege").innerText=college.value;
});

cgpa.addEventListener("input",()=>{
  document.getElementById("getcgpa").innerText=cgpa.value;
});



skills1.addEventListener("input",()=>{
  document.getElementById("getskills1").innerText=skills1.value;
});
skills2.addEventListener("input",()=>{
  document.getElementById("getskills2").innerText=skills2.value;
});
skills3.addEventListener("input",()=>{
  document.getElementById("getskills3").innerText=skills3.value;
});
skills4.addEventListener("input",()=>{
  document.getElementById("getskills4").innerText=skills4.value;
});
skills5.addEventListener("input",()=>{
  document.getElementById("getskills5").innerText=skills5.value;
});
skills6.addEventListener("input",()=>{
  document.getElementById("getskills6").innerText=skills6.value;
});
addskills.addEventListener("input",()=>{
  document.getElementById("getaddskills").innerText=addskills.value;
});



project1.addEventListener("input",()=>{
  document.getElementById("getproject1").innerText=project1.value;
});
project2.addEventListener("input",()=>{
  document.getElementById("getproject2").innerText=project2.value;
});
project2.addEventListener("input",()=>{
  document.getElementById("getproject2").innerText=project2.value;
});
project3.addEventListener("input",()=>{
  document.getElementById("getproject3").innerText=project3.value;
});
project4.addEventListener("input",()=>{
  document.getElementById("getproject4").innerText=project4.value;
});
project5.addEventListener("input",()=>{
  document.getElementById("getproject5").innerText=project5.value;
});
project6.addEventListener("input",()=>{
  document.getElementById("getproject6").innerText=project6.value;
});
descproject.addEventListener("input",()=>{
  document.getElementById("getdescproject").innerText=descproject.value;
});


const img = document.querySelector('#photo');
const img2 = document.querySelector('#photo1');
const file = document.querySelector('#file');

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];
    

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
            img2.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
        
    }
});

// Image Upload

  $('#downloadcv').click(function(){
     html2canvas($('#container1'), 
     {
       onrendered: function (canvas) {
         var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
         a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
         a.download = 'Cv.jpg';
         a.click();
       }
     });
   });




