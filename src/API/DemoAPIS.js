import axios from 'axios'

export const getAllDemosAPI = () => axios.get("http://localhost:8042/demo")

export const createDemoAPI = (data) => axios.post("http://localhost:8042/demo", data)