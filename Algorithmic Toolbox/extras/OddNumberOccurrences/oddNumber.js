function oddNumbers(array){
    // console.log(array)
    if(array.length == 1) return array[0]
    let 
        newArray = -1,
        sortedArray = array.sort((a,b) => a-b);
    
    let i=0
    // console.log(sortedArray)
    while(i < array.length-1){
        
        if(sortedArray[i] == sortedArray[i+1]){
            i = i+2
        }else{
            newArray =sortedArray[i]
            i++
        }
    }
    if(newArray == -1) return sortedArray[sortedArray.length-1]
    return newArray
}

const testingCases = [[9,3,9,3,9,7,9],[1],[2,2,3,3,4]]

testingCases.forEach(item => console.log(oddNumbers(item)))