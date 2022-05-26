// setting variables for elemants in the html that we are going to change
let long;
let lat;
const temperatureDescription = document.querySelector('.temperature-description');
const locationTimezone = document.querySelector('.location-timezone');
const temperatureDegrees = document.querySelector('.temperature-degrees');
const temperatureSection = document.querySelector('.temperature-section');
const temperatureSpan = document.querySelector('.temperature-section span');


// an event listener for when the page loads
window.addEventListener('load', () => {


    // checking if we can access geolocation and getting the lat and long data for our variables
    // if ('geolocation' in navigator) 

    console.log("hi");
    navigator.geolocation.getCurrentPosition(positionFound, positionNotFound);

    function positionFound(position) {
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
                const temperatureC = (data.currentConditions.temp - 30) / 2 + ''; //converting fahrenhit to celsius and turning it into a string
                const temperatureF = (data.currentConditions.temp);
                const icon = data.currentConditions.icon;
                const description = data.description;
                const timezone = data.timezone;
                temperatureDegrees.textContent = temperatureC.substring(0, 5);     // stopping the string from displaying more than 5 characters
                temperatureDescription.textContent = description;
                locationTimezone.textContent = timezone;
                setIcons(icon, document.querySelector('.icon'));

                temperatureSection.addEventListener('click', () => {
                    if (temperatureSpan.textContent === 'C') {
                        temperatureSpan.textContent = 'F';
                        temperatureDegrees.textContent = temperatureF;
                    } else {
                        temperatureSpan.textContent = 'C';
                        temperatureDegrees.textContent = temperatureC.substring(0, 5);
                    }
                });
            })
    }

    function positionNotFound(err) {
        locationTimezone.textContent = "Unable to access location";
        console.log(err);
    }


    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
})

