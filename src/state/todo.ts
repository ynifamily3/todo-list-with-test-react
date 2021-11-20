import { atom } from "recoil";
import { Tasks } from "../types/task";

const todoState = atom<Tasks>({
  key: "todoState",
  default: [],
});

export default todoState;
