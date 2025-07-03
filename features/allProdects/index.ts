import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:any = []

const ProdectsSlice = createSlice({
  name: 'prodect',
  initialState,
  reducers: {
    prodectbyid: (state,action: PayloadAction<any>) => {
     state=action.payload
    }
  },
});

export const { prodectbyid } = ProdectsSlice.actions;
export default ProdectsSlice.reducer;
