/**
 * description 70.爬楼梯(斐波那契数列)
 * 思路： f(n) = f(n-1) + f[n-2]
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {  
   function dfs(index,list){
     if(index == 0 ||  index== 1) return 1
     if(list[index] == -1) {
      let prep = dfs(index-1,list)
      let next = dfs(index-2,list)
      list[index] = prep + next
     }
     return list[index]
   }
   let items = new Array(n+1).fill(-1);
   let count = dfs(n,items);
   return count
};
let data =  45
let startTime = Date.now()
console.log(climbStairs(data))
console.log(`耗时：${Date.now() -  startTime}`)