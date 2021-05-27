import { types } from "../types/type";

const initialState = {
    tipoFlor: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                tipoFlor: [...state.tipoFlor, action.payload]
            }
        case types.borrar:
            return {
                ...state,
                tipoFlor: state.tipoFlor.filter(flor => flor.id !== action.payload)
            }
        default:
            return state
    }
}