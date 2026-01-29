import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import { Form, Link } from "react-router-dom";
import customFetch  from "../utils/customFetch";


// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    return null;
  } catch (error) {
    return error;
  }
};

const Register = () => {
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
        <FormRow type="password" name="password" defaultValue={"Paul123"} />

        <button type="submit" className="btn btn-block">
          Register
        </button>
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
