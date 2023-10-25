import { filterReducer } from "./filterSlice";
import { contactReducer } from "./contactSlice";

export const rootReducer = {
    contactsHandler: contactReducer,
    filterHandler: filterReducer,
}
