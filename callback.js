
let first = ()=>{
    console.log("1st");
};

let second = (callb)=>{
    setTimeout( ()=>{ 
        console.log("2nd");
        callb();
     }, 1000 );
};

let third = ()=>{
    console.log("3rd");
};

first();
//second(third);

second(()=>{
    console.log("Third");
});