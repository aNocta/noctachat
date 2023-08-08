import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/ChatTypes";

interface IUserState {
  users: IUser[];
}
const initialState: IUserState = {
  users: [
    {
      id: 0,
      name: "admin",
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*",
    },
    {
      id: 1,
      name: "User 1",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg",
    },
  ],
};
const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
