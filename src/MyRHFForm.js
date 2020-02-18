import React from "react";
import { Button } from "@material-ui/core";
import MyFormRHF from "./MyFormRHF";
import { useForm, FormContext } from "react-hook-form";

const MyRHFForm = () => {
  const methods = useForm({
    defaultValues: MyFormRHF.initialValues,
    validationSchema: MyFormRHF.validationSchema,
    mode: "onBlur"
  });
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <MyFormRHF />
        <Button variant="contained" color="primary" type="submit">
          SALVAR
        </Button>
      </form>
    </FormContext>
  );
};

export default MyRHFForm;
