import {print,red, Fruits} from './lib';
import './style.css';
import img from './download.png'


console.log("Hello")
print([1,2,3]);
// console.log(red(1,2,3,4,5));


function component() {
    const element = document.createElement('div'); //Create Division
    element.innerHTML = 'Hello World'; //Insert Hello world into this division
    element.classList.add('hello'); //Adding class hello to this div

    // Insert Image
    const bg = new Image();
    bg.src = img;

    element.appendChild(bg); //Appending Image to element

    const innerElement = document.createElement('div'); //Create sub division
    //Reduce feature
    innerElement.innerHTML = red(1,2,3,4,5);
    
    //Paragraph
    var para = document.createElement('p');
    para.setAttribute('style',{'color':'blue'});
    var pname = new Fruits();
    pname.setName('Banana'); 

    para.innerHTML = pname.getName();
    para.classList.add('black');
    element.appendChild(innerElement);
    element.appendChild(para);

    return element;
}

document.body.appendChild(component());


