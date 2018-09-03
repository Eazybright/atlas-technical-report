var x = 1;

while (x <= 100) {
    // check divisibility
    if((x % 3 === 0) && (x % 5 === 0)){
        console.log("AliandSimbi");
    }else if(x % 5 === 0){
        console.log("Simbi");
    }else if(x % 3 === 0){
        console.log("Ali");
    }
    else{
        console.log(x);
    }
    // print Ali, Simbi, or AliandSimbi
    // increment x
     x = x + 1;
}