# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Spec Tests

### Description: toDo(input)
*Test:* "create a new object that places our arguments as keys and properties"
*Code:* toDo("Feed the kittens", true);
*Expected output:* {description: 'Feed the Kittens', completed: true}

### Description: toDoList(input)
*Test:* "create a new object that contains a todo key with an object value and a current id number with a starting value of 0"
*Code:* toDoList();
*Expected output:* {toDos: {}, currentId: 0}

*Test:* "create a method that will add one to currentId and return currentId after"
*Code:* toDoList().changeId();
*Expected output:* 1

*Test:* "create a method that will add current id to the object as a key and value and add this object as a value in toDo's with the id as its key."
*Code:* toDoList().addToDo({description: 'Feed the Kittens', completed: true});
toDoList().toDos
*Expected output:* {1: {description: 'Feed the Kittens', completed: true}}

*Test:* "create a method that will delete the item in todos that matches the argument id."
*Code:* toDoList().deleteToDo()
*Expected output:* true

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_