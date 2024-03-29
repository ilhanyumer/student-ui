import {
    SET_UPLOAD_STATUS,
    UPLOAD_ERROR,
    DOWNLOAD_FILE,
    DOWNLOAD_ERROR,

} from '../actions/types';

const initialState = {
    fileProgress: 0,
    downloadLink: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_UPLOAD_STATUS:
            return {
                ...state,
                fileProgress: payload
            }
        case UPLOAD_ERROR:
            alert(payload.msg);
            break;
        case DOWNLOAD_FILE:
            console.log('download file');
            break;
        default:
            return state;
    }
}