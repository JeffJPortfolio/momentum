const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a") ;

function onLogInSubmit(event) {
    event.preventDefault();
    loginForm.classList.ad

    const username = loginInput.value;
    console.log(username);

}

function handleLinkClick(event) {
    event.preventDefault(); 
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    console.log(username) ;
    greeting.innerText = "Hello" + username 
}

loginForm.addEventListener("submit", onLogInSubmit);
link.addEventListener("click", handleLinkClick);


