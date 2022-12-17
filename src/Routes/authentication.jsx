import SignUp from "./singUpForm";

import SignIn from "./singInForm";

const Authentication = () => {
  return (
    <main className="container-fluid px-4">
      <div className="row">
        <SignIn />
        <SignUp />
      </div>
    </main>
  );
};

export default Authentication;
