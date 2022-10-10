import React from "react";

function List({ items }) {
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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
