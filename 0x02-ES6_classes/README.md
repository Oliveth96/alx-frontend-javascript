<h1>0x02-ES6_classes</h1>
<br>
<br>

**Resources**

<em><strong>Read or watch</em></strong>

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)



<br>
<br>

<h4> Learning Objectives</h4>

<h4> TASKS</h4>

| S/N | DESCRIPTION | FILE |
|---- | ----------- | ---- |
|0. | <p>You used to attend a place like this at some point </p> <ul>Implement a class named ClassRoom:<li>Prototype: <em>export default class ClassRoom</em></li><li>It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize</li></ul>|[0-classroom.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/0-classroom.js)|
|1. |<p>  Let's make some classrooms</p><p>Import the ClassRoom class from [0-classroom.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/0-classroom.js)</p><p>Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).</p>|[1-make_classrooms.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/1-make_classrooms.js)|
|2. |<p> A Course, Getters, and Setters</p><ul>Implement a class named HolbertonCourse: <li>Constructor attributes: <span>name(string); length(Number); students(array of strings)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li></ul>|[2-hbtn_course.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/2-hbtn_course.js)|
|3. |<p> Methods, static methods, computed methods names..... MONEY </p><ul>Implement a class named Currency: <li>Constructor attributes: <span>code(string); name(String)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>Implement a method named displayFullCurrency that will return the attributes in the following format name (code).</li></ul>|[3-currency.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/3-currency.js)|
|4. |<p> Pricing </p> <p>Import the class Currency from [3-currency.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/3-currency.js) </p><ul>Implement a class named Pricing: <li>Constructor attributes: <span>amount(Number); currency(Currency)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).</li><li>Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.</li></ul>|[4-pricing.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/4-pricing.js)|
|5. |<p> A Building </p><ul>Implement a class named Building: <li>Constructor attributes: <span>sqft (Number)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage. If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage</li></ul>|[5-building.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/5-building.js)|
|6. |<p>  Inheritance</p> <p>Import the class Building from [5-building.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/5-building.js) </p><ul>Implement a class named SkyHighBuilding that extends from Building: <li>Constructor attributes: <span>sqft (Number) (must be assigned to the parent class Building); floors (Number)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.</li></ul>|[6-sky_high.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/6-sky_high.js)|
|7. | <p>   Airport</p> <ul>Implement a class named Airport:  <li>Constructor attributes: <span>Name(String); code(String)</li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>The default string description of the class should return the airport code (example below).</li></ul>|[7-airport.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/7-airport.js)|
|8. |<p>  Primitive - Holberton Class </p><ul>Implement a class named HolbertonClass: <li>Constructor attributes: <span>size (Number); location(String)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>When the class is cast into a Number, it should return the size.</li><li>When the class is cast into a String, it should return the location.</li></ul>|[8-hbtn_class.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/8-hbtn_class.js) |
|9. | <p>   Hoisting</p> <p>Make the code work</p>|[9-hoisting.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/9-hoisting.js) |
|10.| <p>   Vroom</p> <ul>Implement a class named Car: <li>Constructor attributes: <span>brand(String); motor(String); color(String)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>Add a method named cloneCar. This method should return a new object of the class</li></ul>|[10-car.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/10-car.js) |
|11. | <p>EVCar</p> <p>Import the class Car from [10-car.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/10-car.js)  </p> <ul>Implement a class named EVCar that extends the Car class: <li>Constructor attributes: <span>brand(String); motor(String); color(String); range(String)</span></li><li>Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)</li><li>For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.</li></ul>|[100-evcar.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/100-evcar.js) |

<h5>Author</h5>

<br>
[Ndubuka Oliveth](https://github.com/Oliveth96)
