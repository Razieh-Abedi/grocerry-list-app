import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

function List({ items, removeItem, editItem }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id}>
            <div>
              <p>{title}</p>
            </div>
            <div>
              <FaEdit onClick={() => editItem(id)} />
              <FaTrash onClick={() => removeItem(id)} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
