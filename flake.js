// OOP: Classes -> Objects / constructor


//*Component lifecycle
//*Prototyping
//*Detached(headless) APPROACH

// HW1: make it work:
        //      left, size(transform: scale()), color (background-color)
/*
[INNER LOGIC ----> PRESENTATION LOGIC]

*/


class Flake {   // PascalCase

    //* APPEAR
    constructor( n, left, top, speed, size ) {
        this.n = n
        this.left = left
        this.top = top
        this.speed = speed
        this.size = size
        console.log(`FLAKE ${this.n}: APPEARED`)
        
    }

    //falling phase
    fall (cw, ch, cb) {
        this.timerId = setInterval(()=>{
             this.top+= this.speed
             console.log(`FLAKE ${this.n}: FALL`, this)
             //Update the rendered div
            this.update()

             if(this.top >= 700) {
                 this.disappear(cb)
             }
        },20)
    }

    // dissappeared
    disappear(cb){
        clearInterval(this.timerId)
        console.log(`FLAKE ${this.n}: DISAPPEARED`, this)
        window[`flake__${this.n}`].style.display = `none`
        cb()
    }

    update() {
        //SEARCH THE div of the current flake
        window[`flake__${this.n}`].style.top = `${this.top}px`
    }



    // Properties: top, left, size, speed (x,y), color....

    // methods: fall(), move(), fade()...
   render(root) {
          root.innerHTML += `<div id ="flake__${this.n}" class="flake" style="transform: scale(${this.size}); left: ${this.left}px;top: ${this.top}px;">${this.n}</div>`
   }
}




















// class Person {
//   ...
//   constructor(name) {
//
//  }
//   .....
// }

// new Person("John") 
//      |
//      \ ---> Object {} primitive 
//                   \
//                     \ ---> init basics
//                                  \
//                                   \--> + label "Person"--> (this) constructor()
//                                                                       |
//                                                                       |
//                                                                 <---object         

