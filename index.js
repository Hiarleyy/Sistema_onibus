function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat:-1.3133725, lng: -47.9628705 }
  });
  
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;
  if (selectedMode === "Rota1"){
    directionsService
    .route({
      origin: { lat:-1.303461038451816, lng:-47.901034288004226 },
      destination: { lat: -1.2965729033643236, lng:-47.94293092062966},
      waypoints:[
        {location:{lat: -1.3020286531283025, lng:-47.90155018391101}},
          {location: {lat:-1.2979937229616163,lng: -47.93805206419679}},
          {location: {lat:-1.2958762488310507,lng: -47.917440500650166}}
      ],
      travelMode: 'DRIVING'
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
  }
  else if(selectedMode == "Rota2"){
    directionsService
    .route({
      origin: { lat: -1.291688861088239, lng:-47.87669665399352 },
      destination: { lat: -1.2950667945559569, lng:-47.92911700866126
      },
      travelMode: 'DRIVING'
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
  }
  else if(selectedMode == "Rota3"){
    directionsService
    .route({
      origin: { lat: -1.29597738582551, lng: -47.893782103382854 },
      destination: { lat: -1.2626678730124745, lng:-47.925896188738285
      },
      travelMode: 'DRIVING'
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("mode").addEventListener("change", function() {
    var paginaSelecionada = this.value;

    if (paginaSelecionada !== '') {
      carregarPagina(paginaSelecionada);
    } else {
      document.getElementById("content").innerHTML = "";
    }
  });

  function carregarPagina(url) {
    var xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
         document.getElementById("content").innerHTML = xhr.responseText;
        } else {
          document.getElementById("content").innerHTML = "Não foi possivel carregar a página.";
        }
      }
    };
    xhr.open("GET", url, true);
   xhr.send();
  }
});


window.initMap = initMap;


