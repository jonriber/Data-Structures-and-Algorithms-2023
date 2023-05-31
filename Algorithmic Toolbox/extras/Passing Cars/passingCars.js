

function passingCars(array){
    if(array.length <=1) return 0
    let 
        carsGoingWest = 0,
        pairOfPassingCars = 0
    //tartet is one iteration only ----O(n)
    for( let i in array){
        console.log("i:",i)
        if(i == 0){//check if its zero
            carsGoingWest +=1
        }else{ //if its not zero, it gotta be one
            pairOfPassingCars += carsGoingWest
        }
    }
    return pairOfPassingCars //this is a number, total os cars passing through
}

const testingCases = [[0,1,0,1,1]]

testingCases.forEach(item => console.log(passingCars(item)))