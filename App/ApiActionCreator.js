import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './../App/Actions/ApiAction';

const apiActionCreator = (url) => (dispatch) => {
    dispatch(fetchData());
    return new Promise(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(JSON.stringify(response.data.data));
                dispatch(fetchSuccess(response.data.data));
            })
            .catch((error) => {
                dispatch(fetchError(error));
                console.log(error);
            });
    });
};

export default apiActionCreator;
