

const fruites = ["яблоко", "апальсин", "киви",];
function fruitespick(string, array){
     for(let i = 0; i < array.length; i++){
        if(string == array[i]){
            return console.log(array[i], ' найден');
        }
     }
}
// console.log(fruites[2])
let str = "киви"
fruitespick(str, fruites)