import { createStore } from "redux";

import { rootReducer } from "@/stores/redux/root-reducer";

export const store = createStore(rootReducer);
