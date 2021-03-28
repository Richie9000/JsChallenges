// Complete the birthday function below.
function birthday(bar, d, m) {
console.log(bar);
console.log(bar.slice(1,3));
console.log(bar);
let counter = 0;
for (let i = 0; i < bar.length - 1; i++){
 if (checkBar (bar,i,m)===d){
     counter ++;
 }

}
return counter
}
function checkBar (bar,i,size){
    let barslice = bar.slice(i,i+size)
    let num = barslice.reduce((accu,current) => (accu + current));
    return num
}
