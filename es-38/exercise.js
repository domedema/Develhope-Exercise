let helloName= "Hello John";

function inner(){
    return helloName;
    setTimeout(function inner(){
        console.log(inner())},1000)
    
}

console.log(inner())