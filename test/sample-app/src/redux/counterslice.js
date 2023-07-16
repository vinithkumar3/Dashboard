import { createSlice } from "@reduxjs/toolkit";

   export const counterSlice = createSlice({
    name : "counterReducer",
    initialState :{
       valueCounter : 0,
       studentList : [],
       studentName : ""
    },
    reducers :{
 
      increase : (state) => {
         state.valueCounter = state.valueCounter + 1
      },
 
      decrease : (state) => {
       state.valueCounter = state.valueCounter - 1
      },
 
      updateStudent : (state) =>{
         state.studentName = "Ram"
      }
    }
 })
 
 export const { increase, decrease , updateStudent } = counterSlice.actions 
 export default counterSlice.reducer ;
 
 