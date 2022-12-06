/* 날씨앱 키  */
const API_KEY = '6d41a7760070c50fef0f0cac8f58c929';
/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
let city_name = 'Anyang-si'; //도시명변수 설정 Anyang-si
let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
//서버에 보내는 요청문

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
    iconEl.innerHTML = `<img src=http://openweathermap.org/img/w/${weather_icon}.png alt='아이콘'/>`;
    tempEl.innerHTML = `${temp}&deg`;
    descEl.textContent = desc;

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
