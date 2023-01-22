let name = 'Franklin Macias';
let height = 174;
let concatenate = name + ' ' + height;

//document.write(concatenate)
/*
let data = document.getElementById('data');
data.innerHTML = `
    <h1>Hello, I am a div</h1>
    <h2>My name is: ${name}</h2>
    <h3>My height is: ${height} cm</h3>
`;

if (height >= 175) {
    data.innerHTML += `
        <h1>You are tall.</h1>
    `;
} else {
    data.innerHTML += `
    <h1>You are short.</h1>`
}

for (let i = 2000; i <= 2020; i++) {
    //
    data.innerHTML += `
        <h2>We are in: ${i}</h2>
    ` 
}
*/

function displayName(name, height) {
    let myData =  `
        <h1>Hello, I am a div</h1>
        <h2>My name is: ${name}</h2>
        <h3>My height is: ${height} cm</h3>
    `;
    return myData;
}

function print () {
    let data = document.getElementById('data');
    data.innerHTML = displayName('David Avellan', 195);
}

print();

let names = [
    'David', 'Antonio', 'Manuel'
]
document.write('<h1>Name List</h1>')
/*for (let i = 0; i < names.length; i++) {
    document.write(names[i] + '<br/>')
}*/

names.forEach((name) => {
    document.write(name + '<br/>')
})

//* Objects

let car = {
    model: 'Mercedes Benz',
    speed: 500,
    year: 2020,
    displayData() {
        console.log(this.model, this.speed, this.year);
    },
    property: 'random'
}

document.write('<h1>' + car.model + '</h1>')
car.displayData();

//* Promise
let greetings = new Promise((resolve, reject) => {

    setTimeout(() => {
        let greet = 'Hello World!';
        greet = false;
        if (greet) {
            resolve(greet)
        } else {
            reject('No data');
        }
    }, 2000)
})

greetings.then(result => {
    alert(result)
})
.catch(err => {
    alert(err)
});


