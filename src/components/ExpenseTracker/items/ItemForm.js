import React, { useState } from "react";

import "./ItemForm.css";

// A form for entering the transactions
const ItemForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const [isIncome, setIsIncome] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() !== "" &&
      enteredAmount.trim() !== "" &&
      enteredDate.trim() !== "" &&
      isIncome !== ""
    ) {
      const items = {
        id: Math.random().toString(),
        date: enteredDate,
        title: enteredTitle,
        amount: +enteredAmount,

        income: isIncome,
      };
      setEnteredDate("");
      setEnteredTitle("");
      setEnteredAmount("");

      setIsIncome("");

      props.onAddItem(items);
    }
  };

  return (
    <div>
      <form className="expense-form" onSubmit={submitHandler}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="text"
          placeholder="Enter date..."
          value={enteredDate}
          onChange={dateHandler}
        ></input>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title..."
          value={enteredTitle}
          onChange={titleHandler}
        ></input>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount..."
          value={enteredAmount}
          onChange={amountHandler}
        ></input>

        <div className={["radio-buttons"]}>
          <div>
            <input
              id="income"
              type="radio"
              name="item-type"
              checked={isIncome === true}
              onChange={() => setIsIncome(true)}
            ></input>
            <label htmlFor="income">Income</label>
          </div>
          <div>
            <input
              id="expense"
              type="radio"
              name="item-type"
              checked={isIncome === false}
              onChange={() => setIsIncome(false)}
            ></input>
            <label htmlFor="expense">Expense</label>
          </div>
        </div>
        <button className="expense-btn">Add transaction</button>
      </form>
    </div>
  );
};

export default ItemForm;
