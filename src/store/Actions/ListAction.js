

export const ADD_LIST="ADD_LIST";
export const UPDATE_LIST="UPDATE_LIST";
export const DELETE_LIST="DELETE_LIST"
export const COMPLETED_LIST="COMPLETED_LIST"
export const RESTORED_LIST="RESTORED_LIST"
export const RESTORED_DELETION="RESTORED_DELETION"

export function addList(data){
    return{
        type: ADD_LIST,
        payload: data
    }
}

export function updateList(data){
    return{
        type: UPDATE_LIST,
        payload: data
    }
}

export function deleteList(delIndex){
    return{
        type: DELETE_LIST,
        payload: delIndex
    }
}
export function completedTaskList(data){
    return{
        type: COMPLETED_LIST,
        payload: data
    }
}

export function restoredItemsList(data){
    return{

        type:RESTORED_LIST,
        payload: data
    }
}

export function deletionOfRestoredItem(id){
    return{

        type:RESTORED_DELETION,
        payload: id
    }
}