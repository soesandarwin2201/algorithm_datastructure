//sorted array
// target
// return the index if the target is found
// return index the supposed to be

function insertPosition(nums,target){
     let left = 0;
     let right = nums.length - 1;
   
     while (left <= right) {
       let mid = Math.floor((left + right) / 2);
       if (nums[mid] === target) {
         return mid;
       } else if (nums[mid] < target) {
         left = mid + 1;
       } else {
         right = mid - 1;
       }
     }
   
     return left;
}

insertPosition([1,3,5,6],5)