import React, { useState } from "react";

export default function DiaryForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      date: date,
      text: text,
    };
    addItem(itemObject);
    setTitle("");
    setText("");
    setDate("");
  };

  return (
    <div className="diary-wrapper">
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
            className="diary-input"
          />
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="diary-date-input"
          />
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Content"
          rows="2"
          className="diary-textarea"
        ></textarea>
        <button type="submit" className="diary-button">
          Add to Diary
        </button>
      </form>
    </div>
  );
}
