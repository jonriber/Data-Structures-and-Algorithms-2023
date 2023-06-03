

function distinct(array){
    let newSet = [...new Set(array)]
    // console.log("newSet:",newSet)
    return newSet.length
}

const testingCases = [[2,1,1,2,3,1],[],[1,1,1]]

testingCases.forEach(item => console.log(distinct(item)))