"use strict";

/* 
JAVASCRIPT ADDRESS BOOK LAB PART 2 - DOM

Task: Create a new project that implements a front-end for your Address Book.
What does the application do?

1. Displays all the contacts.
2. Allow the user to add contacts by filling out a form.
3. Allow users to remove a contact by clicking a button.

Build Specifications:

1. You can use code from part 1 as needed.
2. Remove the while loop.
3. Add a display method to the AddressBook. This method must update the DOM to
display all the contacts from the AddressBook.
4. Call display when the page first loads to show the contacts.
5. Create a delete button next to each contact, clicking this button will call the deleteAt
method on the AddressBook and then call display to update the DOM.
6. Create a form on the page. When the form is submitted, call the add method on the
AddressBook and then call display to update the DOM.
*/

const awesomePeople = [];

function handleSubmit(event) {
  event.preventDefault();
  awesomePeople.push({
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    relation: event.target[3].value
  });
  displayPeople();
}

function displayPeople() {
  document.querySelector(".info_container").innerHTML = "";
  awesomePeople.forEach((person, index) => {
    const div = document.createElement("div");
    div.classList.add("contact_card");
    div.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Email: ${person.email}</p>
    <p>Phone: ${person.phone}</p>
    <p>Relation: ${person.relation}</p>
    <button index=${index} class="delete_btn"><i class="fas fa-trash"></i></button>
    `;
    document.querySelector(".info_container").append(div);
  });
}

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleDelete(event) {
  awesomePeople.splice(Number(event.target.attributes[0].value), 1);
  displayPeople();
}

document
  .querySelector(".info_container")
  .addEventListener("click", handleDelete);
