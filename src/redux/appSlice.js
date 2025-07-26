import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    count: 0,
    friends: [],
    surname: "Pampam",
  },

  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },

    increaseCountBySomething:(state, action)=>{
        state.count += action.payload
    },

    addToFriends:(state, action)=>{
        state.friends.push(action.payload)
    }
  },
});

export const { increaseCount, increaseCountBySomething, addToFriends } = appSlice.actions;
export default appSlice.reducer;
