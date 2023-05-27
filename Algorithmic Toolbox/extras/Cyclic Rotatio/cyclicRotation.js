function cyclicRotation(array,k){
    console.log("array:",array,k)
    let 
        module = k%(array.length);
    if(module == 0) return array
    let    
        newIndex = array.length - module,
        newArray = array.slice(newIndex)
        rest = array.slice(0,newIndex),
        result = [...newArray,...rest]
    console.log("module:",module)
    console.log("newIndex:",newIndex)
    console.log("newArray:",newArray)
    console.log("rest:",rest)
    console.log("result:",result)
    
    return result
}

const testingCases = [[[3, 8, 9, 7, 6], 3],[[1, 2, 3, 4],4],[[5,-1000],1]]

testingCases.forEach(item => console.log("resultado:",cyclicRotation(item[0],item[1])))