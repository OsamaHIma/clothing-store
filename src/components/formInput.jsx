import { Fragment } from "react";

const FormInput = ({label, ...otherProps}) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...otherProps} />
    </Fragment>
  );
};

export default FormInput;