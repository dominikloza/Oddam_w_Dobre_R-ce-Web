import * as types from "../redux/actionTypes";

export const saveData = (data) => ({
    type: types.SAVE_DATA,
    data,
});