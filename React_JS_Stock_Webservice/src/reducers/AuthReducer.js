const initialState = {
    name:'',
    email:'',
    pass:'',
    isLogged:0
}

const AuthReducer = (state = initialState, action) => {
    
    if(action.type == 'getName') {
        return { ...state, name:action.payload.name}
    }
    
    if(action.type == 'getEmail') {
        return { ...state, email:action.payload.email}
    }

    if(action.type == 'getPass') {
        return { ...state, pass:action.payload.pass}
    }

    if(action.type == 'getStatus') {
        return { ...state, isLogged:action.payload.isLogged}
    }

    return state;
}

export default AuthReducer;