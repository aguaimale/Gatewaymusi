import { combineReducers } from 'redux';
import { SELECCIONAR_PLAN, COMPLETAR_INFORMACION, COMPLETAR_PAGO } from '../actions';

const initialState = {
    planes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECCIONAR_PLAN:
            return action.payload;
        case COMPLETAR_INFORMACION:
            return action.payload;
        case COMPLETAR_PAGO:
            return action.payload;
        default:
            return state;
    }
};

export default rootReducer