import axios from "axios";
import {fetchStatuses} from "../reduxStore/actions";
// const BASE_URL = 'https://expressjs-server.vercel.app'
const BASE_URL = 'http://localhost:4000'

export const getStatuses = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/statuses`)
            .then(res => {
                dispatch(fetchStatuses(res.data));
            })
            .catch(err => console.log(err))
    }
}
