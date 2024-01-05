import React, { useState } from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  const deleteModeHandler = () => {
    setDeleteMode(!deleteMode);
  };

  const toggleDateHandler = () => {
    setShowDate(!showDate);
  };

  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <li onClick={deleteModeHandler}>
      <div className={`${props.income ? classes.income : classes.expense}`}>
        {deleteMode && (
          <button className={classes.delete} onClick={deleteHandler}>
            x
          </button>
        )}
        {showDate && <div className={classes.date}>{props.date}</div>}
        <div className={classes.title}>{props.title}</div>
        <div className={classes.amount}>
          {`${props.income ? "+" : "-"}${props.amount
            .toFixed(2)
            .toString()
            .replace(search_value, ",")}`}
        </div>
      </div>
    </li>
  );
};

export default Item;
