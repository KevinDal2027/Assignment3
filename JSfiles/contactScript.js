document.addEventListener("DOMContentLoaded", () => {
    const allInputs = document.querySelectorAll("input");
    changeOnFocus(allInputs);

    const validateButton = document.getElementById("validateButton");
    validateButton.addEventListener("click", validate);
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let postalCode = document.querySelector(".code").value;
    let contactMessage = document.querySelector(".contMessage").value;

    let templateMessage = `TEMPLATE: 
    From: ${name} (${email})
    To Kevin Nguyen (kv375322@dal.ca)
    Phone: ${phone}
    Postal Code: ${postalCode}
    Message: ${contactMessage}`;

    alert(templateMessage);
    });
});
function changeOnFocus(arraysOfInput){
    for (let input of arraysOfInput) {
        input.addEventListener("focus", function(event){
            event.preventDefault;
            document.querySelector(".message").textContent = "Please hit validate before submit!";
            document.querySelector(".message").style.color = "grey";
        });
    }
}

const submitButton = document.querySelector(".submit");
submitButton.classList.add("hidden");

function validate(event){
    event.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let postalCode = document.querySelector(".code").value;
    let contactMessage = document.querySelector(".contMessage").value;
    let outlineMessage  = document.querySelector(".message");

    outlineMessage.style.color = "white";
    let valid = true;
    let errorString = "";
    

    if (name == '' || email == '' || phone == '' || postalCode == ''||contactMessage == ''){
        errorString += "All fields are needed! Please fill all fields<br>";
        valid = false;
    } 
    if (!(email.endsWith("@dal.ca"))){
        errorString += "Please enter a dal email to contact me!<br>";
        valid = false;
    }
    if (isNaN(parseInt(phone)) || phone.length !== 10) {
        errorString += "Please enter a valid 10-digit phone number!<br>";
        valid = false;
    }
    if (postalCode.length == 6){
        for (let i = 0; i < postalCode.length; i++) {
            if (i % 2 === 0) {
                if (!isNaN(parseInt(postalCode[i]))) {
                    errorString += "Please enter a valid postal code!<br>";
                    valid = false;
                    break;
                }
            } else {
                if (isNaN(parseInt(postalCode[i]))) {
                    errorString += "Please enter a valid postal code!<br>";
                    valid = false;
                    break;
                }
            }
        }
    }
    if (postalCode.length != 6){
        errorString += "Please enter a valid postal code!<br>";
        valid = false;
    }
    
    
    if (contactMessage.length > 400){
        errorString += "Please enter the message below 400 letters!<br>";
        valid = false;
    }
    
    if(!valid){
        outlineMessage.innerHTML = errorString;
        outlineMessage.style.color = "red";
        submitButton.classList.add("hidden");
        submitButton.classList.remove("displayContent");
    }
    else if(valid){
        outlineMessage.innerHTML = "You have successfully created a template to email me! Click the submit button to get template!";
        outlineMessage.style.color = "green";
        submitButton.classList.remove("hidden");
        submitButton.classList.add("displayContent");
        
    }
}