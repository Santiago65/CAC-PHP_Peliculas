document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const cityName = document.getElementById('cityName').value.trim();
  
    if (!cityName) {
      alert('Por favor, ingresa el nombre de tu ciudad.');
      return;
    }
  
    fetch(`https://wttr.in/${cityName}?format=j1`)
      .then(response => response.json())
      .then(data => {
        if (data.current_condition) {
          const weatherInfo = `
            <h2>${data.nearest_area[0].areaName[0].value}, ${data.nearest_area[0].country[0].value}</h2>
            <p>Clima: ${data.current_condition[0].weatherDesc[0].value}</p>
            <p>Temperatura: ${data.current_condition[0].temp_C} °C</p>
            <p>Humedad: ${data.current_condition[0].humidity} %</p>
            <p>Viento: ${data.current_condition[0].windspeedKmph} km/h</p>
          `;
          document.getElementById('weatherInfo').innerHTML = weatherInfo;
        } else {
          document.getElementById('weatherInfo').innerHTML = `<p class="text-danger">Ciudad no encontrada</p>`;
        }
      })
      .catch(error => {
        console.error('Error al obtener el clima:', error);
        document.getElementById('weatherInfo').innerHTML = `<p class="text-danger">Error al obtener el clima</p>`;
      });
  });
  