function buyAndSell(array){
     let max = 0;
     let min_price = array[0];
     for(let i = 0; i < array.length; i++){
          if(array[i] < min_price) {
               min_price = array[i];
          }
          else if(array[i] - min_price > max){
               max = array[i] - min_price;
          }
          
     }
     console.log(max);
     return max;
}

buyAndSell([7,1,5,3,6,4]);

// 1 - 7 = -6 
// 5 - 7 = -2 
// 3 - 7 = - 4
// 6 - 7 = - 1
// 5 - 1 = 4
// 3 - 1 = 2
// 6 - 1 = 5
// 5 - 3 = 2
