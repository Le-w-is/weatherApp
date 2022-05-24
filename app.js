
// an event listener for when the page loads
window.addEventListener('load', () => {

    // setting variables for elemants in the html that we are going to change
    let long;
    let lat;
    const temperatureDescription = document.querySelector('.temperature-description');
    const locationTimezone = document.querySelector('.location-timezone');
    const temperatureDegrees = document.querySelector('.temperature-degrees');
    const degreeSection = document.querySelector('.degree-section');
    const temperatureSpan = document.querySelector('temperature-section span')

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
                    const temperature = (data.currentConditions.temp - 30) / 2 + '';  //converting fahrenhit to celsius and turning it into a string
                    const icon = data.currentConditions.icon;
                    const description = data.description;
                    const timezone = data.timezone;
                    temperatureDegrees.textContent = temperature.substring(0, 5);     // stopping the string from displaying more than 5 characters
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;
                    //Set icon
                    setIcons(icon, document.querySelector('.icon'));
                })
        });


        // if there is no geolocation a message explains why it's not working
    } else {
        console.log("no")
        h1.textContent = "Unable to access location";
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
