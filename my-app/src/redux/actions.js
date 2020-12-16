import * as types from "../redux/actionTypes";

export const saveData = (id) => ({
    type: types.SAVE_DATA,
    id,
});