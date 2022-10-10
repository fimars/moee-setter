import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentsState } from './componentsState';

const initialState: ComponentsState & {
  selecteds: string[];
} = {
  widgetData: {
    m: 10,
    p: 10,
    s: 100,
    bcolor: 'pink',
    value: 'A Box....'
  },
  selecteds: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState: initialState,
  reducers: {
    handleUpdateDsl(
      state,
      action: PayloadAction<{
        attrPath: string;
        value: string | number;
      }>
    ) {
      state.widgetData[action.payload.attrPath] = action.payload.value;
    },
    getComponents(state) {
      return state;
    },
  },
});

export const { handleUpdateDsl, getComponents } = componentsSlice.actions;

export default componentsSlice.reducer;
