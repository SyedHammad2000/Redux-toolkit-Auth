import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      console.log(action, state);
      const { name, email, password } = action.payload;
      if (!email || !password || !name) {
        state.error = "Please Fill all the Feilds";
        return state;
      }
      console.log(name, email, password);
      state.user = { name, email, password };

      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      localStorage.setItem(
        "authentication",
        JSON.stringify({ user: { email } })
      );
      // how to get
    },
    login: (state, action) => {
      console.log(action, state);
      const { name, email, password } = action.payload;
      console.log(email, password);
      if ((!email, !password)) {
        state.error = "Please Fill all the Feilds";
        return;
      }
      if (password !== state.user.password) {
        state.isAuthenticated = false;
        state.error = true;
      } else {
        console.log(state.user.password, password);
        state.user = { name, email, password };
        state.isAuthenticated = true;
        localStorage.setItem(
          "authentication",
          JSON.stringify({ user: { email } })
        );
        console.log(state);
      }
    },
    logout: (state, action) => {
      const { authentication } = action.payload;
      state.isAuthenticated = false;
      localStorage.removeItem(authentication);
      
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
