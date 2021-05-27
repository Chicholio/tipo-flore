import { combineReducers } from "redux";
import TipoFlorReducer from "./TipoFlorReducer";

export default combineReducers({
    tipoFlor: TipoFlorReducer
})