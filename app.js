//settings
const containerW = 800
const containerH = 700

let n = 1

// initial wave of fulgi

    setInterval(()=>{
        if(n < 50) {
        addAnotherFlake () 
        }
        
    },10)
    



function addAnotherFlake () {
        n++
        let scale = randFloat(1.7)
        let f2 = new Flake(n, randCoord(0, containerW), 0, scale, scale)
        f2.render(scene)
        f2.fall(containerW, containerH, addAnotherFlake)
    }


 //debugger