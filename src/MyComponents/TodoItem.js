import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
        <div class="fw-bold">{todo.title}</div>
            {todo.desc}
        </div>
        <span class="badge btn-danger rounded-pill">
        <button className="btn btn-sm " onClick={ ()=>{onDelete(todo)}}>Delete</button>
        </span>
        <hr/>
        </li>
        </>
    )
}
