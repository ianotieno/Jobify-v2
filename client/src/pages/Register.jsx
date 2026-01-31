import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import { Form,redirect, Link ,useNavigation } from "react-router-dom";
import customFetch  from "../utils/customFetch";
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className="form">
        <Logo />
        <h4>register</h4>
        <FormRow type="text" name="name" defaultValue={"Paul"} />
        <FormRow
          type="text"
          name="lastName"
          defaultValue={"Omondi"}
          labelText={"Last Name"}
        />
        <FormRow type="text" name="location" defaultValue={"Nairobi"} />
        <FormRow type="email" name="email" defaultValue={"paul@gmail.com"} />
        <FormRow type="password" name="password" defaultValue={"12345678"} />

        <SubmitBtn formBtn isSubmitting={isSubmitting} />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
