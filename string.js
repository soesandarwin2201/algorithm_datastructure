// roman to integer
//input => roman number => string "LVIII" => 50 , 5 , 1, 1, 1 
// string into array using the split(''); sum of the array
//output => integer
// add the total 


let romanNumber = {
     'I' : 1,
     'V' : 5,
     'X' : 10,
     'L' : 50,
     'C' : 100,
     'D' : 500,
     'M' : 1000
};

function romanConvert(s) {
     let result = 0;
     let romanArray = s.split('');
     for(let i = 0; i < romanArray.length; i++) {
          result += romanNumber[romanArray[i]];
          console.log(result);
     }

     console.log(result);
     
     

}

romanConvert("MCMXCIV")