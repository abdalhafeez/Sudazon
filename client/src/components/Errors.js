import "./styles/errors.css";
function Errors({ errors }) {
  return (
    <div className="errors">
      {errors &&
        errors?.map((err) => <div className="text-danger mt-1">{err.msg}</div>)}
    </div>
  );
}

export default Errors;
