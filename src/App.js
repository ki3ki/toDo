import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value= {toDo} onChange={(e)=>setToDo(e.target.value)}type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{ id:Date.now(), text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {  toDos.map((todo)=>{
          return(
              <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                    setToDos(
                      toDos.map((obj) => {
                        if (obj.id === todo.id) {
                          return { ...obj, status: e.target.checked };
                        }
                        return obj;
                      })
                    );
                  }}
                value={todo.status}
                type="checkbox" name="" id="" />
                <p className={todo.done ? "completed" : ""}>
                  {todo.text}
                </p>

              </div>
              <div className="right">
                <i 
                  className="fas fa-times"
                  onClick={() => {
                    setToDos(toDos.filter(obj => obj.id !== todo.id));
                  }}
                ></i>
              </div>

            </div> 
        )
        })
        }
      </div>

      <div className="mark-done">
        <button onClick={() => {
          setToDos(
            toDos.map(todo => {
              if (todo.status) {
                return { ...todo, done: true };
              }
              return todo;
            })
          );
        }}>
          ✅ Mark as Completed
        </button>
      </div>

      
    </div>
  );
}

export default App;
