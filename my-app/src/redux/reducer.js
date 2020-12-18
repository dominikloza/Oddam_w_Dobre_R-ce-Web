import {SAVE_DATA} from "./actionTypes";

export const initialState = {};

export const reducer = (state = initialState, {type, data}) => {
    switch (type) {
        case SAVE_DATA:
            return {
                ...state,
                ...data
            };
    }
}