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
  FormTitle,
  Subtitle,
  Login,
  Question,
} from './RegisterForm.styled';
import { Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z'-\s]+$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('Name is required'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email address'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  const handleLoginClick = () => {
    navigate('/login');
  };

  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
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
          <FormTitle>Sign up</FormTitle>
          <Subtitle>Create a free account with your email.</Subtitle>
          <ContactBox>
            <Field
              type="text"
              name="name"
              autocomplete="off"
              as={Input}
              required
            />
            <ErrorMessage name="name" component={Div} />
            <Label>Name</Label>
          </ContactBox>
          <ContactBox>
            <Field
              type="email"
              name="email"
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

          <Button type="submit">Continue</Button>
        </Form>

        <Question>
          Already have an account?
          <Login onClick={handleLoginClick}> Sign in</Login>
        </Question>
      </FormBox>
    </Formik>
  );
};

export default RegisterForm;
