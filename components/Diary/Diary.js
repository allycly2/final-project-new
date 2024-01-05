import React from "react";
import { store, persistor } from "../Diary/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "../Diary/Main";
import "./Diary.css";
import Sidebar from "../NavBar/Sidebar";

function Diary() {
  return (
    <div className="diary-container">
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="diary-right">
        <div className="diary-head">
          <div className="diary-text">
            <h1 className="diary-header">Dear Diary</h1>
            <h4 className="diary-content">
              Create your own diary to capture the magic of your adventures and
              preserve cherished memories.
            </h4>
          </div>
          <div className="diary-img">
            <img
              className="diary-img1"
              src="https://usagif.com/wp-content/uploads/gifs/book-95.gif"
            ></img>
          </div>
        </div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Main />
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default Diary;
