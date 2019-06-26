//khai bao bien
let inputWidth;
let inputHeight;

//nhap du lieu vao bien
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

//chuyen doi kieu chuoi sang so
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

//tinh dien tich hinh chu nhat
let area = width * height;

document.write("this area is " + area);