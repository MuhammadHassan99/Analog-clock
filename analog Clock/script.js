// console.log('Hello World')

// DOM //

// document.write('JS DOM')

// var para = document.getElementById('para');
// para.innerHTML = "HELLO WORLD !" ;

// var head = document.getElementsByClassName('heading');
// // head[0].style.color = "blue";

// var btn = document.querySelectorAll('button.para');

// Parent node
//var item = document.querySelector('.list');
// console.log(item.parentNode);
// item.parentNode.style.backgroundColor = 'coral'


// Parent Element

// console.log(item.parentElement.parentElement.parentElement);


// child node

// console.log(item.childNodes); gives text as well
// console.log(item.children); only gives the element
// console.log(item.children[0]);
// item.children[1].style.backgroundColor = "grey";

// similarly first child
// first child element last previous etc

// creating Elemet with DOM

//var newDiv = document.createElement('div');

//adiing class to div

//newDiv.className = 'div-class';

// adding id to div

//newDiv.id = 'div-id';

//creating text for div

//newDivtext = document.createTextNode('This is a JS made div');

//Adding text to div

//newDiv.appendChild(newDivtext);

// adding div to the DOM

//var p = document.querySelector('#para');
//var div = document.querySelector('.first-div')

//div.insertBefore(newDiv, p);

//newDiv.style.fontSize = '25px'

//console.log(newDiv);

//events listener

//var button = document.querySelector('#btn').addEventListener('click',buttonclick);

//function buttonclick(e){
    // document.querySelector('.heading').innerHTML = 'Hello';
    // document.querySelector('.container').style.backgroundColor = "coral";
    //console.log(e.target.id);
//}

// Dates

// var d = new Date;
// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;


    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})


