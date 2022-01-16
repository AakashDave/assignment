// https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=4c4f1a79217f6b20c316514611afa2a8
// set time
let mydate=document.getElementById('date');
let myday=document.getElementById('day');

        let currtime=new Date();
        const days = ["Sun", "Mon", "Tues", "Wed ", "Thu", "Fri", "Sat"];
        let day =  days[currtime.getDay()];

        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dece"];
        let month = months[currtime.getMonth()];

        let dates=currtime.getDate();
        mydate.innerHTML=`${dates} ${month}`;
        myday.innerHTML=`${day}`;
        
        let hidebox=document.getElementById('hidebox');
        let showbox=document.getElementById('showbox');
        let detailPart=document.querySelector('.detail-part');
        let tempPart=document.querySelector('.temp-part');
        hidebox.style.display='block';
        showbox.style.display="none";
        let cityname=document.getElementById('cityname');
    let getdata = async()=>{
            let cityname=document.getElementById('cityname').value;
            let answer=document.getElementById('city');
            let showInfo=document.querySelector('.showInfo');
            let temperature=document.getElementById('temp');
            let minTemp=document.getElementById('mintemp');
            let maxTemp=document.getElementById('maxtemp');
            let humidity=document.getElementById('humidity');
            let pressure=document.getElementById('pressure');            
            let wind=document.getElementById('wind');            
            let visibility=document.getElementById('visib');            
            let showTemp=document.getElementById('show-temp');
            let tempstatus=document.querySelector('.tempstatus');
            // let hide_box=document.querySelector('.hide_box');
            if(cityname===""){
                hidebox.style.display="block";
                showInfo.innerHTML="Please Enter City Name";
                showbox.style.display="none";
            }else{
                try{
                let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=4c4f1a79217f6b20c316514611afa2a8
                `);
                let data=await response.json();
                let arrData=[data]
                hidebox.style.display="none";
                showbox.style.display="block";
                answer.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
                temperature.innerHTML=`${arrData[0].main.temp}`;
                if (`${arrData[0].main.temp}`>=25) {
                    detailPart.style.backgroundColor='#f5d020';
                    detailPart.style.backgroundImage ='linear-gradient(315deg, #fde153 0%, #ff6a41 74%)';
                    tempPart.style.backgroundImage=`linear-gradient(rgba(255,255,255,0.3),rgba(0,0,0,0.7)),url('img2.jpg')`;
                }else{
                    detailPart.style.backgroundColor='#b1bfd8';
                    detailPart.style.backgroundImage ='linear-gradient(315deg, #b1bfd8 0%, #49669c 74%)';
                    tempPart.style.backgroundImage=`linear-gradient(rgba(255,255,255,0.3),rgba(0,0,0,0.7)),url('img.jpg')`;
                }
                showTemp.innerHTML=`${arrData[0].main.temp}`;
                minTemp.innerHTML=`${arrData[0].main.temp_min}`;
                maxTemp.innerHTML=`${arrData[0].main.temp_max}`;
                humidity.innerHTML=`${arrData[0].main.humidity}`;
                pressure.innerHTML=`${arrData[0].main.pressure}`;
                wind.innerHTML=`${arrData[0].wind.speed}`;
                visibility.innerHTML=`${arrData[0].visibility}`;
                let tempmood=arrData[0].weather[0].main;
                if (tempmood=='Smoke') {
                    tempstatus.innerHTML=`<i class="fas fa-smog fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
                }
                else if (tempmood=='Thunderstorm') {
                    tempstatus.innerHTML=`<i class="fas fa-stroopwafel fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
                }
                else if (tempmood=='Drizzle') {
                    tempstatus.innerHTML=`<i class="fas fa-cloud-rain fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
                }
                else if (tempmood=='Rain') {
                    tempstatus.innerHTML=`<i class="fas fa-cloud-showers-heavy fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
                }
                else if (tempmood=='Clouds') {
                    tempstatus.innerHTML=`<i class="fas fa-cloud fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
                }
                else {
                    tempstatus.innerHTML=`<i class="fas fa-sun fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
                }
                }catch{
                    hidebox.style.display="block";
                    showInfo.innerHTML="Enter city name correctly";
                    showbox.style.display="none";
                }
            }
        }
cityname.addEventListener('keyup',getdata);