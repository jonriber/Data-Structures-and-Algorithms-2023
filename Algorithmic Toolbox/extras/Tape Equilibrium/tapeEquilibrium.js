
//BRUTE SOLUTION
function tapeEquilibrium(array){
    if(array <2) return 0
    let totalSumofArray = 0
    array.forEach(item => {
        console.log("inside:",totalSumofArray, item)
        totalSumofArray += item
    });
    let leftSum = 0;
    let minDiff = 2000;

    for(let i=0;i<array.length-1;i++){
        leftSum += array[i]
        let rightSum = totalSumofArray - leftSum;
        diff = Math.abs(leftSum - rightSum)
        minDiff =  Math.min(diff, minDiff) //replace min diff
    }

    return minDiff
}

testingCases = [[3,1,2,4,3]]

testingCases.forEach(element => {
    console.log(tapeEquilibrium(element))
});