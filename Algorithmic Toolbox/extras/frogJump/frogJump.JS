

function frogJump(x,y,D){
    console.log("inuts:",x,y,D)
    let 
        // maxNumberOfJumps = 0,
        distance = (y - x),
        mod = Math.ceil(distance / D)
    
    console.log("mod",distance,mod)
    return mod
}

testingCases = [[10,85,30]]

testingCases.forEach(item => console.log(frogJump(item[0],item[1],item[2])))