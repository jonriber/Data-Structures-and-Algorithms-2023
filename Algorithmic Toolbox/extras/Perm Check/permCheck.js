function permCheck(array){
    let sortedArray = array.sort((a,b) => a-b)
    let i = 0;
    console.log("sortedArray:",sortedArray)
    while(i<=sortedArray.length-1){
        if(sortedArray[i] != (i +1)){
            return 0
        }
        i++
    }
    return 1
}

const testingCases = [[4,2,3,1],[4,1,3],[1,0],[1,4,2],[1,1],[1],[4]]

testingCases.forEach(item => console.log("resultado:",permCheck(item)))