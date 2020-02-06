import React from "react";
import { Box, Button } from "@material-ui/core";
import MyFormFormik from "./MyFormFormik";
import { Formik } from "formik";

const MyFormik = () => {
  return (
    <Box
      display="flex"
      margin={2}
      justifyContent="center"
      flexDirection="column"
    >
      <Formik
        initialValues={MyFormFormik.initialValues}
        enableReinitialize={true}
        onSubmit={values => {
          console.log({ values });
        }}
        validationSchema={MyFormFormik.validationSchema}
        validateOnBlur={true}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit}>
            <MyFormFormik />
            <Button variant="contained" color="primary" type="submit">
              SALVAR E CONTINUAR
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default MyFormik;
