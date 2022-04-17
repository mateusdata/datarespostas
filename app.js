let botao = document.querySelector("#app form button");
let cep = document.querySelector("#app form input");
let main = document.querySelector("#app main");
botao.addEventListener("click", run);
function run(event) {
    event.preventDefault(); //não deixa a pagina recarregar apos o envio

    let valorCep = cep.value;
    valorCep = valorCep.replace(" ", "");
    valorCep = valorCep.replace(".", "");
    valorCep = valorCep.trim();  //remove os espaços em branco no final e no começo
    console.log(valorCep);
    let teste;
    
    axios.get("https://viacep.com.br/ws/" + valorCep + "/json/")
        .then((response) => { //se tudo der ceto ele entra o ..then entra na arrow funtion
            teste = response;

            if (response.data.erro) {
                throw new Error(console.log("erro"));
            }
            main.innerHTML = '';
            if (response.data.logradouro == "" | response.data.bairro == "") {
                printData(`Cidade: ${response.data.localidade}`);
                printData(`Estado: ${response.data.uf}`);
                printData(`DDD: ${response.data.ddd}`);
                return
            }
            printData(`Rua: ${response.data.logradouro}`);
            printData(`Cidade: ${response.data.localidade}`);
            printData(`Estado: ${response.data.uf}`);
            printData(`Bairro: ${response.data.bairro}`);
            printData(`DDD: ${response.data.ddd}`);

        })
        .catch((erro) => {
            main.innerHTML = '';
            printData("Erro cep invalido");

        })
        .finally(() => {
            if (response.status === 200) {
                printData("Consulta realizada com sucesso");
            }

        });
}

function printData(txt) {
    let lineCep = document.createElement("p"); //a variavel a criação do elemento p
    lineCep.innerText = txt
    //recebe como paramentro o elemento array retornado da api.data.qualquer atibuto do array
    main.appendChild(lineCep); //coloaca o valor da tag P dentro da tag main do html
}


