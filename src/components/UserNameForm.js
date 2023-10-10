import { Form, Field } from "react-final-form";
import { Button, Input, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { requiredString } from "../utils/validators";

export default function UserNameForm({
  userName,
  onSubmit,
  formLabel,
  formButtonLabel,
  textPlaceholder = "Enter your name here",
}) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ newUserName: userName }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="newUserName" validate={requiredString}>
            {({ input, meta, errors }) => (
              <>
                <FormControl isInvalid={errors && meta.touched} isRequired display={"inline"}>
                  <FormLabel>{formLabel}</FormLabel>
                  <Input {...input} placeholder={textPlaceholder} width="15%" minWidth={200} top="2px" />
                  <FormErrorMessage>{errors}</FormErrorMessage>
                </FormControl>
              </>
            )}
          </Field>
          <Button ml={4} type="submit" colorScheme="blue">
            {formButtonLabel}
          </Button>
        </form>
      )}
    />
  );
}
