import { useSelector, useDispatch } from 'react-redux';

import { setCurrentMode, addSchedule, delSchedule, modSchedule } from '../store/index'

export const useMessage = () => {

    const dispatch = useDispatch()
    
    const toDos = useSelector((state) => state.toDoManager.todo)

    const getMode = useSelector((state) => state.toDoManager.currentMode)
    const setMode = (type) => dispatch( setCurrentMode( type ))

    const addToDo = (todo) => {
        if (todo.title === "") alert("할 일을 입력하세요.")
        else {
            dispatch( addSchedule(todo) )
            alert("할 일이 추가되었습니다.")
            setMode("manage")
        }
    }
    const delToDo = (id) => {
        const newList = toDos.filter((t) => t.id !== id);

        dispatch( delSchedule(newList) );
        alert("삭제되었습니다.");
    }
    const modToDo = (todo) => {

        let index
        const newList = toDos.filter((t, idx) => { // findIndex가 훨 나음
            if (t.id === todo.id) index = idx
            return t
        })

        const condition = newList[index].title === todo.title &&
                          newList[index].content === todo.content

        if (!condition) {

            newList[index] = todo

            dispatch( modSchedule(newList) );
            alert("수정되었습니다.");
        }

    }

    return { toDos, getMode, setMode, addToDo, delToDo, modToDo }
    
}
  