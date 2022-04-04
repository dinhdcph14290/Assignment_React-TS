import { User } from "../types/User";
import root from "./root";

export const signup = (user:User) => {
    const url = `/signup`;
    return root.post(url, user)
}

export const signin = (user:User) => {
    const url = `/signin`;
    return root.post(url, user)
}