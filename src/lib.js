const print = (arr) => { arr.forEach(element => {
                            console.log(element);   
                        });
                    }

//    Filters

const red = (...args) => {
    return args.reduce((tot,ele) => tot+ele,0);
}

const Fruits = class {
    constructor(){
        this.name = " ";
    }
    
    setName(name){
        this.name = name;
    }
    getName() {
        return this.name; }
    
    

    // addTen = (num) => num+10;
}


// Destructuring

nodes = () => { return {'op':'a', 'lhs' : 5, 'rhs' : 10} }

var {op,lhs,rhs} = nodes();
console.log(op,lhs,rhs);




module.exports = {print, red, Fruits};