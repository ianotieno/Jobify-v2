
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
import { FormRow ,Logo  } from '../components';
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
  <Logo />
        <h4>register</h4>
        <FormRow type='text' name='name' defaultValue={'Paul'} />
        <FormRow type='text' name='lastname' defaultValue={'Omondi'} labelText={"Last Name"}  />
        <FormRow type='text' name='Location' defaultValue={'Nairobi'} />
        <FormRow type='email' name='email' defaultValue={'paul@gmail.com'} />
        <FormRow type='password' name='password' defaultValue={'Paul123'} />

        <button type='submit' className='btn btn-block'>
          Register
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;