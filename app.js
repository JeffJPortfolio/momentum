const loginForm = document.getElementById( "login-form" );
const loginInput = loginForm.querySelector("input") ;
const loginButton = loginForm.querySelector("button") ;

function handLoginButonClick() {
    const value = loginInput.value ;
    if (value === "" ) {
        alert("Please write your name.") ;
    } else if (value.length > 15){
        alert("Your name is too long.")
    } else {

    }
}

