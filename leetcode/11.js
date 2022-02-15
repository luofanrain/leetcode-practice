/**
 * description 11. 盛最多水的容器
 * 思路：以宽为限，分别向中心靠拢，若值要最大，最小底则必须要足够大
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let maxValue = 0;
  let startTime = Date.now()
  let len = height.length;
  
  for(let left=0,right=len-1;left<=right;){
    let section = right - left
    let minValue = Math.min(height[left],height[right])
    let curValue = section*minValue
    maxValue = Math.max(curValue,maxValue)
    if(height[left] > height[right]){
      right--
      continue
    }
    left++
  }
  // 去重法，超时
  // let item = {};
  // for(let left=0;left<len;left++){
  //   for(let i=left+1;i<len;i++){
  //     let key =  i-left;
  //     // let key =  Math.min(height[left],height[i])
  //     item[key] = Math.max(Math.min(height[left],height[i]),(item[key]||0))
  //   }
  // }
  // for(let key in item){
  //   let curValue = key * item[key]
  //   maxValue = Math.max(maxValue,curValue)
  // }
  // 双向奔赴 超时
  // for(let left=0,right=len-1;right <= left;left++,right--){
  //     let arrLeft = height.slice(left).map((x,index)=>Math.min(height[left],x)*(index))
  //     let arrRight = height.slice(right).map((x,index)=>Math.min(height[right],x)*(index))
  //     let curValue = Math.max(...[...arrLeft,...arrRight])
  //     maxValue = Math.max(curValue,maxValue)
  // }
  console.log(`耗时${(Date.now()-startTime)/1000}秒,${Date.now()-startTime}毫秒`)
  return maxValue
};
let data = [1,2]
console.log(maxArea(data))