//PESEUDO - CODE
//CREATE A STACK, LAST IN --> FIRST OUT
//IT IS AN ARRAY

//STEP ONE: ITERATE OVER EACH ELEMENT IN ARRAY, AND CHECK IT´S TYPE, APPEND IN STACK ACCORDING TO ITS CODE

function brackets(str){
    let stack = [];

    for(let i of str){ //of element gives us the array value, not index 
        console.log(i)
        if(stack.length<1){
            if(i == ")" || i =="]" || i =="}") return 0 //if array is starting and first element is already wrong, simplky return 0
            if( i =="{") stack.push(1)
            else if(i =="[") stack.push(2)
            else stack.push(3)
        }else{
            console.log("switch case",i)
            switch(i){
                case "{":
                    stack.push(1)
                    break
                case "[":
                    stack.push(2)
                    break
                case "(":
                    stack.push(3)
                    break
                case ")":
                    if(stack[stack.length-1] == 3) stack.pop()
                    else return 0
                    break
                case "]":
                    if(stack[stack.length-1] == 2) stack.pop()
                    else return 0
                    break
                case "}":
                    if(stack[stack.length-1] == 1) stack.pop()
                    else return 0
                    break
                default:
                    console.log("default case")
                    return 0
                    
            }
        }
        console.log("stack:",stack)
    }
    console.log("stack:",stack)
    return 1 //not properly nested
}

const testingCases = ["{[()()]}","([)()]"]

testingCases.forEach(item => console.log(brackets(item)))