import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap'; 
import { Formik } from 'formik';
import { object, string } from 'yup';
import axios from "axios";

import { setUser } from '../actions/user/actions';

const schema = object().shape({
  email: string().required('Email is required'),
  password: string().required('Password is required'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data, setErrors) => {
    axios({
      method: 'post',
      url: '/login',
      data: {
        email: data.email,
        password: data.password,
      }
    }).then(response => {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      dispatch(setUser(response.data.user));
    }).catch(error => {
      setErrors({ email: error.response.data})
    })
  }
  return (
    <div className="p-5">
      <Card  className="p-5">
        <Formik
          validationSchema={schema}
          onSubmit={(values, {setSubmitting, setErrors}) => handleSubmit(values, setErrors)}
          initialValues={{
            email: '',
            password: ''
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  isInvalid={touched.email && !!errors.email}
                  onChange={handleChange}
                  value={values.email}
                />
                <Form.Control.Feedback type="invalid">
                  {touched.email ? errors.email : ''}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  isInvalid={touched.password && !!errors.password}
                  onChange={handleChange}
                  value={values.password}
                />
                <Form.Control.Feedback type="invalid">
                  {touched.password ? errors.password : ''}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default SignIn;