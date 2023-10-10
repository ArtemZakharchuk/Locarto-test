import { useHistory } from "react-router-dom";
import UserNameForm from "../components/UserNameForm";
import useAuth from "../hooks/useAuth";

export default function AccountPage() {
  const { userName, signIn } = useAuth();
  const history = useHistory();

  const onSubmit = ({ newUserName }) => {
    signIn(newUserName, () => {
      history.replace("/main");
    });
  };

  return <UserNameForm userName={userName} onSubmit={onSubmit} formLabel="Change Your Name" formButtonLabel="ok" />;
}
