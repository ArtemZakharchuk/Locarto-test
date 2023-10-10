import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export default function useAuth() {
  const { userName, signIn, signOut } = useContext(authContext);

  return {
    userName,
    signIn,
    signOut,
  };
}
