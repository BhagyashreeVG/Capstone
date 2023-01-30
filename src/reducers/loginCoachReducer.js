const initialState = { name:"", password:"", dob:"", gender:"", mobile:0, speciality:"" }; 

export const loginCoachReducer = (state=initialState, action) => {
    const data = {
        name:action.data?.name,
        password:action.data?.password,
        dob:action.data?.dob,
        gender:action.data?.gender, 
        mobile:action.data?.mobile,
        speciality:action.data?.speciality
    }
    switch(action.type) {
        case 'LOGIN_COACH' :
            console.log("reducer"+ JSON.stringify({...data})) 
            return {
                ...data
            }
        default:
            return state;
    }
}