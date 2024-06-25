function PadCero(valor) {
    return valor.toString().padStart(2, "0");
}

function lahora() {
    const horario = new Date();
    const horas = PadCero(horario.getHours());
    const minutos = PadCero(horario.getMinutes());
    const segundos = PadCero(horario.getSeconds());

    const imprimir = horas + ":" + minutos + ":" + segundos;
    document.getElementById("reloj").textContent = imprimir;
}
setInterval(lahora, 1000);

const horap = document.getElementById("reloj");
horap.classList.add("horap");

document.getElementById("imgface").src = '/images/icono-facebook.png';


// function pisoinput (){

//     let opcion = document.getElementById("piso").value;
//     if (opcion == "departamento"){
//         const codigo = document.createElement("input");
//         codigo.setAttribute("type", "text");
//         codigo.setAttribute("placeholder", 'Piso');
//         codigo.setAttribute("id", "numero")
//         const span = document.getElementById("div-piso");
//         span.appendChild(codigo);
//     }else if (opcion == "casa" || opcion == "otro"){
//         const codigo = document.getElementById("numero");
//         codigo.remove();
//     }else if(opcion == "otro"){
//         const otro = document.createElement("input");
//         otro.setAttribute("type", "text");
//         otro.setAttribute("placeholder", "Acláre");
//         otro.setAttribute("id", "otro-t");
//         const divOtro = document.getElementById("div-piso");
//         divOtro.appendChild(otro);
//     } else if (opcion == "casa" || opcion =="departamento"){
//         const alcarar = document.getElementById("otro-t");
//         alcarar.remove();
//     }
// }

function pisoinput(){
    const inAclarar = document.getElementById("aclarar");
    let opcion = document.getElementById("piso").value;

    if (opcion == "casa"){
        inAclarar.classList.add("invisible");
    }else if(opcion == "departamento"){
        inAclarar.classList.remove("invisible");
        inAclarar.setAttribute("placeholder", "Numero de piso")
    } else if (opcion == "otro"){
        inAclarar.classList.remove("invisible");
        inAclarar.setAttribute("placeholder", "Aclare")
    }
 }

    
const corte1 = document.querySelectorAll(".corte1");
corte1.forEach(elemento => {
    elemento.style.color = 'rgb(46, 46, 46)';
})

function validacion1 (){
    let validar1 = document.getElementById("valid1");
    let validar2 = document.getElementById("valid2");
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if (usuario == null || usuario == ''){
        validar1.innerHTML = 'Ingrese su usuario';
    }
    if (password == null || password == ''){
        validar2.innerHTML = 'Ingrese su contraseña';
    }
}



function validacion2 (){
    let validar1 = document.getElementById("valid1");
    let validar2 = document.getElementById("valid2");
    let validar3 = document.getElementById("valid3");
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let confirmpass = document.getElementById("confirmpass").value;
    let error = [];
    
    if (usuario == null || usuario == ''){
        validar1.innerHTML = 'Ingrese su usuario';
    } 

    if (password == null || password == ''){
        validar2.innerHTML = 'Ingrese su contraseña';
    }

    if (confirmpass != password){
        error.push('No coincide con la contraseña');
    }

    if (confirmpass == null || confirmpass == ''){
        error.push('Confirme su contraseña');
    }
    validar3.innerHTML = error.join(", ");
    if ( error == 0 ){
        return true;
    }else{
        return false;
    }
        
}



// const formulario = document.getElementById("formu");

//     formulario.addEventListener('submit', function(evento){
        
//         evento.preventDefault();

//         let validar1 = document.getElementById("valid1");
//         let validar2 = document.getElementById("valid2");
//         let validar3 = document.getElementById("valid3");
//         let usuario = document.getElementById("usuario").value;
//         let password = document.getElementById("password").value;
//         let confirmpass = document.getElementById("confirmpass").value;
//         let error = [];
        
//         if (usuario == null || usuario == ''){
//             validar1.innerHTML = 'Ingrese su usuario';
//         }

//         if (password == null || password == ''){
//             validar2.innerHTML = 'Ingrese su contraseña';
//         }

//         if (confirmpass != password){
//             error.push('No coincide con la contraseña');
//         }

//         if (confirmpass == null || confirmpass == ''){
//             error.push('Confirme su contraseña');
//         }
        
//         validar3.innerHTML = error.join(", ");
        
//     })




