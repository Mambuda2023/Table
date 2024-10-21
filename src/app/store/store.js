import { configureStore } from "@reduxjs/toolkit";
import { tableApi } from "../services/table/table.services";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: { [tableApi.reducerPath]: tableApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware),
});

export default store;
setupListeners(store.dispatch);
