
// an event listener for when the page loads
window.addEventListener('load', () => {

// setting variables for elemants in the html that we are going to change
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDegrees = document.querySelector('.temperature-degrees');
    let degreeSection = document.querySelector('.degree-section');

// checking if we can access geolocation and getting the lat and long data for our variables
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

// getting access to the api and fetching the data
            const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${long}?unitGroup=us&key=S6EZL7D5HV45CGB4YMWLFHUAZ&contentType=json`
            fetch(api)
                .then(response => {
                    return response.json();
                })

// using the data from the api to set the html elemants content
                .then(data => {
                    console.log(data);
                    const temperature = (data.currentConditions.temp-30)/2;
                    const description = data.description;
                    const timezone = data.timezone;
                    temperatureDegrees.textContent = temperature;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;           
                })
        });

// if there is no geolocation a message explains why it's not working
    } else {
        console.log("no")
        h1.textContent = "Unable to access location";
    }
});
