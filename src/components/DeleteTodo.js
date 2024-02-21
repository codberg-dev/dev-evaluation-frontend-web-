import React, { useState } from 'react'
import Modal from './Modal';
import Loading from './Loading';

function DeleteTodo({deleteTodo,index}) {

    const [isOpen,setIsOpen] = useState(false);
    const [loading,setLoading] = useState(false);

    // 1.삭제버튼 클릭
    const handleDelete = () =>{
        // 2.모달창 출력(모달창 구성요소 1.’삭제하시겠습니까?’멘트 2.아니오 버튼 3.네 버튼)
        setIsOpen(true);
    }

    // 5-1 ‘정상적으로 삭제되었습니다’ alert창 출력 -> alert창 확인클릭 -> 모달창 닫김 -> 리스트 업데이트
    const todoDelete = () => {
        setLoading(true);
        alert("정상적으로 삭제되었습니다.");
        setIsOpen(false);
        deleteTodo(index);
        setLoading(false);
    }

    return (
        <>
            {loading && <Loading />}
            <Modal isOpen={isOpen}>
                <div className='flex justify-center'>
                    <img className='text-center' src='./../img/free-icon-delete-1214428.png' alt='delete-icon' />
                </div>
                <p className='py-5 text-xl'>삭제하시겠습니까?</p>
                <div className='flex gap-x-1'>
                    {/* 4.아니오 버튼 클릭  */}
                    <button onClick={()=>{setIsOpen(false)}} className='w-full p-[10px] rounded-md bg-red-600 border-none text-white cursor-pointer'>아니오</button>
                    {/* 5.네 버튼 클릭 */}
                    <button className='w-full p-[10px] rounded-md bg-indigo-600 border-none text-white cursor-pointer' onClick={todoDelete}>네</button>
                </div>
            </Modal>
            {/* 1.삭제버튼 클릭 */}
            <button onClick={handleDelete} className='border py-2 px-3 rounded-lg'>삭제</button>
        </>
    )
}

export default DeleteTodo 