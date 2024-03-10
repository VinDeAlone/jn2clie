import {GET_ALL_DEMOS, CREATE_DEMO} from '../Constants'
import {getAllDemosAPI, createDemoAPI} from '../../API/DemoAPIS'

export const getAllDemoAction = () => async (dispatch) => {
    try {
        const {data} = await getAllDemosAPI()
        dispatch({
            type : GET_ALL_DEMOS,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createDemoAction = (data) => async (dispatch) => {
    try {
        const {result} = await createDemoAPI(data)
        dispatch({
            type : CREATE_DEMO
        })
    } catch (error) {
        console.log(error)
    }
}