const inputCep = document.getElementById("cep");
const inputLogradouro = document.getElementById("logradouro");
const inputNumero = document.getElementById("numero");
const inputBairro = document.getElementById("bairro");
const inputCidade = document.getElementById("cidade");
const inputUf = document.getElementById("uf");
const btnEnviar = document.getElementById("enviar");


inputCep.addEventListener('blur', async () => {
    const cep = inputCep.value;
    if (cep.length !== 8){
        return alert('CEP deve ter 8 digitos.')
    } else{
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            if (!response.ok){
                throw new Error('Error ao buscar o CEP');
            }
            const json = await response.json();
            if (json.erro){
                alert('CEP não encontrado');
            } else {
                inputLogradouro.value = json.logradouro;
                inputBairro.value = json.bairro;
                inputCidade.value = json.localidade;
                inputUf.value = json.uf;
                inputNumero.focus()
            }
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao carregar o CEP');
        }
    }
})

btnEnviar.addEventListener("click", () => {
    const endereco = {
        cep: inputCep.value,
        logradouro: inputLogradouro.value,
        numero: inputNumero.value,
        bairro: inputBairro.value,
        cidade: inputCidade.value,
        uf: inputUf.value,
    };

    // Armazenando no localStorage como uma string JSON
    localStorage.setItem("dadosEndereco", JSON.stringify(endereco));

    alert("Endereço enviado com sucesso!");
});