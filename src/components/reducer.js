export const initalState = {
    user: null,
    toUpload: false,
}

const reducer = (state , action) =>{
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "UPLOAD_CHECK":
            return{...state,toUpload: action.state}
    
        default:
            return state;
    }
}
export default reducer;