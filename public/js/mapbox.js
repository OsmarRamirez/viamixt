export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoib3NtYXJ5ZGphIiwiYSI6ImNsOHRvZWptYTA4MzEzeWs1a2lyNGY4aXUifQ.Q7gpoUAKL1T5WsjCphcUnA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/osmarydja/cl8tqvlr1001o14qjxsou3mly',
    scrollZoom: false
    // center: [-98.467440, 18.603264],
    // zoom: 7
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Día ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
}