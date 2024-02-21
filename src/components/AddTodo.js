import React, { useState } from 'react'
import TodoItem from './TodoItem';
import useMessage from './useMessage';
import Modal from './Modal';
import Loading from './Loading';

function AddTodo() {

    // 모달 
    const [isOpen,setIsOpen] = useState(false);
    const [inputValue,setInputValue] = useState('');
    const [loading,setLoading] = useState(false);

    const { todos, addTodo, deleteTodo, editTodo } = useMessage();

    // 1.추가 버튼 클릭
    const handleAdd = () =>{
        // 2.모달창 출력
        setIsOpen(true);
    }

    // 3.input에 값 입력
    const handleChange  = (e) =>{
        setInputValue(e.target.value);
    }

    // 4.취소버튼 클릭
    const cancelAdd = () =>{
        setIsOpen(false);
        setInputValue('');
    }

    // 5.추가버튼 클릭
    const todoAdd = () =>{
        setLoading(true);
        // 5-1 입력값이 없다면 ‘내용을 입력해주세요’ alert 창 출력 -> alert창 확인 클릭
        if(inputValue.length === 0){
            alert("내용을 입력해주세요.");
        }else{
            // 5-2 입력값이 있다면 ‘정상적으로 추가하였습니다’ alert창 출력 -> alert창 확인클릭 -> 모달창 닫김 -> 리스트 업데이트
            alert("정상적으로 추가하였습니다.");
            setIsOpen(false);
            setInputValue('');
            addTodo(inputValue);
        }
        setLoading(false);
    }

    return (
        <>
            {loading && <Loading />}
            <Modal isOpen={isOpen}>
                <input className='text-base font-bold my-6 mx-0 border w-full p-3' onChange={handleChange} type='text' value={inputValue} />
                <div className='flex gap-x-1'>
                    {/* 4.취소버튼 클릭 */}
                    <button onClick={cancelAdd} className='w-full p-[10px] rounded-md bg-red-600 border-none text-white cursor-pointer'>취소</button>
                    {/* 5.추가버튼 클릭  */}
                    <button className='w-full p-[10px] rounded-md bg-indigo-600 border-none text-white cursor-pointer' onClick={todoAdd}>추가</button>
                </div>
            </Modal>
            <div className='flex justify-end'>
                {/* 1.추가 버튼 클릭 */}
                <button onClick={handleAdd} className='border py-3 px-7 bg-indigo-600 text-white rounded-lg'>추가</button>
            </div>
            <TodoItem todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </>
    )
}

export default AddTodo