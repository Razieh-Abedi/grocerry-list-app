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
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  return (
    <div className="container text-center my-5">
      <section className="my-3">
        <h1>Grocerry Bud</h1>
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
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
          <List items={list} />
          <button className="btn btn-danger">Clear List</button>
        </section>
      )}
    </div>
  );
}

export default App;
