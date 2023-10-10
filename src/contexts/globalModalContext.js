import { useState, createContext } from "react";

export const GlobalModalContext = createContext(null);

export default function GlobalModalProvider({ children }) {
  const value = useGlobalModalProvider();
  return <GlobalModalContext.Provider value={value}>{children}</GlobalModalContext.Provider>;
}

function useGlobalModalProvider() {
  const [showGlobalModal, setShowGlobalModal] = useState(false);
  const [globalModalContent, setGlobalModalContent] = useState(null);

  return {
    showGlobalModal,
    setShowGlobalModal,
    globalModalContent,
    setGlobalModalContent,
  };
}
