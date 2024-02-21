import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import Loading from './Loading';

function EditTodo({item,index,editTodo}) {

    const [isOpen,setIsOpen] = useState(false);
    const [inputValue,setInputValue] = useState(item);
    const [loading,setLoading] = useState(false);

    // item 값이 변경될때마다 inputvalue 업데이트
    useEffect(() => {
        setInputValue(item);
    }, [item])

    // 1.수정버튼 클릭
    const handleEdit = () =>{
        // 2.모달창 출력 (모달창 구성요소 1.기존값이 담긴 input 2.취소버튼 3.완료버튼)
        setIsOpen(true);
    }

    // 3.input 입력값 수정
    const handleChange  = (e) =>{
        setInputValue(e.target.value);
    }

    // 4.취소버튼 클릭
    const cancelEdit = () =>{
        setIsOpen(false);
        setInputValue(item);
    }

    // 5.완료버튼 클릭 
    const todoEdit = () =>{
        setLoading(true);
        // 5-1 입력값이 없다면 ‘내용을 입력해주세요’ alert 창 출력 -> alert창 확인 클릭
        if(inputValue.length === 0){
            alert("내용을 입력해주세요.");
        }else{
            // 5-2 입력값이 있다면 ‘정상적으로 수정되었습니다’ alert창 출력 -> alert창 확인클릭 -> 모달창 닫김 -> 리스트 업데이트
            alert("정상적으로 수정되었습니다.");
            setIsOpen(false);
            editTodo(index, inputValue);
        }
        setLoading(false);
    }

    return (
        <>
            {loading && <Loading />}
            <Modal isOpen={isOpen}>
                <input className='text-base font-bold my-6 mx-0 border w-full p-3' onChange={handleChange} type='text' value={inputValue} />
                <div className='flex gap-x-1'>
                    {/* 4.취소버튼 클릭  */}
                    <button onClick={cancelEdit} className='w-full p-[10px] rounded-md bg-red-600 border-none text-white cursor-pointer'>취소</button>
                    {/* 5.완료버튼 클릭  */}
                    <button className='w-full p-[10px] rounded-md bg-indigo-600 border-none text-white cursor-pointer' onClick={todoEdit}>완료</button>
                </div>
            </Modal>      
            {/* 1.수정버튼 클릭 */}
            <button onClick={handleEdit} className='border py-2 px-3 mr-2 rounded-lg'>수정</button>
        </>
    )
}

export default EditTodo