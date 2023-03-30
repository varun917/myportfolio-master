function sendMail() {
 var params = {
   name: document.getElementById("name").value,
   email: document.getElementById("email").value,
   message: document.getElementById("msg").value,
 };
  alert("Your message sent successfully!!");

 const serviceID = "service_85egqvv";
 const templateID = "template_74r2acw";

   emailjs.send(serviceID, templateID, params)
   .then(res=>{
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("message").value = "";
       console.log(res);


   })
   .catch(err=>console.log(err));

}
