import { useContext } from "react";
import { GlobalModalContext } from "../contexts/globalModalContext";

export default function useGlobalModal() {
  const { showGlobalModal, setShowGlobalModal, globalModalContent, setGlobalModalContent } =
    useContext(GlobalModalContext);

  return {
    showGlobalModal,
    setShowGlobalModal,
    globalModalContent,
    setGlobalModalContent,
  };
}
