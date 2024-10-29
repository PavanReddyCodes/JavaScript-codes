let arr=[10,20,30,40]
let target=30;
console.log(binarySearch(arr,target))

function binarySearch(arr,target){
    let start=0
    let end =arr.length-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(target<arr[mid]){
           end=mid-1
        }
        else if(target>arr[mid]){
            start=mid+1
        }
        else {
            return mid;
        }
    }
    return -1
}
console.log(Math.ceil(3.2));
