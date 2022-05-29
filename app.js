// setting variables for elemants in the html that we are going to change
const temperatureDescription = document.querySelector('.temperature-description');
const locationTimezone = document.querySelector('.location-timezone');
const temperatureDegrees = document.querySelector('.temperature-degrees');
const temperatureSection = document.querySelector('.temperature-section');
const temperatureSpan = document.querySelector('.temperature-section span');
const backgroundColour = document.body.style.background;
const weekdays = document.querySelector('.weekdays').children

// getting the day of the week as an integer
const dayOfWeekDigit = new Date().getDay();


// an event listener for when the page loads
window.addEventListener('load', () => {


    // getting the currant position and calling the functions depending on a sucess (positionFound) or an error (positionNotFound)
    navigator.geolocation.getCurrentPosition(positionFound, positionNotFound);


    // if getCurrantPosition is successful this function runs
    function positionFound(position) {
        console.log(position);
        const long = position.coords.longitude;
        const lat = position.coords.latitude;


        // getting access to the api and fetching the data
        const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${long}?unitGroup=us&key=S6EZL7D5HV45CGB4YMWLFHUAZ&contentType=json`
        fetch(api)
            .then(response => {
                return response.json();
            })


            // using the data from the api to set the html elemants content
            .then(data => {
                backGroundColour(data)
                console.log(data);
                const temperatureC = (data.days[dayOfWeekDigit].temp - 30) / 2 + ''; //converting fahrenhit to celsius and turning it into a string
                const temperatureF = (data.days[dayOfWeekDigit].temp);
                const icon = data.days[dayOfWeekDigit].icon;
                const description = data.description;
                const timezone = data.timezone;
                temperatureDegrees.textContent = temperatureC.substring(0, 4);     // stopping the string from displaying more than 5 characters
                temperatureDescription.textContent = description;
                locationTimezone.textContent = timezone;
                setIcons(icon, document.querySelector('.icon'));


                // changing the temperature displayed back and forth between C and F by clicking on the temperature
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
})

// getting the icons from the skycons pack file and setting the correct one to match the weather
function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}


// setting variables for the days of the weeks
const mon = document.querySelector('#mon')
const tue = document.querySelector('#tue')
const wed = document.querySelector('#wed')
const thu = document.querySelector('#thu')
const fri = document.querySelector('#fri')
const sat = document.querySelector('#sat')
const sun = document.querySelector('#sun')


// setting the current day to glow based on the integer we get from getDay()
function dayGlow() {
    if (dayOfWeekDigit === 0) {
        sun.style.textShadow = "var(--glow)"
    } else if (dayOfWeekDigit === 1) {
        mon.style.textShadow = "var(--glow)"
    } else if (dayOfWeekDigit === 2) {
        tue.style.textShadow = "var(--glow)"
    } else if (dayOfWeekDigit === 3) {
        wed.style.textShadow = "var(--glow)"
    } else if (dayOfWeekDigit === 4) {
        thu.style.textShadow = "var(--glow)"
    } else if (dayOfWeekDigit === 5) {
        fri.style.textShadow = "var(--glow)"
    } else if (dayOfWeekDigit === 6) {
        sat.style.textShadow = "var(--glow)"
    }
}
dayGlow();

// setting background colour based on temperature displayed

function backGroundColour(data) {
    let temp = (data.currentConditions.temp - 30) / 2;
    if (temp < 10) {
        document.body.style.background = "var(--cold)"
    } else if (temp > 10) {
        document.body.style.background = "var(--cool)"
    } else if (temp > 15) {
        document.body.style.background = "var(--warm)"
    } else if (temp > 20) {
        document.body.style.background = "var(--hot)"
    }
}

// setting event listners for each day of the week that will call on the future weather function

mon.addEventListener('click', futureWeather);
tue.addEventListener('click', futureWeather);
wed.addEventListener('click', futureWeather);
thu.addEventListener('click', futureWeather);
fri.addEventListener('click', futureWeather);
sat.addEventListener('click', futureWeather);
sun.addEventListener('click', futureWeather);


// the future weather function that sets the day that was clicked on to glow then matches 
//the day clicked on with a day in the days array in the api data and sets the html elemants to the new data

function futureWeather(day) {
    console.log(day)
    for (i = 0; i < weekdays.length; i++) {
        if (day.srcElement.textContent === "Mon") {
            weekdays[i].style.textShadow = null;
            mon.style.textShadow = "var(--glow)";
        } else if (day.srcElement.textContent === "Tue") {
            weekdays[i].style.textShadow = null;
            tue.style.textShadow = "var(--glow)";
        } else if (day.srcElement.textContent === "Wed") {
            weekdays[i].style.textShadow = null;
            wed.style.textShadow = "var(--glow)";
        } else if (day.srcElement.textContent === "Thu") {
            weekdays[i].style.textShadow = null;
            thu.style.textShadow = "var(--glow)";
        } else if (day.srcElement.textContent === "Fri") {
            weekdays[i].style.textShadow = null;
            fri.style.textShadow = "var(--glow)";
        } else if (day.srcElement.textContent === "Sat") {
            weekdays[i].style.textShadow = null;
            sat.style.textShadow = "var(--glow)";
        } else if (day.srcElement.textContent === "Sun") {
            weekdays[i].style.textShadow = null;
            sun.style.textShadow = "var(--glow)";
        }
    }
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${long}?unitGroup=us&key=S6EZL7D5HV45CGB4YMWLFHUAZ&contentType=json`
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            backGroundColour(data)
            for (i = 0; i < data.days.length; i++) {
                const date = data.days[i].datetime.toString();
                const newDate = new Date(date + "Z")
                const newDay = newDate + ''
                const dayString = newDay.toUpperCase().substring(0, 3);
                if (day.srcElement.id.toUpperCase() === dayString) {
                    const temperatureC = (data.days[i].temp - 30) / 2 + '';
                    const temperatureF = (data.days[i].temp);
                    const icon = data.days[i].icon;
                    const description = data.days[i].description;
                    const timezone = data.timezone;
                    temperatureDegrees.textContent = temperatureC.substring(0, 4);
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;
                    setIcons(icon, document.querySelector('.icon'));
                }
            }
        })
};
