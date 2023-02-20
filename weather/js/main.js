// 
//?lat={lat}&lon={lon}&exclude={part}&appid={API key}

let apiKey = 'e94a06c22c14c9ab3059f89372eb2541'
let waetherUrl = 'https://api.openweathermap.org/data/2.5/weather'


let city = 'Tallinn'
let limit = 1
let cityURL = 'http://api.openweathermap.org/geo/1.0/direct'
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

let lat = ''
let lon = ''


let errorAlert = document.getElementById('errorAlert')


function showAlert(message)
{
    errorAlert.innerText = message
    errorAlert.classList.remove('d-none')
}

function hideAlert()
{
    if (errorAlert.classList.contains('d-none') == false)
    {
        errorAlert.classList.add('d-none')
    }
}


function getCityLatLon(){
    fetch(cityURL + '?' + 'q=' + city + '&limit=' + limit + '&appid=' +  apiKey)
        .then(response => {
            console.log('--- parse')
            let result = response.json()
            
           
            return result
        })
        .then(data => {
            
            lat = data[0].lat
            lon = data[0].lon
            console.log('lat=' + lat + '&lon=' + lon)

            getWeather()

            console.log(data)
        })
}

getCityLatLon()

function getWeather(){

    waetherUrl = waetherUrl + '?lat=' + lat + '&lon=' + lon + '&appid=' +  apiKey
    fetch(waetherUrl)
    .then(response => {
        let result = response.json()

        response.headers.forEach(header => {
            console.log('header: ' + header)
        })
        return result
    })
    .then(data => {
        console.log(data)
        if (data.message != undefined && data.cod == 401) {
            showAlert(data.message)
        } 
    })
    .catch((error) => {
        
        //console.error('Error:', error);
        //showAlert(error.message)

    })
}


/*
fetch('http://example.com/movies.json')
  .then(
    (response) => {
        // logic 
        return response.json() // "{}"
    })

  .then(
    (data) => console.log(data)
    );
*/
/*
  function (response) {
    return response.json()
  }
  */