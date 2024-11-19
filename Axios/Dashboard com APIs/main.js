
document.addEventListener("DOMContentLoaded", () => {
    const weatherApiKey = 'd9329136d3a63b42dbae15389b6d39b5'
    const cotacaoApiKey = '9511d00859723dffb14f7c07'
    const moviesApiKey = '06b617136dfb76ecc3c02682afa331dc'
    const cidade = 'Fortaleza';
    const latitude = -3.71839;
    const longitude = -38.5434;
    const unidade = 'metric';


    function searchWeatherData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unidade}&appid=${weatherApiKey}`;
        axios.get(url)
        .then(response => {
            const data = response.data;
            updateWeather(data);
        })
            .catch(error => {
                console.error('Erro ao buscar dados do clima', error);
            });
    }
    function updateWeather(data) {
        document.querySelector('#cidade').innerHTML = `Cidade: ${data.name}`;
        document.querySelector('#temperatura').innerText = `Temperatura: ${data.main.temp}°C`;
        document.querySelector('#clima_desc').innerText = `Clima: ${data.weather[0].description}`;
        document.querySelector('#umidade').innerText = `Umidade: ${data.main.humidity}%`;
        document.querySelector('#vento').innerText = `Vento: ${data.wind.speed} km/h`;
    }
    function searchUSD(){
        const url = `https://v6.exchangerate-api.com/v6/${cotacaoApiKey}/latest/USD`
        axios.get(url)
        .then(response => {
            const tax = response.data.conversion_rates.BRL;
            const floor = 1 * tax;
            document.querySelector('#cotacao').innerHTML = `$1 USD = R$${floor.toFixed(2)}`;
        })
    }
    function searchMovie(){
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${moviesApiKey}&language=pt-BR&page=1`;
        axios.get(url)
            .then(response => {
                const moviesData = response.data;
                updateMovies(moviesData);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos filmes', error);
            });
    }

    function updateMovies(moviesData){
        document.querySelector('#filme1').innerText = `1° - ${moviesData.results[0].title}`;
        document.querySelector('#filme2').innerText = `2° - ${moviesData.results[1].title}`;
        document.querySelector('#filme3').innerText = `3° - ${moviesData.results[2].title}`;
        document.querySelector('#filme4').innerText = `4° - ${moviesData.results[3].title}`;
        document.querySelector('#filme5').innerText = `5° - ${moviesData.results[4].title}`;
    }


    searchWeatherData();
    searchUSD()
    searchMovie()
});

