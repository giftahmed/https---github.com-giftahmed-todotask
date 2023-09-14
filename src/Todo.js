import React, { useState } from "react";

const Todo = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, text);
    setEditing(false);
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item">
        {isEditing ? (
          <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="save" onClick={handleEdit}>Save</button>
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span className="text">{todo.text}</span>
          </div>
        )}
      </div>
      <div className="button-container">
        <button className="edit" onClick={() => setEditing(true)}>Edit</button>
        <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;