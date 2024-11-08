const factUrl = 'https://catfact.ninja/fact'

async function callApi(){
    const response = await fetch(factUrl);
    if (response.status === 200) {
        const data = await response.json();
        loadResult(data);
    } else{
        console.log("Error ao carregar dados da API");
    }
}

function loadResult(data){
    const result = document.querySelector('.result');
    result.innerHTML =  data.fact;
}
