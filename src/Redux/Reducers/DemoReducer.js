import { GET_ALL_DEMOS, CREATE_DEMO } from "../Constants";

const initialState = [
    {
        id : -1,
        name : "demo",
        age : -1
    },
    {
        id : -2,
        name : "femo",
        age : -2
    },
    {
        id : -3,
        name : "semo",
        age : -3
    }
]

export const demoReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DEMOS :
            return action.data
        case CREATE_DEMO :
            return state
        default :
            return state
    }
}