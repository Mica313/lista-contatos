const form = document.getElementById('formulario');
let linhas = ' ';
const contatos = [], numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaLista();
})

function adicionaLinha(){
    const inputContato = document.getElementById('nome');
    const inputNumero= document.getElementById('numero');

    if(contatos.includes(inputContato.value)){
        alert(`o contato ${inputContato.value} ja existe!`)
    }else{
        contatos.push(inputContato.value)
        numeros.push(inputNumero.value);

        let linha = `<tr>`
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }
    inputContato.value = '';
    inputNumero.value = '';
};
function atualizaLista(){
    const corpolista = document.querySelector('tbody');
    corpolista.innerHTML = linhas;
}
