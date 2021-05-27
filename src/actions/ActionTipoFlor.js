import { types } from "../types/type";

export const ActionTipoFlor = flor => {
    return {
        type: types.agregar,
        payload: flor
    }
}

export const BorrarActionTipoFlor = id => {
    return {
        type: types.borrar,
        payload: id
    }
}