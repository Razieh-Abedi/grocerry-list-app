import "./App.css";
import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else return [];
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
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
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="container text-center my-5 mainSection">
      <section className="my-3">
        <h1 className="mb-3">Grocerry Bud</h1>
        <form className="mb-3" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <input
            type="text"
            placeholder="e.g. eggs"
            className="me-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            {isEditing ? "Edit" : "Add to list"}
          </button>
        </form>
      </section>

      {list.length > 0 && (
        <section className="my-3">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="btn btn-danger mt-3" onClick={clearList}>
            Clear List
          </button>
        </section>
      )}
      <footer className="text-center">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-decoration-none text-black mb-0"
        >
          Developed with ??? by raziwebdeveloper.com
        </a>
      </footer>
    </div>
  );
}

export default App;
