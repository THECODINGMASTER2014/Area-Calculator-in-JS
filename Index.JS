var choice = prompt("Welcome to area calculator. \n Please Enter your choice. \n1 Area of a Rectangle. \n2 Area of a triangle. \n3 Area of a Circle. \n4 Area of a parallelogram");

if(choice == '1') {
  var l = prompt('Enter the length')
  var b = prompt('Enter the breadth')
  var result = Number(l) * Number(b)
  alert ('the Area of the rectangle is ' + result) 
}

if (choice == '2') {
    var h = prompt('Enter the Height')
    var b = prompt('Enter the Base')
    var result = Number(h) * Number(b) / 2
    alert('the Area of the triangle is ' + result)
}

if (choice == '3') {
    var l = prompt('Enter the radius')
    var result = Number(l) * 3.14 * Number(l)
    alert('the Area of the Circle is ' + result)
}

if (choice == '4'){
    var b = prompt('Enter the base')
    var h = prompt('Enter the height')
    var result = Number(b) * Number(h)
    alert('The Area of the Parallelogram is '+ result)
}