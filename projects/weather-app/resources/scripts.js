//openweatherMap api
const api = '7fe04f29a3b5d26d4db7917a5fafcbb3';

window.addEventListener('load' , () => {
    let long;
    let lat;
    // getting the geolocation of the user...
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
//variables of longitude and latidude
            long = position.coords.latitude;
            lat = position.coords.latitude;
        });
    }
});