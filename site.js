const apiKey = '8e85f9cc9c0cd7eaa7c0485ae25e51f8';
const weatherTable = document.querySelector("#weatherTable");
const addCityBtn = document.querySelector("#addCityBtn");
const cityInput = document.querySelector("#cityInput");

function addCity() {
    const cityName = cityInput.value.trim(); 
    if (!cityName) {
        alert("Введите название города!");
        return;
    }

    weatherTable.style.display = "table"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`404: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${name}</td>
                <td>${main.temp}°C</td>
                <td>
                    <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
                    ${weather[0].description}
                </td>
            `;

            weatherTable.appendChild(tr); 
        })
        .catch(error => {
            console.error(error);
            alert("404");
        });
}

addCityBtn.addEventListener("click", addCity);
