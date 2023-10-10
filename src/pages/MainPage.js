import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import FilterBlock from "../components/FilterBlock";
import GridLayout from "../components/GridLayout";
import HeaderOfMainPage from "../components/HeaderOfMainPage";
import ListLayout from "../components/ListLayout";

import useAuth from "../hooks/useAuth";
import { useCharacters } from "../hooks/useCharacters";
import useGlobalModal from "../hooks/useGlobalModal";
import useGlobalSpinner from "../hooks/useGlobalSpinner";

export default function Main() {
  const history = useHistory();
  const { userName, signOut } = useAuth();
  const redirectToAccountPage = () => history.push("/account");
  const signOutAndRedirectToLoginPage = () => {
    signOut(() => history.push("/login"));
  };

  const { setShowGlobalSpinner } = useGlobalSpinner();
  const { setShowGlobalModal, setGlobalModalContent } = useGlobalModal();

  const layoutContainerRef = useRef(null);
  const [isGrid, setIsGrid] = useState(true);
  const [showOnlyLiveCharacters, setShowOnlyLiveCharacters] = useState(false);

  const { items, page, fetchData } = useCharacters(setShowGlobalSpinner);

  useEffect(() => {
    const abortController = new AbortController();
    const isElementFilledOnAllAvailableHeight =
      layoutContainerRef.current.scrollHeight === layoutContainerRef.current.offsetHeight;
    if (page > 1 && isElementFilledOnAllAvailableHeight) {
      fetchData(abortController);
    }

    return () => {
      abortController.abort();
    };
  }, [page, fetchData]);

  useEffect(() => {
    const abortController = new AbortController();

    const handleScroll = async function () {
      const element = layoutContainerRef.current;
      const isElementScrolledToTheBottom =
        element && Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1;
      if (!isElementScrolledToTheBottom) {
        return;
      }

      await fetchData(abortController);
    };

    const element = layoutContainerRef.current;
    element?.addEventListener("scroll", handleScroll);

    return () => {
      abortController.abort();
      element?.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  const showSpinnerFor2Seconds = () => {
    setShowGlobalSpinner(true);
    setTimeout(() => {
      setShowGlobalSpinner(false);
    }, 2000);
  };

  const showFullInfo = (item) => {
    setGlobalModalContent(item);
    setShowGlobalModal(true);
  };

  const itemsToShow = useMemo(() => {
    return showOnlyLiveCharacters ? items.filter((item) => item.status === "Alive") : items;
  }, [showOnlyLiveCharacters, items]);

  return (
    <>
      <HeaderOfMainPage
        userName={userName}
        onEditClick={redirectToAccountPage}
        onSignOutClick={signOutAndRedirectToLoginPage}
        isGridLayout={isGrid}
        onLayoutChange={() => {
          layoutContainerRef.current.scrollTo(0, 0);
          setIsGrid((prev) => !prev);
        }}
        onShowModalClick={() => setShowGlobalModal(true)}
        onShowSpinnerFor2Seconds={showSpinnerFor2Seconds}
      />
      <FilterBlock onSubmit={({ showOnlyLiveCharacters }) => setShowOnlyLiveCharacters(showOnlyLiveCharacters)} />
      <Box w="100%" h="85vh" overflowY="auto" ref={layoutContainerRef} p={4} display="flex" justifyContent="center">
        {isGrid ? (
          <GridLayout items={itemsToShow} onItemClick={showFullInfo} />
        ) : (
          <ListLayout items={itemsToShow} onItemClick={showFullInfo} />
        )}
      </Box>
    </>
  );
}
