// let points = 55;
// let result =points > 60 ? 'o`tdi': 'o`tmadi';
// console.log("imtihon natijasi:", result)

// let azobolgan = 10;
// let result = azobolgan >= 10 ? " 20% berilsin":" akis hoda 5% "
// console.log("mijoz:",result );

// &&
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
console.log("Hour;", hour, "Minute: ", minute);

let isOfficeOpen = hour >= 9 || minute >= 0;
let isOfficeClose = !isOfficeOpen;
console.log("offis ochiq", isOfficeOpen);
console.log("offis yopiq", isOfficeClose);

// ||
console.log(false || true);

let color = "oq";
let color2 = "qora";
let colorTemp = color;
color = color2;
color2 = colorTemp;
// color = "qora";
// color2 = "oq";

console.log(color);
console.log(color2);

// let hour = 6;
if (hour >= 6 && hour < 12) {
  console.log("Xayirli yong");
} else if (hour >= 12 && hour < 18) {
  console.log("Xayirli kun");
} else {
  console.log("Xayirli Kech😴");
}
console.log(hour);

let word = "pencil";
switch (word) {
  case "pencil":
    console.log("qalam");
    break;
  case "book":
    console.log("kitob");
    break;
  default:
    console.log("noma`lum so`z");
}
let word1 = "intelligent";
if (word1 === "pencil") {
  console.log("qalam");
} else if (word1 === "book") {
  console.log("kitob");
}else if (word1 === "intelligent" || word1 === "smart" || word1 === "clever") 
console.log("aqilli");
else console.log(namalum);



 
for (let i=1; i<5; i++) {
    if ( i%2 !==0)
    console.log(i);
}
let i =0; 

while (i<5) {
    if ( i%2 !==0)console.log(i);
    i++;
}

///
