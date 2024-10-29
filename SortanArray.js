let arr=[20,99,10,53,1]

for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[j]>arr[i]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)