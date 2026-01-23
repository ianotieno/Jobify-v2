import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow ,Logo  } from '../components';
import { Link } from 'react-router-dom';

function   Login() {
  return (
    <Wrapper>
       <form className='form'>
       <Logo />
      <h4>Login </h4>
      <FormRow type='email' name='email' defaultValue={'paul@gmail.com'} />
      <FormRow type='password' name='password' defaultValue={'Paul123'} />
      <button type='submit' className='btn btn-block'>
         Login
        </button>
        <button type='button' className='btn btn-block'>
         Explore as Guest
        </button>
        <p>
         Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
       </form>
      
    </Wrapper>
  )
}

export default   Login