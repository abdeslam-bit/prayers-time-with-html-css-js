let contry = document.getElementById('info');
let times = document.querySelector(".times")

function getContries(name){
    axios.get("https://api.aladhan.com/v1/timingsByAddress?address="+name)
    .then((Response)=>{
        let content = Response.data.data

        const date = content.date.readable; 
        const day = content.date.hijri.weekday.ar

        contry.innerHTML=`
            <h1>${day}/</h1>
            <h1>${date}/</h1>
            <span>:</span>
            <h1>${name}</h1>
        `
        const fajr = content.timings.Fajr
        const sunrise = content.timings.Sunrise
        const dhurr = content.timings.Dhuhr
        const Asr = content.timings.Asr
        const Maghrib = content.timings.Maghrib
        const Isha = content.timings.Isha

        times.innerHTML = `
        <div>
            <span>الفجر</span>
            <span>${fajr}</span>
        </div>

        <div>
            <span>الشروق</span>
            <span>${sunrise}</span>
        </div>

        <div>
            <span>الظهر</span>
            <span>${dhurr}</span>
        </div>

        <div>
            <span>العصر</span>
            <span>${Asr}</span>
        </div>

        <div>
            <span>المغرب</span>
            <span>${Maghrib}</span>
        </div>

        <div>
            <span>العشاء</span>
            <span>${Isha}</span>
        </div>
        `
        }

        

    )
}

getContries('الجزائر')
let select = document.getElementById("select")
let option = document.getElementsByTagName("option")
function getNameCountries() {
    select.addEventListener("change", () => {
        let selectedOption = select.options[select.selectedIndex];
        
        let name;
        if(selectedOption!=""){
            name=selectedOption.value
        }
        getContries(name)
    });
}

getNameCountries()
