

// const limit=10
// let count = 1
// let stars="*"
// while(count <=limit){
//     console.log(stars);
//     stars+="*"
//     count++
// }


// let count =0
// while(count <=100){


//     console.log(count);
 
//     count++
// }



// for(let i=0; i <10;i++){

// console.log(i);






// const str= 'gyurydotydt;pgluy ijk1hn;ifv9u1k,'

// for(let i=0; i <str.length; i ++ ) {

//     console.log(str[i]);

// }


// const str= 'gyurydotydt;pgluy ijk1hn;ifv9u1k,'

// for(let i=0; str[i] !=undefined; i ++ ) {

//     console.log(str[i]);
// }


// const str= 'gyurydotydt;pgluy ijk1hn;ifv9u1k,'

// for(let i=0; str[i] ; i ++ ) {

//     console.log(str[i]);
// }





// const str= 'gyurydotydt;pgluy ijk1hn;ifv9u1k,'
// if (str[20]){

// console.log('truthy');
    
// }else{
//     console.log('falsy');
// }






// let char= 'undefind'

// undefined //falsy
// null //falsy
// NaN //falsy
// 0//falsy
// '0'//truthy

// let sum =char + '5'

// console.log(sum);
// if (sum){

// console.log('truthy');
    
// }else{
//     console.log('falsy');
// }










// let char= 'undefind'
// console.log(char.charCodeAt(i)==''.charCodeAt(0));
// undefined //falsy
// null //falsy
// NaN //falsy
// 0//falsy
// '0'//truthy

// let sum =char + '5'

// console.log(sum);
// if (sum){

// console.log('truthy');
    
// }else{
//     console.log('falsy');
// }









// const str= 'gyurydoty  dt;pgluy ijk1hn;gj uyyf;uon ifv   9u1k,'

// for(let i=0; str[i] ; i ++ ) {

//     console.log(str.charCodeAt(i));
// }






// const str= 'gyury doty  dt;pgluy ijk1h n;gj uyyf;uo n ifv   9u1k,'

// let counter =0

// for(let i=0; i<str.length; i ++ ) {

// if(str[i]== ' '){
// counter++

// }

// }
 
// console.log(counter);







// const str= 'gyury dHUUHIHIoty  dt;pglBTJHIKJuy ijk1h n;gj uySyf;uo HUBSIn ifv   9u1k,'
// //fragat
// let counter =0

// for(let i=0; i<str.length; i ++ )
// if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){

//     counter++
// }


// console.log(counter);








// const str = 'hyogvbybubp^*p^*p^*p^*p^*pp^*^*p^*pp^*bhb;ihbi^*p^*p^*p^*p^*pivp^*,'
// const special = '*^,'
// let count = 0
// for (let i = 0; str[i]; i++) {

//     for (let j = 0; special[j]; j++) {
//         if (str[i]== special[j]) {
//             count++
//         }
//     }

// }
// console.log(count);


















// const sum = function (num1,num2){




// const sum = num1 + num2

// return sum
// }

// console.log(

//     sum (5,6) *  20
// );







// const sayHello = function() {
//     console.log('Hello World!');
// }






// const greet = function(name){
//     console.log('Hello'+name);
// }

// console.log(
//     greet('haneen') +'!'
// );





// const greet = function(name){
//     return'Hello'+name;
// }

// console.log(
//     greet(' Haneen') +'!'
// );






// const counterSpecilChar = function (str,special) {


//     let count = 0
//     for (let i = 0; str[i]; i++) {

//             for (let j = 0; special[j]; j++) {
//                 if (str[i]== special[j]) {
//                     count++
//                 }
//             }
        
//         }
//     }
//    return count;


// }

// const str = 'hyogvbybubp^*p^*p^*p^*p^*pp^*^*p^*pp^*bhb;ihbi^*p^*p^*p^*p^*pivp^*,'
// const special = '*^,'


// console.log(counterSpecilChar(str,special));








// const sum = function (num1,num2){




// // const sum = num1 + num2

// // return sum
// // }

// // console.log(

// //     sum (5,6) *  20
// // );







// const factorial = function(num){

    


//     let result = 1

//     for (let i=num ; i>1; i--) {
        
//         result=result *i

//     }
//     return result

// }















const findKey =function(str){

    let key =''
let isReagingKey=false

  for (let i = 0;i < str.length;  i++) {
  if (str[i]=='#') { 
      
    isReagingKey=!isReagingKey
    
   
 }
 
 if (isReagingKey && str[i]!='#')

key +=str[i] 
}
        
  
    return key
}



const str ='gfyfylfuy #cat# y gyfyoulf gpu'

console.log(
    findKey(str)
);

