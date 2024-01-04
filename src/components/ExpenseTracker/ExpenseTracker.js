import { useState } from "react";

import Header from "../ExpenseTracker/expenses/Header";
import Expense from "../ExpenseTracker/expenses/Expense";
import Section from "../ExpenseTracker/UI/Section";
import ItemList from "../ExpenseTracker/items/ItemList";
import ItemForm from "../ExpenseTracker/items/ItemForm";
import NavBar from "../NavBar/NavBar";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [items, setItems] = useState([]);

  const onAddItemHandler = (enteredItems) => {
    setItems((prevItems) => {
      return [enteredItems, ...prevItems];
    });
  };

  const deleteItemHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    });
  };

  return (
    <div className="expense-container">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="event-content-container">
        <div className="expense-header">
          <div className="expense-caption">
            <h1 className="expense-h1">Expense Tracker</h1>
            <h4 className="expense-h4">
              Give a clear picture of your financial life.
            </h4>
          </div>
          <div className="expense-image">
            <img
              className="expense-img"
              src="https://usagif.com/wp-content/uploads/gifs/book-95.gif"
            ></img>
          </div>
        </div>
        <div className="expense-content">
          <div className="expense-left">
            <div className="expense-head">
              <Header items={items} />
            </div>
            <div className="expense-head2">
              <Expense items={items} />
            </div>
          </div>
          <div className="expense-right">
            <Section>History</Section>
            {items.length === 0 && <p>No transaction found. Try adding one!</p>}
            <ItemList onDeleteItem={deleteItemHandler} items={items} />
            <Section>Add new transaction</Section>
            <ItemForm onAddItem={onAddItemHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
