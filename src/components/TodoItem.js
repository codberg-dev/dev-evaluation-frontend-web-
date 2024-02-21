import React from 'react'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

// 1.투두리스트에 표시할 아이템(투두리스트 내용, 수정버튼, 삭제버튼)
function TodoItem({todos,deleteTodo,editTodo}) {
    return (
        <>
            <div className='border mt-5 rounded-lg px-5 py-10'>
                {
                    todos.length === 0 ?
                    <p className='text-center'>할일을 추가해주세요.</p>
                    :
                    todos && todos.map((item,index)=>{
                        return(
                            <div key={index} className='flex justify-between border items-center first:mt-0 mt-5 p-5 rounded-lg'>
                                <p>{item}</p>
                                <div>
                                    <EditTodo item={item} index={index} editTodo={editTodo} />
                                    <DeleteTodo index={index} deleteTodo={deleteTodo}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoItem