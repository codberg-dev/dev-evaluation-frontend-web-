import React, { useEffect, useState } from 'react'
import { useMessage } from '../hook/hooks'

function AddTodo({ setCurrentId }) {

    const [userInput, setUserInput] = useState({
        title: "", content: "", id: ""
    })

    const { toDos, setMode, addToDo } = useMessage()

    return (

    <div className='add-todo sub-container-inner'>
        <div className='container-head'>
            <h3>할추</h3>
            <button className='close-btn' onClick={()=> setMode("")}>X</button>
        </div>

        <input type='text' placeholder='할일' value={userInput.title} className='title'
            onChange={(e) => setUserInput({
                title: e.target.value, content: userInput.content 
        })}/>
        <input type='text' placeholder='메모' value={userInput.content} className='content'
            onChange={(e) => setUserInput({
                title: userInput.title, content: e.target.value
        })}/>
        <button onClick={() => {
            addToDo({...userInput, id: "schedule-" + toDos.length});
            setUserInput({title: "", content: "", id: ""});
            setCurrentId("schedule-" + toDos.length)
            
        }}>할일 추가</button>
    </div>
    )
}

export default AddTodo