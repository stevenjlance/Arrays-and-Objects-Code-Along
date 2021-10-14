// 0. Create as many variables with your favorite foods and log them to the console in less than 1 minute. The first one has been provided.
let favFood1 = "Pizza";




// CRUD (Create, Read, Update, Delete) Operations for Arrays
//1. CREATE a list of your favorite foods (also known as an array in Javascript)
let favFoods = ["Chicken", "Waffles", "Cookies", "Ice Cream"]


//2. READ: Access values in the array below using index values.
let names = ["Khadijah", "Khadiza", "Mamadou", "Melissa-Ray", "Abdulai", "Sage", "Horlyn", "Adriana", "Moussa", "Essence", "Xavier", "Christopher", "Oscar", "Chinaza", "Noemi", "Maya", "Mecca", "Anta", "Christopher", "Kiara", "Melissa", "Alhaji", "Melanie", "Jessica", "Mouhamed", "Alyeada", "Fathym", "Chelsea", "Tennille"];



//3. UPDATE: Change the 3rd student on the list to a different name.	
names[2] = "Better students"


//4. UPDATE: Using .push, add more students from the class to the list
names.push("Ashton")
names.push("Joi")


//5. DELETE: Remove a student from the list using .pop and .shift.
names.pop()
names.shift()


//6. Insert an item into the list of names
names.splice(4, 0, "Best student")

//7. Replace the student at index of 2 with the variable below.
let newStudent = "Chris";
names[2] = newStudent


//8. Print out the current length of your list of names.
console.log(names.length)





// CREATE: Here's a small object of favorite books, each keyed to a different person.
let favoriteBooks = {
  diana: "Crime and Punishment",
  sophie: "The Secret History",
  cory: "Fahrenheit 451",
  gabe: "The Hobbit",
  danny: "Lonesome Dove",
  dan: "Don Quixote",
  katie: "10:04",
  zara: "Rebecca",
  david: "The Sun Also Rises",
  alexandra: "Hyperbole and a Half",
  martin: "The House on Mango Street",
  jeff: "The Hitchhiker's Guide to the Galaxy"
}

// 9. READ: Print out Martin's favorite book to the console using key value and dot notation.
console.log(favoriteBooks.martin)

// 10. READ: Print out Alexandra's favorite book.
console.log(favoriteBooks.alexandra)




// 11. UPDATE: Before we get started, let's adjust a few things. First off, Jeff just read a new book called "The Martian" and loved it. With just one line of code, change Jeff's favorite book to "The Martian"
favoriteBooks['jeff'] = "The Martian"


// 12. READ: Print out Jeff's favorite book to confirm that the change was successful.
console.log(favoriteBooks.jeff)





// 13. UPDATE: We should also add Ronald to the list. His favorite book is "Lies my History Teacher Told Me."
//    Add that info to the dictionary as a new key-value pair.
favoriteBooks['roland'] = "Lies my History Teacher Told Me"



// 14. READ: Confirm that Ronald's book was added by printing it out.
console.log(favoriteBooks)



// 15. Now let's start iterating. For each person in the dictionary, print out a statement that says "___'s favorite book is ____" and fill in the blanks with that person's name and that person's favorite book.
console.log(`${favoriteBooks[0].term} 's favorite book is ${favoriteBooks.roland}`)
//etc. Students should think this is is painful and that there must be a mroe efficient way.
