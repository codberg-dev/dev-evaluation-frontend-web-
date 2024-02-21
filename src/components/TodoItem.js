import React, { useEffect, useState } from 'react'
import { useMessage } from '../hook/hooks'

function TodoItem({ id }) {

    const { toDos, setMode, delToDo, modToDo } = useMessage()

    const [currentToDo, setCurrentToDo] = useState({
        title: "", content: "" // id는 init으로 추가됨
    })

    const [isModifying, setIsModifying] = useState(false)

    const init = () => toDos.filter((todo) => {
        if (todo.id === id) setCurrentToDo(todo)
    })

    useEffect(() => {
        init(); setIsModifying(false);
    }, [id])

    return (
        <div className='schedule-manager sub-container-inner'>

            <div className='container-head'>
                <h3>Detail</h3>
                <button className='close-btn' onClick={()=> setMode("")}>X</button>
            </div>
            
            <p>할 일</p>
            <input type='text' value={currentToDo.title}
                className='title' disabled={!isModifying}
                style={{backgroundColor: isModifying ? "#fff" : "#eee"}}
                onChange={(e) => {setCurrentToDo({
                    title: e.target.value, content: currentToDo.content, id: currentToDo.id
            })}
            }/>
            <p>메모</p>
            <input type='text' value={currentToDo.content}
                className='content' disabled={!isModifying}
                style={{backgroundColor: isModifying ? "#fff" : "#eee"}}
                onChange={(e) => setCurrentToDo({
                    title: currentToDo.title, content: e.target.value, id: currentToDo.id
            })}/>
            <div className='btn-zone'>

                {
                    isModifying ?

                    <>
                        <button onClick={() => {
                            setIsModifying(!isModifying); // is수정중 상태 전환
                            init(); // 원래 값으로 되돌아 가기
                        }}>수정 취소</button>
                        <button onClick={() => {
                            
                            if (currentToDo.title !== "") {
                                modToDo(currentToDo);
                                setIsModifying(!isModifying);
                            } else {
                                alert("할 일을 입력하세요.")
                            }
                            
                        }}>수정 완료</button>
                    </>

                    :

                    <>
                        <button style={{backgroundColor: '#f5bdbd'}} onClick={() => {
                            const confirm = window.confirm("삭제하시겠어요?")
                            if (confirm) {
                                delToDo(currentToDo.id) // 삭제
                                setCurrentToDo({title: "", content: "", id: ""}) // 초기화
                                setMode("") // 컨테이너 내리기
                            }
                        }}>삭제</button>
                        <button onClick={() => {
                            setIsModifying(!isModifying)
                        }}>수정</button>
                    </>

                }

            </div>

            

        </div>
    )
}

export default TodoItem