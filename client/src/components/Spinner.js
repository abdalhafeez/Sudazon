import { Circles } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="loader-parent">
      <Circles color="#ff7f50" height={100} width={100} />
    </div>
  );
}

export default Spinner;
