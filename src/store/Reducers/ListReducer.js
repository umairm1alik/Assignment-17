import { ADD_LIST, UPDATE_LIST, DELETE_LIST, COMPLETED_LIST, RESTORED_LIST, RESTORED_DELETION } from "../Actions/ListAction";

const initialState={
    tasks:[""],
    compTask:[""]
}

export default function ListReducer(state=initialState, action){


    switch(action.type){
        case ADD_LIST:{
            let comingTask=[...state.tasks, action.payload]
            return{
                ...state,
                tasks: comingTask
            }
        }

        case UPDATE_LIST:{

            let updatedTask=state.tasks.map((task, index)=>{
                if(index === action.payload.updatedIndex){
                    return action.payload
                }else{
                    return task
                }
                
            })
            return{
                ...state,
                tasks: updatedTask
            }
        }

        case DELETE_LIST:{
            let afterDeletion=state.tasks.filter((task, index)=> index !== action.payload)
            return{
                ...state,
                tasks: afterDeletion
            }
        }

        case COMPLETED_LIST:{
            let newTaskCompleted = [...state.compTask, action.payload.taskCompleted]
            
            let afterRemovalOfComTask=state.tasks.filter((task, index)=> index !== action.payload.indexOfCompTask)
            return{
                ...state,
                compTask: newTaskCompleted,
                tasks: afterRemovalOfComTask
            }
        }
        case RESTORED_LIST:{
            let restore=[...state.tasks, action.payload.item]
            let removalOfRestoreItem=state.compTask.filter((task, index)=> index != action.payload.indexOfRestoreItem)
            return{
                ...state,
                tasks: restore,
                compTask: removalOfRestoreItem
            }
        }
        case RESTORED_DELETION:{
            let deletionFromCompList=state.compTask.filter((task, index)=> index != action.payload)
            return{
                ...state,
                compTask: deletionFromCompList
            }
        }
        default: return state

    }
}