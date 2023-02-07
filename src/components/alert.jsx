const Alert = ({ boldText, mainText, type }) => {
    console.log("Alert called")
  return (
    <div
      className={`alert alert-${type} alert-dismissible" role="alert mx-2`}
    >
      <strong>{boldText}</strong> {mainText}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
export default Alert;
