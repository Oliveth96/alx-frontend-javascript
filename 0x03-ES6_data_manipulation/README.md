<h1>0x03. ES6 data manipulation</h1>
<br>
<br>

**Resources**

<em><strong>Read or watch</em></strong>

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

[Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

[Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

[WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMaps)




<br>
<br>

<h4> Learning Objectives</h4>

<h4> TASKS</h4>

| S/N | DESCRIPTION | FILE |
|---- | ----------- | ---- |
|0. Basic list of objects | <p>Create a function named <em>getStudentsByLocation</em> that returns an array of objects.</p><p>Each object should have three attributes: id (Number), firstName (String), and location (String).</p> <ul>The array contains the following students in order:<li>Guillaume, id: 1, in San Francisco</li><li>James, id: 2, in Columbia</li><li>Serena, id: 5, in San Francisco</li></ul>|[0-get_list_students.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/0-get_list_students.js)|
|1. More Mapping |<p>  Create a function <em>getListStudentIds</em> that returns an array of ids from a list of object.</p><p>This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.</p><p>If the argument is not an array, the function is returning an empty array.</p><p><em>NOTE:</em> You must use the map function on the array.</p>|[1-get_list_student_ids.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/1-get_list_student_ids.js)|
|2. Filter |<p>Create a function <em>getStudentsByLocation</em> that returns an array of objects who are located in a specific city.</p><p>It should accept a list of students (from getListStudents) and a city (string) as parameters.</p><p><em>NOTE:</em>You must use the filter function on the array.</p>|[[2-get_students_by_loc.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/2-get_students_by_loc.js)|
|3. Reduce|<p> Create a function <em>getStudentIdsSum </em>that returns the sum of all the student ids.</p><p>It should accept a list of students (from getListStudents) as a parameter.</p><p><em>NOTE:</em>You must use the reduce function on the array.</p>|[3-get_ids_sum.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/3-get_ids_sum.js)|
|4. Combine|<p> Create a function <em>updateStudentGradeByCity</em> that returns an array of students for a specific city with their new grade</p> <p>It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.</p><p><em>NOTE:</em>You must use filter and map combined</p>|[4-update_grade_by_city.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/4-update_grade_by_city.js)|
|5. Type Arrays |<p> Create a function named <em>createInt8TypedArray</em> that returns a new ArrayBuffer with an Int8 value at a specific position. </p><p>It should accept three arguments: length (Number), position (Number), and value (Number).</p><p>If adding the value is not possible the error Position outside range should be thrown.</p>|[5-typed_arrays.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/5-typed_arrays.js)|
|6. Set Data Structure |<p>  Create a function named setFromArray that returns a Set from an array. </p> <p>It accepts an argument (Array, of any kind of element).</p>|[6-set.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/6-set.js)|
|7. More set data structure | <p>  CIt accepts two arguments: a set (Set) and an array (Array). </p> |[7-has_array_values.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/7-has_array_values.js)|
|8. Clean set |<p>  Create a function named <em>cleanSet</em> that returns a string of all the set values that start with a specific string (startString).</p><p>It accepts two arguments: a set (Set) and a startString (String).</p><p>When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by - .</p>|[8-clean_set.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/8-clean_set.js) |
|9. Map Data Structure | <p>   Create a function named <em>groceriesList</em> that returns a map of groceries with the following items (name, quantity): </p> <p>Make the code work</p>|[9-groceries_list.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/9-groceries_list.js) |
|10.More Map Data Structure | <p>   Create a function named <em>updateUniqueItems</em> that returns an updated map for all items with initial quantity at 1. </p> <p>It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.</p><p>For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error Cannot process should be thrown. </p>|[10-update_uniq_items.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/10-update_uniq_items.js) |
|11. Weak link data structure | <p>Export a const instance of WeakMap and name it weakMap.</p> <p>Export a new function named queryAPI. It should accept an endpoint argument like</p> <p>Track within the weakMap the number of times queryAPI is called for each endpoint.</p><p>When the number of queries is >= 5 throw an error with the message <em>Endpoint load is high.</em></p>|[100-weak.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x02-ES6_classes/100-weak.js) |

<h5>Author</h5>


[Ndubuka Oliveth](https://github.com/Oliveth96)
