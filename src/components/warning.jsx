const Warning = ({message}) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <i className="fa fa-exclamation-triangle mx-2" aria-hidden="true"></i>
      <strong>{message}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Warning;
