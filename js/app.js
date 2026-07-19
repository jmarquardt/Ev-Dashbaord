let vehicles = []; 

 

const cards = 

  document.getElementById("cards"); 

 

const distance = 

  document.getElementById("distance"); 

 

const distanceVal = 

  document.getElementById("distanceVal"); 

 

const season = 

  document.getElementById("season"); 

 

async function loadVehicles() { 

 

  const response = 

    await fetch("data/fahrzeuge.json"); 

 

  const data = 

    await response.json(); 

 

  vehicles = 

    data.vehicles.map( 

      item => new Vehicle(item) 

    ); 

 

  render(); 

} 

 

function render() { 

 

  const tripDistance = 

    Number(distance.value); 

 

  const selectedSeason = 

    season.value; 

 

  distanceVal.textContent = 

    `${tripDistance} km`; 

 

  cards.innerHTML = ""; 

 

  vehicles.forEach(vehicle => { 

 

    const range = 

      calculateEffectiveRange( 

        vehicle, 

        selectedSeason 

      ); 

 

    const stops = 

      calculateStops( 

        vehicle, 

        tripDistance, 

        selectedSeason 

      ); 

 

    const card = 

      document.createElement("div"); 

 

    card.className = "card"; 

 

    card.innerHTML = ` 

      <h2>${vehicle.name}</h2> 

 

      <div class="metric"> 

        <span>Reichweite</span> 

        <span>${range} km</span> 

      </div> 

 

      <div class="metric"> 

        <span>Ladestopps</span> 

        <span>${stops}</span> 

      </div> 

 

      <div class="metric"> 

        <span>Akku</span> 

        <span>${vehicle.battery.netCapacityKWh} kWh</span> 

      </div> 

 

      <div class="metric"> 

        <span>Peak DC</span> 

        <span>${vehicle.charging.peakPowerKW} kW</span> 

      </div> 

 

      <div class="metric"> 

        <span>10–80 %</span> 

        <span>${vehicle.charging.time10to80Min} min</span> 

      </div> 

 

      <div class="metric"> 

        <span>Preis</span> 

        <span>${vehicle.pricing.streetPrice.toLocaleString('de-DE')} €</span> 

      </div> 

    `; 

 

    cards.appendChild(card); 

  }); 

} 

 

distance.addEventListener( 

  "input", 

  render 

); 

 

season.addEventListener( 

  "change", 

  render 

); 

 

loadVehicles(); 