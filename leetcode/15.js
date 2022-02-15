/**
 * description 15.三数之和
 * 思路：排序，从小到大
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums = nums.sort((x,y)=>x>y?1:-1)
  let result = [],left=0, right=nums.length;
  if(right < 3) return result;
  let newItem = []
  let curNumber = 0
  let count = 0;
  for(let i=0;i<right;i++){
    if(nums[i] == curNumber) count++;
    else {
      curNumber = nums[i]
      count = 0
    }
    if(count > 3) continue;
    newItem.push(nums[i])
  }
  right = newItem.length
  for(;left<right-2;left++){
    if(newItem[left] > 0) break;
    for(let i=left+1;i<right-1;i++){
      if(newItem[left] + newItem[i] > 0 && newItem[i] > 0) break;
      for(let j=i+1;j<right;j++){
        let curValue = newItem[left] + newItem[i] + newItem[j]
        if(curValue > 0) break;
        if(curValue == 0){
          let value = [newItem[left],newItem[i],newItem[j]].join(",")
          if(!result.includes(value)) result.push(value)
        }

      }
    }

  }
  return result.map(x=>x.split(",").map(y=>Number(y)))
};
let data =  [-1,0,1,2,-1,-4]
console.log(threeSum(data))