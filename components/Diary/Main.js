import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "../Diary/DiaryForm";
import { addItem, deleteItem } from "../Diary/redux/action";
import DiaryItem from "../Diary/DiaryItem";
import { Modal } from "react-bootstrap";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      diaryItems: [],
      hoveredItemId: null,
    };
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      diaryItems: [...prevState.diaryItems, item],
    }));
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      diaryItems: prevState.diaryItems.filter((item) => item.id !== id),
    }));
  };

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
              <h1>No Items</h1>
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
