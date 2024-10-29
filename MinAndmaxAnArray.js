let arr=[0,2,5,6,8,9,33,77,45,23,44]
let min=arr[0]
let max=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>min)
        min=arr[i]
    if(arr[i]<max)
        max=arr[i]
}

console.log(min)
console.log(max)