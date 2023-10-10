import { Redirect } from "react-router";
import useAuth from "../hooks/useAuth";

export default function EmptyRoute() {
  const { userName } = useAuth();

  return userName ? <Redirect to="/main" /> : <Redirect to="/login" />;
}
