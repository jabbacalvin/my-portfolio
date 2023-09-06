import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../assets/images/Check";
import { useTranslation } from "react-i18next";
import useClasses from "../useClasses";

const MessageBox = () => {
  const classes = useClasses(styles);
  const [sending, setSending] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
  const { t } = useTranslation();
  const SendEmail = (object) => {
    setSending(true);
    emailjs
      .send("service_cqs0mwe", "template_76va6oh", object, "MMMA-5J19WE_WHqMV")
      .then(
        (result) => {
          setSendEmailSuccess(true);
          setSending(false);
        },
        (error) => {
          setSending(false);
        }
      );
  };
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Email adress is not valid")
        .required("Email adress is required"),
      message: Yup.string().required("message is required"),
    }),
    onSubmit: (values) => {
      SendEmail(values);
      setSendEmailSuccess(true);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Container maxWidth="md">
      <Box
        overflow="hidden"
        style={{ position: "relative", minHeight: "600px" }}
      >
        <AnimatePresence>
          {!sendEmailSuccess && (
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                helperText={formik.touched.name && formik.errors.name}
                variant="filled"
                margin="normal"
                type="text"
                fullWidth
                id="user_name"
                label={t("contact_full_name")}
                name="user_name"
              />
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                helperText={formik.touched.email && formik.errors.email}
                variant="filled"
                type="email"
                margin="normal"
                fullWidth
                id="user_email"
                label={t("contact_email")}
                name="user_email"
              />
              <TextField
                error={Boolean(formik.touched.message && formik.errors.message)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.message}
                helperText={formik.touched.message && formik.errors.message}
                variant="filled"
                margin="normal"
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                multiline
                minRows={5}
              />
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={sending}
                >
                  {t("contact_btn")}
                </Button>
              </Box>
            </form>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {sendEmailSuccess && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box m={2}>
                <Check width="150" />
              </Box>
              <Typography
                component={motion.h4}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                variant="body2"
                align="center"
              >
                Thank you for reaching out! Your message has been sent
                successfully. I will get back to you at the earliest
                opportunity.
              </Typography>
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </Container>
  );
};

const styles = (theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submitBtn: {
    width: "200px",
  },
});

export default MessageBox;
