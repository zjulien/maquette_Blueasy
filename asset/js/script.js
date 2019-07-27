errorName = document.querySelector('#error-name');
nameInput = document.querySelector('#exampleFormText');

errorEmail = document.querySelector('#error-email');
emailInput = document.querySelector('#exampleFormControlInput1');



errorMessage = document.querySelector('#error-message');
messageInput = document.querySelector('#input-message');

var nameValidation = false;
var emailValidation = false;
var messageValidation = false;

nameInput.addEventListener('blur', erreurName);
emailInput.addEventListener('blur', erreurEmail);
messageInput.addEventListener('blur', erreurMessage);

document.querySelector('#submit').addEventListener('click', validationForm);

messageAlert = document.querySelector('#msgalert');
alert = document.querySelector('#alert');

function erreurName() {

      var letters = /^[a-zA-ZàáâęèéïńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;


      if(document.querySelector('#exampleFormText').value.match(letters)) {

              errorName.innerHTML = "";
              nameValidation = true;        
      } 
      else if (document.querySelector('#exampleFormText').value === ("")){

              errorName.innerHTML ="Veuillez renseigner votre nom" ;
              nameValidation = false;
      }   
      else {
              errorName.innerHTML ="Veuillez utilisé des caractères valides" ;
              nameValidation = false;
      }

     
      }

      function erreurEmail() {

        var letters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var lettersValide = /\S+@\S+\.\S+/;
        console.log("aa");

        if(document.querySelector('#exampleFormControlInput1').value.match(lettersValide) && document.querySelector('#input-email').value.match(letters)) {
          
                errorEmail.innerHTML = "";
                emailValidation = true;
        } 
        else if (document.querySelector('#exampleFormControlInput1').value === ("")){

                errorEmail.innerHTML ="Veuillez renseigner email" ;
                emailValidation = false;

        }   
        else {
                errorEmail.innerHTML ="Veuillez utilisé une adresse mail valide" ;
                emailValidation = false;

        }
        }

        function erreurMessage() {

         
            if(!document.querySelector('#input-message').value){

                errorMessage.innerHTML ="Veuillez renseigner votre message" ;
                messageValidation = false;
            }   

            else  {
                errorMessage.innerHTML = "";
                messageValidation = true;
            } 
          }
      
        function validationForm(e) {
         
                  if( nameValidation === false || emailValidation === false || messageValidation === false){

                          e.preventDefault();
                          window.scrollTo(0,3300);

                          if(nameValidation === false) {

                                  errorName.innerHTML = "Le champs saisie n'est pas valide";
                          }
                          
                          if(emailValidation === false) {

                                  errorEmail.innerHTML = "Le champs saisie n'est pas valide";
                          }
                         
                          if(messageValidation === false) {
 
                                  errorMessage.innerHTML = "Le champs saisie n'est pas valide";
                          }
                  } 
    
                   else {
                          
                          messageAlert.innerHTML = "Votre message à bien été envoyé !"
                          messageAlert.style.height = " 40px";
                          messageAlert.style.visibility = " visible";
                          messageAlert.animationName = "disparition";
                          messageAlert.animationDuration = "5s";

                          submit();
                        
                  }
          };