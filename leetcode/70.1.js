/**
 * description 70.爬楼梯,打印出所有结果
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
 return getList([],n)
};
var getList = function(list,n){
 if(n==0) return list;
 let maxValue = n >= 2 ? 2 : 1;
 let dataList = []
 for(let i=1;i<=maxValue;i++){
    let valueList = []
    if(list.length == 0) valueList = [[i]]
    else{
      for(let j=0,len=list.length;j<len;j++){
          valueList.push(list[j].concat(i))
      }
    }
    dataList = dataList.concat(getList(valueList,n-i))
 }
 return dataList;
}
let data =  5
let startTime = Date.now()
console.log(climbStairs(data))
console.log(`耗时：${Date.now() -  startTime}`)