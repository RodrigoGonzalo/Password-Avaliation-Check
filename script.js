
const PasswordField = document.querySelector(".password-field input");
const EyeIcon = document.querySelector(".password-field i")
const RequirementList = document.querySelectorAll(".requirement-list li")

/* 
    Array of password requeriments with corresponding regular
    expressions and index of the requeriment list itens.
*/
const Requirements = [
    {regex: /.{8}/, index: 0}, // Minimum of 8 characters
    {regex: /[0-9]/, index: 1}, // At least 1 number
    {regex: /[a-z]/, index: 2}, // At least one lower case letter
    {regex: /[A-Z]/, index: 3}, // At least one upper case letter
    {regex: /[^A-Za-z0-9]/, index: 4}, // At least one special symbol
]

PasswordField.addEventListener("keyup", (e) =>{
    Requirements.forEach(item =>{

        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const RequirementItems = RequirementList[item.index]

        if(isValid){
            RequirementItems.firstElementChild.className = "fa-solid fa-check";
            RequirementItems.classList.add("valid");
        }
        else{
            RequirementItems.firstElementChild.className = "fa-solid fa-circle";
            RequirementItems.classList.remove("valid");
        }
    })
})

EyeIcon.addEventListener("click", () => {
    // Toggle the password field type between password and text.
    PasswordField.type = PasswordField.type === "password" ? "text" : "password";

    // Update the eye icon based on the password input type.
    EyeIcon.className = `fa-solid fa-eye${PasswordField.type === "password" ? "" : "-slash"}`
})