import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function DiaryItem({ item, showModal, deleteItem }) {
  return (
    <div className="diary-row">
      <div className="diary-row-header">
        <span className="diary-date">{item.date}</span>
      </div>
      <div className="diary-row-content">
      <span onClick={() => showModal(item)}>{item.title}</span>
        <br></br>
        <span className="diary-date">{item.text}</span>
      </div>
      <div>
        <TiDeleteOutline
          onClick={() => deleteItem(item.id)}
          className="delete"
        />
      </div>
    </div>
  );
}
