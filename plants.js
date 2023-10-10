
const d = new Date();
let day = d.getDay();

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let curr_day = week[day];

const plantsWatered = (day, waterDay) => {

    if (day === waterDay){
        return `Yep water the plants`;
    }else{
        return `Please water the plants on ${waterDay}`;
    }

}; 

console.log(curr_day);
console.log(plantsWatered(curr_day, "Monday"));
