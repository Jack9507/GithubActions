// console.log("-----------         Project-1        --------------")

// creating reference for my button in DOM
const my_btn = document.getElementById("search-btn")
const user_input = document.getElementById("users-location")
my_btn.addEventListener("click", updateUI)

const my_api_key = "d22556c9e4284325907205712243003"
async function getDatafromAPI(city_name){
    const promise=  await fetch(`http://api.weatherapi.com/v1/current.json?key=${my_api_key}&q=${city_name}&aqi=yes`)
    return  await promise.json()
}
// `String ${value}` => string inperpolation similar to f string in python

let mydata
async function updateUI(){
    
    console.log(user_input.value)
    const res =  await getDatafromAPI(user_input.value)
    // mydata = res
    console.log(res)
    const name = document.getElementById('city-name')
    const region = document.getElementById('region')
    const country = document.getElementById('country')
    const lat = document.getElementById('lat')
    const long = document.getElementById('long')
    const local_time = document.getElementById('local-time')
    const time_zone = document.getElementById('time-zone')

    name.innerText = res.location.name
    region.innerText = res.location.region
    country.innerText = res.location.country
    lat.innerText = res.location.lat
    long.innerText = res.location.lon
    local_time.innerHTML = res.location.localtime
    time_zone.innerHTML = res.location.tz_id


}

// Now displaying the data on DOM

// console.log(mydata)
// const city = document.getElementById("city-name")
// city.innerText = `My City Name: ${res}`






