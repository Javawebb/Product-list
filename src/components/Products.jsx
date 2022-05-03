import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Products = () => {
    const { todos } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                <li>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <p></p>
                    <span className='d-flex'>
                        <button id="all_done" class="btn btn-outline btn-success mr-2" onClick={() => dispatch(toggleTodo(todo.id))}><BsCheck2 /></button>
                        <button class='btn btn-outline btn-error' onClick={() => dispatch(deleteTodo(todo.id))}><GoTrashcan /></button>
                    </span>
                </li>
            </ul>
        </div>
    )
}
