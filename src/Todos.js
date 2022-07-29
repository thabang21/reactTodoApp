import React, { useState } from "react";
import DisplayTodo from "./DisplayTodo";

const Todos = () => {





  
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const [date, setDate] = useState(" ");




  const inputChangeHandler = (e) => {
    let newInput = e.target.value;
    setTodo(newInput);
  };

  let saveTodos=()=>{
    localStorage.setItem("reactTodo", JSON.stringify(data))
}


  const dateChangeHandler = (e) => {
    let newDate = e.target.value
    setDate(newDate);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newData = [...data, todo];
      setData(newData);
    setTodo("");

    saveTodos(date)
  };

  const deleteTodo = (id) => {
    let finalData = data.filter((curElement, index) => {
      return index !== id;
    });

    setData(finalData);
    saveTodos(finalData)
  };

  return (
    <>

    <div className="container">
      <form onSubmit={onSubmitHandler}>
        
        <input type="text" onChange={inputChangeHandler} value={todo} />
        <input type="date"  onChange={dateChangeHandler} value={date} />
        <input type="submit" />
      </form>

      <div className="flex">
      <h2>Todo</h2>
        <h2>Date</h2>
        <h2>Delete</h2>

      </div>


      

      <div className="display-todo">
        <ul>
          {data.map((todo, key) => {
            return (
              <DisplayTodo key={key} todo={todo} id={key} date={date}  onSelect={deleteTodo}/>
            );
          })}
        </ul>
      </div>
      </div>
    </>
  );
};

export default Todos;
