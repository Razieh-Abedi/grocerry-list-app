import "./App.css";
import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // deal with alert
      showAlert(true, "Please enter the value!", "danger");
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          } else return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "Value changed!", "success");
    } else {
      // show alert
      showAlert(true, "Item added to the list.", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "Your list is empty!", "danger");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "Item removed!", "danger");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  return (
    <div className="container text-center my-5">
      <section className="my-3">
        <h1>Grocerry Bud</h1>
        <form onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <input
            type="text"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </form>
      </section>

      {list.length > 0 && (
        <section className="my-3">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="btn btn-danger" onClick={clearList}>
            Clear List
          </button>
        </section>
      )}
    </div>
  );
}

export default App;
