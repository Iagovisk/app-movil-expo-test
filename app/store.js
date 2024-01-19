import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/task/taskSlices";


export const store = configureStore({
    reducer : {
        tasks: tasksReducer,
    },
})
