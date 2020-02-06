import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useFormContext } from "react-hook-form";

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();
  console.log({ methods });

  return children({
    ...methods
  });
};

const autoCompleteRHF = ({ options, ...props }) => (
  <ConnectForm>
    {({ register, setValue, errors, triggerValidation }) => {
      React.useEffect(() => {
        register({ name: "title" });
      }, [register]);

      return (
        <Autocomplete
          options={options}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          onChange={(_, value) => {
            setValue("title", !!value ? value.title : null);
            triggerValidation("title");
          }}
          renderInput={params => (
            <TextField
              {...params}
              id="addrCountryCode"
              name="addrCountryCode"
              label="Combo box"
              variant="outlined"
              fullWidth
              error={!!errors.title}
              helperText={!!errors.title && errors.title.message}
            />
          )}
        />
      );
    }}
  </ConnectForm>
);

export default autoCompleteRHF;
