

function missingInteger(array){
    
    let treat = array.filter((number) => number >0).sort((a,b) => a-b)
    let uniqueTreat = [...new Set(treat)]
    console.log("Array anduniqueTreat",uniqueTreat,array)
    if(uniqueTreat.length == 0 || uniqueTreat[0]>1) return 1
    
    for(let i = 0;i<=uniqueTreat.length;i++){
        console.log("i and i+1",i,i+1)
        if((uniqueTreat[i+1] - uniqueTreat[i]) >1){
            return uniqueTreat[i]+1
        }else{
            return uniqueTreat[uniqueTreat.length-1]+1
        }
    }
    // console.log("treated:",treat)
    // console.log("uniqueTreat:",uniqueTreat)
}



//tests

const 
    test1 = [-1,-4,0],
    test2 = [-1,-14,10,3,5,8,-2,6],
    test3 = [2,3,4,5,6],
    test4 = [25,34,6,2,1],
    test5 = [1,2,3,4,5],
    testingCases = [
        [-1,-4,0,1,1],
        [-1,-4,0,],
        [],
        [-1,-14,10,3,5,8,-2,6],
        [2,3,3,3,4,5,6],
        [25,34,6,2,1],
        [1,2,3,4,5],
    ]

testingCases.forEach((item) => console.log(missingInteger(item)))
