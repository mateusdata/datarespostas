document.getElementById("resultado").innerText = "";
function insert(x) {
   let numero = document.getElementById("resultado").innerHTML;

   document.getElementById("resultado").innerHTML += x;
}

function clean(x) {
   document.getElementById("resultado").innerHTML = "";
}
function back(x) {
   let backHow = document.getElementById("resultado").innerHTML;
   document.getElementById("resultado").innerHTML = backHow.substring(0, backHow.length - 1);
   //retorna um trexo do texto que começa a posição 0 e termina na posição x.length -1 para excluir o utimo caractere
}

function calculate(){

   let total = document.getElementById("resultado").innerHTML;
   document.getElementById("resultado").innerHTML = eval(total)
   console.log(eval(total));

}
