import { Box, Button } from "@chakra-ui/react";
import { Field, Form } from "react-final-form";

export default function FilterBlock({ onSubmit }) {
  return (
    <Box m={2}>
      <Form
        onSubmit={onSubmit}
        initialValues={{ showOnlyLiveCharacters: false }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>
              <Field name="showOnlyLiveCharacters" component="input" type="checkbox" /> Show only live characters
            </label>
            <Button ml={4} type="submit" colorScheme="blue">
              Filter Results
            </Button>
          </form>
        )}
      />
    </Box>
  );
}
