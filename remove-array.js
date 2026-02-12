const arr = [1,2,3,4];
const remove = 1;

for (let i = 0; i<arr.length; i++) {
    if(arr[i]===remove){
        arr.splice(i,1);
        break;
    }    
}
console.log(arr)