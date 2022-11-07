// import { async } from "@firebase/util";
import { useState, useContext } from "react";
import FormInput from "../components/formInput";
import {
  addUserWithEmailAndPassword,
  createUserDocument,
} from "../utils/firebase/firebase";
import { UserContext } from "../context/user.context";

import "../scss/singForm.styles.scss";

const defaultProps = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  console.log("singup1");
  const [formFields, setFormFields] = useState(defaultProps);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log("singup2");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(`Password doesn't match`);
      return;
    }
    try {
      console.log("singup3");
      const { user } = await addUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      const res = await createUserDocument(user, { displayName });
      restFormFields();
    } catch (err) {
      alert(err.code);
    }
  };

  const restFormFields = () => {
    setFormFields(defaultProps);
  };

  const toggleIcon = (event) => {
    const passFormInputs = Array.from(
      document.querySelectorAll(".sign-up .pass")
    );
    if (event.target.className === "fa fa-eye float-end") {
      event.target.className = "fa fa-eye-slash float-end";
      passFormInputs.forEach((FormInput) => {
        FormInput.setAttribute("type", "text");
      });
    } else {
      event.target.className = "fa fa-eye float-end";
      passFormInputs.forEach((FormInput) => {
        FormInput.setAttribute("type", "password");
      });
    }
  };

  return (
    <div className="sign-up col-md-6">
      {console.log("singup4")}
      <h2 className="mb-4">Don't have an account?</h2>
      <p>Sign Up with Email and Password</p>
      <form onSubmit={submitHandler} className="my-md-4 w-md-75">
        <FormInput
          label="Name"
          className="form-control"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          placeholder="Name"
          required
        />
        <hr />

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
        />
        <i
          className="fa fa-eye float-end"
          id="togglePass"
          onClick={toggleIcon}
        />
        <hr />
        <FormInput
          label="Confirm Password"
          className="form-control pass"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          placeholder="Confirm Password"
          required
          minLength={6}
        />
        <hr />
        <button type="submit" className="btn px-5 py-3 text-center text-white bg-dark mt-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
