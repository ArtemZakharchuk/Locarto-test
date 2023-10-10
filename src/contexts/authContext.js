import { useState, createContext } from "react";

const fakeAuth = {
  signIn(cb) {
    setTimeout(cb, 100); // fake async
  },
  signOut(cb) {
    setTimeout(cb, 100);
  },
};

export const authContext = createContext(null);

export default function AuthProvider({ children }) {
  const auth = useAuthProvide();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuthProvide() {
  const [userName, setUserName] = useState(null);

  const signIn = (newUserName, cb) => {
    return fakeAuth.signIn(() => {
      setUserName(newUserName);
      cb();
    });
  };

  const signOut = (cb) => {
    return fakeAuth.signOut(() => {
      setUserName(null);
      cb();
    });
  };

  return {
    userName,
    signIn,
    signOut,
  };
}
