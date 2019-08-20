import {print,red} from './lib';
import './style.css';
import printMe from './print';

import img from './download.png'


// console.log("Hello")
print([1,2,3]);
// console.log(red(1,2,3,4,5));

var input = document.getElementById('ip');
var diapArea = document.getElementById('dispArea');

function reduc(){
    // var redd = document.getElementById('dispArea'); //Create sub division
    //Reduce feature
    diapArea.innerHTML = "Reducer clicked!! and Value :" + red(1,2,3,4,5);
    // return redd;
}
//Default Value doesnt work with inputs.. still working on
function defaultParameter(val='String'){
    console.log(val);
    if(val==''){ val='String; Default Value'}
    diapArea.innerHTML = val;   
}

function component() {
    const element = document.createElement('div'); //Create Division
    
    // Insert Image
    const bg = new Image();
    bg.src = img;
    bg.style.zIndex = '-1';
    bg.setAttribute('style','position:absolute;top:1%;right:3%'); //Positioning the image
    element.appendChild(bg); //Appending Image to element

    var p = document.createElement('p'); 
    p.textContent = "Click me";
    p.style.border = '2px solid blue';
    p.style.marginRight = '25%';
    p.onclick = printMe;
    element.appendChild(p);

    var redBtn = document.getElementById('redu');
    redBtn.addEventListener('click',reduc);

    // console.log(defaultParameter(document.getElementById('ip').value));

    var defBtn = document.getElementById('default');
    defBtn.addEventListener('click', ()=>{ defaultParameter(input.value) });

    var litBtn = document.getElementById('lit');
    litBtn.addEventListener('click', function(){dispArea.innerText = `The Value is ${input.value}`; dispArea.style.bold});
    return element;
    
}



document.getElementById('first-div').appendChild(component());
// document.body.appendChild(component());


