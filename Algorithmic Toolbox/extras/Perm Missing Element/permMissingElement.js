 //have to find the element who is missing.
    //how do I know which one is missing?
    //well, we have a range on integers, that starts at the lowest one and stops at the maximum value of the array.
    //they are initialy mixes, it means they are not sorted.
    //all elements of the array are different

    //STEPS:
    // 1 - Sort the array
    // 2 - What are the boundariy cases? 
    // 3 - So, the array is sorted, than we will always have a min and max value, that means that 
    // the target is not index[0] or index[-1]

function permMissingElement(array){
    
    let 
        sortedArray = array.sort((a,b) => a-b)
        index = 0;
    console.log("array:",array)
    console.log("sorted:",sortedArray)
    while(index <sortedArray.length-1){
        let 
            currentValue = sortedArray[index],
            nextValue = sortedArray[index+1]

        if(nextValue != currentValue +1){
            return currentValue+1
        }
        index++
    }
    return -1
};

const testingCases = [[2,3,1,5]]

testingCases.forEach(item => console.log("resultado:",permMissingElement(item)))
