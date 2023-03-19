let b = document.getElementById("boton");
console.log(b);
b.addEventListener("click", saludar);

function saludar(){
    alert("click en el botón")
}

$(() => {
    $("#boton").click(() =>{
        console.log("Hola, estoy utilizando jQuery")
    })
})




