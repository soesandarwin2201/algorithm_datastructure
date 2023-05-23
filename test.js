// "abcabcbb" 
// a , ab, acb , bc , bc ,bac , cab
// return maximun lenght of the substring
// max-lenght 
//store the substring 
// for loop 

function longestString(string){
     let max_length = 0;
     let set = new Set();
     let setLength = 0;
     // loop through the string 
     for(let i = 0; i < string.length; i++){
          if(set.has(string[i])){
               return;
          }
       else if(!set.has(string[i])){
          console.log(string[i]);
         set.add(string[i]);
         console.log(set);
         setLength++;
         console.log(setLength);
       }
       
     }
     
     // return Math.max(max_length, setLength);
}

longestString("pwwkew")
