function functionSubmit(e){
    e.preventDefault();
 }

function login(){

    
    
    let correo = "juniorlopez3@live.com", correoing = document.getElementById('correoing').value;

    localStorage.setItem("correo", correo);
    
    if (correo == correoing){
        
        window.location.href = "home.html";
    }else{
        alert ("ingrese un correo valido. Pr favor ingrese juniorlopez3@live.com");
    }

}

