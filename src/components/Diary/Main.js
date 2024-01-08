import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "../Diary/DiaryForm";
import { addItem, deleteItem } from "../Diary/redux/action";
import DiaryItem from "../Diary/DiaryItem";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export class Main extends Component {
  constructor() {
    super();
    const storedItems = localStorage.getItem("diaryItems");
    this.state = {
      diaryItems: storedItems ? JSON.parse(storedItems) : [],
      hoveredItemId: null,
    };
  }

  addItem = (item) => {
    const newItem = {
      id: uuidv4(),
      ...item,
    };

    this.setState(
      (prevState) => ({
        diaryItems: [...prevState.diaryItems, newItem],
      }),
      () => {
        localStorage.setItem(
          "diaryItems",
          JSON.stringify(this.state.diaryItems)
        );

        // Check if the data is successfully stored
        const storedItems = localStorage.getItem("diaryItems");
        if (storedItems) {
          const storedData = JSON.parse(storedItems);
          const isItemStored = storedData.some(
            (storedItem) => storedItem.id === newItem.id
          );
          if (isItemStored) {
            console.log("Data successfully stored!");
          } else {
            console.log("Failed to store data!");
          }
        } else {
          console.log("Failed to store data!");
        }
      }
    );
  };

  deleteItem = (id) => {
    this.setState(
      (prevState) => ({
        diaryItems: prevState.diaryItems.filter((item) => item.id !== id),
      }),
      () => {
        localStorage.setItem(
          "diaryItems",
          JSON.stringify(this.state.diaryItems)
        );
      }
    );
  };

  componentDidMount() {
    const storedItems = localStorage.getItem("diaryItems");
    if (storedItems) {
      this.setState({ diaryItems: JSON.parse(storedItems) });
    }
  }

  render() {
    const { diaryItems } = this.state;

    return (
      <div>
        <div className="grid-container">
          <div className="diary-app">
            <DiaryForm addItem={this.addItem} />
          </div>
          <div className="diary-app" style={{ paddingTop: 20 }}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                const isHovered = item.id === this.state.hoveredItemId;

                return (
                  <div key={item.id}>
                    {item.active ? (
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <p>{item.date}</p>
                      </div>
                    ) : (
                      <DiaryItem
                        deleteItem={this.deleteItem}
                        showModal={(item) => {
                          item.active = !item.active;
                          this.forceUpdate();
                        }}
                        onMouseEnter={() =>
                          this.setState({ hoveredItemId: item.id })
                        }
                        onMouseLeave={() =>
                          this.setState({ hoveredItemId: null })
                        }
                        key={item.id}
                        item={item}
                      />
                    )}
                  </div>
                );
              })
            ) : (
              <h3 className="diary-item-box">
                No record found. Try adding one!
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
