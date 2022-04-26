# Weather Application

This application is for anyone who wants to check the weekly weather of his current position (which is done automatically when the user log) or to find the weekly weather of almost any country around the globe.

Click the overview of the day that you want to see, all the specifics of the weather of that day will be displayed. You can also change the temperature metric, both Celcius and Fahrenheit are available.

## Built With

- HTML
- CSS
- Javascript

## Installation

1. Get a free API key for geolocation/reverse geolocation at: https://myprojects.geoapify.com/login
2. Get a free API key for weather at: https://home.openweathermap.org/users/sign_in
3. Clone the repo

```bash
  git clone https://github.com/Alessandro9936/Weather_App.git
```

4. Install NPM packages

```bash
  npm install
```

5. Enter your API keys in `dataHandler.js`

```bash
  const API_KEY_WEATHER = "Weather key";
  const API_KEY_POSITION = "Position key";
```

## Demo

Live Weather Application demo here: https://alessandroweatherapp.netlify.app/

## Lessons Learned

- Working with asynchronous Javascript
- Handling data from multiple APIs
- Read and destructure data from APIs
- DOM manipulation with dynamically created elements
- First approach to webpack and eslint
