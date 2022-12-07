/* 날씨앱 키  */
const API_KEY = '6d41a7760070c50fef0f0cac8f58c929';
/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
let city_name = 'seoul'; //도시명변수 설정 seoul
let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
//서버에 보내는 요청문(요청주소 end point)

 //서버에서 fetch로 불러오는 작업은 비동기 처리(async)
 fetch(API_URL)
 .then(function(응답데이터){
     return 응답데이터.json();
     
 })
 .then(function(data){
     console.log(data);
     //myfunc(data) -함수를 이용하여 밖으로 내보내기할때 사용
     /* 날씨 상태와 날씨 아이콘 체크하기 */
     const desc = data.weather[0].main; //날씨상태설명
     const weather_icon = data.weather[0].icon; //날씨아이콘
     const temp = parseInt(data.main.temp - 273.15); //현재온도(화씨-캘빈온도)-정수로 변환 parseInt
     const name = data.name; //도시명
     console.log(name, desc, weather_icon, temp);

     //UI출력(DOM)
     const citynameEl = document.querySelector('.cityname');
     const iconEl = document.querySelector('.icon');
     const tempEl = document.querySelector('.temp');
     const descEl = document.querySelector('.desc');

     citynameEl.textContent = name;
     iconEl.innerHTML = `<img src=http://openweathermap.org/img/wn/${weather_icon}@2x.png alt='아이콘'/>`;
     tempEl.innerHTML = `${temp}&deg`;
     descEl.textContent = desc;

 });


 
function getWeatherData(cityname){
    //도시명 업데이트
    city_name = cityname;
    let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
fetch(API_URL)
.then(function(응답데이터){
    return 응답데이터.json();
    
})
.then(function(data){
    console.log(data);
    //myfunc(data) -함수를 이용하여 밖으로 내보내기할때 사용
    /* 날씨 상태와 날씨 아이콘 체크하기 */
    const desc = data.weather[0].main; //날씨상태설명
    const weather_icon = data.weather[0].icon; //날씨아이콘
    const temp = parseInt(data.main.temp - 273.15); //현재온도(화씨-캘빈온도)-정수로 변환 parseInt
    const name = data.name; //도시명
    console.log(name, desc, weather_icon, temp);

    //UI출력(DOM)
    const citynameEl = document.querySelector('.cityname');
    const iconEl = document.querySelector('.icon');
    const tempEl = document.querySelector('.temp');
    const descEl = document.querySelector('.desc');

    citynameEl.textContent = name;
    iconEl.innerHTML = `<img src=http://openweathermap.org/img/wn/${weather_icon}@2x.png alt='아이콘'/>`;
    tempEl.innerHTML = `${temp}&deg`;
    descEl.textContent = desc;

});
   

};

//날씨함수 호출
getWeatherData();

//선택목록 (도시명) 변경 이벤트 
const select = document.getElementById('select');
select.addEventListener('change', function(e){
    //console.log('목록변경',this.value);
    console.log(e.target.value);
    const cityname = e.target.value;
    getWeatherData(cityname);
});



/* function myfunc(data){
    const desc = data.weather[0].main; //날씨상태설명
    const weather_icon = data.weather[0].icon; //날씨아이콘
    const temp = parseInt(data.main.temp - 273.15); //현재온도(화씨-캘빈온도)-정수로 변환 parseInt
    const name = data.name; //도시명
    console.log(name, desc, weather_icon, temp);

    //UI출력(DOM)
    const citynameEl = document.querySelector('.cityname');
    const iconEl = document.querySelector('.icon');
    const tempEl = document.querySelector('.temp');
    const descEl = document.querySelector('.desc');

    citynameEl.textContent = name;
    iconEl.innerHTML = `<img src=http://openweathermap.org/img/w/${weather_icon}.png alt='아이콘'/>`;
    tempEl.innerHTML = `${temp}&deg`;
    descEl.textContent = desc;
}
 */
