function plandoricNumber(num){
    let rev = 0
    let mod
    let copy = num
    console.log(num)

   while(num > 0){
    mod = num % 10
    rev = rev*10 + mod
    num = Math.floor(num/10)
    }
    console.log(rev)

    if(copy == rev){
    console.log("it is a plandoric number")
   }else{
    console.log("it is not a plandoric number")
   }
   

}
plandoricNumber(121)