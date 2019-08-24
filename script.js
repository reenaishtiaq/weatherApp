
function getweather() {


axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=17168ae782dd0d430725a3dbdf00d03e') 
.then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}