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
            className="d-flex justify-content-around text-center container bg-light align-items-center"
          >
            <div>
              <p>{title}</p>
            </div>
            <div>
              <button className="border border-0 bg-white">
                <FaEdit
                  className="text-success me-2 listIcon"
                  onClick={() => editItem(id)}
                />
              </button>
              <button className="border border-0 bg-white">
                <FaTrash
                  className="text-danger listIcon"
                  onClick={() => removeItem(id)}
                />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
