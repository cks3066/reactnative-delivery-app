import {createSlice} from '@reduxjs/toolkit';

// action: state 를 바꾸는 행위/동작
// dispatch: 그 액션을 실제로 바꾸는 함수
// reducer: 액션이 실제로 시행되면 state 를 바꾸는 로직

const initialState = {
  name: '',
  email: '',
  accessToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extraReducers: builder => {},
});

export default userSlice;
