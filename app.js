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

    // getting the currant position and calling the functions depending on a sucess (positionFound) or an error (positionNotFound)
    navigator.geolocation.getCurrentPosition(positionFound, positionNotFound);

    // if getCurrantPosition is successful this function runs
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

            // changing the temperature displayed back and forth between C and F 
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

    // if getCurrantPosition is unsuccesful this function runs
    function positionNotFound(err) {
        locationTimezone.textContent = "Unable to access location";
        console.log(err);
    }

    // getting the icons from the skycons pack file and setting the correct one to match the weather
    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
})


// setting variables for the days of the weeks
const mon = document.querySelector('#mon')
const tue = document.querySelector('#tue')
const wed = document.querySelector('#wed')
const thu = document.querySelector('#thu')
const fri = document.querySelector('#fri')
const sat = document.querySelector('#sat')
const sun = document.querySelector('#sun')

// adding clickability to the days of the week
mon.addEventListener('click', () => {
    console.log("mon");
});

tue.addEventListener('click', () => {
    console.log("tue");
});

wed.addEventListener('click', () => {
    console.log("wed");
});

thu.addEventListener('click', () => {
    console.log("thu");
});

fri.addEventListener('click', () => {
    console.log("fri");
});

sat.addEventListener('click', () => {
    console.log("sat");
});

sun.addEventListener('click', () => {
    console.log("sun");
});
