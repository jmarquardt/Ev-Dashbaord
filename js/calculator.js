function calculateEffectiveRange(vehicle, season) { 

 

  if (season === "winter") { 

    return vehicle.range.winterHighwayKm; 

  } 

 

  return vehicle.range.summerHighwayKm; 

 

} 

 

function calculateStops( 

  vehicle, 

  distance, 

  season 

) { 

 

  const range = 

    calculateEffectiveRange( 

      vehicle, 

      season 

    ); 

 

  return Math.max( 

    0, 

    Math.ceil(distance / range) - 1 

  ); 

} 