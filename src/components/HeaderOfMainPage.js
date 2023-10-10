import { EditIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, IconButton, Switch as ChakraSwitch } from "@chakra-ui/react";

export default function HeaderOfMainPage({
  userName,
  onEditClick,
  onSignOutClick,
  isGridLayout,
  onLayoutChange,
  onShowModalClick,
  onShowSpinnerFor2Seconds,
}) {
  return (
    <>
      <span>Hello, {userName}!</span>{" "}
      <IconButton aria-label="Change Your Name" icon={<EditIcon />} onClick={onEditClick} ml={2} />
      <Button ml={2} colorScheme="blue" onClick={onSignOutClick}>
        Sign out
      </Button>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="listGridSwitcher" m={0}>
          List
        </FormLabel>
        <ChakraSwitch id="listGridSwitcher" onChange={onLayoutChange} isChecked={isGridLayout} marginX={2} />
        <FormLabel htmlFor="listGridSwitcher" m={0}>
          Grid
        </FormLabel>
        <Button onClick={onShowModalClick} m={2} disabled={!onShowModalClick}>
          Show Modal
        </Button>
        <Button m={2} onClick={onShowSpinnerFor2Seconds}>
          Show Spinner for 2 seconds
        </Button>
      </FormControl>
    </>
  );
}
