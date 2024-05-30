const mybtn = document.getElementById("get-loc-btn")
mybtn.addEventListener("click", async () => {
    const loc = await navigator.geolocation.getCurrentPosition(onsuccess, onfaliure)
    // console.log(loc)
})

async function onsuccess(position) {
    console.log("Fetching Location...")
    console.log(`This is initial Position: ${position}`)
    console.log(position)
    console.log(`Latitude is ${position.coords.latitude}\n Longitude is ${position.coords.longitude}`)
    const res = await getDatafromAPI(position)
    console.log(`This is final position promise object: ${res}`)
    console.log(res)

    // now updating the info in UI
    const country = document.getElementById("country")
    const latitude = document.getElementById("lat")
    const longitude = document.getElementById("long")
    const city = document.getElementById("city")
    const localtime = document.getElementById("localtime")
    const region = document.getElementById("region")


    country.innerText = res.location.country
    latitude.innerText = res.location.lat
    longitude.innerText = res.location.lon
    city.innerText = res.location.name
    localtime.innerText = res.location.localtime
    region.innerText = res.location.region

    // now we can store these values in a local storage

    storeinLocalStorage(res)

}

function onfaliure() {
    console.log("Some error occured while fetching location.")
}

const my_api_key = "d22556c9e4284325907205712243003"
async function getDatafromAPI(position) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${my_api_key}&q=${position.coords.latitude}, ${position.coords.longitude}&aqi=yes`)
    return await promise.json()
}

function storeinLocalStorage(res) {
    localStorage.setItem("Country", res.location.country)
    localStorage.setItem("Latitude", res.location.lat)
    localStorage.setItem("Longitude", res.location.lon)
    localStorage.setItem("City", res.location.name)
    localStorage.setItem("Localtime", res.location.localtime)
    localStorage.setItem("Region", res.location.region)
    console.log("Items stored in Local Storage...")
    console.log("Plase check Application Tab.")
}