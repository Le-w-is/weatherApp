Plan

Step1

-create a new folder for a weather app, create an html file, a js file and a css file. ✅

- fill in the basics of the html file ✅
- head body etc, links to styles.css and app.js ✅
- the two div familys needed for the information displayed ✅

step2

- create a git hub repo ✅
- commit and push this up to github ✅

Step 3

- create a plan for the styles.css file ✅
- with \* reset all margin and padding to zero ✅
- within the body set the background colour (a gradiant would be nice), font type, font colour, display flex ( everything centered and spaced out) ✅
- use the class names on the html for easy sections and the div names for easy access within those sections ✅
- have a cursor pointer in the clickable sections ✅

- come back and tidy up css later

Step 4

- accessing the api
  -find a suitable api and play around on postman with fetch requests ✅
  -get around the cors issue (browser extension Allow CORS: Access-Control-Allow-Origin addon)✅
  -access the data from the api ✅
  -display the data on the page using the html elemants ✅

Step 5
-icons
-download darksky/skycons .js file ✅
-insert it into the weatherApp folder and link it through the html file ✅
-write a function to convert the weather icon type from the data into a skycons recognised form ✅
-Link the html element to the icon given back by the function ✅

Stretch Goals
-changing the colour of the background depending on the temperature

- look through the res object to see what other features I can import
- add a search bar so you can search other places weather/have a list of capital citys
- if you click on the icon 3 times it will show the sun and turn yellow for a set amount of time

- Weekdays

  - in html structure make a new div at the top of body have seven children with days of the week ✅
  - in css align them properly ✅
  - make them clickable
    -when clicked have the display show the data for that day of the week - days come back as an array called days with 15 indexes
    -array[1] is tomorrow
    -find get the day data from the browser use it to find out which day tomorrow is - assign array[1] to that day then the next 6 array indexes to the following six days
    -have the page load on the current day of the week (don't know how?)
    -when clicked on the day should be brighter than the others (like a soft glow)

- be able to click on the celsius and change it to fahrenhite. it already comes in fahrenhite, just need to change the textContent. ✅
  - add an event listener for the click of the temperature-section ✅
  - when the temperature-section is clicked it will show fahrenhite, when pushed again returns to celsius✅

to do

- check on monday if the days of the week still lign up with the numbers used
- figurre out the celsius fahrenhite error


//write one function to be called upon by each button click
// it must take in the day of the weak from the button click
// it must set glow on the right day of the week
// it must make sure the other days of the week textShadow is null
// it must get the correct data from the api for that day of the week
// - get a date string from getDay()
// - set days 0 as the current day of the week have the next day be days 1
// -
// it must change the elements to show the date for that day of the week


Serperation of concerns
 - take the geolocation function out of the window load and day click functions
 - lat and long to have global scope
 - seperate the dayGlow function and the get weather data function