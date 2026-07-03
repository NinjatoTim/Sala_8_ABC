//Hacer un random
function randomColor(){
    let names = document.getElementsByTagName("h5");
    let colors = ["green", "blue", "red"];
    let aleatorio = 0;
    //let aleatorioNombres = Math.floor(Math.random() * names.length);
    for (let i=0 ; i<names.length; i++){
        aleatorio = Math.floor(Math.random() * colors.length);
        names[i].style.color = colors[aleatorio];
    }
}

