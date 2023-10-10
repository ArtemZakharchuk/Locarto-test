import { useHistory } from "react-router-dom";
import UserNameForm from "../components/UserNameForm";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { userName, signIn } = useAuth();
  const history = useHistory();

  const onSubmit = ({ newUserName }) => {
    signIn(newUserName, () => {
      history.replace("/main");
    });
  };

  return <UserNameForm onSubmit={onSubmit} formLabel="Your Name" formButtonLabel="Enter" userName={userName} />;
}
