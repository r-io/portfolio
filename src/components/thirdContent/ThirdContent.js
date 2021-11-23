import './ThirdContent.css';

import { Close, Phone } from '@mui/icons-material';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import React from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#173a5e',
    },
    secondary: {
      main: '#0288d1',
    },
  },
});

export default function ThirdContent() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const actionSnackbar = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <article id="contact" className="third-content">
        <Typography variant="h4">
          <Phone fontSize="large" />
          Contact
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = 'Required';
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.message) {
              errors.message = 'Required';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            emailjs
              .send('service_p6vs91l', 'template_mbur9dv', values, 'user_UnLjDRc7DRf0KnPCV6iwb')
              .then(
                (result) => {
                  if (result.status === 200) {
                    setMessage('Email Sent');
                    setOpen(true);
                  } else {
                    setMessage(result.text);
                    setOpen(true);
                  }
                },
                (error) => {
                  console.log(error);
                }
              )
              .catch((err) => {
                console.error(err);
              });
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Container component="form" autoComplete="off" maxWidth="sm" onSubmit={handleSubmit}>
              <FormControl variant="standard">
                <TextField
                  id="outlined-required"
                  label="Name"
                  color="secondary"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name}
                />
                <FormHelperText className="error-message">{errors.name}</FormHelperText>
              </FormControl>
              <FormControl variant="standard">
                <TextField
                  id="outlined-required"
                  label="Email"
                  color="secondary"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email && touched.email}
                />
                <FormHelperText className="error-message">{errors.email}</FormHelperText>
              </FormControl>
              <FormControl variant="standard">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  color="secondary"
                  multiline
                  rows={4}
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  error={errors.message && touched.message}
                />
                <FormHelperText className="error-message">{errors.message}</FormHelperText>
              </FormControl>
              <Button type="submit" variant="contained" color="secondary" disabled={isSubmitting}>
                Submit
              </Button>
            </Container>
          )}
        </Formik>
        <footer>
          <Typography variant="p">
            Rio <b>&copy;2021</b>
          </Typography>
        </footer>
      </article>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={actionSnackbar}
      />
    </ThemeProvider>
  );
}
