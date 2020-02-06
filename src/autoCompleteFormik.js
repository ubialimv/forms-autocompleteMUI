/* eslint-disable no-use-before-define */
import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { connect } from "formik";

const ComboBox = ({ options, ...props }) => {
  const {
    id,
    name,
    formik: { handleBlur, setFieldValue, errors, touched }
  } = props;
  console.log({ props });
  return (
    <Autocomplete
      id={id}
      name={name}
      options={options}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      onBlur={handleBlur}
      onChange={(_, value) =>
        setFieldValue("title", !!value ? value.title : null)
      }
      renderInput={params => (
        <TextField
          {...params}
          label="Combo box"
          variant="outlined"
          fullWidth
          error={errors.title && touched.title}
          helperText={errors.title && touched.title && errors.title}
        />
      )}
    />
  );
};

export default connect(ComboBox);
