import {SAVE_DATA} from "./actionTypes";


const reducer = (state = {}, action, data) => {
    switch (action.type) {
        case SAVE_DATA:
            return {
                ...state,
                ...data
            };
    }
}