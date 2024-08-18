console.log(8+4);
console.log(8-4);
console.log(8/4);
console.log(8*4);

let a=30;
let b=10;
console.log(a/b);

//temperature celsius to kelvin
let c=25.5;
console.log("Celsius -",c);
console.log("Kelvin -",c+273);

//mins to secs
let a=300;
console.log(a);
console.log(a*60);

// Speed km to m
let s=36;
console.log(s*5/18);

//5,6,10
  let N = parseInt(inputChar);
  var s="";
  // square of  1-N numbers
  for(let i=1;i<=N;i++){
      s+=(i*i+" ");
  }
  console.log(s);

let N = parseInt(inputChar);
  
  // factorial
  var fact=N;
  for(let i=1;i<N;i++){
      fact*=i;
  }
  console.log(fact);

 let N = parseInt(inputChar);
  
  // NO of digits.
  var di=String(N);
 
  console.log(di.length);

let name_1 = "Ajay";
let name_2 = "Sumit";

let marks_1 = 98.4;
let marks_2 = 98.4;
if(marks_2==marks_1){
    console.log("equal");
}
else if (marks_2 < marks_1) {
    console.log(name_2);
} else {
    console.log(name_1);
}

//sma;;est of 3
let x = 2;
let y = 3;
let z = 1;

if (x > y) {
    if (x < z) {
        console.log(x);
    } else {
        if (y > z) {
            console.log(y);
        } else {
            console.log(z);
        }
    }
} else {
    if (y < z) {
        console.log(y);
    } else {
        if (x < z) {
            console.log(x);
        } else {
            console.log(z);
        }
    }
}

