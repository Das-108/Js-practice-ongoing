// let fullName = (firstName , LastName) => {
//     let space = " "
//     console.log(firstName+space+LastName)
// }

// fullName('hare','krsna')


// function sum(a,b){
//     // return a+b
//     console.log(a+b)
// }

// sum(8,9)

// let BMI = (weight,height) =>{
//     let BMI = weight/(height*height)
//     if (BMI < 18.5){
//         console.log('underWeight')
//     }else if(BMI < 24.9){
//         console.log('Normal Weight')
//     }else if(BMI < 29.9){
//         console.log('Overweight')
//     }else if (BMI >= 30){
//         console.log('Obese')
//     }
// }

// BMI(60,5.3)

let showDateTime = () =>{
    let now = new Date()
    console.log(now.getFullYear() +'-' +now.getMonth())
}
showDateTime()