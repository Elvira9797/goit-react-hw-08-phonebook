import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import {
  Label,
  Button,
  Input,
  Div,
  FormBox,
  ContactBox,
  InputEmail,
  Login,
  FormTitle,
  Subtitle,
  Question,
} from './LoginForm.styled';
import { Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  const handleLoginClick = () => {
    navigate('/register');
  };

  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
    setIsEmailFocused(false);
    setIsEmailFilled(false);
  };

  const handleFocus = () => {
    setIsEmailFocused(true);
  };

  const handleBlur = event => {
    setIsEmailFocused(false);
    if (event.target.value.trim() !== '') {
      setIsEmailFilled(true);
    } else {
      setIsEmailFilled(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormBox>
        <Form>
          <FormTitle>Sign in</FormTitle>
          <Subtitle>Nice to see you again.</Subtitle>
          <ContactBox>
            <Field
              type="email"
              name="email"
              autoComplete="new-email"
              as={InputEmail}
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <ErrorMessage name="email" component={Div} />
            <Label filled={isEmailFilled} focused={isEmailFocused}>
              Email
            </Label>
          </ContactBox>
          <ContactBox>
            <Field
              type="password"
              name="password"
              autoComplete="new-password"
              as={Input}
              required
            />
            <ErrorMessage name="password" component={Div} />
            <Label>Password</Label>
          </ContactBox>

          <Button type="submit">Login</Button>
        </Form>
        <Question>
          Don't have an account?
          <Login onClick={handleLoginClick}> Sign up</Login>
        </Question>
      </FormBox>
    </Formik>
  );
};

export default LoginForm;
