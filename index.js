document.addEventListener("DOMContentLoaded", function () {
    /*Selecting the necessary elements*/
    const refreshButton = document.getElementById("refresh");
    const genInput = document.getElementById("gen");
    const inpInput = document.getElementById("inp");
    const submitButton = document.getElementById("submit");
    const incorrectMessage = document.querySelector(".captcha-box.btn p");

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6;
    
    /*Defining the function to generate captcha*/

    function generateCaptcha() {
      let captcha = "";
      for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
      }
      const randomStringArray = captcha.split("");
      disp_captcha = randomStringArray.join("   ");
      return disp_captcha;
    }
                  
    function refreshCaptcha() {
      const captcha = generateCaptcha();
      genInput.value = captcha;
      inpInput.value = "";
      incorrectMessage.style.display = "none";
    }
  
    function validateCaptcha() {
      const generatedCaptcha = genInput.value;
      const enteredCaptcha = inpInput.value;
      const StringArray = generatedCaptcha.split("   ");
      let new_captcha = StringArray.join("");
      if (new_captcha.toLowerCase() === enteredCaptcha.toLowerCase()) {
        incorrectMessage.innerHTML = "Captcha is correct! Proceed with submission.";
        incorrectMessage.style.color = "green";
        incorrectMessage.style.display = "block";
        // alert("Captcha is correct! Proceed with submission.");
      } else {
        incorrectMessage.innerHTML = "Captcha is Incorrect! Try Again";
        incorrectMessage.style.color = "red";
        incorrectMessage.style.display = "block";
      }
    }
  
    refreshButton.addEventListener("click", refreshCaptcha);
    submitButton.addEventListener("click", validateCaptcha);
  
    refreshCaptcha();
  });
  
