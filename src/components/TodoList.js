import React, { useEffect } from 'react'
import { useMessage } from '../hook/hooks'

function TodoList({ setCurrentId }) {

    const { toDos, setMode } = useMessage()

    return (
        <div className='your-todo-list'>

            {
                toDos.length === 0 ?
                
                <p className='add-please'>할 일을 추가해 주세요.</p>

                :

                <ul>
                    {toDos.map((todo, idx) =>
                        <li key={idx} className='todo' onClick={()=> {
                            setMode('manage');
                            setCurrentId(todo.id);
                        }}>
                            <span>{todo.title}</span>
                        </li>)}
                </ul>
            }

            <div className='create-schedule-btn'>
                <button onClick={()=>setMode('add')}>+</button>
            </div>

        </div>
    )
}

export default TodoList