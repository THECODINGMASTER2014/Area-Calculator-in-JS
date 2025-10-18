var choice = prompt("Welcome to area calculator. \n Please Enter your choice. \n1 Area of a Rectangle. \n2 Area of a triangle. \n3 Area of a Circle. \n4 Area of a parallelogram");

if(choice == '1') {
  var l = prompt('Enter the length')
  var b = prompt('Enter the breadth')
  var result = Number(l) * Number(b)
  alert ('the Area of the Rectangle is ' + result) 
}

if (choice == '2') {
    var h = prompt('Enter the Height')
    var b = prompt('Enter the Base')
    var result = Number(h) * Number(b) / 2
    alert('the Area of the Triangle is ' + result)
}

if (choice == '3') {
    var r = prompt('Enter the Radius')
    var result = Number(r) * 3.14 * Number(r)
    alert('the Area of the Circle is ' + result)
}

if (choice == '4') {
    var h = prompt('Enter the height')
    var cb = prompt('Enter the corresponding base')
    var result = Number(h) * Number(cb)
    alert('the Area of a parallelogram is ' + result)
}