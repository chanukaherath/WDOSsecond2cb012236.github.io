var myName
myName =150
typeof myName
var myCar="toyota"
    myVan="vivid"
    myNUm=34
//Create arrays
var myArray =new Array('32','kamaj',123)
var motar=[];
//to see number of objects in array or variable
motar.length
//to add items after to the array
myArray.push('susuki',23)
//to remove last item
myArray.pop()
//to remove first item
myArray.shift()
//to add item to the beginning
myArray.unshift('Lov and thunder',5645)
//to see the position of a particular item
myArray.indexOf("32")


//to create an object
var myObj = new Object();
//or
var myObj2 ={};
myObj2 ={firstName:'Chanuka',age:32,studentsId:2342} 
myObj.myvan2='dilee'
//making functions
function printDate(){
    document.write(Date());
}
printDate();
function printValue(prize,qty){
    document.write(prize*qty);
}
printValue(12,7);
//selectors in JavaScript
getElementById("idname")
getElementByClassName("classname") - Array
getElementByTagName("<tagname>") - Array
querySelectorAll("#idname") - Array
                (".classname")
                ("tagname")
//