
function isEnoughCapacity(products, containerSize){
  let sum = 0;
  let valArr = Object.values(products);
 for (let val of valArr) {
   sum += val;
 }
  if(sum <= containerSize){
    return true;
  }else{
    return false;
  }
}
let sum =  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
;
console.log(sum)