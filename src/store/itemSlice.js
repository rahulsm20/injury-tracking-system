import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[],
    item:null
}

const itemSlice = createSlice({
    name:"itemData",
    initialState,
    reducers:{
        setItems:(state,action)=>{
            state.items = action.payload
        },
        getItemById:(state,action)=>{
            state.item = state.items.find((item)=>item.id==action.payload)
        }
    }
})

export const {setItems,getItemById} = itemSlice.actions
export default itemSlice.reducer;

