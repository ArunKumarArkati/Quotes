var globalScopeVar="Hi I am global scope variable"
function test(){
    var functionScopeVar="I'm inside a function"
   
    console.log(functionScopeVar+"inside")
    console.log(globalScopeVar+"Inside")
}
test()
console.log(globalScopeVar+"outside")
    console.log(functionScopeVar+"outside")
