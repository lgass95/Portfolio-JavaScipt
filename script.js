
const arrays ={
        weather: [   "Sunny",
                    "Rainy",
                    "Snowy",
                    "Overcast"

                                ],

        seasons: [  "Winter",
                    "Spring",
                    "Summer",
                    "Fall"
                ],

        flavors: [
                    "Chocolate",
                    "Vanilla",
                    "Strawberry"
                ]
            }

const fetchWeather = () => {
    let todaysWeather = arrays.weather[Math.floor(Math.random() * 5)];
    for (let i = 0; i < arrays.weather.length; i++) {
        // console.log(i);
        // console.log (num);
        if (todaysWeather === arrays.weather[i]) {
           return todaysWeather;
            // console.log(i);
        }
    }
}

const fetchSeason = () => {
    let season = arrays.seasons[Math.floor(Math.random() * 4)];
    for (let i = 0; i < arrays.seasons.length; i++) {
        // console.log(i);
        // console.log (num);
        if (season === arrays.seasons[i]) {
           return season;
            // console.log(i);
        }
    }
}

const fetchFlavor = () => {
    let flavor = arrays.flavors[Math.floor(Math.random() * 3)];
    for (let i = 0; i < arrays.flavors.length; i++) {
        // console.log(i);
        // console.log (num);
        if (flavor === arrays.flavors[i]) {
           return flavor;
            // console.log(i);
        }
    }
}
console.log("Today's weather will be: " + fetchWeather());
console.log("My favorite season is: " + fetchSeason());
console.log("My favorite ice cream flavor is: " + fetchFlavor());
