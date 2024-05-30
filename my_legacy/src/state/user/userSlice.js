import { createSlice } from "@reduxjs/toolkit";

// const [count, setCount] = useState(0) 랑 똑같음
const initialState = {
  username: "",
};

// 로직 : action -> dispatch(useDispatch)로 실행
const userSlice = createSlice({
  name: "user", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
    increment: (state) => {
      state.count += 1;
    },
    SetUsername: (state, action) => {
      state = action.payload;
    },
    /* {type: 'counter/increaseUserInputNum', payload: 10}
payload: 10
type: "counter/increaseUserInputNum"*/
  },
});

export const { SetUsername } = userSlice.actions;
export default userSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
