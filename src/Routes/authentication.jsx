import SignUp from "./singUpForm";

import SignIn from "./singInForm";

const Authentication = () => {
  console.log('auth');
  return (
    <div className="container-fluid px-4">
      <div className="row">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
