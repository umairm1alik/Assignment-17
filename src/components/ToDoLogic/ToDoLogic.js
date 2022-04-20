import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import './ToDoLogic.css'
import { addList, updateList, deleteList, completedTaskList, restoredItemsList, deletionOfRestoredItem } from "../../store/Actions/ListAction";
export default function ToDoLogic() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const [task, setTask] = useState('');
    const storeTasks = useSelector((store) => store.ListReducer.tasks)
    const storeCompTasks = useSelector((store) => store.ListReducer.compTask)
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0);
    const dispatch=useDispatch();


    const taskAdditionHandler = () => {
       
            if(!task){
                alert("Enter Task First")
                return
            }
            let newTask = { task };
            dispatch(addList(newTask));
            setTask("");

    }
    
    const deleteItemHandler = (delIndex) => {
        
        dispatch(deleteList(delIndex));
    }
   
    const updateHandler = (taskToUpdate, index) => {
        console.log(taskToUpdate);
        setTask(taskToUpdate)
        setFlag(true)
        setUpdatedIndex(index)

    }
    const ctaUpateHandler = () => {
        
        let newTask = { 
                    task,
                    updatedIndex
                 };
        
                 dispatch(updateList(newTask))
                 setTask("")
                 setFlag(false)
        }

    const completedTaskHandler = (taskCompleted, indexOfCompTask) => {
        
        let compTaskActionData={
            taskCompleted,
            indexOfCompTask
        }
        dispatch(completedTaskList(compTaskActionData))
    }

    const restoreHandler = (item, indexOfRestoreItem) => {

        
        let restoredItemToRedu={
            item,
            indexOfRestoreItem
        }

        dispatch(restoredItemsList(restoredItemToRedu))

    }
    const deleteRestoreItemHandler=(indexOfRestoreItemForDel)=>{

        dispatch(deletionOfRestoredItem(indexOfRestoreItemForDel))
    }
    return (
        <div className="col-9 mt-3 toDoSection">
            <h4>My Day</h4>
            <span className="date">{`${month}/${day}/${year}`}</span>


            <div className='inputDiv'>
                <input type='text' placeholder='Add a task' value={task} className='inputFieldList' onChange={(e) => setTask(e.target.value)} /> <br />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <svg id='bellIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                </svg>
                {flag ?
                    <button className='addTaskBtn' onClick={ctaUpateHandler}>Update</button>
                    :
                    <button className='addTaskBtn' onClick={taskAdditionHandler}>Add</button>
                }


                {/* End of Input Div */}
            </div>
            <ul className='listStyle'>

                {storeTasks.map((tasksArray, index) => {
                    return (
                        <div>
                            <button className='checkBtn' onClick={() => completedTaskHandler(tasksArray.task, index)}><svg id='circle' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            </svg></button>
                            <li>{tasksArray.task}</li>
                            <li className='iconListItem'><button className='updateBtn' onClick={() => updateHandler(tasksArray.task, index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button>
                                <button className='delBtnList' onClick={() => deleteItemHandler(index)}><svg id='delIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg></button></li>
                            <hr className='w-100' />
                        </div>



                    );
                })}

            </ul>
            <h1>Completed Tasks</h1>
            <ol className='listStyle'>
                {storeCompTasks.map((item, index) => {

                    return <li className='lineThrough'>
                        <button className='compBtn' onClick={() => restoreHandler(item, index)} ><svg id='circle' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg></button>
                        {item}
                        <button className='delBtnList' id='restoreDelBtn' onClick={() => deleteRestoreItemHandler(index)}><svg id='delIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg></button></li>
                })}
                {/* <li>{compTask}</li> */}
            </ol>

        </div>
    );
}