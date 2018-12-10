function validar(){
    var nombre = document.forms["registro"]["nombre"];
    var email = document.forms["registro"]["email"];
    var password = document.forms["registro"]["email"];
    var passwordRepetida = document.forms["registro"]["password-repetida"];
    if(nombre.value==""){       
        alert("El campo nombre está vacío");
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    } else if(email.value==""){
        alert("Rellena el email");
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    } else if(password.value==""){
        alert("Rellena el password");
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    } else if(passwordRepetida.value==""){
        alert("Repite el password");
        email.focus();
        email.style.border = "1px solid red";
        return false;
    } else if(password.value!=passwordRepetida.value){
        alert("Las contraseñas no coinciden");
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    } else {
        alert("El formulario es correcto");
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    }
}