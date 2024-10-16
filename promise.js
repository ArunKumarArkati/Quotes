console.log("Cart Item")
setTimeout(function(){
    console.log("place order")
    setTimeout(function(){
        console.log("payment")
        setTimeout(function(){
            console.log("orderSummary")
        },1000)
    },1000)
},3000);