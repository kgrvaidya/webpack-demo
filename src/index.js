import {print,red, Fruits} from './lib';
import './style.css';
import img from './download.png'


console.log("Hello")
print([1,2,3]);
// console.log(red(1,2,3,4,5));

function reduc(){
    var redd = document.getElementById('reducer'); //Create sub division
    //Reduce feature
    redd.innerHTML = red(1,2,3,4,5);
    // return redd;
}

function component() {
    const element = document.createElement('div'); //Create Division
    element.innerHTML = 'Hello World'; //Insert Hello world into this division
    element.classList.add('hello'); //Adding class hello to this div

    // Insert Image
    const bg = new Image();
    bg.src = img;
    bg.setAttribute('style','position:absolute;top:1%;right:3%'); //Positioning the image
    element.appendChild(bg); //Appending Image to element


    var btn = document.getElementById('redu');
    btn.addEventListener('click',reduc);
    
    //Paragraph
    var para = document.createElement('p');
    para.setAttribute('style',"color:red");
    var pname = new Fruits();
    pname.setName('Banana'); 

    para.innerHTML = pname.getName();
    para.classList.add('black');
    // element.appendChild(innerElement);
    element.appendChild(para);

    return element;
}



document.getElementById('first-div').appendChild(component());
// document.body.appendChild(component());


