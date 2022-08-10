const seconds = document.querySelector('.second-hand');
const minutes = document.querySelector('.min-hand');
const hours = document.querySelector('.hour-hand');
let numb = "12";
let drawnumber = function() {

    for (let i = 1; i <= 12; i++) {
      let el = document.createElement('div');
      el.setAttribute('class', `number number${i}`);
      if(i == 1){
          el.style.transform = `rotate(${0}deg)`;
        }
        else{
            let j = i - 1;
            el.style.transform = `rotate(${j*30}deg)`;
        }
  
      document.querySelector('.numbers').appendChild(el).innerHTML = numb;

      numb = i ;
      console.log(numb)
    //   document.getElementById("numbe").innerHTML = numb;
    }
  
  }; 
  drawnumber()

function setDate () {
    const currentDate = new Date();
//GET SECONDS:
const getSec = currentDate.getSeconds();
const secDeg = ((getSec / 60) * 360) + 90;
seconds.style.transform = `rotate(${secDeg}deg)`;
// console.log(getSec);
// console.log(secDeg);

//GET MINUTES:
const getMins = currentDate.getMinutes();
const minsDeg = ((getMins / 60) * 360) + ((getSec/60)*6) + 90;
minutes.style.transform = `rotate(${minsDeg}deg)`;
// console.log(getMins);
// console.log(minsDeg);

//GET HOURS:
const getHours = currentDate.getHours();
const hourDeg = ((getHours / 12) * 360) + ((getMins/60)*30) + 90;
hours.style.transform = `rotate(${hourDeg}deg)`;
// console.log(getHours);
// console.log(hourDeg);


}
setInterval(setDate, 1000);

setDate();