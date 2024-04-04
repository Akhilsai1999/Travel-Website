const destinations = [
    { name: 'Exotic Beach', guide: 'Relax on the beautiful sandy shores.', image: 'Exotic Beach.jpg' },
    { name: 'Bustling City', guide: 'Explore the vibrant city life.', image: 'Bustling City.jpg' },
    { name: 'Mountain Retreat', guide: 'Embrace the tranquility of the mountains.', image: 'Mountain Retreat.jpg' },
  ];
  
  const destinationsSection = document.getElementById('destinations');
  destinations.forEach(destination => {
    const destinationDiv = document.createElement('div');
    destinationDiv.innerHTML = `
      <h2>${destination.name}</h2>
      <img src="${destination.image}" alt="${destination.name} Image" width="1200" height="500">
      <p>${destination.guide}</p>`;
    destinationsSection.appendChild(destinationDiv);
  
    const dropdown = document.getElementById('destination');
    const option = document.createElement('option');
    option.value = destination.name;
    option.text = destination.name;
    dropdown.add(option); 
  });
  
  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedDestination = document.getElementById('destination').value;
    const itineraryDiv = document.getElementById('itinerary');
    itineraryDiv.innerHTML = `<h3>Itinerary</h3><p>You've booked a trip to ${selectedDestination}. Enjoy your adventure!</p>`;
  });
          function search() {
              const destination = document.getElementById('destination');
              const departureDate = document.getElementById('departure-date');
              const returnDate = document.getElementById('return-date');
  
              const message = `Searching for ${destination} from ${departureDate} to ${returnDate}`;
              
              document.getElementById('flight-results').addEventListener = `<p>${message} - Flights</p>`;
              document.getElementById('hotel-results').addEventListener = `<p>${message} - Hotels</p>`;
              document.getElementById('activity-results').addEventListener = `<p>${message} - Activities</p>`;
          }