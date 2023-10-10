
let sterling = [34, 250, 56];

let euros = sterling.map( (elem)=> { 
    console.log(elem);
    return elem*1.13;
});

let euros2 = sterling.map(elem => elem*1.10);

console.log(euros);
console.log(euros2);