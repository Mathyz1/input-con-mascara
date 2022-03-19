//tarjeta de credito con mascara
const inputCard = document.querySelector("#input-card");
const inputDate = document.querySelector("#input-date");
const inputCVV = document.querySelector("#input-CVV");

//se puede hacer con los simbolos que quieras
const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

let current = "";
//para cada uno de mis inputs voy a tener un arreglo donde voy a almacenar cada uno de los valores
//despues esos valores los voy a transformar y los voy a mostrar en mi input
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener("keydown", e => {
    if (e.key == "Tab") {
        return;
    }

    e.preventDefault();
    handlerInput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join("");
})

inputDate.addEventListener("keydown", e => {
    if (e.key == "Tab") {
        return;
    }

    e.preventDefault();
    handlerInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
})

inputCVV.addEventListener("keydown", e => {
    if (e.key == "Tab") {
        return;
    }

    e.preventDefault();
    handlerInput(maskCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
})

function handlerInput(mask, key, arr){
    //teclas que tiene permitido el usuario ingresar al input
    let numbers = ["0","1","2","3","4","5","6","7","8","9"];

    //boton de retroceso para eliminar
    if (key == "Backspace" && arr.length > 0) {
        let suprimido = arr.pop();
        if (suprimido == "-" || suprimido == "/") {
            arr.pop();
        }
        return;
    }
    //aca el mas 1 es porque aun no agregue la tecla por lo que verifico si aun me lo permite
    //la dimension de la mascara
    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        //los caracteres de separacion que utilizo en este caso son - y /
        //comparamos lo que vamos escribiendo con la mascara, si en ese lugar va un separador
        //agregamos el separador al array y despues el numero, caso contrario solo el numero
        if (mask[arr.length] == "-" || mask[arr.length] == "/") {
            arr.push(mask[arr.length], key);
        }else{
            arr.push(key);
        }
    }

}
