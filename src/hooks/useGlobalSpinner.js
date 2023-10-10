import { useContext } from "react";
import { GlobalSpinnerContext } from "../contexts/globalSpinnerContext";

export default function useGlobalSpinner() {
  const { showGlobalSpinner, setShowGlobalSpinner } = useContext(GlobalSpinnerContext);

  return {
    showGlobalSpinner,
    setShowGlobalSpinner,
  };
}
