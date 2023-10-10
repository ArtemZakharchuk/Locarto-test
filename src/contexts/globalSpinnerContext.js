import { useState, createContext } from "react";

export const GlobalSpinnerContext = createContext(null);

export default function GlobalSpinnerProvider({ children }) {
  const value = useGlobalSpinnerProvider();
  return <GlobalSpinnerContext.Provider value={value}>{children}</GlobalSpinnerContext.Provider>;
}

function useGlobalSpinnerProvider() {
  const [showGlobalSpinner, setShowGlobalSpinner] = useState(false);

  return {
    showGlobalSpinner,
    setShowGlobalSpinner,
  };
}
