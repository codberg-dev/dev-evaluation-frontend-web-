import React, { useEffect } from 'react'

function Modal({isOpen, children}) {

    useEffect(()=>{
        if (isOpen) {
            // 모달이 열릴 때 body에 스크롤 비활성화 스타일을 적용
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },[isOpen])

    // isOpen이 false라면 아무것도 렌더링하지 않음
    if (!isOpen) {
        return null;
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center'>
            <div className='lg:basis-1/3 md:basis-1/2 basis-3/4 bg-white px-5 py-10 rounded-lg text-center'>
                {children}
            </div>
        </div>
    )
}

export default Modal