import React from "react";

const DisplayTodo = ({ id, todo, onSelect, date }) => {
  return (
    <>
      <div className="flex ">
        <p> {todo}</p>

        <p> {date}</p>

        

        <button onClick={() => {  onSelect(id); }}> delete </button>
      </div>
    </>
  );
};

export default DisplayTodo;
