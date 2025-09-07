
const checkBtn = document.getElementById("check").addEventListener("click",function armstorng(){
    let inputNumber = parseInt(document.getElementById("number").value)

    for(let i = 1; i< 10; ++i){
        for(let j=0; j < 10 ;j++){
            for(let k = 0; k < 10; ++k){
                let sum = Math.pow(i, 3) + Math.pow(j,3) + Math.pow(k,3)
                let num = i * 100 +j* 10 +k

                if (sum == num){
                    console.log(sum)
                }
            }
        }
    }    
})

