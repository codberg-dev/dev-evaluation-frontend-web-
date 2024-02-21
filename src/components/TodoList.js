import React from 'react'
import AddTodo from './AddTodo'

function TodoList() {
    return (
        <>
            <div className='w-full'>
                <div className='max-w-7xl mx-auto mt-10 px-5'>
                    <h1 className='text-3xl text-center font-bold'>TODO LIST</h1>
                    <AddTodo />
                </div>
            </div>
        </>
    )
}

export default TodoList