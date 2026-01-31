import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Form,redirect, Link ,useNavigation } from "react-router-dom";
import customFetch  from "../utils/customFetch";
import { toast } from 'react-toastify';
import { FormRow, Logo } from "../components";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function   Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  }

  return (
    
    <Wrapper>
       <Form method='post' className='form'>
       <Logo />
      <h4>Login </h4>
      <FormRow type='email' name='email' defaultValue={'paul@gmail.com'} />
      <FormRow type='password' name='password' defaultValue={'12345678'} />
      <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
       
        <p>
         Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
       </Form>
      
    </Wrapper>
  )
}

export default   Login