const searchCity = document.getElementById('searchCity')

searchCity.addEventListener('change', function(){
    const searchValue = searchCity.value;
    console.log(searchValue);
    getTodaysWeather(searchValue);
})




getTodaysWeather("stockholm");

function getTodaysWeather(city){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=cba481921dfe6cbbcd02a158d81d32b3&units=metric&lang=SE')
        .then(function(response){
    return response.json();
        
    
}).then(function(weatherData){
    displayWeather(weatherData);
        console.log(weatherData);
        
})
.catch(function(error){
    console.log(error);
})
}

function displayWeather(weatherData){
    //console.log(weatherData);
    const weatherInfoElement = document.getElementById('weatherInfo');
        let weatherInfo = '';
    
        for(i = 0; i < weatherData.list.length; i++){
            console.log(weatherData.list[i].weather[0].description)
            weatherInfo += `
          <p>${weatherData.list[i].weather[0].description}</p>
`;
        }

    weatherInfoElement.innerHTML = weatherInfo;
}

//getWeather();
//
//function getWeather() {
//    fetch('api')
//        .then(function (response) {
//            return response.json();
//        })
//        .then(function (weatherData) {
//            displayTemp(weatherData);
//            console.log(weatherData)
//        })
//        .catch(function (error) {
//            console.log(error)
//        })
//}
//
//
//function displayTemp(weatherData) {
//    let htmlBlock = '';
//
//    for (i = 0; i < weatherData.list.length; i++) {
//        console.log(weatherData.list[i].main.temp)
//        htmlBlock += `
//     
//    <p>${weatherData.list[i].main.temp}</p>
//      `;
//    }
//    document.body.innerHTML = htmlBlock;
//}



//let weatherInfo = `
//<p> vindhastighet ${weatherData.wind.speed} km/h </p> 
//<p> ${weatherData.weather[0].description} </p>
//<img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"/>
//
//<p> ${weatherData.main.temp} °C </p>
//<p> sunrise ${weatherData.sys.sunrise} </p> 
//<p> sunset ${weatherData.sys.sunset} </p>
//`;
       

//weatherInfoElement.innerHTML = weatherInfo;






//function displayWeather(weatherData){
//    let htmlBlock = "";
//    for (const weather of weatherData){
//        htmlBlock += `<p> ${weather[0].description} </p>`;
//    }
//    document.body.innerHTML = htmlBlock;
//}
//displayWeather();


//fetchMovies();
//function fetchMovies(){
//fetch('http://fed17.herokuapp.com/popular-movies')
//   //fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}')
//
//      .then(function(response){
//    return response.json();
//        
//    
//}).then(function(movies){
//    displayMovies(movies);
//})
//.catch(function(error){
//    console.log(error);
//})
//}
//
//
//
//function displayMovies(movies){
//    let htmlBlock = "";
//    for (const movie of movies){
//        htmlBlock += `<p> ${movie.title} - ${movie.rating} </p>` ;
//    }
//    
//    document.body.innerHTML = htmlBlock;
//    
//}

//cba481921dfe6cbbcd02a158d81d32b3

//very najsjaa bitte
//function getID(id){
//return document.getElementById(id);
//
//})
//getID('mydiv')



//fetch('http://fed17.herokuapp.com/top-movies?_limit=20')
//  .then(function(response) {
//    return response.json();
//  })
//  .then(function(jsonData) {
//        let htmlBlock = "";
//    for(let skrutt of jsonData){
//        htmlBlock += `<p> ${skrutt.title}</p>`;
//    }for (let skrutt2 of jsonData){
//        htmlBlock += `<p> ${skrutt2.rating}<p>`;
//    }
//    
//    
//    document.body.innerHTML = htmlBlock;
//    console.log(jsonData);
//
//  })
//  .catch(function(error) {
//    const errorMessage = document.getElementById('errorMessage');
//    //errorMessage.innerText = error.message;
//  });


//fetch('http://fed17.herokuapp.com/top-movies?_limit=20')
//
//  .then(response => response.json())
//  .then(jsonData => {
//      var htmlBlock = "";
//    for(let i = 0; i < jsonData; i++){
//        htmlBlock += `<p> ${i.text}</p>`;
//        
//    }
//    document.body.innerHTML = htmlBlock;
//    console.log(jsonData);
//    
//  })
//.catch(function(error) {
//    const errorMessage = document.getElementById('errorMessage');
// });



  
//fetch('http://fed17.herokuapp.com/todos')
//    .then(function(response){
//    return response.json();
//})
//    .then(function(json){
//    let = htmlBLock = "";
//    for(const todo of json){
//        htmlBLock += `<p> ${todo.text}</p>`;
//    }
//    document.body.innerHTML = htmlBLock;
//})
//
//.catch (function(error){
//    console.log(error);
//})


//const deleteOptions = {
//    method 'DELETE',
//    headers: { 'content-type': 'application/json'}
//    //body: JSON.stringify({ complete: true})
//}
//
//fetch('http://fed17.herokuapp.com/todos', deleteOptions);

//get post delete patch

//const postOptions = {
//    method = 'POST',
//    headers: { 'content-type': 'application/json'}
//    body: JSON.stringify({ text: "hellu du", complete: true})
//}
//
//fetch('http://fed17.herokuapp.com/todos', postOptions)
//    .then(function(response){
//    return response.json();
//}).then(function(json){
//    
//})
//.catch (function(error){
//    console.log(error);
//})
//

//fetch('http://fed17.herokuapp.com/todos')
//  .then(function(response) {
//    return response.json();
//  })
//  .then(function(jsonData) {
//    console.log(jsonData);
//  });
//
//const postOptions = {
//  method: 'GET',
//  headers: { 'content-type': 'application/json' },
//  body: JSON.stringify({ text: 'hej krudddeeee', complete: false })
//};
//
//fetch('http://fed17.herokuapp.com/todos', postOptions);

//const deleteOptions = {
//  method: 'DELETE',
//  headers: { 'content-type': 'application/json' }
//};
//
//fetch('http://fed17.herokuapp.com/todos/2', deleteOptions);