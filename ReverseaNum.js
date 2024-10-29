let num=1234;
let rev=0
while(num>0){
    let temp=Math.floor(num%10)
    rev=rev*10+temp
   num=Math.floor(num/=10)
}
console.log(rev)