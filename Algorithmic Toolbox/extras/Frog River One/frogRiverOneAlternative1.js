

function frogRiverOne(x,array){

    let s = new Array(x+1)
    let remainingDistance = x
    console.log("new array:",s)

    for(let i=0; i< array.length;i++){
        let currLeafPos = array[i]
        console.log("currLeafPos:",currLeafPos)
        if(s[currLeafPos] !=1 && currLeafPos<=x){
            s[currLeafPos] = 1
            remainingDistance --
        }

        console.log("current s array:",s,remainingDistance)
        if(remainingDistance ==0) return i

    }
    console.log("s:",s,remainingDistance)
    return -1
}


testingCases = [[5,[1,3,1,4,2,3,5,4]],[5,[1,3,1,4,2,3,6,4]]]

testingCases.forEach(item => console.log(frogRiverOne(item[0],item[1])))
