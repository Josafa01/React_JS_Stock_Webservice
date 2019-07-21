
export const LogOut = () => {
    return (dispatch) => {
        localStorage.removeItem('jwt')
        
        dispatch({
            type:'getStatus',
            payload:{
                isLogged:2
            }
        });

        dispatch({
            type:'getName',
            payload:{
                name:''
            }
        });

        dispatch({
            type:'getEmail',
            payload:{
                email:''
            }
        });

        dispatch({
            type:'getPass',
            payload:{
                pass:''
            }
        });
    };    
};

export const watchLogin = () => {
    return (dispatch) => {
        let jwt = localStorage.getItem('jwt')
        if(jwt != null && jwt != '') {
            dispatch({
                type:'getStatus',
                    payload:{
                    isLogged:1
                }
            });
            
        } else{
            dispatch({
                type:'getStatus',
                payload:{
                    isLogged:2
                }
            });
        }
    };
};

export const LoginUser = (email, pass) => {
    return  (dispatch)=>{
        let endpoint = 'http://192.XXX.X.XX/webservice_stock/user/login';
        let Data = JSON.stringify({
            email:email,
            pass:pass
        });

        fetch(endpoint, {
            method:'POST',
            body:Data
        })
        .then((r)=>r.json())
        .then((json)=>{
            if(json.error == '') {
                localStorage.setItem('jwt', json.jwt);
                
                dispatch({
                    type:'getStatus',
                    payload:{
                        isLogged:1
                    }
                });

            } else {
                alert(json.error);
            }
        })
        .catch((error)=>{
            alert("Falah na requisiçao: " + error);
        });
    };
};

export const InsertNewUser = (name, email, pass) => {
    return  (dispatch)=>{
        let endpoint = 'http://192.XXX.X.XX/webservice_stock/user/new_user';
        let Data = JSON.stringify({
            name:name,
            email:email,
            pass:pass
        });

        fetch(endpoint, {
            method:'POST',
            body:Data
        })
        .then((r)=>r.json())
        .then((json)=>{
            if(json.error == '') {
                localStorage.setItem('jwt', json.jwt);
                
                dispatch({
                    type:'getStatus',
                    payload:{
                        isLogged:1
                    }
                });

                dispatch({
                    type:'getName',
                    payload:{
                        name:''
                    }
                });

                dispatch({
                    type:'getEmail',
                    payload:{
                        email:''
                    }
                });

                dispatch({
                    type:'getPass',
                    payload:{
                        pass:''
                    }
                });

            } else {
                alert(json.error);
            }
        })
        .catch((error)=>{
            alert("Falah na requisiçao: " + error);
        });
    };
};

export const getName = (name) => {
    return {
        type:'getName',
        payload:{
            name:name
        }
    }
};

export const getEmail = (email) => {
    return {
        type:'getEmail',
        payload:{
            email:email
        }
    }
};

export const getPass = (pass) => {
    return {
        type:'getPass',
        payload:{
            pass:pass
        }
    }
};