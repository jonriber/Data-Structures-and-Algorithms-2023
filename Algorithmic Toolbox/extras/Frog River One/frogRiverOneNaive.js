
function frogRiverOne(x,array){

    let 
        targetArray = [...Array(x+1).keys()].slice(1).toString()
        sortedList = array.sort((a,b) => a-b),
        setList = [...new Set(sortedList)].toString(),

    console.log("targetArray:",targetArray)
    console.log("ssetList:",setList)
    if (targetArray == setList){
        console.log("é possível atravessar!",array.indexOf(x)-1)
        return array.indexOf(x)-1
    }else{
        console.log("não é possível atravessar")
        return -1
    }
}

testingCases = [[5,[1,3,1,4,2,3,5,4]],[5,[1,3,1,4,2,3,6,4]]]

testingCases.forEach(item => console.log(frogRiverOne(item[0],item[1])))