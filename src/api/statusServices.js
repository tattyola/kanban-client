import axios from "axios";
import {fetchStatuses} from "../reduxStore/actions";

export const getStatuses = () => {
    return (dispatch) => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then(res => {
                dispatch(fetchStatuses(res.data));
            })
            .catch(err => console.log(err))
    }
}
