import _ from "lodash";
import {FETCH_POSTS} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload);
            return _.mapKeys(action.payload.data, 'id');
            break;
        default:
            return state;
    }
}
