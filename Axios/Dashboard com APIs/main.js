import config from '/config.js'

document.addEventListener("DOMContentLoaded", () => {
    const weatherApiKey = config.weatherApiKey;
    const cotacaoApiKey = config.cotacaoApiKey;
    const moviesApiKey = config.moviesApiKey;
    const newsApiKey = config.newsApiKey;
    const airApiKey = config.airApiKey;
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
    function searchBRL(){
        const url = `https://v6.exchangerate-api.com/v6/${cotacaoApiKey}/latest/BRL`
        axios.get(url)
        .then(response => {
            console.log(response.data)
            const conversions = response.data;
            updateBRL(conversions)
        })
    }

    function updateBRL(conversions){
        document.querySelector('#usd').innerHTML = `1 USD = R$${conversions.conversion_rates.USD.toFixed(2)}`;
        document.querySelector('#eur').innerHTML = `1 EUR = R$${conversions.conversion_rates.EUR.toFixed(2)}`;
        document.querySelector('#gbp').innerHTML = `1 GBP = R$${conversions.conversion_rates.GBP.toFixed(2)}`;
        document.querySelector('#dolca').innerHTML = `1 CAD = R$${conversions.conversion_rates.CAD.toFixed(2)}`;
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

    function searchNews(){
        const url = `https://newsdata.io/api/1/news?apikey=${newsApiKey}&country=br&language=pt `
        axios.get(url)
            .then(response => {
                const newsData = response.data;
                updateNews(newsData);
            })
            .catch(error => {
                console.error('Erro ao buscar notícias:', error);
            })
    }

    function updateNews(newsData){
        document.querySelector('#noticia1').innerText = `${newsData.results[0].title}`;
        document.querySelector('#noticia1-fonte').innerText = `Fonte: ${newsData.results[0].source_name}`;

        document.querySelector('#noticia2').innerText = `${newsData.results[1].title}`;
        document.querySelector('#noticia2-fonte').innerText = `Fonte: ${newsData.results[1].source_name}`;

        document.querySelector('#noticia3').innerText = `${newsData.results[2].title}`;
        document.querySelector('#noticia3-fonte').innerText = `Fonte: ${newsData.results[2].source_name}`;
    }

    function searchAir(){
        const url = `https://api.airvisual.com/v2/city?city=fortaleza&state=ceara&country=brazil&key=${airApiKey}`
        axios.get(url)
        .then(response => {
            const airData = response.data.data.current.pollution;
            updateAir(airData)
        })
    }

    function updateAir(airData){
        document.querySelector('#aqi').innerText = `AQI (Índice de Qualidade do Ar): ${airData.aqius}`;
        document.querySelector('#pp').innerText = `Principal poluente: ${airData.mainus}`;
    }

    searchWeatherData();
    searchNews()
    searchBRL()
    searchAir()
    searchMovie()
});

