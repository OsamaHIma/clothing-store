import { useState } from "react";
import FormInput from "../components/formInput";
import {
  signInUserWithEmailAndPassword,
  signIN,
} from "../utils/firebase/firebase";
import "../scss/singForm.styles.scss";

const defaultProps = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultProps);
  const { email, password } = formFields;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      restFormFields();
    } catch (err) {
      alert(err.code);
    }
  };

  const restFormFields = () => {
    setFormFields(defaultProps);
  };

  const SignInWithGoogle = async () => {
    await signIN();
  };

  // toggle show and hide password

  const toggleIcon = (event) => {
    const passFormInputs = Array.from(
      document.querySelectorAll(".sign-in .pass")
    );
    if (event.target.className === "fa fa-eye float-right") {
      event.target.className = "fa fa-eye-slash float-right";
      passFormInputs.forEach((FormInput) => {
        FormInput.setAttribute("type", "text");
      });
    } else {
      event.target.className = "fa fa-eye float-right";
      passFormInputs.forEach((FormInput) => {
        FormInput.setAttribute("type", "password");
      });
    }
  };

  return (
    <section className="sign-in col-md-6">
      <section className="container">
        <h2 className="mb-4">Have an account?</h2>
        <p>Sign in with Email and Password </p>
        <form onSubmit={submitHandler} className="my-md-4 w-md-75">
          <FormInput
            label="Email"
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="yourEmail@gamil.com"
            required
          />
          <hr />
          <FormInput
            label="Password"
            className="form-control pass"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            minLength={6}
            autoComplete="true"
          />
          <i
            className="fa fa-eye float-right"
            id="togglePass"
            onClick={toggleIcon}
          />
          <hr />
          <button
            type="submit"
            className="btn px-5 py-3 mt-3 submit w-100"
          >
            Sign In
          </button>
          <p className="mb-0 mt-3 text-center">OR Sign in with Google</p>
          <button
            type="button"
            className="btn btn-primary px-3 py-3 my-3 w-100"
            onClick={SignInWithGoogle}
          >
            Sign In with Google
            <i className="fab fa-google ml-3" aria-hidden="true"></i>
          </button>
        </form>
      </section>
    </section>
  );
};

export default SignIn;
