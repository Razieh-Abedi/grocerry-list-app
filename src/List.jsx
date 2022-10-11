import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

function List({ items, removeItem, editItem }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            key={id}
            className="d-flex justify-content-around text-center"
          >
            <div>
              <p>{title}</p>
            </div>
            <div>
              <button className="btn btn-light">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button>
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
