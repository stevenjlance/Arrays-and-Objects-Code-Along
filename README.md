# Arrays and Objects

Up to this point we have used variables to store information. For example, if I wanted to store my favorite foods I would need to make individual variables for each of the items.
```javascript
var favFood1 = "Pizza";
var favFood2 = "Ice Cream";
var favFood3 = "Tacos";
```

In JavaScript, an array (the general term is list) is a special variable, which can hold more than one value at a time. For example, I could make an array of my favorite foods and store them in a single variable. 
```javascript
var favFood = ["Pizza", "Ice Cream", "Tacos"];
```

## CRUD (Create, Read, Update, Delete) Array Operations

As with everything we have learned in this class, [you should utilize documentation when working with arrays](https://www.w3schools.com/jsref/jsref_indexof_array.asp). When working with arrays, you should have knowledge of CRUD (Create, Read, Update, and Delete) operations for arrays. 

To **create** a list, we simply need to use `[]` and seperate each value with a comma.
```javascript
// Create a list
var favFood = ["Pizza", "Ice Cream", "Tacos"];
```

To **read** a list (or access a specific value), we use the index of the item. NOTE: In computer science we start by counting from 0, so the first item in a list has an index of 0, the second an index of 1, etc.
```javascript
// Read a list
console.log(favFood[2]);
// Prints out a value of Tacos as tacos has an index of 2.
```

To **update** a value in an array, we use a very similar method to how we updated a variable except we now also include the index that we want to update the value for. Lets say I wanted to change Ice Cream to a new value. We can use the index of 1 to update this value
```javascript
// Update a list
favFood[1] = "Chicken",
console.log(favFood)
// favFood is now equal to ["Pizza", "Chicken", "Tacos"]
```

Let's say we just wanted to add an item to an array. We can use `.push()` to [push more items to a list](https://www.w3schools.com/jsref/jsref_push.asp). This will add the value to the END of the list
```javascript
// Update a list
favFood.push("Chocolate");
console.log(favFood)
// favFood is now equal to ["Pizza", "Chicken", "Tacos", "Chocolate"]
```

Finally, we can **delete** a list item using the `.shift()` [method](https://www.w3schools.com/jsref/jsref_shift.asp) the remove the **first** item in a list and the `.pop()` [method](https://www.w3schools.com/jsref/jsref_pop.asp) to remove the **last** item in a list  

```javascript
// Delete the first item in a list
favFood.shift();
console.log(favFood)
// favFood is now equal to ["Chicken", "Tacos", "Chocolate"]

//Delete the first item in a list
favFood.pop();
console.log(favFood)
// favFood is now equal to ["Chicken", "Tacos"]
```

## `.length` Method

The final method that we will use with arrays is the `.length` command. The length property  returns the number of elements in an array. This is particularly useful when you have a long array and need to go through the entire array. This command will become particularly powerful when we attempt to process arrays.
```javascript
var favNumbers = [22, 8, 7, 982, 31, 538, 270];
console.log(favNumbers.length);
// Returns a value of 7 as there are 7 items in this list.
```

## CRUD (Create, Read, Update, Delete) Object Operations

Arrays are incredably powerful, but they do have some shortcomings. For example, lets say we had the following array

```javascript
let person = ["Steven", 33, "Brown", "Brown", 190, 6]
```

While you may be able to deduce what each of these mean, it would be much better if each of these had a label. We can use an object for this:
```javascript
let person = {
	name: "Steven", 
	age: 33, 
	hairColor: "Brown",
	eyeColor: "Brown", 
	weight: 190, 
	height: 6
}
```

Objects utilize **key value** pairs. For example, height would be a key and 6 would be the value. 

To **READ** the object, you simply need to use the key value using square braket notation or dot notation

```javascript
// Two ways to access values in an object
console.log(person["name"])
console.log(person.name)
```

To **UPDATE** the object, you can use the square braket or dot notation. If the item does not exist in the current object, then it is added.

```javascript
// Updating a current value
person.age = 34
// Adding a new value
person.favSinger = "Beyonce"
```

To **DELETE** a value from the object, you use the JavaScript delete operator to remove a value

```javascript
// Delete a value
delete person.favSinger;

```
