const expenseInputAmount = document.getElementById("expense-input-amount");
const expenseInputType = document.getElementById("expense-input-type");
let totalAmount = 0;
const expensesContainer = document.querySelector(".list-of-expenses-container");
const addExpenseButton = document.getElementById("add-expense-button");
const totalAmountLabel = document.getElementById("totalAmount"); // Add reference to total amount label

function createExpenseCard(type, amount) {
  // Create the card container
  const card = document.createElement("div");
  card.classList.add("expense-card");

  // Create the type element
  const typeElement = document.createElement("p");
  typeElement.classList.add("expense-type");
  typeElement.textContent = `${type}`;
  card.appendChild(typeElement);

  // Create the amount element
  const amountElement = document.createElement("p");
  amountElement.classList.add("expense-amount");
  amountElement.textContent = `$${amount.toFixed(2)}`;
  card.appendChild(amountElement);

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
   deleteButton.textContent = "Delete";
  card.appendChild(deleteButton);

  // Add delete functionality
  deleteButton.addEventListener("click", function () {
    expensesContainer.removeChild(card); // Remove the card from the container
    totalAmount -= amount; // Update the total amount when an item is deleted
    updateTotalAmount(); // Call the function to update the total
  });

  // Append the card to the container
  expensesContainer.appendChild(card);
}

function addExpenseComponent() {
  // Get input values
  const type = expenseInputType.value.trim();
  const amount = parseFloat(expenseInputAmount.value);

  // Validate inputs
  if (!type || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense type and amount.");
    return;
  }

  // Update the total amount
  totalAmount += amount;

  // Update the total amount displayed
  totalAmountLabel.textContent = `$${totalAmount.toFixed(2)}`; // Display the total amount

  // Create the new expense card
  createExpenseCard(type, amount);
  updateTotalAmount(); // Update total after adding an expense
  // Clear input fields
  expenseInputType.value = "";
  expenseInputAmount.value = "";
}

function updateTotalAmount() {
  const totalAmountLabel = document.getElementById("totalAmount");
  totalAmountLabel.textContent = `$${totalAmount}`;
}

// Attach event listener to the button
addExpenseButton.addEventListener("click", addExpenseComponent);
